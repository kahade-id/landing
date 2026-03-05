"use client";

import { useState } from "react";
import { useInView } from "@/src/hooks/useInView";
import { ArrowRight, Check, Info } from "lucide-react";

type FeePayer = "seller" | "buyer" | "split";

const FEE_PERCENTAGE = 2.5;
const MIN_FEE = 2500;
const MAX_FEE = 250000;

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PricingSection() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [amount, setAmount] = useState<string>("1000000");
  const [displayAmount, setDisplayAmount] = useState<string>("1.000.000");
  const [feePayer, setFeePayer] = useState<FeePayer>("seller");

  const numericAmount = parseInt(amount.replace(/\D/g, "")) || 0;
  const calculatedFee = (numericAmount * FEE_PERCENTAGE) / 100;
  const finalFee = numericAmount === 0 ? 0 : Math.max(MIN_FEE, Math.min(MAX_FEE, calculatedFee));

  const sellerFee = feePayer === "seller" ? finalFee : feePayer === "split" ? Math.ceil(finalFee / 2) : 0;
  const buyerFee = feePayer === "buyer" ? finalFee : feePayer === "split" ? Math.floor(finalFee / 2) : 0;
  const sellerReceives = Math.max(0, numericAmount - sellerFee);
  const buyerPays = numericAmount + buyerFee;

  const getFeeStatus = () => {
    if (numericAmount === 0) return null;
    if (calculatedFee < MIN_FEE) return { text: "Biaya minimum Rp 2.500", type: "min" as const };
    if (calculatedFee > MAX_FEE) return { text: "Biaya maksimum Rp 250.000", type: "max" as const };
    return null;
  };

  const feeStatus = getFeeStatus();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    if (rawValue === "") { setAmount(""); setDisplayAmount(""); return; }
    const numericValue = parseInt(rawValue);
    setAmount(rawValue);
    setDisplayAmount(new Intl.NumberFormat("id-ID").format(numericValue));
  };

  return (
    <section id="harga" ref={sectionRef} className="section bg-white border-b border-border">
      <div className="container-base">
        {/* Header */}
        <div className={`section-header anim-fade-up ${inView ? "in-view" : ""}`}>
          <h2 className="section-title">
            Bayar Saat Berhasil.
            <span className="section-title-muted block">Tidak Lebih.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tidak ada biaya tersembunyi. Tidak ada biaya bulanan. Hanya 2.5% saat transaksi sukses.
          </p>
        </div>

        {/* Fee structure — clean horizontal */}
        <div className={`max-w-2xl mx-auto mb-12 anim-fade-up delay-100 ${inView ? "in-view" : ""}`}>
          <div className="grid grid-cols-3 border border-border rounded-xl overflow-hidden divide-x divide-border">
            <div className="px-4 py-6 text-center">
              <p className="text-3xl font-display font-bold text-foreground">2.5%</p>
              <p className="text-xs text-muted-foreground mt-1.5">per transaksi</p>
            </div>
            <div className="px-4 py-6 text-center">
              <p className="text-3xl font-display font-bold text-foreground">Rp 2,5k</p>
              <p className="text-xs text-muted-foreground mt-1.5">minimum</p>
            </div>
            <div className="px-4 py-6 text-center">
              <p className="text-3xl font-display font-bold text-foreground">Rp 250k</p>
              <p className="text-xs text-muted-foreground mt-1.5">maksimum</p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className={`max-w-2xl mx-auto anim-fade-up delay-200 ${inView ? "in-view" : ""}`}>
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="bg-muted px-6 py-4 border-b border-border">
              <h3 className="text-sm font-semibold text-foreground">Kalkulator Biaya</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Simulasikan biaya transaksi Anda</p>
            </div>

            <div className="p-6 space-y-5">
              {/* Amount Input */}
              <div>
                <label htmlFor="transaction-amount" className="block text-sm font-medium text-foreground mb-2">
                  Nominal Transaksi
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium text-sm">Rp</span>
                  <input
                    id="transaction-amount"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9.]*"
                    value={displayAmount}
                    onChange={handleAmountChange}
                    placeholder="1.000.000"
                    className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-lg text-foreground font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Fee Payer Toggle */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Biaya ditanggung oleh
                </label>
                <div role="group" aria-label="Siapa yang membayar biaya" className="flex gap-2">
                  {[
                    { id: "seller" as FeePayer, label: "Penjual" },
                    { id: "buyer" as FeePayer, label: "Pembeli" },
                    { id: "split" as FeePayer, label: "Split" },
                  ].map((option) => (
                    <button
                      type="button"
                      key={option.id}
                      onClick={() => setFeePayer(option.id)}
                      className={`flex-1 py-2.5 text-sm font-medium rounded-lg border transition-all duration-150 ${feePayer === option.id ? "bg-foreground text-background border-foreground" : "bg-white text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-muted rounded-lg p-4 space-y-3" aria-live="polite" aria-atomic="true">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Nominal Transaksi</span>
                  <span className="text-sm font-medium text-foreground">{formatRupiah(numericAmount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Biaya (2.5%)</span>
                    {feeStatus && (
                      <div className="group relative">
                        <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          {feeStatus.text}
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground">{formatRupiah(finalFee)}</span>
                </div>

                {feePayer === "split" && (
                  <div className="text-xs text-muted-foreground bg-white rounded px-3 py-2 border border-border">
                    Penjual: {formatRupiah(sellerFee)} · Pembeli: {formatRupiah(buyerFee)}
                  </div>
                )}

                <div className="h-px bg-border" />

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Pembeli membayar</span>
                  <span className="text-sm font-semibold text-foreground">{formatRupiah(buyerPays)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Penjual menerima</span>
                  <span className="text-lg font-bold text-primary">{formatRupiah(sellerReceives)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Perks */}
        <div className={`mt-8 flex flex-wrap justify-center gap-6 anim-fade-up delay-300 ${inView ? "in-view" : ""}`}>
          {["Gratis daftar", "Tanpa biaya bulanan", "Bayar saat transaksi sukses"].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-foreground" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className={`mt-8 text-center anim-fade-up delay-400 ${inView ? "in-view" : ""}`}>
          <a href="https://app.kahade.id/register" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Daftar Gratis
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
