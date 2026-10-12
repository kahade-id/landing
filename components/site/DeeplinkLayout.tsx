import type { ReactNode } from "react";
import DeeplinkAutoOpen from "@/components/deeplink-auto-open";
import { KahadeMark } from "@/components/Logo";
import { Button } from "./Button";

/**
 * Kerangka halaman deeplink (kahade.id/<username>, /p/<id>, /r/<code>,
 * /payment/finish, dan fallback universal link).
 *
 * Menggantikan 5 salinan hand-made dari pola yang sama:
 * main terpusat + mark/avatar + h1 + deskripsi + tombol
 * "Buka di aplikasi" / "Unduh aplikasi".
 */
export function DeeplinkLayout({
  deepLink,
  autoOpenPath,
  media,
  title,
  desc,
  primaryLabel = "Buka di aplikasi",
}: {
  /** href penuh skema kahade:// untuk tombol utama */
  deepLink: string;
  /** bila diisi, coba buka aplikasi otomatis sekali saat mount */
  autoOpenPath?: string;
  /** pengganti KahadeMark (mis. avatar / foto produk / ikon status) */
  media?: ReactNode;
  title: string;
  desc?: ReactNode;
  primaryLabel?: string;
}) {
  return (
    <main id="konten-utama" tabIndex={-1} className="flex min-h-dvh flex-col items-center justify-center bg-surface px-5 py-16 text-center outline-none">
      {autoOpenPath ? <DeeplinkAutoOpen appPath={autoOpenPath} /> : null}
      {media ?? <KahadeMark size={48} />}
      <h1 className="mt-8 max-w-md text-h2 text-fg">{title}</h1>
      {desc ? (
        <div className="mt-3 max-w-sm text-body-lg text-fg-muted">{desc}</div>
      ) : null}
      <div className="mt-9 flex w-full max-w-xs flex-col gap-3">
        <Button href={deepLink}>{primaryLabel}</Button>
        <Button variant="secondary" href="/#download">
          Unduh aplikasi
        </Button>
      </div>
    </main>
  );
}
