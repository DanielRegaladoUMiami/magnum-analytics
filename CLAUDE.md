# magnum-analytics

## Goal
Public marketing site for Magnum Analytics — a Miami-based business intelligence and
data analytics practice. Bilingual (ES/EN), single page, published on GitHub Pages at
https://danielregaladoumiami.github.io/magnum-analytics/

## Stack
- Static HTML/CSS/JS — no build step, no framework, no package manager
- `ds/styles.css` — design-system tokens and component classes (the "Industry" system)
- Fonts: Barlow + Barlow Condensed from Google Fonts
- Hosting: GitHub Pages, served from `main` branch root

There is deliberately no `pyproject.toml`, no `uv`, and no pre-commit here — this repo
has no Python. Do not add them.

## Current milestone
v0.1 — site live on GitHub Pages

## Local rules
- Conventional Commits (feat:, fix:, docs:, refactor:, chore:)
- No `Co-Authored-By` in commits — sole author is Daniel
- Site copy is bilingual; conversation can be Spanish
- **The company is not incorporated yet — do not write "LLC" anywhere on the site.**
- Never commit anything from `uploads/` or any `.docx`/`.xlsx` — this repo is public
  and those are private business documents. `.gitignore` already blocks them.

## How the site works

Everything is one document (`index.html`). All four pages ship in the DOM at once and
`app.js` toggles two attributes on `#app`:

- `data-p` — which page shows (`home` / `services` / `work` / `contact`). CSS in the
  `<head>` shows the matching `.page[data-page=...]` and hides the rest.
- `data-l` — language (`es` / `en`). Every translated string is two sibling spans:
  `.es`/`.en` for inline text, `.bes`/`.ben` for block-level text. CSS shows one set.

Public URLs are hash fragments and are **kept in Spanish on purpose** because they get
shared: `#inicio`, `#servicios`, `#demo`, `#contacto`. `app.js` maps those to the
internal English page ids; changing a fragment breaks existing links.

Language preference persists in `localStorage` under `magnum-lang`; with nothing stored
it follows `navigator.language`, defaulting to Spanish.

## Provenance — this started as a design canvas

`index.html` was converted from a Claude Design canvas export (`Magnum Website.dc.html`).
That format is NOT servable: it used `<x-dc>`, `<helmet>`, `<sc-if>` blocks, `{{ var }}`
template holes, `style-hover` attributes, and `<image-slot>` elements, all of which need
a canvas runtime. The conversion replaced each with a static equivalent — `<sc-if>` became
`<section class="page">`, `style-hover` became real `:hover` CSS rules (`.hv1`–`.hv4`),
`<image-slot>` became HTML/CSS dashboard mocks (see below).

**If you re-export from the design tool, do not overwrite `index.html` directly** — it
would reintroduce canvas markup that browsers cannot render. Re-run the conversion, or
port the specific changes by hand. The canvas export is gitignored (`*.dc.html`).

## The demo dashboards are markup, not images

All three dashboards on the site — the hero mock and the two on the Demo page — are built
from divs, CSS and one inline SVG. There are no screenshots anywhere. Consequences:

- They inherit `--color-accent`, so retheming the design system retints them too.
- The two Demo cards are height-matched by flex (`column: flex` + `card: flex 1`), not by
  a fixed height. Adding content to one card grows both.
- The bar-chart grid `repeat(14, 1fr)` and the cohort grid `repeat(6, 1fr)` are excluded
  from the responsive column-collapse in `responsive.css` on purpose — collapsing them
  would destroy the chart. Do not add them to those selectors.
- Every mock is labelled "sample data" / "datos de ejemplo". Keep that label: the numbers
  are illustrative and the site must not imply real client results.

## Mobile navigation

Below 860px the header collapses to a wordmark plus a menu button, and the nav
becomes a dropdown. The open state is `data-menu="open"` on `#app`; `app.js` only
flips that attribute and keeps `aria-expanded` in sync, so CSS owns the presentation.
It closes on navigate, Escape, an outside tap, and on widening past the breakpoint.

Two cascade traps to know before editing header styles — both are why `!important`
appears there, and both are commented in `responsive.css`:

1. The inline `<style>` block in `index.html` is parsed **after** `responsive.css`,
   so a plain rule in the stylesheet loses to it.
2. The `<nav>` carries `display: flex` as an inline **attribute**, which outranks
   any stylesheet rule regardless of file order.

## No prices on the site

Decided 2026-08-30: no figures, no "from $X", no ranges anywhere in the public copy. The
only dollar amounts in `index.html` are the client-revenue qualifier ($500K–$10M) and the
sample numbers inside the dashboard mocks. Do not add a price, and do not suggest one.

The cost FAQ answers with the shape of the deal rather than a number — keep it that way if
you edit it.

## Contact details
Email and WhatsApp are hardcoded in `index.html` (4 `mailto:` + 2 `wa.me` links). If they
change, update all of them — there is no single source of truth for them yet.

## Where things live
- `index.html` — the entire site
- `app.js` — routing + language toggle
- `ds/styles.css` — design tokens; change `--color-accent` here to retheme
- `assets/` — `favicon.svg` only; the site ships no raster images
- `ROADMAP.md` — what's next
