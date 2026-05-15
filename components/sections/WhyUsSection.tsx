"use client";

import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { WHY_CHOOSE_US } from "@/constants/data";
import { DollarSign, ShieldCheck, CheckSquare, Clock, Activity, Users, Eye, Network, MessageSquare } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  DollarSign: <DollarSign size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  CheckSquare: <CheckSquare size={20} />,
  Clock: <Clock size={20} />,
  Activity: <Activity size={20} />,
  Users: <Users size={20} />,
  Eye: <Eye size={20} />,
  Network: <Network size={20} />,
  MessageSquare: <MessageSquare size={20} />,
};

export default function WhyUsSection() {
  return (
    <section className="py-24 lg:py-36 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left sticky heading */}
          <div className="lg:w-1/3">
            <FadeUp>
              <SectionLabel dark>Why MartX BD</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#0b0b0b] leading-tight mb-6">
                We&apos;re Not Just Another{" "}
                <span className="text-gradient-accent">Buying House</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#6b7280] text-base leading-relaxed mb-8">
                We&apos;re your local production partner in Bangladesh — trusted by global fashion brands for our reliability, transparency, and professionalism.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0b0b0b] flex items-center justify-center">
                  <span className="text-[#d97706] font-black text-lg">M</span>
                </div>
                <div>
                  <div className="text-[#0b0b0b] font-bold text-sm">MartX BD Team</div>
                  <div className="text-[#9ca3af] text-xs">Your Dedicated Sourcing Partner</div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: features grid */}
          <div className="lg:w-2/3">
            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_US.map((item) => (
                <div
                  key={item.title}
                  className="group p-6 bg-white rounded-2xl border border-[#e5e7eb] hover:border-[#d97706]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-[#d97706]/10 flex items-center justify-center text-[#d97706] mb-5 group-hover:bg-[#d97706] group-hover:text-white transition-all duration-300">
                    {ICON_MAP[item.icon] || <ShieldCheck size={20} />}
                  </div>
                  <h3 className="text-[#0b0b0b] font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
