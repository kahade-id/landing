"use client";

import { useInView } from "@/src/hooks/useInView";

export default function ComplianceSection() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="kepatuhan" ref={sectionRef} className="section bg-white">
      <div className="container-base">

        {/* Header */}
        <div className={`section-header anim-fade-up ${inView ? "in-view" : ""}`}>
          <h2 className="section-title">Komitmen Pada Kepatuhan</h2>
        </div>

        {/* Logos */}
        <div className={`anim-fade-up delay-200 ${inView ? "in-view" : ""}`}>
          <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap">
            {([
              { src: "/compliance/bi_icon.svg",         alt: "Bank Indonesia",          desc: "Bank Indonesia" },
              { src: "/compliance/kementrian_icon.svg", alt: "Kementerian Komunikasi",  desc: "Kemkominfo" },
              { src: "/compliance/kominfo_icon.svg",    alt: "Kominfo",                 desc: "Kominfo" },
              { src: "/compliance/ppatk_icon.svg",      alt: "PPATK",                   desc: "PPATK" },
            ] as const).map((reg) => (
              <div key={reg.alt} className="flex flex-col items-center gap-3 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={reg.src}
                  alt={reg.alt}
                  className="h-10 opacity-40 grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-300"
                  width={56}
                  height={40}
                />
                <span className="text-xs font-medium text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                  {reg.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance note */}
        <div className={`anim-fade-up delay-300 ${inView ? "in-view" : ""} mt-10`}>
          <div className="max-w-xl mx-auto border border-border rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Platform kami terdaftar resmi dan mematuhi regulasi Otoritas Jasa Keuangan (OJK),
              ketentuan Anti Pencucian Uang (APU-PPT), serta standar Know Your Customer (KYC)
              yang ditetapkan oleh PPATK dan Bank Indonesia.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
