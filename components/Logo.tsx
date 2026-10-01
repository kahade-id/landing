/** Kahade mark — icon only, no wordmark. */
export function KahadeMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Kahade" role="img">
      <rect width="64" height="64" rx="16" fill="#000000" />
      <path
        d="M24 17v30"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M27 33L45 17"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 37l16 11"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
