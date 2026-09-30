"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Logo } from "@/components/logo";
import { DOWNLOAD_ANCHOR } from "@/lib/constants";

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
 *    "Download aplikasi" (fallback).
 */
function FallbackContent({ copy }: { copy: FallbackCopy }) {
  const pathname = usePathname();
  const params = useSearchParams();
  const [attempted, setAttempted] = useState(false);

  // Deep link skema kustom — path tanpa leading slash mengikuti konvensi
  // expo-router (kahade://order-link/abc → route /order-link/abc).
  const query = params.toString();
  const appPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;
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
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <Logo size="sm" />
      <h1 className="mt-10 text-3xl font-bold tracking-tight">{copy.title}</h1>
      <p className="mt-3 max-w-sm text-muted">{copy.desc}</p>
      <div className="mt-10 flex w-full max-w-xs flex-col gap-3">
        <a
          href={deepLink}
          className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-[15px] font-semibold text-paper transition-opacity hover:opacity-80"
        >
          Buka di aplikasi
        </a>
        <a
          href={DOWNLOAD_ANCHOR}
          className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-surface"
        >
          Download aplikasi
        </a>
      </div>
    </div>
  );
}

export default function DeeplinkFallback({ copy }: { copy: FallbackCopy }) {
  return (
    <Suspense>
      <FallbackContent copy={copy} />
    </Suspense>
  );
}
