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
export const data: Partial<TentangData> = {
  headline: "Jual beli seharusnya seseru scroll media sosial.",
  subheadline: "Kahade adalah platform social commerce Indonesia. Setiap konten adalah etalase, setiap transaksi dilindungi escrow.",
  body: [
    "Kahade lahir dari pengalaman yang akrab bagi banyak orang Indonesia: menemukan barang bagus di media sosial, lalu bertransaksi dengan rasa was-was. Chat berpindah-pindah aplikasi, pembayaran tanpa jaminan, dan tidak ada pihak netral saat terjadi masalah.",
    "Kami membangun Kahade untuk menyelesaikan itu. Di Kahade, jual beli terjadi di dalam feed — seperti memposting di media sosial. Pembeli menemukan produk lewat interaksi yang natural: like, komentar, share, dan follow. Dan setiap transaksi, tanpa terkecuali, dilindungi oleh escrow.",
    "Cara kerjanya sederhana: pembeli membayar, dana ditahan aman oleh pihak netral, penjual mengirim barang, pembeli mengonfirmasi penerimaan, barulah dana diteruskan ke penjual. Tidak ada dana yang berpindah sebelum kedua pihak puas.",
    "Kahade dioperasikan oleh PT Kawal Hak Dengan Aman, perusahaan Indonesia yang berfokus pada keamanan transaksi digital.",
  ],
  values: [
    {
      title: "Keamanan dulu",
      desc: "Setiap keputusan produk dimulai dari pertanyaan: apakah ini membuat transaksi lebih aman?",
    },
    {
      title: "Transparan",
      desc: "Tidak ada biaya tersembunyi, tidak ada status yang disamarkan. Kamu selalu tahu danamu ada di mana.",
    },
    {
      title: "Sederhana",
      desc: "Jual beli yang aman tidak harus rumit. Kalau butuh penjelasan panjang, desainnya belum selesai.",
    },
  ],
};
