import { KahadeMark } from "@/components/Logo";

/**
 * Skeleton pemuatan untuk halaman deeplink (kahade.id/<username>, /p/<id>,
 * /r/<code>, /v/<code>, /o/<token>, /transfer). Meniru kerangka
 * DeeplinkLayout agar tidak ada layar kosong saat fetch metadata
 * share/profil ke API backend (fail-open, cache 5 menit).
 */
export default function DeeplinkLoading() {
  return (
    <main
      id="konten-utama"
      tabIndex={-1}
      aria-label="Memuat"
      className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center"
    >
      <div className="animate-pulse" aria-hidden="true">
        <KahadeMark className="h-14 w-14" />
      </div>
      <div className="mt-8 h-8 w-56 max-w-xs animate-pulse rounded-full bg-black/10" aria-hidden="true" />
      <div className="mt-3 h-4 w-40 max-w-xs animate-pulse rounded-full bg-black/10" aria-hidden="true" />
      <div className="mt-9 flex w-full max-w-xs flex-col gap-3" aria-hidden="true">
        <div className="h-[52px] animate-pulse rounded-full bg-black/10" />
        <div className="h-[52px] animate-pulse rounded-full bg-black/10" />
      </div>
      <span className="sr-only">Memuat halaman…</span>
    </main>
  );
}
