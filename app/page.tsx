import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  SecuritySection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
  CTASection,
} from "@/components/sections";

/* Dashed separator — partial width, centered */
function DashedSeparator() {
  return (
    <div className="flex justify-center py-0" aria-hidden="true">
      <div
        className="w-48 h-px"
        style={{
          backgroundImage: "repeating-linear-gradient(to right, hsl(0 0% 82%) 0, hsl(0 0% 82%) 6px, transparent 6px, transparent 14px)",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <DashedSeparator />
        <TestimonialsSection />
        <HowItWorksSection />
        <SecuritySection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
