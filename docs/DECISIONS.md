# DECISIONS.md — Keputusan selama misi

Format: tanggal — keputusan — alasan.

- 2026-10-03 — Bekerja di `~/workspace/kahade-landing` (cermin lokal `kahade-id/landing`); push via GitHub skill `push_files` (tanpa token git lokal). Alasan: `gh` CLI tanpa auth di environment ini; skill GitHub adalah jalur tulis yang tersedia.
- 2026-10-03 — PRODUCTION_URL belum diketahui (field `[ISI]` kosong). Akan dicari via riwayat/repo; bila tak ketemu, verifikasi live ditandai BLOCKED. Alasan: misi melarang menebak URL dan melarang menyentuh pengaturan Vercel.
- 2026-10-03 — Animasi loop dihapus total (marquee trust strip → grid statis; float/ping/drift/parallax dihapus) meski versi sebelumnya memakainya. Alasan: misi bagian 4 eksplisit melarang animasi loop; motion tersisa hanya entrance reveal, stagger, dan micro-interaction hover.
- 2026-10-03 — Mockup memakai placeholder generik ("Toko contoh", "Contoh produk", "Rp –", tanpa angka like/komen). Alasan: misi melarang angka/nama pengguna yang tampak nyata di mockup hero; diterapkan konsisten ke semua visual produk.
- 2026-10-03 — Header memakai `DownloadActions` compact (tombol ikon App Store/Google Play, disabled "Segera hadir" bila URL kosong) menggantikan tombol "Masuk"/"Download". Alasan: misi mewajibkan DownloadActions di header; tidak ada autentikasi nyata sehingga tombol "Masuk" menyesatkan.
- 2026-10-03 — Fixture disimpan sebagai JSON (`content/__fixtures__/*.json`) dibaca via `fs` hanya saat `KAHADE_FIXTURES=1`, bukan modul TS yang di-import. Alasan: import statis akan membundel teks `[FIXTURE]` ke `.next` dan menggagalkan verifikasi grep misi.
- 2026-10-03 — `next lint` tidak tersedia di Next.js 16 (perintah dihapus upstream); gate lint digantikan `tsc --noEmit` dengan `strict` + `noUnusedLocals` + `noUnusedParameters` (0 error).
- 2026-10-03 — **Bug kritis D-011:** pola masked-text-reveal (`whileInView` pada child yang fully-clipped oleh parent `overflow-hidden`) membuat IntersectionObserver tidak pernah fire — semua headline tak tampil. Diperbaiki dengan memindah `whileInView` ke parent (tak terpotong) dan menganimasikan child via variants. Pelajaran: JANGAN PERNAH pasang whileInView pada elemen yang mulai dalam keadaan terpotong penuh.
