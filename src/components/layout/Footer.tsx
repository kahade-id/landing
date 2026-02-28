"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import { homeAnchors, supportLinks, site } from "@/lib/site";

// ─── Types ─────────────────────────────────────────────────────────────────
interface FooterLink {
  label: string;
  href: string;
  badge?: string;
  status?: string;
}

interface QuickLink { icon: ReactNode; label: string; href: string; }

// ─── Abstract SVG Background ───────────────────────────────────────────────
const AbstractBg = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="fg1" cx="10%" cy="20%" r="50%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="fg2" cx="90%" cy="80%" r="50%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="fg3" cx="50%" cy="50%" r="40%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0.02" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
    </defs>
    <pattern id="fgrid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#000" strokeWidth="0.3" strokeOpacity="0.06" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#fgrid)" />
    <rect width="100%" height="100%" fill="url(#fg1)" />
    <rect width="100%" height="100%" fill="url(#fg2)" />
    <rect width="100%" height="100%" fill="url(#fg3)" />
    <circle cx="5%" cy="15%" r="120" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.06" />
    <circle cx="5%" cy="15%" r="80"  fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.05" />
    <circle cx="95%" cy="85%" r="150" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.06" />
    <circle cx="95%" cy="85%" r="100" fill="none" stroke="#000" strokeWidth="0.5" strokeOpacity="0.05" />
    <line x1="0" y1="100%" x2="15%" y2="0" stroke="#000" strokeWidth="0.4" strokeOpacity="0.04" />
    <line x1="85%" y1="100%" x2="100%" y2="0" stroke="#000" strokeWidth="0.4" strokeOpacity="0.04" />
  </svg>
);

