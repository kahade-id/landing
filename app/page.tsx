import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip, ProblemSolution, HowItWorks, Features } from "@/components/Sections";
import { Faq } from "@/components/Faq";
import { Closing, Footer } from "@/components/Closing";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
