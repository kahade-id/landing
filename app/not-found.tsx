import Link from "next/link";
import { SiteFooter } from "@kahade/ui";
import { Button } from "@/components/site/Button";
import { StatusPage } from "@/components/site/StatusPage";
import { Header } from "@/components/site/Header";

export const metadata = {
  title: "Halaman tidak ditemukan — Kahade",
  description: "Tautan yang kamu buka tidak tersedia. Kembali ke beranda Kahade.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="konten-utama" tabIndex={-1} className="outline-none">
        <StatusPage
          kicker="404"
          title="Halaman tidak ditemukan."
          desc="Tautan yang kamu buka tidak tersedia atau sudah dipindahkan. Mari kembali ke tempat yang aman."
          actions={
            <>
              <Button href="/">Kembali ke beranda</Button>
              <Button variant="secondary" href="https://bantuan.kahade.id/">
                Pusat bantuan
              </Button>
            </>
          }
        />
      </main>
      <SiteFooter site="home" linkAs={Link} />
    </>
  );
}
