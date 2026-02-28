import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SecuritySection from "@/components/sections/SecuritySection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* ── Sticky Navigation ─────────────────────────────────────────── */}
      <Header />

      <main id="main-content">
        {/* ── Hero Section ──────────────────────────────────────────── */}
        <HeroSection />

        {/* ── Why Escrow? (Problem → Solution) ─────────────────────── */}
        <ProblemSection />

        {/* ── Cara Kerja (Step-by-step) ─────────────────────────────── */}
        <HowItWorksSection />

        {/* ── Harga & Fee Calculator ────────────────────────────────── */}
        <PricingSection />

        {/* ── Testimonials ──────────────────────────────────────────── */}
        <TestimonialsSection />

        {/* ── Keamanan & Sertifikasi ────────────────────────────────── */}
        <SecuritySection />

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <FAQSection />

        {/* ── CTA / Hero Bottom ─────────────────────────────────────── */}
        <CTASection />
      </main>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <Footer />
    </>
  );
}
