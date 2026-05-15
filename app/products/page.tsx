import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactCTA from "@/components/sections/ContactCTA";
import { PRODUCT_CATEGORIES } from "@/constants/data";

export const metadata: Metadata = {
  title: "Products | Apparel & Garment Categories",
  description:
    "Explore MartX BD's full range of garment manufacturing capabilities: T-shirts, polo shirts, denim, jackets, sweaters, hoodies, sportswear, workwear, and more.",
};

const ADDITIONAL = [
  { title: "Lingerie & Intimate Wear", image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80", moq: "300 pcs", leadTime: "40-55 days" },
  { title: "Kidswear", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80", moq: "500 pcs", leadTime: "35-50 days" },
  { title: "Woven Shirts", image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=600&q=80", moq: "300 pcs", leadTime: "35-50 days" },
  { title: "Activewear", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80", moq: "500 pcs", leadTime: "40-55 days" },
  { title: "Bottoms & Trousers", image: "https://images.unsplash.com/photo-1594938298603-c8148c4b84b0?w=600&q=80", moq: "300 pcs", leadTime: "35-50 days" },
  { title: "Uniforms", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80", moq: "100 pcs", leadTime: "25-40 days" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0b0b0b] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=1920&q=80"
            alt="Products"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/80 to-[#0b0b0b]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp><SectionLabel>What We Make</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-tight mt-4 mb-8 max-w-3xl">
              Premium{" "}
              <span className="text-gradient-accent">Garment</span>{" "}
              Categories
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#9ca3af] text-lg leading-relaxed max-w-2xl">
              From everyday essentials to luxury fashion — we manufacture 14+ garment categories with world-class quality and competitive pricing from Bangladesh&apos;s best factories.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main categories */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <FadeUp><SectionLabel dark>Core Categories</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl font-black text-[#0b0b0b] mt-4">Featured Collections</h2>
            </FadeUp>
          </div>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.map((cat) => (
              <div key={cat.title} className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e5e7eb]">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#0b0b0b] font-bold text-lg mb-2">{cat.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex items-center gap-4 text-xs text-[#9ca3af]">
                    <span>MOQ: <strong className="text-[#0b0b0b]">{cat.moq}</strong></span>
                    <span className="w-px h-3 bg-[#e5e7eb]" />
                    <span>Lead: <strong className="text-[#0b0b0b]">{cat.leadTime}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Additional categories */}
      <section className="py-24 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <FadeUp><SectionLabel>More Products</SectionLabel></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl font-black text-white mt-4">Additional Categories</h2>
            </FadeUp>
          </div>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDITIONAL.map((cat) => (
              <div key={cat.title} className="group glass rounded-2xl overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-white/50 mt-1">
                      <span>MOQ: {cat.moq}</span>
                      <span>•</span>
                      <span>{cat.leadTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Request product info */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <SectionLabel dark>Custom Manufacturing</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl font-black text-[#0b0b0b] mt-4 mb-6">
              Don&apos;t See Your{" "}
              <span className="text-gradient-accent">Category?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#6b7280] leading-relaxed mb-10">
              We manufacture virtually any garment type. Send us your tech pack or product description and we&apos;ll match you with the perfect factory from our network.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-[#0b0b0b] text-white font-bold px-10 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors text-sm"
            >
              Request Custom Quote <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
