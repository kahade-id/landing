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
export const data: Partial<SyaratData> = {
  headline: "Syarat dan Ketentuan",
  updatedAt: "4 Oktober 2026",
  sections: [
    {
      title: "1. Umum",
      body: [
        "Syarat dan Ketentuan ini mengatur penggunaan aplikasi dan layanan Kahade (selanjutnya disebut \"Layanan\") yang dioperasikan oleh PT Kawal Hak Dengan Aman (selanjutnya disebut \"Kami\").",
        "Dengan membuat akun atau menggunakan Layanan, Anda menyetujui seluruh isi Syarat dan Ketentuan ini. Jika Anda tidak setuju, mohon tidak menggunakan Layanan.",
        "Kami dapat memperbarui Syarat dan Ketentuan ini dari waktu ke waktu. Perubahan material akan diberitahukan melalui aplikasi. Penggunaan Layanan setelah perubahan berarti Anda menerima versi terbaru.",
      ],
    },
    {
      title: "2. Akun",
      body: [
        "Untuk bertransaksi, Anda wajib membuat akun dengan data yang benar dan terkini. Anda bertanggung jawab menjaga kerahasiaan kredensial akun Anda.",
        "Satu orang hanya boleh memiliki satu akun. Akun tidak dapat dipindahtangankan.",
        "Kami berhak menangguhkan atau menutup akun yang melanggar ketentuan, memberikan data palsu, atau terlibat dalam aktivitas penipuan.",
      ],
    },
    {
      title: "3. Jual beli di feed",
      body: [
        "Penjual wajib memberikan informasi produk yang jujur dan akurat, termasuk kondisi, harga, dan biaya pengiriman.",
        "Dilarang memperjualbelikan barang ilegal, barang curian, jasa terlarang, atau konten yang melanggar hukum Indonesia.",
        "Harga yang tercantum adalah final sebelum biaya layanan dan ongkos kirim, yang akan ditampilkan terpisah sebelum pembayaran.",
      ],
    },
    {
      title: "4. Escrow dan aliran dana",
      body: [
        "Setiap transaksi pembelian dilindungi escrow: dana pembeli ditahan oleh pihak netral dan tidak diteruskan ke penjual sebelum pembeli mengonfirmasi penerimaan barang.",
        "Penjual wajib mengirim barang dalam batas waktu yang disepakati di chat transaksi. Keterlambatan melewati batas waktu tanpa kesepakatan baru dapat mengakibatkan pembatalan otomatis dan pengembalian dana ke pembeli.",
        "Dana akan diteruskan ke penjual setelah pembeli mengonfirmasi penerimaan, atau otomatis setelah masa konfirmasi berakhir tanpa sengketa.",
        "Jika terjadi sengketa, dana tetap ditahan hingga sengketa diselesaikan melalui mekanisme penengahan kami. Keputusan penengahan bersifat final untuk penyelesaian dana di dalam Layanan.",
      ],
    },
    {
      title: "5. Sengketa",
      body: [
        "Pembeli dapat membuka sengketa dari halaman transaksi sebelum mengonfirmasi penerimaan barang.",
        "Kedua pihak wajib memberikan bukti yang relevan (foto, resi, riwayat chat) selama proses penengahan.",
        "Penyalahgunaan mekanisme sengketa — termasuk klaim palsu — dapat mengakibatkan penangguhan akun.",
      ],
    },
    {
      title: "6. Biaya",
      body: [
        "Penggunaan aplikasi dasar tidak dipungut biaya. Biaya layanan per transaksi, jika ada, akan ditampilkan dengan jelas sebelum pembayaran.",
        "Rincian biaya terkini tercantum di halaman Biaya dan merupakan bagian tak terpisahkan dari ketentuan ini.",
      ],
    },
    {
      title: "7. Batasan tanggung jawab",
      body: [
        "Kahade menyediakan platform dan layanan escrow, bukan penjual barang. Kualitas dan keaslian barang adalah tanggung jawab penjual.",
        "Tanggung jawab Kami terbatas pada nilai transaksi yang ditahan dalam escrow dan tidak mencakup kerugian tidak langsung.",
        "Kami berupaya menjaga Layanan selalu tersedia, namun tidak menjamin bebas gangguan sepenuhnya.",
      ],
    },
    {
      title: "8. Hukum yang berlaku",
      body: [
        "Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia.",
        "Setiap perselisihan akan diselesaikan terlebih dahulu secara musyawarah. Jika tidak tercapai, perselisihan tunduk pada yurisdiksi pengadilan di Indonesia.",
      ],
    },
  ],
};
