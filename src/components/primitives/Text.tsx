import type { ReactNode } from "react";

type Variant = "body-lg" | "body" | "body-sm" | "caption";

const map: Record<Variant, string> = {
  "body-lg": "text-body-lg",
  body: "text-body",
  "body-sm": "text-body-sm",
  caption: "text-caption",
};

export default function Text({ children, variant = "body", className = "" }: { children: ReactNode; variant?: Variant; className?: string }) {
  return <p className={`${map[variant]} ${className}`.trim()}>{children}</p>;
}
