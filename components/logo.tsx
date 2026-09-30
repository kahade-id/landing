import { LOGO_PATHS, LOGO_VIEWBOX } from "@/lib/logo-paths";

type LogoProps = {
  size?: number;
  fill?: string;
  className?: string;
};

/** Brand mark Kahade — SVG path final dari repo frontend (assets/brand/logo.svg). */
export function LogoMark({ size = 32, fill = "#000000", className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={LOGO_VIEWBOX}
      className={className}
      role="img"
      aria-label="Kahade"
    >
      <g fill={fill}>
        {LOGO_PATHS.map((p, i) => (
          <path key={i} d={p.d} transform={p.transform} />
        ))}
      </g>
    </svg>
  );
}

type LockupProps = {
  size?: "sm" | "md" | "lg";
  fill?: string;
};

/** Logo lockup: mark + wordmark "Kahade". */
export function Logo({ size = "md", fill = "#000000" }: LockupProps) {
  const px = size === "sm" ? 24 : size === "lg" ? 44 : 32;
  const textPx = size === "sm" ? 19 : size === "lg" ? 30 : 24;
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Kahade">
      <LogoMark size={px} fill={fill} />
      <span
        className="font-semibold tracking-tight"
        style={{ fontSize: textPx, lineHeight: 1.15, color: fill }}
      >
        Kahade
      </span>
    </span>
  );
}
