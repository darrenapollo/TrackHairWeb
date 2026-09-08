# Track Hair SEO phase 6: measurement and iteration

Last updated: 2026-08-19

## Objective

Phase 6 creates a repeatable decision loop connecting Google Search Console,
Bing Webmaster Tools, GA4 landing-page behavior, and App Store outbound clicks.
The goal is to decide what to keep, revise, consolidate, or expand without reacting
to daily ranking noise.

Phase 5 external authority and outreach is intentionally deferred at the site
owner's request.

## Questions this phase answers

1. Which organic landing pages are gaining qualified search visibility?
2. Which queries have enough impressions but weak CTR?
3. Which landing pages generate consented App Store clicks?
4. Does a ranking gain also improve the path to the App Store?
5. Which pages should be consolidated because they compete for one intent?

## Tracking contract

GA4 Measurement ID: `G-QNQD8FL3P2`

| Event or signal | Purpose | Parameters |
| --- | --- | --- |
| `page_view` | Landing-page and content consumption | Automatic page fields plus `content_group` and `page_type` |
| `app_store_click` | Primary website conversion | `link_location`, `link_text`, `link_url`, `page_path`, `page_title`, `page_section`, `page_type` |
| Enhanced measurement | Standard engagement and outbound behavior | GA4-managed fields |

Analytics remains disabled until consent. Advertising storage, ad user data, ad
personalization, Google signals, and ad-personalization signals remain disabled.
No event property may contain names, email addresses, treatment details, photo
information, or other personal data.

## GA4 administration checklist

Complete these one-time actions in GA4 Admin:

1. Mark `app_store_click` as a key event.
2. Register event-scoped custom dimensions for `link_location`, `page_section`,
   and `page_type`.
3. Keep data retention and consent settings documented.
4. Validate one homepage and one article App Store click in DebugView after each
   analytics deployment.
5. Confirm one click produces one event and that rejected consent produces none.

## KPI definitions

| KPI | Source | Calculation | Decision supported |
| --- | --- | --- | --- |
| Organic clicks | Search Console | Reported clicks | Search acquisition trend |
| Organic impressions | Search Console | Reported impressions | Visibility trend |
| Organic CTR | Search Console | Clicks divided by impressions | Snippet effectiveness |
| Average position | Search Console | Reported position, interpreted with query mix | Ranking direction |
| Organic App Store clicks | GA4 | `app_store_click` where session default channel group is Organic Search | Qualified website conversion |
| Organic click-through to App Store | GA4 | Organic App Store clicks divided by organic sessions | Landing-page conversion efficiency |
| CTA placement share | GA4 | App Store clicks grouped by `link_location` | CTA placement decisions |

Do not combine Search Console clicks and GA4 sessions into one conversion rate.
They use different collection methods, attribution rules, consent requirements,
and reporting time zones.

## Reporting cadence

### Weekly operational check

- Indexing changes and sitemap errors
- Search clicks and impressions by landing page
- Sudden tracking loss or duplicate conversion events
- New queries with at least 10 impressions
- Changes to titles, canonicals, redirects, or published URLs

### Every 28 complete days

- Compare with the preceding 28 complete days
- Separate branded and non-branded queries
- Separate mobile and desktop
- Review the five Phase 2 pages individually
- Compare organic landing sessions and App Store key events in GA4
- Record actions, not just metrics

### Quarterly

- Rebuild the keyword ownership map
- Consolidate cannibalizing URLs
- Refresh medically sensitive sources
- Review Core Web Vitals and image transfer
- Decide which draft or content cluster should publish next

## Phase 2 checkpoint

Phase 2 was deployed on 2026-08-18. The first complete post-deployment window is
2026-08-19 through 2026-09-15, reviewed on or after 2026-09-16. Compare it with
2026-07-22 through 2026-08-18.

Freeze the five Phase 2 source pages until that review except for urgent factual,
legal, security, accessibility, or analytics corrections. The Phase 4 homepage
asset work and Phase 6 analytics parameters do not alter their search snippets or
body content.

## Decision rules

- **Impressions up, CTR down:** inspect the new query mix before rewriting the
  snippet; broader visibility can lower aggregate CTR.
- **Position stable, CTR weak:** test title and description only after the current
  measurement window closes.
- **Clicks up, App Store rate down:** review landing-page intent and CTA placement.
- **Two URLs appearing for one intent:** choose one owner, merge useful content,
  and redirect the weaker URL.
- **No meaningful data:** extend the window rather than making a low-confidence
  change.

## Completion gate

Phase 6 is complete as an implementation phase when the new parameters are live,
custom dimensions and the key event are configured, DebugView validation passes,
and the first 28-day report is recorded. Monitoring and iteration then continue
as an ongoing operating process.
