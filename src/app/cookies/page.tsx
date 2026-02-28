import type { Metadata } from "next";
import SimplePage from "@/components/common/SimplePage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Kebijakan Cookie",
  description: "Penjelasan mengenai penggunaan cookie untuk keamanan sesi, analitik dasar, dan peningkatan pengalaman pengguna.",
  path: "/cookies",
});

export default function Page() { return <SimplePage eyebrow="Legal" title="Kebijakan Cookie" description="Penjelasan mengenai penggunaan cookie untuk keamanan sesi, analitik dasar, dan peningkatan pengalaman pengguna." points={["Cookie esensial untuk sesi","Preferensi tampilan pengguna","Analitik performa dasar","Kontrol dan pengaturan cookie"]} detailTitle="Ringkasan kebijakan" detailBody="Halaman ini membantu pengguna memahami jenis cookie yang digunakan, tujuannya, dan bagaimana preferensi dapat dikelola." />; }
