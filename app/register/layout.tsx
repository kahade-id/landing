import type { Metadata } from "next";

// FIX: Redirect pages should NOT be indexed by search engines.
export const metadata: Metadata = {
  title: "Daftar",
  robots: { index: false, follow: false },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
