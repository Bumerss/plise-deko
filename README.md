# Plisē Deko – website skeleton

Static site for plisedeko.lv. Open `index.html` in a browser.

All pages are generated from `build.mjs` (content, products, partners, prices).
After editing it, rebuild:

```
node build.mjs
```

- Styles: `assets/css/style.css`
- Scripts: `assets/js/main.js`, `assets/js/calc.js` (price calculator)
- Prices: set `PRICES` in `build.mjs` (EUR per m²)
