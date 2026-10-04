import type { Metadata } from "next";
import DeeplinkFallback from "@/components/deeplink-fallback";

export const metadata: Metadata = {
  title: "Transfer — Kahade",
  description: "Lanjutkan transfer di aplikasi Kahade.",
};

/** kahade.id/transfer — deep link transfer, fallback ke browser bila aplikasi belum terinstal. */
export default function Page() {
  return (
    <DeeplinkFallback
      appPath="transfer"
      copy={{ title: "Transfer", desc: "Lanjutkan transfer di aplikasi Kahade." }}
    />
  );
}
