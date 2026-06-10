"use client";

import { Instagram, Heart, MessageCircle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { INSTAGRAM_URL } from "@/lib/utils";

const feedItems = [
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
    likes: "2.4k",
    comments: "48",
    alt: "Fashion look 1",
  },
  {
    src: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80",
    likes: "3.1k",
    comments: "62",
    alt: "Bridal blouse",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
    likes: "1.8k",
    comments: "34",
    alt: "Custom fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    likes: "2.9k",
    comments: "55",
    alt: "Elegant styling",
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    likes: "1.5k",
    comments: "29",
    alt: "Portrait fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1585241936939-be4099591252?w=400&q=80",
    likes: "4.2k",
    comments: "87",
    alt: "Bridal styling",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    likes: "2.2k",
    comments: "41",
    alt: "Designer wear",
  },
  {
    src: "https://images.unsplash.com/photo-1520264041-cef1e6c18c34?w=400&q=80",
    likes: "3.6k",
    comments: "70",
    alt: "Maternity fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=400&q=80",
    likes: "1.9k",
    comments: "38",
    alt: "Editorial fashion",
  },
];

export default function SocialFeed() {
  return (
    <section className="section-padding bg-bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent-primary/[0.05] blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-14">
          <SectionLabel>Instagram</SectionLabel>
          <h2 className="text-[clamp(2.2rem,5.5vw,4rem)] font-light leading-[1.05] tracking-tight text-text-primary">
            Inspired By
            <br />
            <span
              className="italic text-accent-glow"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every Story
            </span>
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-accent-primary/70 hover:text-accent-primary transition-colors"
          >
            <Instagram size={13} />
            @niha_designer_studioo
          </a>
        </div>

        {/* 3×3 grid */}
        <div className="grid grid-cols-3 gap-1.5 md:gap-2.5">
          {feedItems.map((item, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-bg-card rounded-lg"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1.5 text-white">
                    <Heart size={14} className="fill-white" />
                    <span className="text-[11px] font-medium">{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white">
                    <MessageCircle size={14} className="fill-white" />
                    <span className="text-[11px] font-medium">
                      {item.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="flex justify-center mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-text-muted hover:text-text-primary border border-white/[0.08] hover:border-accent-primary/30 px-8 py-3.5 rounded-full transition-all duration-300"
          >
            <Instagram size={13} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
