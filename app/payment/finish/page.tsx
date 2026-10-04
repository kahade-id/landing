import type { Metadata } from "next";
import PaymentFinishContent from "@/components/payment-finish-content";

export const metadata: Metadata = {
  title: "Pembayaran — Kahade",
  description: "Status pembayaran Kahade.",
};

/**
 * kahade.id/payment/finish — Finish Redirect URL pembayaran.
 * Terdaftar sebagai URL tujuan setelah pembayaran selesai.
 * Membaca status dari query params, lalu mengarahkan ke aplikasi.
 */
export default function PaymentFinish() {
  return <PaymentFinishContent />;
}
