import type { ReactNode } from "react";

type Size = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default function Heading({ as, size, children, className = "" }: { as: Tag; size: Size; children: ReactNode; className?: string }) {
  const Component = as;
  return <Component className={`text-${size} ${className}`.trim()}>{children}</Component>;
}
