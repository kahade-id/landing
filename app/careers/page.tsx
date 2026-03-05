"use client";

import { useState } from "react";
import { InnerPageLayout } from "@/components/layout";
import { useInView } from "@/src/hooks/useInView";
import { jobListings } from "@/src/lib/site";
import { MapPin, Clock, ChevronDown, ArrowRight, Check } from "lucide-react";

const benefits = [
  { title: "Gaji Kompetitif", desc: "Kompensasi setara atau di atas standar industri teknologi Indonesia, ditinjau setiap tahun." },
  { title: "Asuransi Kesehatan", desc: "Perlindungan kesehatan premium untuk Anda dan anggota keluarga yang ditanggung." },
  { title: "100% Remote-friendly", desc: "Kerja dari mana saja di Indonesia. Output yang dinilai, bukan jam duduk di kursi." },
  { title: "Learning & Development", desc: "Budget Rp 5 juta/tahun untuk kursus, buku, konferensi, atau sertifikasi apa pun yang relevan." },
  { title: "Jam Kerja Fleksibel", desc: "Tidak ada jam check-in wajib. Atur jadual Anda sendiri selama deliverable terpenuhi." },
  { title: "Equity & Ownership", desc: "Opsi saham untuk karyawan inti. Kami tumbuh bersama — keuntungan dibagi bersama." },
  { title: "Team Retreats", desc: "Gathering tim 2× setahun di lokasi berbeda. Biaya akomodasi dan transportasi ditanggung penuh." },
  { title: "Hardware Budget", desc: "Budget Rp 15 juta untuk setup kerja: laptop, monitor, kursi ergonomis — pilihan Anda." },
];

const hiringSteps = [
  { step: "01", title: "Kirim Lamaran", desc: "CV dan portfolio (atau link proyek). Tidak ada template khusus — tunjukkan yang paling Anda banggakan." },
  { step: "02", title: "Intro Call", desc: "30 menit bersama HR kami. Bukan tes, hanya ngobrol: apa yang Anda cari, apa yang kami tawarkan." },
  { step: "03", title: "Technical / Craft Review", desc: "Sesuai posisi: tantangan teknis, studi kasus, atau review portfolio. Durasi 60–90 menit, bisa dijadwal ulang." },
  { step: "04", title: "Culture & Team Fit", desc: "Ngobrol santai dengan calon rekan kerja langsung. Tidak ada jawaban benar atau salah di sini." },
  { step: "05", title: "Offer", desc: "Jika cocok, offer keluar dalam 48 jam. Kami tidak percaya proses rekrut yang berlarut-larut." },
];

