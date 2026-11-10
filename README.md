# Magnum Data Consulting

Marketing site for Magnum Data Consulting — business intelligence, machine learning and AI
for small and mid-sized businesses, delivered as finished work rather than software.
Remote, in English and Spanish.

**Live:** https://danielregaladoumiami.github.io/magnum-analytics/

Bilingual (Spanish / English), four pages, no build step. The repository keeps its
original `magnum-analytics` name so the URL above keeps working.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://127.0.0.1:8000/. Opening `index.html` directly with `file://` also works,
but a server matches how GitHub Pages serves it.

## Deploy

Any static host works: publish the repository root as-is (there is nothing to build).
On GitHub Pages it is served from the `main` branch root. If it goes live at a different
address, update `<link rel="canonical">` and `og:url` in the `<head>` of `index.html`.

## Structure

| Path | What it is |
|---|---|
| `index.html` | The whole site — all four pages in one document |
| `app.js` | Page routing (`#inicio`, `#servicios`, `#demo`, `#contacto`), the ES/EN toggle and the mobile menu |
| `ds/styles.css` | Brand tokens (from the official brand kit) and component classes |
| `responsive.css` | Media queries (960 / 860 / 640 / 380px) |
| `assets/` | Favicon and the isotipo for light and dark backgrounds |

## The sample deliverables

The hero dashboard and the three examples on the Examples page (a BI dashboard, an ML
at-risk customer list, an AI assistant) are **built in HTML/CSS, not screenshots**. Each is labelled
"sample data" in its header, because the numbers and conversations are illustrative
rather than client work.

To swap one for a real client deliverable later, replace the mock markup in `index.html`
with an `<img>`; nothing else depends on it.

## Brand and retheming

The visual system is the official brand kit v1.0: monochrome and silver on pure white,
Manrope ExtraBold for headings, Spectral SemiBold Italic for accents, and the "M"
isotipo in `assets/`. Its colour and type tokens sit in the first `:root` block of
`ds/styles.css` under the kit's own names (`--text-primary`, `--brand-accent`,
`--bg-dark`, `--font-sans`, …). Changing those values retints or refonts the whole site.

## License

Apache 2.0 — see [LICENSE](LICENSE). The license covers the code; the Magnum name, logo and
brand are not licensed for reuse.
