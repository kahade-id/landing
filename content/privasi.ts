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
export const data: Partial<PrivasiData> = {
  headline: "Kebijakan Privasi",
  updatedAt: "4 Oktober 2026",
  sections: [
    {
      title: "1. Data yang kami kumpulkan",
      body: [
        "Data akun: nama, nomor telepon, alamat email, dan foto profil yang Anda berikan saat mendaftar.",
        "Data verifikasi: dokumen identitas yang Anda unggah untuk verifikasi penjual.",
        "Data transaksi: riwayat pembelian, penjualan, chat transaksi, dan status pembayaran.",
        "Data teknis: jenis perangkat, versi aplikasi, dan log aktivitas untuk keamanan dan peningkatan layanan.",
      ],
    },
    {
      title: "2. Cara kami menggunakan data",
      body: [
        "Mengoperasikan Layanan: memproses transaksi, mengamankan dan meneruskan dana, serta menampilkan feed.",
        "Keamanan: mencegah penipuan, memverifikasi identitas, dan menyelesaikan sengketa.",
        "Komunikasi: mengirim notifikasi transaksi, pembaruan layanan, dan informasi penting lainnya.",
        "Peningkatan: menganalisis penggunaan agregat untuk memperbaiki pengalaman pengguna.",
      ],
    },
    {
      title: "3. Pembagian data",
      body: [
        "Kami tidak menjual data pribadi Anda kepada pihak mana pun.",
        "Data dibagikan secara terbatas kepada: mitra pembayaran dan pengiriman untuk memproses transaksi; serta aparat penegak hukum apabila diwajibkan oleh peraturan perundang-undangan.",
        "Detail pembayaran Anda tidak pernah ditampilkan kepada lawan transaksi Anda.",
      ],
    },
    {
      title: "4. Penyimpanan dan keamanan",
      body: [
        "Data disimpan di infrastruktur yang aman dengan enkripsi. Akses internal dibatasi berdasarkan kebutuhan tugas.",
        "Kami menyimpan data transaksi selama diperlukan untuk keperluan operasional, penyelesaian sengketa, dan kepatuhan hukum.",
      ],
    },
    {
      title: "5. Hak Anda",
      body: [
        "Anda berhak mengakses, memperbaiki, dan meminta penghapusan data pribadi Anda melalui pengaturan aplikasi atau dengan menghubungi kami.",
        "Anda dapat menarik persetujuan pemasaran kapan saja tanpa memengaruhi legalitas pemrosesan sebelumnya.",
        "Permintaan penghapusan dapat dibatasi apabila data masih diperlukan untuk penyelesaian transaksi atau kewajiban hukum.",
      ],
    },
    {
      title: "6. Perubahan kebijakan",
      body: [
        "Kebijakan ini dapat diperbarui dari waktu ke waktu. Perubahan material akan diberitahukan melalui aplikasi sebelum berlaku.",
      ],
    },
    {
      title: "7. Hubungi kami",
      body: [
        "Untuk pertanyaan tentang privasi atau permintaan terkait data pribadi, hubungi kami melalui halaman Kontak.",
      ],
    },
  ],
};
