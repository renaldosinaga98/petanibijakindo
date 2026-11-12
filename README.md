# Petani Bijak Indonesia

**Petani Cerdas, Hasil Berkualitas.**

Platform tools pertanian Indonesia: kalkulator kebutuhan benih padi, kebutuhan pupuk, luas lahan, konversi hektare ke rante, biaya tanam, keuntungan panen, dan dosis pestisida — plus artikel & panduan budidaya. Gratis, tanpa registrasi.

Dibangun oleh **Renaldo Sinaga & Team Vexora** · Kontak: renaldosinaga98@gmail.com

## Stack

- **Astro 5** + TypeScript — output statis (SSG), kalkulator berjalan client-side di browser
- **GitHub** — repo ini: `renaldosinaga98/petanibijakindo`, branch utama `main`
- **Cloudflare Pages** — deploy otomatis setiap push ke `main`
- **CMS berbasis GitHub** — Astro Content Collections + Decap CMS di `/admin`

## Menjalankan lokal

```bash
npm install
npm run dev      # server pengembangan
npm run build    # hasil produksi ke folder dist/
npm run preview  # pratinjau hasil build
```

## Demo GitHub Pages

Demo publik (sementara, sebelum domain & Cloudflare final):
**https://renaldosinaga98.github.io/petanibijakindo/**

Demo diterbitkan dari branch `gh-pages` (hasil build statis). Untuk memperbarui demo setelah mengubah source di `main`:

```bash
GITHUB_PAGES=true npx astro build --outDir dist-ghpages
# lalu terbitkan isi dist-ghpages/ ke branch gh-pages
```

Mode `GITHUB_PAGES=true` mengatur `site` ke `https://renaldosinaga98.github.io` dan `base` ke `/petanibijakindo` (lihat `astro.config.mjs`); build produksi Cloudflare tidak terpengaruh.

## Deploy ke Cloudflare Pages

Hubungkan repo ini di dashboard Cloudflare Pages dengan pengaturan:

| Pengaturan | Nilai |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Framework preset | Astro |

Setiap push ke `main` memicu build & deploy ulang secara otomatis.

## Struktur proyek

```
src/
  pages/
    index.astro            Halaman utama + 7 kalkulator (client-side)
    artikel/[...slug].astro  Halaman artikel dari Content Collection
  content/
    artikel/*.md           Artikel & panduan (dikelola CMS)
  content.config.ts        Skema Content Collections
public/
  admin/                   Panel Decap CMS (/admin) + config.yml
  _headers                 Header keamanan Cloudflare Pages
  robots.txt
```

## CMS (Decap + GitHub)

- Buka `/admin` di situs yang sudah ter-deploy, masuk dengan GitHub, lalu tulis/edit artikel.
- Setiap penyimpanan menjadi commit (atau PR, karena editorial workflow aktif) ke repo ini di folder `src/content/artikel/` — Cloudflare Pages lalu me-deploy ulang otomatis.
- Login GitHub Decap CMS memerlukan OAuth proxy (mis. Cloudflare Worker `decap-oauth` atau layanan proxy Decap) karena GitHub tidak mengizinkan OAuth murni dari browser. Siapkan proxy tersebut, lalu sesuaikan bila perlu di `public/admin/config.yml`.
- Artikel juga bisa ditulis manual sebagai file Markdown mengikuti frontmatter yang sama.

## Catatan migrasi

Halaman utama saat ini dipertahankan utuh sebagai satu halaman Astro (`src/pages/index.astro`) agar seluruh kalkulator & tampilan yang sudah terverifikasi tetap persis sama. Artikel lama sudah dimigrasikan menjadi Markdown di `src/content/artikel/` dan dirender oleh `src/pages/artikel/[...slug].astro`; artikel baru sebaiknya dibuat lewat CMS agar otomatis tampil sebagai halaman tersendiri.

## Lisensi konten

Konten situs © Renaldo Sinaga / Team Vexora. Ilustrasi SVG di halaman utama adalah karya orisinal proyek ini.
