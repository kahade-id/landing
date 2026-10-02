import type { Metadata } from "next";
import { meta, required, data } from "@/content/press";
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

export default function PressPage() {
  const page = resolvePage(meta, required, data);
  if (page.status === "draft") return <DraftView />;
  const d = page.data;
  return (
    <PageShell trail={TRAIL} kicker="Perusahaan" title={d.headline} desc={d.intro}>
      <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="max-w-[680px] rounded-[1.75rem] border border-black/10 bg-[#F3F4F6] p-8 sm:p-10">
          <p className="text-[17px] leading-relaxed text-[#262626]">{d.boilerplate}</p>
        </div>
        {site.contactEmail && (
          <p className="mt-8 text-[15px] text-[#525252]">
            Untuk kebutuhan media, hubungi{" "}
            <a href={`mailto:${site.contactEmail}`} className="font-semibold text-black underline underline-offset-4">{site.contactEmail}</a>.
          </p>
        )}
      </div>
    </PageShell>
  );
}
