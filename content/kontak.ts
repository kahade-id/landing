import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "kontak",
  title: "Kontak Kahade",
  navTitle: "Kontak",
  description: "Hubungi tim Kahade melalui kanal resmi yang tersedia.",
  group: "bantuan",
  showInHeader: false,
};

export interface KontakData {
  headline: string; intro: string;
}

export const required: (keyof KontakData)[] = ["headline"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<KontakData> = {};
