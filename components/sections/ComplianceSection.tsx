"use client";

import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { CERTIFICATIONS } from "@/constants/data";

export default function ComplianceSection() {
  return (
    <section className="py-24 lg:py-36 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <FadeUp>
            <SectionLabel>Certifications</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight mt-2">
              Partner{" "}
              <span className="text-gradient-accent">Certifications</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#9ca3af] text-base mt-4 max-w-xl mx-auto leading-relaxed">
              We only work with factories that meet the highest global compliance standards. Our manufacturing partners hold internationally recognized certifications.
            </p>
          </FadeUp>
        </div>

        <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="group glass rounded-2xl p-6 text-center hover:bg-white/5 transition-all duration-300 cursor-default"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-black text-sm"
                style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
              >
                <span style={{ color: cert.color }} className="text-xs font-black tracking-tight">{cert.name}</span>
              </div>
              <h3 className="text-white font-bold text-xs mb-1">{cert.name}</h3>
              <p className="text-[#9ca3af] text-[10px] leading-relaxed hidden group-hover:block">
                {cert.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
