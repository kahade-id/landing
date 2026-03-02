import Link from "next/link";
import Container from "@/components/primitives/Container";
import { homeAnchors, supportLinks } from "@/lib/site";

const links = [
  { label: "Platform", href: homeAnchors.platform },
  { label: "Cara Kerja", href: homeAnchors.howItWorks },
  { label: "Harga", href: homeAnchors.pricing },
  { label: "Keamanan", href: homeAnchors.security },
  { label: "FAQ", href: homeAnchors.faq },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="text-h6">Kahade</Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-body-sm text-black/60 hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href={supportLinks.contact} className="btn-secondary">Kontak</Link>
          <Link href={homeAnchors.cta} className="btn-primary">Mulai</Link>
        </div>
      </Container>
    </header>
  );
}
