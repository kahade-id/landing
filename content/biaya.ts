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
export const data: Partial<BiayaData> = {};
