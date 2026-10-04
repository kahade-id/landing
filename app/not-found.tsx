import { Button } from "@/components/site/Button";
import { StatusPage } from "@/components/site/StatusPage";

export const metadata = {
  title: "Halaman tidak ditemukan — Kahade",
  description: "Tautan yang kamu buka tidak tersedia. Kembali ke beranda Kahade.",
};

export default function NotFound() {
  return (
    <StatusPage
      kicker="404"
      title="Halaman tidak ditemukan."
      desc="Tautan yang kamu buka tidak tersedia atau sudah dipindahkan. Mari kembali ke tempat yang aman."
      actions={
        <Button href="/">Kembali ke beranda</Button>
      }
    />
  );
}
