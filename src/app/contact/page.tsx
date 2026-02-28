import type { Metadata } from "next";
import SimplePage from "@/components/common/SimplePage";
import { createPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Hubungi Tim Kahade",
  description: "Kanal kontak resmi untuk pertanyaan produk, bantuan pengguna, pelaporan bug, dan diskusi kemitraan.",
  path: "/contact",
});

export default function Page() { return <SimplePage eyebrow="Kontak" title="Hubungi Tim Kahade" description={`Kami dapat dihubungi melalui email ${site.email} atau telepon ${site.phone}. Halaman ini menjadi titik masuk untuk pertanyaan produk, bantuan pengguna, maupun diskusi kemitraan.`} points={["Pertanyaan umum & bantuan akun","Diskusi integrasi & kebutuhan bisnis","Pelaporan bug dan isu keamanan","Masukan untuk pengembangan produk"]} detailTitle="Kapan sebaiknya menghubungi tim" detailBody="Gunakan kanal kontak untuk isu akun, pertanyaan transaksi, pelaporan kendala, atau diskusi kemitraan dan integrasi." />; }
