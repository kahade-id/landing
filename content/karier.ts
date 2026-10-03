import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "karier",
  title: "Karier di Kahade",
  navTitle: "Karier",
  description: "Bergabung membangun social commerce Indonesia yang aman dengan escrow.",
  group: "perusahaan",
  showInHeader: false,
};

export interface KarierData {
  headline: string; intro: string; benefits: { title: string; desc: string }[]; jobs: { title: string; location: string; type: string; url?: string }[];
}

export const required: (keyof KarierData)[] = ["headline", "intro"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<KarierData> = {
  headline: "Bangun masa depan jual beli Indonesia.",
  intro: "Kami tim kecil dengan ambisi besar: membuat setiap transaksi online di Indonesia aman. Kalau kamu peduli pada craft, kejujuran, dan dampak nyata, kamu akan cocok di sini.",
  benefits: [
    {
      title: "Dampak langsung",
      desc: "Kerjamu dipakai jutaan orang bertransaksi setiap hari. Tidak ada kerja yang hilang di birokrasi.",
    },
    {
      title: "Standar tinggi",
      desc: "Kami terobsesi pada detail — dari presisi piksel sampai kejelasan satu kalimat.",
    },
    {
      title: "Bertumbuh cepat",
      desc: "Tim kecil berarti tanggung jawab besar sejak hari pertama, dan kurva belajar yang curam.",
    },
  ],
  jobs: [],
};
