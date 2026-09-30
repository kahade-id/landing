import type { Metadata } from "next";
import DeeplinkFallback from "@/components/deeplink-fallback";

export const metadata: Metadata = { title: "Etalase" };

export default function Page() {
  return <DeeplinkFallback copy={{ title: "Etalase", desc: "Lihat etalase di aplikasi Kahade." }} />;
}
