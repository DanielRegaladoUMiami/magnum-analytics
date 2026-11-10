# Roadmap — Magnum Data Consulting (repo: magnum-analytics)

## Current milestone: v1.0 — official brand kit + rename to Magnum Data Consulting

Driven by Daniel, Oct 2026. The brand kit (Paleta 5 monochrome & silver, Manrope 800 +
Spectral SemiBold Italic, the "M Imperial con Ascenso" isotipo) replaced the v0.2 look,
and the company was renamed from Magnum Analytics to Magnum Data Consulting.

- [x] Kit tokens copied into `ds/styles.css` with the kit's own names and values; every
  component restyled to them (square corners, hairlines, 2px carbon section rules)
- [x] Isotipo, dark isotipo and favicon in `assets/`; HTML wordmark "Magnum" + "Data
  Consulting" in the header and footer, sized to fit beside the menu button down to 320px
- [x] Dark "hero ejecutivo" bands: home hero, every page intro, closing CTA, footer
- [x] Home hero leads with the promise: "Hacemos el trabajo. Tú recibes el resultado."
- [x] Rename everywhere: titles in both languages, meta/OG, wordmark, footer, the email
  subject line, docs. Repo slug and Pages URL keep `magnum-analytics`
- [x] Brand descriptor (was "Business Intelligence · Miami"): now "BI · Machine Learning
  · IA" in the hero eyebrow, titles and footer
- [x] Demo page → "Ejemplos / Examples": one sample deliverable per area, including a new
  AI mock (assistant answering from a policy document, citing the page, handing an
  exception to a person). Hash stays `#demo`
- [x] Fixes found in review: the nav's current-page underline never showed (selector
  specificity, since v0.2); Back/Forward left the mobile menu open; the translucent
  header turned grey over dark bands
- [x] Verified: 4 pages × ES/EN × 320/360/390/820/1024/1440px — no console errors, no
  failed requests, no horizontal overflow, every text element passes WCAG AA contrast

## v0.3 — services repositioned (BI / ML / AI) — complete

Driven by Daniel, Oct 2026. The offer is consulting + execution: we do the task and
deliver the result; we do not sell software for the client to run. The site had been
organised by package (Starter / Membership / Premium) and the home strip listed only BI
work.

- [x] Services page rebuilt around three practice areas: Business Intelligence, Machine
  Learning, Inteligencia artificial — each a "what we do → what you get" task list
- [x] H1 + lead state the thesis outright ("Hacemos el trabajo. Tú recibes el resultado.")
- [x] Engagement shape moved to a cross-cutting strip (fixed-scope project / monthly
  membership / no software to learn)
- [x] Home "What we do" strip mirrors the three areas; links to Services
- [x] Cost FAQ generalised to all three areas; new FAQ "¿Tengo que comprar o aprender
  algún software?"
- [x] Meta / OG descriptions name the three areas
- [x] Brand descriptor and a third (AI) example — both done in v1.0

## v0.2 — redesign (clarity + warmth) — complete

Driven by Augusto (site co-owner), Sep 2026. Two problems with v0.1: the site did not
say plainly *what we do*, and the ES/EN copy had drifted apart; and the cold-grey +
monospace + all-caps "blueprint" look "felt like a terminal, not a website".

- [x] Rebuild `index.html` with real CSS classes (was 100% inline styles from the canvas export)
- [x] Warm light palette — off-white ground, vivid blue primary, warm coral accent, green deltas
- [x] Type: Fraunces (display, sentence case) + Inter (text/UI); dropped Barlow Condensed and all monospace
- [x] Dropped the `.blueprint` frame + corner marks; cards are white with a soft shadow
- [x] New "What we do" strip on the home page — three plain sentences
- [x] ES and EN aligned across every section (English was the reference); filled the missing EN paragraph in "The problem"
- [x] De-jargoned Services + Demo copy ("unit economics", "cohorts" → plain language)
- [x] `responsive.css` rewritten as plain media queries on classes
- [x] Added `augustoriverof@hotmail.com` alongside the existing contact email + WhatsApp

