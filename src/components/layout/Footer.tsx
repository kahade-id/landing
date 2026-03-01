"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site, supportLinks } from "@/lib/site";
interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

const footerLinks = {
  Platform: [
    { label: "Harga", href: "/#harga" },
    { label: "Keamanan", href: "/#keamanan" },
    { label: "FAQ", href: "/#faq" },
  ],
  SumberDaya: [
    { label: "Dokumentasi", href: supportLinks.docs, badge: "Docs" },
    { label: "Blog", href: supportLinks.blog },
    { label: "Status Sistem", href: supportLinks.status },
  ],
  Perusahaan: [
    { label: "Tentang", href: supportLinks.about },
    { label: "Karier", href: supportLinks.careers },
    { label: "Partner", href: supportLinks.partners },
  ],
  Legal: [
    { label: "Privasi", href: supportLinks.privacy },
    { label: "Syarat", href: supportLinks.terms },
    { label: "Cookie", href: supportLinks.cookies },
  ],
};

const socials = [
  { label: "Instagram", href: site.socials.instagram, icon: "IG" },
  { label: "Twitter", href: site.socials.twitter, icon: "X" },
  { label: "LinkedIn", href: site.socials.linkedin, icon: "in" },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>("Platform");

  return (
    <footer className="border-t border-black/[0.08] bg-[#fbfbfa]">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)] lg:gap-14">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-black/[0.08] bg-white shadow-[0_10px_24px_rgba(10,10,10,0.04)]">
                <Image src="/favicon.svg" alt="Kahade logo" width={32} height={32} />
              </div>
              <div>
                <div className="text-[22px] font-bold tracking-[-0.04em] text-black">Kahade</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/34">Escrow platform</div>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/58">
              Platform escrow untuk transaksi yang membutuhkan kejelasan alur dana, visibilitas status, dan pengalaman yang lebih tenang bagi buyer maupun seller.
            </p>

            <div className="trust-row">
              <span className="trust-item">Jakarta, Indonesia</span>
              <span className="trust-item">halo@kahade.id</span>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-black/34">{title}</div>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="inline-flex items-center gap-2 text-sm text-black/58 transition hover:text-black">
                        <span>{link.label}</span>
                        {link.badge ? <span className="meta-chip min-h-[22px] px-2 text-[9px]">{link.badge}</span> : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-3">
            {Object.entries(footerLinks).map(([title, links]) => {
              const open = openSection === title;
              return (
                <div key={title} className="rounded-[22px] border border-black/[0.08] bg-white px-4 py-2">
                  <button type="button" onClick={() => setOpenSection(open ? null : title)} className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-black">
                    <span>{title}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={`transition-transform ${open ? "rotate-180" : ""}`}>
                      <path d="M3 5.5L7 9L11 5.5" />
                    </svg>
                  </button>
                  <div className={`simple-accordion-panel ${open ? "open" : ""}`}>
                    <div className="simple-accordion-inner pb-3">
                      <ul className="space-y-2">
                        {links.map((link) => (
                          <li key={link.label}>
                            <Link href={link.href} className="inline-flex items-center gap-2 text-sm text-black/58">
                              <span>{link.label}</span>
                              {link.badge ? <span className="meta-chip min-h-[22px] px-2 text-[9px]">{link.badge}</span> : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-8 divider-soft" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-black/42">© {new Date().getFullYear()} Kahade. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <Link key={social.label} href={social.href} aria-label={social.label} className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] border border-black/[0.08] bg-white text-xs font-bold text-black/58 transition hover:border-black/[0.12] hover:text-black">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
