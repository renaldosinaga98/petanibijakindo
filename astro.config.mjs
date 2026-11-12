// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Petani Bijak Indonesia — Astro (output statis).
// Produksi (Cloudflare Pages, domain final): https://petanibijakindonesia.click
//   Build: `npm run build` -> output `dist`, di root domain, sitemap otomatis.
// Demo GitHub Pages: `GITHUB_PAGES=true npm run build`
//   -> site https://renaldosinaga98.github.io, base /petanibijakindo
const ghPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: ghPages ? 'https://renaldosinaga98.github.io' : 'https://petanibijakindonesia.click',
  base: ghPages ? '/petanibijakindo' : '/',
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
