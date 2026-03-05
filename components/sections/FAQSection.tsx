"use client";

import { useState } from "react";
import { useInView } from "@/src/hooks/useInView";
import { faqData } from "@/src/lib/site";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

type FAQCategory = keyof typeof faqData;

const categories: { id: FAQCategory; label: string }[] = [
  { id: "umum", label: "Umum" },
  { id: "transaksi", label: "Transaksi" },
  { id: "biaya", label: "Biaya" },
  { id: "keamanan", label: "Keamanan" },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-base font-medium transition-colors ${isOpen ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-sm text-muted-foreground leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("umum");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index); else newSet.add(index);
      return newSet;
    });
  };

  const currentFAQs = faqData[activeCategory];

  return (
    <section id="faq" ref={sectionRef} className="section bg-white border-b border-border">
      <div className="container-base">
        <div className={`section-header anim-fade-up ${inView ? "in-view" : ""}`}>
          <h2 className="section-title">
            Pertanyaan <span className="section-title-muted">Umum.</span>
          </h2>
        </div>

        {/* Category Tabs — single horizontal row */}
        <div
          role="tablist"
          aria-label="Kategori FAQ"
          className={`flex items-center justify-center gap-1 mb-10 flex-nowrap overflow-x-auto anim-fade-up delay-100 ${inView ? "in-view" : ""}`}
        >
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`faq-panel-${cat.id}`}
              id={`faq-tab-${cat.id}`}
              onClick={() => { setActiveCategory(cat.id); setOpenItems(new Set()); }}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap border ${activeCategory === cat.id ? "bg-foreground text-background border-foreground" : "bg-white text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div
          id={`faq-panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`faq-tab-${activeCategory}`}
          className={`max-w-3xl mx-auto anim-fade-up delay-200 ${inView ? "in-view" : ""}`}
        >
          <div className="divide-y divide-border">
            {currentFAQs.map((faq, index) => (
              <FAQItem
                key={`${activeCategory}-${index}`}
                question={faq.q}
                answer={faq.a}
                isOpen={openItems.has(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>

        {/* Subtle CTA */}
        <div className={`mt-10 text-center anim-fade-up delay-300 ${inView ? "in-view" : ""}`}>
          <p className="text-sm text-muted-foreground">
            Pertanyaan Anda belum terjawab?{" "}
            <Link href="/contact" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors font-medium">
              Kirim pesan ke tim kami
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
