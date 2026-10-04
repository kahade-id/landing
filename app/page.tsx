import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip, ProblemSolution, HowItWorks, Features } from "@/components/Sections";
import { Showcase } from "@/components/Showcase";
import { Faq } from "@/components/Faq";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/site/Footer";
import { JsonLd, orgJsonLd } from "@/components/site/JsonLd";
import { site } from "@/content/site";

export default function Page() {
  return (
    <>
      <JsonLd data={orgJsonLd(site.siteUrl, site.companyName)} />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Showcase />
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
