"use client";

import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { EXPORT_COUNTRIES } from "@/constants/data";

export default function GlobalPresenceSection() {
  return (
    <section className="py-24 lg:py-36 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div className="lg:w-2/5">
            <FadeUp>
              <SectionLabel>Global Reach</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-6">
                Shipping to{" "}
                <span className="text-gradient-accent">25+ Countries</span>{" "}
                Worldwide
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#9ca3af] text-base leading-relaxed mb-8">
                From North America to Europe and the Middle East, MartX BD serves global fashion brands with reliable, compliant, and timely apparel exports from Bangladesh.
              </p>
            </FadeUp>

            {/* Key markets */}
            <StaggerReveal className="flex flex-wrap gap-3">
              {EXPORT_COUNTRIES.slice(0, 9).map((c) => (
                <div
                  key={c.code}
                  className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-white/70 hover:text-white hover:border-[#d97706] transition-all"
                >
                  <span className="text-lg">{c.flag}</span>
                  <span className="text-xs">{c.country}</span>
                </div>
              ))}
            </StaggerReveal>
          </div>

          {/* Right: world map visualization */}
          <div className="lg:w-3/5">
            <FadeUp delay={0.2}>
              <div className="relative bg-[#181818] rounded-3xl p-8 border border-white/5 overflow-hidden">
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="relative">
                  <h3 className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-6">
                    Export Destinations
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {EXPORT_COUNTRIES.map((c) => (
                      <div key={c.code} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/3 transition-colors group">
                        <span className="text-2xl">{c.flag}</span>
                        <div>
                          <div className="text-white text-sm font-medium group-hover:text-[#d97706] transition-colors">{c.country}</div>
                          <div className="flex items-center gap-1 mt-1">
                            <div className="h-1 rounded-full bg-[#d97706] w-full max-w-[60px]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
