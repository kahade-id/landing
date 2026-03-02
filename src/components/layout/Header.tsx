"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useId } from "react";
import type { NavItem, NavDropdownItem } from "@/types";
import { homeAnchors, supportLinks } from "@/lib/site";

// ─── Icons ──────────────────────────────────────────────────────────────────
const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
    <path d="M3 5L7 9L11 5" />
  </svg>
);

const ArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" />
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="4" y1="14" x2="20" y2="14" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="6" y1="6" x2="16" y2="16" />
    <line x1="16" y1="6" x2="6" y2="16" />
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2.5" y="6" width="9" height="7" rx="1.5" />
    <path d="M4.5 6V4a2.5 2.5 0 015 0v2" />
  </svg>
);

const ZapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 1.5L4 7.5h4l-1.5 5 5.5-6H8z" />
  </svg>
);

const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 12v-1a2 2 0 00-4 0v1M7 6a2 2 0 100-4 2 2 0 000 4zM12 12v-1a1.5 1.5 0 00-1.5-1.5M2 12v-1a1.5 1.5 0 011.5-1.5" />
  </svg>
);

const CodeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4,3 1,7 4,11" />
    <polyline points="10,3 13,7 10,11" />
  </svg>
);

const BarChartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="9" width="2.5" height="3" rx="0.5" />
    <rect x="5.5" y="6" width="2.5" height="6" rx="0.5" />
    <rect x="9" y="3" width="2.5" height="9" rx="0.5" />
  </svg>
);

const FileTextIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 1.5H4a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V5L8 1.5z" />
    <path d="M8 1.5V5h3.5M5.5 7.5h4M5.5 10h2" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="7" r="5.5" />
    <path d="M2 7h10M7 1.5c-1.5 1.5-1.5 6 0 7.5M7 1.5c1.5 1.5 1.5 6 0 7.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 1.5L2.5 4v3.5c0 2.5 1.8 4.8 4.5 5.5 2.7-.7 4.5-3 4.5-5.5V4L7 1.5z" />
    <path d="M5 7l1.5 1.5L9 6" />
  </svg>
);

// ─── Navigation Data ─────────────────────────────────────────────────────────
const navItems: NavItem[] = [
  {
    label: "Platform",
    dropdown: [
      {
        group: "Layanan",
        items: [
          { icon: <LockIcon />, label: "Escrow Aman", desc: "Dana ditahan sampai transaksi selesai", href: homeAnchors.platform },
          { icon: <ZapIcon />, label: "Alur Cepat", desc: "Status transaksi dipantau real-time", href: homeAnchors.howItWorks },
          { icon: <UsersIcon />, label: "Untuk Buyer & Seller", desc: "Cocok untuk transaksi personal maupun bisnis", href: homeAnchors.testimonials },
        ],
      },
      {
        group: "Developer",
        items: [
          { icon: <CodeIcon />, label: "API Escrow", desc: "Referensi integrasi untuk kebutuhan teknis", href: supportLinks.docs, badge: "Docs" },
          { icon: <FileTextIcon />, label: "Dokumentasi", desc: "Panduan implementasi dan checklist go-live", href: supportLinks.docs },
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
          { icon: <ShieldIcon />, label: "Proteksi Dana", desc: "Alur pelepasan dana dibuat transparan", href: homeAnchors.security },
          { icon: <BarChartIcon />, label: "Audit & Laporan", desc: "Riwayat dan status transaksi mudah ditinjau", href: supportLinks.status },
          { icon: <GlobeIcon />, label: "Status Sistem", desc: "Pantau status layanan dan update operasional", href: supportLinks.status, status: "online" },
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
          { icon: <FileTextIcon />, label: "Blog & Artikel", desc: "Panduan transaksi aman dan update produk", href: supportLinks.blog },
          { icon: <UsersIcon />, label: "Komunitas", desc: "Lihat cerita pengguna dan use case platform", href: homeAnchors.testimonials },
          { icon: <GlobeIcon />, label: "Pusat Bantuan", desc: "FAQ dan bantuan pengguna", href: supportLinks.support },
        ],
      },
    ],
  },
  { label: "Perusahaan", href: supportLinks.about },
];

// ─── Dropdown Panel ──────────────────────────────────────────────────────────
interface DropdownPanelProps {
  item: NavItem;
  isOpen: boolean;
  panelId: string;
  buttonId: string;
  onNavigate: () => void;
}

