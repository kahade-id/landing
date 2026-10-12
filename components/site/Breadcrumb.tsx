import { Breadcrumb as DsBreadcrumb } from "@kahade/ui";
import { breadcrumbJsonLd, JsonLd } from "./JsonLd";
import { site } from "@/content/site";

/** Breadcrumb visual (design system) + JSON-LD BreadcrumbList. */
export function Breadcrumb({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(site.siteUrl, trail)} />
      <DsBreadcrumb
        items={trail.map((t, i) => ({
          label: t.name,
          href: i === trail.length - 1 ? undefined : t.path,
        }))}
      />
    </>
  );
}
