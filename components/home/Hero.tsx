import type { CSSProperties } from "react";
import Image from "next/image";
import { Container, Eyebrow } from "@kahade/ui";
import { DownloadActions } from "@/components/DownloadActions";
import { ShieldCheck } from "@/lib/icons";
import { Phone } from "./Phone";

/**
 * Hero: rata kiri, judul display, CTA unduh, ponsel dengan screenshot asli
 * yang "muncul" dari tepi bawah seksi. Kartu "Dana diamankan" menumpang di
 * tepi ponsel: janji inti (perlindungan transaksi) terbaca di layar pertama.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <Container className="grid gap-12 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-24">
        <div className="lg:col-span-8 lg:pb-32">
          <Eyebrow>Social commerce Indonesia</Eyebrow>
          <h1 className="mt-6 text-display text-fg lg:text-[min(4.75rem,6.4vw)]">
            <span className="block">Jual beli aman,</span>
            <span className="block text-fg-muted">rasa media sosial.</span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-lead text-fg-muted sm:mt-8">
            Jual beli thrift, sneakers, dan barang bekas seperti scroll media sosial —
            setiap transaksi terlindungi.
          </p>
          <DownloadActions className="mt-9 sm:mt-10" />
          <p className="mt-5 text-small text-fg-subtle">
            Ditargetkan meluncur 8 Desember 2026.
          </p>
        </div>

        <div className="relative h-[420px] sm:h-[500px] lg:col-span-4 lg:h-auto">
          <div className="kh-rise absolute inset-x-0 top-0 mx-auto w-[276px] sm:w-[310px] lg:top-2 lg:right-0 lg:left-auto lg:mx-0 lg:w-[320px]">
            <Phone>
              <Image
                src="/IMG_20261003_073351_971.jpg"
                alt="Tampilan asli feed aplikasi Kahade: produk dari penjual tampil seperti postingan media sosial"
                fill
                preload
                sizes="(max-width: 640px) 260px, 312px"
                className="object-cover object-top"
              />
            </Phone>
            <div
              aria-hidden="true"
              style={{ "--kh-rise-delay": "450ms" } as CSSProperties}
              className="kh-rise absolute top-[38%] -left-3 z-10 flex items-center gap-3 rounded-control border border-line bg-surface py-3 pr-5 pl-3 shadow-lift sm:-left-16 lg:-left-16 xl:-left-32"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fg text-fg-inverse">
                <ShieldCheck weight="regular" className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-[14px] leading-5 font-semibold text-fg">Dana diamankan</span>
                <span className="text-[12px] leading-4 text-fg-muted">Cair setelah barang diterima</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
