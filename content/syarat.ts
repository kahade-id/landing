import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "syarat-dan-ketentuan",
  title: "Syarat & Ketentuan Kahade",
  navTitle: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan platform Kahade.",
  group: "legal",
  showInHeader: false,
};

export interface SyaratData {
  headline: string; updatedAt: string; sections: { title: string; body: string[] }[];
}

export const required: (keyof SyaratData)[] = ["headline", "sections"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<SyaratData> = {};
