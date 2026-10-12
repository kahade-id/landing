import { Logo } from "@kahade/ui";

/** Kahade mark (hitam, tanpa wordmark) — dari design system, tidak digambar ulang. */
export function KahadeMark({ size = 40, title = "Kahade" }: { size?: number; title?: string }) {
  return <Logo size={size} tone="ink" title={title} />;
}
