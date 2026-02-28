import type { Metadata } from "next";
import SimplePage from "@/components/common/SimplePage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Blog & Artikel",
  description: "Kumpulan materi edukasi terkait transaksi online, keamanan, dan operasional marketplace.",
  path: "/blog",
});

export default function Page() { return <SimplePage eyebrow="Sumber Daya" title="Blog & Artikel" description="Kumpulan materi edukasi terkait transaksi online, keamanan, dan operasional marketplace." points={["Panduan transaksi aman","Tips pencegahan penipuan","Artikel edukasi pengguna","Update produk dan operasional"]} detailTitle="Isi yang tersedia" detailBody="Materi blog digunakan untuk membantu pengguna memahami alur transaksi, risiko umum, dan perubahan operasional yang relevan." />; }
