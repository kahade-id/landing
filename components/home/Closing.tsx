import Image from "next/image";
import { Container, Logo } from "@kahade/ui";
import { DownloadActions } from "@/components/DownloadActions";
import { Phone } from "./Phone";

/** Ajakan unduh penutup — permukaan hitam, satu-satunya momen warna brand (mark kuning). */
export function Closing() {
  return (
    <section id="download" className="scroll-mt-16 overflow-hidden bg-surface-inverse text-white">
      <Container className="grid gap-14 pt-20 sm:pt-28 lg:grid-cols-12 lg:gap-12 lg:pt-32">
        <div className="lg:col-span-6 lg:pb-32">
          <Logo size={44} tone="brand" title="" />
          <h2 className="mt-10 max-w-[12ch] text-h1 text-white">Waktunya jual beli tanpa was-was.</h2>
          <p className="mt-6 max-w-md text-lead text-white/70">
            Unduh Kahade dan rasakan social commerce dengan transaksi yang terlindungi.
            Jual semudah posting, beli senyaman scroll.
          </p>
          <DownloadActions tone="dark" className="mt-10" />
        </div>
        <div className="relative h-[360px] sm:h-[440px] lg:col-span-5 lg:col-start-8 lg:h-auto">
          <div className="absolute inset-x-0 top-0 mx-auto w-[264px] sm:w-[300px] lg:top-4 lg:left-auto lg:mx-0 lg:w-[320px]">
            <Phone onDark>
              <Image
                src="/IMG_20261003_073351_971.jpg"
                alt=""
                fill
                sizes="(max-width: 640px) 248px, 302px"
                className="object-cover object-bottom"
              />
            </Phone>
          </div>
        </div>
      </Container>
    </section>
  );
}
