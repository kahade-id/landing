import type { Metadata } from "next";

// FIX: Redirect pages should NOT be indexed by search engines.
// Without this, crawlers will index /login and /register which immediately
// redirect to the external app — wasting crawl budget and causing confusion.
export const metadata: Metadata = {
  title: "Masuk",
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
