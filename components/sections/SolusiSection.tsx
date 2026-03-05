"use client";

import { useInView } from "@/src/hooks/useInView";
import { Lock, FileCheck, RefreshCw, Bell, Headphones, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Lock,
    title: "Dana Dijaga Escrow",
    desc: "Dana pembeli dikunci di rekening escrow Kahade — tidak bisa diakses siapapun sampai transaksi selesai sesuai kesepakatan.",
  },
  {
    icon: FileCheck,
    title: "Kontrak Transaksi Digital",
    desc: "Setiap transaksi memiliki kontrak digital yang mengikat kedua pihak. Syarat dan ketentuan tercatat jelas, tidak bisa diubah sepihak.",
  },
  {
    icon: RefreshCw,
    title: "Penyelesaian Sengketa",
    desc: "Jika terjadi perselisihan, tim mediasi Kahade turun tangan. Setiap klaim diproses berdasarkan bukti, bukan asumsi.",
  },
  {
    icon: Bell,
    title: "Notifikasi Real-time",
    desc: "Setiap perubahan status — dari pembayaran masuk, pengiriman, hingga konfirmasi — langsung dikirim via email, SMS, dan push notification.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    desc: "Tim dukungan Kahade siap membantu kapanpun. Tidak ada transaksi yang terbengkalai tanpa penanganan dari kami.",
  },
  {
    icon: ArrowRight,
    title: "Integrasi Mudah",
    desc: "API terbuka untuk bisnis yang ingin mengintegrasikan layanan escrow langsung ke platform mereka sendiri.",
  },
];

export default function SolusiSection() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="solusi" ref={sectionRef} className="section bg-white">
      <div className="container-base">

        {/* Header */}
        <div className={`section-header anim-fade-up ${inView ? "in-view" : ""}`}>
          <h2 className="section-title">Solusi yang Melindungi<br className="hidden sm:block" /> Kedua Pihak</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Kahade hadir sebagai pihak ketiga terpercaya — memastikan pembeli dan penjual
            sama-sama terlindungi dari awal hingga transaksi selesai.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`anim-fade-up ${inView ? "in-view" : ""} border border-border rounded-xl p-6 hover:border-foreground/20 transition-all duration-200 hover:-translate-y-0.5`}
                style={{ transitionDelay: `${100 + i * 80}ms` }}
              >
                <div className="icon-box mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="card-title mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`anim-fade-up delay-600 ${inView ? "in-view" : ""} flex justify-center mt-10`}>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium text-sm hover:bg-muted transition-colors"
          >
            Lihat semua fitur <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
