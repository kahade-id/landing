"use client";

import { InnerPageLayout } from "@/components/layout";
import { useInView } from "@/src/hooks/useInView";
import { companyStats, teamMembers, values } from "@/src/lib/site";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";

const timeline = [
  { year: "2021", quarter: "Q4", title: "Ide Lahir", desc: "Ahmad kehilangan Rp 8 juta karena penjual menghilang. Frustrasi itu menjadi bahan bakar: escrow P2P yang bisa diakses semua orang harus ada di Indonesia." },
  { year: "2022", quarter: "Q1", title: "PT Kahade Indonesia Berdiri", desc: "Tim pendiri 4 orang mulai membangun infrastruktur dasar. Kantor pertama: meja lipat di ruang tamu co-founder." },
  { year: "2022", quarter: "Q3", title: "Beta Launch", desc: "500 pengguna terpilih mendapat akses awal. 94% merasa lebih aman bertransaksi. Feedback pertama yang paling sering: 'kenapa tidak ada dari dulu?'" },
  { year: "2023", quarter: "Q1", title: "Public Launch", desc: "Kahade dibuka untuk publik. 2.000+ transaksi berhasil diselesaikan dalam 30 hari pertama. Tidak ada satu pun penipuan yang lolos." },
  { year: "2023", quarter: "Q2", title: "Regulasi & Kepatuhan", desc: "Proses registrasi ke OJK selesai. Rekening escrow terpisah resmi aktif. Kepatuhan penuh terhadap regulasi fintech Indonesia." },
  { year: "2023", quarter: "Q4", title: "10.000 Pengguna Aktif", desc: "Milestone pertama tercapai organik — tanpa iklan berbayar. 100% dari word-of-mouth pengguna yang merasa terlindungi." },
  { year: "2024", quarter: "Q1", title: "Pendanaan Seri A — $5 Juta", desc: "Investor strategis percaya pada visi kami. Dana dipakai untuk ekspansi tim engineering, produk, dan layanan pelanggan." },
  { year: "2024", quarter: "Q3", title: "Dispute Resolution 2.0", desc: "Sistem mediasi baru berbasis AI + mediator manusia. Rata-rata resolusi turun dari 7 hari menjadi kurang dari 48 jam." },
  { year: "2025", quarter: "Kini", title: "Escrow API untuk Enterprise", desc: "Rp 50M+ dana sudah dilindungi. Kami sedang membangun escrow API untuk marketplace, e-commerce, dan platform B2B." },
];

const culturePoints = [
  { label: "Ship Fast, Fix Faster", desc: "Produk di tangan pengguna mengajarkan lebih banyak dari diskusi panjang. Kami iterasi cepat, belajar cepat." },
  { label: "Radically Transparent", desc: "Keputusan besar dibagikan ke seluruh tim. Tidak ada agenda tersembunyi, tidak ada silo informasi." },
  { label: "Ownership Mentality", desc: "Setiap orang diperlakukan sebagai pendiri — bukan karyawan. Inisiatif dihargai lebih dari sekadar eksekusi instruksi." },
  { label: "User Obsessed", desc: "Semua keputusan dimulai dari satu pertanyaan: apakah ini membuat hidup pengguna kami lebih baik?" },
  { label: "Trust by Default", desc: "Kami percaya pada rekan tim. Kontrol berlebihan membunuh kecepatan dan kreativitas — kami hindari keduanya." },
  { label: "Long-term Thinking", desc: "Kami membangun untuk 10 tahun, bukan 10 bulan. Keputusan yang menyakitkan hari ini sering kali benar untuk jangka panjang." },
];

const investors = [
  { name: "East Ventures", type: "Lead Investor, Seri A" },
  { name: "Iterative", type: "Co-Investor" },
  { name: "Betatron", type: "Strategic Partner" },
  { name: "Angel Syndicate", type: "Pre-seed & Seed" },
];

const pressLogos = ["Kompas", "Bisnis Indonesia", "Tech in Asia", "DealStreetAsia"];

