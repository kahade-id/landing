import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "tentang",
  title: "Tentang Kahade",
  navTitle: "Tentang",
  description: "Mengenal Kahade: social commerce feed platform Indonesia dengan escrow di setiap transaksi.",
  group: "perusahaan",
  showInHeader: false,
};

export interface TentangData {
  headline: string; subheadline: string; body: string[]; values: { title: string; desc: string }[];
}

export const required: (keyof TentangData)[] = ["headline", "body"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<TentangData> = {};
