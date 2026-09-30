import type { Metadata } from "next";
import DeeplinkFallback from "@/components/deeplink-fallback";

export const metadata: Metadata = { title: "Order Link" };

export default function Page() {
  return <DeeplinkFallback copy={{ title: "Order Link", desc: "Buka tautan pesanan di aplikasi Kahade." }} />;
}
