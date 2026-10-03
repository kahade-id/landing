# CLAUDE.md — Kahade Landing

Repo: `kahade-id/landing`. Landing page Kahade — Next.js 16 App Router + TypeScript + Tailwind v4, deploy Vercel dari `main`.

## Aturan main (ringkas)
1. Otonom penuh: jangan minta konfirmasi. Ragu → pakai default misi, catat di `docs/DECISIONS.md`.
2. Jangan berhenti sebelum Definition of Done terbukti di situs LIVE. Blocker sah hanya kredensial/URL/data nyata → tandai `BLOCKED` di `docs/PROGRESS.md`, lanjutkan sisanya.
3. Bukti, bukan klaim: jalankan dan lihat hasilnya (log, screenshot). Baca kode sebelum mengubah.
4. Siklus: rencana → implementasi → verifikasi → perbaiki akar masalah → catat di `docs/`.
5. Boleh push langsung ke `main` (setiap push = live). Push hanya saat konsisten + gate lokal hijau. Conventional Commits. Dilarang force-push.

## Fakta produk (sumber kebenaran)
- Kahade oleh PT Kawal Hak Dengan Aman (Indonesia). **Social Commerce Feed Platform**: feed, like, comment, share, follow; etalase produk yang bisa langsung ditransaksikan; setiap transaksi dilindungi.
- Alur perlindungan transaksi di landing = acuan fakta. Jangan ubah makna, jangan tambah janji baru.
- CTA utama: unduh aplikasi (App Store, Google Play, APK langsung).

## Batasan keras
- Dilarang: testimoni, rating, angka/statistik (pengguna, transaksi, dana), logo partner/media, klaim lisensi/regulasi (OJK/BI/LPS), superlatif tak terbukti ("100% aman", "tanpa risiko", "terbaik"), merek kompetitor, lorem ipsum, TODO, teks placeholder publik.
- Angka/testimoni/logo hanya bila pemilik mengisi di `content/`.
- Nilai `[ISI]` di `content/site.ts` = belum tersedia → UI "Segera hadir" (disabled, tanpa href). Dilarang link mati (`#`, `href=""`) dan URL karangan.
- Scope hanya repo ini. Dilarang sentuh DNS/domain, setting Vercel, repo lain, backend.

## Token desain (bagian 4)
- Monokrom: `#FFFFFF`, `#F3F4F6`, `#525252`, `#262626`, `#000000`. Aksen hitam. **Light mode saja** (`color-scheme: light`). Seluruh konten Bahasa Indonesia.
- Logo = Kahade mark (ikon) saja, tanpa wordmark; jangan digambar ulang.
- Font: **Plus Jakarta Sans** via `next/font/google` (latin, swap, `--font-sans`). Tanpa font lain.
- Ikon: **wajib `@phosphor-icons/react`**, weight `regular`, via `lib/icons.ts`. Hapus SVG ad-hoc (kecuali Kahade mark). Tanpa emoji.
- Token di `styles/tokens.css`: spasi skala 4/8px, radius ≤ 4 nilai, border hairline 1px, bayangan ≤ 2 level sangat lembut, container maks 1200px, teks baca maks 680px.
- Tipografi fluid `clamp()`: display 40→88px (700, tracking −0.03em), H2 28→48px, H3 20→24px, body 16–18px/1.6.
- Motion: reveal opacity + translateY 12–20px, 600–800ms, stagger 60–80ms, sekali; hanya transform/opacity. Hormati `prefers-reduced-motion`. Hindari: gradien/neon, glassmorphism berlebih, stok foto, emoji, carousel auto-play, popup, parallax berat, animasi loop, bayangan tebal, paragraf panjang.
- Responsif mobile-first: 320→1920, tanpa scroll horizontal, tap target ≥ 44px, `dvh`, safe-area.

## Halaman
`/`, `/tentang`, `/karier`, `/artikel` + `/artikel/[slug]`, `/kontak`, `/bantuan`, `/keamanan`, `/biaya`, `/press`, `/syarat-dan-ketentuan`, `/kebijakan-privasi`, `not-found`, `error`, `robots`, `sitemap`, `manifest`, OG image 1200×630.
- Konten non-Home dari `content/` (TypeScript bertipe). Belum lengkap = `draft`: live dengan state "Sedang kami siapkan", `noindex`, tidak masuk sitemap/nav. Lengkap = `ready`.
- Fixture hanya bila `KAHADE_FIXTURES=1` (lokal); teks berawalan `[FIXTURE]`; build gagal bila aktif di Vercel.
- `npm run content:check` laporkan halaman draft + field kurang.

## Gate (bukti di `docs/qa/REPORT.md`)
Build 0 error/warning, `tsc --noEmit`, lint 0 masalah, tanpa `any`/`console.*` produksi. Lighthouse mobile+desktop: Perf ≥95, A11y 100, BP ≥95, SEO 100. axe 0 pelanggaran. WCAG 2.2 AA. Screenshots semua rute × viewport (Chromium, WebKit, Firefox): tanpa scroll horizontal, 0 console error. Security headers via `next.config`. Grep anti-mismatch bersih.

## Perintah berguna
- `npm ci`, `npm run build`, `npx tsc --noEmit`, `npm run lint`, `npm run content:check`
- `KAHADE_FIXTURES=1 npm run build` (uji fixture lokal)
