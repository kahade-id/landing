# Panduan Konten — Kahade Landing

Semua teks halaman (kecuali Home) berasal dari modul TypeScript di `content/`.
Isi field yang wajib; halaman otomatis berstatus **ready** bila lengkap,
**draft** bila ada yang kurang. Halaman draft tampil dengan elegan
("Sedang kami siapkan"), `noindex`, dan tidak masuk sitemap/navigasi header.

## content/site.ts — wajib diisi pemilik saat data tersedia

| Field | Tipe | Status |
|---|---|---|
| `productionUrl` | URL Vercel produksi | opsional (untuk verifikasi) |
| `appStoreUrl` | URL App Store | wajib sebelum rilis |
| `playStoreUrl` | URL Google Play | wajib sebelum rilis |
| `apkUrl` | URL unduh APK langsung | opsional |
| `contactEmail` | email resmi | wajib |
| `contactWhatsapp` | nomor format internasional, mis. `62812xxxxxxx` | opsional |
| `companyName` | nama badan hukum | terisi: PT Kawal Hak Dengan Aman |
| `siteUrl` | URL kanonis situs | terisi: https://kahade.id |

Selagi URL toko kosong, tombol unduh tampil nonaktif "Segera hadir".

## Halaman konten

### Tentang (`content/tentang.ts`)
| Field | Tipe | Wajib | Batas |
|---|---|---|---|
| `headline` | string | ya | ≤ 60 karakter |
| `subheadline` | string | tidak | ≤ 120 karakter |
| `body` | string[] | ya | 2–4 paragraf, tiap ≤ 400 karakter |
| `values` | {title, desc}[] | tidak | maks 6; desc ≤ 160 karakter |

### Karier (`content/karier.ts`)
| Field | Tipe | Wajib | Batas |
|---|---|---|---|
| `headline` | string | ya | ≤ 60 karakter |
| `intro` | string | ya | ≤ 200 karakter |
| `benefits` | {title, desc}[] | tidak | maks 6 |
| `jobs` | {title, location, type, url?}[] | tidak | kosong = "Belum ada lowongan terbuka" |

### Artikel (`content/artikel.ts`)
| Field | Tipe | Wajib | Batas |
|---|---|---|---|
| `headline` | string | ya | ≤ 60 karakter |
| `intro` | string | tidak | ≤ 200 karakter |
| `articles` | artikel[] | ya | minimal 1 |

Satu artikel: `slug` (huruf-kecil-dengan-strip, unik), `title` (≤ 80),
`description` (≤ 160), `category`, `author`, `date` (YYYY-MM-DD),
`minutes` (angka menit baca), `blocks` (minimal 1).

Blok: `{type:"heading", text}` · `{type:"paragraph", text}` ·
`{type:"list", items[]}` · `{type:"quote", text, by?}` ·
`{type:"callout", text}`.

### Kontak (`content/kontak.ts`)
| Field | Tipe | Wajib |
|---|---|---|
| `headline` | string | ya |
| `intro` | string | tidak |

Kanal (email/WhatsApp) diambil otomatis dari `content/site.ts`. Tanpa form.

### Bantuan (`content/bantuan.ts`)
| Field | Tipe | Wajib |
|---|---|---|
| `headline` | string | ya |
| `intro` | string | tidak |
| `topics` | {title, desc}[] | ya, minimal 1 |
| `faqs` | {q, a}[] | tidak |

### Keamanan (`content/keamanan.ts`)
| Field | Tipe | Wajib |
|---|---|---|
| `headline` | string | ya |
| `intro` | string | tidak |
| `points` | {title, desc}[] | ya, minimal 1 |

### Biaya (`content/biaya.ts`)
| Field | Tipe | Wajib | Catatan |
|---|---|---|---|
| `headline` | string | ya | |
| `intro` | string | tidak | |
| `rows` | {item, desc}[] | ya | **jangan membuat angka** — hanya dari data resmi |
| `note` | string | tidak | catatan kaki |

### Press (`content/press.ts`)
| Field | Tipe | Wajib |
|---|---|---|
| `headline` | string | ya |
| `intro` | string | tidak |
| `boilerplate` | string | ya |

### Syarat & Ketentuan (`content/syarat.ts`), Kebijakan Privasi (`content/privasi.ts`)
| Field | Tipe | Wajib |
|---|---|---|
| `headline` | string | ya |
| `updatedAt` | string | tidak (tampilkan bila ada) |
| `sections` | {title, body[]}[] | ya, minimal 1 |

## Aturan penulisan
- Bahasa Indonesia, sentence case, sapaan "kamu".
- Tanpa klaim tak terbukti: dilarang testimoni, angka pengguna/transaksi/dana,
  logo partner, klaim lisensi/regulator (OJK/BI/LPS), superlatif
  ("100% aman", "tanpa risiko", "terbaik"), dan merek kompetitor.
- Perbandingan hanya generik ("marketplace umum").

## Perintah
- `npm run content:check` — daftar halaman draft + field yang kurang.
- `KAHADE_FIXTURES=1 npm run build` — uji template dengan data contoh
  (lokal saja; teks berawalan `[FIXTURE]`).
