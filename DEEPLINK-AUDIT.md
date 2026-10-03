
---

## 6. Migrasi ala Instagram (3 Okt 2026)

**Branch:** `feat/deeplink-instagram`

Format URL baru (gaya Instagram):
| Path baru | Menggantikan | Route aplikasi |
|---|---|---|
| `/<username>` | `/user/<username>`, `/profile/<id>` | `kahade://user/<username>` |
| `/p/<id>` | `/products/<id>`, `/showcase/<id>` | `kahade://showcase/<id>` |
| `/v/<code>` | — (baru) | `kahade://vouchers?code=<code>` |
| `/r/<code>` | `/register?ref=<code>` (lama) | `kahade://register?ref=<code>` |

**File baru:**
- `app/[username]/page.tsx` — profil publik, validasi reserved words → 404, fetch `GET /v1/users/:username` untuk metadata
- `app/p/[id]/page.tsx` — detail produk, fetch `GET /v1/showcase/:id/share` untuk metadata
- `app/v/[code]/page.tsx` — voucher, fallback + CTA
- `app/r/[code]/page.tsx` — referral, CTA daftar dengan kode
- `app/register/page.tsx` — forwarder `/register?ref=` → `/r/<code>` (kompatibilitas link lama)
- `lib/reserved-words.ts` — daftar kata reserved (sinkron dengan backend)
- `lib/deeplink-api.ts` — helper fetch API publik
- `components/deeplink-fallback.tsx` — komponen fallback (recreate, dengan `appPath` mapping)
- `components/deeplink-auto-open.tsx` — auto-open `kahade://`

**Redirect 301** (`next.config.ts`):
- `/user/:username` → `/:username`
- `/profile/:id`, `/products/:id`, `/showcase/:id` → `/p/:id`

**`.well-known` update:**
- iOS: tambah `/p/*`, `/v/*`, `/r/*`, dan `/*` (username) dengan `NOT` exclusions untuk semua halaman marketing + `/`
- Android: tambah `/p/*`, `/v/*`, `/r/*` (tanpa `/*` — pathPatterns Android tidak mendukung NOT; username via web fallback)

**Catatan:**
- Repo ini di-rewrite (landing marketing); halaman fallback deeplink lama (`app/user`, dll.) sudah dihapus di `f212794`. Redirect 301 menangani link lama yang terlanjur tersebar.
- `app/[username]` tidak akan menelan route statis (Next.js memprioritaskan route statis), tapi reserved check tetap ada untuk keamanan.
