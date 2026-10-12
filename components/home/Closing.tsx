import { Container, Logo } from "@kahade/ui";
import { DownloadActions } from "@/components/DownloadActions";

/**
 * Ajakan unduh penutup — permukaan hitam, satu-satunya momen warna brand.
 * Mark kuning tampil besar dan utuh (tanpa dipotong/diregangkan, sesuai
 * pedoman brand) sebagai poster, bukan mengulang ponsel dari hero.
 */
export function Closing() {
  return (
    <section id="download" className="scroll-mt-16 overflow-hidden bg-surface-inverse text-white">
      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-12 lg:py-36">
        <div className="lg:col-span-7">
          <Logo size={56} tone="brand" title="" className="lg:hidden" />
          <p className="mt-10 text-small font-medium text-white/60 lg:mt-0">
            Ditargetkan meluncur 8 Desember 2026
          </p>
          <h2 className="mt-5 max-w-[12ch] text-h1 text-white">Waktunya jual beli tanpa was-was.</h2>
          <p className="mt-6 max-w-md text-lead text-white/70">
            Unduh Kahade dan rasakan social commerce dengan transaksi yang terlindungi.
            Jual semudah posting, beli senyaman scroll.
          </p>
          <DownloadActions tone="dark" className="mt-10" />
        </div>
        <div aria-hidden="true" className="hidden justify-end lg:col-span-5 lg:flex">
          <Logo size={360} tone="brand" title="" className="h-auto w-[min(100%,18rem)] xl:w-[19rem]" />
        </div>
      </Container>
    </section>
  );
}
