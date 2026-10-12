import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";
import { buttonClasses } from "@kahade/ui";

/**
 * Tombol situs — memakai kelas visual Button design system (@kahade/ui)
 * dengan pemilihan elemen otomatis:
 * - `href` diawali "/" → Next Link (navigasi internal).
 * - `href` http(s) eksternal → <a> dengan target _blank.
 * - `href` skema lain (kahade://, mailto:) → <a> biasa.
 * - tanpa `href` → <button>.
 */
type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

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
  const { variant = "primary", size = "lg", className = "", children, ...rest } = props;
  const cls = buttonClasses(variant, size, `gap-2 ${className}`);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    if (href.startsWith("/") && !href.startsWith("//")) {
      return (
        <Link href={href} className={cls} {...anchorRest}>
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
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={cls} {...buttonRest}>
      {children}
    </button>
  );
}
