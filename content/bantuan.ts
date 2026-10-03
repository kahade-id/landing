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
export const data: Partial<BantuanData> = {
  headline: "Pusat bantuan.",
  intro: "Jawaban untuk hal-hal yang paling sering ditanyakan tentang Kahade.",
  topics: [
    {
      title: "Memulai",
      desc: "Buat akun, lengkapi profil, dan mulai jelajahi feed dalam hitungan menit.",
    },
    {
      title: "Jual",
      desc: "Posting produk ke feed, kelola chat pembeli, dan kirim barang setelah dana ditahan.",
    },
    {
      title: "Beli",
      desc: "Temukan produk, chat dengan penjual, bayar ke escrow, dan konfirmasi saat barang tiba.",
    },
    {
      title: "Escrow & dana",
      desc: "Pahami cara kerja penahanan dana, pencairan, dan apa yang terjadi saat sengketa.",
    },
    {
      title: "Akun & keamanan",
      desc: "Kelola akun, verifikasi identitas, dan jaga keamanan transaksimu.",
    },
  ],
  faqs: [
    {
      q: "Bagaimana cara kerja escrow di Kahade?",
      a: "Saat kamu membeli, danamu ditahan oleh pihak netral — bukan langsung ke penjual. Penjual mengirim barang, kamu mengonfirmasi penerimaan, barulah dana diteruskan ke penjual.",
    },
    {
      q: "Apa yang terjadi jika barang tidak dikirim?",
      a: "Jika penjual tidak mengirim dalam batas waktu yang disepakati, dana otomatis kembali ke kamu. Kamu tidak perlu mengejar penjual.",
    },
    {
      q: "Bagaimana jika barang yang diterima tidak sesuai?",
      a: "Jangan konfirmasi penerimaan dulu. Buka sengketa dari halaman transaksi — tim kami akan menengahi dan dana tetap ditahan selama proses berlangsung.",
    },
    {
      q: "Apakah ada biaya untuk memakai Kahade?",
      a: "Mengunduh dan memakai aplikasi gratis. Rincian biaya layanan per transaksi tercantum di halaman Biaya dan selalu ditampilkan sebelum kamu membayar.",
    },
    {
      q: "Bagaimana cara menjadi penjual terverifikasi?",
      a: "Lengkapi verifikasi identitas di pengaturan akun. Lencana verifikasi membantu pembeli percaya padamu.",
    },
  ],
};
