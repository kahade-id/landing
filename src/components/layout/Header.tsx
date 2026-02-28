"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useId } from "react";
import type { NavItem, NavDropdownItem } from "@/types";
import { homeAnchors, supportLinks } from "@/lib/site";

// ─── Icons ──────────────────────────────────────────────────────────────────
const ShieldIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 6V12C4 16.418 7.582 20 12 22C16.418 20 20 16.418 20 12V6L12 2Z" />
    <path d="M9 12L11 14L15 10" />
  </svg>
);

const ChevronDown = ({ size = 14, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
    <path d="M3 5L7 9L11 5" />
  </svg>
);

const ArrowRight = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5.5M10.5 2.5V7.5" />
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="3" y1="6" x2="17" y2="6" />
    <line x1="3" y1="10" x2="17" y2="10" />
    <line x1="3" y1="14" x2="17" y2="14" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="5" y1="5" x2="15" y2="15" />
    <line x1="15" y1="5" x2="5" y2="15" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="10" height="8" rx="1.5" />
    <path d="M5.5 7V5a2.5 2.5 0 015 0v2" />
  </svg>
);
const ZapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2L4 9h5l-2 5 7-7H9l2-5z" />
  </svg>
);
const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 14v-1a3 3 0 00-6 0v1M8 7a3 3 0 100-6 3 3 0 000 6zM14 14v-1a2 2 0 00-2-2M2 14v-1a2 2 0 012-2" />
  </svg>
);
const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="5,4 1,8 5,12" />
    <polyline points="11,4 15,8 11,12" />
    <line x1="9" y1="2" x2="7" y2="14" />
  </svg>
);
const BarChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="10" width="3" height="4" rx="0.5" />
    <rect x="6.5" y="6" width="3" height="8" rx="0.5" />
    <rect x="11" y="3" width="3" height="11" rx="0.5" />
  </svg>
);
const FileTextIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6L9 2z" />
    <path d="M9 2v4h4M6 9h4M6 12h2" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6" />
    <path d="M2 8h12M8 2c-2 2-2 8 0 12M8 2c2 2 2 8 0 12" />
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
          { icon: <ShieldIcon size={16} />, label: "Proteksi Dana", desc: "Alur pelepasan dana dibuat transparan", href: homeAnchors.security },
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
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50 w-max min-w-[360px] max-w-[520px]">
      <div className="flex justify-center mb-0">
        <div className="w-2.5 h-2.5 bg-white border-l border-t border-black/10 rotate-45 -mb-1.5 z-10 relative " />
      </div>
      <div
        id={panelId}
        role="menu"
        aria-labelledby={buttonId}
        className="bg-white border border-black/10 rounded-2xl   overflow-hidden p-4"
      >
        <div className={`grid gap-6 ${item.dropdown.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
          {item.dropdown.map((group) => (
            <div key={group.group}>
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-3 px-1">
                {group.group}
              </div>
              <div className="flex flex-col gap-0.5">
                {group.items.map((dropItem: NavDropdownItem) => (
                  <Link
                    key={dropItem.label}
                    href={dropItem.href}
                    role="menuitem"
                    onClick={onNavigate}
                    className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-black/[0.04] focus:bg-black/[0.04] focus:outline-none transition-colors duration-150"
                  >
                    <div className="mt-0.5 w-7 h-7 rounded-lg bg-black/5 flex items-center justify-center flex-shrink-0 text-black/50 group-hover:bg-black/[0.08] group-hover:text-black transition-all duration-150">
                      {dropItem.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-black/80 group-hover:text-black transition-colors leading-tight">
                          {dropItem.label}
                        </span>
                        {dropItem.badge && (
                          <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 border border-black/15 text-black/40 rounded-full">
                            {dropItem.badge}
                          </span>
                        )}
                        {dropItem.status === "online" && (
                          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black/60" />
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-black/40 mt-0.5 leading-snug">{dropItem.desc}</div>
                    </div>
                    <ArrowRight />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        {item.dropdown.length > 1 && (
          <div className="mt-4 pt-4 border-t border-black/[0.08] flex items-center justify-between px-1">
            <span className="text-xs text-black/35">Butuh bantuan memilih?</span>
            <Link href={supportLinks.contact} onClick={onNavigate} className="text-xs font-semibold text-black/70 hover:text-black flex items-center gap-1.5 transition-colors group">
              Konsultasi Gratis <ArrowRight />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Mobile Nav Item ─────────────────────────────────────────────────────────
const MobileNavItem = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  if (!item.dropdown) {
    return (
      <Link href={item.href ?? homeAnchors.home} className="block px-1 py-3.5 text-sm font-semibold text-black/70 border-b border-black/[0.06] hover:text-black transition-colors">
        {item.label}
      </Link>
    );
  }
  return (
    <div className="border-b border-black/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-1 py-3.5 text-sm font-semibold text-black/70 hover:text-black transition-colors text-left"
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
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/[0.04] transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-black/5 flex items-center justify-center flex-shrink-0 text-black/40">
                {dropItem.icon}
              </div>
              <div>
                <div className="text-sm font-medium text-black/75">{dropItem.label}</div>
                <div className="text-xs text-black/35">{dropItem.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Announcement Bar ────────────────────────────────────────────────────────
const AnnouncementBar = ({ onClose }: { onClose: () => void }) => (
  <div className="relative bg-white text-black text-center py-2.5 px-4 text-xs font-medium tracking-wide overflow-hidden border-b border-black/10">
    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-black/[0.03] to-transparent" />
    <span className="relative">
      🚀 Lihat panduan alur escrow, bantuan, dan dokumentasi Kahade.{" "}
      <Link href={supportLinks.docs} className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity">
        Pelajari selengkapnya →
      </Link>
    </span>
    <button
      onClick={onClose}
      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-80 transition-opacity"
      aria-label="Tutup"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="3" y1="3" x2="11" y2="11" />
        <line x1="11" y1="3" x2="3" y2="11" />
      </svg>
    </button>
  </div>
);

// ─── Main Header ─────────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownBaseId = useId();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
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

  const handleMouseEnter = (label: string) => {
    openDropdown(label);
  };

  const handleMouseLeave = () => {
    clearHoverTimeout();
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  useEffect(() => () => {
    clearHoverTimeout();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDropdown();
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full font-sans">
      {showAnnouncement && <AnnouncementBar onClose={() => setShowAnnouncement(false)} />}

      <header
        ref={headerRef}
        className={`relative bg-white transition-all duration-300 ${
          scrolled
            ? ""
            : "border-b border-black/[0.08]"
        }`}
      >

        {/* Main Nav Row */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 gap-8">
          {/* Logo */}
          <Link href={homeAnchors.home} className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-95">
              <ShieldIcon size={17} />
            </div>
            <div className="leading-none">
              <div className="text-[16px] font-bold text-black tracking-tight">Kahade</div>
              <div className="text-[9px] font-semibold tracking-[0.18em] uppercase text-black/35 mt-0.5">P2P Platform</div>
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
                      onFocus={() => openDropdown(item.label)}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          closeDropdown();
                          (e.currentTarget as HTMLButtonElement).blur();
                        }
                        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openDropdown(item.label);
                        }
                      }}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                        isOpen
                          ? "text-black bg-black/5"
                          : "text-black/55 hover:text-black hover:bg-black/[0.04]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`transition-transform duration-200 opacity-60 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href ?? homeAnchors.home}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-black/55 hover:text-black hover:bg-black/[0.04] transition-all duration-150"
                    >
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
            <div className="hidden lg:flex items-center gap-1.5 mr-2 px-3 py-1.5 rounded-full border border-black/10 bg-white/60">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black/70" />
              </span>
              <span className="text-[10px] font-semibold text-black/45 tracking-wide">Sistem Aktif</span>
            </div>

            <Link href={supportLinks.contact} className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-black/65 hover:text-black rounded-lg hover:bg-black/5 transition-all duration-150">
              Hubungi Tim
            </Link>

            <Link href={homeAnchors.cta} className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-black/85 active:scale-95 transition-all duration-150 group">
              Mulai Transaksi
              <ArrowRight />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-black/60 hover:text-black hover:bg-black/5 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Secondary Bar */}
        <div className="hidden lg:block relative z-10 border-t border-black/5">
          <div className="max-w-7xl mx-auto px-8 h-8 flex items-center justify-between">
            <div className="flex items-center gap-5">
              {["Escrow workflow", "KYC support", "Monitoring aktif", "Pusat bantuan"].map((chip) => (
                <div key={chip} className="flex items-center gap-1.5 text-[10px] text-black/35 font-medium">
                  <span className="text-black/30">✓</span>
                  {chip}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 text-[10px] text-black/30 font-medium">
              <span>Alur dana lebih transparan</span>
              <span className="text-black/15">|</span>
              <span>Dukungan untuk buyer & seller</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden relative z-10 bg-white border-t border-black/[0.08] px-4 pt-2 pb-6">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
            </nav>
            <div className="flex flex-col gap-2.5 mt-5">
              <Link href={supportLinks.contact} className="w-full py-3 text-center text-sm font-semibold text-black border border-black/15 rounded-xl hover:bg-black/[0.04] transition-colors">
                Hubungi Tim
              </Link>
              <Link href={homeAnchors.cta} className="w-full py-3 text-center text-sm font-semibold bg-black text-white rounded-xl hover:bg-black/85 transition-colors flex items-center justify-center gap-2">
                Mulai Transaksi <ArrowRight />
              </Link>
            </div>
            <div className="mt-5 pt-4 border-t border-black/[0.08] flex flex-wrap gap-x-4 gap-y-1.5">
              {["Escrow workflow", "Pusat bantuan", "Panduan teknis", "Monitoring sistem"].map((t) => (
                <span key={t} className="text-[10px] text-black/30 font-medium flex items-center gap-1">
                  <span>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
