# Track Hair SEO phase 2: on-page opportunity pages

Last updated: 2026-08-18

## Objective

Phase 2 improves the five non-homepage URLs that already have meaningful Google
impressions. The work prioritizes clearer search snippets, stronger intent match,
useful page structure, and contextual internal links. It does not create or imply
guaranteed ranking or traffic outcomes.

## Baseline and target pages

The baseline is the Google Search Console page export for 2026-05-17 through
2026-08-16. Preserve this date range when interpreting the initial position of
each URL.

| Page | Clicks | Impressions | CTR | Position | Phase 2 focus |
| --- | ---: | ---: | ---: | ---: | --- |
| `/best-hair-loss-tracker-apps/` | 5 | 436 | 1.15% | 12.75 | Current comparison set, clearer criteria, commercial intent |
| `/hair-loss-progress-photos/` | 2 | 344 | 0.58% | Stronger snippet and a repeatable photo checklist |
| `/treatments/` | 0 | 230 | 0.0% | Treatment-selection context and comparison structure |
| `/blog/` | 0 | 141 | 0.0% | Descriptive title, useful hub copy, and topic routes |
| `/hair-loss/` | 0 | 101 | 0.0% | Clear causes/types intent and links to next-step resources |

## Changes implemented

### Best hair loss tracker apps

- Replaced the outdated category framing with a goal-based comparison.
- Added explicit comparison criteria: photo consistency, routine tracking,
  analysis, clinician workflow, privacy, and platform fit.
- Rechecked the competitor set against current official App Store listings.
- Added a choose-by-goal section and retained clear Track Hair disclosure.

### Hair loss progress photos

- Rewrote the title and description around the page's repeatable-photo intent.
- Added a five-step monthly photo checklist covering timing, hair condition,
  lighting, angles, and notes.
- Added a contextual path to the tracker-app comparison.

### Treatments

- Added guidance to establish the cause before selecting a treatment.
- Added a scannable planning table for the site's major treatment categories.
- Improved links to the hair loss overview, progress-photo guide, and app
  comparison.
- Kept prescription and procedure decisions within clinician guidance.

### Blog hub

- Replaced the generic Blog heading and description with search-intent copy.
- Added an introductory topic hub linking to the hair loss overview, treatment
  library, progress-photo guide, and tracker-app comparison.
- Updated the layout so the page's authored introductory content renders above
  the article grid.

### Hair loss overview

- Rewrote the title and description around causes, types, and tracking.
- Added a short intent guide for gradual, diffuse, and sudden changes.
- Added next-step links to treatment information and app comparisons.

## Validation completed

The production build passed on 2026-08-18. Rendered output checks confirmed:

- exactly one H1 on every target page;
- unique titles and canonical URLs for all five target pages;
- meta descriptions between 144 and 152 characters;
- valid JSON-LD on every target page;
- all local links on the target pages resolve in the generated site; and
- the blog hub introduction renders in the production HTML.

The internal `docs` directory remains excluded from the generated site.

## Deployment and indexing checklist

1. Deploy the Phase 2 changes and record the deployment date.
2. Open each target URL in Google Search Console URL Inspection and run a live
   test after deployment.
3. Request indexing for the five target URLs. The sitemap remains the normal
   discovery mechanism; this request simply prompts recrawling of the updates.
4. Confirm the live title, description, canonical, H1, and structured data after
   the production deploy.
5. Confirm GA4 continues receiving `app_store_click` events after the deploy.

## Measurement plan

Do not judge the work from day-to-day movement. Compare the first complete 28
days after deployment with the preceding 28 complete days, then repeat at 56
days. Search Console reporting lag and query suppression still apply.

Track by landing page:

- clicks, impressions, CTR, and average position;
- non-branded queries and changes in query mix;
- mobile and desktop performance separately; and
- consented `app_store_click` key events in GA4.

The most useful early signals are improved CTR on `/hair-loss-progress-photos/`,
first clicks for `/blog/` and `/hair-loss/`, movement toward page one for
`/best-hair-loss-tracker-apps/`, and stronger impressions or position for
`/treatments/`. These are evaluation signals, not forecasts.

## Phase 2 completion gate

Phase 2 is complete when the changes are deployed, the five live URLs pass the
post-deployment checks, recrawling has been requested, and a 28-day comparison is
recorded against the pre-deployment period.
