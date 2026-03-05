import { InnerPageLayout } from "@/components/layout";
import { Shield, Lock, Eye, Server, UserCheck, AlertTriangle, Check } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "Enkripsi End-to-End",
    description:
      "Semua data yang dikirim dan disimpan dienkripsi menggunakan standar AES-256 dan TLS 1.3. Tidak ada pihak ketiga yang dapat mengakses data transaksi Anda.",
    points: ["AES-256 encryption at rest", "TLS 1.3 in transit", "Zero-knowledge architecture", "Encrypted database backups"],
  },
  {
    icon: UserCheck,
    title: "Verifikasi Identitas (KYC)",
    description:
      "Setiap pengguna wajib melalui proses KYC untuk memastikan keaslian identitas. Ini membangun ekosistem yang aman dan terpercaya untuk semua pihak.",
    points: ["Verifikasi KTP/SIM", "Selfie liveness detection", "Anti-spoofing technology", "Data biometrik terenkripsi"],
  },
  {
    icon: Eye,
    title: "Pemantauan Transaksi 24/7",
    description:
      "Sistem kami memantau setiap transaksi secara real-time untuk mendeteksi aktivitas mencurigakan. Tim keamanan kami siap merespons dalam hitungan menit.",
    points: ["Real-time fraud detection", "Behavioral analytics", "IP & device fingerprinting", "Alert sistem otomatis"],
  },
  {
    icon: Server,
    title: "Infrastruktur Aman",
    description:
      "Platform Kahade berjalan di infrastruktur cloud yang tersertifikasi dengan uptime 99.9% dan redundansi berlapis untuk memastikan layanan selalu tersedia.",
    points: ["ISO 27001 certified infrastructure", "99.9% uptime SLA", "Multi-region redundancy", "DDoS protection"],
  },
  {
    icon: AlertTriangle,
    title: "Sistem Anti-Penipuan",
    description:
      "Lapisan perlindungan berlapis untuk mencegah, mendeteksi, dan menangani potensi penipuan sebelum berdampak pada pengguna.",
    points: ["ML-powered fraud scoring", "Blacklist screening", "Transaction velocity checks", "Suspicious pattern alerts"],
  },
  {
    icon: Shield,
    title: "Dana Terlindungi",
    description:
      "Dana escrow disimpan di rekening terpisah yang tidak dapat diakses oleh operasional bisnis Kahade, memastikan dana Anda selalu aman.",
    points: ["Segregated escrow accounts", "Bank-grade security", "Regular third-party audits", "Insurance coverage"],
  },
];

const certifications = [
  { name: "Bank Indonesia", desc: "Terdaftar sebagai Penyelenggara Jasa Pembayaran" },
  { name: "Kominfo", desc: "Terdaftar sebagai Penyelenggara Sistem Elektronik" },
  { name: "PPATK", desc: "Kepatuhan Anti Pencucian Uang (AML)" },
  { name: "ISO 27001", desc: "Manajemen Keamanan Informasi" },
];

export default function SecurityPage() {
  return (
    <InnerPageLayout
      hero={{
        eyebrow: "Keamanan",
        title: "Keamanan Berlapis\nuntuk Setiap Transaksi.",
        description:
          "Kami membangun keamanan sejak pondasi — bukan sebagai tambahan. Dana Anda dilindungi oleh teknologi enkripsi, verifikasi identitas, dan pemantauan 24/7.",
      }}
    >
      {/* Security pillars */}
      <section className="section border-b border-border">
        <div className="container-base">
          <div className="section-header">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Pilar Keamanan</p>
            <h2 className="section-title">6 Lapisan Perlindungan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="border border-border rounded-xl p-6 hover:border-foreground/20 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                  <ul className="flex flex-col gap-1.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-foreground shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container-base">
          <div className="section-header">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Regulasi & Sertifikasi</p>
            <h2 className="section-title">Terdaftar & Diawasi</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Kahade beroperasi sepenuhnya sesuai dengan regulasi yang berlaku di Indonesia dan standar keamanan internasional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {certifications.map((c) => (
              <div key={c.name} className="border border-border rounded-xl p-5 text-center hover:border-foreground/20 transition-all">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-5 h-5 text-foreground" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">{c.name}</p>
                <p className="text-xs text-muted-foreground leading-snug">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Report vulnerability CTA */}
          <div className="max-w-xl mx-auto mt-12 border border-border rounded-xl p-6 text-center">
            <AlertTriangle className="w-6 h-6 text-foreground mx-auto mb-3" />
            <p className="text-sm font-semibold text-foreground mb-2">Temukan celah keamanan?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Kami sangat menghargai laporan dari komunitas keamanan. Laporkan vulnerability secara bertanggung jawab.
            </p>
            <a
              href="mailto:security@kahade.id"
              className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Laporkan ke security@kahade.id
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
