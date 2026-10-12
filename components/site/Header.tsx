"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@kahade/ui";
import { DownloadActions } from "@/components/DownloadActions";

const NAV = [
  { href: "/#fitur", label: "Fitur" },
  { href: "/#cara-kerja", label: "Cara kerja" },
  { href: "/biaya", label: "Biaya" },
  { href: "/keamanan", label: "Keamanan" },
  { href: "https://bantuan.kahade.id/", label: "Bantuan" },
];

/** Header global (SiteHeader ekosistem) untuk halaman pemasaran kahade.id. */
export function Header() {
  return (
    <SiteHeader
      site="home"
      nav={NAV}
      pathname={usePathname()}
      linkAs={Link}
      cta={{ label: "Unduh aplikasi", href: "/#download" }}
      mobileFooter={<DownloadActions size="md" layout="column" showApk={false} />}
    />
  );
}
