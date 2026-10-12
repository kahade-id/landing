import Link from "next/link";
import { SiteFooter } from "@kahade/ui";
import { Header } from "@/components/site/Header";
import { DownloadActions } from "@/components/DownloadActions";

/** Kerangka halaman pemasaran: header + footer ekosistem. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="konten-utama" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <SiteFooter site="home" linkAs={Link}>
        <DownloadActions size="md" showApk={false} className="flex-wrap" />
      </SiteFooter>
    </>
  );
}
