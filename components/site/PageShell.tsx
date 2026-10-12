import type { ReactNode } from "react";
import { PageHeader, type PageHeaderMeta } from "@kahade/ui";
import { Breadcrumb } from "./Breadcrumb";

/** Kerangka halaman konten: breadcrumb + kepala halaman standar ekosistem + isi. */
export function PageShell({
  trail,
  kicker,
  title,
  desc,
  meta,
  children,
}: {
  trail: { name: string; path: string }[];
  kicker?: string;
  title: string;
  desc?: string;
  meta?: PageHeaderMeta[];
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader
        breadcrumb={<Breadcrumb trail={trail} />}
        eyebrow={kicker}
        title={title}
        lede={desc}
        meta={meta}
      />
      {children}
    </>
  );
}
