# magnum-analytics

## Goal
Public marketing site for **Magnum Data Consulting** — a Miami-based data consulting
practice: business intelligence, machine learning and AI, sold as finished work. Bilingual
(ES/EN), single page, published on GitHub Pages at
https://danielregaladoumiami.github.io/magnum-analytics/

The company was called Magnum Analytics until 2026-10-26. The repo name and the Pages URL
still say `magnum-analytics` (renaming the repo would break the URL); the site itself says
Magnum Data Consulting everywhere. If the site is deployed at any other address, update
`<link rel="canonical">` and `og:url` in the `<head>`.

## Stack
- Static HTML/CSS/JS — no build step, no framework, no package manager
- `ds/styles.css` — design-system tokens + component classes. `index.html` uses these
  classes; it carries almost no inline styles (a few one-off `style="margin…"` and the
  chart data in the mocks only).
- Fonts: Manrope (headings 800, text 400–700) + Spectral SemiBold Italic 600 (accent),
  from Google Fonts
- Palette: brand kit v1.0 "Paleta 5" — monochrome and silver on pure white. Tokens at the
  top of `ds/styles.css`; retheme there.
- Hosting: GitHub Pages, served from `main` branch root

There is deliberately no `pyproject.toml`, no `uv`, and no pre-commit here — this repo
has no Python. Do not add them.

## Current milestone
v1.0 — official brand kit and the rename to Magnum Data Consulting (see ROADMAP.md).
v0.3 repositioned Services into three practice areas; v0.2 and v0.1 looks are gone.

## Local rules
- Conventional Commits (feat:, fix:, docs:, refactor:, chore:)
- No `Co-Authored-By` in commits — sole author is Daniel
- Site copy is bilingual; conversation can be Spanish
- **The company is not incorporated yet — do not write "LLC" anywhere on the site.**
- Never commit anything from `uploads/` or any `.docx`/`.xlsx` — this repo is public
  and those are private business documents. `.gitignore` already blocks them.

## Brand (kit v1.0, applied 2026-10)

The official brand kit is Daniel's (`magnum-brand.css`, identity manual, SVG logos). Its
`:root` tokens are copied into `ds/styles.css` **with the same names and values** — the
first `:root` block. Site-only tokens (chart ramp, radius, layout) live in a second block.
If the kit changes, change that first block to match, nothing else.

- **Colour.** White `#ffffff` ground; carbon `#09090b` for headings, primary buttons and
  dark bands; slate `#334155` for body text and accents; silver `#94a3b8` only on dark
  (it fails contrast on white). Green/red (`--metric-*`) only for dashboard deltas and
  alerts. No blue, no coral — those were v0.2.
- **Type.** Manrope 800 with `-0.03em` for headings and the wordmark. Spectral SemiBold
  Italic for exactly two things: the second line of the wordmark, and an `<em>` on the
  one phrase a headline turns on (page h1s, the problem h2, the closing CTA). It renders
  slate on white and silver on dark. Don't spread it to body text.
- **Shape.** Square corners (`--radius: 0`; 2px on buttons and tags), 1px hairlines, and
  the manual's 2px carbon "filete" under section heads (`.section-head`). No pill shapes,
  no soft card shadows (the mocks keep one).
- **Dark bands** (`.band-dark`) are the kit's "hero ejecutivo": the home hero, every page
  intro, the closing CTA and the footer. Text inside goes in an `.on-dark` container;
  white cards and mocks inside a band sit outside it and keep their light styles.
- **Logo.** `assets/logo-isotipo.svg` (carbon + slate, for white),
  `assets/logo-isotipo-oscuro.svg` (white + silver, for dark), `assets/favicon.svg`. The
  wordmark is HTML, not an image: `.magnum-wordmark` = isotipo `<img>` + "Magnum"
  (Manrope 800) + "Data Consulting" (Spectral italic, 0.72em, slate/silver). It steps
  down at 640px and 380px so it fits beside the menu button down to 320px. The link
  carries `aria-label="Magnum Data Consulting"`; the `<img>` is decorative (`alt=""`).

## How the site works

Everything is one document (`index.html`). All four pages ship in the DOM at once and
`app.js` toggles two attributes on `#app`:

- `data-p` — which page shows (`home` / `services` / `work` / `contact`). CSS shows the
  matching `.page[data-page=...]` and hides the rest.
- `data-l` — language (`es` / `en`). Every translated string is two sibling spans:
  `.es`/`.en` for inline text, `.bes`/`.ben` for block-level text. CSS shows one set.

Public URLs are hash fragments and are **kept in Spanish on purpose** because they get
shared: `#inicio`, `#servicios`, `#demo`, `#contacto`. `app.js` maps those to the
internal English page ids; changing a fragment breaks existing links. (The `work` page is
labelled "Ejemplos / Examples" in the nav since v1.0, but its hash stays `#demo`.)

