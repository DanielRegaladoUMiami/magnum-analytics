# magnum-analytics

## Goal
Public marketing site for **Magnum Data Consulting** — a data consulting
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
- Palette: brand kit v1.0 "Paleta 5" — monochrome and silver. Since v2.0 the page ground is
  the kit's carbon, not white. Tokens at the top of `ds/styles.css`; retheme there.
- Hosting: GitHub Pages, served from `main` branch root

There is deliberately no `pyproject.toml`, no `uv`, and no pre-commit here — this repo
has no Python. Do not add them.

## Positioning rules (decided 2026-11-09, Daniel)
- **No location.** The site does not say "Miami" as where we are or who we serve; we work
  remotely for anyone. "University of Miami" stays — it is the degree, not the location.
- **No revenue band.** No "$500K–$10M" or any other client-size figure. "Small and
  mid-sized businesses" is as specific as the copy gets.
- **No addresses or phone number as text.** See Contact details below.
- **Two partners**, not three.
- **Plain copy.** No slogan pairs ("X, not Y." / "Three areas, one team."), no em dashes
  inside sentences, no claims we cannot back yet ("where almost everyone starts").
  "Hacemos el trabajo. Tú recibes el resultado." is the brand promise and stays.

## Current milestone
v2.0 — dark redesign (see ROADMAP.md). Same brand kit colours and type as v1.0, on a
carbon ground with rounded geometry. v1.0 (white ground, square corners), v0.2 and v0.1
looks are gone.

## Design reference (decided 2026-11-12, Daniel)
The v2.0 look takes its visual language from turing.com: dark ground, large display type
with a lot of air, pill buttons, big rounded slabs, soft glow, hairline borders. Daniel's
instruction was explicit: he likes that design but does not want it copied as is, and it
must use Magnum's own colours and fonts. So:
- Take the language, never the pieces. No Turing assets, fonts, copy, section order or
  signature components (their orbit diagram, their coloured news band).
- Colour and type stay the kit's: monochrome + silver, Manrope 800 + Spectral italic.
  Still no blue and no coral.
- The page structure, copy and mocks are Magnum's. When a reference site has a block
  Magnum cannot fill honestly (client logos, big traction numbers), replace it with
  something true (see "Tools strip and facts row") or leave it out.

## Local rules
- Conventional Commits (feat:, fix:, docs:, refactor:, chore:)
- No `Co-Authored-By` in commits — sole author is Daniel
- Site copy is bilingual; conversation can be Spanish
- **The company is not incorporated yet — do not write "LLC" anywhere on the site.**
- Never commit anything from `uploads/` or any `.docx`/`.xlsx` — this repo is public
  and those are private business documents. `.gitignore` already blocks them.

## Brand (kit v1.0 colour and type; v2.0 ground and shape, 2026-11)

The official brand kit is Daniel's (`magnum-brand.css`, identity manual, SVG logos). Its
`:root` tokens are copied into `ds/styles.css` **with the same names and values** — the
first `:root` block. If the kit changes, change that first block to match, nothing else.
The kit files in `~/Desktop/Magnum-GTM/brand-kit/` were not touched by v2.0: the dark
ground and the rounded shape are a site decision, recorded here.

- **Roles, not kit tokens.** Components read the role tokens in the second `:root` block
  (`--fg-strong`, `--fg`, `--fg-muted`, `--accent`, `--surface-0…3`, `--line`,
  `--btn-*`, `--ghost-*`), which default to the dark ground. An `.on-light` scope flips
  them back to the kit's light pairing. Never style a component with `--text-primary`
  and friends directly, or it breaks in one of the two scopes.
- **Colour.** Carbon `#09090b` is the page. Panels step up through `--surface-1…3`.
  Headings are white, body copy is `#cbd5e1` (the kit's slate ramp), labels and the
  accent are silver `#94a3b8`. White is kept for primary buttons, the one light slab on
  the home page (`.slab--light.on-light`, "The problem") and the one inverted card on
  Services (`.card--invert.on-light`). Green/red only for dashboard deltas and alerts,
  through `--metric-up-fg` / `--metric-down-fg`: the kit's own values fail contrast on
  carbon, these are the same hues lightened. No blue, no coral.
- **Type.** Manrope 800 with `-0.03em` for headings and the wordmark. Spectral SemiBold
  Italic for the second line of the wordmark, the one phrase a headline turns on
  (`<em>` in page h1s, the problem h2, the closing CTA), and the step and card numbers.
  Silver on carbon, slate on white. Don't spread it to body text. Display sizes are
  larger than v1.0 (home h1 up to 5.25rem); eyebrows are tracked wide (`0.2em`).
- **Shape.** Rounded: pill buttons, tags and toggles (`--radius-pill`), 20px cards and
  mocks (`--radius`), service and example panels (`--radius-panel`), full-width slabs
  and the footer panel (`--radius-slab`). Hairlines are 1px `--line`. The identity
  manual's square corners and 2px "filete" are gone from the site; do not bring them
  back piecemeal.
- **Surfaces.** A `.slab` is a section drawn as one large rounded panel a hair inside
  the viewport; stacked slabs sit 12px apart. Home uses three: the light "problem"
  slab, "How we work", and the closing CTA. The footer is a panel of the same shape.
  Light comes from radial silver gradients in `::before` layers (hero, page intros,
  CTA), never from images.
- **Hero motif.** `.hero-art` is a row of thirty bars of light rising to the right; the
  last one carries the isotipo's floating block. It is decorative markup
  (`aria-hidden`), each bar's height and entry order set inline as `--h` / `--i`. It is
  Magnum's own motif (a chart, and the logo's "ascenso"), not a copy of anything. It
  fades out to the left under a mask so it never sits bright behind the copy; on
  tablets and phones `responsive.css` narrows and dims it further. Keep it that way:
  the headline and lead must stay AA over it.
