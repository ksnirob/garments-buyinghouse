"use client";

import Link from "next/link";
import { ArrowRight, Layers, Search, Scissors, ClipboardList, Package, Building2, ShieldCheck, Activity, CheckCircle, Eye } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICES } from "@/constants/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers: <Layers size={22} />,
  Search: <Search size={22} />,
  Scissors: <Scissors size={22} />,
  ClipboardList: <ClipboardList size={22} />,
  Package: <Package size={22} />,
  Building2: <Building2 size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  Activity: <Activity size={22} />,
  CheckCircle: <CheckCircle size={22} />,
  Eye: <Eye size={22} />,
};

export default function ServicesSection() {
  const featured = SERVICES.slice(0, 9);

  return (
    <section className="py-24 lg:py-36 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <FadeUp>
              <SectionLabel>What We Do</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight max-w-xl">
                Full-Spectrum{" "}
                <span className="text-gradient-accent">Sourcing</span>{" "}
                Services
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-7 py-3.5 rounded-full hover:border-[#d97706] hover:text-[#d97706] transition-colors text-sm shrink-0"
            >
              All Services
              <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>

        {/* Service grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {featured.map((service) => (
            <Link
              key={service.id}
              href="/services"
              className="group glass p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-full bg-[#d97706]/10 border border-[#d97706]/20 flex items-center justify-center text-[#d97706] mb-6 group-hover:bg-[#d97706] group-hover:text-white transition-all duration-300">
                {ICON_MAP[service.icon] || <Layers size={22} />}
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#d97706] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-[#d97706] text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight size={12} />
              </div>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#d97706] to-[#ea580c] group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </StaggerReveal>

        {/* View all CTA */}
        <FadeUp delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#d97706] text-sm font-medium transition-colors duration-200"
            >
              View all 30+ services
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
