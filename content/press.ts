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
export const data: Partial<PressData> = {
  headline: "Untuk media.",
  intro: "Materi dan kontak pers Kahade. Untuk pertanyaan wawancara atau liputan, hubungi tim kami melalui halaman Kontak.",
  boilerplate: "Kahade adalah platform social commerce Indonesia yang menggabungkan feed ala media sosial dengan perlindungan di setiap transaksi. Pembeli membayar, dana diamankan oleh Kahade, penjual mengirim barang, dan dana diteruskan setelah pembeli mengonfirmasi penerimaan. Kahade dioperasikan oleh PT Kawal Hak Dengan Aman.",
};
