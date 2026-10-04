import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeeplinkLayout } from "@/components/site/DeeplinkLayout";

type Props = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  return {
    title: "Undang Teman — Kahade",
    description: "Daftar di Kahade dengan kode referral temanmu.",
    alternates: { canonical: `/r/${encodeURIComponent(code)}` },
  };
}

/**
 * kahade.id/r/<code> — undangan referral pendek (BARU).
 * Pengganti ringkas dari /register?ref=<code>.
 */
export default async function Page({ params }: Props) {
  const { code } = await params;

  if (!/^[a-zA-Z0-9_-]{1,64}$/.test(code)) notFound();

  const appPath = `register?ref=${encodeURIComponent(code)}`;

  return (
    <DeeplinkLayout
      deepLink={`kahade://${appPath}`}
      autoOpenPath={appPath}
      title="Temanmu mengajakmu ke Kahade"
      primaryLabel="Daftar di aplikasi"
      desc={
        <>
          Daftar dengan kode referral <span className="font-semibold text-black">{code}</span> dan
          mulai jual-beli tanpa was-was.
        </>
      }
    />
  );
}
