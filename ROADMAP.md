# Roadmap — magnum-analytics

## Current milestone: v0.1 — site live

- [x] Convert the design-canvas export into servable static HTML
- [x] Client-side routing + ES/EN toggle
- [x] Real contact details (email + WhatsApp)
- [x] Publish on GitHub Pages
- [x] Responsive layer + 44px touch targets (the export had zero media queries)
- [x] Fill the two empty demo slots (built as HTML/CSS dashboards, not screenshots)
- [ ] Replace the `@miami.edu` address with a business email

## Next up

- **Decide the brand palette.** The exported design system ships a blue-grey accent
  (`--color-accent: #5980a6`). If the intended look is blaugrana, retune the accent ramp
  in `ds/styles.css` — it is a token change, not a rewrite.
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

## Done

- Repo created (public, Apache 2.0)
- Canvas export converted: `<sc-if>` → sections, `style-hover` → CSS, `<image-slot>` →
  `.img-slot` with fallback, template variables → real handlers
- Private business documents excluded from the repo via `.gitignore`
