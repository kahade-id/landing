"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { navItems } from "@/src/lib/site";
import {
  ChevronDown, Menu, X, Shield, Zap, Users, Globe,
  Smartphone, BarChart3, FileText, HelpCircle, Lock, LogIn,
  Twitter, Instagram,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield, Zap, Users, Globe, Smartphone, BarChart3, FileText, HelpCircle, Lock,
};

interface DropdownItem { icon: string; label: string; desc: string; href: string; badge?: string; }
interface DropdownGroup { group: string; items: DropdownItem[]; }
interface NavItem { label: string; href?: string; dropdown?: DropdownGroup[]; }

function KahadeLogo() {
  return <Image src="/favicon.svg" alt="Kahade" width={28} height={28} priority />;
}

function DropdownPanel({ item, isOpen, onNavigate }: { item: NavItem; isOpen: boolean; onNavigate: () => void }) {
  if (!item.dropdown || !isOpen) return null;
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[320px] max-w-[420px] bg-white border border-border rounded-xl p-4 z-dropdown">
      <div className={`grid gap-6 ${item.dropdown.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
        {item.dropdown.map((group) => (
          <div key={group.group}>
            <div className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-3 px-1">{group.group}</div>
            <div className="flex flex-col gap-0.5">
              {group.items.map((dropItem) => {
                const IconComponent = iconMap[dropItem.icon] || Shield;
                return (
                  <Link key={dropItem.label} href={dropItem.href} onClick={onNavigate} className="flex items-start gap-3 p-2.5 rounded-lg transition-colors hover:bg-muted group">
                    <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">{dropItem.label}</span>
                        {dropItem.badge && <span className="px-1.5 py-0.5 text-[10px] font-medium bg-muted rounded-full border border-border">{dropItem.badge}</span>}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{dropItem.desc}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── FULLSCREEN MOBILE MENU — inspired by popcorn.space ─── */
function MobileMenu({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();

  // Flatten nav for primary display
  const primaryLinks = navItems.map((item) => ({
    label: item.label,
    href: item.href ?? (item.dropdown ? "#" : "/"),
  }));

  const secondaryLinks = [
    { label: "Syarat & Ketentuan", href: "/terms" },
    { label: "Kebijakan Privasi", href: "/privacy" },
    { label: "Hubungi Kami", href: "/contact" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 md:hidden flex flex-col"
      style={{ background: "hsl(0 0% 97%)" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
        <Link href="/" onClick={onClose} aria-label="Kahade — Beranda">
          <div className="w-11 h-11 rounded-xl border border-border bg-white flex items-center justify-center">
            <Image src="/favicon.svg" alt="Kahade" width={24} height={24} />
          </div>
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup menu"
          className="w-11 h-11 rounded-xl border border-border bg-white flex items-center justify-center text-foreground hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Primary nav — large centered */}
      <nav className="flex-1 flex flex-col items-center justify-center gap-1 px-6 -mt-12" aria-label="Navigasi mobile">
        {primaryLinks.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={`
                text-4xl font-display font-bold tracking-tight text-center py-2 transition-colors block w-full
                ${isActive
                  ? "text-foreground underline underline-offset-8 decoration-2"
                  : "text-foreground/70 hover:text-foreground"
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="flex items-center gap-0 mx-6 mb-5 flex-shrink-0">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #F5A623, #7ED321)" }} />
        <div className="w-5 h-5 rounded border border-border bg-white flex items-center justify-center mx-2 flex-shrink-0">
          <Image src="/favicon.svg" alt="" width={12} height={12} aria-hidden="true" />
        </div>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, #F5A623, #7ED321)" }} />
      </div>

      {/* Secondary links */}
      <div className="flex flex-col items-center gap-3 mb-6 flex-shrink-0">
        {secondaryLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="text-lg text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA + Social */}
      <div className="flex flex-col items-center gap-4 pb-10 flex-shrink-0 px-6">
        <a
          href="https://app.kahade.id/register"
          className="bg-foreground text-background text-base font-semibold px-10 py-3 rounded-full hover:bg-foreground/90 transition-colors"
        >
          Daftar Gratis
        </a>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="X / Twitter" className="w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null); }, [pathname]);
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => { if (headerRef.current && !headerRef.current.contains(e.target as Node)) setActiveDropdown(null); };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") { setActiveDropdown(null); setMobileOpen(false); } };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);
  useEffect(() => { return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }; }, []);

  const clearHoverTimeout = () => { if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; } };
  const openDropdown = (label: string) => { clearHoverTimeout(); setActiveDropdown(label); };
  const closeDropdown = () => { clearHoverTimeout(); setActiveDropdown(null); };
  const handleMouseLeave = () => { clearHoverTimeout(); timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120); };

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-sticky bg-white border-b border-border">
        <div className="container-base">
          <div className="flex items-center h-16 gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Kahade — Beranda">
              <KahadeLogo />
              <span className="hidden md:block font-display font-bold text-lg tracking-tight">kahade</span>
            </Link>

            {/* Desktop Nav */}
            <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-0.5 flex-1">
              {navItems.map((item) => {
                const isOpen = activeDropdown === item.label;
                return (
                  <div key={item.label} className="relative" onMouseEnter={() => item.dropdown && openDropdown(item.label)} onMouseLeave={handleMouseLeave}>
                    {item.dropdown ? (
                      <button type="button" aria-expanded={isOpen} aria-haspopup="menu" onClick={() => (isOpen ? closeDropdown() : openDropdown(item.label))} className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isOpen ? "text-foreground bg-muted" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
                        {item.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <Link href={item.href ?? "/"} className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        {item.label}
                      </Link>
                    )}
                    <DropdownPanel item={item} isOpen={isOpen} onNavigate={closeDropdown} />
                  </div>
                );
              })}
            </nav>

            <div className="flex-1 md:hidden" />

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <a href="https://app.kahade.id/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2">Masuk</a>
              <a href="https://app.kahade.id/register" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors">Daftar Gratis</a>
            </div>

            {/* Mobile: Masuk (black) + Hamburger (muted) */}
            <div className="flex md:hidden items-center gap-2">
              {/* Tombol Masuk — hitam, teks & icon putih */}
              <a
                href="https://app.kahade.id/login"
                aria-label="Masuk ke akun"
                className="h-9 inline-flex items-center gap-1.5 bg-foreground text-background px-3 rounded-lg text-sm font-semibold transition-colors hover:bg-foreground/85 active:bg-foreground/75 leading-none"
              >
                <LogIn className="w-5 h-5" />
                <span>Masuk</span>
              </a>

              {/* Hamburger — muted bg */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-muted hover:bg-neutral-200 text-foreground transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}
