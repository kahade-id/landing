"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { KahadeMark } from "@/components/Logo";

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

/** Baca status pembayaran dari query params (case-insensitive). */
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
    desc: "Pembayaranmu sudah kami terima. Buka aplikasi untuk melanjutkan.",
  },
  pending: {
    title: "Menunggu konfirmasi",
    desc: "Pembayaran sedang diproses. Kami akan memberitahumu setelah selesai.",
  },
  failed: {
    title: "Pembayaran gagal",
    desc: "Silakan coba lagi atau gunakan metode pembayaran lain.",
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
      <KahadeMark className="h-14 w-14" />
      <div className="mt-10">
        <StatusIcon state={state} />
      </div>
      <h1 className="mt-8 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">
        {copy.title}
      </h1>
      <p className="mt-3 max-w-sm text-[17px] leading-relaxed text-[#525252]">
        {copy.desc}
      </p>
      <div className="mt-9 flex w-full max-w-xs flex-col gap-3">
        <a
          href={deepLink}
          className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-black px-9 text-base font-semibold text-white transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
        >
          Buka di aplikasi
        </a>
        <a
          href="/#download"
          className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-black/15 px-9 text-base font-semibold text-black transition-colors hover:bg-black/5"
        >
          Download aplikasi
        </a>
      </div>
    </main>
  );
}

export default function PaymentFinishContent() {
  return (
    <Suspense>
      <FinishContent />
    </Suspense>
  );
}
