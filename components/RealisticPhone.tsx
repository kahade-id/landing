"use client";

/**
 * Frame iPhone realistis — titanium, tombol samping, Dynamic Island,
 * kilau layar, dan bayangan berlapis. Isi layar via children.
 */
export function RealisticPhone({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Tombol samping kiri — action + volume */}
      <div
        aria-hidden="true"
        className="absolute -left-[2.5px] top-[13%] h-7 w-[3px] rounded-l-md bg-gradient-to-b from-[#6a6a6e] via-[#3a3a3d] to-[#232326]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[2.5px] top-[21%] h-14 w-[3px] rounded-l-md bg-gradient-to-b from-[#6a6a6e] via-[#3a3a3d] to-[#232326]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[2.5px] top-[29%] h-14 w-[3px] rounded-l-md bg-gradient-to-b from-[#6a6a6e] via-[#3a3a3d] to-[#232326]"
      />
      {/* Tombol power kanan */}
      <div
        aria-hidden="true"
        className="absolute -right-[2.5px] top-[24%] h-20 w-[3px] rounded-r-md bg-gradient-to-b from-[#6a6a6e] via-[#3a3a3d] to-[#232326]"
      />

      {/* Bingkai titanium */}
      <div className="rounded-[3.4rem] bg-gradient-to-b from-[#7a7a7e] via-[#434346] to-[#1e1e20] p-[3px] shadow-[0_70px_120px_-40px_rgb(0_0_0/0.55),0_30px_60px_-30px_rgb(0_0_0/0.35)]">
        {/* Garis antena */}
        <div aria-hidden="true" className="relative">
          <span className="absolute left-[18%] top-0 h-[3px] w-[2px] bg-[#8a8a8e]/70" />
          <span className="absolute right-[18%] top-0 h-[3px] w-[2px] bg-[#8a8a8e]/70" />
        </div>
        {/* Bezel hitam */}
        <div className="rounded-[3.25rem] bg-black p-[10px]">
          {/* Layar */}
          <div className="relative overflow-hidden rounded-[2.7rem] bg-white">
            {children}

            {/* Dynamic Island + kamera */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-3 z-20 h-[27px] w-[102px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_2px_rgb(255_255_255/0.15)]"
            >
              <span className="absolute right-[14px] top-1/2 h-[13px] w-[13px] -translate-y-1/2 rounded-full bg-[#101024]">
                <span className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#050510]">
                  <span className="absolute left-[1.5px] top-[1.5px] h-[2.5px] w-[2.5px] rounded-full bg-[#1e3a5f]" />
                </span>
              </span>
            </div>

            {/* Kilau layar */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-[115deg] from-white/[0.14] via-white/[0.03] via-30% to-transparent to-55%"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 top-0 z-30 h-10 bg-gradient-to-b from-white/[0.08] to-transparent blur-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
