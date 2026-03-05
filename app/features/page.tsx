"use client";

import { InnerPageLayout } from "@/components/layout";
import { useInView } from "@/src/hooks/useInView";
import {
  Shield, Smartphone, Globe, RefreshCw, BarChart3, MessageSquare,
  History, Bell, DollarSign, Wallet, Zap, UserCheck, FileSearch,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const coreFeatures = [
  {
    number: "01",
    icon: Shield,
    title: "Sistem Escrow Otomatis",
    description:
      "Dana ditahan secara otomatis hingga transaksi selesai sesuai kesepakatan kedua pihak. Tidak ada intervensi manual — semua berjalan berdasarkan kondisi yang telah disepakati.",
    badge: "Core",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Perlindungan Dua Arah",
    description:
      "Mekanisme perlindungan seimbang bagi pembeli dan penjual untuk meminimalkan risiko. Kedua pihak mendapat jaminan yang setara dalam setiap transaksi.",
    badge: "Core",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Status Transaksi Real-Time",
    description:
      "Pantau setiap tahapan transaksi secara transparan dari awal hingga selesai. Tidak ada yang tersembunyi — semua status tampil secara langsung dan akurat.",
    badge: "Core",
  },
  {
    number: "04",
    icon: FileSearch,
    title: "Sistem Sengketa Terstruktur",
    description:
      "Proses mediasi yang jelas jika terjadi ketidaksesuaian dalam transaksi. Tim mediasi kami meninjau bukti dari kedua pihak dan membuat keputusan yang adil.",
    badge: "Core",
  },
  {
    number: "05",
    icon: MessageSquare,
    title: "Diskusi dalam Transaksi",
    description:
      "Komunikasi langsung di dalam transaksi yang terdokumentasi dan dapat ditinjau kembali. Semua percakapan tersimpan sebagai bagian dari rekam jejak transaksi.",
    badge: "Core",
  },
  {
    number: "06",
    icon: History,
    title: "Riwayat & Jejak Transaksi",
    description:
      "Seluruh aktivitas tercatat rapi untuk memastikan transparansi dan akuntabilitas. Setiap perubahan status, pembayaran, dan keputusan tersimpan secara permanen.",
    badge: "Core",
  },
  {
    number: "07",
    icon: Bell,
    title: "Notifikasi Otomatis",
    description:
      "Pemberitahuan setiap perubahan status agar kedua pihak selalu terinformasi. Push notification, email, dan SMS — pilih channel yang paling nyaman untuk Anda.",
    badge: "Core",
  },
  {
    number: "08",
    icon: DollarSign,
    title: "Biaya Transaksi Fleksibel & Transparan",
    description:
      "Biaya dapat dibebankan ke pembeli, penjual, atau dibagi (split) sesuai kesepakatan, ditampilkan secara jelas sebelum transaksi dibuat. Tidak ada biaya tersembunyi.",
    badge: "Core",
  },
];

const advancedFeatures = [
  {
    number: "09",
    icon: Wallet,
    title: "Multi-Metode Pembayaran",
    description:
      "Mendukung transfer bank, e-wallet, kartu kredit, dan KahadePay sebagai dompet internal. Bayar dengan cara yang paling mudah untuk Anda.",
    badge: "Advanced",
  },
  {
    number: "10",
    icon: Zap,
    title: "Pencairan Dana Otomatis",
    description:
      "Dana bisa otomatis cair sesuai kondisi yang disepakati, mengurangi intervensi manual. Atur kondisi pencairan dan biarkan sistem bekerja untuk Anda.",
    badge: "Advanced",
  },
  {
    number: "11",
    icon: UserCheck,
    title: "Verifikasi Identitas (KYC)",
    description:
      "Meningkatkan trust dan keamanan dengan memastikan semua pengguna terverifikasi. Proses KYC cepat, aman, dan sesuai dengan regulasi yang berlaku di Indonesia.",
    badge: "Advanced",
  },
  {
    number: "12",
    icon: FileSearch,
    title: "Audit Log / Rekam Jejak Lengkap",
    description:
      "Semua aktivitas transaksi tercatat secara detail untuk audit, compliance, dan keamanan. Data log tersedia untuk keperluan hukum dan pelaporan regulasi.",
    badge: "Advanced",
  },
];

const platforms = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Aplikasi Mobile",
    subtitle: "iOS & Android",
    description:
      "Buat, pantau, dan kelola transaksi escrow dari mana saja. Notifikasi real-time, autentikasi biometrik, dan UI yang dioptimalkan untuk layar kecil.",
    highlights: ["Face ID & Fingerprint", "Push Notification", "Mode Offline (view-only)", "Dark Mode"],
    cta: { label: "Download di App Store", href: "#" },
    ctaSecondary: { label: "Download di Google Play", href: "#" },
  },
  {
    id: "web",
    icon: Globe,
    title: "Aplikasi Web",
    subtitle: "Browser apa saja",
    description:
      "Akses penuh fitur Kahade dari browser. Dashboard lengkap, manajemen transaksi batch, ekspor laporan, dan integrasi API untuk bisnis.",
    highlights: ["Dashboard Lengkap", "Ekspor CSV / PDF", "API Integration", "Multi-akun"],
    cta: { label: "Buka Aplikasi Web", href: "https://app.kahade.id" },
    ctaSecondary: null,
  },
];