const DropdownPanel = ({ item, isOpen, panelId, buttonId, onNavigate }: DropdownPanelProps) => {
  if (!item.dropdown || !isOpen) return null;
  return (
    <div className="dropdown-panel z-50">
      <div className={`grid gap-6 ${item.dropdown.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
        {item.dropdown.map((group) => (
          <div key={group.group}>
            <div className="meta-label mb-3 px-1">{group.group}</div>
            <div className="flex flex-col gap-0.5">
              {group.items.map((dropItem: NavDropdownItem) => (
                <Link
                  key={dropItem.label}
                  href={dropItem.href}
                  onClick={onNavigate}
                  className="dropdown-item group"
                >
                  <div className="icon-box icon-box-sm group-hover:bg-ink-9 transition-colors">
                    {dropItem.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="small font-semibold text-ink-60 group-hover:text-ink transition-colors">
                        {dropItem.label}
                      </span>
                      {dropItem.badge && (
                        <span className="pill pill-subtle small py-0.5 px-1.5">{dropItem.badge}</span>
                      )}
                      {dropItem.status === "online" && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-40" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ink-60" />
                        </span>
                      )}
                    </div>
                    <div className="small text-ink-30 mt-0.5 leading-snug">{dropItem.desc}</div>
                  </div>
                  <ArrowRight />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      {item.dropdown.length > 1 && (
        <div className="mt-4 pt-4 border-t border-ink-7 flex items-center justify-between px-1">
          <span className="small text-ink-30">Butuh bantuan memilih?</span>
          <Link href={supportLinks.contact} onClick={onNavigate} className="small font-semibold text-ink-45 hover:text-ink flex items-center gap-1.5 transition-colors">
            Konsultasi Gratis <ArrowRight />
          </Link>
        </div>
      )}
    </div>
  );
};

// ─── Mobile Nav Item ─────────────────────────────────────────────────────────
const MobileNavItem = ({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) => {
  const [open, setOpen] = useState(false);
  if (!item.dropdown) {
    return (
      <Link href={item.href ?? homeAnchors.home} onClick={onNavigate} className="mobile-nav-link block py-3.5 font-medium text-ink-45 hover:text-ink transition-colors border-b border-ink-12">
        {item.label}
      </Link>
    );
  }
  return (
    <div className="border-b border-ink-7">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="mobile-nav-link w-full flex items-center justify-between py-3.5 font-medium text-ink-45 hover:text-ink transition-colors text-left"
      >
        {item.label}
        <ChevronDown className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 flex flex-col gap-0.5">
          {item.dropdown.flatMap((group) => group.items).map((dropItem: NavDropdownItem) => (
            <Link
              key={dropItem.label}
              href={dropItem.href}
              onClick={onNavigate}
              className="flex items-center gap-3 px-3 py-2.5 rounded-btn hover:bg-ink-4 transition-colors"
            >
              <div className="icon-box icon-box-sm">{dropItem.icon}</div>
              <div>
                <div className="mobile-nav-link font-medium text-ink-60">{dropItem.label}</div>
                <div className="mobile-nav-desc text-ink-30">{dropItem.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Main Header ─────────────────────────────────────────────────────────────
export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownBaseId = useId();

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const clearHoverTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const openDropdown = (label: string) => {
    clearHoverTimeout();
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    clearHoverTimeout();
    setActiveDropdown(null);
  };

  const handleMouseEnter = (label: string) => openDropdown(label);
  const handleMouseLeave = () => {
    clearHoverTimeout();
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <header
      ref={headerRef}
      className="header"
    >
      <div className="container-base">
        <div className="flex items-center h-16 gap-6">
          {/* Logo */}
          <Link href={homeAnchors.home} className="flex items-center flex-shrink-0 group">
            <div className="w-9 h-9 flex items-center justify-center transition-transform duration-200 group-hover:scale-95">
              <Image src="/favicon.svg" alt="Kahade" width={32} height={32} priority />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1">
            {navItems.map((item) => {
              const dropdownKey = item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              const buttonId = `${dropdownBaseId}-${dropdownKey}-button`;
              const panelId = `${dropdownBaseId}-${dropdownKey}-panel`;
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="menu"
                      aria-controls={panelId}
                      onClick={() => (isOpen ? closeDropdown() : openDropdown(item.label))}
                      className={`nav-link ${isOpen ? "text-ink bg-ink-4" : ""}`}
                    >
                      {item.label}
                      <ChevronDown className={`transition-transform duration-200 opacity-50 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link href={item.href ?? homeAnchors.home} className="nav-link">
                      {item.label}
                    </Link>
                  )}
                  <DropdownPanel item={item} isOpen={isOpen} panelId={panelId} buttonId={buttonId} onNavigate={closeDropdown} />
                </div>
              );
            })}
          </nav>

          <div className="flex-1 md:hidden" />

          {/* Right Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden lg:flex items-center gap-2 mr-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-40" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ink-60" />
              </span>
              <span className="small font-medium text-ink-30">Sistem Aktif</span>
            </div>


            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-btn text-ink hover:bg-ink-4 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden border-t border-ink-12 px-4 pt-3 pb-6 bg-white overflow-y-auto">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <MobileNavItem key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
            ))}
          </nav>
          <div className="mt-5">
            <Link href={homeAnchors.cta} onClick={() => setMobileOpen(false)} className="w-full btn btn-primary flex items-center justify-center">
              Mulai Transaksi
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
