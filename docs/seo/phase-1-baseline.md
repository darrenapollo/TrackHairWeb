# Track Hair SEO measurement baseline

Last updated: 2026-08-18

## Purpose

This document is the pre-remediation baseline for the Track Hair SEO plan. Update
the search-performance fields from Google Search Console and Bing Webmaster Tools
before comparing later phases. Keep branded and non-branded queries separate so
product discovery is not hidden by searches for Track Hair itself.

## Confirmed setup

| Item | Status | Evidence or owner note |
| --- | --- | --- |
| Google Search Console property | Complete | Site owner confirmed |
| Bing Webmaster Tools property | Complete | Site owner confirmed |
| Google index presence | Complete | Site owner confirmed |
| Bing index presence | Complete | Site owner confirmed |
| XML sitemap submitted | Complete | Site owner confirmed |
| Sitemap URLs | 25 | Production crawl on 2026-08-18 |
| Sitemap URL responses | 25 returning `200` | Production crawl on 2026-08-18 |
| HTTPS and canonical redirects | Passing | HTTP, `www`, and slash variants tested |

## Technical baseline

The following mobile Lighthouse results were captured against the production
homepage on 2026-08-18. These are lab measurements, not Search Console field data.

| Metric | Baseline |
| --- | ---: |
| Performance | 95 |
| SEO | 100 |
| Best practices | 100 |
| Accessibility | 90 |
| First Contentful Paint | 2.4 s |
| Largest Contentful Paint | 2.4 s |
| Total Blocking Time | 0 ms |
| Cumulative Layout Shift | 0 |
| Transferred page weight | 386 KiB |
| Estimated image-delivery savings | 297 KiB |

## Search performance baseline

Use the same date range for each export. Prefer the previous complete 90 days and
also retain a 16-month export for seasonality once enough history exists.

The supplied exports cover different periods and report different fields. Values
below retain those source periods rather than implying a like-for-like comparison.

| Metric | Google | Bing | Notes |
| --- | ---: | ---: | --- |
| Indexed URLs | 14 of 30 known URLs (46.7%) | Not supplied | Google coverage state on 2026-08-14; export is for all known pages, not sitemap-only |
| Organic clicks | 100 | 0 | Google: 92 days; Bing: 22 days |
| Organic impressions | 4,656 | 47 | Google: 2026-05-17 to 2026-08-16; Bing: 2026-07-26 to 2026-08-16 |
| Organic CTR | 2.15% | 0.0% | Aggregate clicks divided by impressions |
| Average position | 8.47 | Not supplied | Google impression-weighted daily position; Bing export has no position |
| Branded clicks | 2 observed | Not supplied | Google query table exposes only 23 of 100 total clicks |
| Non-branded clicks | 21 observed | Not supplied | Google query table exposes only 23 of 100 total clicks |
| App Store outbound clicks | Configured | Configured | GA4 begins collecting after deployment and visitor consent |

## Received export inventory

| Platform | Export | Source period | Fields received | Limitation |
| --- | --- | --- | --- | --- |
| Google Search Console | `track.hair-Coverage-2026-08-18` | 2026-05-20 to 2026-08-14 | Daily indexed, not-indexed, and impression counts; exclusion reasons | No clicks, CTR, position, queries, pages, or excluded URL examples |
| Google Search Console | `track.hair-Performance-on-Search-2026-08-18` | 2026-05-17 to 2026-08-16 | Daily totals plus queries, pages, countries, devices, and search appearance | Query rows account for only 23 of 100 total clicks; excluded low-volume queries cannot be classified |
| Bing Webmaster Tools | `track.hair_SearchPerformanceOverview_All_8_18_2026.csv` | 2026-07-26 to 2026-08-16 | Daily clicks, impressions, and average CTR | Only 22 days; no position, queries, pages, or index coverage |

The exports end before their 2026-08-18 download date, consistent with reporting
lag. The periods must be preserved on future comparisons.

## Google indexing findings

The latest Google coverage row contains 30 known URLs: 14 indexed and 16 not
indexed. The 16 exclusions reconcile exactly to the issue summary:

| Exclusion reason | Pages | Validation |
| --- | ---: | --- |
| Page with redirect | 2 | Not started |
| Discovered – currently not indexed | 11 | Not started |
| Crawled – currently not indexed | 3 | Not started |

Google indexed coverage increased from 3 of 8 known URLs on 2026-05-22 to 14 of
30 on 2026-08-14. Search impressions were 2,346 in the latest 28 days, versus
1,364 in the preceding 28 days, a 72.0% increase. This increase coincides with
the larger indexed URL set but does not by itself establish causation.

The 11 discovered-but-not-indexed pages are the largest immediate coverage gap.
The export does not identify the affected URLs, so URL examples must be exported
from that issue before deciding whether internal linking, content quality,
canonicalization, or crawl prioritization is the cause. The two redirect URLs may
be expected and should be checked against the intentional redirect map.

## Google search-performance findings

For the 92-day period from 2026-05-17 through 2026-08-16, Google Search Console
reports 100 clicks, 4,656 impressions, a 2.15% CTR, and an impression-weighted
average position of 8.47.

