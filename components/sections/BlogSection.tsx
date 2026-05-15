"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { BLOG_POSTS } from "@/constants/data";
import { formatDate } from "@/lib/utils";

export default function BlogSection() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1, 4);

  return (
    <section className="py-24 lg:py-36 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <FadeUp>
              <SectionLabel dark>Industry Insights</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-[#0b0b0b] leading-tight max-w-xl">
                Latest{" "}
                <span className="text-gradient-accent">News</span>{" "}
                & Insights
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#0b0b0b] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#1a1a1a] transition-colors text-sm shrink-0"
            >
              All Articles
              <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured post */}
          <FadeUp className="lg:col-span-2">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-6 left-6 bg-[#d97706] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  {featured.category}
                </span>
              </div>
              <div className="flex items-center gap-4 text-[#9ca3af] text-xs mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {formatDate(featured.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {featured.readTime}
                </span>
              </div>
              <h3 className="text-[#0b0b0b] font-black text-2xl lg:text-3xl tracking-tight leading-tight group-hover:text-[#d97706] transition-colors duration-200 mb-3">
                {featured.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{featured.excerpt}</p>
            </Link>
          </FadeUp>

          {/* Side posts */}
          <StaggerReveal className="flex flex-col gap-8">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-5 items-start">
                <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-[#d97706] text-xs font-semibold mb-1 block">{post.category}</span>
                  <h4 className="text-[#0b0b0b] font-bold text-sm leading-tight group-hover:text-[#d97706] transition-colors duration-200 mb-2 line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[#9ca3af] text-xs">
                    <Clock size={10} />
                    {post.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
