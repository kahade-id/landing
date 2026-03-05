import { InnerPageLayout } from "@/components/layout";
import { Download, Image as ImageIcon, FileText, Archive, Info } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    icon: Archive,
    title: "Logo Kit",
    description: "Logo Kahade dalam berbagai format dan variasi warna: horizontal, vertikal, icon saja. PNG, SVG, dan EPS tersedia.",
    size: "ZIP · ~5MB",
    url: null as string | null,
  },
  {
    icon: FileText,
    title: "Brand Guidelines",
    description: "Panduan lengkap penggunaan brand: tipografi, palet warna, spacing, do's & don'ts, dan contoh penerapan.",
    size: "PDF · ~2MB",
    url: null as string | null,
  },
  {
    icon: Archive,
    title: "Press Kit",
    description: "Informasi perusahaan, foto tim beresolusi tinggi, fact sheet, dan materi press release terbaru.",
    size: "ZIP · ~15MB",
    url: null as string | null,
  },
  {
    icon: FileText,
    title: "Fact Sheet",
    description: "Data statistik perusahaan, angka kunci, dan informasi produk yang diperbarui secara berkala untuk keperluan media.",
    size: "PDF · ~1MB",
    url: null as string | null,
  },
];

const pressContacts = [
  { label: "Pertanyaan Media", email: "press@kahade.id" },
  { label: "Kemitraan", email: "partners@kahade.id" },
  { label: "Umum", email: "hello@kahade.id" },
];

const companyFacts = [
  { label: "Nama Perusahaan", value: "PT Kawal Hak Dengan Aman" },
  { label: "Nama Brand", value: "Kahade" },
  { label: "NIB", value: "0602260111196" },
  { label: "Domisili", value: "Jawa Barat, Indonesia" },
  { label: "Bidang Usaha", value: "Platform Escrow & Fintech" },
  { label: "Tahun Berdiri", value: "2024" },
];

export default function MediaKitPage() {
  return (
    <InnerPageLayout
      hero={{
        eyebrow: "Media Kit",
        title: "Materi & Sumber Daya\nuntuk Media.",
        description:
          "Temukan semua aset brand, data perusahaan, dan materi press yang Anda butuhkan untuk meliput Kahade.",
      }}
      cta={{ show: false }}
    >
      {/* Downloads */}
      <section className="section border-b border-border">
        <div className="container-base">
          <div className="section-header">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Unduhan</p>
            <h2 className="section-title">Aset & Dokumen</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="border border-border rounded-xl p-5 flex flex-col gap-4 hover:border-foreground/20 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1">{r.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{r.description}</p>
                    <p className="text-xs text-muted-foreground">{r.size}</p>
                  </div>
                  {r.url ? (
                    <a
                      href={r.url}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-foreground border border-border rounded-lg px-3 py-2 hover:border-foreground/30 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Unduh
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-xs text-muted-foreground border border-dashed border-border rounded-lg px-3 py-2">
                      <Info className="w-3.5 h-3.5" />
                      Segera Tersedia
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl border border-border text-sm text-muted-foreground max-w-2xl">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              Aset media sedang dalam proses finalisasi. Untuk kebutuhan mendesak, silakan hubungi tim kami di{" "}
              <a href="mailto:press@kahade.id" className="text-foreground underline underline-offset-2">press@kahade.id</a>.
            </span>
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section className="section border-b border-border">
        <div className="container-base">
          <div className="section-header">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Perusahaan</p>
            <h2 className="section-title">Profil Singkat</h2>
          </div>
          <div className="max-w-2xl mx-auto border border-border rounded-xl overflow-hidden">
            {companyFacts.map((fact, i) => (
              <div
                key={fact.label}
                className={`flex items-center justify-between px-6 py-4 ${i < companyFacts.length - 1 ? "border-b border-border" : ""}`}
              >
                <span className="text-sm text-muted-foreground">{fact.label}</span>
                <span className="text-sm font-semibold text-foreground">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press contacts */}
      <section className="section">
        <div className="container-base">
          <div className="section-header">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Kontak</p>
            <h2 className="section-title">Hubungi Tim Kami</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {pressContacts.map((c) => (
              <div key={c.label} className="border border-border rounded-xl p-6 text-center min-w-48">
                <p className="text-sm text-muted-foreground mb-1">{c.label}</p>
                <a href={`mailto:${c.email}`} className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors underline underline-offset-2">
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
