import type { Metadata } from "next";
import DeeplinkFallback from "@/components/deeplink-fallback";

export const metadata: Metadata = { title: "Bantuan" };

export default function Page() {
  return <DeeplinkFallback copy={{ title: "Bantuan", desc: "Baca artikel bantuan di aplikasi Kahade." }} />;
}
