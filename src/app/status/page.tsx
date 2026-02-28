import type { Metadata } from "next";
import SimplePage from "@/components/common/SimplePage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Status Sistem",
  description: "Ringkasan ketersediaan layanan, riwayat pemeliharaan, dan pembaruan operasional penting untuk pengguna.",
  path: "/status",
});

export default function Page() { return <SimplePage eyebrow="Operasional" title="Status Sistem" description="Ringkasan ketersediaan layanan, riwayat pemeliharaan, dan pembaruan operasional penting untuk pengguna." points={["Status layanan inti","Riwayat insiden penting","Jadwal maintenance","Pembaruan performa platform"]} detailTitle="Tujuan halaman status" detailBody="Halaman status dipakai untuk memberi visibilitas tentang kondisi layanan, maintenance, dan pembaruan operasional penting secara lebih mudah dipantau." />; }
