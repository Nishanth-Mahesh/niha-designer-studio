"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ZoomIn } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&q=80",
    alt: "Bridal fashion editorial",
    label: "Bridal Couture",
    span: "row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    alt: "Designer look editorial",
    label: "Designer Look",
    span: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    alt: "Runway editorial",
    label: "Custom Design",
    span: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Pre-wedding styling",
    label: "Pre-Wedding",
    span: "row-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    alt: "Formal fashion look",
    label: "Rental Collection",
    span: "",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1520264041-cef1e6c18c34?w=600&q=80",
    alt: "Elegant fashion portrait",
    label: "Maternity Gown",
    span: "",
  },
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const currentItem = portfolioItems.find((p) => p.id === lightbox);

  return (
    <section id="portfolio" className="section-padding bg-bg-primary relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-primary/[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="text-[clamp(2.2rem,5.5vw,4rem)] font-light leading-[1.05] tracking-tight text-text-primary">
            Selected{" "}
            <span
              className="italic text-accent-glow"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Looks
            </span>
          </h2>
          <p className="text-text-muted text-[0.88rem] font-light max-w-sm tracking-wide">
            A glimpse into the studio's work — each photograph a memory we
            helped create.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[220px]">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl bg-bg-card cursor-pointer ${item.span}`}
              onClick={() => setLightbox(item.id)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-[9px] tracking-[0.25em] uppercase text-accent-glow font-medium">
                  {item.label}
                </span>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ZoomIn size={13} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* View more hint */}
        <p className="text-center text-[10px] tracking-[0.25em] uppercase text-text-muted/40 mt-10">
          View full portfolio on{" "}
          <a
            href="https://www.instagram.com/niha_designer_studioo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary/60 hover:text-accent-primary transition-colors"
          >
            @niha_designer_studioo
          </a>
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && currentItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-2xl max-h-[85vh] mx-4">
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-h-[85vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <div className="absolute bottom-4 left-4">
              <span className="text-[9px] tracking-[0.25em] uppercase text-accent-glow glass px-3 py-1.5 rounded-full">
                {currentItem.label}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
