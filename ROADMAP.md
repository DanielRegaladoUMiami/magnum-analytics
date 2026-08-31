# Roadmap — magnum-analytics

## Current milestone: v0.1 — site live

- [x] Convert the design-canvas export into servable static HTML
- [x] Client-side routing + ES/EN toggle
- [x] Real contact details (email + WhatsApp)
- [x] Publish on GitHub Pages
- [x] Responsive layer + 44px touch targets (the export had zero media queries)
- [x] Mobile menu — the wrapped header was eating 22% of the phone screen
- [x] Fill the two empty demo slots (built as HTML/CSS dashboards, not screenshots)

**v0.1 is complete.**

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
- **Blaugrana palette** — decided against 2026-08-30. The site keeps the blue-grey accent
  the design system shipped (`--color-accent: #5980a6`). The "FC Barcelona inspired"
  framing lives in the typography (Barlow Condensed, uppercase, blueprint corner marks),
  not the color. Do not re-raise this.
- **Business email** — decided against 2026-08-30. `dxr1491@miami.edu` stays for now, as
  a deliberate choice rather than an oversight. Worth revisiting only when the address is
  actually close to expiring, or if the practice incorporates.
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
