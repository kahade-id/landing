import type { Metadata } from "next";
import { meta, required, data } from "@/content/karier";
import { resolvePage } from "@/lib/content";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { DraftState } from "@/components/site/DraftState";
import { PageShell } from "@/components/site/PageShell";
import { site } from "@/content/site";

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

export default function KarierPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  return (
    <PageShell trail={TRAIL} kicker="Perusahaan" title={d.headline} desc={d.intro}>
      <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        {d.benefits.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.benefits.map((b) => (
              <div key={b.title} className="rounded-[1.75rem] border border-black/10 bg-white p-7">
                <h2 className="type-h3 text-black">{b.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[#525252]">{b.desc}</p>
              </div>
            ))}
          </div>
        )}
        <h2 className="type-h3 mt-16 text-black">Lowongan terbuka</h2>
        {d.jobs.length === 0 ? (
          <div className="mt-6 rounded-[1.75rem] border border-black/10 bg-[#F3F4F6] p-8 text-center">
            <p className="text-[17px] font-semibold text-black">Belum ada lowongan terbuka.</p>
            <p className="mx-auto mt-2 max-w-md text-[15px] text-[#525252]">
              Tertarik bergabung? Kirim minat dan portofoliomu — kami senang mendengarnya.
            </p>
            {site.contactEmail && (
              <a href={`mailto:${site.contactEmail}`} className="mt-6 inline-flex min-h-[48px] items-center rounded-full bg-black px-7 text-[15px] font-semibold text-white">
                Kirim minat
              </a>
            )}
          </div>
        ) : (
          <ul className="mt-6 divide-y divide-black/10 rounded-[1.75rem] border border-black/10">
            {d.jobs.map((j) => (
              <li key={j.title} className="flex flex-wrap items-center justify-between gap-3 p-6">
                <div>
                  <p className="text-[17px] font-semibold text-black">{j.title}</p>
                  <p className="mt-1 text-sm text-[#525252]">{j.location} · {j.type}</p>
                </div>
                {j.url && <a href={j.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center rounded-full border border-black/15 px-6 text-sm font-semibold text-black">Lamar</a>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageShell>
  );
}
