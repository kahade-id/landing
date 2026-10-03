"use client";

import { useEffect, useState } from "react";
import { Equals, X } from "@/lib/icons";
import { DownloadActions } from "./DownloadActions";

const NAV = [
  { id: "aplikasi", label: "Aplikasi" },
  { id: "cara-kerja", label: "Cara kerja" },
  { id: "fitur", label: "Fitur" },
  { id: "faq", label: "FAQ" },
];

/**
 * Header pola Mobbin: floating glass pill terpusat.
 * - Pill 60px, radius 30px, kaca #F3F4F6/64 + blur 48px, tanpa border/shadow.
 * - Offset atas 24px (desktop) / 8px (mobile ≤810px).
 * - Nav 16px/600/0.2px, tanpa hover visual.
 * - CTA "Unduh" hanya muncul setelah scroll (pola Mobbin).
 * - Mobile: hamburger kiri 20×20, menu jadi panel dropdown (bukan full-screen).
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setCtaVisible(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-2 md:px-0 md:pt-6">
      <div
        className={`mobbin-pill w-full md:w-auto ${
          scrolled ? "is-scrolled" : ""
        }`}
        data-open={open}
      >
        {/* Baris utama pill */}
        <div className="flex h-[60px] items-center gap-5 px-5 md:px-6">
          {/* Logo asli */}
          <a
            href="#top"
            aria-label="Kahade — kembali ke atas"
            className="shrink-0"
            onClick={() => setOpen(false)}
          >
            <img
              src="/icon_logo.svg"
              alt="Kahade"
              className="h-9 w-auto"
              width={30}
              height={37}
            />
          </a>

          {/* Nav desktop */}
          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-5 md:flex"
          >
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex min-h-[44px] items-center text-[16px] font-semibold leading-[22px] tracking-[0.2px] text-[#262626]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA muncul saat scroll (desktop) */}
          <div
            className={`hidden md:block transition-all duration-300 ${
              ctaVisible
                ? "translate-x-0 opacity-100"
                : "pointer-events-none -translate-x-2 opacity-0"
            }`}
            aria-hidden={!ctaVisible}
          >
            <a
              href="#download"
              tabIndex={ctaVisible ? 0 : -1}
              className="inline-flex h-11 items-center whitespace-nowrap rounded-full bg-black px-4 text-[16px] font-semibold leading-[22px] tracking-[0.2px] text-white"
            >
              Unduh
            </a>
          </div>

          {/* Spacer: hamburger kanan di mobile */}
          <span className="flex-1 md:hidden" aria-hidden="true" />

          {/* Hamburger kanan (mobile) */}
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-black md:hidden"
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X weight="bold" className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Equals weight="bold" className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Panel menu mobile (dropdown) */}
        <div className="mobile-panel md:hidden" data-open={open}>
          <div>
            <nav
              aria-label="Navigasi seluler"
              className="flex flex-col gap-4 px-5 pb-2 pt-1"
            >
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="text-[16px] font-semibold leading-[22px] tracking-[0.2px] text-[#262626]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="px-5 pb-5 pt-4">
              <DownloadActions size="md" layout="column" showApk={false} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
