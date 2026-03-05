"use client";

import { InnerPageLayout } from "@/components/layout";
import { CheckCircle, AlertCircle, Clock, Activity } from "lucide-react";

type Status = "operational" | "degraded" | "outage" | "maintenance";

interface ServiceStatus {
  name: string;
  status: Status;
  uptime: string;
  latency?: string;
}

const services: ServiceStatus[] = [
  { name: "API Utama", status: "operational", uptime: "99.98%", latency: "42ms" },
  { name: "Sistem Escrow & Pembayaran", status: "operational", uptime: "99.99%", latency: "58ms" },
  { name: "Aplikasi Web (app.kahade.id)", status: "operational", uptime: "99.97%", latency: "120ms" },
  { name: "Aplikasi Mobile (iOS)", status: "operational", uptime: "99.95%" },
  { name: "Aplikasi Mobile (Android)", status: "operational", uptime: "99.95%" },
  { name: "Notifikasi (Push, Email, SMS)", status: "operational", uptime: "99.90%" },
  { name: "Verifikasi Identitas (KYC)", status: "operational", uptime: "99.85%" },
  { name: "Dashboard & Laporan", status: "operational", uptime: "99.97%" },
];

const incidents: { date: string; title: string; status: string; description: string }[] = [
  {
    date: "28 Feb 2026",
    title: "Penundaan notifikasi email",
    status: "Resolved",
    description:
      "Terdapat penundaan pengiriman notifikasi email selama ~20 menit akibat pemeliharaan server SMTP. Semua notifikasi terkirim kembali normal pukul 14.30 WIB.",
  },
  {
    date: "15 Jan 2026",
    title: "Latensi API meningkat",
    status: "Resolved",
    description:
      "Peningkatan latensi API sebesar 2x dari normal selama 35 menit akibat lonjakan traffic. Kapasitas ditambah dan sistem kembali normal.",
  },
];

const statusConfig: Record<Status, { label: string; color: string; icon: typeof CheckCircle; dot: string }> = {
  operational: {
    label: "Beroperasi Normal",
    color: "text-green-600",
    icon: CheckCircle,
    dot: "bg-green-500",
  },
  degraded: {
    label: "Performa Menurun",
    color: "text-yellow-600",
    icon: AlertCircle,
    dot: "bg-yellow-500",
  },
  outage: {
    label: "Gangguan",
    color: "text-red-600",
    icon: AlertCircle,
    dot: "bg-red-500",
  },
  maintenance: {
    label: "Pemeliharaan",
    color: "text-blue-600",
    icon: Clock,
    dot: "bg-blue-500",
  },
};

const allOperational = services.every((s) => s.status === "operational");

export default function StatusPage() {
  return (
    <InnerPageLayout
      hero={{
        eyebrow: "Status Sistem",
        title: "Status Layanan\nKahade.",
        description: "Pantau kondisi real-time seluruh layanan dan infrastruktur Kahade.",
      }}
      cta={{ show: false }}
    >
      <section className="section border-b border-border">
        <div className="container-base max-w-3xl mx-auto">

          {/* Overall status banner */}
          <div
            className={`flex items-center gap-4 p-5 rounded-xl border mb-8 ${
              allOperational
                ? "bg-green-50 border-green-200"
                : "bg-yellow-50 border-yellow-200"
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${allOperational ? "bg-green-100" : "bg-yellow-100"}`}>
              {allOperational ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <AlertCircle className="w-5 h-5 text-yellow-600" />
              )}
            </div>
            <div>
              <p className={`font-semibold text-sm ${allOperational ? "text-green-700" : "text-yellow-700"}`}>
                {allOperational ? "Semua Sistem Beroperasi Normal" : "Sebagian Sistem Terdampak"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Terakhir diperbarui: {new Date().toLocaleString("id-ID", { dateStyle: "long", timeStyle: "short" })} WIB
              </p>
            </div>
          </div>

          {/* Service list */}
          <div className="border border-border rounded-xl overflow-hidden mb-10">
            <div className="px-5 py-4 border-b border-border bg-muted/30">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Layanan</p>
                <div className="flex items-center gap-6">
                  <p className="text-xs text-muted-foreground hidden sm:block">Latensi</p>
                  <p className="text-xs text-muted-foreground hidden sm:block">Uptime 30 hari</p>
                  <p className="text-xs text-muted-foreground">Status</p>
                </div>
              </div>
            </div>
            {services.map((service, i) => {
              const cfg = statusConfig[service.status];
              return (
                <div
                  key={service.name}
                  className={`px-5 py-4 flex items-center justify-between gap-4 ${
                    i < services.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-sm text-foreground">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="text-xs text-muted-foreground hidden sm:block tabular-nums">
                      {service.latency ?? "—"}
                    </span>
                    <span className="text-xs text-muted-foreground hidden sm:block tabular-nums">
                      {service.uptime}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${cfg.dot} animate-pulse`} />
                      <span className={`text-xs font-medium ${cfg.color}`}>{cfg.label}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Incident history */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
              Riwayat Insiden (90 Hari Terakhir)
            </p>
            {incidents.length === 0 ? (
              <div className="border border-dashed border-border rounded-xl p-8 text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Tidak ada insiden dalam 90 hari terakhir.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {incidents.map((inc, i) => (
                  <div key={i} className="border border-border rounded-xl p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <p className="text-sm font-semibold text-foreground">{inc.title}</p>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 font-medium">
                          {inc.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{inc.date}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{inc.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
