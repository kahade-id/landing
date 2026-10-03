import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DeeplinkFallback from "@/components/deeplink-fallback";

type Props = { params: Promise<{ token: string }> };

export const metadata: Metadata = { title: "Order — Kahade" };

/**
 * kahade.id/o/<token> — alias pendek untuk order link.
 *
 * Keamanan: detail order (nama, alamat, nominal) adalah data privat dan
 * TIDAK ditampilkan di web. Halaman ini hanya mengarahkan ke aplikasi
 * yang menangani autentikasi. Token order-link adalah capability URL —
 * tetap jangan bocorkan metadata sensitif di sini.
 */
export default async function Page({ params }: Props) {
  const { token } = await params;

  if (!/^[a-zA-Z0-9_-]{1,128}$/.test(token)) notFound();

  return (
    <DeeplinkFallback
      appPath={`order-link/${encodeURIComponent(token)}`}
      copy={{
        title: "Lihat Order",
        desc: "Buka detail order ini di aplikasi Kahade.",
      }}
    />
  );
}
