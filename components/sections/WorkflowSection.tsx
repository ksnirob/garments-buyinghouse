"use client";

import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { WORKFLOW_STEPS } from "@/constants/data";

export default function WorkflowSection() {
  return (
    <section className="py-24 lg:py-36 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <FadeUp>
            <SectionLabel>Our Process</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight mt-2">
              How We{" "}
              <span className="text-gradient-accent">Work</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#9ca3af] text-base mt-4 max-w-xl mx-auto leading-relaxed">
              From first inquiry to final shipment — a streamlined, transparent process designed for global buyers.
            </p>
          </FadeUp>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-white/5">
            <div className="h-full bg-gradient-to-r from-[#d97706] to-[#ea580c] w-full origin-left scale-x-0 animate-[expand_2s_ease-out_0.5s_forwards]" />
          </div>

          <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {WORKFLOW_STEPS.map((step, i) => (
              <div key={step.step} className="relative group text-center">
                {/* Step circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-24 h-24 rounded-full bg-[#181818] border border-white/8 flex items-center justify-center mx-auto group-hover:border-[#d97706] transition-colors duration-300">
                    <div>
                      <div className="text-[#d97706] text-xs font-bold tracking-widest">{step.step}</div>
                    </div>
                  </div>
                  {/* Connector dot */}
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-2 h-2 bg-[#d97706]/40 rounded-full -translate-y-1/2" />
                  )}
                </div>

                <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[#d97706] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#9ca3af] text-xs leading-relaxed hidden sm:block">
                  {step.description}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
