import type { ReactNode } from "react";
import { AppleLogo, DownloadSimple, GooglePlayLogo } from "@/lib/icons";
import { site } from "@/content/site";

type Size = "md" | "lg";
type Tone = "light" | "dark";

/** `lg` turun ke ukuran `md` di bawah 640px agar dua lencana muat sebaris di ponsel. */
const SIZES: Record<Size, string> = {
  md: "h-12 pl-4 pr-5 gap-2.5",
  lg: "h-12 pl-4 pr-5 gap-2.5 sm:h-14 sm:pl-5 sm:pr-6 sm:gap-3",
};
const ICON: Record<Size, string> = {
  md: "text-[22px]",
  lg: "text-[22px] sm:text-[26px]",
};
const LABEL: Record<Size, string> = {
  md: "text-[15px]",
  lg: "text-[15px] sm:text-[17px]",
};

/**
 * Lencana toko aplikasi. Tanpa URL (belum diisi di content/site.ts) →
 * tombol nonaktif "Segera hadir di …" tanpa href. Dilarang link mati.
 */
function StoreBadge({
  href,
  icon,
  label,
  sub,
  size,
  tone,
  primary,
}: {
  href?: string;
  icon: ReactNode;
  label: string;
  sub: string;
  size: Size;
  tone: Tone;
  primary: boolean;
}) {
  const filled =
    tone === "dark"
      ? primary
        ? "bg-white text-black hover:bg-surface-3"
        : "border border-white/30 text-white hover:border-white"
      : primary
        ? "bg-fg text-fg-inverse hover:bg-fg-2"
        : "border border-line-strong text-fg hover:border-fg";
  const idle =
    tone === "dark"
      ? "border border-white/25 text-white"
      : "border border-line-strong text-fg";
  const base = `inline-flex shrink-0 items-center rounded-full font-semibold transition-colors duration-150 ${SIZES[size]}`;
  const ring =
    tone === "dark"
      ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2";

  const body = (subLabel: string) => (
    <>
      <span aria-hidden="true" className={`${ICON[size]} leading-none`}>
        {icon}
      </span>
      <span className="flex flex-col items-start leading-none">
        <span className="text-[11px] font-medium opacity-75">{subLabel}</span>
        <span className={`mt-1 tracking-[-0.01em] ${LABEL[size]}`}>{label}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        title="Segera hadir"
        className={`${base} ${idle} cursor-not-allowed`}
      >
        {body("Segera hadir di")}
      </button>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${filled} ${ring}`}>
      {body(sub)}
    </a>
  );
}

/**
 * Aksi unduh aplikasi (CTA utama). Membaca content/site.ts:
 * tersedia → tautan eksternal; belum → tombol nonaktif "Segera hadir".
 */
export function DownloadActions({
  size = "lg",
  layout = "row",
  tone = "light",
  showApk = true,
  className = "",
}: {
  size?: Size;
  layout?: "row" | "column";
  tone?: Tone;
  showApk?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex ${layout === "row" ? "flex-row flex-wrap items-center" : "flex-col items-stretch [&>*]:justify-center"} gap-3 ${className}`}
    >
      <StoreBadge
        href={site.appStoreUrl}
        icon={<AppleLogo weight="regular" />}
        sub="Unduh di"
        label="App Store"
        size={size}
        tone={tone}
        primary
      />
      <StoreBadge
        href={site.playStoreUrl}
        icon={<GooglePlayLogo weight="regular" />}
        sub="Dapatkan di"
        label="Google Play"
        size={size}
        tone={tone}
        primary={false}
      />
      {showApk && site.apkUrl && (
        <a
          href={site.apkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-11 items-center gap-2 px-1 text-small font-semibold underline underline-offset-4 ${
            tone === "dark" ? "text-white decoration-white/40 hover:decoration-white" : "text-fg decoration-line-control hover:decoration-fg"
          }`}
        >
          <DownloadSimple weight="regular" aria-hidden="true" />
          Unduh APK langsung
        </a>
      )}
    </div>
  );
}
