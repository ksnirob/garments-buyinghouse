import type { Metadata } from "next";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactCTA from "@/components/sections/ContactCTA";
import { CERTIFICATIONS } from "@/constants/data";
import { ShieldCheck, ClipboardCheck, Factory, AlertTriangle, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance | Factory Certifications & Ethical Standards",
  description:
    "MartX BD partners only with BSCI, SEDEX, WRAP, OEKO-TEX, and GOTS certified factories. Learn about our compliance framework and ethical manufacturing standards.",
};

const COMPLIANCE_WORKFLOW = [
  { icon: Factory, title: "Factory Audit", description: "All partner factories undergo rigorous initial audits covering fire safety, working conditions, environmental practices, and labor rights." },
  { icon: FileCheck, title: "Certification Verification", description: "We verify and maintain up-to-date certification records for BSCI, SEDEX, WRAP, OEKO-TEX, GOTS, and Accord compliance." },
  { icon: ClipboardCheck, title: "Ongoing Monitoring", description: "Regular in-factory compliance monitoring with documented reports ensures standards are continuously maintained." },
  { icon: AlertTriangle, title: "Issue Resolution", description: "Any compliance issues are flagged immediately with structured corrective action plans and timelines." },
  { icon: ShieldCheck, title: "Annual Re-certification", description: "Annual audit cycles ensure all partner factories maintain their certifications and continue to meet global standards." },
];

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0b0b0b] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80"
            alt="Compliance"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/80 to-[#0b0b0b]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp><SectionLabel>Ethics & Standards</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-tight mt-4 mb-8 max-w-3xl">
              Compliance{" "}
              <span className="text-gradient-accent">First</span>.{" "}
              Always.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#9ca3af] text-lg leading-relaxed max-w-2xl">
              Every factory in the MartX BD network holds internationally recognized compliance certifications. We believe ethical manufacturing is not optional — it is the foundation of sustainable business.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeUp><SectionLabel dark>Our Certifications</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl font-black text-[#0b0b0b] mt-4">
                Partner{" "}
                <span className="text-gradient-accent">Certification</span>{" "}
                Standards
              </h2>
            </FadeUp>
          </div>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="bg-white rounded-2xl p-8 border border-[#e5e7eb] hover:border-[#d97706]/30 hover:shadow-xl transition-all duration-300 group">
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ background: `${cert.color}15` }}
                >
                  <span className="font-black text-sm" style={{ color: cert.color }}>{cert.name}</span>
                </div>
                <h3 className="text-[#0b0b0b] font-bold text-xl mb-3">{cert.name}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{cert.description}</p>
                <div
                  className="mt-6 h-1 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: cert.color }}
                />
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Compliance process */}
      <section className="py-24 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeUp><SectionLabel>Our Process</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl font-black text-white mt-4">
                How We Maintain{" "}
                <span className="text-gradient-accent">Compliance</span>
              </h2>
            </FadeUp>
          </div>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPLIANCE_WORKFLOW.map((item, i) => (
              <div key={item.title} className="glass rounded-2xl p-8 hover:bg-white/5 transition-all">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#d97706]/10 flex items-center justify-center text-[#d97706] shrink-0">
                    <item.icon size={18} />
                  </div>
                  <span className="text-[#d97706] font-bold text-3xl opacity-30">0{i + 1}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* AQL explanation */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div>
              <SectionLabel dark>Quality Standards</SectionLabel>
              <h2 className="text-4xl font-black text-[#0b0b0b] mt-4 mb-6">
                AQL-Based{" "}
                <span className="text-gradient-accent">Inspection</span>{" "}
                Standards
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-4">
                All our quality inspections follow the internationally recognized Acceptable Quality Limit (AQL) standards. We apply AQL 2.5 for critical defects and AQL 4.0 for major defects — the same standards used by the world&apos;s top fashion retailers.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                Our dedicated QC team conducts inline inspections, pre-final inspections, and final random inspections (FRI) before any shipment is approved.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "AQL Critical", value: "0" },
                  { label: "AQL Major", value: "2.5" },
                  { label: "AQL Minor", value: "4.0" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-4 text-center border border-[#e5e7eb]">
                    <div className="text-2xl font-black text-[#0b0b0b]">{item.value}</div>
                    <div className="text-xs text-[#9ca3af] mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80"
                alt="Quality inspection"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
