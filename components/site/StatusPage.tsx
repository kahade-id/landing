import type { ReactNode } from "react";
import { KahadeMark } from "@/components/Logo";

/**
 * Kerangka halaman status (error 500 & 404).
 * Dipakai app/error.tsx dan app/not-found.tsx (di dalam header/footer situs).
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
    <div className="flex min-h-[70dvh] flex-col items-center justify-center bg-surface px-5 py-20 text-center">
      <KahadeMark size={48} />
      {kicker ? (
        <p className="mt-8 text-eyebrow tabular-nums text-fg-subtle">{kicker}</p>
      ) : null}
      <h1 className={`text-h2 text-fg ${kicker ? "mt-3" : "mt-8"}`}>{title}</h1>
      <p className="mt-4 max-w-md text-body-lg text-fg-muted">{desc}</p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">{actions}</div>
    </div>
  );
}
