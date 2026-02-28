import type { ReactNode, SVGProps } from "react";

// ─── Generic ──────────────────────────────────────────────────────────────────
export interface WithChildren {
  children?: ReactNode;
}

export interface WithClassName {
  className?: string;
}

// ─── SVG Icon ─────────────────────────────────────────────────────────────────
export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  white?: boolean;
  className?: string;
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavDropdownItem {
  icon: ReactNode;
  label: string;
  desc: string;
  href: string;
  badge?: string;
  status?: string;
}

export interface NavDropdownGroup {
  group: string;
  items: NavDropdownItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownGroup[];
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  amount?: string;
  featured?: boolean;
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
export interface PricingFeature {
  label: string;
  included: boolean;
  note?: string;
}

export interface PricingTier {
  name: string;
  rate: string;
  min: string;
  features: PricingFeature[];
  featured?: boolean;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export interface FAQItem {
  cat: string;
  q: string;
  a: string;
  tags: string[];
}

export interface FAQCategory {
  id: string;
  label: string;
}

// ─── Sections ─────────────────────────────────────────────────────────────────
export interface StepItem {
  title: string;
  desc: string;
  detail: string;
}

export interface SecurityFeature {
  icon: ReactNode;
  label: string;
  desc: string;
  stats: string;
  statsLabel: string;
}

export interface Certification {
  label: string;
  sub: string;
  desc: string;
  num: string;
}