The query export contains 137 visible queries but accounts for only 23 of the 100
total clicks and 846 of the 4,656 total impressions. Google omits some low-volume
query data, so the visible query rows must not be treated as a complete branded
versus non-branded split. Using exact or near-exact brand intent (`track hair` or
`trackhair`), the visible rows contain 2 branded clicks and 21 non-branded clicks;
77 clicks remain unclassified.

The strongest visible non-branded query is `hair tracker`, with 5 clicks from 141
impressions, a 3.55% CTR, and average position 10.62. Other visible commercial
queries are already producing clicks, including `hair growth tracker`, `hair loss
tracking app`, `hair loss tracker`, and `hair tracker app`.

Google reports 78 mobile clicks at 3.41% CTR and average position 5.47, versus 21
desktop clicks at 0.90% CTR and average position 11.48. Desktop visibility and
snippet performance are therefore a larger gap than mobile performance.

The homepage generated 90 of 100 clicks. The clearest non-homepage opportunities
in the supplied page export are:

| Page | Clicks | Impressions | CTR | Position | Initial interpretation |
| --- | ---: | ---: | ---: | ---: | --- |
| `/best-hair-loss-tracker-apps/` | 5 | 436 | 1.15% | 12.75 | Close to page-one visibility; strengthen relevance and internal links |
| `/hair-loss-progress-photos/` | 2 | 344 | 0.58% | 9.36 | Page-one visibility but weak CTR; improve title and description |
| `/treatments/` | 0 | 230 | 0.0% | 20.14 | Needs stronger topical relevance and internal authority |
| `/blog/` | 0 | 141 | 0.0% | 7.93 | Ranking without clicks; snippet and intent need review |
| `/hair-loss/` | 0 | 101 | 0.0% | 9.56 | Page-one visibility without clicks; snippet and intent need review |

## Outstanding exports

Export and retain these files outside the generated site:

1. Bing search results by query: clicks, impressions, CTR, and position.
2. Bing search results by page: clicks, impressions, CTR, and position.
3. Google URL examples for each exclusion reason, especially the 11 discovered
   and 3 crawled URLs that are currently not indexed.
4. Bing index coverage or site explorer totals.
5. Google Core Web Vitals: mobile and desktop URL groups.
6. Google links report: top linked pages and referring domains.
7. Bing search keywords and page traffic for a matching date range.

## Baseline keyword ownership

| Search intent | Owning URL | Notes |
| --- | --- | --- |
| Hair loss tracker app | `/` | Primary commercial page |
| Hair loss overview | `/hair-loss/` | Condition overview and clinician guidance |
| Male pattern baldness tracking | `/male-pattern-baldness/` | Must remain male-specific |
| Female pattern hair loss tracking | `/female-pattern-hair-loss/` | Female-specific workflow |
| Minoxidil routine tracking | `/minoxidil/` | Applications, adherence, and regimen context |
| Minoxidil progress photos | `/blog/how-to-track-minoxidil-progress/` | Photo protocol and review checkpoints |
| Hair loss progress photos | `/hair-loss-progress-photos/` | Treatment-agnostic photo protocol |
| Norwood scale | `/norwood-scale/` | Definitive URL after consolidation |
| Best hair loss tracker apps | `/best-hair-loss-tracker-apps/` | Commercial comparison |
| AI hair scan versus tracking | `/ai-hair-scan-vs-tracking/` | Category comparison |

## Conversion measurement

The primary website conversion is an outbound visit to the Track Hair App Store
listing. The existing GA4 integration uses the following event contract:

| Field | Value |
| --- | --- |
| Event | `app_store_click` |
| Trigger | Click on a link whose URL contains `apps.apple.com` |
| Properties | `link_location`, `link_text`, `link_url`, `page_path`, `page_title` |
| Key event | Mark `app_store_click` as a key event in GA4 |
| PII | None permitted |

GA4 is configured with Measurement ID `G-QNQD8FL3P2` and Basic Consent Mode. The
Google tag remains completely unloaded until a visitor allows analytics. Ad
storage, ad user data, ad personalization, Google signals, and ad-personalization
signals remain disabled. After deployment, validate the event in GA4 DebugView on
the homepage hero, desktop and mobile navigation, final homepage CTA, page
sidebar, post sidebar, and at least one inline article link.
Register `link_location` as an event-scoped custom dimension so CTA placement can
be used directly in GA4 reports.

## Reporting cadence

- Weekly for the first eight weeks: indexing changes, clicks, impressions, CTR,
  query ownership, App Store clicks, and crawl errors.
- Monthly thereafter: non-brand growth, landing-page conversions, Core Web
  Vitals, and referring domains.
- Annotate every deployment that changes URLs, titles, H1s, or substantial copy.

## Phase 1 completion gate

Phase 1 is complete when the outstanding query, page, coverage, Core Web Vitals,
and link exports above are recorded; App Store clicks are being collected; and
one test conversion has been verified without duplicate events or personal data.
