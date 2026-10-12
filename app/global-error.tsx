"use client";

import "./globals.css";
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
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#fff", color: "#000" }}>
        <main className="flex min-h-dvh flex-col items-center justify-center bg-surface px-5 text-center">
          <KahadeMark size={48} />
          <h1 className="mt-8 text-h2 text-fg">Terjadi kesalahan.</h1>
          <p className="mt-4 max-w-md text-body-lg text-fg-muted">
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
