import type { Metadata } from "next";
import DeeplinkFallback from "@/components/deeplink-fallback";

export const metadata: Metadata = { title: "Produk" };

export default function Page() {
  return <DeeplinkFallback copy={{ title: "Produk", desc: "Lihat produk di aplikasi Kahade." }} />;
}
