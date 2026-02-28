import type { Metadata } from "next";
import SimplePage from "@/components/common/SimplePage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Syarat & Ketentuan",
  description: "Rangkuman aturan penggunaan platform, tanggung jawab pengguna, pembatasan layanan, dan proses penyelesaian sengketa.",
  path: "/terms",
});

export default function Page() { return <SimplePage eyebrow="Legal" title="Syarat & Ketentuan" description="Rangkuman aturan penggunaan platform, tanggung jawab pengguna, pembatasan layanan, dan proses penyelesaian sengketa." points={["Kewajiban pengguna","Ketentuan layanan transaksi","Penyelesaian sengketa","Pembatasan dan penangguhan akun"]} detailTitle="Cakupan syarat layanan" detailBody="Syarat dan ketentuan ini memberi ringkasan aturan penggunaan layanan, pembatasan, dan tanggung jawab setiap pihak yang memakai platform." />; }
