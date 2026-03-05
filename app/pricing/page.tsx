"use client";

import { useState } from "react";
import { InnerPageLayout } from "@/components/layout";
import { useInView } from "@/src/hooks/useInView";
import { Check, Info, ArrowRight } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type FeePayer = "seller" | "buyer" | "split";

const FEE_PERCENTAGE = 2.5;
const MIN_FEE = 2500;
const MAX_FEE = 250000;

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(value);
}

const includedFeatures = [
  "Escrow otomatis untuk setiap transaksi",
  "Perlindungan dua arah (pembeli & penjual)",
  "Status transaksi real-time",
  "Sistem sengketa & mediasi",
  "Diskusi dalam transaksi",
  "Riwayat & jejak transaksi lengkap",
  "Notifikasi otomatis (push, email, SMS)",
  "Multi-metode pembayaran",
  "Verifikasi identitas (KYC)",
  "Audit log lengkap",
  "Dukungan 24/7",
];

const faqItems = [
  { q: "Apakah ada biaya berlangganan?", a: "Tidak. Kahade tidak memungut biaya bulanan atau tahunan. Anda hanya membayar biaya platform 2.5% saat transaksi berhasil." },
  { q: "Siapa yang menanggung biaya?", a: "Biaya bisa dibebankan ke pembeli, penjual, atau dibagi rata (split) — sesuai kesepakatan antara kedua pihak sebelum transaksi dimulai." },
  { q: "Apakah ada biaya jika transaksi dibatalkan?", a: "Tidak ada biaya pembatalan jika transaksi dibatalkan sebelum penjual mengkonfirmasi pengiriman. Dana dikembalikan penuh." },
  { q: "Bagaimana jika ada sengketa?", a: "Proses mediasi tidak dikenakan biaya tambahan. Tim mediasi kami meninjau bukti dari kedua pihak dalam 3-5 hari kerja." },
];

const chartConfig: ChartConfig = {
  seller: { label: "Penjual Menerima", color: "#18181b" },
  fee: { label: "Biaya Platform", color: "#e4e4e7" },
};

