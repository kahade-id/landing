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
}

// ─── Social Icons ────────────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M20 4L9.5 14.5M14.5 9.5L4 20" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 11v5M8 8.3v.1M12 16v-2.7c0-1.7 2-1.8 2 0V16M12 13.4c0-3 5-3.3 5 0V16" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="3" />
    <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const footerLinks: Record<string, FooterLink[]> = {
  Platform: [
    { label: "Web App", href: supportLinks.docs },
    { label: "Mobile Apps", href: supportLinks.docs },
    { label: "Blog", href: supportLinks.blog },
  ],
  Dukungan: [
    { label: "Pusat Bantuan", href: supportLinks.support },
    { label: "Hubungi Kami", href: supportLinks.contact },
    { label: "FAQ", href: supportLinks.support },
    { label: "Masukan", href: supportLinks.contact },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: supportLinks.about },
    { label: "Karir", href: supportLinks.careers },
    { label: "Press Kit", href: supportLinks.about },
    { label: "Mitra", href: supportLinks.partners },
  ],
  Legal: [
    { label: "Ketentuan Layanan", href: supportLinks.terms },
    { label: "Kebijakan Privasi", href: supportLinks.privacy },
    { label: "Kebijakan Cookie", href: supportLinks.cookies },
    { label: "Lisensi", href: supportLinks.terms },
  ],
};

const socialLinks = [
  { icon: <InstagramIcon />, label: "Instagram", href: site.socials?.instagram || "#" },
  { icon: <XIcon />, label: "X / Twitter", href: site.socials?.twitter || "#" },
  { icon: <LinkedInIcon />, label: "LinkedIn", href: site.socials?.linkedin || "#" },
  { icon: <YoutubeIcon />, label: "YouTube", href: supportLinks.blog },
];

// ─── Footer Component ─────────────────────────────────────────────────────────
export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="relative bg-surface border-t border-ink-9">
      {/* Main Footer */}
      <div className="container-base pt-12 lg:pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-btn bg-ink flex items-center justify-center flex-shrink-0">
                <Image src="/favicon.svg" alt="Kahade" width={28} height={28} className="invert" />
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight">Kahade</div>
                <div className="text-xs text-ink-40 font-medium tracking-wider uppercase">P2P Escrow Platform</div>
              </div>
            </div>

            <p className="text-sm text-ink-50 leading-relaxed max-w-sm">
              Platform escrow peer-to-peer untuk transaksi yang membutuhkan kejelasan alur dana, status real-time, dan pengalaman yang mudah dipahami.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-1">
              {socialLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  aria-label={link.label}
                  className="w-9 h-9 flex items-center justify-center rounded-btn text-ink-40 hover:text-ink hover:bg-ink-4 transition-all"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links — Desktop */}
          <div className="lg:col-span-8 hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <div className="text-xs font-bold uppercase tracking-wider text-ink mb-4">{category}</div>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href} 
                        className="group flex items-center gap-2 text-sm text-ink-50 hover:text-ink transition-colors"
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="text-2xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border border-ink-15 text-ink-40">
                            {link.badge}
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
          <div className="md:hidden space-y-0">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="border-b border-ink-7">
                <button
                  onClick={() => toggleSection(category)}
                  aria-expanded={openSection === category}
                  className="w-full flex items-center justify-between py-3.5 text-sm font-bold uppercase tracking-wider text-left"
                >
                  <span>{category}</span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round"
                    className={`transition-transform duration-200 text-ink-40 ${openSection === category ? "rotate-180" : ""}`}
                  >
                    <path d="M4 6L8 10L12 6" />
                  </svg>
                </button>
                {openSection === category && (
                  <ul className="space-y-2.5 pb-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-sm text-ink-50 hover:text-ink transition-colors">
                          {link.label}
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

      {/* Bottom Bar */}
      <div className="border-t border-ink-7">
        <div className="container-base py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ink-35">
              © {new Date().getFullYear()} Kahade. Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center gap-4">
              <Link href={supportLinks.terms} className="text-xs text-ink-35 hover:text-ink transition-colors">
                Ketentuan
              </Link>
              <Link href={supportLinks.privacy} className="text-xs text-ink-35 hover:text-ink transition-colors">
                Privasi
              </Link>
              <Link href={supportLinks.cookies} className="text-xs text-ink-35 hover:text-ink transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
