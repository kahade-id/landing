import type { ReactNode } from "react";
import { BatteryFull, CellSignalFull, WifiHigh } from "@/lib/icons";

/**
 * Bingkai ponsel sederhana: bezel hitam, Dynamic Island, status bar.
 * Isi layar (screenshot asli / UI) lewat children.
 */
export function Phone({
  children,
  onDark = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[3rem] bg-black p-[9px] ${
        onDark ? "ring-1 ring-white/20" : "shadow-lift ring-1 ring-black/5"
      } ${className}`}
    >
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.45rem] bg-surface">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-10 flex h-[42px] items-center justify-between bg-surface px-7 text-[13px] font-semibold text-fg"
        >
          <span className="tabular-nums">9.41</span>
          <span className="flex items-center gap-1">
            <CellSignalFull weight="fill" className="h-3.5 w-3.5" />
            <WifiHigh weight="bold" className="h-3.5 w-3.5" />
            <BatteryFull weight="fill" className="h-4 w-4" />
          </span>
        </div>
        <span
          aria-hidden="true"
          className="absolute top-[11px] left-1/2 z-20 h-[24px] w-[86px] -translate-x-1/2 rounded-full bg-black"
        />
        <div className="absolute inset-x-0 top-[42px] bottom-0">{children}</div>
      </div>
    </div>
  );
}
