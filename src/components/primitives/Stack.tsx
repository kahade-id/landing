import type { ReactNode } from "react";

type Gap = "2" | "3" | "4" | "5" | "6" | "8";

export default function Stack({ children, gap = "4", className = "" }: { children: ReactNode; gap?: Gap; className?: string }) {
  return <div className={`stack-${gap} ${className}`.trim()}>{children}</div>;
}
