"use client";

import { InnerPageLayout } from "@/components/layout";
import { useInView } from "@/src/hooks/useInView";
import { pressResources, companyStats } from "@/src/lib/site";
import { Download, FileText, ArrowRight, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";

const pressReleases = [
  { date: "12 Agustus 2024", tag: "Produk", title: "Kahade Luncurkan Escrow API untuk Marketplace dan Platform E-commerce", excerpt: "Dengan API baru ini, marketplace dapat mengintegrasikan perlindungan escrow langsung ke dalam alur transaksi mereka hanya dalam 2 hari pengembangan." },
  { date: "5 Maret 2024", tag: "Pendanaan", title: "Kahade Amankan Pendanaan Seri A Sebesar $5 Juta dari East Ventures", excerpt: "Pendanaan ini akan digunakan untuk mempercepat ekspansi tim engineering, memperkuat kepatuhan regulasi, dan mengembangkan fitur enterprise." },
  { date: "18 Januari 2024", tag: "Fitur", title: "Dispute Resolution 2.0: Resolusi Sengketa dalam 48 Jam", excerpt: "Sistem mediasi terbaru menggabungkan AI dan mediator manusia untuk memotong waktu resolusi dari rata-rata 7 hari menjadi kurang dari 48 jam." },
  { date: "3 November 2023", tag: "Milestone", title: "10.000 Pengguna Aktif: Pertumbuhan Organik Tanpa Iklan Berbayar", excerpt: "Kahade mencapai 10.000 pengguna aktif dalam 9 bulan sejak peluncuran publik — seluruhnya melalui word-of-mouth dan kepercayaan organik." },
  { date: "20 Januari 2023", tag: "Launch", title: "Kahade Resmi Diluncurkan: Escrow P2P untuk Indonesia", excerpt: "Platform escrow pertama di Indonesia yang dirancang khusus untuk transaksi peer-to-peer dengan biaya setransparent mungkin." },
];

const mediaCoverage = [
  { outlet: "Kompas", title: "Kahade, Solusi Escrow yang Diminati Pelaku UMKM", date: "Oktober 2024" },
  { outlet: "Tech in Asia", title: "This Indonesian Startup Wants to Make P2P Escrow Mainstream", date: "Maret 2024" },
  { outlet: "Bisnis Indonesia", title: "Startup Fintech Kahade Raih Pendanaan Seri A $5 Juta", date: "Maret 2024" },
  { outlet: "DealStreetAsia", title: "East Ventures Backs Indonesian Escrow Startup Kahade", date: "Maret 2024" },
  { outlet: "Republika Online", title: "Platform Escrow Lokal Lindungi Jutaan Rupiah Dana Pengguna", date: "Desember 2023" },
  { outlet: "IDN Times", title: "Kenalan dengan Kahade, Startup yang Bikin Jual Beli Online Lebih Aman", date: "September 2023" },
];

const factSheet = [
  { label: "Nama Perusahaan", value: "PT Kahade Indonesia" },
  { label: "Didirikan", value: "2022, Jakarta" },
  { label: "Pendiri", value: "Ahmad Fauzi & Sarah Wijaya" },
  { label: "Jumlah Karyawan", value: "30+ orang" },
  { label: "Total Pendanaan", value: "$5 Juta (Seri A)" },
  { label: "Pengguna Aktif", value: "10.000+" },
  { label: "Dana yang Dilindungi", value: "Rp 50 Miliar+" },
  { label: "Tingkat Keberhasilan Transaksi", value: "99.9%" },
];

export default function PressPage() {
  const [statsRef, statsInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [releasesRef, releasesInView] = useInView<HTMLElement>({ threshold: 0.03 });
  const [coverageRef, coverageInView] = useInView<HTMLElement>({ threshold: 0.03 });
  const [resourcesRef, resourcesInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [factRef, factInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <InnerPageLayout
      hero={{
        eyebrow: "Ruang Media",
        title: "Sumber Daya untuk\nJurnalis & Mitra Media.",
        description: "Siaran pers, aset brand, fact sheet, dan kontak tim media Kahade tersedia di sini.",
      }}
      cta={{
        show: true,
        title: "Butuh Pernyataan atau Wawancara?",
        description: "Tim media kami responsif dan siap membantu kebutuhan jurnalistik Anda.",
        primaryButton: { label: "Hubungi Tim Media", href: "mailto:press@kahade.id" },
        secondaryButton: { label: "Tentang Kahade", href: "/about" },
      }}
    >
      {/* Stats */}
      <section ref={statsRef} className="border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {companyStats.map((stat, i) => (
              <div key={stat.label} className={`px-8 py-12 text-center anim-fade-up ${["","delay-100","delay-200","delay-300"][i] ?? ""} ${statsInView ? "in-view" : ""}`}>
                <p className="text-5xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section ref={releasesRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${releasesInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Siaran Pers</p>
            <h2 className="section-title">Update Terbaru<br />dari Kahade.</h2>
          </div>
          <div className="space-y-0 divide-y divide-border border-y border-border">
            {pressReleases.map((release, i) => (
              <div key={release.title} className={`py-7 group anim-fade-up ${i % 2 === 0 ? "" : "delay-100"} ${releasesInView ? "in-view" : ""}`}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-28 hidden sm:block">
                    <p className="text-xs text-muted-foreground">{release.date}</p>
                    <span className="inline-block text-[10px] font-semibold tracking-widest uppercase border border-border rounded-full px-2 py-0.5 mt-1.5 text-muted-foreground">{release.tag}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 sm:hidden">
                      <span className="text-[10px] font-semibold tracking-widest uppercase border border-border rounded-full px-2 py-0.5 text-muted-foreground">{release.tag}</span>
                      <span className="text-xs text-muted-foreground">{release.date}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-muted-foreground transition-colors">{release.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{release.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section ref={coverageRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${coverageRef ? "" : ""} ${coverageInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Liputan Media</p>
            <h2 className="section-title">Kahade di Mata<br />Media Nasional.</h2>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden anim-fade-up delay-100 ${coverageInView ? "in-view" : ""}`}>
            {mediaCoverage.map((item) => (
              <div key={item.title} className="bg-white p-7 hover:bg-muted/30 transition-colors">
                <p className="text-xs font-semibold text-foreground mb-3">{item.outlet}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">{item.title}</p>
                <p className="text-xs text-muted-foreground/60">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fact Sheet + Resources side by side */}
      <section ref={resourcesRef} className="section border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Fact Sheet */}
            <div ref={factRef} className={`anim-fade-up ${factInView ? "in-view" : ""}`}>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Fakta Perusahaan</p>
              <h2 className="section-title mb-8">Kahade dalam<br />Angka & Fakta.</h2>
              <div className="border border-border rounded-2xl overflow-hidden divide-y divide-border">
                {factSheet.map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between px-7 py-4">
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <span className="text-sm font-semibold text-foreground text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className={`anim-fade-up delay-100 ${resourcesInView ? "in-view" : ""}`}>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Aset Media</p>
              <h2 className="section-title mb-8">Unduh Sumber<br />Daya Brand.</h2>
              <div className="space-y-3">
                {pressResources.map((resource) => (
                  resource.url ? (
                    <a key={resource.title} href={resource.url} className="group flex items-center gap-4 p-5 border border-border rounded-xl hover:border-foreground/30 transition-colors">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors">
                        <FileText className="w-4 h-4 text-muted-foreground group-hover:text-background transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">{resource.title}</p>
                        <p className="text-xs text-muted-foreground">{resource.description}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {resource.size && <span className="text-xs text-muted-foreground">{resource.size}</span>}
                        <Download className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </a>
                  ) : (
                    <div key={resource.title} className="flex items-center gap-4 p-5 border border-border rounded-xl border-dashed opacity-60">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">{resource.title}</p>
                        <p className="text-xs text-muted-foreground">{resource.description}</p>
                      </div>
                      <span className="text-xs text-muted-foreground flex-shrink-0">Segera</span>
                    </div>
                  )
                ))}
              </div>

              <div className="mt-10 border-t border-border pt-8">
                <p className="text-sm font-semibold text-foreground mb-2">Kontak Media</p>
                <p className="text-sm text-muted-foreground mb-4">Untuk pertanyaan, wawancara, atau informasi tambahan:</p>
                <a href="mailto:press@kahade.id" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4">
                  <Mail className="w-4 h-4" />
                  press@kahade.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