**v0.1 (complete):** canvas export → servable HTML · client-side routing + ES/EN toggle ·
real contact details · GitHub Pages · responsive layer + 44px touch targets · mobile menu ·
two HTML/CSS demo dashboards.

## v1.1 — positioning and plain copy — complete (2026-11-09)

Driven by Daniel. See "Positioning rules" in CLAUDE.md.

- [x] Removed Miami as a location and the $500K–$10M band everywhere (titles, meta, hero,
  footer, contact, the case-study profile list)
- [x] Hero lead reworded: we take the data you already have and build the solution around it
- [x] Area icons redrawn as miniatures of the deliverables, in the isotipo's geometry
- [x] Emails and phone number no longer appear as text or in the HTML; buttons build the
  link on click (`app.js`)
- [x] Examples rewritten as short illustrative cases; the ML example is now the weekly
  at-risk customer list; the BI mock shows margin next to revenue per channel
- [x] Copy pass for machine-sounding lines (slogan pairs, em dashes, unbacked claims)
- [x] "Three partners" → "Two partners"

## Next up

- **Custom domain.** Register one that matches the new name and point it at the host
  (for Pages: a `CNAME` file and a DNS record). Then update `canonical` and `og:url`.
  Do this before the URL is shared widely.
- **"Quiénes somos".** The site says "three partners with a Business Analytics master's"
  and nothing more. Names, a photo and one line per partner is the cheapest trust there
  is for this audience. Needs the material from the partners; do not invent it.
- **Horizontal logo files with the new name.** The kit's `logo-horizontal-*.svg` say
  "Magnum Analytics". Regenerate them with "Data Consulting", text converted to outlines
  so they render without the fonts installed.
- **Social share image.** There is no `og:image`, so links shared on WhatsApp/LinkedIn
  show no picture. Needs a 1200×630 raster, the first in a repo that ships none.
- **Real device testing.** The layout is verified at 320–1440px in a desktop browser,
  but has not been opened on an actual iOS or Android handset.
- **Real proof.** The Examples page shows three credible sample deliverables. The first
  real client case study replaces one of them.
- **Contact form** once there is somewhere to receive submissions. GitHub Pages cannot
  process forms; this would need Formspree or similar. Deliberately deferred — the site
  currently uses direct mailto + WhatsApp links instead.

## Deferred / decided against

- **Contact form on launch** — rejected for v0.1. A static host cannot process
  submissions, and a form that silently drops messages is worse than a mailto link.
- **`LLC` in the site copy** — removed everywhere. The company is not incorporated yet;
  do not reintroduce it until it is.
- **Keep the v0.1 "blueprint" look** — reversed 2026-09 by Augusto. The cold blue-grey
  accent, monospace labels, corner marks and all-caps Barlow Condensed were the redesign's
  starting point, not a constraint. (The earlier 2026-08-30 note to keep them no longer
  applies.)
- **Business email** — `dxr1491@miami.edu` and `augustoriverof@hotmail.com` are both
  listed as of 2026-09. Still worth a dedicated domain address if the practice incorporates.
- **Prices on the site** — decided against 2026-08-30. No figures, no "starting from", no
  ranges. The cost FAQ commits to the *shape* instead (fixed scope, 2–4 weeks, agreed
  before starting, never hourly), which is the strongest answer available without a
  number. Qualification is carried by the audience line in the hero ($500K–$10M
  businesses in Miami) and the profile list on the Examples page. Do not re-raise this.
- **The v0.2 look** (warm off-white, blue + coral, Fraunces + Inter) — replaced 2026-10 by
  the official brand kit. Do not reintroduce blue or coral.

## Done

- Repo created (public, Apache 2.0)
- Canvas export converted: `<sc-if>` → sections, `style-hover` → CSS, `<image-slot>` →
  HTML/CSS dashboard mocks, template variables → real handlers
- Private business documents excluded from the repo via `.gitignore`
