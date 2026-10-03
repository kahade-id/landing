import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "keamanan",
  title: "Keamanan di Kahade",
  navTitle: "Keamanan",
  description: "Bagaimana Kahade menjaga transaksi dan datamu tetap aman.",
  group: "bantuan",
  showInHeader: false,
};

export interface KeamananData {
  headline: string; intro: string; points: { title: string; desc: string }[];
}

export const required: (keyof KeamananData)[] = ["headline", "points"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<KeamananData> = {};
