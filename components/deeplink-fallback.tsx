"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { KahadeMark } from "@/components/Logo";

export type FallbackCopy = {
  title: string;
  desc: string;
};

/**
 * Halaman fallback universal link.
 *
 * Dipakai saat aplikasi Kahade BELUM terinstal (atau App Links /
 * Universal Links belum terverifikasi): browser membuka tautan
 * https://kahade.id/... dan mendarat di sini.
 *
 * Tugas halaman ini HANYA mengarahkan — bukan duplikasi konten:
 * 1. Saat mount, coba buka deep link `kahade://...` (berhasil bila
 *    aplikasi terinstal; gagal diam-diam bila tidak).
 * 2. Tampilkan tombol "Buka di aplikasi" (percobaan manual) +
 *    "Download aplikasi" (fallback ke /#download).
 *
 * `appPath`: path di aplikasi (tanpa scheme), mis. `user/budi` untuk
 * `kahade://user/budi`. Perlu karena URL web ala Instagram
 * (`kahade.id/budi`) berbeda dengan route aplikasi (`user/budi`).
 */
function FallbackContent({ copy, appPath }: { copy: FallbackCopy; appPath: string }) {
  const params = useSearchParams();
  const [attempted, setAttempted] = useState(false);

  const query = params.toString();
  const deepLink = `kahade://${appPath}${query ? `?${query}` : ""}`;

  useEffect(() => {
    if (attempted) return;
    setAttempted(true);
    const t = setTimeout(() => {
      window.location.href = deepLink;
    }, 600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
      <KahadeMark className="h-14 w-14" />
      <h1 className="mt-8 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">
        {copy.title}
      </h1>
      <p className="mt-3 max-w-sm text-[17px] leading-relaxed text-[#525252]">{copy.desc}</p>
      <div className="mt-9 flex w-full max-w-xs flex-col gap-3">
        <a
          href={deepLink}
          className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-black px-9 text-base font-semibold text-white transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
        >
          Buka di aplikasi
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

export default function DeeplinkFallback({
  copy,
  appPath,
}: {
  copy: FallbackCopy;
  appPath: string;
}) {
  return (
    <Suspense>
      <FallbackContent copy={copy} appPath={appPath} />
    </Suspense>
  );
}
