import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "biaya",
  title: "Biaya Kahade",
  navTitle: "Biaya",
  description: "Struktur biaya transaksi di Kahade, transparan tanpa biaya tersembunyi.",
  group: "bantuan",
  showInHeader: false,
};

export interface BiayaData {
  headline: string; intro: string; rows: { item: string; desc: string }[]; note: string;
}

export const required: (keyof BiayaData)[] = ["headline", "rows"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<BiayaData> = {
  headline: "Biaya yang jujur.",
  intro: "Tidak ada biaya tersembunyi di Kahade. Setiap potongan ditampilkan jelas sebelum kamu membayar.",
  rows: [
    {
      item: "Unduh & buat akun",
      desc: "Gratis. Selamanya.",
    },
    {
      item: "Posting produk",
      desc: "Gratis. Unggah sebanyak yang kamu mau ke feed.",
    },
    {
      item: "Chat & tawar menawar",
      desc: "Gratis. Semua komunikasi di dalam aplikasi tidak dipungut biaya.",
    },
    {
      item: "Biaya layanan transaksi",
      desc: "Dikenakan per transaksi yang berhasil. Besaran pastinya akan diumumkan sebelum peluncuran dan selalu ditampilkan di layar pembayaran — tidak pernah ada potongan diam-diam.",
    },
  ],
  note: "Struktur biaya final sedang difinalisasi dan akan dipublikasikan di halaman ini sebelum aplikasi diluncurkan. Prinsip kami tetap: transparan di depan, tanpa kejutan di belakang.",
};
