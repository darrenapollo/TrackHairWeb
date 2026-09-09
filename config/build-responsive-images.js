/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const sharp = require('sharp');

const imageRoot = path.resolve('_images');
const screenshotRoot = path.join(imageRoot, 'screenshots');
const screenshotIds = ['1', '2', '3', '4', '5'];

// Raw device frames live in _screenshots_src/ so the full-resolution PNGs stay
// out of the deploy. Only the resized WebP frames below are published.
const bezelSourceRoot = path.resolve('_screenshots_src', 'bezels');
const bezelRoot = path.join(imageRoot, 'bezels');
const bezelIds = ['iphone-17-pro-max-portrait'];

async function buildScreenshot(id, width, quality) {
  const input = path.join(screenshotRoot, `${id}.jpg`);
  const output = path.join(screenshotRoot, `${id}-${width}.webp`);

  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, smartSubsample: true })
    .toFile(output);
}

async function buildBezel(id, width, quality) {
  const input = path.join(bezelSourceRoot, `${id}.png`);
  const output = path.join(bezelRoot, `${id}-${width}.webp`);

  // The frame is an alpha cutout laid over the screenshot, so the screen
  // aperture has to stay fully transparent after resizing.
  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, alphaQuality: 100 })
    .toFile(output);
}

async function buildNavigationIcon() {
  await sharp(path.join(imageRoot, 'THAppIcon.png'))
    .resize({ width: 80, height: 80, fit: 'cover' })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(imageRoot, 'THAppIcon-80.png'));
}

async function main() {
  await Promise.all([
    ...screenshotIds.flatMap((id) => [
      buildScreenshot(id, 360, 78),
      buildScreenshot(id, 720, 82),
    ]),
    ...bezelIds.flatMap((id) => [
      buildBezel(id, 360, 88),
      buildBezel(id, 720, 88),
    ]),
    buildNavigationIcon(),
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
