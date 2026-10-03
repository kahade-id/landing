import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "bantuan",
  title: "Pusat Bantuan Kahade",
  navTitle: "Bantuan",
  description: "Jawaban atas pertanyaan seputar akun, transaksi, dan escrow Kahade.",
  group: "bantuan",
  showInHeader: false,
};

export interface BantuanData {
  headline: string; intro: string; topics: { title: string; desc: string }[]; faqs: { q: string; a: string }[];
}

export const required: (keyof BantuanData)[] = ["headline", "topics"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<BantuanData> = {};
