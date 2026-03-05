import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  SolusiSection,
  SecuritySection,
  HowItWorksSection,
  ComplianceSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from "@/components/sections";

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
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
