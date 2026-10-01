"use client";

import { useEffect, useState } from "react";
import { KahadeMark } from "./Logo";

const NAV = [
  { id: "cara-kerja", label: "Cara kerja" },
  { id: "fitur", label: "Fitur" },
  { id: "faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

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

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Kahade — kembali ke atas" className="shrink-0">
          <KahadeMark className="h-9 w-9" />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-active={active === item.id}
              className="nav-link min-h-[44px] text-sm font-medium text-[#525252] transition-colors hover:text-black inline-flex items-center"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#download"
            className="btn-press inline-flex min-h-[44px] items-center rounded-full px-5 text-sm font-medium text-[#262626] hover:bg-[#F3F4F6]"
          >
            Masuk
          </a>
          <a
            href="#download"
            className="btn-press inline-flex min-h-[44px] items-center rounded-full bg-black px-5 text-sm font-medium text-white"
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="burger inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-black md:hidden"
          data-open={open}
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu md:hidden" data-open={open}>
        <div>
          <nav
            aria-label="Navigasi seluler"
            className="border-t border-black/5 bg-white/95 px-5 pb-6 pt-2 backdrop-blur-xl"
          >
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] items-center border-b border-black/5 text-base font-medium text-[#262626]"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-5">
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="btn-press inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-black/10 text-sm font-medium"
              >
                Masuk
              </a>
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="btn-press inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-black text-sm font-medium text-white"
              >
                Download
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