export default function PricingPage() {
  const [calcRef, calcInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [amount, setAmount] = useState("1000000");
  const [displayAmount, setDisplayAmount] = useState("1.000.000");
  const [feePayer, setFeePayer] = useState<FeePayer>("seller");
  const [sliderValue, setSliderValue] = useState([1000000]);

  const numericAmount = parseInt(amount.replace(/\D/g, "")) || 0;
  const calculatedFee = (numericAmount * FEE_PERCENTAGE) / 100;
  const finalFee = numericAmount === 0 ? 0 : Math.max(MIN_FEE, Math.min(MAX_FEE, calculatedFee));
  const sellerFee = feePayer === "seller" ? finalFee : feePayer === "split" ? Math.ceil(finalFee / 2) : 0;
  const buyerFee = feePayer === "buyer" ? finalFee : feePayer === "split" ? Math.floor(finalFee / 2) : 0;
  const sellerReceives = Math.max(0, numericAmount - sellerFee);
  const buyerPays = numericAmount + buyerFee;

  const feeStatus = (() => {
    if (numericAmount === 0) return null;
    if (calculatedFee < MIN_FEE) return "Biaya minimum Rp 2.500 berlaku";
    if (calculatedFee > MAX_FEE) return "Biaya maksimum Rp 250.000 berlaku";
    return null;
  })();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    if (!raw) { setAmount(""); setDisplayAmount(""); return; }
    setAmount(raw);
    setDisplayAmount(new Intl.NumberFormat("id-ID").format(parseInt(raw)));
    setSliderValue([Math.min(parseInt(raw), 10000000)]);
  };

  const handleSlider = (val: number[]) => {
    setSliderValue(val);
    setAmount(String(val[0]));
    setDisplayAmount(new Intl.NumberFormat("id-ID").format(val[0]));
  };

  const pieData = numericAmount > 0 ? [
    { name: "seller", value: sellerReceives },
    { name: "fee", value: finalFee },
  ] : [{ name: "seller", value: 1 }, { name: "fee", value: 0 }];

  return (
    <TooltipProvider>
      <InnerPageLayout
        hero={{
          eyebrow: "Harga & Paket",
          title: "Bayar Saat Berhasil.\nTidak Ada Biaya Lain.",
          description: "Biaya platform 2.5% hanya dikenakan ketika transaksi selesai. Tidak ada biaya berlangganan, setup, atau biaya tersembunyi.",
        }}
      >
        {/* Breadcrumb */}
        <section className="border-b border-border">
          <div className="container-base py-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="/">Beranda</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>Harga & Paket</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="section border-b border-border">
          <div className="container-base">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Main card */}
                <div className="border border-foreground rounded-2xl p-8 bg-foreground text-background">
                  <Badge className="mb-4 bg-background/10 text-background border-background/20 text-[10px]">BIAYA PLATFORM</Badge>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-5xl font-display font-bold">2.5%</span>
                    <span className="text-background/60 mb-2 text-sm">per transaksi</span>
                  </div>
                  <p className="text-background/50 text-xs mb-8">Min. Rp 2.500 · Maks. Rp 250.000</p>
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {includedFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-background/80">
                        <Check className="w-4 h-4 text-background shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://app.kahade.id/register" className="inline-flex w-full items-center justify-center gap-2 bg-background text-foreground font-semibold text-sm px-6 py-3 rounded-xl hover:bg-background/90 transition-colors">
                    Mulai Gratis <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Info tabs */}
                <div>
                  <Tabs defaultValue="payer">
                    <TabsList className="w-full mb-5">
                      <TabsTrigger value="payer" className="flex-1 text-xs">Siapa yang Bayar?</TabsTrigger>
                      <TabsTrigger value="benefits" className="flex-1 text-xs">Keuntungan</TabsTrigger>
                      <TabsTrigger value="compare" className="flex-1 text-xs">Perbandingan</TabsTrigger>
                    </TabsList>
                    <TabsContent value="payer">
                      <RadioGroup value={feePayer} onValueChange={(v) => setFeePayer(v as FeePayer)} className="space-y-2">
                        {[
                          { id: "seller" as FeePayer, label: "Ditanggung Penjual", desc: "Penjual membayar seluruh biaya" },
                          { id: "buyer" as FeePayer, label: "Ditanggung Pembeli", desc: "Pembeli membayar seluruh biaya" },
                          { id: "split" as FeePayer, label: "Dibagi Rata (Split)", desc: "Biaya dibagi dua antara kedua pihak" },
                        ].map((opt) => (
                          <label key={opt.id} htmlFor={`payer-${opt.id}`} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${feePayer === opt.id ? "border-foreground bg-foreground/5" : "border-border hover:border-foreground/20"}`}>
                            <RadioGroupItem value={opt.id} id={`payer-${opt.id}`} />
                            <div>
                              <p className="text-sm font-medium text-foreground">{opt.label}</p>
                              <p className="text-xs text-muted-foreground">{opt.desc}</p>
                            </div>
                          </label>
                        ))}
                      </RadioGroup>
                    </TabsContent>
                    <TabsContent value="benefits">
                      <div className="space-y-2">
                        {[
                          "Tidak ada biaya jika transaksi gagal atau dibatalkan",
                          "Tidak ada biaya berlangganan bulanan",
                          "Biaya transparan sebelum transaksi dibuat",
                          "Tidak ada biaya setup atau onboarding",
                          "Tidak ada biaya mediasi sengketa",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-2.5 p-3 border border-border rounded-lg">
                            <Check className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="compare">
                      <div className="space-y-2">
                        {[
                          { label: "Biaya setup", kahade: "Gratis", others: "Rp 500rb+" },
                          { label: "Biaya bulanan", kahade: "Gratis", others: "Rp 200rb+" },
                          { label: "Biaya transaksi", kahade: "2.5%", others: "3-5%" },
                          { label: "Mediasi sengketa", kahade: "Gratis", others: "Berbayar" },
                          { label: "Dukungan 24/7", kahade: "Ya", others: "Tergantung paket" },
                        ].map((row) => (
                          <div key={row.label} className="grid grid-cols-3 gap-2 p-3 border border-border rounded-lg text-xs">
                            <span className="text-muted-foreground">{row.label}</span>
                            <span className="font-semibold text-foreground text-center">{row.kahade}</span>
                            <span className="text-muted-foreground text-center">{row.others}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section ref={calcRef} className="section border-b border-border bg-muted/20">
          <div className="container-base">
            <div className="max-w-3xl mx-auto">
              <div className={`mb-10 anim-fade-up ${calcInView ? "in-view" : ""}`}>
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Kalkulator</p>
                <h2 className="section-title">Hitung Biaya<br />Transaksi Anda.</h2>
              </div>
              <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 anim-fade-up delay-100 ${calcInView ? "in-view" : ""}`}>
                <div className="lg:col-span-2 border border-border rounded-2xl p-7 bg-background">
                  <div className="mb-6">
                    <Label htmlFor="calc-amount" className="text-sm font-semibold text-foreground mb-2 block">Nilai Transaksi</Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">Rp</span>
                      <Input id="calc-amount" type="text" inputMode="numeric" value={displayAmount} onChange={handleAmountChange} placeholder="1.000.000" className="pl-10 h-12" />
                    </div>
                    {feeStatus && (
                      <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
                        <Info className="w-3.5 h-3.5" />{feeStatus}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Label className="text-xs text-muted-foreground mb-3 block cursor-default">Sesuaikan dengan slider (maks Rp 10jt)</Label>
                      </TooltipTrigger>
                      <TooltipContent>Geser untuk mengubah nilai transaksi</TooltipContent>
                    </Tooltip>
                    <Slider value={sliderValue} min={10000} max={10000000} step={10000} onValueChange={handleSlider} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>Rp 10rb</span><span>Rp 10jt</span>
                    </div>
                  </div>

                  <Separator className="my-5" />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Biaya Platform (2.5%)</span>
                      <span className="text-sm font-semibold text-foreground">{formatRupiah(finalFee)}</span>
                    </div>
                    {feePayer === "split" && (
                      <>
                        <div className="flex items-center justify-between"><span className="text-xs text-muted-foreground pl-3">→ Ditanggung Penjual</span><span className="text-xs text-foreground">{formatRupiah(sellerFee)}</span></div>
                        <div className="flex items-center justify-between"><span className="text-xs text-muted-foreground pl-3">→ Ditanggung Pembeli</span><span className="text-xs text-foreground">{formatRupiah(buyerFee)}</span></div>
                      </>
                    )}
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-foreground">Penjual Menerima</span>
                      <span className="text-sm font-bold text-foreground">{formatRupiah(sellerReceives)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-foreground">Pembeli Membayar</span>
                      <span className="text-sm font-bold text-foreground">{formatRupiah(buyerPays)}</span>
                    </div>
                  </div>
                </div>

                {/* Pie chart visual */}
                <Card className="border-border flex flex-col items-center justify-center p-5">
                  <p className="text-xs text-muted-foreground mb-3 text-center">Distribusi Dana</p>
                  <ChartContainer config={chartConfig} className="h-36 w-full">
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value" strokeWidth={0}>
                        <Cell fill="#18181b" />
                        <Cell fill="#e4e4e7" />
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                  <div className="mt-3 space-y-1.5 w-full">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-foreground" /><span className="text-muted-foreground">Penjual</span></div>
                      <span className="font-medium text-foreground">{numericAmount > 0 ? Math.round((sellerReceives / numericAmount) * 100) : 100}%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" /><span className="text-muted-foreground">Platform</span></div>
                      <span className="font-medium text-foreground">{numericAmount > 0 ? Math.round((finalFee / numericAmount) * 100) : 0}%</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container-base">
            <div className="max-w-2xl mx-auto">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Pertanyaan Umum</p>
              <h2 className="section-title mb-8">FAQ Harga.</h2>
              <Accordion type="single" collapsible defaultValue="faq-0" className="border border-border rounded-xl overflow-hidden divide-y divide-border">
                {faqItems.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-0">
                    <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 text-left [&>svg]:flex-shrink-0">
                      <span className="text-sm font-medium text-foreground text-left">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

      </InnerPageLayout>
    </TooltipProvider>
  );
}
