import type { Metadata } from "next";
import DeeplinkFallback from "@/components/deeplink-fallback";

export const metadata: Metadata = { title: "Daftar" };

export default function Page() {
  return <DeeplinkFallback copy={{ title: "Daftar Akun", desc: "Buat akun Kahade di aplikasi — gratis." }} />;
}
