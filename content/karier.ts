import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "karier",
  title: "Karier di Kahade",
  navTitle: "Karier",
  description: "Bergabung membangun aplikasi jual-beli Indonesia yang aman dan seru.",
  group: "perusahaan",
  showInHeader: false,
};

export interface KarierData {
  headline: string; intro: string; benefits: { title: string; desc: string }[]; jobs: { title: string; location: string; type: string; url?: string }[];
}

export const required: (keyof KarierData)[] = ["headline", "intro"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<KarierData> = {};
