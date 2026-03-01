"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavDropdownItem, NavItem } from "@/types";
import { homeAnchors, supportLinks } from "@/lib/site";

const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className}>
    <path d="M3 5.5L7 9L11 5.5" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h8M7 3l4 4-4 4" />
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const iconBox = "icon-shell w-9 h-9 rounded-[14px]";

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="10" height="7" rx="1.5" />
    <path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7" />
  </svg>
);

const ZapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2L4.5 8.5H8L7 14L11.5 7.5H8L9 2Z" />
  </svg>
);

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.5 14v-1a3 3 0 0 0-6 0v1M8.5 7A3 3 0 1 0 8.5 1a3 3 0 0 0 0 6ZM14.5 14v-1a2 2 0 0 0-2-2M2.5 14v-1a2 2 0 0 1 2-2" />
  </svg>
);

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4L1.5 8 5 12M11 4l3.5 4-3.5 4M9 2.5 7 13.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2L3 4.4V8c0 3 2.1 5.7 5 6.5 2.9-.8 5-3.5 5-6.5V4.4L8 2Z" />
    <path d="m5.5 8 1.5 1.5L10.5 6" />
  </svg>
);

const FileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 2.5h5l3 3v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z" />
    <path d="M9 2.5v3h3M5.5 9H10M5.5 11.5H8.5" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6" />
    <path d="M2 8h12M8 2c-1.9 2-1.9 10 0 12M8 2c1.9 2 1.9 10 0 12" />
  </svg>
);

const BarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="9" width="2.8" height="5" rx="0.6" />
    <rect x="6.6" y="6" width="2.8" height="8" rx="0.6" />
    <rect x="11.2" y="3" width="2.8" height="11" rx="0.6" />
  </svg>
);

const navItems: NavItem[] = [
  {
    label: "Platform",
    dropdown: [
      {
        group: "Layanan",
        items: [
          { icon: <LockIcon />, label: "Escrow Aman", desc: "Dana ditahan sampai transaksi selesai.", href: homeAnchors.platform },
          { icon: <ZapIcon />, label: "Alur Cepat", desc: "Status transaksi dipantau real-time.", href: homeAnchors.howItWorks },
          { icon: <UsersIcon />, label: "Buyer & Seller", desc: "Dibuat untuk transaksi personal maupun bisnis.", href: homeAnchors.testimonials },
        ],
      },
      {
        group: "Developer",
        items: [
          { icon: <CodeIcon />, label: "API Escrow", desc: "Referensi integrasi untuk kebutuhan teknis.", href: supportLinks.docs, badge: "Docs" },
          { icon: <FileIcon />, label: "Dokumentasi", desc: "Panduan implementasi dan checklist go-live.", href: supportLinks.docs },
        ],
      },
    ],
  },
  { label: "Harga", href: homeAnchors.pricing },
  {
    label: "Keamanan",
    dropdown: [
      {
        group: "Perlindungan",
        items: [
          { icon: <ShieldIcon />, label: "Proteksi Dana", desc: "Pelepasan dana transparan dan bertahap.", href: homeAnchors.security },
          { icon: <BarIcon />, label: "Audit & Laporan", desc: "Riwayat transaksi mudah ditinjau.", href: supportLinks.status },
          { icon: <GlobeIcon />, label: "Status Sistem", desc: "Pantau update operasional terbaru.", href: supportLinks.status, status: "online" },
        ],
      },
    ],
  },
  {
    label: "Sumber Daya",
    dropdown: [
      {
        group: "Belajar",
        items: [
          { icon: <FileIcon />, label: "Blog & Artikel", desc: "Panduan transaksi aman dan update produk.", href: supportLinks.blog },
          { icon: <UsersIcon />, label: "Use Case", desc: "Lihat cerita pengguna dan alur penggunaannya.", href: homeAnchors.testimonials },
          { icon: <GlobeIcon />, label: "Pusat Bantuan", desc: "FAQ dan bantuan pengguna.", href: supportLinks.support },
        ],
      },
    ],
  },
  { label: "Perusahaan", href: supportLinks.about },
];

