import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "kebijakan-privasi",
  title: "Kebijakan Privasi Kahade",
  navTitle: "Kebijakan Privasi",
  description: "Kebijakan privasi Kahade: bagaimana kami melindungi datamu.",
  group: "legal",
  showInHeader: false,
};

export interface PrivasiData {
  headline: string; updatedAt: string; sections: { title: string; body: string[] }[];
}

export const required: (keyof PrivasiData)[] = ["headline", "sections"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<PrivasiData> = {};
