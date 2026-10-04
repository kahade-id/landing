"use client";

import { motion } from "motion/react";
import { Reveal, Words } from "./motion-helpers";
import { AppleLogo, GooglePlayLogo } from "@/lib/icons";
import { RealisticPhone } from "./RealisticPhone";
import { site } from "@/content/site";

/* ---------- Ikon status bar ---------- */

function SignalIcon() {
  return (
    <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden="true">
      <rect x="0" y="7" width="3" height="4" rx="1" />
      <rect x="4.5" y="5" width="3" height="6" rx="1" />
      <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
      <rect x="13.5" y="0" width="3" height="11" rx="1" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="16" height="11" viewBox="0 0 16 12" fill="currentColor" aria-hidden="true">
      <path d="M8 9.6a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 1 1 0-3.2zM8 5.4c1.8 0 3.4.7 4.6 1.9l-1.5 1.5A4.3 4.3 0 0 0 8 7.8c-1.2 0-2.3.5-3.1 1.2L3.4 7.3A6.4 6.4 0 0 1 8 5.4zM8 1c2.9 0 5.6 1.2 7.6 3.1l-1.5 1.5A8.6 8.6 0 0 0 8 3.4c-2.4 0-4.6 1-6.1 2.5L.4 4.1A10.6 10.6 0 0 1 8 1z" transform="translate(0 -1)" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" opacity="0.4" />
      <rect x="2" y="2" width="15" height="8" rx="2" fill="currentColor" />
      <path d="M23.5 4v4a2 2 0 0 0 0-4z" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

/* ---------- Badge store hitam ala referensi ---------- */

function StoreBadge({
  href,
  icon,
  small,
  big,
  label,
}: {
  href?: string;
  icon: React.ReactNode;
  small: string;
  big: string;
  label: string;
}) {
  const cls =
    "btn-press inline-flex items-center gap-3 rounded-2xl bg-black px-6 py-3.5 text-white transition-transform";
  const inner = (
    <>
      <span aria-hidden="true" className="text-[28px] leading-none">
        {icon}
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[11px] font-medium opacity-80">{small}</span>
        <span className="text-[22px] font-semibold tracking-tight">{big}</span>
      </span>
    </>
  );
  if (!href)
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        aria-label={`${label} — segera hadir`}
        title="Segera hadir"
        className={`${cls} cursor-not-allowed opacity-60`}
      >
        <>
          <span aria-hidden="true" className="text-[28px] leading-none">
            {icon}
          </span>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[11px] font-medium opacity-80">Segera hadir di</span>
            <span className="text-[22px] font-semibold tracking-tight">{big}</span>
          </span>
        </>
      </button>
    );
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cls}
    >
      {inner}
    </a>
  );
}

/* ---------- Phone mockup dengan status bar ---------- */

function CtaPhone() {
  return (
    <RealisticPhone className="mx-auto w-[270px] sm:w-[310px]">
      <div className="relative bg-[#FFD500]">
        {/* Status bar */}
        <div className="relative flex items-center justify-between px-7 pt-4 text-black">
          <span className="w-12 text-[15px] font-semibold tracking-tight">
            9:41
          </span>
          <span className="flex w-12 items-center justify-end gap-1.5">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </span>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between px-6 pt-4">
          <img
            src="/icon_logo.svg"
            alt=""
            aria-hidden="true"
            className="h-7 w-auto"
          />
          <span className="text-[15px] font-bold text-black">Feed</span>
          <span className="w-7" aria-hidden="true" />
        </div>

        {/* Tab */}
        <div className="mt-3 flex gap-5 px-6 text-[13px] font-medium">
          <span className="border-b-2 border-black pb-1 font-bold text-black">
            Untuk Anda
          </span>
          <span className="text-black/50">Mengikuti</span>
          <span className="text-black/50">Terbaru</span>
        </div>

        {/* White sheet */}
        <div className="mt-3 min-h-[290px] rounded-t-[1.8rem] bg-white px-4 pb-6 pt-4 sm:min-h-[320px]">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="mb-3 overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div
                className={`aspect-[16/9] bg-gradient-to-br ${
                  i === 0
                    ? "from-black/[0.12] to-black/[0.04]"
                    : "from-black/[0.08] to-black/[0.03]"
                }`}
              />
              <div className="p-3">
                <div className="h-2.5 w-2/3 rounded-full bg-black/10" />
                <div className="mt-2 h-2.5 w-1/3 rounded-full bg-black/10" />
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-2 w-16 rounded-full bg-black/25" />
                  <div className="h-2 w-10 rounded-full bg-black/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RealisticPhone>
  );
}

/* ---------- Closing ---------- */

export function Closing() {
  return (
    <section id="download" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-4 sm:px-8 lg:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FFD500] px-6 pt-12 sm:rounded-[3rem] sm:px-14 sm:pt-16 lg:px-20 lg:pt-20">
            {/* Top row: ikon store + label */}
            <div className="flex items-center gap-3 text-black">
              <AppleLogo weight="regular" className="h-7 w-7" aria-hidden="true" />
              <GooglePlayLogo weight="regular" className="h-6 w-6" aria-hidden="true" />
              <span className="text-[17px] font-medium tracking-tight text-black/70">
                Unduh aplikasinya
              </span>
            </div>

            {/* Headline */}
            <Words
              as="h2"
              text="Waktunya jual beli tanpa was-was."
              delay={0.15}
              className="mt-6 block max-w-2xl text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-black sm:text-6xl lg:text-[4.2rem]"
            />

            <Reveal delay={300}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-black/70 sm:text-lg">
                Unduh Kahade dan rasakan social commerce dengan transaksi yang
                terlindungi. Jual semudah posting, beli senyaman scroll.
              </p>
            </Reveal>

            {/* Store badges */}
            <Reveal delay={420}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <StoreBadge
                  href={site.appStoreUrl}
                  icon={<AppleLogo weight="regular" aria-hidden="true" />}
                  small="Unduh di"
                  big="App Store"
                  label="Unduh di App Store"
                />
                <StoreBadge
                  href={site.playStoreUrl}
                  icon={<GooglePlayLogo weight="regular" aria-hidden="true" />}
                  small="Dapatkan di"
                  big="Google Play"
                  label="Dapatkan di Google Play"
                />
              </div>
            </Reveal>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mt-14 sm:mt-16"
            >
              <CtaPhone />
            </motion.div>

            {/* lengkung bawah kartu mengikuti phone */}
            <div aria-hidden="true" className="-mb-1 h-6 sm:h-10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
