import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

/**
 * Tombol internal situs — satu-satunya pola tombol pill.
 *
 * Menggantikan belasan salinan hand-made `rounded-full bg-black ...`
 * yang tersebar di halaman deeplink, error, 404, dan DraftState.
 *
 * - `href` diawali "/" → Next Link (navigasi internal).
 * - `href` http(s) eksternal → <a> dengan target _blank.
 * - `href` skema lain (kahade://, mailto:) → <a> biasa.
 * - tanpa `href` → <button>.
 */
type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-black text-white transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]",
  secondary:
    "border border-black/15 text-black transition-colors hover:border-black/40",
};

const SIZES: Record<Size, string> = {
  sm: "h-11 px-4 text-base",
  md: "min-h-[48px] px-7 text-[15px]",
  lg: "min-h-[56px] px-9 text-base",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps =
  | (Common & {
      href: string;
      onClick?: undefined;
    } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">)
  | (Common & {
      href?: undefined;
      onClick?: MouseEventHandler<HTMLButtonElement>;
      type?: "button" | "submit" | "reset";
    } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">);

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "lg", className = "", children } = props;
  const cls = `${BASE} ${VARIANTS[variant]} ${SIZES[size]}${className ? ` ${className}` : ""}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    if (href.startsWith("/") && !href.startsWith("//")) {
      return (
        <Link href={href} className={cls} {...rest}>
          {children}
        </Link>
      );
    }
    const external = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { onClick, type = "button", ...rest } = props as Extract<
    ButtonProps,
    { href?: undefined }
  >;
  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  );
}
