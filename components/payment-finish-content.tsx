"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DeeplinkLayout } from "@/components/site/DeeplinkLayout";
import { KahadeMark } from "@/components/Logo";
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
  success: { Icon: CheckCircle, cls: "text-positive" },
  pending: { Icon: Timer, cls: "text-caution" },
  failed: { Icon: XCircle, cls: "text-critical" },
};

function StatusIcon({ state }: { state: PayState }) {
  const { Icon, cls } = STATUS_ICON[state];
  return <Icon weight="regular" aria-hidden="true" className={`h-16 w-16 ${cls}`} />;
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
      media={
        <>
          <KahadeMark size={48} />
          <div className="mt-10">
            <StatusIcon state={state} />
          </div>
        </>
      }
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
