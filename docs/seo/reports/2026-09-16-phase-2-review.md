# Track Hair SEO 28-day review

Review date: 2026-09-16 or later  
Post-deployment period: 2026-08-19 to 2026-09-15  
Comparison period: 2026-07-22 to 2026-08-18

## Data quality checks

- [ ] Both Search Console periods contain 28 complete days.
- [ ] Search type and country filters match.
- [ ] Mobile and desktop exports are retained separately.
- [ ] GA4 consented traffic is present throughout the comparison period. **Cannot be met.** See the reporting gap in Notes: GA4 began collecting at the Phase 2 deployment, so the comparison period has no GA4 data at all.
- [x] `app_store_click` is configured as a key event. Confirmed by the site owner on 2026-09-08.
- [ ] No deployment changed the five Phase 2 source pages during the window.

## Site-wide organic performance

| Metric | Comparison period | Post-deployment period | Change | Interpretation |
| --- | ---: | ---: | ---: | --- |
| Clicks |  |  |  |  |
| Impressions |  |  |  |  |
| CTR |  |  |  |  |
| Average position |  |  |  |  |

## Phase 2 landing pages

| Landing page | Clicks before / after | Impressions before / after | CTR before / after | Position before / after | Action |
| --- | --- | --- | --- | --- | --- |
| `/best-hair-loss-tracker-apps/` |  |  |  |  |  |
| `/hair-loss-progress-photos/` |  |  |  |  |  |
| `/treatments/` |  |  |  |  |  |
| `/blog/` |  |  |  |  |  |
| `/hair-loss/` |  |  |  |  |  |

## Device comparison

| Device | Clicks | Impressions | CTR | Position | Change from prior period |
| --- | ---: | ---: | ---: | ---: | --- |
| Mobile |  |  |  |  |  |
| Desktop |  |  |  |  |  |
| Tablet |  |  |  |  |  |

## Conversion quality

There is no GA4 comparison period. Record the post-deployment figures as the first
baseline and leave the comparison and change columns as `n/a` for this cycle. The
first genuine before/after on these metrics is the next review.

| GA4 metric | Comparison period | Post-deployment period | Change | Interpretation |
| --- | ---: | ---: | ---: | --- |
| Organic sessions | n/a |  | n/a | First baseline |
| Organic `app_store_click` events | n/a |  | n/a | First baseline |
| Organic App Store click-through rate | n/a |  | n/a | First baseline |

## Query findings

### New non-branded opportunities

| Query | Clicks | Impressions | CTR | Position | Owning URL | Action |
| --- | ---: | ---: | ---: | ---: | --- | --- |
|  |  |  |  |  |  |  |

### Possible cannibalization

| Intent | Competing URLs | Evidence | Chosen owner | Action |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Decisions

Record no more than three actions for the next cycle:

1. 
2. 
3. 

## Notes

Record deployments, indexing lag, Google updates, reporting gaps, or other context
that could affect interpretation.

### Reporting gap: no GA4 comparison baseline

GA4 was not collecting during the comparison period. `docs/seo/phase-1-baseline.md`
records App Store outbound clicks as "Configured" with the note that "GA4 begins
collecting after deployment and visitor consent", and the baseline is dated
2026-08-18 — the day before the post-deployment period opens. Every GA4 figure in
this review is therefore a first reading, not a change.

Two consequences when interpreting it:

- Search Console covers both periods and is the only source that can show a real
  before/after this cycle. Base the decisions on it.
- GA4 counts consenting visitors only, so its session and event totals are a
  subset of real traffic rather than a measure of it. The ratio between GA4
  metrics is comparable over time; the absolute numbers are not comparable with
  Search Console clicks.

### Source-page freeze

Verified on 2026-09-08 against `6ce21f9`: the rendered text of all five Phase 2
source pages is byte-identical between master and the SEO branch. The branch adds
only a `campaign_token` front-matter key to four of them and an App Store campaign
query string to one outbound link on `/best-hair-loss-tracker-apps/`, neither of
which changes page content. The five pages also still pass the Phase 2 validation
criteria: one H1 each, meta descriptions of 145, 150, 152, 144 and 146 characters,
unique titles and canonicals, valid JSON-LD, and no broken local links.
