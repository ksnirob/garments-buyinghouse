"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HERO_SLIDES } from "@/constants/data";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial animations
    const tl = gsap.timeline({ delay: 2.2 });

    tl.fromTo(
      ".hero-label",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    )
      .fromTo(
        ".hero-headline",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".hero-subheadline",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".hero-desc",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".hero-stat",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        imageRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 2.5, ease: "power2.out" },
        0
      );
  }, []);

  // Slow zoom effect on image
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        { scale: 1.08, duration: 8, ease: "none" }
      );
    }
  }, [current]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    gsap.to(textRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
        gsap.fromTo(
          textRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            onComplete: () => setIsTransitioning(false),
          }
        );
      },
    });
  };

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src={slide.image}
          alt={slide.headline}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div ref={textRef} className="max-w-3xl">
          {/* Label */}
          <div className="hero-label flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#d97706]" />
            <span className="text-[#d97706] text-xs font-semibold tracking-[0.25em] uppercase">
              Bangladesh&apos;s Premier Buying House
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-black tracking-[-0.03em] leading-[1.03] text-white mb-2">
            {slide.headline}
          </h1>
          <h1 className="hero-subheadline text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-black tracking-[-0.03em] leading-[1.03] text-gradient-accent mb-8">
            {slide.subheadline}
          </h1>

          {/* Description */}
          <p className="hero-desc text-[#d1d5db] text-base lg:text-lg leading-relaxed max-w-xl mb-10">
            {slide.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/services"
              className="hero-cta bg-gradient-to-r from-[#d97706] to-[#ea580c] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 text-sm tracking-wide w-fit"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/request-quote"
              className="hero-cta border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/5 hover:border-white/50 transition-all text-sm tracking-wide w-fit"
            >
              Request Quote
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {[
              { value: "50+", label: "Partner Factories" },
              { value: "25+", label: "Export Countries" },
              { value: "2M+", label: "Monthly Output" },
              { value: "98%", label: "On-Time Delivery" },
            ].map((stat) => (
              <div key={stat.label} className="hero-stat">
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-[#9ca3af] tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-10 flex flex-col gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                gsap.to(textRef.current, {
                  y: -30, opacity: 0, duration: 0.5, ease: "power2.in",
                  onComplete: () => {
                    setCurrent(i);
                    gsap.fromTo(textRef.current, { y: 30, opacity: 0 }, {
                      y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
                      onComplete: () => setIsTransitioning(false),
                    });
                  },
                });
              }
            }}
            className={`block w-1 rounded-full transition-all duration-300 ${i === current ? "h-8 bg-[#d97706]" : "h-3 bg-white/30"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="text-white/40" />
      </div>
    </section>
  );
}