function DropdownPanel({ item, isOpen, panelId, buttonId, onNavigate }: { item: NavItem; isOpen: boolean; panelId: string; buttonId: string; onNavigate: () => void }) {
  if (!item.dropdown || !isOpen) return null;

  return (
    <div className="absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,560px)] -translate-x-1/2">
      <div className="surface-card-soft border border-black/10 p-3 shadow-[0_22px_60px_rgba(0,0,0,0.08)]">
        <div className={`grid gap-3 ${item.dropdown.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
          {item.dropdown.map((group) => (
            <div key={group.group} className="rounded-[20px] border border-black/[0.06] bg-white/70 p-3">
              <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.14em] text-black/35">{group.group}</p>
              <div className="space-y-1">
                {group.items.map((entry) => (
                  <DropdownItem key={entry.label} item={entry} onNavigate={onNavigate} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {item.dropdown.length > 1 && (
          <div className="mt-3 flex items-center justify-between rounded-2xl border border-black/[0.06] bg-black/[0.02] px-4 py-3 text-xs text-black/45">
            <span>Butuh bantuan memilih alur yang tepat?</span>
            <Link href={supportLinks.contact} onClick={onNavigate} className="inline-flex items-center gap-1.5 font-semibold text-black/70 transition hover:text-black">
              Konsultasi gratis
              <ArrowRight />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function DropdownItem({ item, onNavigate }: { item: NavDropdownItem; onNavigate: () => void }) {
  return (
    <Link href={item.href} onClick={onNavigate} className="group flex items-start gap-3 rounded-[16px] px-3 py-3 transition hover:bg-black/[0.035] focus:bg-black/[0.035] focus:outline-none">
      <div className={iconBox}>{item.icon}</div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-[14px] font-semibold text-black/80 transition group-hover:text-black">{item.label}</span>
          {item.badge ? <span className="meta-chip min-h-[24px] px-2 text-[9px]">{item.badge}</span> : null}
          {item.status === "online" ? <span className="live-dot text-black/70" aria-hidden="true" /> : null}
        </div>
        <p className="mt-1 text-[12px] leading-5 text-black/45">{item.desc}</p>
      </div>
      <span className="pt-1 text-black/26 transition group-hover:text-black/55">
        <ArrowRight />
      </span>
    </Link>
  );
}

function MobileNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.dropdown) {
    return (
      <Link href={item.href ?? homeAnchors.home} className="rounded-2xl px-4 py-3 text-sm font-semibold text-black/72 transition hover:bg-black/[0.035] hover:text-black">
        {item.label}
      </Link>
    );
  }

  return (
    <div className="rounded-[22px] border border-black/[0.07] bg-white/75 px-2 py-2">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm font-semibold text-black/78">
        <span>{item.label}</span>
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`simple-accordion-panel ${open ? "open" : ""}`}>
        <div className="simple-accordion-inner">
          <div className="space-y-1 px-1 pb-2 pt-1">
            {item.dropdown.flatMap((group) => group.items).map((entry) => (
              <Link key={entry.label} href={entry.href} className="flex items-start gap-3 rounded-2xl px-3 py-3 transition hover:bg-black/[0.035]">
                <div className={iconBox}>{entry.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-black/78">{entry.label}</div>
                  <div className="mt-1 text-xs leading-5 text-black/45">{entry.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownBaseId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const clearLeaveTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const openDropdown = (label: string) => {
    clearLeaveTimer();
    setActiveDropdown(label);
  };

  const delayedClose = () => {
    clearLeaveTimer();
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 100);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <header ref={headerRef} className={`border-b border-black/8 bg-white/88 backdrop-blur-xl transition ${scrolled ? "shadow-[0_10px_40px_rgba(10,10,10,0.05)]" : ""}`}>
        <div className="mx-auto flex h-[78px] max-w-[1200px] items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link href={homeAnchors.home} className="flex items-center gap-3 rounded-2xl transition hover:opacity-90">
            <div className="flex h-11 w-11 items-center justify-center rounded-[18px] border border-black/[0.08] bg-white shadow-[0_8px_20px_rgba(10,10,10,0.04)]">
              <Image src="/favicon.svg" alt="Kahade logo" width={30} height={30} priority />
            </div>
            <div className="hidden sm:block">
              <div className="text-[18px] font-bold tracking-[-0.03em] text-black">Kahade</div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/35">Escrow platform</div>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navItems.map((item) => {
              const dropdownKey = item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              const panelId = `${dropdownBaseId}-${dropdownKey}-panel`;
              const buttonId = `${dropdownBaseId}-${dropdownKey}-button`;
              const isOpen = activeDropdown === item.label;

              return (
                <div key={item.label} className="relative" onMouseEnter={() => item.dropdown && openDropdown(item.label)} onMouseLeave={delayedClose}>
                  {item.dropdown ? (
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      aria-haspopup="menu"
                      onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                      className={`inline-flex items-center gap-1 rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${isOpen ? "bg-black/[0.055] text-black" : "text-black/58 hover:bg-black/[0.035] hover:text-black"}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link href={item.href ?? homeAnchors.home} className="inline-flex items-center rounded-2xl px-4 py-2.5 text-sm font-semibold text-black/58 transition hover:bg-black/[0.035] hover:text-black">
                      {item.label}
                    </Link>
                  )}
                  <DropdownPanel item={item} isOpen={isOpen} panelId={panelId} buttonId={buttonId} onNavigate={() => setActiveDropdown(null)} />
                </div>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden lg:flex">
              <span className="trust-item rounded-full">
                <span className="live-dot text-black/70" />
                Sistem aktif
              </span>
            </div>
            <Link href={homeAnchors.cta} className="btn-primary btn-sm hidden md:inline-flex">
              Mulai transaksi
            </Link>
            <button type="button" aria-label="Toggle menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((v) => !v)} className="inline-flex h-11 w-11 items-center justify-center rounded-[16px] border border-black/[0.08] bg-white text-black/72 transition hover:bg-black/[0.035] md:hidden">
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-black/[0.07] bg-[#fcfcfb] px-4 py-4 md:hidden">
            <div className="mx-auto max-w-[1200px] space-y-2">
              {navItems.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
              <div className="pt-2">
                <Link href={homeAnchors.cta} className="btn-primary w-full justify-center">
                  Mulai transaksi
                </Link>
              </div>
              <div className="trust-row pt-2">
                <span className="trust-item">Escrow workflow</span>
                <span className="trust-item">KYC support</span>
                <span className="trust-item">Monitoring aktif</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
