import type { Metadata } from "next";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import ContactCTA from "@/components/sections/ContactCTA";
import { Leaf, Droplets, Wind, Sun, Recycle, Heart, TreePine, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability | Ethical & Eco-Friendly Garment Sourcing",
  description:
    "MartX BD is committed to sustainable apparel manufacturing. GOTS certified supply chain, reduced water waste, carbon footprint initiatives, and ethical labor practices.",
};

const PILLARS = [
  { icon: Leaf, title: "Organic Materials", description: "We source GOTS certified organic cotton and Oeko-Tex certified fabrics that are free from harmful chemicals, ensuring safe products for consumers and workers." },
  { icon: Droplets, title: "Water Conservation", description: "Our partner factories implement water recycling and closed-loop washing systems that reduce water consumption by up to 60% compared to conventional manufacturing." },
  { icon: Wind, title: "Clean Energy", description: "We actively prioritize factories that use renewable energy sources, including solar panels and wind power, to reduce carbon emissions in the supply chain." },
  { icon: Recycle, title: "Waste Reduction", description: "From zero-waste pattern cutting to fabric recycling programs, our factories work toward minimizing textile waste at every production stage." },
  { icon: Heart, title: "Fair Labor", description: "All partner factories comply with ILO labor standards: fair wages, safe working conditions, no child labor, and workers&apos; right to organize." },
  { icon: TreePine, title: "Carbon Footprint", description: "We track and report carbon emissions across our supply chain, working with factories to reduce their environmental impact year over year." },
];

const SDG_GOALS = [
  { number: 8, title: "Decent Work & Economic Growth", color: "#A21942" },
  { number: 12, title: "Responsible Consumption & Production", color: "#BF8B2E" },
  { number: 13, title: "Climate Action", color: "#3F7E44" },
  { number: 17, title: "Partnerships for the Goals", color: "#19486A" },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0b0b0b] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
            alt="Sustainability"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/80 to-[#0b0b0b]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp><SectionLabel>Our Commitment</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-tight mt-4 mb-8 max-w-3xl">
              Fashion That{" "}
              <span className="text-gradient-accent">Doesn&apos;t Cost</span>{" "}
              The Earth
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#9ca3af] text-lg leading-relaxed max-w-2xl">
              We believe the future of fashion is sustainable. MartX BD is committed to driving meaningful environmental and social change across Bangladesh&apos;s garment industry — one shipment at a time.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              { value: 60, suffix: "%", label: "Water Reduction", sub: "vs. conventional" },
              { value: 40, suffix: "%", label: "Carbon Reduction", sub: "since 2018" },
              { value: 30, suffix: "+", label: "Green Factories", sub: "in our network" },
              { value: 100, suffix: "%", label: "Ethical Labor", sub: "audit compliance" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#111111] p-10 text-center">
                <div className="text-4xl font-black text-white mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#d97706] text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-[#9ca3af] text-xs">{stat.sub}</div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeUp><SectionLabel dark>Our Approach</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl font-black text-[#0b0b0b] mt-4">
                6 Pillars of{" "}
                <span className="text-gradient-accent">Sustainability</span>
              </h2>
            </FadeUp>
          </div>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 border border-[#e5e7eb] hover:border-green-300 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <p.icon size={20} />
                </div>
                <h3 className="text-[#0b0b0b] font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-24 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp><SectionLabel>Global Goals</SectionLabel></FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-4xl font-black text-white mt-4 mb-6">
                  Aligned with{" "}
                  <span className="text-gradient-accent">UN SDGs</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-[#9ca3af] leading-relaxed mb-8">
                  Our sustainability strategy is aligned with the United Nations Sustainable Development Goals. We actively contribute to four SDGs through our operations and supply chain practices.
                </p>
              </FadeUp>
              <StaggerReveal className="space-y-4">
                {SDG_GOALS.map((goal) => (
                  <div key={goal.number} className="flex items-center gap-4 glass rounded-xl p-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                      style={{ background: goal.color }}
                    >
                      {goal.number}
                    </div>
                    <span className="text-white font-medium text-sm">{goal.title}</span>
                  </div>
                ))}
              </StaggerReveal>
            </div>
            <FadeUp delay={0.3}>
              <div className="relative h-[550px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80"
                  alt="Sustainability"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Eco sourcing */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <FadeUp><SectionLabel dark>Eco Sourcing</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl font-black text-[#0b0b0b] mt-4">
                Sustainable{" "}
                <span className="text-gradient-accent">Materials</span>{" "}
                We Source
              </h2>
            </FadeUp>
          </div>
          <StaggerReveal className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Organic Cotton", cert: "GOTS Certified" },
              { name: "Recycled Polyester", cert: "GRS Certified" },
              { name: "Tencel™ Lyocell", cert: "Forest-Friendly" },
              { name: "Bamboo Fabric", cert: "Biodegradable" },
              { name: "Hemp Fabric", cert: "Low Impact" },
              { name: "ECONYL®", cert: "Regenerated Nylon" },
            ].map((mat) => (
              <div key={mat.name} className="bg-white rounded-2xl p-6 text-center border border-[#e5e7eb] hover:border-green-300 transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3">
                  <Factory size={18} className="text-green-600" />
                </div>
                <div className="text-[#0b0b0b] font-bold text-sm mb-1">{mat.name}</div>
                <div className="text-[#9ca3af] text-xs">{mat.cert}</div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
