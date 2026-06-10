"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Menon",
    role: "Bride — Wedding Styling",
    quote:
      "I walked into the studio not knowing what I wanted. I walked out with the exact outfit I didn't know I was looking for. The attention to my comfort was unlike anything I've experienced.",
    stars: 5,
    initial: "P",
  },
  {
    name: "Ananya Sharma",
    role: "Client — Custom Blouse",
    quote:
      "The blouse was stitched to my exact measurements. I've worn it to three events and the compliments have never stopped. This is what bespoke actually feels like.",
    stars: 5,
    initial: "A",
  },
  {
    name: "Divya Rajan",
    role: "Pre-Wedding Shoot",
    quote:
      "Every outfit for our pre-wedding was perfectly coordinated. The lehenga was stunning — not just beautiful, but actually comfortable to wear for hours. That rarely happens.",
    stars: 5,
    initial: "D",
  },
  {
    name: "Kavitha Nair",
    role: "Rental — Sangeet Night",
    quote:
      "Renting from Niha Studio felt nothing like renting. The quality, the care, the experience — all premium. I felt like it was made for me.",
    stars: 5,
    initial: "K",
  },
  {
    name: "Meera Pillai",
    role: "Maternity Gown Client",
    quote:
      "I was nervous about a maternity photoshoot. The gown they designed made me feel confident and beautiful in a way I hadn't expected. Every woman deserves to feel that way.",
    stars: 5,
    initial: "M",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-primary/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="text-[clamp(2.2rem,5.5vw,4rem)] font-light leading-[1.05] tracking-tight text-text-primary">
            Words From
            <br />
            <span
              className="italic text-accent-glow"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Clients
            </span>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-10 md:p-14 relative">
            {/* Quote icon */}
            <Quote
              size={40}
              className="text-accent-primary/20 mb-8"
              strokeWidth={1}
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: current.stars }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="fill-accent-primary text-accent-primary"
                />
              ))}
            </div>

            {/* Quote text */}
            <blockquote
              className="text-[1.05rem] md:text-[1.2rem] font-light text-text-primary leading-relaxed tracking-wide mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent-primary/20 border border-accent-primary/30 flex items-center justify-center">
                <span className="text-accent-glow text-[0.9rem] font-medium">
                  {current.initial}
                </span>
              </div>
              <div>
                <p className="text-text-primary text-[0.88rem] font-medium tracking-wide">
                  {current.name}
                </p>
                <p className="text-text-muted text-[0.78rem] tracking-widest uppercase font-light mt-0.5">
                  {current.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 px-2">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? "w-6 h-1.5 bg-accent-primary"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full glass-light flex items-center justify-center hover:border-accent-primary/30 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={15} className="text-text-muted" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full glass-light flex items-center justify-center hover:border-accent-primary/30 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={15} className="text-text-muted" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