export default function AboutPage() {
  const [statsRef, statsInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [storyRef, storyInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [timelineRef, timelineInView] = useInView<HTMLElement>({ threshold: 0.03 });
  const [valuesRef, valuesInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [cultureRef, cultureInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [teamRef, teamInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [investorRef, investorInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [pressRef, pressInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <InnerPageLayout
      hero={{
        eyebrow: "Tentang Kami",
        title: "Membangun Kepercayaan\ndalam Transaksi Online.",
        description:
          "Kahade lahir dari pengalaman nyata: kehilangan uang karena penjual menghilang. Kami ada agar kejadian itu tidak terulang — untuk siapa pun, di mana pun.",
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

      {/* Story */}
      <section ref={storyRef} className="section border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className={`anim-fade-up ${storyInView ? "in-view" : ""}`}>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">Cerita Kami</p>
              <h2 className="section-title mb-8">Dimulai dari<br />Frustrasi Nyata.</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>Pada akhir 2021, Ahmad Fauzi memesan kamera second senilai Rp 8 juta dari penjual yang tampak terpercaya. Transfer sudah dilakukan. Kamera tidak pernah datang. Penjual menghilang.</p>
                <p>Ahmad bukan satu-satunya. Setiap hari, jutaan transaksi online di Indonesia berjalan tanpa perlindungan — pembeli takut transfer, penjual takut kirim duluan. Ketidakpercayaan ini menghambat ekonomi digital yang mestinya bisa tumbuh jauh lebih cepat.</p>
                <p>Kahade dibangun untuk satu tujuan: menghilangkan ketakutan itu. Bukan dengan memperumit proses, tapi dengan menyederhanakan perlindungan — sehingga semua orang bisa bertransaksi dengan tenang.</p>
              </div>
            </div>
            <div className={`space-y-0 divide-y divide-border border border-border rounded-2xl overflow-hidden anim-fade-up delay-200 ${storyInView ? "in-view" : ""}`}>
              {[
                { label: "Didirikan", text: "2022 — Jakarta, Indonesia" },
                { label: "Misi", text: "Menjadikan transaksi online lebih aman dan terpercaya melalui escrow yang sederhana dan bisa diakses semua orang." },
                { label: "Visi", text: "Platform escrow terdepan di Asia Tenggara — dipercaya jutaan orang untuk melindungi setiap transaksi." },
                { label: "Model Bisnis", text: "Bayar Saat Berhasil. Kami hanya mengambil biaya jika transaksi berhasil diselesaikan. Tidak ada biaya tersembunyi." },
              ].map((item) => (
                <div key={item.label} className="px-8 py-7">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-2">{item.label}</p>
                  <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-16 anim-fade-up ${timelineInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Perjalanan</p>
            <h2 className="section-title">Tiga Tahun yang<br />Mengubah Banyak Hal.</h2>
          </div>

          <div className="relative">
            {/* Vertical line desktop */}
            <div className="absolute left-[88px] top-2 bottom-2 w-px bg-border hidden md:block" aria-hidden="true" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div
                  key={`${item.year}-${item.quarter}-${i}`}
                  className={`relative flex gap-0 md:gap-10 anim-fade-up ${i % 3 === 0 ? "" : i % 3 === 1 ? "delay-100" : "delay-200"} ${timelineInView ? "in-view" : ""}`}
                >
                  {/* Year label */}
                  <div className="flex-shrink-0 w-20 text-right hidden md:block pt-5">
                    <p className="text-xs font-bold text-foreground tabular-nums">{item.year}</p>
                    <p className="text-[10px] text-muted-foreground">{item.quarter}</p>
                  </div>

                  {/* Dot */}
                  <div className="relative hidden md:flex flex-shrink-0 items-start pt-6">
                    <div className="w-3 h-3 rounded-full bg-foreground border-2 border-white outline outline-1 outline-border z-10 flex-shrink-0" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 border-b border-border py-6 last:border-0">
                    <div className="flex items-center gap-2 mb-0.5 md:hidden">
                      <span className="text-[11px] font-bold text-muted-foreground tabular-nums">{item.year} {item.quarter}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${valuesInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Prinsip</p>
            <h2 className="section-title">Nilai-Nilai yang<br />Membentuk Kami.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {values.map((value, i) => (
              <div key={value.title} className={`bg-white p-8 anim-fade-up ${["delay-100","delay-200","delay-300","delay-400"][i] ?? ""} ${valuesInView ? "in-view" : ""}`}>
                <div className="w-9 h-9 rounded-xl bg-foreground flex items-center justify-center mb-6">
                  <span className="text-background text-xs font-bold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2.5">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section ref={cultureRef} className="section border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className={`lg:col-span-2 anim-fade-up ${cultureInView ? "in-view" : ""}`}>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Budaya Kerja</p>
              <h2 className="section-title mb-6">Cara Kami<br />Bekerja Setiap Hari.</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Kami adalah tim kecil yang bergerak cepat. Tidak ada birokrasi. Tidak ada rapat yang bisa diganti email. Setiap orang punya dampak langsung terhadap produk dan pengguna.
              </p>
              <Link href="/careers" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                Lihat posisi terbuka
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className={`lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8 anim-fade-up delay-100 ${cultureInView ? "in-view" : ""}`}>
              {culturePoints.map((point) => (
                <div key={point.label} className="border-t border-border pt-5">
                  <p className="text-sm font-semibold text-foreground mb-2">{point.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${teamInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Tim</p>
            <h2 className="section-title">Orang-Orang di<br />Balik Kahade.</h2>
            <p className="mt-5 text-muted-foreground max-w-lg leading-relaxed">
              Dipimpin oleh tim berpengalaman yang percaya bahwa teknologi bisa membuat transaksi lebih manusiawi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
            {teamMembers.map((member, i) => (
              <div key={member.name} className={`anim-fade-up ${["delay-100","delay-200","delay-300","delay-400"][i] ?? ""} ${teamInView ? "in-view" : ""}`}>
                <div className="w-20 h-20 rounded-2xl bg-muted border border-border flex items-center justify-center mb-6">
                  <span className="text-2xl font-display font-bold text-muted-foreground">
                    {member.name.split(" ").map((n: string) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{member.bio}</p>
                <div className="flex items-center gap-3 mt-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section ref={investorRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${investorInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Didukung oleh</p>
            <h2 className="section-title">Investor yang<br />Percaya pada Visi Kami.</h2>
          </div>
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden anim-fade-up delay-100 ${investorInView ? "in-view" : ""}`}>
            {investors.map((inv) => (
              <div key={inv.name} className="bg-white px-8 py-10 text-center">
                <p className="text-lg font-display font-bold text-foreground">{inv.name}</p>
                <p className="text-xs text-muted-foreground mt-2">{inv.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section ref={pressRef} className="section">
        <div className="container-base">
          <div className={`text-center mb-12 anim-fade-up ${pressInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Diliput oleh</p>
            <h2 className="section-title">Dipercaya Media.</h2>
          </div>
          <div className={`grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border border border-border rounded-2xl overflow-hidden anim-fade-up delay-100 ${pressInView ? "in-view" : ""}`}>
            {pressLogos.map((logo) => (
              <div key={logo} className="px-8 py-10 text-center">
                <p className="text-base font-semibold text-muted-foreground">{logo}</p>
              </div>
            ))}
          </div>
          <div className={`mt-12 text-center anim-fade-up delay-200 ${pressInView ? "in-view" : ""}`}>
            <Link href="/press" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
              Lihat ruang media
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
