/** Kahade mark — logo asli seperti di header, tanpa wordmark. */
export function KahadeMark({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src="/icon_logo.svg"
      alt="Kahade"
      className={`${className} w-auto`}
      role="img"
    />
  );
}
