import Link from "next/link";
import { allPages } from "@/lib/content";
import { site } from "@/content/site";
import { KahadeMark } from "@/components/Logo";
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

/** Footer lengkap: memuat semua halaman (termasuk yang draft). */
export function Footer() {
  const pages = allPages();
  const year = new Date().getFullYear();

  const groups: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "Produk",
      links: PRODUCT_LINKS,
    },
    ...(Object.keys(GROUP_TITLES) as PageGroup[]).map((g) => ({
      title: GROUP_TITLES[g],
      links: pages
        .filter((p) => p.meta.group === g)
        .map((p) => ({ label: p.meta.navTitle, href: `/${p.meta.slug}` })),
    })),
  ];

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" aria-label="Kahade — kembali ke beranda" className="inline-block">
              <KahadeMark className="h-10" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#525252]">
              Social commerce dengan escrow di setiap transaksi. Jual beli di
              feed, tanpa was-was.
            </p>
          </div>

          <nav aria-label="Navigasi footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map((col) => (
              <div key={col.title}>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#525252]">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-1">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="inline-flex min-h-[40px] items-center text-[15px] text-[#262626] transition-colors hover:text-black"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-black/10 pt-7 sm:flex-row">
          <p className="text-sm text-[#525252]">
            © {year} {site.companyName}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-sm text-[#525252]">Dibuat dengan teliti di Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
