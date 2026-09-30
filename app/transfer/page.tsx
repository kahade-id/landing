import type { Metadata } from "next";
import DeeplinkFallback from "@/components/deeplink-fallback";

export const metadata: Metadata = { title: "Transfer" };

export default function Page() {
  return <DeeplinkFallback copy={{ title: "Transfer", desc: "Lanjutkan transfer di aplikasi Kahade." }} />;
}
