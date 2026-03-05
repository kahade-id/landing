"use client";
import { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    window.location.replace("https://app.kahade.id/register");
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-foreground border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-muted-foreground">Mengalihkan ke halaman daftar...</p>
      </div>
    </div>
  );
}
