# SEO Roast Roadmap: track.hair (2026-11-24)

Verdict: crawlers can reach everything, but on phones, where three quarters of your clicks land, the comparison page sent readers to competitors' App Store pages before yours.

Inputs: Search Console export for the last 12 months (335 clicks, 14.1k impressions; mobile 254 clicks), live checks of track.hair, and the local build with today's content changes. No backlink data was available in this session.

## What passed

- robots.txt allows every search and AI crawler and points to the sitemap. Bingbot, GPTBot, OAI-SearchBot, PerplexityBot and ClaudeBot all get a 200.
- Unknown URLs return a real 404. Old Norwood and AMP URLs 301 to the right pages.
- English only, so no locale sprawl or hreflang problems. No programmatic templates.
- Every page has a self-referencing canonical. All content pages are in the sitemap.
- Pages are static HTML, so AI crawlers read the full text without running JavaScript. No prices are published, by policy, and the JSON-LD offer of 0 matches "free to download".
- The homepage shows the App Store badge above the fold at 390x844 and 1366x768.

## Roadmap

| # | Tier | Issue | Revenue impact | Fix | Owner | Status |
|---|---|---|---|---|---|---|
| 1 | REVENUE | On phones, the best-apps comparison (2,754 impressions) linked four competitors' App Store pages before the first Track Hair link, which sat 70% of the way down the page | Readers comparing apps were handed to competitors first | Track Hair row in the table links to the App Store, and Track Hair is linked in the alternatives table | agent | shipped, not deployed |
| 2 | REVENUE | On every article page at phone width, the download card dropped to the very bottom, below FAQs and sources | Mobile readers (76% of clicks) rarely saw a download button | App Store badge under the intro on phones only (`.article-hero__app`, GA4 `page_hero_mobile` / `post_hero_mobile`), hidden on legal pages | agent | shipped, not deployed |
| 3 | REVENUE | /norwood-scale/ ranks 57 to 92 for Norwood searches and wasn't linked from the homepage, only the quiz was | The biggest informational query cluster lands nowhere near page one | Homepage learn card now links the Norwood chart (replacing the blog card, which is in the nav), and the page has stage diagrams | agent | shipped, not deployed |
| 4 | REVENUE | /hair-loss-photo-diary and /best-hair-loss-tracking-app-reviews/ earned Search Console clicks but return 404. They never existed, so AI answers probably invented them | Visitors from those answers hit an error page | 301s in netlify.toml to the progress photos guide and the comparison page | agent | shipped, not deployed |
| 5 | REVENUE | New and retitled pages need recrawling: /myhairline-alternatives/, /online-hair-loss-programs/, /blog/minoxidil-timeline/, /norwood-scale/, /ludwig-scale/ | The 349-impression MyHairline.ai query has no page ranking for it until Google indexes one | After deploy, use URL Inspection and Request indexing in Search Console for each. IndexNow already pings Bing | Darren | next |
| 6 | REVENUE | The older post /blog/how-to-track-minoxidil-progress/ says vellus hairs "should be converting" by month 5 and that the most dramatic changes typically occur at 8 to 12 months, with no source | Uncited clinical claims break the site's own health-copy rule and weaken trust signals on a page that already earns clicks | Rewrote those lines to match the new timeline post, citing MedlinePlus and the US label | agent | shipped, not deployed |
| 7 | COMPOUNDING | Backlink profile unknown. No Ahrefs or DataForSEO data was available in this session | Can't tell whether links are what holds back the comparison and Norwood pages | Pull referring domains for track.hair, trichometrics.com and myhairline.ai, and count clean editorial domains for each | Darren | next |
| 8 | COMPOUNDING | Shared progress images carry a "track.hair" text watermark, but the doctor summary PDF has no link back to the site | Each exported PDF is a missed brand mention in front of a clinician | Add a "Made with Track Hair, track.hair" footer link to `DoctorReportPDFBuilder` | app | roadmap |
| 9 | COMPOUNDING | No real progress photos anywhere on the site, while searches like "minoxidil progress pics" and AI follow-ups like "show me visual examples" ask for them | Image-intent searches go to forums and clinics | Collect consented before-and-after sets from users and add them to the minoxidil timeline and progress photos guide | Darren | roadmap |
| 10 | COMPOUNDING | About 100 one-impression conversational queries ("is there a free one", "which app") show the site is cited in Google AI Mode answers, which drove 22 clicks | The channel is growing but unmeasured | Track citations in ChatGPT, Perplexity and AI Overviews for "hair loss tracker app" and "myhairline.ai alternatives" monthly | Darren | roadmap |

## Fluff (ignore until rows above ship)

- Every page uses the same default OG share image.
- India drives 2,167 impressions with some Hindi queries. The site is English only.
