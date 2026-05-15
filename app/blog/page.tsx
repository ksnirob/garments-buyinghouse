import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { BLOG_POSTS } from "@/constants/data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog | Apparel Industry Insights & Sourcing Tips",
  description:
    "Stay updated with MartX BD's blog — insights on garment sourcing trends, Bangladesh RMG industry news, compliance updates, and sustainable fashion.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp><SectionLabel>Knowledge Hub</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-tight mt-4 max-w-3xl">
              Industry{" "}
              <span className="text-gradient-accent">Insights</span>{" "}
              & Updates
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Featured post */}
          <FadeUp>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 border border-[#e5e7eb] mb-16">
                <div className="relative h-72 lg:h-auto min-h-[350px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="bg-[#d97706] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-[#9ca3af] text-xs mb-5">
                    <span className="flex items-center gap-1.5">
                      <Tag size={12} /> {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {formatDate(featured.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-[#0b0b0b] text-3xl font-black tracking-tight mb-4 group-hover:text-[#d97706] transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-[#6b7280] leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={featured.authorImage}
                      alt={featured.author}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[#0b0b0b] font-semibold text-sm">{featured.author}</p>
                      <p className="text-[#9ca3af] text-xs">{featured.authorRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </FadeUp>

          {/* Rest of posts */}
          <div className="mb-8">
            <FadeUp><SectionLabel dark>Latest Articles</SectionLabel></FadeUp>
          </div>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-[#0b0b0b] text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[#9ca3af] text-xs mb-4">
                      <span className="flex items-center gap-1"><Calendar size={11} /> {formatDate(post.date)}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    </div>
                    <h3 className="text-[#0b0b0b] font-bold text-xl leading-tight mb-3 group-hover:text-[#d97706] transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-[#d97706] text-sm font-semibold group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={14} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </>
  );
}
