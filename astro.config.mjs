// @ts-check
import { defineConfig } from 'astro/config';

// Petani Bijak Indonesia — Astro (output statis) untuk Cloudflare Pages.
// Build: `npm run build` -> output: `dist`
// Setelah domain final aktif, isi `site: 'https://domain-anda'` di bawah
// agar canonical URL & sitemap absolut terbentuk dengan benar.
export default defineConfig({
  // site: 'https://petanibijakindo.pages.dev',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
