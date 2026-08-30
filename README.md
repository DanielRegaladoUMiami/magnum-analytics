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
| `assets/` | Favicon and demo screenshots |

## Adding the demo screenshots

The Demo page has two image slots that currently show a placeholder caption. Drop the real
dashboard screenshots in and they appear automatically — no code change:

```
assets/demo-01.png    # sales & margin (Power BI)
assets/demo-02.png    # forecast & cohorts (Tableau)
```

## Retheming

Colors come from CSS custom properties at the top of `ds/styles.css`. The accent ramp
(`--color-accent`, `--color-accent-100` … `--color-accent-900`) drives buttons, links and
highlights; changing those values retints the whole site.

## License

Apache 2.0 — see [LICENSE](LICENSE). The license covers the code; the Magnum name and
brand are not licensed for reuse.
