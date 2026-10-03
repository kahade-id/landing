# PROGRESS.md — Misi Go Public Kahade Landing

## Checklist fase

### Fase 0 — Bootstrap & baseline
- [x] Baca repo, pastikan di `main` dan bersih
- [x] Buat `CLAUDE.md`, `docs/PROGRESS.md`, `docs/DECISIONS.md`
- [x] Build baseline hijau; tsc strict + noUnusedLocals hijau (`next lint` tidak ada di Next 16)
- [x] Chromium Playwright berhasil diunduh → QA browser nyata dimungkinkan
- [x] Defect register awal (D-001…D-008)

### Fase 1 — Fondasi
- [x] `styles/tokens.css`; font Plus Jakarta Sans; `@phosphor-icons/react` 2.1.10 + `lib/icons.ts` (0 SVG ad-hoc tersisa kecuali Kahade mark)
- [x] `content/site.ts`; `DownloadActions` (+ varian compact untuk header)
- [x] Header (nav + DownloadActions compact) & footer baru (semua halaman, © PT Kawal Hak Dengan Aman)
- [x] `next.config.ts`: security headers + redirect /syarat-ketentuan → /syarat-dan-ketentuan
- [x] Animasi loop dihapus (marquee, float, ping, drift, parallax hero)

### Fase 2 — Home
- [x] Hero (H1 6 kata, sub 11 kata, DownloadActions, mockup tanpa angka/nama nyata)
- [x] Trust strip 4 prinsip faktual (grid statis); Masalah & Solusi; Cara kerja perlindungan transaksi 4 langkah
- [x] Showcase tab; bento fitur; tabel perbandingan; FAQ + JSON-LD FAQPage; Closing + DownloadActions

### Fase 3 — Semua halaman
- [x] 10 halaman konten + `/artikel/[slug]` + sistem draft/ready + fixture JSON + `CONTENT_GUIDE.md` + `npm run content:check`
- [x] `error.tsx`, `manifest.webmanifest`, `apple-touch-icon.png` (180×180 via Playwright)
- [x] Sitemap hanya halaman ready; halaman draft noindex
- [x] Build 16 route hijau; tsc hijau
- [x] Fixture mode terverifikasi; guard `KAHADE_FIXTURES=1` di Vercel menggagalkan build; grep `[FIXTURE]` di `.next` produksi = nol

### Fase 4 — Hardening
- [ ] QA Playwright: screenshot semua rute × viewport (390/768/1280/1440), cek overflow + console error
- [ ] Grep anti-mismatch (hex liar, emoji, kata terlarang, dsb.)
- [ ] Lighthouse via Playwright (bila memungkinkan)
- [ ] Push ke main

### Fase 5 — Rilis & verifikasi live
- [ ] Tentukan PRODUCTION_URL (cari via GitHub API / Vercel)
- [ ] Verifikasi deploy; curl semua rute; Lighthouse + screenshot URL live
- [ ] Laporan akhir

## Defect register
| ID | Rute | Viewport | Bukti | Tingkat | Status |
|----|------|----------|-------|---------|--------|
| D-001 | / | semua | Ikon masih SVG ad-hoc, bukan Phosphor | mayor | **fixed** (migrasi total ke Phosphor) |
| D-002 | / | semua | Font Inter, misi wajib Plus Jakarta Sans | mayor | **fixed** |
| D-003 | / | semua | Animasi loop (marquee, float, ping, drift) | mayor | **fixed** (dihapus) |
| D-004 | / | semua | Mockup memakai angka/nama yang tampak nyata | mayor | **fixed** (placeholder generik) |
| D-005 | / | semua | Belum ada `content/site.ts`; CTA anchor `#download` | mayor | **fixed** (DownloadActions + site.ts) |
| D-006 | / | semua | Security headers belum ada | minor | **fixed** |
| D-007 | semua | semua | Halaman bagian 5 belum ada | mayor | **fixed** (10 halaman + artikel) |
| D-008 | / | semua | Belum ada `error.tsx`, `manifest`, apple-touch-icon | minor | **fixed** |
| D-009 | / | mobile | Header: tombol Masuk/Download menyesatkan | minor | **fixed** (DownloadActions compact) |
| D-010 | /syarat-ketentuan | semua | Route lama, misi memakai /syarat-dan-ketentuan | minor | **fixed** (redirect 301) |
| D-011 | semua | semua | **KRITIS:** komponen `Words` — `whileInView` dipasang pada teks yang terpotong penuh oleh parent `overflow-hidden`, sehingga IntersectionObserver tak pernah fire dan SEMUA headline (hero + section) tidak tampil. Ditemukan via QA Playwright. | kritis | **fixed** (observer dipindah ke parent via variants; terverifikasi di browser) |
| D-012 | / | 390 | Kartu bento 548px di viewport 390px (MiniFeed `w-36 shrink-0` × 3 memaksa grid melebar; grid item min-width auto). | mayor | **fixed** (`min-w-0` pada wrapper kartu; scrollWidth 390 = OK) |

## Log
- 2026-10-03: Fase 0–3 selesai. Build 16 route hijau, tsc hijau, fixture/guard terverifikasi.
- Berikutnya: QA Playwright (screenshot + overflow + console), grep anti-mismatch, push.
- 2026-10-03: QA Playwright 48/48 hijau pasca-perbaikan D-011 & D-012. Lighthouse: a11y 100, BP 100, SEO 100, perf 69 (terbatas VM).
- 2026-10-03: Push ke main via API: batch 1–3/4 berhasil (52 file). **Batch 4/4 (17 file: Sections.tsx, Faq.tsx, next.config.ts, dsb.) TERTUNDA — menunggu approval pengguna yang timeout berulang.** Remote dalam keadaan campuran; JANGAN anggap deploy sukses sebelum batch 4 masuk.
- 2026-10-03 05:23 WIB: pengguna kembali, semua push disetujui. Batch 4/4 masuk (`a64220a0`), apple-touch-icon biner diperbaiki (pakai `/icon.png`), route lama & file rusak dihapus. **Remote main kini konsisten dan build hijau (16 route).**
