import Link from "next/link";
import { allPages } from "@/lib/content";
import { site } from "@/content/site";
import { KahadeMark } from "@/components/Logo";
import { DownloadActions } from "@/components/DownloadActions";
import type { PageGroup } from "@/content/types";

const GROUP_TITLES: Record<PageGroup, string> = {
  perusahaan: "Perusahaan",
  bantuan: "Bantuan",
  legal: "Legal",
};

const PRODUCT_LINKS = [
  { label: "Aplikasi", href: "/#aplikasi" },
  { label: "Cara kerja", href: "/#cara-kerja" },
  { label: "Fitur", href: "/#fitur" },
  { label: "FAQ", href: "/#faq" },
  { label: "Unduh", href: "/#download" },
];

/** Link subdomain Kahade — dibuka di tab yang sama (satu ekosistem). */
const SUBDOMAIN_LINKS = [
  { label: "Karir", href: "https://karir.kahade.id" },
  { label: "Legalitas", href: "https://legal.kahade.id" },
  { label: "Pusat Bantuan", href: "https://bantuan.kahade.id" },
  { label: "Status Layanan", href: "https://status.kahade.id" },
];

/** Footer lengkap: memuat semua halaman (termasuk yang draft). */
export function Footer() {
  const pages = allPages();
  const year = new Date().getFullYear();

  const groups: {
    title: string;
    links: { label: string; href: string; external?: boolean }[];
  }[] = [
    {
      title: "Produk",
      links: PRODUCT_LINKS,
    },
    ...(Object.keys(GROUP_TITLES) as PageGroup[]).map((g) => ({
      title: GROUP_TITLES[g],
      links: [
        ...pages
          .filter((p) => p.meta.group === g)
          .map((p) => ({ label: p.meta.navTitle, href: `/${p.meta.slug}` })),
        ...(g === "perusahaan"
          ? SUBDOMAIN_LINKS.map((l) => ({ ...l, external: true }))
          : []),
      ],
    })),
  ];

  return (
    <footer className="border-t border-black/10 bg-[#FAFAFA]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_2fr] lg:gap-16">
          <div>
            <Link href="/" aria-label="Kahade — kembali ke beranda" className="inline-block">
              <KahadeMark className="h-10" />
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-[#525252]">
              Social commerce dengan escrow di setiap transaksi. Jual beli di
              feed, tanpa was-was.
            </p>
            <DownloadActions
              size="md"
              showApk={false}
              className="mt-6 flex-wrap"
            />
          </div>

          <nav aria-label="Navigasi footer" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {groups.map((col) => (
              <div key={col.title}>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-black">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-1">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.external ? (
                        <a
                          href={l.href}
                          className="inline-flex min-h-[40px] items-center text-[15px] text-[#525252] transition-colors hover:text-black"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="inline-flex min-h-[40px] items-center text-[15px] text-[#525252] transition-colors hover:text-black"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-2 border-t border-black/10 pt-8 sm:flex-row">
          <p className="text-sm text-[#525252]">
            © {year} {site.companyName}
          </p>
        </div>
      </div>
    </footer>
  );
}
