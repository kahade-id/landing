"use client";

import { InnerPageLayout } from "@/components/layout";
import { useInView } from "@/src/hooks/useInView";
import { partnerTypes } from "@/src/lib/site";
import { Check, ArrowRight, Zap, BarChart3, Shield, Code2, Handshake } from "lucide-react";
import Link from "next/link";

const partnerBenefits = [
  { icon: Zap, title: "Integrasi Cepat", desc: "API RESTful dengan dokumentasi lengkap, sandbox environment, dan SDK untuk JavaScript, Python, dan Go. Dari zero ke production dalam 2 hari." },
  { icon: BarChart3, title: "Dashboard Monitoring", desc: "Pantau semua transaksi yang diproses lewat integrasi Anda secara real-time. Termasuk analytics, export data, dan alert otomatis." },
  { icon: Shield, title: "Keamanan Enterprise", desc: "Enkripsi end-to-end, IP whitelisting, webhook signing, dan audit log lengkap. Sesuai standar PCI-DSS dan regulasi OJK Indonesia." },
  { icon: Code2, title: "Technical Support", desc: "Tim engineer kami tersedia untuk membantu onboarding, debugging, dan custom integration. Bukan chatbot — orang nyata yang paham kode Anda." },
  { icon: Handshake, title: "Revenue Sharing", desc: "Program komisi yang kompetitif untuk mitra aktif. Semakin banyak volume transaksi yang Anda bawa, semakin besar bagi hasilnya." },
  { icon: ArrowRight, title: "Co-Marketing", desc: "Promosi bersama di channel kami — newsletter, media sosial, dan blog. Eksposur ke 10.000+ pengguna aktif Kahade." },
];

const processSteps = [
  { step: "01", title: "Ajukan Kemitraan", desc: "Isi formulir singkat atau email langsung ke partners@kahade.id. Kami merespon dalam 1 hari kerja." },
  { step: "02", title: "Discovery Call", desc: "30 menit bersama tim partnership kami untuk memahami kebutuhan teknis dan bisnis Anda." },
  { step: "03", title: "Technical Review", desc: "Kami review arsitektur integrasi bersama tim engineering Anda. Sandbox access diberikan di tahap ini." },
  { step: "04", title: "Agreement & Onboarding", desc: "Penandatanganan perjanjian kemitraan. Tim kami mendampingi seluruh proses onboarding hingga go-live." },
];

const existingPartners = [
  { name: "PaymentCo", type: "Mitra Pembayaran" },
  { name: "ShopConnect", type: "Mitra Marketplace" },
  { name: "TechStack", type: "Mitra Teknologi" },
  { name: "FinFlow", type: "Mitra Pembayaran" },
  { name: "MarketHub", type: "Mitra Marketplace" },
  { name: "DevOps Pro", type: "Mitra Teknologi" },
];

export default function PartnersPage() {
  const [heroRef, heroInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [typesRef, typesInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [benefitsRef, benefitsInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [processRef, processInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [partnersRef, partnersInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <InnerPageLayout
      hero={{
        eyebrow: "Kemitraan",
        title: "Bangun Bersama\nEkosistem Kepercayaan.",
        description: "Integrasikan escrow Kahade ke platform Anda, atau jadilah bagian dari jaringan mitra yang terus berkembang.",
      }}
      cta={{
        show: true,
        title: "Siap Bermitra dengan Kahade?",
        description: "Diskusikan peluang kemitraan bersama tim kami. Tidak ada komitmen di tahap awal.",
        primaryButton: { label: "Ajukan Kemitraan", href: "mailto:partners@kahade.id" },
        secondaryButton: { label: "Lihat Dokumentasi API", href: "https://docs.kahade.id" },
      }}
    >
      {/* Stats */}
      <section ref={statsRef} className="border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {[
              { value: "20+", label: "Mitra Aktif" },
              { value: "2 Hari", label: "Rata-rata Waktu Integrasi" },
              { value: "99.9%", label: "API Uptime" },
              { value: "24/7", label: "Dukungan Teknis" },
            ].map((stat, i) => (
              <div key={stat.label} className={`px-8 py-12 text-center anim-fade-up ${["","delay-100","delay-200","delay-300"][i] ?? ""} ${statsInView ? "in-view" : ""}`}>
                <p className="text-4xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section ref={typesRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${typesInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Jenis Kemitraan</p>
            <h2 className="section-title">Temukan Model<br />Kemitraan yang Tepat.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, i) => (
              <div key={type.title} className={`border-t border-border pt-8 anim-fade-up ${["","delay-100","delay-200"][i] ?? ""} ${typesInView ? "in-view" : ""}`}>
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-6">
                  <span className="text-sm font-bold text-foreground">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{type.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-7">{type.description}</p>
                <ul className="space-y-3 mb-8">
                  {type.benefits.map((benefit: string) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:partners@kahade.id"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
                >
                  {type.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${benefitsInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Keuntungan</p>
            <h2 className="section-title">Yang Anda Dapatkan<br />sebagai Mitra.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {partnerBenefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className={`bg-white p-8 anim-fade-up ${["","delay-100","delay-200","","delay-100","delay-200"][i] ?? ""} ${benefitsInView ? "in-view" : ""}`}>
                  <Icon className="w-5 h-5 text-foreground mb-5" />
                  <p className="text-sm font-semibold text-foreground mb-2">{b.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${processInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Proses</p>
            <h2 className="section-title">Dari Diskusi<br />ke Go-Live dalam Hitungan Hari.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {processSteps.map((s, i) => (
              <div key={s.step} className={`bg-white p-8 anim-fade-up ${["","delay-100","delay-200","delay-300"][i] ?? ""} ${processInView ? "in-view" : ""}`}>
                <p className="text-4xl font-display font-bold text-muted-foreground/20 mb-5">{s.step}</p>
                <p className="text-sm font-semibold text-foreground mb-2">{s.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <section ref={partnersRef} className="section">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${partnersInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Jaringan</p>
            <h2 className="section-title">Bergabunglah dengan<br />Mitra yang Sudah Ada.</h2>
          </div>
          <div className={`grid grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden anim-fade-up delay-100 ${partnersInView ? "in-view" : ""}`}>
            {existingPartners.map((partner) => (
              <div key={partner.name} className="bg-white px-8 py-10">
                <p className="text-base font-semibold text-foreground">{partner.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{partner.type}</p>
              </div>
            ))}
          </div>
          <div className={`mt-8 anim-fade-up delay-200 ${partnersInView ? "in-view" : ""}`}>
            <p className="text-sm text-muted-foreground">
              Nama mitra bersifat representatif.{" "}
              <Link href="/contact" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
                Hubungi kami
              </Link>{" "}
              untuk informasi resmi.
            </p>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
