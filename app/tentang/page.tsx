import type { Metadata } from "next";
import { meta, required, data } from "@/content/tentang";
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

export default function TentangPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  return (
    <PageShell trail={TRAIL} kicker="Perusahaan" title={d.headline} desc={d.subheadline}>
      <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="max-w-[680px] space-y-5">
          {d.body.map((p, i) => (
            <p key={i} className="type-body text-[#262626]">{p}</p>
          ))}
        </div>
        {d.values.length > 0 && (
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {d.values.map((v) => (
              <div key={v.title} className="rounded-[1.75rem] border border-black/10 bg-white p-7">
                <h2 className="type-h3 text-black">{v.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[#525252]">{v.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  );
}
