import type { Metadata } from "next";
import Link from "next/link";
import { meta, required, data } from "@/content/artikel";
import { resolvePage } from "@/lib/content";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { DraftState } from "@/components/site/DraftState";
import { PageShell } from "@/components/site/PageShell";

export async function generateMetadata(): Promise<Metadata> {
  const page = resolvePage(meta, required, data);
  const base: Metadata = {
    title: `${meta.title} — Kahade`,
    description: meta.description,
    alternates: { canonical: `/${meta.slug}` },
  };
  if (page.status === "draft") {
    return { ...base, robots: { index: false, follow: false } };
  }
  return base;
}

const TRAIL = [
  { name: "Beranda", path: "/" },
  { name: meta.navTitle, path: `/${meta.slug}` },
];

export default function ArtikelIndexPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") {
    return (
      <main className="bg-white">
        <div className="mx-auto max-w-6xl px-5 pt-28 sm:px-8 sm:pt-32">
          <Breadcrumb trail={TRAIL} />
          <div className="mt-8 max-w-3xl pb-10">
            <h1 className="type-h2 text-black">{meta.title}</h1>
          </div>
        </div>
        <DraftState title={meta.navTitle} />
      </main>
    );
  }
  const d = page.data;
  return (
    <PageShell trail={TRAIL} kicker="Perusahaan" title={d.headline} desc={d.intro}>
      <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {d.articles.map((a) => (
            <Link
              key={a.slug}
              href={`/artikel/${a.slug}`}
              className="group flex flex-col rounded-[1.75rem] border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/25 hover:shadow-[0_20px_44px_-20px_rgb(0_0_0/0.18)]"
            >
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#525252]">
                {a.category}
              </p>
              <h2 className="type-h3 mt-3 text-black">{a.title}</h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#525252]">{a.description}</p>
              <p className="mt-5 text-sm text-[#525252]">
                {a.author} · {a.minutes} menit baca
              </p>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
