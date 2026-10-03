"use client";

import Link from "next/link";
import { KahadeMark } from "@/components/Logo";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
      <KahadeMark className="h-14 w-14" />
      <h1 className="type-h2 mt-8 text-black">Terjadi kesalahan.</h1>
      <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[#525252]">
        Maaf, ada yang tidak beres di sisi kami. Silakan coba lagi atau kembali ke beranda.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-[56px] items-center rounded-full bg-black px-9 text-base font-semibold text-white transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Coba lagi
        </button>
        <Link
          href="/"
          className="inline-flex min-h-[56px] items-center rounded-full border border-black/15 px-9 text-base font-semibold text-black transition-colors hover:border-black/40"
        >
          Ke beranda
        </Link>
      </div>
    </main>
  );
}
