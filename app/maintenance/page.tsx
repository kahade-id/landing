import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        {/* FIX: Use design system colors instead of hardcoded blue */}
        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border bg-muted border-border">
          <RefreshCw
            className="w-10 h-10 text-foreground animate-spin"
            style={{ animationDuration: "3s" }}
          />
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">
          Sedang Dalam Pemeliharaan
        </h1>
        <p className="text-muted-foreground mb-8">
          Kami sedang melakukan pemeliharaan sistem untuk meningkatkan layanan.
          Mohon tunggu beberapa saat.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-lg font-medium hover:bg-muted transition-colors"
        >
          <Home className="w-4 h-4" />
          Ke Beranda
        </Link>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">Butuh bantuan?</p>
          <a
            href="mailto:support@kahade.id"
            className="text-sm text-primary hover:underline"
          >
            support@kahade.id
          </a>
        </div>
      </div>
    </div>
  );
}
