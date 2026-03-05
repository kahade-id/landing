import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pemeliharaan",
  description: "Kahade sedang dalam pemeliharaan. Mohon tunggu sebentar.",
  robots: { index: false, follow: false },
};

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
