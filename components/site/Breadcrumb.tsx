import Link from "next/link";
import { CaretRight } from "@/lib/icons";
import { breadcrumbJsonLd, JsonLd } from "./JsonLd";
import { site } from "@/content/site";

export function Breadcrumb({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(site.siteUrl, trail)} />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#525252]">
          {trail.map((t, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={t.path} className="flex items-center gap-1.5">
                {i > 0 && <CaretRight weight="regular" className="h-3.5 w-3.5 text-black/30" aria-hidden="true" />}
                {last ? (
                  <span aria-current="page" className="font-medium text-black">{t.name}</span>
                ) : (
                  <Link href={t.path} className="transition-colors hover:text-black">{t.name}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
