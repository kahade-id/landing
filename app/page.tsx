import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  SolusiSection,
  SecuritySection,
  HowItWorksSection,
  ComplianceSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";

/* Urutan section yang logis & conversion-friendly:
   1. Header
   2. Hero
   3. Problem       — bangun pain point
   4. Solusi/Fitur  — tunjukkan solusi
   5. Keamanan      — bangun kepercayaan
   6. Cara Kerja    — edukasi mekanisme
   7. Komitmen Kepatuhan — validasi regulasi
   8. Testimoni     — social proof
   9. CTA           — konversi
  10. Footer
*/

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolusiSection />
        <SecuritySection />
        <HowItWorksSection />
        <ComplianceSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
