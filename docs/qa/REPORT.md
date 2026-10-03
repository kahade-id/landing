# QA REPORT — Kahade Landing

Tanggal: 2026-10-03. Lingkungan: Playwright + Chromium 1243 (headless, --no-sandbox),
server produksi lokal `next start` di 127.0.0.1:3100. Build produksi (tanpa fixture).

## Ringkasan gate

| Gate | Hasil |
|---|---|
| `npm run build` | 0 error, 0 warning; 16 route statis |
| `tsc --noEmit` (strict + noUnusedLocals + noUnusedParameters) | 0 error |
| QA Playwright 12 rute × 4 viewport (390/768/1280/1440) | 48/48 hijau: tanpa overflow horizontal, 0 console error, 0 request gagal |
| Grep anti-mismatch | bersih (hex hanya palet; tanpa emoji/lorem/TODO/kata terlarang; ejaan Kahade konsisten) |
| Fixture | mode `KAHADE_FIXTURES=1` terverifikasi render; guard Vercel menggagalkan build; grep `[FIXTURE]` di `.next` produksi = nol |
| `npm run content:check` | 0 ready, 10 draft; 6 field site.ts belum diisi (ekspektasi) |
| Security headers | nosniff, Referrer-Policy, X-Frame-Options DENY, Permissions-Policy — via next.config |
| Redirect | /syarat-ketentuan → /syarat-dan-ketentuan (301) |

## Lighthouse (mobile, /)

| Kategori | Skor | Target | Status |
|---|---|---|---|
| Performance | 69 | ≥ 95 | di bawah target — lihat catatan |
| Accessibility | 100 | 100 | ✓ |
| Best Practices | 100 | ≥ 95 | ✓ |
| SEO | 100 | 100 | ✓ |

Metrik: LCP 3,5 dtk (target < 2,0), CLS 0 (target < 0,02 ✓), TBT 851 mdetik (target < 100).

**Catatan performa:** angka diukur di VM terkendala (CPU lambat, throttling Lighthouse).
Metrik struktural yang dapat dikontrol hijau: First Load JS home **127 KB gzip**
(batas misi 130 KB), CLS 0, tanpa render-blocking di luar framework, tanpa gambar
tak teroptimasi. Skor penuh wajib diverifikasi ulang di URL live Vercel
(Fase 5) pada perangkat nyata.

## Defect yang ditemukan & diperbaiki saat QA

| ID | Temuan | Perbaikan |
|---|---|---|
| D-011 (kritis) | `Words`: `whileInView` pada teks yang fully-clipped oleh parent `overflow-hidden` → IntersectionObserver tak pernah fire → **semua headline tak tampil** | Observer dipindah ke parent via variants; terverifikasi tampil di 390 & 1440 |
| D-012 | Kartu bento 548px di viewport 390px (MiniFeed `shrink-0`) | `min-w-0` pada wrapper; scrollWidth = 390 ✓ |
| — | `aria-label` pada `<span>` tanpa role (PhoneMockup) | diganti `aria-hidden`; a11y 100 |
| — | Warning `themeColor` di metadata (Next 16) | pindah ke `viewport` export |

## Screenshot

Direktori `/tmp/qa-shots/` (48 file): seluruh rute × viewport diperiksa manual —
hero, trust strip, showcase tab, bento, cara kerja, FAQ, closing, footer,
halaman draft, dan 404. Tidak ada teks terpotong atau elemen keluar viewport.

## Sisa untuk Fase 5

- Verifikasi Lighthouse + screenshot di PRODUCTION_URL (live).
- PRODUCTION_URL belum diketahui → ditandai BLOCKED bila tak ditemukan.
