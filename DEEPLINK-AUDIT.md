# Audit & Integrasi Deeplink Kahade

**Tanggal:** 1 Oktober 2026
**Repo diubah:** `kahade-id/landing` (Next.js) — repo frontend **read-only**, tidak diubah sama sekali.
**Repo frontend:** `~/workspace/kahade/frontend` (Expo SDK ~54, expo-router, scheme `kahade://`, bundle `id.kahade`)

---

## 1. Ringkasan keputusan

| Path (kahade.id) | Route aplikasi | Keputusan | Alasan |
|---|---|---|---|
| `/payment/finish` | `app/payment/finish.tsx` | ✅ KLAIM | Finish Redirect URL DANA (wajib di portal DANA) |
| `/order-link/*` | `app/order-link/[token].tsx` | ✅ KLAIM | URL share publik (`orderLinkUrl()` di `lib/deeplinks.ts`) |
| `/user/*` | `app/user/[username].tsx` (+ nested showcase/ratings/questions) | ✅ KLAIM | Profil publik, URL share (`profileUrl()`) |
| `/showcase/*` | `app/showcase/[id].tsx` | ✅ KLAIM | Etalase publik, URL share (`showcaseUrl()`) |
| `/products/*` | `app/products/[id].tsx` | ✅ KLAIM | Detail produk publik/shareable |
| `/profile/*` | `app/profile/[id].tsx` | ✅ KLAIM | Profil publik by ID |
| `/transfer` | `app/transfer.tsx` | ✅ KLAIM | QR payment request (`transferUrl()` di `app/receive.tsx`); transaksional |
| `/register` | `app/(auth)/register.tsx` | ✅ KLAIM (pengecualian) | URL referral `?ref=` didesain sebagai share link (`referralUrl()`); fallback menampilkan ajakan download |
| `/help/*` | `app/help/[slug].tsx` | ✅ KLAIM | Artikel bantuan publik, URL share (`helpArticleUrl()`) |
| `/` | — | ❌ JANGAN KLAIM | Landing harus tetap dibuka di browser |
| `/(auth)/*` kecuali `/register` | login, verify-otp, forgot-password, dsb. | ❌ JANGAN KLAIM | Alur auth — biarkan di aplikasi |
| `/(tabs)/*` | showcase, chat, transactions, notifications | ❌ JANGAN KLAIM | Butuh sesi login |
| `/order/*`, `/invoice/*`, `/tracking/*` | detail order, invoice, lacak kiriman | ❌ JANGAN KLAIM | Butuh sesi; bukan URL share |
| `/dispute/*`, `/disputes`, `/returns/*`, `/rate/*` | sengketa, retur, ulasan | ❌ JANGAN KLAIM | Butuh sesi |
| `/wallet*`, `/topup*`, `/withdraw*`, `/bank-accounts` | dompet & keuangan | ❌ JANGAN KLAIM | Finansial, butuh sesi + PIN |
| `/chat/*`, `/notification/*` | chat, notifikasi | ❌ JANGAN KLAIM | Privat |
| `/settings*`, `/security*`, `/privacy-settings`, dsb. | pengaturan | ❌ JANGAN KLAIM | Privat |
| `/seller/*`, `/showcase-management`, `/showcase/create`, `/analytics` | area penjual | ❌ JANGAN KLAIM | Internal penjual |
| `/kahade-plus/*`, `/subscriptions*`, `/vouchers` | langganan & voucher | ❌ JANGAN KLAIM | Butuh sesi |
| `/terms`, `/privacy-policy`, `/faq`, `/about`, `/contact`, `/support*` | info statis | ❌ JANGAN KLAIM | Tetap di browser → fallback `not-found` → redirect `/` |
| `/scan` | scan QR | ❌ JANGAN KLAIM | Butuh kamera native |

**Prinsip yang dipakai:** klaim hanya untuk (a) konten publik/shareable yang memang didesain sebagai URL `https://kahade.id/...` di `lib/deeplinks.ts`, atau (b) alur transaksional yang penerima tautannya diharapkan punya aplikasi. Selain itu tetap di browser.

---

## 2. Pola paths final

