"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Logo } from "@/components/logo";
import { DOWNLOAD_ANCHOR } from "@/lib/constants";

type PayState = "success" | "pending" | "failed";

const SUCCESS_CODES = new Set(["00", "2005600", "success", "successful", "paid"]);
const PENDING_CODES = new Set([
  "01",
  "02",
  "03",
  "pending",
  "processing",
  "in_process",
]);

/** Baca status DANA dari query params (case-insensitive). */
function resolveState(params: URLSearchParams): PayState {
  const candidates = [
    params.get("status"),
    params.get("latestTransactionStatus"),
    params.get("transactionStatus"),
    params.get("responseCode"),
  ]
    .filter((v): v is string => v !== null)
    .map((v) => v.trim().toLowerCase());

  for (const c of candidates) {
    if (SUCCESS_CODES.has(c)) return "success";
  }
  for (const c of candidates) {
    if (PENDING_CODES.has(c)) return "pending";
  }
  return candidates.length > 0 ? "failed" : "pending";
}

const COPY: Record<PayState, { title: string; desc: string }> = {
  success: {
    title: "Pembayaran berhasil",
    desc: "Dana sudah masuk escrow Kahade.",
  },
  pending: {
    title: "Menunggu konfirmasi",
    desc: "Pembayaran sedang diproses.",
  },
  failed: {
    title: "Pembayaran gagal",
    desc: "Silakan coba lagi.",
  },
};

const ACCENT: Record<PayState, string> = {
  success: "#15803d",
  pending: "#b45309",
  failed: "#b91c1c",
};

function StatusIcon({ state }: { state: PayState }) {
  const color = ACCENT[state];
  if (state === "success") {
    return (
      <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
        <circle cx="36" cy="36" r="34" fill="none" stroke={color} strokeWidth="3" />
        <path
          d="M23 37.5 32 46l17-19"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (state === "pending") {
    return (
      <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
        <circle cx="36" cy="36" r="34" fill="none" stroke={color} strokeWidth="3" />
        <path
          d="M36 20v16l11 7"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
      <circle cx="36" cy="36" r="34" fill="none" stroke={color} strokeWidth="3" />
      <path
        d="M26 26l20 20M46 26L26 46"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FinishContent() {
  const params = useSearchParams();
  const state = resolveState(params);
  const copy = COPY[state];

  // Deep link ke aplikasi dengan query params yang sama
  const query = params.toString();
  const deepLink = `kahade://payment/finish${query ? `?${query}` : ""}`;

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <Logo size="sm" />
      <div className="mt-10">
        <StatusIcon state={state} />
      </div>
      <h1 className="mt-6 text-3xl font-bold tracking-tight">{copy.title}</h1>
      <p className="mt-3 max-w-sm text-muted">{copy.desc}</p>
      <div className="mt-10 flex w-full max-w-xs flex-col gap-3">
        <a
          href={deepLink}
          className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-[15px] font-semibold text-paper transition-opacity hover:opacity-80"
        >
          Buka di aplikasi
        </a>
        <a
          href={DOWNLOAD_ANCHOR}
          className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-surface"
        >
          Download aplikasi
        </a>
      </div>
    </div>
  );
}

export default function PaymentFinish() {
  return (
    <Suspense>
      <FinishContent />
    </Suspense>
  );
}
