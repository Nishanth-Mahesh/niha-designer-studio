"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const collections = [
  {
    id: 1,
    title: "Designer Blouses",
    subtitle: "Artisan craftsmanship",
    description:
      "Handcrafted blouses that elevate every saree. Each piece designed with embellishment precision.",
    tag: "Signature",
    imageQuery: "luxury silk blouse fashion editorial dark",
    color: "from-purple-900/20",
    imageUrl:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
  },
  {
    id: 2,
    title: "Rental Collection",
    subtitle: "Curated luxury for rent",
    description:
      "Access premium couture for your event without the lifetime price tag.",
    tag: "Popular",
    imageUrl:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    color: "from-slate-900/20",
  },
  {
    id: 3,
    title: "Pre-Wedding Styling",
    subtitle: "For your most anticipated moments",
    description:
      "Outfits styled for engagements, mehendi, sangeet, and all the moments before the big day.",
    tag: "Bridal",
    imageUrl:
      "https://images.unsplash.com/photo-1585241936939-be4099591252?w=600&q=80",
    color: "from-rose-900/20",
  },
  {
    id: 4,
    title: "Maternity Gowns",
    subtitle: "Celebrate every stage",
    description:
      "Flowing, flattering gowns that honor the beauty of motherhood. Custom-fitted for your comfort.",
    tag: "Special",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    color: "from-amber-900/10",
  },
  {
    id: 5,
    title: "Custom Fashion",
    subtitle: "One-of-a-kind, just for you",
    description:
      "From concept sketch to final stitch — every garment built entirely around your vision.",
    tag: "Bespoke",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    color: "from-violet-900/20",
  },
];

export default function Collections() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="collections"
      className="section-padding bg-bg-secondary relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="flex flex-col gap-5">
            <SectionLabel>Collections</SectionLabel>
            <h2 className="text-[clamp(2.2rem,5.5vw,4rem)] font-light leading-[1.05] tracking-tight text-text-primary">
              The Studio
              <br />
              <span
                className="italic text-accent-glow"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Collection
              </span>
            </h2>
          </div>
          <p className="text-text-muted text-[0.88rem] font-light leading-relaxed max-w-xs tracking-wide">
            Five categories. One intention — to make every woman feel
            extraordinary in what she wears.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {collections.map((item, i) => (
            <a
              key={item.id}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-bg-card border border-white/[0.06] transition-all duration-500 hover:border-accent-primary/25 hover:shadow-[0_0_60px_rgba(122,90,166,0.1)] cursor-pointer ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent`}
                />
                {/* Tag */}
                <span className="absolute top-4 left-4 text-[9px] tracking-[0.25em] uppercase text-accent-glow bg-black/40 backdrop-blur-sm border border-accent-primary/20 px-3 py-1.5 rounded-full">
                  {item.tag}
                </span>
                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight size={14} className="text-accent-glow" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-[9px] tracking-[0.2em] uppercase text-text-muted/50 font-medium">
                  {item.subtitle}
                </span>
                <h3 className="text-[1.1rem] font-light text-text-primary tracking-wide mt-1 mb-3 group-hover:text-accent-glow transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-muted text-[0.82rem] font-light leading-relaxed tracking-wide">
                  {item.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-accent-primary font-medium">
                    Enquire
                  </span>
                  <ArrowUpRight size={12} className="text-accent-primary" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
