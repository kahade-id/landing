import type { Metadata } from "next";
import DeeplinkFallback from "@/components/deeplink-fallback";

export const metadata: Metadata = { title: "Profil" };

export default function Page() {
  return <DeeplinkFallback copy={{ title: "Profil Pengguna", desc: "Lihat profil di aplikasi Kahade." }} />;
}
