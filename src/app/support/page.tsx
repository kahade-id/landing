import type { Metadata } from "next";
import SimplePage from "@/components/common/SimplePage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Pusat Bantuan",
  description: "Kumpulan rute bantuan mandiri untuk pertanyaan akun, pembayaran, pengiriman, sengketa, dan dukungan teknis.",
  path: "/support",
});

export default function Page() { return <SimplePage eyebrow="Bantuan" title="Pusat Bantuan" description="Kumpulan rute bantuan mandiri untuk pertanyaan akun, pembayaran, pengiriman, sengketa, dan dukungan teknis." points={["FAQ pengguna","Panduan akun & verifikasi","Panduan pembayaran & pencairan","Kontak support lanjutan"]} detailTitle="Arah bantuan mandiri" detailBody="Pusat bantuan sebaiknya menjadi rujukan pertama untuk pertanyaan rutin sebelum eskalasi ke tim support dilakukan." />; }
