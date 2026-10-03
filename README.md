# Kahade — Landing Page

Landing page Kahade (PT Kawal Hak Dengan Aman): social commerce feed platform
Indonesia dengan escrow di setiap transaksi. Next.js 16 App Router + TypeScript
+ Tailwind v4, deploy ke Vercel dari `main`.

## Mulai

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm run content:check  # status halaman konten (draft/ready)
```

## Sistem konten

Teks halaman (kecuali Home) berasal dari modul bertipe di `content/`.
Status halaman diturunkan otomatis dari kelengkapan field wajib:
belum lengkap = `draft` (tampil "Sedang kami siapkan", `noindex`, tidak masuk
sitemap); lengkap = `ready`. Lihat `docs/CONTENT_GUIDE.md`.

Nilai yang diisi pemilik (`content/site.ts`): URL App Store / Google Play / APK,
email & WhatsApp kontak, URL produksi. Selagi kosong, tombol unduh tampil
nonaktif "Segera hadir" — tidak ada link mati.

Uji template dengan data contoh (lokal saja):

```bash
KAHADE_FIXTURES=1 npm run build
```

Build sengaja digagalkan bila `KAHADE_FIXTURES=1` terdeteksi di Vercel.

## Desain

Monokrom (`#FFFFFF` `#F3F4F6` `#525252` `#262626` `#000000`), light mode saja,
font Plus Jakarta Sans, ikon Phosphor (`lib/icons.ts`), token di
`styles/tokens.css`. Lihat `CLAUDE.md` untuk aturan main dan batasan.

## Dokumen kerja

- `docs/PROGRESS.md` — checklist fase, defect register, log
- `docs/DECISIONS.md` — keputusan + alasan
- `docs/CONTENT_GUIDE.md` — panduan pengisian konten
- `docs/qa/REPORT.md` — bukti gate kualitas
