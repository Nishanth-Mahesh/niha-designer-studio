"use client";

import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    step: "01",
    title: "Consultation",
    body: "We begin with a conversation. What occasion, what feeling, what vision — we listen before we design.",
    time: "Day 1",
  },
  {
    step: "02",
    title: "Concept",
    body: "Our designer sketches initial ideas — fabrics, silhouettes, embellishments — tailored entirely to you.",
    time: "Day 2–3",
  },
  {
    step: "03",
    title: "Measurements",
    body: "Precise measurements taken at the studio to ensure the final piece fits you perfectly.",
    time: "Day 3–4",
  },
  {
    step: "04",
    title: "Design & Craft",
    body: "Fabric sourced, patterns cut, stitching begins. Every detail checked at each stage.",
    time: "Week 1–2",
  },
  {
    step: "05",
    title: "Fitting",
    body: "You try the garment. We adjust. Sometimes twice. We don't proceed until it feels exactly right.",
    time: "Week 2–3",
  },
  {
    step: "06",
    title: "Delivery",
    body: "Your look is complete. Packaged with care, delivered with pride.",
    time: "Week 3–4",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding bg-bg-secondary relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 bg-accent-primary/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-20">
          <div className="flex flex-col gap-5 max-w-lg">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-[clamp(2.2rem,5.5vw,4rem)] font-light leading-[1.05] tracking-tight text-text-primary">
              From Vision
              <br />
              <span
                className="italic text-accent-glow"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                To Final Look
              </span>
            </h2>
          </div>
          <p className="text-text-muted text-[0.88rem] font-light leading-relaxed max-w-xs tracking-wide lg:mb-2">
            Six thoughtful steps between the idea in your mind and the look on
            your back.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative p-8 lg:p-10 bg-bg-secondary hover:bg-bg-card transition-all duration-400"
            >
              {/* Step number */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-[2.5rem] font-light text-white/[0.06] leading-none tracking-tighter group-hover:text-accent-primary/20 transition-colors duration-400">
                  {step.step}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-text-muted/30 mt-2">
                  {step.time}
                </span>
              </div>

              {/* Dot + line */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary/60 group-hover:bg-accent-primary transition-colors duration-300" />
                <div className="flex-1 h-px bg-white/[0.05]" />
              </div>

              {/* Title */}
              <h3 className="text-[1rem] font-medium text-text-primary tracking-wide mb-3 group-hover:text-accent-glow transition-colors duration-300">
                {step.title}
              </h3>

              {/* Body */}
              <p className="text-text-muted text-[0.83rem] font-light leading-relaxed tracking-wide">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
