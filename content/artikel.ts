import type { PageMeta } from "./types";

export const meta: PageMeta = {
  slug: "artikel",
  title: "Artikel Kahade",
  navTitle: "Artikel",
  description: "Artikel dan kabar terbaru dari tim Kahade.",
  group: "perusahaan",
  showInHeader: false,
};

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; by?: string }
  | { type: "callout"; text: string };

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  minutes: number;
}

export interface ArtikelData {
  headline: string;
  intro: string;
  articles: (ArticleMeta & { blocks: ArticleBlock[] })[];
}

export const required: (keyof ArtikelData)[] = ["headline", "articles"];

/** Diisi pemilik. Kosong = halaman berstatus draft. */
export const data: Partial<ArtikelData> = {
  headline: "Artikel.",
  intro: "Panduan dan cerita seputar jual beli aman di Kahade.",
  articles: [
    {
      slug: "cara-kerja-transaksi-aman",
      title: "Cara kerja transaksi aman di Kahade",
      description: "Lima langkah sederhana yang melindungi setiap transaksi — dari bayar sampai dana cair.",
      category: "Panduan",
      author: "Tim Kahade",
      date: "4 Oktober 2026",
      minutes: 4,
      blocks: [
        { type: "paragraph", text: "Keamanan adalah inti dari Kahade. Sederhananya: danamu diamankan sampai kamu puas dengan barang yang diterima. Berikut alurnya." },
        { type: "heading", text: "1. Chat dan sepakat" },
        { type: "paragraph", text: "Kamu menemukan produk di feed, chat dengan penjual, dan menyepakati harga serta detail pengiriman — semua tercatat di dalam aplikasi." },
        { type: "heading", text: "2. Bayar dengan aman" },
        { type: "paragraph", text: "Kamu membayar, tapi dana tidak langsung ke penjual. Dana diamankan oleh Kahade." },
        { type: "heading", text: "3. Penjual mengirim" },
        { type: "paragraph", text: "Penjual mengirim barang sesuai kesepakatan dan mengunggah resi ke aplikasi." },
        { type: "heading", text: "4. Konfirmasi terima" },
        { type: "paragraph", text: "Barang tiba? Periksa kondisinya, lalu konfirmasi penerimaan di aplikasi." },
        { type: "heading", text: "5. Dana cair" },
        { type: "paragraph", text: "Setelah konfirmasi, dana diteruskan ke penjual. Transaksi selesai — kedua pihak aman." },
        { type: "callout", text: "Jika barang tidak dikirim atau tidak sesuai, jangan konfirmasi. Dana tetap aman dan kamu bisa membuka sengketa." },
      ],
    },
    {
      slug: "tips-aman-belanja-online",
      title: "5 tips belanja online tanpa was-was",
      description: "Kebiasaan kecil yang membuat setiap transaksi online jauh lebih aman.",
      category: "Tips",
      author: "Tim Kahade",
      date: "4 Oktober 2026",
      minutes: 3,
      blocks: [
        { type: "paragraph", text: "Belanja online itu menyenangkan — sampai ada yang tidak beres. Lima kebiasaan ini melindungi kamu di platform apa pun." },
        { type: "list", items: [
          "Jangan pernah transfer langsung ke rekening pribadi penjual yang tidak dikenal.",
          "Simpan semua kesepakatan di chat tertulis, bukan telepon.",
          "Cek reputasi dan ulasan penjual sebelum membeli.",
          "Waspadai harga yang terlalu bagus untuk jadi kenyataan.",
          "Gunakan platform dengan perlindungan pembeli yang jelas.",
        ]},
        { type: "paragraph", text: "Di Kahade, poin kelima sudah bawaan: setiap transaksi otomatis terlindungi tanpa perlu kamu pikirkan." },
      ],
    },
    {
      slug: "jualan-di-feed",
      title: "Jualan semudah posting di media sosial",
      description: "Kenapa feed mengubah cara orang menemukan dan membeli produk.",
      category: "Panduan",
      author: "Tim Kahade",
      date: "4 Oktober 2026",
      minutes: 3,
      blocks: [
        { type: "paragraph", text: "Orang menghabiskan waktu berjam-jam scrolling media sosial — tapi saat mau beli, mereka harus pindah ke aplikasi lain yang terasa kaku. Kahade menggabungkan keduanya." },
        { type: "heading", text: "Etalase = konten" },
        { type: "paragraph", text: "Setiap produk yang kamu posting muncul di feed seperti postingan biasa. Pembeli menemukanmu sambil scrolling santai, bukan sambil berburu dengan filter yang membingungkan." },
        { type: "heading", text: "Interaksi membangun kepercayaan" },
        { type: "paragraph", text: "Like, komentar, dan follow membuat hubungan penjual-pembeli terasa manusiawi. Pembeli yang follow tokomu akan melihat produk barumu duluan." },
        { type: "quote", text: "Jualan terbaik tidak terasa seperti jualan.", by: "Tim Kahade" },
      ],
    },
  ],
};