### `public/.well-known/apple-app-site-association` (iOS)
```json
{"applinks":{"apps":[],"details":[{"appID":"TEAMID.id.kahade","paths":["/payment/finish","/payment/finish/*","/order-link/*","/user/*","/showcase/*","/products/*","/profile/*","/transfer","/register","/help/*"]}]}}
```
Sengaja BUKAN wildcard `*` global — `/` dan path info tetap dibuka di browser.

### `public/.well-known/assetlinks.json` (Android)
`pathPatterns` setara dengan daftar Apple di atas. `sha256_cert_fingerprints` masih `SHA256_PLACEHOLDER` (TODO user).

---

## 3. Halaman fallback yang dibuat

Komponen bersama: `components/deeplink-fallback.tsx` — saat dibuka di browser (aplikasi belum terinstal / App Links belum terverifikasi):
1. Otomatis coba buka `kahade://<path>?<query>` setelah 600ms,
2. Tombol **"Buka di aplikasi"** (percobaan manual, deep link preserve path + query params),
3. Tombol **"Download aplikasi"** → `/#download`.

Tidak ada duplikasi konten — halaman hanya mengarahkan. Daftar halaman:

| File | Untuk path |
|---|---|
| `app/order-link/[[...token]]/page.tsx` | `/order-link/*` |
| `app/user/[[...slug]]/page.tsx` | `/user/*` (termasuk nested showcase/ratings/questions) |
| `app/showcase/[[...id]]/page.tsx` | `/showcase/*` |
| `app/products/[[...id]]/page.tsx` | `/products/*` |
| `app/profile/[[...id]]/page.tsx` | `/profile/*` |
| `app/help/[[...slug]]/page.tsx` | `/help/*` |
| `app/transfer/page.tsx` | `/transfer` |
| `app/register/page.tsx` | `/register` |
| `app/payment/finish/page.tsx` | `/payment/finish` (sudah ada, dipertahankan) |
| `app/not-found.tsx` | Path tak dikenal → tombol kembali ke `/` |

**Verifikasi:** `npm run build` sukses (0 error TS; 10 route dinamis + 4 statis).

---

## 4. Perlu keputusan user

1. **`/register` diklaim sebagai pengecualian aturan "jangan klaim auth"** — karena `referralUrl()` didesain sebagai `https://kahade.id/register?ref=...` untuk dibagikan. Jika user keberatan, hapus `/register` dari kedua file `.well-known` + hapus `app/register/`.
2. **`/help/*` diklaim** — alternatifnya biarkan di browser dan bangun pusat bantuan di landing nanti.
3. **`/tracking/[shipmentId]`** — tidak diklaim (butuh sesi). Kalau nanti ada kebutuhan "bagikan lacak kiriman ke penjual/pembeli", perlu desain tautan publik khusus.
4. **TODO teknis (sudah di README):** ganti `TEAMID` (Apple Team ID), isi `SHA256_PLACEHOLDER` (fingerprint keystore Android), isi `EXPO_GO_URL`, URL App Store/Play Store setelah terbit.
5. **Penting:** universal link iOS/Android BARU AKTIF setelah (a) TODO no. 4 dilengkapi, (b) DNS `kahade.id` mengarah ke Vercel, (c) aplikasi rebuild dengan entitlements/associated domains yang sudah ada di `app.json` (`applinks:kahade.id`, intentFilters — sudah benar, tidak perlu diubah).

---

## 5. Sumber audit

- `~/workspace/kahade/frontend/app/**` — ±130 route expo-router dipetakan manual
- `~/workspace/kahade/frontend/lib/deeplinks.ts` — kanonis URL share (`orderLinkUrl`, `referralUrl`, `profileUrl`, `showcaseUrl`, `transferUrl`, `helpArticleUrl`)
- `~/workspace/kahade/frontend/app/receive.tsx` — QR berisi `https://kahade.id/transfer?...`
- `~/workspace/kahade/frontend/components/scan-screen.tsx` — contoh URL transfer & profil kanonis
- `~/workspace/kahade/frontend/app/referral.tsx` — share via `referralUrl()`
