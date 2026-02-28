import type { Metadata } from "next";
import SimplePage from "@/components/common/SimplePage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Kebijakan Privasi",
  description: "Halaman ini menjelaskan bagaimana data akun, aktivitas transaksi, dan komunikasi pengguna dikelola dengan aman dan proporsional.",
  path: "/privacy",
});

export default function Page() { return <SimplePage eyebrow="Legal" title="Kebijakan Privasi" description="Halaman ini menjelaskan bagaimana data akun, aktivitas transaksi, dan komunikasi pengguna dikelola dengan aman dan proporsional." points={["Jenis data yang dikumpulkan","Tujuan pemrosesan data","Retensi & penghapusan data","Hak pengguna atas data pribadi"]} detailTitle="Yang dijelaskan pada halaman ini" detailBody="Kebijakan privasi merangkum bagaimana data akun, aktivitas, dan komunikasi diproses secara proporsional dan dijaga sesuai kebutuhan layanan." />; }
