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

/** Terisi dari whitepaper Kahade. */
export const data: Partial<BiayaData> = {
  headline: "Biaya yang transparan.",
  intro:
    "Semua biaya di Kahade terbuka dan jelas sejak awal — tidak ada potongan tersembunyi yang baru muncul belakangan.",
  rows: [
    {
      item: "Biaya transaksi",
      desc: "2,5% per transaksi — minimum Rp2.500, maksimum Rp250.000.",
    },
    {
      item: "Kahade Plus bulanan",
      desc: "Rp99.000/bulan — potongan 50% biaya transaksi, kuota pembebasan biaya Rp990.000 per periode, prioritas layanan pelanggan, badge Plus.",
    },
    {
      item: "Kahade Plus tahunan",
      desc: "Rp899.000/tahun — semua benefit Plus, hemat ~24% dibanding bulanan.",
    },
    {
      item: "1.000 transaksi pertama",
      desc: "Gratis biaya transaksi untuk 1.000 transaksi pertama.",
    },
  ],
  note: "Tidak ada biaya tersembunyi.",
};
