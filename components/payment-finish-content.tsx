"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DeeplinkLayout } from "@/components/site/DeeplinkLayout";
import { CheckCircle, Timer, XCircle } from "@/lib/icons";

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

const STATUS_ICON: Record<PayState, { Icon: typeof CheckCircle; cls: string }> = {
  success: { Icon: CheckCircle, cls: "bg-positive-soft text-positive" },
  pending: { Icon: Timer, cls: "bg-caution-soft text-caution" },
  failed: { Icon: XCircle, cls: "bg-critical-soft text-critical" },
};

/** Ikon status di lingkaran berwarna lembut — mark sudah ada di bilah atas. */
function StatusIcon({ state }: { state: PayState }) {
  const { Icon, cls } = STATUS_ICON[state];
  return (
    <span aria-hidden="true" className={`flex h-20 w-20 items-center justify-center rounded-full ${cls}`}>
      <Icon weight="regular" className="h-10 w-10" />
    </span>
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
    <DeeplinkLayout
      deepLink={deepLink}
      media={<StatusIcon state={state} />}
      title={copy.title}
      desc={copy.desc}
    />
  );
}

export default function PaymentFinishContent() {
  return (
    <Suspense>
      <FinishContent />
    </Suspense>
  );
}
