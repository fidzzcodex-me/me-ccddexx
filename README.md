# ccddexx-portfolio

Portofolio berbasis Next.js 14, React 18, Tailwind CSS, Font Awesome, dan AOS.

## Menjalankan Lokal

```bash
npm install
npm run dev
```

## Deploy ke Vercel

1. Unggah proyek ke repositori GitHub.
2. Impor repositori melalui dashboard Vercel.
3. Isi variabel `NEXT_PUBLIC_SITE_URL` dengan domain akhir.
4. Aktifkan Attack Challenge Mode atau aturan WAF pada menu Firewall untuk perlindungan tambahan.

## Struktur

```
app/          halaman, layout, robots, sitemap
components/   komponen antarmuka
lib/          data dan konfigurasi situs
middleware.js penjagaan jalur sensitif dan agen pemindai
```

Tautan sosial dapat diubah pada `lib/site.js`.
