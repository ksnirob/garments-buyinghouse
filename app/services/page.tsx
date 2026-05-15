import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Layers, Search, Scissors, ClipboardList, Package, Building2, ShieldCheck, Activity, CheckCircle, Eye, Scan, ScanLine, FlaskConical, Network, Ship, FileText, Users, Calculator, FileCode, Leaf, Tag, TrendingUp } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactCTA from "@/components/sections/ContactCTA";
import { SERVICES } from "@/constants/data";

export const metadata: Metadata = {
  title: "Services | Full-Spectrum Apparel Sourcing Services",
  description:
    "Explore MartX BD's comprehensive garments sourcing services: product development, QC inspection, compliance management, logistics, and more. 30+ services for global buyers.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Layers, Search, Scissors, ClipboardList, Package, Building2, ShieldCheck,
  Activity, CheckCircle, Eye, Scan, ScanLine, FlaskConical, Network, Ship,
  FileText, Users, Calculator, FileCode, Leaf, Tag, TrendingUp,
};

export default function ServicesPage() {
  const categories = [...new Set(SERVICES.map((s) => s.category))];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0b0b0b] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
            alt="Services"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/80 to-[#0b0b0b]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <SectionLabel>What We Do</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-tight mt-4 mb-8 max-w-3xl">
              Full-Spectrum{" "}
              <span className="text-gradient-accent">Sourcing</span>{" "}
              Services
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#9ca3af] text-lg leading-relaxed max-w-2xl">
              From product development to final shipment, we provide 30+ specialized services covering every aspect of the apparel sourcing and manufacturing process.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* All Services */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {categories.map((cat) => (
            <div key={cat} className="mb-20">
              <FadeUp>
                <div className="flex items-center gap-4 mb-10">
                  <span className="section-label">{cat}</span>
                  <span className="h-px flex-1 bg-white/5" />
                </div>
              </FadeUp>
              <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.filter((s) => s.category === cat).map((service) => {
                  const Icon = ICON_MAP[service.icon] || Layers;
                  return (
                    <div
                      key={service.id}
                      className="group glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="w-11 h-11 rounded-full bg-[#d97706]/10 border border-[#d97706]/20 flex items-center justify-center text-[#d97706] mb-6 group-hover:bg-[#d97706] group-hover:text-white transition-all duration-300">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#d97706] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#9ca3af] text-sm leading-relaxed">{service.description}</p>
                      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#d97706] to-[#ea580c] group-hover:w-full transition-all duration-500" />
                    </div>
                  );
                })}
              </StaggerReveal>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80"
                alt="Services"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              <SectionLabel dark>Integrated Approach</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl font-black tracking-tight text-[#0b0b0b] leading-tight mt-4 mb-6">
                One Partner.{" "}
                <span className="text-gradient-accent">Complete Coverage.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                Unlike fragmented sourcing arrangements that require coordinating multiple vendors, MartX BD provides a unified service covering every stage — from initial concept to delivery at your warehouse.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-8">
                This integrated approach eliminates communication gaps, reduces lead times, and ensures consistent quality standards throughout your supply chain.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <a
                href="/request-quote"
                className="inline-flex items-center gap-2 bg-[#0b0b0b] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors text-sm"
              >
                Get Started <ArrowRight size={16} />
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
