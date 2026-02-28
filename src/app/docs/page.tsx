import type { Metadata } from "next";
import SimplePage from "@/components/common/SimplePage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Dokumentasi Integrasi",
  description: "Referensi umum untuk integrasi, webhook, alur transaksi, dan praktik implementasi yang disarankan.",
  path: "/docs",
});

export default function Page() { return <SimplePage eyebrow="Developer" title="Dokumentasi Integrasi" description="Referensi umum untuk integrasi, webhook, alur transaksi, dan praktik implementasi yang disarankan." points={["Gambaran alur API","Webhook & notifikasi","Skema autentikasi","Checklist go-live"]} detailTitle="Materi dokumentasi" detailBody="Dokumentasi diposisikan sebagai referensi awal untuk tim produk dan engineering sebelum integrasi yang lebih dalam dilakukan." />; }
