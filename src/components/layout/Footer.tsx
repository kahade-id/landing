import Link from "next/link";
import Container from "@/components/primitives/Container";
import Stack from "@/components/primitives/Stack";
import Text from "@/components/primitives/Text";
import { supportLinks } from "@/lib/site";

const footerCols = [
  {
    title: "Perusahaan",
    items: [
      { label: "Tentang", href: supportLinks.about },
      { label: "Karier", href: supportLinks.careers },
      { label: "Partner", href: supportLinks.partners },
    ],
  },
  {
    title: "Bantuan",
    items: [
      { label: "Support", href: supportLinks.support },
      { label: "Dokumentasi", href: supportLinks.docs },
      { label: "Status", href: supportLinks.status },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privasi", href: supportLinks.privacy },
      { label: "Syarat", href: supportLinks.terms },
      { label: "Cookies", href: supportLinks.cookies },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-16">
      <Container className="stack-8">
        <div className="grid gap-6 md:grid-cols-4">
          <Stack gap="3">
            <p className="text-h6">Kahade</p>
            <Text variant="body-sm" className="text-black/60">Platform escrow P2P yang aman, clean, dan transparan.</Text>
          </Stack>
          {footerCols.map((col) => (
            <Stack key={col.title} gap="3">
              <p className="text-h6">{col.title}</p>
              <ul className="stack-2">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-body-sm text-black/60 hover:text-black">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </Stack>
          ))}
        </div>
        <Text variant="caption" className="text-black/40">© {new Date().getFullYear()} Kahade. Hak Cipta Dilindungi.</Text>
      </Container>
    </footer>
  );
}
