"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import { site, supportLinks } from "@/lib/site";

// ─── Types ─────────────────────────────────────────────────────────────────
interface FooterLink {
  label: string;
  href: string;
  badge?: string;
  status?: string;
}

interface QuickLink { icon: ReactNode; label: string; href: string; }

// ─── Utility Icons ───────────────────────────────────────────────────────────
const InstagramIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="18" cy="6.2" r="1" fill="currentColor" stroke="none" /></svg>);
const XIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M20 4L9.5 14.5M14.5 9.5L4 20" /></svg>);
const LinkedInIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8.3v.1M12 16v-2.7c0-1.7 2-1.8 2 0V16M12 13.4c0-3 5-3.3 5 0V16" /></svg>);
const YoutubeIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="3" /><path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" /></svg>);
// ─── Data ─────────────────────────────────────────────────────────────────────
const footerLinks: Record<string, FooterLink[]> = {
  Platform:   [{ label: "Web App", href: supportLinks.docs }, { label: "Mobile Apps", href: supportLinks.docs }, { label: "Blog", href: supportLinks.blog }],
  Dukungan:   [{ label: "Pusat Bantuan", href: supportLinks.support }, { label: "Hubungi Kami", href: supportLinks.contact }, { label: "FAQ", href: supportLinks.support }, { label: "Masukan", href: supportLinks.contact }],
  Perusahaan: [{ label: "Tentang Kami", href: supportLinks.about }, { label: "Karir", href: supportLinks.careers }, { label: "Press Kit", href: supportLinks.about }, { label: "Mitra", href: supportLinks.partners }],
  Legal:      [{ label: "Ketentuan Layanan", href: supportLinks.terms }, { label: "Kebijakan Privasi", href: supportLinks.privacy }, { label: "Kebijakan Cookie", href: supportLinks.cookies }, { label: "Lisensi", href: supportLinks.terms }],
};

const quickLinks: QuickLink[] = [
  { icon: <InstagramIcon />, label: "Instagram", href: site.socials.instagram },
  { icon: <XIcon />, label: "X / Twitter", href: site.socials.twitter },
  { icon: <LinkedInIcon />, label: "LinkedIn", href: site.socials.linkedin },
  { icon: <YoutubeIcon />, label: "YouTube", href: supportLinks.blog },
];

// ─── Footer Component ─────────────────────────────────────────────────────────
export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="relative bg-white border-t border-black/10 overflow-hidden font-sans" style={{ fontFamily: "var(--font-sans)" }}>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-7">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                <Image src="/favicon.svg" alt="Kahade logo" width={40} height={40} className="w-full h-full" />
              </div>
              <div>
                <div className="text-xl font-bold text-black tracking-tight leading-none">Kahade</div>
                <div className="text-[11px] text-black/40 font-medium tracking-widest uppercase mt-0.5">P2P Escrow Platform</div>
              </div>
            </div>

            <p className="text-sm text-black/55 leading-relaxed max-w-xs">
              Platform escrow peer-to-peer untuk transaksi yang membutuhkan kejelasan alur dana, status real-time, dan pengalaman yang mudah dipahami.
            </p>

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
          </div>
          <div className="flex items-center gap-1">
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href} aria-label={link.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-black/30 hover:text-black hover:bg-black/5 transition-all duration-200">
                {link.icon}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
