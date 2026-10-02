import type { Metadata } from "next";
import { meta, required, data } from "@/content/bantuan";
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

function DraftView() {
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

export default function BantuanPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  return (
    <PageShell trail={TRAIL} kicker="Bantuan" title={d.headline} desc={d.intro}>
      <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {d.topics.map((t) => (
            <div key={t.title} className="rounded-[1.75rem] border border-black/10 bg-white p-7">
              <h2 className="type-h3 text-black">{t.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[#525252]">{t.desc}</p>
            </div>
          ))}
        </div>
        {d.faqs.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="type-h3 text-black">Pertanyaan umum</h2>
            <div className="mt-6 space-y-3">
              {d.faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-black/10 bg-white">
                  <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-left text-[15px] font-semibold text-black [&::-webkit-details-marker]:hidden">
                    {f.q}
                  </summary>
                  <p className="px-6 pb-6 text-[15px] leading-relaxed text-[#525252]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageShell>
  );
}
