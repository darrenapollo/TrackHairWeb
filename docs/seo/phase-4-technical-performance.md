# Track Hair SEO phase 4: technical performance

Last updated: 2026-08-19

## Objective

Phase 4 reduces avoidable image transfer on the homepage while preserving image
quality, layout dimensions, crawlability, and the existing Phase 2 search
measurement. It does not change the titles, descriptions, headings, or body copy
of the five Phase 2 pages.

## Baseline

The Phase 1 mobile Lighthouse run on 2026-08-18 scored 95 for performance and
reported approximately 297 KiB of potential image-delivery savings. The homepage
was serving 720-pixel screenshots into rendered slots around 210 to 288 pixels
wide, while the 1024-pixel app icon was used at 40 by 40 pixels in navigation.

## Changes implemented

- Added a reproducible responsive-image build step using Sharp.
- Generated 360-pixel and 720-pixel WebP variants for all five screenshots.
- Added responsive `srcset` and `sizes` markup with the original JPEG as a
  fallback.
- Preloaded the responsive hero WebP only on the homepage.
- Kept explicit image dimensions to prevent layout shift.
- Added asynchronous image decoding and retained lazy loading below the fold.
- Replaced the navigation's 1024-pixel source with a purpose-built 80-pixel PNG.
- Updated normal, development, and PWA builds to regenerate responsive assets.

## Static transfer comparison

| Asset group | Previous source bytes | New likely source bytes | Reduction |
| --- | ---: | ---: | ---: |
| Five screenshot rail images | 854,510 | 111,560 using 360px WebP | 86.9% |
| Navigation app icon | 356,392 | 4,344 | 98.8% |

The browser may select a 720-pixel WebP on high-density displays, so actual
transfer varies by viewport and device pixel ratio. These figures are source-file
comparisons, not post-deployment field data.

## Deployment validation

After deployment:

1. Confirm the homepage hero selects a WebP resource in browser developer tools.
2. Confirm the screenshot rail loads lazily and opens the 720-pixel WebP.
3. Run mobile PageSpeed Insights against the live homepage three times and record
   the median result.
4. Compare LCP, transferred bytes, and image-delivery savings with the Phase 1
   baseline.
5. Check Search Console Core Web Vitals after enough field data accumulates.

## Completion gate

Phase 4 is complete when the assets are deployed, live resource selection is
verified on mobile and desktop, no visual regression is present, and a new median
mobile Lighthouse measurement is recorded.
