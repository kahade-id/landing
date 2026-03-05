"use client";

// FIX: global-error.tsx is required for catching errors thrown in the root layout.
// The regular error.tsx only catches errors below the root layout boundary.
// global-error.tsx renders INSTEAD of the root layout, so it must include
// its own <html> and <body> tags.
// See: https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errorjs

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <html lang="id">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#fff" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div style={{ maxWidth: 400, textAlign: "center" }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "#fef2f2",
                border: "1px solid #fecaca",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", color: "#111" }}>
              Terjadi Kesalahan Kritis
            </h1>
            <p style={{ color: "#737373", marginBottom: "0.5rem" }}>
              Aplikasi mengalami masalah tak terduga. Coba muat ulang halaman.
            </p>
            {error.message && (
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#a3a3a3",
                  background: "#f5f5f5",
                  borderRadius: 8,
                  padding: "0.5rem 0.75rem",
                  fontFamily: "monospace",
                  wordBreak: "break-all",
                  marginBottom: "1.5rem",
                }}
              >
                {error.message}
                {error.digest && (
                  <span style={{ display: "block", marginTop: 4, opacity: 0.6 }}>
                    ID: {error.digest}
                  </span>
                )}
              </p>
            )}
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={reset}
                style={{
                  background: "#111",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 20px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "0.875rem",
                }}
              >
                Coba Lagi
              </button>
              <a
                href="/"
                style={{
                  background: "#fff",
                  color: "#111",
                  border: "1px solid #e5e5e5",
                  borderRadius: 8,
                  padding: "10px 20px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Ke Beranda
              </a>
            </div>
            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #f0f0f0" }}>
              <p style={{ fontSize: "0.75rem", color: "#a3a3a3" }}>
                Butuh bantuan?{" "}
                <a href="mailto:support@kahade.id" style={{ color: "#111", textDecoration: "underline" }}>
                  support@kahade.id
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
