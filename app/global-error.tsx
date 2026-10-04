"use client";

import { Button } from "@/components/site/Button";
import { KahadeMark } from "@/components/Logo";

/**
 * Batas error global — dipakai hanya bila root layout sendiri yang gagal
 * (di luar jangkauan app/error.tsx). Wajib me-render <html>/<body> sendiri.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="bg-white">
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
          <KahadeMark className="h-14" />
          <h1 className="mt-8 text-3xl font-semibold tracking-tight text-black">
            Terjadi kesalahan.
          </h1>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[#525252]">
            Maaf, ada yang tidak beres di sisi kami. Silakan coba lagi atau
            kembali ke beranda.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button onClick={reset}>Coba lagi</Button>
            <Button variant="secondary" href="/">
              Ke beranda
            </Button>
          </div>
        </main>
      </body>
    </html>
  );
}
