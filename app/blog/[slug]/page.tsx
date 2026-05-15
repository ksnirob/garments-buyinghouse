import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Tag, User } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "@/constants/data";
import { formatDate } from "@/lib/utils";
import FadeUp from "@/components/animations/FadeUp";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | MartX BD Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-0 bg-[#0b0b0b] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4 text-xs mb-6">
              <span className="bg-[#d97706]/10 text-[#d97706] px-3 py-1 rounded-full border border-[#d97706]/20 flex items-center gap-1.5">
                <Tag size={11} /> {post.category}
              </span>
              <span className="text-[#9ca3af] flex items-center gap-1.5">
                <Calendar size={11} /> {formatDate(post.date)}
              </span>
              <span className="text-[#9ca3af] flex items-center gap-1.5">
                <Clock size={11} /> {post.readTime}
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-8">
              {post.title}
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex items-center gap-4 mb-12">
              <Image
                src={post.authorImage}
                alt={post.author}
                width={48}
                height={48}
                className="rounded-full object-cover border-2 border-white/10"
              />
              <div>
                <p className="text-white font-semibold">{post.author}</p>
                <p className="text-[#9ca3af] text-sm">{post.authorRole}</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.4}>
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="relative h-[400px] lg:h-[520px] rounded-t-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-[#374151] text-xl leading-relaxed font-medium border-l-4 border-[#d97706] pl-6 mb-8">
                {post.excerpt}
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                The Bangladesh garment industry continues to evolve at a rapid pace, driven by changing buyer demands, sustainability requirements, and global trade dynamics. As one of the country&apos;s leading buying houses, MartX BD sits at the intersection of these shifts, helping international brands navigate complexity with confidence.
              </p>
              <h2 className="text-[#0b0b0b] text-2xl font-black mt-10 mb-4">The Current Landscape</h2>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                Bangladesh remains the world&apos;s second-largest garment exporter, generating over $47 billion in annual export revenue. With a workforce of 4 million skilled workers and a factory network of 4,500+ facilities, the country offers unmatched manufacturing capacity at competitive price points.
              </p>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                However, the industry is undergoing a profound transformation. Buyers increasingly require not just competitive pricing, but comprehensive compliance documentation, sustainable materials, and transparent supply chain practices.
              </p>
              <h2 className="text-[#0b0b0b] text-2xl font-black mt-10 mb-4">Key Trends Shaping the Industry</h2>
              <ul className="list-none space-y-3 mb-6">
                {[
                  "Growing demand for GOTS certified organic and recycled materials",
                  "Digitalization of supply chain with real-time tracking",
                  "Rise of nearshoring and supply chain diversification",
                  "Stricter ESG reporting requirements from major retailers",
                  "Investment in green factory infrastructure",
                ].map((trend) => (
                  <li key={trend} className="flex items-start gap-3 text-[#4b5563]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] mt-2 shrink-0" />
                    {trend}
                  </li>
                ))}
              </ul>
              <h2 className="text-[#0b0b0b] text-2xl font-black mt-10 mb-4">What This Means for Buyers</h2>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                For international buyers, working with an experienced buying house partner has never been more important. Navigating factory selection, compliance verification, production oversight, and logistics requires deep local knowledge and established relationships.
              </p>
              <p className="text-[#4b5563] leading-relaxed">
                MartX BD is positioned to help brands capitalize on Bangladesh&apos;s manufacturing strengths while managing the complexity of modern supply chain requirements. Contact us today to discuss how we can support your next sourcing project.
              </p>
            </div>
          </FadeUp>

          {/* Tags */}
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap gap-2 mt-12 pt-10 border-t border-[#e5e7eb]">
              {["Bangladesh Apparel", "Sourcing", "Fashion Industry", post.category].map((tag) => (
                <span key={tag} className="bg-[#f5f5f5] text-[#4b5563] text-xs px-4 py-2 rounded-full font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-black text-[#0b0b0b] mb-10">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] hover:shadow-xl transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-6">
                      <p className="text-[#d97706] text-xs font-semibold uppercase tracking-wider mb-2">{r.category}</p>
                      <h3 className="text-[#0b0b0b] font-bold text-lg leading-tight group-hover:text-[#d97706] transition-colors">{r.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
