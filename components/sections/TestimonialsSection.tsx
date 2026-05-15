"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";
import { TESTIMONIALS } from "@/constants/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const animate = (direction: "left" | "right", next: number) => {
    const card = cardRef.current;
    if (!card) return;

    const xFrom = direction === "right" ? 60 : -60;

    gsap.fromTo(
      card,
      { x: xFrom, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
    setCurrent(next);
  };

  const handlePrev = () => {
    gsap.to(cardRef.current, {
      x: 60, opacity: 0, duration: 0.35, ease: "power2.in",
      onComplete: () => animate("left", (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    });
  };

  const handleNext = () => {
    gsap.to(cardRef.current, {
      x: -60, opacity: 0, duration: 0.35, ease: "power2.in",
      onComplete: () => animate("right", (current + 1) % TESTIMONIALS.length),
    });
  };

  // Auto advance
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const t = TESTIMONIALS[current];

  return (
    <section className="py-24 lg:py-36 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left: heading */}
          <div className="lg:w-2/5">
            <FadeUp>
              <SectionLabel>Client Stories</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-6">
                Trusted by Global{" "}
                <span className="text-gradient-accent">Fashion Brands</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#9ca3af] text-base leading-relaxed mb-8">
                Brands from 25+ countries trust MartX BD to source their garments with quality, compliance, and reliability.
              </p>
            </FadeUp>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:border-[#d97706] hover:text-[#d97706] transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      gsap.to(cardRef.current, {
                        x: i > current ? -60 : 60, opacity: 0, duration: 0.35, ease: "power2.in",
                        onComplete: () => animate(i > current ? "right" : "left", i),
                      });
                    }}
                    className={`block rounded-full transition-all duration-300 ${
                      i === current ? "w-6 h-2 bg-[#d97706]" : "w-2 h-2 bg-white/20"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:border-[#d97706] hover:text-[#d97706] transition-all"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right: testimonial card */}
          <div className="lg:w-3/5">
            <div ref={cardRef} className="glass rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-[120px] leading-none text-white/3 font-black select-none pointer-events-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#d97706] fill-[#d97706]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white text-xl lg:text-2xl font-light leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#d97706]/20">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-[#9ca3af] text-sm">{t.title}, {t.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
