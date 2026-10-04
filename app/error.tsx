"use client";

import { Button } from "@/components/site/Button";
import { StatusPage } from "@/components/site/StatusPage";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <StatusPage
      title="Terjadi kesalahan."
      desc="Maaf, ada yang tidak beres di sisi kami. Silakan coba lagi atau kembali ke beranda."
      actions={
        <>
          <Button onClick={reset}>Coba lagi</Button>
          <Button variant="secondary" href="/">
            Ke beranda
          </Button>
        </>
      }
    />
  );
}
