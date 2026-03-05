"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site, footerLinks } from "@/src/lib/site";
import { Instagram, Twitter, Linkedin, Youtube, ChevronDown } from "lucide-react";

const socialLinks = [
  { icon: Twitter,   label: "X / Twitter", href: site.socials.twitter },
  { icon: Instagram, label: "Instagram",   href: site.socials.instagram },
  { icon: Linkedin,  label: "LinkedIn",    href: site.socials.linkedin },
  { icon: Youtube,   label: "YouTube",     href: site.socials.youtube },
];

const footerEntries = Object.entries(footerLinks) as [string, { label: string; href: string }[]][];

function FooterColumn({ category, links }: { category: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-sm font-bold text-foreground mb-4 tracking-wide">{category}</p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors leading-snug">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterAccordion({ category, links }: { category: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button type="button" onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between py-4 text-left" aria-expanded={open}>
        <span className="text-sm font-bold text-foreground tracking-wide">{category}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-4" : "max-h-0"}`}>
        <ul className="flex flex-col gap-3 pl-1">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer aria-label="Footer situs Kahade" className="bg-white border-t border-border">

      {/* MAIN FOOTER BODY */}
      <div className="container-base pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* BRAND COLUMN — icon only, tanpa teks brand */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <Link href="/" aria-label="Kahade — Beranda">
              {/* Icon saja, tanpa teks "Kahade" */}
              <Image src="/favicon.svg" alt="Kahade" width={32} height={32} />
            </Link>
            {/* Deskripsi singkat — ukuran text-base, konsisten dengan section lain */}
            <p className="text-base text-muted-foreground leading-relaxed">
              menjaga kepercayaan antara pembeli dan penjual
            </p>
          </div>

          {/* LINK COLUMNS — desktop */}
          <div className="hidden lg:grid lg:col-span-9 grid-cols-4 gap-8">
            {footerEntries.map(([category, links]) => (
              <FooterColumn key={category} category={category} links={links} />
            ))}
          </div>
        </div>

        {/* LINK COLUMNS — mobile accordion */}
        <div className="lg:hidden mt-8 border-t border-border">
          {footerEntries.map(([category, links]) => (
            <FooterAccordion key={category} category={category} links={links} />
          ))}
        </div>
      </div>

      {/* SEPARATOR */}
      <div className="border-t border-border" />

      {/* BOTTOM BAR — company info + social */}
      <div className="container-base py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-foreground font-medium">PT Kawal Hak Dengan Aman</p>
            <p className="text-sm text-muted-foreground">NIB : 0602260111196</p>
            <p className="text-sm text-muted-foreground">Jawa Barat, Indonesia</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* SEPARATOR sebelum copyright */}
      <div className="border-t border-border" />

      {/* COPYRIGHT — full-width center, paling bawah */}
      <div className="py-5">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Kahade. Seluruh hak cipta dilindungi.
        </p>
      </div>

    </footer>
  );
}
