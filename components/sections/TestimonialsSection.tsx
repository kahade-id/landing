"use client";

import Image from "next/image";
import { useInView } from "@/src/hooks/useInView";
import { testimonials } from "@/src/lib/site";
import { Star, Quote } from "lucide-react";

const testimonialPhotos = [
  "/testimonials/user1.jpg",
  "/testimonials/user2.jpg",
  "/testimonials/user3.jpg",
  "/testimonials/user4.jpg",
  "/testimonials/user5.jpg",
  "/testimonials/user6.jpg",
  "/testimonials/user7.jpg",
];

function TestimonialCard({ testimonial, photoIndex }: { testimonial: typeof testimonials[0]; photoIndex: number }) {
  const photoSrc = testimonialPhotos[photoIndex % testimonialPhotos.length];
  return (
    <div className="w-[300px] sm:w-[340px] flex-shrink-0 p-5 bg-white border border-border rounded-xl">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <Image src={photoSrc} alt={testimonial.name} width={40} height={40} className="object-cover w-full h-full" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={`star-${i}`} className="w-3.5 h-3.5 fill-primary text-primary" />
          ))}
        </div>
      </div>
      <div className="relative mb-4">
        <Quote className="absolute -top-1 -left-1 w-5 h-5 text-muted opacity-30" />
        <p className="text-sm text-muted-foreground leading-relaxed pl-4">{testimonial.text}</p>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="text-xs text-muted-foreground">{testimonial.location}</span>
        <span className="text-xs font-semibold text-primary">{testimonial.amount}</span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  const firstHalf = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondHalf = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section id="testimoni" ref={sectionRef} className="section bg-white overflow-hidden">
      <div className="container-base">
        <div className={`section-header anim-fade-up ${inView ? "in-view" : ""}`}>
          <h2 className="section-title">
            Apa Kata <span className="section-title-muted">Pengguna?</span>
          </h2>
        </div>
      </div>

      {/* Marquee rows */}
      <div className={`mt-10 anim-fade-in delay-200 ${inView ? "in-view" : ""} marquee-container`} aria-hidden="true">
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-marquee-fast">
            {[...firstHalf, ...firstHalf, ...firstHalf].map((testimonial, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={testimonial} photoIndex={i % testimonialPhotos.length} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-4">
          <div className="flex gap-4 animate-marquee-reverse-fast">
            {[...secondHalf, ...secondHalf, ...secondHalf].map((testimonial, i) => (
              <TestimonialCard key={`row2-${i}`} testimonial={testimonial} photoIndex={(i + 3) % testimonialPhotos.length} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats 2×2 */}
      <div className="container-base mt-16">
        <div className={`max-w-3xl mx-auto anim-fade-up delay-400 ${inView ? "in-view" : ""}`}>
          <div className="border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2">
              {[
                { value: "10k+",    label: "PENGGUNA AKTIF" },
                { value: "Rp 50M+", label: "DANA TERLINDUNGI" },
                { value: "99.9%",   label: "TRANSAKSI SUKSES" },
                { value: "4.5 ★",   label: "RATING PENGGUNA" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={[
                    "flex flex-col items-center justify-center px-8 py-12 text-center",
                    i % 2 === 0 ? "border-r border-border" : "",
                    i < 2       ? "border-b border-border" : "",
                  ].join(" ")}
                >
                  <span
                    className="font-display font-black text-foreground leading-none mb-3"
                    style={{ fontSize: "clamp(2rem, 6vw, 3.25rem)" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