- **Logo.** `assets/logo-isotipo-oscuro.svg` (white + silver) is the one in use, in the
  header and the footer. `assets/logo-isotipo.svg` (carbon + slate, for white) is kept
  for light contexts but the dark site does not reference it. `assets/favicon.svg`.
  The wordmark is HTML, not an image: `.magnum-wordmark` = isotipo `<img>` + "Magnum"
  (Manrope 800) + "Data Consulting" (Spectral italic, 0.72em, silver). It steps down at
  640px and 380px so it fits beside the menu button down to 320px. The link carries
  `aria-label="Magnum Data Consulting"`; the `<img>` is decorative (`alt=""`).
- **Motion.** Blocks marked `data-reveal` fade up once when they enter the viewport.
  The hidden starting state exists only under `[data-reveal-on]`, which `app.js` sets
  when it can run the observer and the visitor has not asked for reduced motion. With
  no script or with reduced motion everything is simply visible. Do not hide content
  in CSS without that guard.

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

- Home hero: a retail dashboard, drawn wide under the headline (`.mock--wide`): four
  figures across, then weekly revenue beside new customers by channel (`.mock-split`).
  Below 860px it folds back to two figures per row and the two panels stack.
  Examples page: one per practice area — 01 BI (revenue and
  margin by channel), 02 ML (a board of several weekly predictions — sales, churn, stock-outs, prospects —
  each with a suggested action, `.risk-row`; it stands for predictive modelling in
  general, so do not narrow it to one use case), 03 AI (an assistant answering
  from a policy document, citing the page, handing an exception to a person).
- Dashboards use the `--chart-*` slate ramp and `--metric-*-fg` for deltas, so retheming
  retints them. On the dark ground the ramp runs dim to bright: `--chart-7` is white and
  is the strongest emphasis (v1.0 ran it the other way, ending on carbon).
- The `.bars` chart uses `grid-auto-flow: column` and the `.cohort` grid is a fixed
  `repeat(6, 1fr)` — neither is in `responsive.css`'s column-collapse, on purpose.
  Collapsing them would destroy the chart.
- Each example's text is a short case in a `<dl class="case">`: the situation, what we
  build, what gets decided with it. Written in the present tense and footed "Caso
  ilustrativo" so it never reads as a past client.
- The three area icons (`.card-icon`, home and Services) are miniatures of those same
  deliverables: ascending bars with the isotipo's block, a forecast cone, a cited answer.
  Square, filled, duotone from the chart ramp. Do not swap them for stock outline icons.
- Every mock is labelled "sample data" / "datos de ejemplo". Keep that label: the numbers
  and conversations are illustrative and the site must not imply real client results.

## Tools strip and facts row (home)

Two blocks added in v2.0 where a reference site would show client logos and traction
numbers. Magnum has neither yet, so both state something true instead:

- **Tools strip** (`.tools`): the tools the work is done in, as text. It is headed "We
  work with the tools you already use". It is not a client list: never word it as
  "trusted by", never add third-party logos, and only list tools the practice really
  works in.
- **Facts row** (`.facts`): the shape of the deal as four figures (2–4 weeks to a first
  dashboard, 3 areas, 0 software to learn, a reply in 24 h or less). Every figure is
  already stated in the copy on Services, Contact or the FAQ. If one of those changes,
  change the figure too. No client results, no counts we cannot back, and no prices.

## Navigation and header

The header is wordmark left, page links centred (`.nav-links`), language toggle and the
call button right (`.nav-actions`). It is solid carbon: a translucent one turns grey over
the light slab. Every target in it is at least 44px tall, because a 1024px tablet gets
this desktop layout.

Below 860px the header collapses to the wordmark plus a menu button, and `.nav` becomes an
absolutely-positioned dropdown. The open state is `data-menu="open"` on `#app`; `app.js`
only flips that attribute and keeps `aria-expanded` in sync, so CSS owns the presentation.
It closes on navigate, Back/Forward, Escape, an outside tap, and on widening past the
breakpoint.

The footer panel repeats the three page links next to the two contact links.

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
only dollar amounts in `index.html` are the sample numbers inside the dashboard mocks. Do not add a price, and do not suggest one.

The cost FAQ answers with the shape of the deal rather than a number — keep it that way if
you edit it.

## Contact details
The addresses and the WhatsApp number are **not written in `index.html`** and are never
shown as text. Buttons and footer links carry `data-contact="email"` or
`data-contact="whatsapp"` (optionally `data-subject`), and `app.js` assembles the link on
click from two lists at the top of its contact section, `MAILBOXES` and `WHATSAPP`. To
change who receives messages, edit those lists only. 5 such links: hero, contact card (2),
footer (2). When the business domain and mailbox exist, replace `MAILBOXES` with it.

## Where things live
- `index.html` — the entire site (4 pages, one document)
- `app.js` — routing (`#inicio`/`#servicios`/`#demo`/`#contacto`) + ES/EN toggle + mobile
  menu + per-page `<title>` in both languages
- `app.js` also runs the scroll reveal (`data-reveal`)
- `ds/styles.css` — brand tokens, role tokens + component classes; retheme via the `:root`
  tokens
- `responsive.css` — plain media queries (960 / 860 / 640 / 480 / 380px)
- `assets/` — `favicon.svg`, `logo-isotipo.svg`, `logo-isotipo-oscuro.svg`; the site ships
  no raster images
- `ROADMAP.md` — what's next