export default function CareersPage() {
  const [openJob, setOpenJob] = useState<string | null>(null);
  const [statsRef, statsInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [cultureRef, cultureInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [processRef, processInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [jobsRef, jobsInView] = useInView<HTMLElement>({ threshold: 0.03 });

  return (
    <InnerPageLayout
      hero={{
        eyebrow: "Karir",
        title: "Bergabung dengan\nTim Kahade.",
        description: "Kami sedang membangun sesuatu yang penting. Kalau Anda percaya bahwa teknologi bisa membuat transaksi lebih manusiawi, kami ingin mengenal Anda.",
      }}
      cta={{
        show: true,
        title: "Posisi Impian Anda Tidak Terdaftar?",
        description: "Kami selalu terbuka untuk orang yang luar biasa — bahkan tanpa lowongan yang tersedia. Kirimkan CV dan ceritakan diri Anda.",
        primaryButton: { label: "Kirim Lamaran Terbuka", href: "mailto:careers@kahade.id" },
        secondaryButton: { label: "Pelajari Budaya Kami", href: "#budaya" },
      }}
    >
      {/* Stats */}
      <section ref={statsRef} className="border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {[
              { value: "30+", label: "Orang di Tim" },
              { value: "6", label: "Departemen" },
              { value: "100%", label: "Remote-friendly" },
              { value: "4 Kota", label: "Tempat Tim Tersebar" },
            ].map((stat, i) => (
              <div key={stat.label} className={`px-8 py-12 text-center anim-fade-up ${["","delay-100","delay-200","delay-300"][i] ?? ""} ${statsInView ? "in-view" : ""}`}>
                <p className="text-5xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section id="budaya" ref={cultureRef} className="section border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className={`anim-fade-up ${cultureInView ? "in-view" : ""}`}>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Budaya</p>
              <h2 className="section-title mb-8">Bukan Sekadar<br />Tempat Bekerja.</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>Di Kahade, kami percaya bahwa orang terbaik tidak membutuhkan micromanagement. Mereka butuh konteks yang jelas, kepercayaan penuh, dan ruang untuk bereksperimen.</p>
                <p>Kami bergerak cepat, tapi bukan berarti terburu-buru. Kecepatan kami datang dari kejelasan prioritas, bukan tekanan waktu yang tidak realistis.</p>
                <p>Kesalahan boleh terjadi. Yang tidak boleh: menyembunyikannya. Budaya belajar dari kegagalan jauh lebih berharga dari budaya sempurna-semu.</p>
              </div>
            </div>
            <div className={`anim-fade-up delay-100 ${cultureInView ? "in-view" : ""}`}>
              <div className="grid grid-cols-1 gap-0 divide-y divide-border border border-border rounded-2xl overflow-hidden">
                {[
                  { q: "Seperti apa rapat di Kahade?", a: "Seminimal mungkin. Default adalah async — Notion, Slack, Loom. Kalau rapat, 30 menit dengan agenda jelas." },
                  { q: "Bagaimana keputusan dibuat?", a: "Berbasis data dan masukan tim. Keputusan besar dibagikan sebelum diambil. Tidak ada keputusan tertutup." },
                  { q: "Apa ekspektasi untuk remote workers?", a: "Online 4 jam overlap dengan Jakarta timezone, selebihnya bebas. Komitmen pada deliverable, bukan jam kerja." },
                  { q: "Apakah ada jenjang karir?", a: "Ya, dan transparan. Setiap level punya ekspektasi jelas yang bisa Anda baca bahkan sebelum bergabung." },
                ].map((item) => (
                  <div key={item.q} className="px-7 py-6">
                    <p className="text-sm font-semibold text-foreground mb-1.5">{item.q}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${benefitsInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Benefit</p>
            <h2 className="section-title">Yang Kami Tawarkan.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {benefits.map((b, i) => (
              <div key={b.title} className={`bg-white p-7 anim-fade-up ${["","delay-100","delay-200","delay-300","","delay-100","delay-200","delay-300"][i] ?? ""} ${benefitsInView ? "in-view" : ""}`}>
                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center mb-5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-foreground" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-2">{b.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section ref={processRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${processRef ? "in-view" : ""} ${processInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Proses Rekrutmen</p>
            <h2 className="section-title">Dari Lamaran<br />ke Hari Pertama.</h2>
            <p className="mt-5 text-muted-foreground">Rata-rata 2–3 minggu dari apply hingga offer. Tidak ada tahap yang tidak perlu.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {hiringSteps.map((s, i) => (
              <div key={s.step} className={`bg-white p-7 anim-fade-up ${["","delay-100","delay-200","delay-300","delay-400"][i] ?? ""} ${processInView ? "in-view" : ""}`}>
                <p className="text-3xl font-display font-bold text-muted-foreground/30 mb-5">{s.step}</p>
                <p className="text-sm font-semibold text-foreground mb-2">{s.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section ref={jobsRef} className="section">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${jobsInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Lowongan</p>
            <h2 className="section-title">Posisi Terbuka<br />Saat Ini.</h2>
          </div>
          <div className={`max-w-3xl anim-fade-up delay-100 ${jobsInView ? "in-view" : ""}`}>
            <div className="divide-y divide-border border-y border-border">
              {jobListings.map((job) => (
                <div key={job.id}>
                  <button
                    type="button"
                    onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                    aria-expanded={openJob === job.id}
                    className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                  >
                    <div>
                      <p className="text-base font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                        {job.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-0.5">{job.department}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />{job.location}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />{job.type}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 mt-1 transition-transform duration-200 ${openJob === job.id ? "rotate-180" : ""}`} />
                  </button>
                  {openJob === job.id && (
                    <div className="pb-7 space-y-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                      {job.requirements && (
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Kualifikasi</p>
                          <ul className="space-y-2">
                            {job.requirements.map((req: string) => (
                              <li key={req} className="text-sm text-muted-foreground flex items-start gap-3">
                                <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <a
                        href={`mailto:careers@kahade.id?subject=Lamaran: ${job.title}`}
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                      >
                        Lamar Posisi Ini
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
