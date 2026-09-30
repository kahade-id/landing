"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/logo";

const NAV_LINKS = [
  { id: "cara-kerja", label: "Cara kerja" },
  { id: "fitur", label: "Fitur" },
  { id: "download", label: "Download" },
] as const;

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const line =
  "block h-[2px] w-full rounded-full bg-ink transition-all duration-300 ease-out";

/**
 * Header mengambang (floating pill) ala Mobbin dengan branding Kahade:
 * tidak menempel ke tepi layar — sticky dengan margin, rounded-2xl,
 * backdrop-blur, border + shadow menguat saat scroll.
 * Nav links kiri-setelah-logo, ghost "Masuk" + pill CTA "Download" di kanan,
 * hamburger → kartu menu mengambang di mobile dengan focus trap sederhana.
 *
 * Catatan: tidak ada halaman login web (web app dihapus dari repo frontend),
 * jadi "Masuk" mengarah ke #download — user mengunduh aplikasi lalu login di sana.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Efek scroll: border + shadow menguat setelah scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight section aktif via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.id)
    ).filter((el): el is HTMLElement => el !== null);
    if (typeof IntersectionObserver === "undefined" || sections.length === 0)
      return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Menu mobile: ESC, focus trap, kunci scroll body, tutup saat resize ke desktop
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && headerRef.current) {
        const items = Array.from(
          headerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter((el) => el.offsetParent !== null);
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 768) close();
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <header
      ref={headerRef}
      className="sticky top-3 z-50 mx-3 sm:top-4 sm:mx-4"
    >
      {/* Pill mengambang */}
      <div
        className={`relative mx-auto max-w-7xl rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          open
            ? "border-black/10 bg-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.18)]"
            : scrolled
              ? "border-black/10 bg-white/80 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.18)]"
              : "border-black/[0.06] bg-white/60 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.12)]"
        }`}
      >
        <div className="flex h-16 items-center px-4 sm:px-6">
          {/* Logo — mark saja, diperbesar, tanpa wordmark */}
          <a
            href="#top"
            aria-label="Kahade — kembali ke atas"
            className="shrink-0 rounded-lg outline-offset-4"
          >
            <LogoMark size={40} />
          </a>

          {/* Nav desktop — kiri setelah logo */}
          <nav aria-label="Navigasi utama" className="ml-6 hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={active === l.id ? "true" : undefined}
                    className={`relative block rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors duration-200 ${
                      active === l.id
                        ? "text-ink"
                        : "text-ink-soft/80 hover:text-ink"
                    }`}
                  >
                    {l.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-1 h-[2px] origin-left rounded-full bg-ink transition-transform duration-300 ${
                        active === l.id ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Aksi desktop — kanan */}
          <div className="ml-auto hidden items-center gap-1 md:flex">
            <a
              href="#download"
              className="rounded-full px-4 py-2.5 text-[15px] font-medium text-ink-soft/80 transition-colors duration-200 hover:text-ink"
            >
              Masuk
            </a>
            <a
              href="#download"
              className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-[15px] font-semibold text-paper transition-all duration-200 hover:bg-ink-soft active:scale-[0.97]"
            >
              Download
            </a>
          </div>

          {/* Hamburger mobile */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 hover:bg-surface active:bg-surface md:hidden"
          >
            <span
              aria-hidden="true"
              className="flex h-4 w-6 flex-col items-center justify-between"
            >
              <span
                className={`${line} ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span className={`${line} ${open ? "scale-x-0 opacity-0" : ""}`} />
              <span
                className={`${line} ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        {/* Menu mobile — kartu mengambang di bawah pill */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          aria-hidden={!open}
          inert={!open}
          className={`absolute inset-x-0 top-[calc(100%+8px)] md:hidden ${
            open ? "" : "pointer-events-none"
          }`}
        >
          <div
            aria-hidden="true"
            onClick={close}
            className={`fixed inset-0 -z-10 bg-ink/20 backdrop-blur-sm transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />
          <nav
            aria-label="Navigasi seluler"
            className={`relative mx-1 overflow-hidden rounded-2xl border border-black/10 bg-white px-6 pb-8 pt-2 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out ${
              open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((l, i) => (
                <li
                  key={l.id}
                  className={`transition-all duration-300 ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open ? `${80 + i * 60}ms` : "0ms",
                  }}
                >
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={`#${l.id}`}
                    onClick={close}
                    className={`flex min-h-[56px] items-center justify-between border-b border-surface text-2xl font-semibold tracking-tight transition-colors ${
                      active === l.id ? "text-ink" : "text-ink-soft"
                    }`}
                  >
                    {l.label}
                    <svg
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="text-muted"
                    >
                      <path
                        d="M7.5 4.5 13 10l-5.5 5.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <div
              className={`mt-6 flex flex-col gap-2 transition-all delay-300 duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <a
                href="#download"
                onClick={close}
                className="inline-flex h-12 items-center justify-center rounded-full bg-ink text-base font-semibold text-paper transition-transform active:scale-[0.98]"
              >
                Download
              </a>
              <a
                href="#download"
                onClick={close}
                className="inline-flex h-12 items-center justify-center rounded-full text-base font-medium text-ink-soft transition-colors hover:text-ink"
              >
                Masuk
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
