"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

const STATS = [
  { value: 50, suffix: "+", label: "Partner Factories" },
  { value: 25, suffix: "+", label: "Export Countries" },
  { value: 2, suffix: "M+", label: "Monthly Production" },
  { value: 98, suffix: "%", label: "On-Time Shipment" },
];

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-36 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left */}
          <div>
            <FadeUp>
              <SectionLabel dark>Who We Are</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-[#0b0b0b] leading-tight mb-6">
                Bangladesh&apos;s Premier{" "}
                <span className="text-gradient-accent">Apparel Sourcing</span>{" "}
                Partner
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#4b5563] text-base lg:text-lg leading-relaxed mb-6">
                MartX BD is a 100% export-oriented garments buying house, helping international fashion brands confidently source ready-made garments (RMG) from Bangladesh. From product development to final shipment, we handle every step with precision and transparency.
              </p>
              <p className="text-[#4b5563] text-base leading-relaxed mb-10">
                With decades of combined industry expertise and deep local factory networks, we bridge the gap between global buyers and Bangladesh&apos;s world-class manufacturing ecosystem. Our commitment to ethical production, compliance, and quality is the foundation of every partnership.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#0b0b0b] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors text-sm tracking-wide"
              >
                Our Full Story
                <ArrowRight size={16} />
              </Link>
            </FadeUp>
          </div>

          {/* Right: images */}
          <FadeUp delay={0.2}>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1000&q=80"
                  alt="MartX BD factory floor"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-[#0b0b0b] rounded-2xl p-6 max-w-[220px] shadow-2xl">
                <div className="text-3xl font-black text-white mb-1">15+</div>
                <div className="text-xs text-[#9ca3af] tracking-wider uppercase leading-relaxed">
                  Years of Industry Excellence
                </div>
                <div className="w-8 h-px bg-[#d97706] mt-3" />
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Stats */}
        <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e5e5] rounded-2xl overflow-hidden">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-[#fafafa] p-10 text-center">
              <div className="text-5xl font-black text-[#0b0b0b] mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} className="tabular-nums" />
              </div>
              <div className="text-xs text-[#9ca3af] tracking-wider uppercase font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
