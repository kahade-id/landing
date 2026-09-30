# Kahade Landing

Landing page + deep link handler untuk **kahade.id**. Next.js 16 (App Router,
TypeScript, Tailwind v4) — siap deploy ke Vercel tanpa konfigurasi khusus.

## Struktur

```
app/
  page.tsx                 Landing (/)
  payment/finish/page.tsx  Finish redirect DANA (/payment/finish)
  layout.tsx               Font Plus Jakarta Sans + SEO/OG (lang="id")
  globals.css              Palet monokrom Kahade
  icon.png                 Favicon (app icon)
components/logo.tsx        Logo SVG brand (dari repo frontend)
lib/constants.ts           URL download — SATU tempat konfigurasi
lib/logo-paths.ts          Data path logo (jangan edit manual)
public/.well-known/
  apple-app-site-association   Universal Links iOS (appID = TEAMID.id.kahade)
  assetlinks.json              App Links Android (package id.kahade)
```

## Deploy ke Vercel

1. Buka [vercel.com/new](https://vercel.com/new), import repo
   `kahade-id/landing`.
2. Framework terdeteksi otomatis (Next.js). Tidak perlu env variable.
3. Klik **Deploy**. Selesai.

## TODO sebelum go-live

- [ ] **Apple Team ID** — ganti `TEAMID` di
      `public/.well-known/apple-app-site-association` dengan Team ID asli
      (10 karakter, lihat di
      [developer.apple.com](https://developer.apple.com/account) →
      Membership). Format: `TEAMID.id.kahade`.
- [ ] **SHA256 fingerprint Android** — ganti `SHA256_PLACEHOLDER` di
      `public/.well-known/assetlinks.json` dengan fingerprint sertifikat
      signing APK/AAB production:
      ```bash
      keytool -list -v -keystore <keystore-production>.keystore | grep SHA256
      ```
      (Untuk AAB via Play App Signing, ambil dari Play Console →
      Setup → App signing.)
- [ ] **URL Expo** — isi `EXPO_GO_URL` di `lib/constants.ts` dengan URL
      halaman project Expo setelah diunggah. Kosong = tombol Expo Go
      disembunyikan otomatis.
- [ ] **App Store / Google Play** — isi `APP_STORE_URL` dan
      `PLAY_STORE_URL` di `lib/constants.ts` setelah aplikasi terbit.
      Kosong = tombol tampil badge "Segera hadir" (disabled).
- [ ] **Halaman legal** — link "Syarat & Ketentuan" dan "Kebijakan Privasi"
      di footer masih placeholder (`#`).

## DNS

Arahkan `kahade.id` (dan `www.kahade.id`) ke Vercel:

1. Di dashboard Vercel project → **Settings → Domains** → tambah
   `kahade.id` dan `www.kahade.id`.
2. Di DNS provider, buat record sesuai instruksi Vercel (A `76.76.21.21`
   untuk apex, atau CNAME `cname.vercel-dns.com` untuk www).
3. Setelah propagasi, verifikasi deep link:
   - `https://kahade.id/.well-known/apple-app-site-association`
     → JSON valid, content-type `application/json`.
   - `https://kahade.id/.well-known/assetlinks.json` → JSON valid.

## Catatan

- `/payment/finish` adalah **Finish Redirect URL DANA** yang terdaftar di
  dashboard DANA. Jangan ubah path-nya tanpa update juga di dashboard DANA.
- Halaman ini membaca query params DANA (`status`,
  `latestTransactionStatus`, `transactionStatus`, `responseCode`) dan
  menampilkan status berhasil/menunggu/gagal, plus tombol deep link
  `kahade://payment/finish?...` untuk kembali ke aplikasi.
- Desain mengikuti prinsip Apple-clean: palet monokrom
  (#000000, #262626, #525252, #F3F4F6, #FFFFFF), font Plus Jakarta Sans,
  tanpa animasi berlebihan.
