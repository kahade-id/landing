import { JsonLd, orgJsonLd } from "@/components/site/JsonLd";
import { site } from "@/content/site";
import { Hero } from "@/components/home/Hero";
import { Principles } from "@/components/home/Principles";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Compare } from "@/components/home/Compare";
import { Faq } from "@/components/home/Faq";
import { Closing } from "@/components/home/Closing";

export default function Page() {
  return (
    <>
      <JsonLd data={orgJsonLd(site.siteUrl, site.companyName)} />
      <Hero />
      <Principles />
      <Features />
      <HowItWorks />
      <Compare />
      <Faq />
      <Closing />
    </>
  );
}
