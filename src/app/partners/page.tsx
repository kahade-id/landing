import type { Metadata } from "next";
import SimplePage from "@/components/common/SimplePage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Program Partner",
  description: "Untuk marketplace, komunitas, dan bisnis yang ingin bekerja sama dalam alur pembayaran atau integrasi layanan.",
  path: "/partners",
});

export default function Page() { return <SimplePage eyebrow="Kemitraan" title="Program Partner" description="Untuk marketplace, komunitas, dan bisnis yang ingin bekerja sama dalam alur pembayaran atau integrasi layanan." points={["Partner marketplace","Agensi & integrator","Afiliasi komunitas","Kolaborasi bisnis"]} detailTitle="Jenis kolaborasi" detailBody="Program partner diarahkan untuk bisnis yang membutuhkan diskusi operasional, integrasi, atau co-marketing dengan proses yang lebih terstruktur." />; }
