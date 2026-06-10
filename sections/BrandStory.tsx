"use client";

import SectionLabel from "@/components/ui/SectionLabel";

const values = [
  {
    number: "01",
    title: "Deep Listening",
    body:
      "Every design begins with a conversation — understanding your personality, your body, your occasion, and the feeling you want to carry.",
  },
  {
    number: "02",
    title: "Handcrafted Precision",
    body:
      "Each garment is cut, stitched, and finished with the patience that only a dedicated studio can offer. No shortcuts. No templates.",
  },
  {
    number: "03",
    title: "Moments That Stay",
    body:
      "We design for photographs, for weddings, for days you'll describe for years. The clothes are just how we make those moments visible.",
  },
];

export default function BrandStory() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-bg-primary"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[400px] -translate-y-1/2 bg-accent-primary/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="flex flex-col gap-6 max-w-xl">
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] tracking-tight text-text-primary">
              Designed
              <br />
              <span
                className="italic text-accent-glow"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Around You
              </span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-text-muted font-light leading-relaxed text-[0.95rem] tracking-wide">
              We are not a store. We are a studio. There is a difference — and
              you feel it the moment you walk in.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-20" />

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-transparent">
          {values.map((v, i) => (
            <div
              key={i}
              className="group relative p-8 lg:p-12 hover:bg-bg-card/40 transition-all duration-500 border border-white/[0.04] hover:border-accent-primary/20"
            >
              {/* Number */}
              <span className="block text-[0.65rem] tracking-[0.3em] text-accent-primary/50 uppercase mb-8 font-medium">
                {v.number}
              </span>

              {/* Title */}
              <h3 className="text-[1.15rem] font-light text-text-primary tracking-wide mb-4 group-hover:text-accent-glow transition-colors duration-300">
                {v.title}
              </h3>

              {/* Body */}
              <p className="text-text-muted font-light leading-relaxed text-[0.88rem] tracking-wide">
                {v.body}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-accent-primary/0 via-accent-primary/30 to-accent-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-24 overflow-hidden border-y border-white/[0.05] py-5">
          <div className="marquee-track">
            {[
              "CUSTOM DESIGN",
              "·",
              "RENTAL WEAR",
              "·",
              "PRE-WEDDING",
              "·",
              "MATERNITY GOWNS",
              "·",
              "DESIGNER BLOUSES",
              "·",
              "LUXURY STYLING",
              "·",
              "CUSTOM DESIGN",
              "·",
              "RENTAL WEAR",
              "·",
              "PRE-WEDDING",
              "·",
              "MATERNITY GOWNS",
              "·",
              "DESIGNER BLOUSES",
              "·",
              "LUXURY STYLING",
              "·",
            ].map((item, i) => (
              <span
                key={i}
                className={`px-6 text-[10px] tracking-[0.25em] uppercase whitespace-nowrap ${
                  item === "·"
                    ? "text-accent-primary/40"
                    : "text-text-muted/30"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
