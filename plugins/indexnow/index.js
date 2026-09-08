const fs = require('fs');
const https = require('https');
const path = require('path');
const { execFileSync } = require('child_process');

const PLUGIN_PATH = 'plugins/indexnow/index.js';

function readSitemapUrls(publishDir, host) {
  const sitemapPath = path.join(publishDir, 'sitemap.xml');
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');

  return Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1])
    .map((url) => url.replace(/&amp;/g, '&'))
    .filter((url) => new URL(url).host === host);
}

function gitFileExists(ref, file) {
  try {
    execFileSync('git', ['cat-file', '-e', `${ref}:${file}`], { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function readGitFile(ref, file) {
  try {
    return execFileSync('git', ['show', `${ref}:${file}`], { encoding: 'utf8' });
  } catch (error) {
    return '';
  }
}

function isPageSource(file) {
  if (file === 'index.md') return true;
  if (file.startsWith('_posts/')) return file.endsWith('.md');
  if (file.startsWith('_drafts/') || file.includes('/')) return false;
  if (file === 'README.md' || file === '404.html') return false;
  return file.endsWith('.md') || file.endsWith('.html');
}

function permalinkFromSource(source, file) {
  const frontMatter = source.match(/^---\s*\n([\s\S]*?)\n---/);
  const permalink = frontMatter && frontMatter[1].match(/^permalink:\s*["']?([^"'\s]+)["']?\s*$/m);

  if (permalink) return permalink[1];
  return file === 'index.md' ? '/' : null;
}

function changedUrls(host, currentUrls) {
  const currentRef = process.env.COMMIT_REF;
  const previousRef = process.env.CACHED_COMMIT_REF;

  if (!currentRef || !previousRef || !gitFileExists(previousRef, PLUGIN_PATH)) {
    return currentUrls;
  }

  let changes;
  try {
    changes = execFileSync(
      'git',
      ['diff', '--name-status', '--find-renames', previousRef, currentRef],
      { encoding: 'utf8' },
    ).trim().split('\n').filter(Boolean);
  } catch (error) {
    return currentUrls;
  }

  const sharedRenderingChanged = changes.some((line) => {
    const files = line.split('\t').slice(1);
    return files.some((file) => (
      file === '_config.yml'
      || file.startsWith('_layouts/')
      || file.startsWith('_includes/')
      || file.startsWith('_data/')
    ));
  });

  if (sharedRenderingChanged) return currentUrls;

  const urls = new Set();
  changes.forEach((line) => {
    const parts = line.split('\t');
    const files = parts.slice(1);

    files.filter(isPageSource).forEach((file) => {
      if (fs.existsSync(file)) {
        const currentPath = permalinkFromSource(fs.readFileSync(file, 'utf8'), file);
        if (currentPath) urls.add(new URL(currentPath, `https://${host}`).href);
      }

      const previousPath = permalinkFromSource(readGitFile(previousRef, file), file);
      if (previousPath) urls.add(new URL(previousPath, `https://${host}`).href);
    });
  });

  return Array.from(urls);
}

function submitUrls({ host, key, urls }) {
  const body = JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls,
  });

  return new Promise((resolve, reject) => {
    const request = https.request({
      hostname: 'api.indexnow.org',
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(body),
      },
    }, (response) => {
      response.resume();
      response.on('end', () => {
        if (response.statusCode === 200 || response.statusCode === 202) {
          resolve(response.statusCode);
          return;
        }
        reject(new Error(`IndexNow returned HTTP ${response.statusCode}`));
      });
    });

    request.setTimeout(10000, () => request.destroy(new Error('IndexNow request timed out')));
    request.on('error', reject);
    request.end(body);
  });
}

module.exports = {
  onSuccess: async ({ constants, inputs, utils }) => {
    if (constants.IS_LOCAL || process.env.CONTEXT !== 'production') return;

    const host = String(inputs.host || '').trim();
    const key = String(inputs.key || '').trim();

    try {
      const currentUrls = readSitemapUrls(constants.PUBLISH_DIR, host);
      const urls = changedUrls(host, currentUrls);

      if (urls.length === 0) {
        utils.status.show({ summary: 'No changed page URLs to submit to IndexNow.' });
        return;
      }

      const statusCode = await submitUrls({ host, key, urls });
      utils.status.show({
        summary: `Submitted ${urls.length} changed URL${urls.length === 1 ? '' : 's'} to IndexNow.`,
        text: `IndexNow responded with HTTP ${statusCode}.`,
      });
    } catch (error) {
      console.warn(`IndexNow submission failed: ${error.message}`);
      utils.status.show({
        summary: 'The deploy succeeded, but its IndexNow notification failed.',
        text: error.message,
      });
    }
  },
};
