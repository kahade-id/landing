"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DeeplinkLayout } from "@/components/site/DeeplinkLayout";

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
 *    "Unduh aplikasi" (fallback ke /#download).
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

  return <DeeplinkLayout deepLink={deepLink} title={copy.title} desc={copy.desc} />;
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
