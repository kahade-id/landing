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
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
      {autoOpenPath ? <DeeplinkAutoOpen appPath={autoOpenPath} /> : null}
      {media ?? <KahadeMark className="h-14 w-14" />}
      <h1 className="type-h2 mt-8 max-w-md text-black">{title}</h1>
      {desc ? (
        <div className="type-body mt-3 max-w-sm text-[#525252]">{desc}</div>
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