Language preference persists in `localStorage` under `magnum-lang`; with nothing stored
it follows `navigator.language`, defaulting to Spanish.

The current-page underline in the nav is `[data-p="x"] .nav a.n-x`. It needs the
`.nav a` part to outrank `.nav a.nav-link`; v0.2's shorter selector lost and never showed.

## Provenance — this started as a design canvas

`index.html` began as a Claude Design canvas export (`Magnum Website.dc.html`), converted
to static HTML for v0.1, rebuilt with real CSS classes in v0.2 and restyled to the brand
kit in v1.0. The canvas export is still gitignored (`*.dc.html`) and is no longer a useful
base — any new work goes straight into `index.html`.

## The sample mocks are markup, not images

Four mocks, all built from divs, CSS and one inline SVG (the `.mock*` and `.chat`/`.msg`
classes in `ds/styles.css`). No screenshots anywhere.

- Home hero: a retail dashboard. Examples page: one per practice area — 01 BI (sales and
  margin by channel), 02 ML (forecast + retention cohorts), 03 AI (an assistant answering
  from a policy document, citing the page, handing an exception to a person).
- Dashboards use the `--chart-*` slate ramp and `--metric-*` for deltas, so retheming
  retints them.
- The `.bars` chart uses `grid-auto-flow: column` and the `.cohort` grid is a fixed
  `repeat(6, 1fr)` — neither is in `responsive.css`'s column-collapse, on purpose.
  Collapsing them would destroy the chart.
- Every mock is labelled "sample data" / "datos de ejemplo". Keep that label: the numbers
  and conversations are illustrative and the site must not imply real client results.

## Mobile navigation

Below 860px the header collapses to the wordmark plus a menu button, and `.nav` becomes an
absolutely-positioned dropdown. The open state is `data-menu="open"` on `#app`; `app.js`
only flips that attribute and keeps `aria-expanded` in sync, so CSS owns the presentation.
It closes on navigate, Back/Forward, Escape, an outside tap, and on widening past the
breakpoint. The header is solid white (a translucent one turns grey over the dark bands).

## The Services page sells work, not software

Decided 2026-10-19 (Daniel): Magnum sells consulting and execution — we do the task and
hand over the deliverable. We do not sell software for the client to operate. The copy
is organised to say exactly that:

- **Three practice areas, not three packages**: `01 · Business Intelligence`,
  `02 · Machine Learning`, `03 · Inteligencia artificial`. Each is a `.service` block
  (left: what it's for, "Ideal si…", project length; right: the task list).
- **Every task is paired with its deliverable** — the `.task` rows have a `.t` (what we
  do) and `.r` (what you get) column. When adding a task, always write the deliverable
  as a thing the client receives (a list, a report, a live dashboard, an assistant),
  never as a tool or a licence. Below 640px the column header hides and each row gets a
  "Recibes ·" / "You get ·" prefix from CSS `content` in `responsive.css`, switched by
  `[data-l]`.
- ML and AI blocks carry a `.service-note` saying the model/assistant runs on our side.
  Keep it: it is the "no software to maintain" promise in one sentence.
- **Engagement shape is cross-cutting**, in the "Cómo se contrata" strip (fixed-scope
  project / monthly membership / no software to learn) — not baked into each area.
- The home hero states the promise ("Hacemos el trabajo. Tú recibes el resultado.") and
  the "What we do" strip mirrors the same three areas with one sentence each.
- Week counts (2–4, 4–8) are fine; prices are not (see below).

## No prices on the site

Decided 2026-08-30: no figures, no "from $X", no ranges anywhere in the public copy. The
only dollar amounts in `index.html` are the client-revenue qualifier ($500K–$10M) and the
sample numbers inside the dashboard mocks. Do not add a price, and do not suggest one.

The cost FAQ answers with the shape of the deal rather than a number — keep it that way if
you edit it.

## Contact details
Hardcoded in `index.html`, no single source of truth — if they change, update every copy:
- `mailto:` — two addresses, `dxr1491@miami.edu` and `augustoriverof@hotmail.com`. The
  "Email us" CTAs send to both (`mailto:a,b`; the contact-card one also sets a subject
  with the company name); the contact page and footer list them separately. 6 links.
- `wa.me/17867701820` — 3 links (contact card, contact details, footer).

## Where things live
- `index.html` — the entire site (4 pages, one document)
- `app.js` — routing (`#inicio`/`#servicios`/`#demo`/`#contacto`) + ES/EN toggle + mobile
  menu + per-page `<title>` in both languages
- `ds/styles.css` — brand tokens + component classes; retheme via the `:root` tokens
- `responsive.css` — plain media queries (960 / 860 / 640 / 380px)
- `assets/` — `favicon.svg`, `logo-isotipo.svg`, `logo-isotipo-oscuro.svg`; the site ships
  no raster images
- `ROADMAP.md` — what's next
