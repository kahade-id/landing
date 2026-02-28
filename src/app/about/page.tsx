import type { Metadata } from "next";
import SimplePage from "@/components/common/SimplePage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Tentang Kahade",
  description: "Kahade membantu transaksi online terasa lebih aman melalui alur escrow yang transparan, notifikasi real-time, dan pengalaman pengguna yang sederhana.",
  path: "/about",
});

export default function Page() { return <SimplePage eyebrow="Perusahaan" title="Tentang Kahade" description="Kahade membantu transaksi online terasa lebih aman melalui alur escrow yang transparan, notifikasi real-time, dan pengalaman pengguna yang sederhana." points={["Fokus pada alur transaksi yang jelas","Dukungan pengguna yang responsif","Desain sistem yang mudah diintegrasikan","Pendekatan keamanan berlapis"]} detailTitle="Apa yang Kahade bangun" detailBody="Kahade difokuskan pada pengalaman transaksi escrow yang lebih mudah dipahami: status jelas, jalur bantuan terlihat, dan dokumentasi yang tidak membingungkan." />; }
