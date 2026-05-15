import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Globe, Users, Target } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About MartX BD | Our Story, Mission & Vision",
  description:
    "Learn about MartX BD — Bangladesh's premier garments buying house. Our mission, vision, leadership team, factory network, and commitment to ethical manufacturing.",
};

const TIMELINE = [
  { year: "2009", event: "Founded in Dhaka, Bangladesh as a boutique apparel sourcing consultancy." },
  { year: "2012", event: "Expanded to 10 partner factories across Bangladesh's major RMG hubs." },
  { year: "2015", event: "Achieved first BSCI and SEDEX certified factory network compliance." },
  { year: "2018", event: "Launched Quality Assurance division with in-house QC inspection team." },
  { year: "2020", event: "Expanded global buyer base to 20+ countries across USA, EU, and Middle East." },
  { year: "2023", event: "Achieved 2M+ monthly production capacity with 50+ partner factories." },
  { year: "2025", event: "Launched Sustainable Sourcing initiative with GOTS certified supply chain." },
];

const VALUES = [
  { icon: Award, title: "Excellence", description: "We set the highest standards for quality, compliance, and service in every project we undertake." },
  { icon: Globe, title: "Global Thinking", description: "We operate with a global mindset, understanding diverse markets, cultures, and buyer requirements." },
  { icon: Users, title: "Partnership", description: "We build long-term strategic partnerships — not just transactional supplier relationships." },
  { icon: Target, title: "Transparency", description: "Full visibility into costing, production, and quality at every stage of the supply chain." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0b0b0b] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80"
            alt="MartX BD About"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/80 via-[#0b0b0b]/70 to-[#0b0b0b]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <SectionLabel>About Us</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-tight max-w-3xl mt-4 mb-8">
              Built on{" "}
              <span className="text-gradient-accent">Trust</span>.{" "}
              Driven by{" "}
              <span className="text-gradient-accent">Excellence</span>.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#9ca3af] text-lg leading-relaxed max-w-2xl">
              For over 15 years, MartX BD has been connecting the world&apos;s leading fashion brands with Bangladesh&apos;s finest garment manufacturers — delivering quality, compliance, and certainty in every shipment.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <FadeUp>
              <div>
                <SectionLabel dark>Our Story</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight text-[#0b0b0b] leading-tight mb-6 mt-4">
                  Bangladesh&apos;s Premier{" "}
                  <span className="text-gradient-accent">Apparel Partner</span>
                </h2>
                <p className="text-[#4b5563] leading-relaxed mb-4">
                  MartX BD was founded with a singular vision: to make Bangladesh&apos;s world-class apparel manufacturing accessible to global fashion brands with complete transparency and reliability. What began as a small sourcing consultancy in Dhaka has grown into one of Bangladesh&apos;s most trusted buying houses.
                </p>
                <p className="text-[#4b5563] leading-relaxed mb-4">
                  Today, we manage the complete apparel supply chain for buyers across 25+ countries — from product development and sampling to production monitoring, quality inspection, and export logistics.
                </p>
                <p className="text-[#4b5563] leading-relaxed">
                  Our team of experienced merchandisers, quality controllers, and logistics specialists are on the ground in Bangladesh, providing real-time oversight and ensuring your expectations are met — every time.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="h-[450px] rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=1000&q=80"
                    alt="MartX BD team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#0b0b0b] p-6 rounded-2xl max-w-[180px]">
                  <div className="text-4xl font-black text-white">15+</div>
                  <div className="text-[#9ca3af] text-xs uppercase tracking-wider mt-1">Years of Excellence</div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Stats grid */}
          <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e5e5] rounded-2xl overflow-hidden">
            {[
              { value: 50, suffix: "+", label: "Partner Factories" },
              { value: 25, suffix: "+", label: "Export Countries" },
              { value: 2, suffix: "M+", label: "Monthly Production" },
              { value: 98, suffix: "%", label: "On-Time Shipment" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-10 text-center">
                <div className="text-5xl font-black text-[#0b0b0b] mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-[#9ca3af] tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <FadeUp>
              <div className="glass rounded-3xl p-10 border border-[#d97706]/20 h-full">
                <div className="w-12 h-12 rounded-full bg-[#d97706]/10 flex items-center justify-center mb-6">
                  <Target size={22} className="text-[#d97706]" />
                </div>
                <h3 className="text-white text-2xl font-black mb-4">Our Mission</h3>
                <p className="text-[#9ca3af] leading-relaxed">
                  To empower global fashion brands with seamless, ethical, and quality-driven apparel sourcing from Bangladesh — making every step of the supply chain transparent, efficient, and trustworthy.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="glass rounded-3xl p-10 border border-white/5 h-full">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <Globe size={22} className="text-white/50" />
                </div>
                <h3 className="text-white text-2xl font-black mb-4">Our Vision</h3>
                <p className="text-[#9ca3af] leading-relaxed">
                  To be the most trusted apparel sourcing partner in South Asia, recognized globally for our unwavering commitment to ethical manufacturing, compliance excellence, and supply chain innovation.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <FadeUp>
              <SectionLabel>Core Values</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl font-black text-white mt-4">What Drives Us</h2>
            </FadeUp>
          </div>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-8 text-center hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#d97706]/10 flex items-center justify-center text-[#d97706] mx-auto mb-5">
                  <v.icon size={20} />
                </div>
                <h3 className="text-white font-bold mb-3">{v.title}</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeUp>
              <SectionLabel dark>Our Journey</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl font-black tracking-tight text-[#0b0b0b] mt-4">
                15+ Years of Growth
              </h2>
            </FadeUp>
          </div>

          <StaggerReveal className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#e5e7eb]" />
            {TIMELINE.map((item, i) => (
              <div key={item.year} className={`relative flex gap-8 ${i < TIMELINE.length - 1 ? "mb-10" : ""}`}>
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#0b0b0b] flex items-center justify-center shrink-0">
                  <span className="text-[#d97706] font-black text-xs">{item.year}</span>
                </div>
                <div className="pt-4">
                  <p className="text-[#4b5563] leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
