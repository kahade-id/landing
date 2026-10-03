import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "keamanan",
  title: "Keamanan di Kahade",
  navTitle: "Keamanan",
  description: "Bagaimana Kahade melindungi transaksi dan datamu lewat escrow.",
  group: "bantuan",
  showInHeader: false,
};

export interface KeamananData {
  headline: string; intro: string; points: { title: string; desc: string }[];
}

export const required: (keyof KeamananData)[] = ["headline", "points"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<KeamananData> = {
  headline: "Keamanan adalah fondasinya.",
  intro: "Kahade dirancang agar kamu tidak perlu percaya pada orang asing — cukup percaya pada sistemnya.",
  points: [
    {
      title: "Escrow di setiap transaksi",
      desc: "Dana pembeli ditahan pihak netral dan hanya cair setelah barang dikonfirmasi diterima. Tanpa pengecualian.",
    },
    {
      title: "Verifikasi penjual",
      desc: "Penjual terverifikasi telah melewati pemeriksaan identitas. Cari lencana verifikasi sebelum bertransaksi.",
    },
    {
      title: "Chat tercatat",
      desc: "Seluruh kesepakatan terjadi di dalam chat aplikasi dan tersimpan sebagai bukti jika terjadi sengketa.",
    },
    {
      title: "Jalur sengketa yang jelas",
      desc: "Jika ada masalah, buka sengketa dari halaman transaksi. Dana tetap ditahan selama penengahan berlangsung.",
    },
    {
      title: "Data yang dijaga",
      desc: "Detail pembayaran tidak pernah dibagikan ke lawan transaksimu. Baca Kebijakan Privasi untuk detail lengkapnya.",
    },
  ],
};
