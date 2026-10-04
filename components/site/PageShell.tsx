import type { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";

/** Kerangka halaman konten: breadcrumb + hero ringkas + isi. */
export function PageShell({
  trail,
  kicker,
  title,
  desc,
  children,
}: {
  trail: { name: string; path: string }[];
  kicker: string;
  title: string;
  desc?: string;
  children: ReactNode;
}) {
  return (
    <main id="konten-utama" tabIndex={-1} className="bg-white">
      <div className="mx-auto max-w-6xl px-5 pt-28 sm:px-8 sm:pt-32">
        <Breadcrumb trail={trail} />
        <div className="mt-8 max-w-3xl pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#525252]">{kicker}</p>
          <h1 className="type-h2 mt-3 text-black">{title}</h1>
          {desc && <p className="type-body mt-4 max-w-2xl text-[#525252]">{desc}</p>}
        </div>
      </div>
      {children}
    </main>
  );
}
