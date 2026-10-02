import type { Metadata } from "next";
import { meta, required, data } from "@/content/biaya";
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

export default function BiayaPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  return (
    <PageShell trail={TRAIL} kicker="Bantuan" title={d.headline} desc={d.intro}>
      <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="overflow-x-auto rounded-[1.75rem] border border-black/10">
          <table className="w-full min-w-[480px] text-left">
            <tbody className="divide-y divide-black/10">
              {d.rows.map((r) => (
                <tr key={r.item} className="bg-white">
                  <th scope="row" className="p-6 text-[15px] font-semibold text-black">{r.item}</th>
                  <td className="p-6 text-[15px] leading-relaxed text-[#525252]">{r.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[#525252]">{d.note}</p>
      </div>
    </PageShell>
  );
}
