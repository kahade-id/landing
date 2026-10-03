import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DeeplinkFallback from "@/components/deeplink-fallback";

type Props = { params: Promise<{ code: string }> };

export const metadata: Metadata = { title: "Voucher — Kahade" };

/**
 * kahade.id/v/<code> — voucher/promo publik (BARU).
 * Klaim dilakukan di aplikasi; halaman web hanya mengarahkan.
 */
export default async function Page({ params }: Props) {
  const { code } = await params;

  if (!/^[a-zA-Z0-9_-]{1,64}$/.test(code)) notFound();

  return (
    <DeeplinkFallback
      appPath={`vouchers?code=${encodeURIComponent(code)}`}
      copy={{
        title: "Voucher Kahade",
        desc: `Klaim voucher ${code} di aplikasi Kahade.`,
      }}
    />
  );
}
