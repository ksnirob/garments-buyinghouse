import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import { SITE } from "@/constants/data";

export default function ContactCTA() {
  return (
    <section className="relative py-32 bg-[#0b0b0b] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(217,119,6,0.3) 35px,
            rgba(217,119,6,0.3) 36px
          )`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeUp>
          <span className="section-label inline-block mb-6">Get Started Today</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-tight mb-6">
            Ready to Source Your{" "}
            <span className="text-gradient-accent">Next Collection?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-[#9ca3af] text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Partner with Bangladesh&apos;s most trusted garments buying house. We handle everything from product development to final shipment — with complete transparency and world-class quality.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-quote"
              className="bg-gradient-to-r from-[#d97706] to-[#ea580c] text-white font-bold px-10 py-5 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 text-sm tracking-wide"
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white font-bold px-10 py-5 rounded-full hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2 text-sm tracking-wide"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
