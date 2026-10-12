import { DeeplinkFrame } from "./DeeplinkLayout";

/**
 * Skeleton pemuatan untuk halaman deeplink (kahade.id/<username>, /p/<id>,
 * /r/<code>, /v/<code>, /o/<token>, /transfer). Meniru kerangka
 * DeeplinkLayout agar tidak ada layar kosong saat fetch metadata
 * share/profil ke API backend (fail-open, cache 5 menit).
 */
export default function DeeplinkLoading() {
  return (
    <DeeplinkFrame>
      <main
        id="konten-utama"
        tabIndex={-1}
        aria-label="Memuat"
        className="flex flex-1 items-center justify-center px-4 pt-4 pb-10 outline-none sm:pb-16"
      >
        <div className="w-full max-w-[26rem]" aria-hidden="true">
          <div className="flex flex-col items-center rounded-panel border border-line bg-surface px-6 pt-10 pb-6 shadow-soft sm:px-8">
            <div className="animate-shimmer h-16 w-16 rounded-[14px]" />
            <div className="animate-shimmer mt-6 h-7 w-48 rounded-full" />
            <div className="animate-shimmer mt-3 h-4 w-36 rounded-full" />
            <div className="mt-8 flex w-full flex-col gap-3">
              <div className="animate-shimmer h-[52px] rounded-full" />
              <div className="animate-shimmer h-[52px] rounded-full" />
            </div>
          </div>
        </div>
        <span className="sr-only">Memuat halaman…</span>
      </main>
    </DeeplinkFrame>
  );
}
