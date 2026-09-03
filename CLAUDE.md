# magnum-analytics

## Goal
Public marketing site for Magnum Analytics — a Miami-based business intelligence and
data analytics practice. Bilingual (ES/EN), single page, published on GitHub Pages at
https://danielregaladoumiami.github.io/magnum-analytics/

## Stack
- Static HTML/CSS/JS — no build step, no framework, no package manager
- `ds/styles.css` — design-system tokens + component classes. `index.html` uses these
  classes; it carries almost no inline styles (a few one-off `style="margin…"` only).
- Fonts: Fraunces (display, sentence case) + Inter (text/UI), from Google Fonts
- Palette (v0.2): warm off-white ground, vivid blue `--brand: #2563eb`, warm coral
  `--accent: #ea6a3a`, green/red for dashboard deltas. All tokens at the top of
  `ds/styles.css`; retheme there.
- Hosting: GitHub Pages, served from `main` branch root

There is deliberately no `pyproject.toml`, no `uv`, and no pre-commit here — this repo
has no Python. Do not add them.

## Current milestone
v0.2 — redesign for clarity + warmth (see ROADMAP.md). The v0.1 "blueprint" look
(cold greys, monospace labels, corner marks, all-caps Barlow Condensed) was replaced.

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

`index.html` began as a Claude Design canvas export (`Magnum Website.dc.html`), converted
to static HTML for v0.1. The v0.2 redesign rebuilt it from scratch with real CSS classes,
so the old canvas artifacts (`.hv1`–`.hv4` hover classes, `.blueprint`/`.corner` marks,
inline styles on every element) are gone. The canvas export is still gitignored
(`*.dc.html`) and is no longer a useful base — any new work goes straight into `index.html`.

## The demo dashboards are markup, not images

All three dashboards — the hero mock and the two on the Demo page — are built from divs,
CSS and one inline SVG (the `.mock*` classes in `ds/styles.css`). No screenshots anywhere.

- They use the `--chart-*` blue ramp and `--pos`/`--neg` for deltas, so retheming retints them.
- The `.bars` chart uses `grid-auto-flow: column` and the `.cohort` grid is a fixed
  `repeat(6, 1fr)` — neither is in `responsive.css`'s column-collapse, on purpose.
  Collapsing them would destroy the chart.
- Every mock is labelled "sample data" / "datos de ejemplo". Keep that label: the numbers
  are illustrative and the site must not imply real client results.

## Mobile navigation

Below 860px the header collapses to a wordmark plus a menu button, and `.nav` becomes an
absolutely-positioned dropdown. The open state is `data-menu="open"` on `#app`; `app.js`
only flips that attribute and keeps `aria-expanded` in sync, so CSS owns the presentation.
It closes on navigate, Escape, an outside tap, and on widening past the breakpoint. The
v0.1 `!important` cascade traps are gone now that the markup has no inline styles.

## No prices on the site

Decided 2026-08-30: no figures, no "from $X", no ranges anywhere in the public copy. The
only dollar amounts in `index.html` are the client-revenue qualifier ($500K–$10M) and the
sample numbers inside the dashboard mocks. Do not add a price, and do not suggest one.

The cost FAQ answers with the shape of the deal rather than a number — keep it that way if
you edit it.

## Contact details
Hardcoded in `index.html`, no single source of truth — if they change, update every copy:
- `mailto:` — two addresses, `dxr1491@miami.edu` and `augustoriverof@hotmail.com`. The
  "Email us" CTAs send to both (`mailto:a,b`); the contact page and footer list them
  separately. ~6 links total.
- `wa.me/17867701820` — 2 links.

## Where things live
- `index.html` — the entire site (4 pages, one document)
- `app.js` — routing (`#inicio`/`#servicios`/`#demo`/`#contacto`) + ES/EN toggle + mobile menu
- `ds/styles.css` — design tokens + component classes; retheme via the `:root` tokens
- `responsive.css` — plain media queries (960 / 860 / 640px)
- `assets/` — `favicon.svg` only; the site ships no raster images
- `ROADMAP.md` — what's next