// ─── Shield Icon ────────────────────────────────────────────────────────────
const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L4 7V16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16V7L16 2Z" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M11 16L14.5 19.5L21 13" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Utility Icons ───────────────────────────────────────────────────────────
const MailIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16v12H4z" /><path d="M4 8l8 6 8-6" /></svg>);
const PhoneIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" /></svg>);
const DocsIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h5" /></svg>);
const LifeBuoyIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M9.17 14.83l-4.24 4.24" /></svg>);
const ActivitySmallIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>);
const ArrowUpRight = () => (<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" /></svg>);

// ─── Data ─────────────────────────────────────────────────────────────────────
const footerLinks: Record<string, FooterLink[]> = {
  Platform:   [{ label: "Cara Kerja", href: homeAnchors.howItWorks }, { label: "Fitur Escrow", href: homeAnchors.platform }, { label: "Dashboard", href: homeAnchors.cta }, { label: "API Developer", href: supportLinks.docs, badge: "Docs" }, { label: "Status Sistem", href: supportLinks.status, status: "online" }],
  Keamanan:   [{ label: "Proteksi Dana", href: homeAnchors.security }, { label: "Verifikasi KYC", href: supportLinks.support }, { label: "Enkripsi Data", href: homeAnchors.security }, { label: "Laporan Bug", href: supportLinks.contact }, { label: "Audit Keamanan", href: supportLinks.status }],
  Perusahaan: [{ label: "Tentang Kami", href: supportLinks.about }, { label: "Karir", href: supportLinks.careers, badge: "Hiring" }, { label: "Blog", href: supportLinks.blog }, { label: "Press Kit", href: supportLinks.about }, { label: "Partner", href: supportLinks.partners }],
  Bantuan:    [{ label: "Pusat Bantuan", href: supportLinks.support }, { label: "Kebijakan Privasi", href: supportLinks.privacy }, { label: "Syarat & Ketentuan", href: supportLinks.terms }, { label: "Kebijakan Refund", href: supportLinks.terms }, { label: "Hubungi Kami", href: supportLinks.contact }],
};

const quickLinks: QuickLink[] = [
  { icon: <MailIcon />, label: "Email Support", href: supportLinks.supportEmail },
  { icon: <PhoneIcon />, label: "Telepon", href: supportLinks.phone },
  { icon: <DocsIcon />, label: "Dokumentasi", href: supportLinks.docs },
  { icon: <LifeBuoyIcon />, label: "Pusat Bantuan", href: supportLinks.support },
  { icon: <ActivitySmallIcon />, label: "Status Sistem", href: supportLinks.status },
];

// ─── Footer Component ─────────────────────────────────────────────────────────
export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="relative bg-white border-t border-black/10 overflow-hidden font-sans">
      <AbstractBg />

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-7">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="invert"><ShieldIcon /></div>
              </div>
              <div>
                <div className="text-xl font-bold text-black tracking-tight leading-none">Kahade</div>
                <div className="text-[11px] text-black/40 font-medium tracking-widest uppercase mt-0.5">P2P Escrow Platform</div>
              </div>
            </div>

            <p className="text-sm text-black/55 leading-relaxed max-w-xs">
              Platform escrow peer-to-peer untuk transaksi yang membutuhkan kejelasan alur dana, status real-time, dan pengalaman yang mudah dipahami.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Escrow workflow", "KYC support", "Monitoring aktif", "Pusat bantuan"].map((badge) => (
                <span key={badge} className="inline-flex items-center px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase border border-black/15 text-black/50 rounded-full bg-white/80">
                  {badge}
                </span>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-semibold text-black/70 uppercase tracking-widest">Butuh bantuan cepat?</div>
              <div className="flex flex-col gap-2 max-w-sm">
                <Link href={supportLinks.supportEmail} className="inline-flex items-center justify-between gap-3 rounded-xl border border-black/12 bg-white/80 px-4 py-3 text-sm font-medium text-black/70 transition-colors hover:border-black/20 hover:text-black">
                  <span>Kirim email ke {site.email}</span>
                  <ArrowUpRight />
                </Link>
                <Link href={supportLinks.phone} className="inline-flex items-center justify-between gap-3 rounded-xl border border-black/12 bg-white/80 px-4 py-3 text-sm font-medium text-black/70 transition-colors hover:border-black/20 hover:text-black">
                  <span>Telepon {site.phone}</span>
                  <ArrowUpRight />
                </Link>
              </div>
              <p className="text-[11px] text-black/30">Kontak di bawah ini aktif untuk pertanyaan produk, bantuan akun, dan pelaporan kendala.</p>
            </div>
          </div>

          {/* Links — Desktop */}
          <div className="lg:col-span-8 hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <div className="text-xs font-bold text-black uppercase tracking-widest">{category}</div>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="group flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors duration-200">
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border border-black/15 text-black/40">
                            {link.badge}
                          </span>
                        )}
                        {link.status === "online" && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black/60" />
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Links Accordion — Mobile */}
          <div className="md:hidden flex flex-col divide-y divide-black/[0.08]">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <button
                  onClick={() => toggleSection(category)}
                  aria-expanded={openSection === category}
                  className="w-full flex items-center justify-between py-4 text-sm font-bold text-black uppercase tracking-widest text-left"
                >
                  <span>{category}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                    className={`transition-transform duration-200 text-black/40 ${openSection === category ? "rotate-180" : ""}`}>
                    <path d="M4 6L8 10L12 6" />
                  </svg>
                </button>
                {openSection === category && (
                  <ul className="flex flex-col gap-3 pb-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="flex items-center gap-2 text-sm text-black/50">
                          {link.label}
                          {link.badge && (
                            <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border border-black/15 text-black/40">
                              {link.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-black/[0.08]" />
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p className="text-xs text-black/35">© {new Date().getFullYear()} Kahade. Hak Cipta Dilindungi.</p>
            <span className="hidden sm:block text-black/20">·</span>
            <p className="text-xs text-black/30">Kontak: {site.email} · {site.location}</p>
          </div>
          <div className="flex items-center gap-1">
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href} aria-label={link.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-black/30 hover:text-black hover:bg-black/5 transition-all duration-200">
                {link.icon}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5">
            {[["Privasi", supportLinks.privacy], ["Syarat", supportLinks.terms], ["Cookie", supportLinks.cookies]].map(([item, href]) => (
              <Link key={item} href={href} className="text-xs text-black/35 hover:text-black transition-colors">{item}</Link>
            ))}
            <Link href={homeAnchors.cta} className="flex items-center gap-1.5 text-xs font-semibold text-black/60 hover:text-black transition-colors group">
              <span>Mulai Transaksi</span>
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
