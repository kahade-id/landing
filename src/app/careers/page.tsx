import type { Metadata } from "next";
import SimplePage from "@/components/common/SimplePage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Bergabung dengan Tim Kahade",
  description: "Halaman ini merangkum budaya kerja, area peran, dan cara menghubungi tim untuk peluang kolaborasi maupun rekrutmen.",
  path: "/careers",
});

export default function Page() { return <SimplePage eyebrow="Karier" title="Bergabung dengan Tim Kahade" description="Halaman ini merangkum budaya kerja, area peran, dan cara menghubungi tim untuk peluang kolaborasi maupun rekrutmen." points={["Produk & engineering","Operasional & support","Growth & partnership","Remote-friendly workflow"]} detailTitle="Area kontribusi" detailBody="Halaman ini ditujukan untuk kandidat dan kolaborator yang ingin memahami area kerja utama, ritme tim, dan cara menghubungi Kahade." />; }
