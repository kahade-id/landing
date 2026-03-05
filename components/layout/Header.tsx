"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { navItems } from "@/src/lib/site";
import {
  ChevronDown,
  Menu,
  X,
  Shield,
  Zap,
  Users,
  Globe,
  Smartphone,
  BarChart3,
  FileText,
  HelpCircle,
  Lock,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield, Zap, Users, Globe, Smartphone, BarChart3, FileText, HelpCircle, Lock,
};

interface DropdownItem {
  icon: string;
  label: string;
  desc: string;
  href: string;
  badge?: string;
}
interface DropdownGroup {
  group: string;
  items: DropdownItem[];
}
interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownGroup[];
}

function KahadeLogo() {
  return (
    <Image src="/favicon.svg" alt="Kahade" width={28} height={28} priority />
  );
}

function DropdownPanel({ item, isOpen, onNavigate }: { item: NavItem; isOpen: boolean; onNavigate: () => void }) {
  if (!item.dropdown || !isOpen) return null;
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[320px] max-w-[420px] bg-white border border-border rounded-xl p-4 z-dropdown"
      aria-label={`${item.label} menu`}
    >
      <div className={`grid gap-6 ${item.dropdown.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
        {item.dropdown.map((group) => (
          <div key={group.group}>
            <div className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-3 px-1">
              {group.group}
            </div>
            <div className="flex flex-col gap-0.5">
              {group.items.map((dropItem) => {
                const IconComponent = iconMap[dropItem.icon] || Shield;
                return (
                  <Link
                    key={dropItem.label}
                    href={dropItem.href}
                    onClick={onNavigate}
                    className="flex items-start gap-3 p-2.5 rounded-lg transition-colors hover:bg-muted group"
                  >
                    <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">{dropItem.label}</span>
                        {dropItem.badge && (
                          <span className="px-1.5 py-0.5 text-[10px] font-medium bg-muted rounded-full border border-border">
                            {dropItem.badge}
                          </span>
                        )}
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

function MobileNavItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  if (!item.dropdown) {
    return (
      <Link
        href={item.href ?? "/"}
        onClick={onNavigate}
        className="block py-3.5 text-muted-foreground hover:text-foreground transition-colors border-b border-border"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-3.5 text-muted-foreground hover:text-foreground transition-colors text-left"
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 flex flex-col gap-0.5">
          {item.dropdown.flatMap((group) => group.items).map((dropItem) => {
            const IconComponent = iconMap[dropItem.icon] || Shield;
            return (
              <Link
                key={dropItem.label}
                href={dropItem.href}
                onClick={onNavigate}
                className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-muted transition-colors"
              >
                <IconComponent className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground text-sm">{dropItem.label}</div>
                  <div className="text-xs text-muted-foreground">{dropItem.desc}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
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
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setActiveDropdown(null); setMobileOpen(false); }
    };
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
    <header ref={headerRef} className="sticky top-0 z-sticky bg-white border-b border-border">
      <div className="container-base">
        <div className="flex items-center h-16 gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Kahade — Beranda">
            <KahadeLogo />
            {/* Text hidden on mobile — header cukup logo + Masuk + hamburger */}
            <span className="hidden md:block font-display font-bold text-lg tracking-tight">kahade</span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Navigasi utama" className="hidden md:flex items-center gap-0.5 flex-1">
            {navItems.map((item) => {
              const isOpen = activeDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && openDropdown(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="menu"
                      onClick={() => (isOpen ? closeDropdown() : openDropdown(item.label))}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isOpen ? "text-foreground bg-muted" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href ?? "/"}
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
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
            <a href="https://app.kahade.id/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
              Masuk
            </a>
            <a href="https://app.kahade.id/register" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors">
              Daftar Gratis
            </a>
          </div>

          {/* Mobile: Masuk (gray solid) + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://app.kahade.id/login"
              className="text-sm font-semibold text-white bg-black hover:bg-neutral-800 active:bg-neutral-700 px-4 py-2 rounded-lg transition-colors leading-none"
            >
              Masuk
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden border-t border-border bg-white" style={{ height: "calc(100vh - 64px)" }}>
          <div className="px-4 pt-3 pb-20 overflow-y-auto h-full">
            <nav aria-label="Navigasi mobile" className="flex flex-col">
              {navItems.map((item) => (
                <MobileNavItem key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
              ))}
            </nav>
            <div className="mt-6">
              <a href="https://app.kahade.id/register" className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium text-center inline-flex items-center justify-center">
                Daftar Gratis
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
