// @ts-check
import { defineConfig } from 'astro/config';

// Petani Bijak Indonesia — Astro (output statis).
// Build normal (Cloudflare Pages): `npm run build` -> output `dist`, di root domain.
// Build demo GitHub Pages: `GITHUB_PAGES=true npm run build`
//   -> site https://renaldosinaga98.github.io, base /petanibijakindo
//   (https://renaldosinaga98.github.io/petanibijakindo/)
const ghPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: ghPages ? 'https://renaldosinaga98.github.io' : undefined,
  base: ghPages ? '/petanibijakindo' : '/',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
