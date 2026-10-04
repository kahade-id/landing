import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DeeplinkFallback from "@/components/deeplink-fallback";

type Props = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const title = "Voucher — Kahade";
  const description = "Klaim voucher Kahade di aplikasi.";
  return {
    title,
    description,
    alternates: { canonical: `/v/${encodeURIComponent(code)}` },
    // Kode voucher adalah capability URL per pengguna — semua kode berbagi
    // salinan yang sama, jadi jangan indeks agar tidak jadi duplikat.
    robots: { index: false, follow: false },
    openGraph: { title, description },
  };
}

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
