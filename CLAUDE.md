# TrackHair website

Marketing and SEO content site for TrackHair, live at https://track.hair. Jekyll with webpack (started from the "Mobile App Landing Page Template", which is what `README.md` describes), deployed by Netlify from `master`. The app is in `~/Development/GitHub/HairLossTracker`; its `PRODUCT_STATE.md` decides what the site may claim.

## Layout
- Root `*.md` pages: treatment guides (minoxidil, finasteride, spironolactone, PRP, microneedling, red light), scales (Norwood, Ludwig), comparison and quiz pages, `privacy.md`, `terms.md`, `blog.md`.
- `_posts/` blog, `_drafts/`, `_layouts/`, `_includes/`, `_scss/`, `_src/` (JS bundled by webpack), `_data/app.yml` and `_data/strings.yml` (app details and UI strings), `_images/` source images (responsive versions built into `assets/`).
- `llms.txt`, `robots.txt`, `plugins/indexnow` (Netlify plugin that pings search engines after a production deploy).
- `docs/seo/` phased SEO plans and reports, `.agents/product-marketing.md` positioning notes.
- `_site/` and `assets/` are build output (gitignored).

## Commands
- Build: `npm run build` (webpack, then `bundle exec jekyll build`); Netlify runs `npm run build && cp -R assets _site/`.
- Serve the built site: `npx http-server _site -p 8899 -c-1` (the `trackhair-site` config in `../.claude/launch.json`).
- Node 22 LTS (`.nvmrc`, and `NODE_VERSION` in `netlify.toml`); run `nvm use` first. Ruby 3.2.4 (`.ruby-version`, and `RUBY_VERSION` in `netlify.toml`); run `bundle install` once per Ruby install. Sass is compiled by dart `sass`; images are resized by `sharp` and PNGs recompressed by `image-minimizer-webpack-plugin` (JPEGs and SVGs ship as-is).
- A local build's dates show your machine's UTC offset (e.g. `+01:00`); Netlify builds in UTC.

## Rules
- Health copy: informational, never medical advice; never recommend starting, stopping or dosing a medication; cite sources for clinical claims.
- A new page gets a title, meta description and front matter like the existing pages, and is linked from navigation or a hub page so it isn't orphaned.
- No new trackers or dependencies without asking.
- Pushing to `master` deploys to production. Never push without asking.

## Before you say done
- `npm run build` succeeds locally.
- Changed pages checked at phone width (375px) and desktop, with no console errors or broken links.
