# Magnum Analytics

Marketing site for Magnum Analytics — business intelligence and data analytics for small
and mid-sized businesses. Miami, Florida; remote across the US and LatAm.

**Live:** https://danielregaladoumiami.github.io/magnum-analytics/

Bilingual (Spanish / English), four pages, no build step.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://127.0.0.1:8000/. Opening `index.html` directly with `file://` also works,
but a server matches how GitHub Pages serves it.

## Structure

| Path | What it is |
|---|---|
| `index.html` | The whole site — all four pages in one document |
| `app.js` | Page routing (`#inicio`, `#servicios`, `#demo`, `#contacto`) and the ES/EN toggle |
| `ds/styles.css` | Design-system tokens and component classes |
| `responsive.css` | Media queries (960 / 860 / 640px) |
| `assets/` | Favicon |

## The demo dashboards

The two dashboards on the Demo page are **built in HTML/CSS, not screenshots** — same
technique as the hero mock on the home page. Each is labelled "sample data" in its header,
because the numbers are illustrative rather than client work.

To swap one for a real client dashboard later, replace the mock markup in `index.html`
with an `<img>`; nothing else depends on it.

## Retheming

Colors and type come from CSS custom properties in `:root` at the top of `ds/styles.css`
— `--brand` / `--accent` drive buttons, links and highlights, `--font-display` /
`--font-body` the type. Changing those values retints (or refonts) the whole site.

## License

Apache 2.0 — see [LICENSE](LICENSE). The license covers the code; the Magnum name and
brand are not licensed for reuse.
