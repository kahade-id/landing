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
      className="flex min-h-dvh flex-col items-center justify-center bg-surface px-5 py-16 text-center"
    >
      <div aria-hidden="true">
        <KahadeMark size={48} title="" />
      </div>
      <div className="animate-shimmer mt-8 h-8 w-56 max-w-xs rounded-full" aria-hidden="true" />
      <div className="animate-shimmer mt-3 h-4 w-40 max-w-xs rounded-full" aria-hidden="true" />
      <div className="mt-9 flex w-full max-w-xs flex-col gap-3" aria-hidden="true">
        <div className="animate-shimmer h-[52px] rounded-full" />
        <div className="animate-shimmer h-[52px] rounded-full" />
      </div>
      <span className="sr-only">Memuat halaman…</span>
    </main>
  );
}
