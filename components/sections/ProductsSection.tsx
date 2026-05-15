"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { PRODUCT_CATEGORIES } from "@/constants/data";

export default function ProductsSection() {
  return (
    <section className="py-24 lg:py-36 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <FadeUp>
              <SectionLabel dark>What We Manufacture</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-[#0b0b0b] leading-tight max-w-2xl">
                Premium{" "}
                <span className="text-gradient-accent">Product</span>{" "}
                Categories
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#0b0b0b] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#1a1a1a] transition-colors text-sm shrink-0"
            >
              All Products
              <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>

        {/* Grid */}
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <Link
              key={cat.title}
              href="/products"
              className={`group relative overflow-hidden rounded-2xl cursor-pointer card-hover ${
                i === 0 || i === 3 ? "sm:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  i === 0 || i === 3 ? "h-[500px]" : "h-[240px]"
                }`}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-1">{cat.title}</h3>
                  <p className="text-white/60 text-xs line-clamp-2 mb-3 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span>MOQ: {cat.moq}</span>
                    <span className="w-px h-3 bg-white/20" />
                    <span>{cat.leadTime}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#d97706] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
