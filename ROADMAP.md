# Roadmap — magnum-analytics

## Current milestone: v0.2 — redesign (clarity + warmth)

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

## Next up

- **Custom domain.** Point `magnum-bi.com` (or whichever domain is registered) at Pages
  via a `CNAME` file and a DNS record. Do this before the URL is shared widely.
- **Real device testing.** The layout is verified at 360/390/768/1024/1440/1920px in a
  desktop browser, but has not been opened on an actual iOS or Android handset.
- **Real proof.** The Demo page now shows three credible dashboards, but they are all
  sample data. The first real client case study replaces one of them.
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
  businesses in Miami) and the profile list on the Demo page. Do not re-raise this.

## Done

- Repo created (public, Apache 2.0)
- Canvas export converted: `<sc-if>` → sections, `style-hover` → CSS, `<image-slot>` →
  HTML/CSS dashboard mocks, template variables → real handlers
- Private business documents excluded from the repo via `.gitignore`
