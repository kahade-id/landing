"use client";

import { useState } from "react";
import { InnerPageLayout } from "@/components/layout";
import { useInView } from "@/src/hooks/useInView";
import { site } from "@/src/lib/site";
import { Mail, Phone, MapPin, CheckCircle, MessageCircle, Clock, Headphones } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: site.email, desc: "Balasan dalam 1×24 jam kerja", href: `mailto:${site.email}` },
  { icon: Phone, label: "Telepon", value: site.phone, desc: "Senin–Jumat, 08.00–20.00 WIB", href: `tel:${site.phone.replace(/-/g, "")}` },
  { icon: MessageCircle, label: "Live Chat", value: "Buka di aplikasi", desc: "Respon rata-rata 5 menit", href: "https://app.kahade.id" },
  { icon: MapPin, label: "Kantor", value: site.address, desc: "Hanya untuk pertemuan yang dijadwalkan", href: undefined },
];

const subjects = [
  "Pertanyaan umum",
  "Masalah transaksi",
  "Masalah teknis",
  "Penawaran kemitraan",
  "Pertanyaan media / pers",
  "Lainnya",
];

const supportStat = [
  { value: "< 5 min", label: "Respon live chat" },
  { value: "< 24 jam", label: "Balas email" },
  { value: "24/7", label: "Dukungan tersedia" },
  { value: "98%", label: "Kepuasan pelanggan" },
];

export default function ContactPage() {
  const [statsRef, statsInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [channelsRef, channelsInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [formRef, formInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: subjects[0], message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <InnerPageLayout
      hero={{
        eyebrow: "Kontak",
        title: "Ada yang Bisa\nKami Bantu?",
        description: "Tim support kami 24/7 siap membantu — dari pertanyaan teknis hingga negosiasi kemitraan strategis.",
      }}
      cta={{ show: false }}
    >
      {/* Support Stats */}
      <section ref={statsRef} className="border-b border-border">
        <div className="container-base">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {supportStat.map((stat, i) => (
              <div key={stat.label} className={`px-8 py-10 text-center anim-fade-up ${["","delay-100","delay-200","delay-300"][i] ?? ""} ${statsInView ? "in-view" : ""}`}>
                <p className="text-4xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section ref={channelsRef} className="section border-b border-border">
        <div className="container-base">
          <div className={`mb-14 anim-fade-up ${channelsInView ? "in-view" : ""}`}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Cara Menghubungi</p>
            <h2 className="section-title">Pilih yang Paling<br />Nyaman untuk Anda.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {channels.map((ch, i) => {
              const Icon = ch.icon;
              const content = (
                <>
                  <Icon className="w-5 h-5 text-foreground mb-5" />
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-1">{ch.label}</p>
                  <p className="text-sm font-semibold text-foreground mb-2">{ch.value}</p>
                  <p className="text-xs text-muted-foreground">{ch.desc}</p>
                </>
              );
              return ch.href ? (
                <a key={ch.label} href={ch.href} className={`block bg-white p-8 hover:bg-muted/40 transition-colors anim-fade-up ${["","delay-100","delay-200","delay-300"][i] ?? ""} ${channelsInView ? "in-view" : ""}`}>
                  {content}
                </a>
              ) : (
                <div key={ch.label} className={`bg-white p-8 anim-fade-up ${["","delay-100","delay-200","delay-300"][i] ?? ""} ${channelsInView ? "in-view" : ""}`}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section ref={formRef} className="section">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className={`lg:col-span-3 anim-fade-up ${formInView ? "in-view" : ""}`}>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Formulir Kontak</p>
              <h2 className="section-title mb-10">Kirim Pesan.</h2>

              {submitted ? (
                <div className="flex flex-col items-start py-10">
                  <CheckCircle className="w-12 h-12 text-foreground mb-5" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Pesan Terkirim!</h3>
                  <p className="text-muted-foreground mb-6">Tim kami akan membalas ke <strong>{formData.email}</strong> dalam 1×24 jam kerja.</p>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: subjects[0], message: "" }); }}
                    className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nama Lengkap</label>
                      <input
                        id="name" type="text" required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nama Anda"
                        className="w-full px-4 py-3 border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        id="email" type="email" required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@Anda.com"
                        className="w-full px-4 py-3 border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Topik</label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-foreground transition-colors bg-white"
                    >
                      {subjects.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Pesan</label>
                    <textarea
                      id="message" required rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ceritakan kebutuhan atau pertanyaan Anda secara detail..."
                      className="w-full px-4 py-3 border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors bg-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Kirim Pesan
                  </button>
                  <p className="text-xs text-muted-foreground text-center">Dengan mengirim, Anda menyetujui Kebijakan Privasi kami.</p>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className={`lg:col-span-2 anim-fade-up delay-200 ${formInView ? "in-view" : ""}`}>
              <div className="space-y-8 lg:pt-24">
                {[
                  { icon: Headphones, title: "Support Prioritas untuk Pengguna Pro", desc: "Jika Anda memiliki transaksi aktif dan butuh bantuan segera, login ke dashboard dan gunakan fitur Live Chat untuk respon dalam 5 menit." },
                  { icon: Clock, title: "Jam Operasional Tim", desc: "Live chat: 24/7\nEmail & telepon: Senin–Jumat 08.00–20.00 WIB, Sabtu 09.00–15.00 WIB" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="border-t border-border pt-7">
                    <Icon className="w-5 h-5 text-muted-foreground mb-4" />
                    <p className="text-sm font-semibold text-foreground mb-2">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{desc}</p>
                  </div>
                ))}

                <div className="border-t border-border pt-7">
                  <p className="text-sm font-semibold text-foreground mb-4">Email Khusus Departemen</p>
                  <div className="space-y-3">
                    {[
                      { dept: "Support Umum", email: "support@kahade.id" },
                      { dept: "Dispute & Mediasi", email: "disputes@kahade.id" },
                      { dept: "Kemitraan", email: "partners@kahade.id" },
                      { dept: "Media & Pers", email: "press@kahade.id" },
                      { dept: "Legal & Privasi", email: "legal@kahade.id" },
                    ].map((item) => (
                      <div key={item.dept} className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{item.dept}</span>
                        <a href={`mailto:${item.email}`} className="text-xs font-medium text-foreground hover:text-muted-foreground transition-colors">{item.email}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
