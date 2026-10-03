import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "press",
  title: "Press Kit Kahade",
  navTitle: "Press",
  description: "Materi pers resmi Kahade: profil singkat, logo, dan kontak media.",
  group: "perusahaan",
  showInHeader: false,
};

export interface PressData {
  headline: string; intro: string; boilerplate: string;
}

export const required: (keyof PressData)[] = ["headline", "boilerplate"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<PressData> = {};
