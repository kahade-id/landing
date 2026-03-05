"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home, MessageSquare } from "lucide-react";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorBoundaryProps) {
  // FIX: Log error for monitoring/debugging — previously the error prop was silently ignored
  useEffect(() => {
    console.error("[ErrorBoundary]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        {/* FIX: Use CSS variable-based colors instead of hardcoded Tailwind semantic colors */}
        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border bg-destructive/10 border-destructive/30">
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">
          Terjadi Kesalahan
        </h1>
        <p className="text-muted-foreground mb-2">
          Maaf, terjadi kesalahan saat memproses permintaan Anda. Silakan coba
          lagi atau hubungi tim support kami.
        </p>
        {/* FIX: Show error message so users can relay it to support */}
        {error.message && (
          <p className="text-xs text-muted-foreground bg-muted rounded-lg px-3 py-2 mb-6 font-mono break-all">
            {error.message}
            {error.digest && <span className="block mt-1 opacity-60">ID: {error.digest}</span>}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Coba Lagi
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-lg font-medium hover:bg-muted transition-colors"
          >
            <Home className="w-4 h-4" />
            Ke Beranda
          </Link>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">Butuh bantuan?</p>
          <a
            href="mailto:support@kahade.id"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <MessageSquare className="w-4 h-4" />
            Hubungi Support
          </a>
        </div>
      </div>
    </div>
  );
}
