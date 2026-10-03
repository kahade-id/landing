import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DeeplinkAutoOpen from "@/components/deeplink-auto-open";
import { KahadeMark } from "@/components/Logo";

type Props = { params: Promise<{ code: string }> };

export const metadata: Metadata = {
  title: "Undang Teman — Kahade",
  description: "Daftar di Kahade dengan kode referral temanmu.",
};

/**
 * kahade.id/r/<code> — undangan referral pendek (BARU).
 * Pengganti ringkas dari /register?ref=<code>.
 */
export default async function Page({ params }: Props) {
  const { code } = await params;

  if (!/^[a-zA-Z0-9_-]{1,64}$/.test(code)) notFound();

  const appPath = `register?ref=${encodeURIComponent(code)}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
      <DeeplinkAutoOpen appPath={appPath} />
      <KahadeMark className="h-14 w-14" />
      <h1 className="mt-8 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">
        Temanmu mengajakmu ke Kahade
      </h1>
      <p className="mt-3 max-w-sm text-[17px] leading-relaxed text-[#525252]">
        Daftar dengan kode referral <span className="font-semibold text-black">{code}</span> dan
        mulai jual-beli aman dengan escrow.
      </p>
      <div className="mt-9 flex w-full max-w-xs flex-col gap-3">
        <a
          href={`kahade://${appPath}`}
          className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-black px-9 text-base font-semibold text-white transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
        >
          Daftar di aplikasi
        </a>
        <a
          href="/#download"
          className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-black/15 px-9 text-base font-semibold text-black transition-colors hover:bg-black/5"
        >
          Download aplikasi
        </a>
      </div>
    </main>
  );
}