function FeatureCard({
  feature,
  delay,
  inView,
}: {
  feature: (typeof coreFeatures)[0];
  delay: string;
  inView: boolean;
}) {
  const Icon = feature.icon;
  return (
    <div
      className={`group relative border border-border rounded-xl p-6 hover:border-foreground/20 transition-all anim-fade-up ${delay} ${inView ? "in-view" : ""}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
          <Icon className="w-5 h-5 text-foreground" />
        </div>
        <span className="text-xs font-semibold tabular-nums text-muted-foreground">{feature.number}</span>
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
    </div>
  );
}

const delays = ["", "delay-100", "delay-200", "delay-300", "", "delay-100", "delay-200", "delay-300"];

export default function FeaturesPage() {
  const [heroRef, heroInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [coreRef, coreInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [advRef, advInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [platRef, platInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <InnerPageLayout
      hero={{
        eyebrow: "Fitur",
        title: "Semua yang Anda Butuhkan\nuntuk Transaksi Aman.",
        description:
          "Dari escrow otomatis hingga mediasi sengketa — Kahade hadir dengan 12 fitur lengkap yang dirancang untuk melindungi kedua pihak dalam setiap transaksi.",
      }}
      cta={{ show: true }}
    >
      {/* Core Features */}
      <section ref={coreRef} className="section border-b border-border">
        <div className="container-base">
          <div className="section-header">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Fitur Utama</p>
            <h2 className="section-title">8 Fitur Inti Kahade</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Fitur-fitur fundamental yang memastikan setiap transaksi berjalan aman, transparan, dan terlindungi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreFeatures.map((f, i) => (
              <FeatureCard key={f.number} feature={f} delay={delays[i]} inView={coreInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section ref={advRef} className="section border-b border-border">
        <div className="container-base">
          <div className="section-header">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Fitur Lanjutan</p>
            <h2 className="section-title">4 Fitur Advanced</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Fitur tambahan untuk kebutuhan bisnis yang lebih kompleks dan volume transaksi yang lebih besar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advancedFeatures.map((f, i) => (
              <FeatureCard key={f.number} feature={f} delay={delays[i]} inView={advInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Platform section */}
      <section ref={platRef} className="section">
        <div className="container-base">
          <div className="section-header">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Platform</p>
            <h2 className="section-title">Tersedia di Semua Platform</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {platforms.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  id={p.id}
                  className={`border border-border rounded-2xl p-8 anim-fade-up ${i === 1 ? "delay-100" : ""} ${platInView ? "in-view" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                      <Icon className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{p.title}</p>
                      <p className="text-xs text-muted-foreground">{p.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {p.highlights.map((h) => (
                      <li key={h} className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={p.cta.href}
                      className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
                    >
                      {p.cta.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    {p.ctaSecondary && (
                      <a
                        href={p.ctaSecondary.href}
                        className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-medium px-5 py-2.5 rounded-lg hover:border-foreground/30 transition-colors"
                      >
                        {p.ctaSecondary.label}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
