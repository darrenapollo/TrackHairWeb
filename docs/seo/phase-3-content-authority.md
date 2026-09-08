# Track Hair SEO phase 3: content authority and indexing support

Last updated: 2026-08-18

## Objective

Phase 3 builds authority around Track Hair's strongest product-led topic: tracking
hair loss treatments over time. It strengthens contextual links between existing
pages, resolves topic duplication carefully, and prepares new content that answers
search demand without publishing thin or overlapping pages.

## Phase 2 measurement protection

The following Phase 2 source pages remain unchanged until the first 28-day review
on 2026-09-16:

- `/best-hair-loss-tracker-apps/`
- `/hair-loss-progress-photos/`
- `/treatments/`
- `/blog/`
- `/hair-loss/`

New posts remain unpublished during this window because publishing a post would
also change the measured `/blog/` hub. Contextual links may point into the Phase 2
pages without changing their source content.

## Search Console evidence

The 2026-05-17 through 2026-08-16 query export already contains product-aligned
demand beyond the main `hair tracker` query family:

| Query or group | Visible impressions | Current implication |
| --- | ---: | --- |
| `hair growth progress tracking` | 23 | Build a clear treatment-progress workflow |
| `hair loss progress photos` | 23 | Phase 2 page owns the photo-specific intent |
| `hair treatment app` | 7 | Homepage remains the commercial owner |
| `track alopecia` | 5 | Keep tracking language inclusive, but avoid diagnostic claims |
| `how to track hair loss` | 3 | First Phase 3 guide target |
| `hair loss treatment plan` | 4 across visible variants | Address planning as documentation, not medical prescribing |
| `hair journal app` | 1 | Support the treatment-journal positioning naturally |

The export suppresses low-volume query data, so these counts are directional and
not a complete demand estimate.

## Work completed in the first Phase 3 batch

### Contextual internal links

- Linked the finasteride guide to the finasteride-versus-dutasteride comparison
  and the treatment-review checklist.
- Linked the minoxidil guide to its detailed progress workflow, the
  treatment-review checklist, and the shedding guide.
- Linked the female pattern hair loss guide to the shedding guide.
- Linked the Norwood hub to the deeper seven-stage article.
- Linked the About page to the AI-scan-versus-tracking explanation.
- Added reciprocal links between the shedding and treatment-review articles.

These changes strengthen low-inlink content without editing the five Phase 2
source pages.

### First content asset

Created an unpublished draft targeting `how to track hair loss treatment
progress`. The draft provides a six-step tracking system, a reusable record
template, medical boundaries, and authoritative sources. It remains in `_drafts`
until the Phase 2 blog measurement window ends.

## Topic ownership

| Intent | Owning URL | Status |
| --- | --- | --- |
| Hair loss tracker app | `/` | Existing commercial owner |
| Hair loss treatment progress tracking | `/blog/how-to-track-hair-loss-treatment-progress/` | Unpublished draft |
| Hair loss progress photos | `/hair-loss-progress-photos/` | Phase 2 owner; frozen |
| Minoxidil progress tracking | `/blog/how-to-track-minoxidil-progress/` | Existing article |
| Treatment not working | `/blog/hair-treatment-not-working/` | Existing article |
| Hair shedding versus a trend | `/blog/is-hair-shedding-normal/` | Existing article |
| Norwood scale | `/norwood-scale/` | Definitive owner |
| Norwood stages I through VII | `/blog/understanding-norwood-scale/` | Duplicate-depth risk; consolidation queued |

## Norwood consolidation

The site currently has a concise `/norwood-scale/` hub and a deeper
`/blog/understanding-norwood-scale/` article targeting substantially the same
intent. Search Console shows the blog URL at an average position of 75, while the
baseline keyword map names `/norwood-scale/` as the definitive owner.

After the Phase 2 window:

1. Merge the useful stage detail and citations into `/norwood-scale/`.
2. Redirect `/blog/understanding-norwood-scale/` to `/norwood-scale/` with a
   permanent server-side redirect.
3. Remove the old URL from the sitemap and blog feed.
4. Update internal links to the definitive URL.
5. Request recrawling of both URLs and monitor canonical selection.

## Content release sequence

1. **2026-08-18 to 2026-09-15:** strengthen existing clusters, refine drafts,
   obtain any required medical review, and do not publish new blog entries.
2. **2026-09-16:** capture the Phase 2 28-day comparison and inspect the blog
   landing-page result.
3. **After the comparison:** publish the treatment-progress guide if final review
   passes, then link it from relevant existing pages.
4. **Next:** consolidate the Norwood URLs and monitor indexing.
5. **Following release:** select the next article from new Search Console data,
   prioritizing a distinct intent rather than a keyword variation of an existing
   page.

## Validation requirements

Before any Phase 3 asset is published:

- one clear owning URL per search intent;
- unique title, description, H1, and canonical;
- medical claims supported by authoritative sources;
- no diagnostic or guaranteed-regrowth claims;
- at least two relevant contextual internal links into the page;
- no broken internal links;
- valid JSON-LD in rendered output; and
- production build passes.

## Phase 3 completion gate

Phase 3 is complete when the first guide is published and indexed, the Norwood
duplication is consolidated, weak existing articles have multiple contextual
inlinks, and a later Search Console export shows whether the cluster is earning
new impressions and clicks without cannibalizing its owning pages.
