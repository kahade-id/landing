import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lisensi",
  description: "Informasi hak cipta, merek dagang, dan lisensi penggunaan konten platform Kahade.",
  alternates: { canonical: "https://kahade.id/license" },
  openGraph: {
    title: "Lisensi",
    description: "Hak cipta dan lisensi penggunaan konten Kahade.",
    url: "https://kahade.id/license",
  },
};

export default function LicenseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
