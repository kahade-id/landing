import type { Metadata } from "next";
import { meta, required, data } from "@/content/privasi";
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

export default function PrivasiPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  return (
    <PageShell trail={TRAIL} kicker="Legal" title={d.headline} desc={`Terakhir diperbarui: ${d.updatedAt}`}>
      <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8 print:pb-0">
        <div className="max-w-[680px] space-y-10">
          {d.sections.map((s, i) => (
            <section key={s.title} aria-labelledby={`privasi-${i}`}>
              <h2 id={`privasi-${i}`} className="type-h3 text-black">{s.title}</h2>
              <div className="mt-4 space-y-4">
                {s.body.map((p, j) => (
                  <p key={j} className="type-body text-[#262626]">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
