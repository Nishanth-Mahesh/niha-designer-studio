"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const handleExplore = () => {
    const el = document.querySelector("#collections");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* Cinematic gradient backdrop */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-accent-primary/[0.07] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent-secondary/[0.05] blur-[100px]" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-accent-glow/[0.03] blur-[80px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating label top */}
      <div className="absolute top-32 left-8 md:left-16 hidden md:flex flex-col gap-1 animate-fade-in opacity-0 [animation-delay:1.5s] [animation-fill-mode:forwards]">
        <span className="text-[9px] tracking-[0.3em] uppercase text-accent-glow/60">
          Est. 2020
        </span>
        <span className="text-[9px] tracking-[0.2em] uppercase text-text-muted/40">
          Premium Studio
        </span>
      </div>

      {/* Floating label right */}
      <div className="absolute top-1/2 right-8 md:right-12 -translate-y-1/2 hidden lg:flex flex-col items-end gap-6">
        <div
          className="flex flex-col gap-1 animate-fade-in opacity-0 [animation-delay:1.8s] [animation-fill-mode:forwards]"
        >
          <span className="text-[9px] tracking-[0.25em] uppercase text-text-muted/40 text-right">
            Custom Styling
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-text-muted/40 text-right">
            Rental Wear
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-text-muted/40 text-right">
            Pre-Wedding
          </span>
        </div>
        {/* Vertical line */}
        <div className="w-px h-20 bg-gradient-to-b from-accent-primary/30 to-transparent mx-auto" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-10 animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]"
        >
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-accent-primary/60" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-accent-glow font-medium">
            Premium Fashion Studio
          </span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-accent-primary/60" />
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="text-[clamp(3rem,10vw,8rem)] font-light leading-[0.92] tracking-tight text-text-primary mb-6"
        >
          <span
            className="block animate-fade-up opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]"
          >
            Wear
          </span>
          <span
            className="block italic font-accent text-accent-glow animate-fade-up opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Confidence.
          </span>
          <span
            className="block animate-fade-up opacity-0 [animation-delay:0.9s] [animation-fill-mode:forwards] text-text-muted/70"
          >
            Design Your
          </span>
          <span
            className="block animate-fade-up opacity-0 [animation-delay:1.1s] [animation-fill-mode:forwards]"
          >
            Story.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="mt-8 text-[clamp(0.8rem,2vw,1.05rem)] text-text-muted font-light leading-relaxed max-w-lg tracking-wide animate-fade-up opacity-0 [animation-delay:1.2s] [animation-fill-mode:forwards]"
        >
          Designer wear crafted for moments that deserve attention.
          <br className="hidden md:block" />
          Every piece tells the story of who you are.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 mt-12 animate-fade-up opacity-0 [animation-delay:1.4s] [animation-fill-mode:forwards]"
        >
          <Button
            variant="primary"
            size="lg"
            href={WHATSAPP_URL}
            external
          >
            Book Consultation
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={handleExplore}
          >
            Explore Collection
          </Button>
        </div>

        {/* Stats */}
        <div
          className="flex items-center gap-10 mt-20 animate-fade-up opacity-0 [animation-delay:1.6s] [animation-fill-mode:forwards]"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "5★", label: "Rated Studio" },
            { value: "4+", label: "Years of Craft" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[1.6rem] font-light text-text-primary tracking-tight">
                {stat.value}
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase text-text-muted/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 [animation-delay:2s] [animation-fill-mode:forwards]">
        <span className="text-[9px] tracking-[0.3em] uppercase text-text-muted/40">
          Scroll
        </span>
        <ChevronDown
          size={14}
          className="text-accent-primary/60 animate-scroll-bounce"
        />
      </div>
    </section>
  );
}
