import type { Metadata } from "next";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Gallery | Factories, Production & Quality Control",
  description:
    "Explore MartX BD's photo gallery — factory operations, garment production lines, quality inspection, fabric sourcing, and final packaging in Bangladesh.",
};

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", alt: "Factory Floor", category: "Factory", wide: true },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Quality Inspection", category: "QC", wide: false },
  { src: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80", alt: "Fabric Rolls", category: "Materials", wide: false },
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80", alt: "Sewing Lines", category: "Production", wide: false },
  { src: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&q=80", alt: "Garment Display", category: "Products", wide: false },
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80", alt: "Export Packaging", category: "Logistics", wide: true },
  { src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80", alt: "T-shirt Production", category: "Production", wide: false },
  { src: "https://images.unsplash.com/photo-1594938298603-c8148c4b84b0?w=800&q=80", alt: "Finished Goods", category: "Products", wide: false },
  { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80", alt: "Eco Fabrics", category: "Materials", wide: false },
  { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80", alt: "Team Inspection", category: "QC", wide: false },
  { src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80", alt: "Activewear Line", category: "Production", wide: false },
  { src: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=1200&q=80", alt: "Sample Room", category: "Development", wide: true },
];

const CATEGORIES = ["All", "Factory", "Production", "QC", "Materials", "Products", "Logistics", "Development"];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0b0b0b] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp><SectionLabel>Visual Tour</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-tight mt-4 mb-8 max-w-3xl">
              Behind the{" "}
              <span className="text-gradient-accent">Seams</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#9ca3af] text-lg leading-relaxed max-w-2xl">
              A visual journey through our factory network — from raw fabric to finished garment. Transparency is at the core of everything we do.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Categories filter */}
          <FadeUp>
            <div className="flex flex-wrap gap-3 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    cat === "All"
                      ? "bg-[#d97706] text-white"
                      : "glass text-[#9ca3af] hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Masonry-style grid */}
          <StaggerReveal className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY.map((item) => (
              <div
                key={item.src}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.wide ? "break-inside-avoid" : "break-inside-avoid"}`}
              >
                <div className={`relative overflow-hidden ${item.wide ? "h-72" : "h-60"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[#d97706] text-xs font-semibold uppercase tracking-wider block mb-1">{item.category}</span>
                    <h3 className="text-white font-bold">{item.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
