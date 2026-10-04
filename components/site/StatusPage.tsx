import type { ReactNode } from "react";
import { KahadeMark } from "@/components/Logo";

/**
 * Kerangka halaman status (error 500 & 404).
 * Dipakai app/error.tsx dan app/not-found.tsx.
 */
export function StatusPage({
  kicker,
  title,
  desc,
  actions,
}: {
  kicker?: string;
  title: string;
  desc: string;
  actions: ReactNode;
}) {
  return (
    <main id="konten-utama" tabIndex={-1} className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
      <KahadeMark className="h-14" />
      {kicker ? (
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#525252]">
          {kicker}
        </p>
      ) : null}
      <h1 className={`type-h2 text-black ${kicker ? "mt-3" : "mt-8"}`}>
        {title}
      </h1>
      <p className="type-body mt-4 max-w-md text-[#525252]">{desc}</p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">{actions}</div>
    </main>
  );
}
