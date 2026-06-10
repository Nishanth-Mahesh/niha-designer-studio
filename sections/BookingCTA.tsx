"use client";

import Button from "@/components/ui/Button";
import { MessageCircle, CalendarDays } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export default function BookingCTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-bg-primary">
      {/* Large glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-accent-primary/[0.07] blur-[120px] rounded-full" />
      </div>

      {/* Border top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-accent-glow font-medium mb-8">
          <span className="w-8 h-px bg-accent-primary/50" />
          Ready When You Are
          <span className="w-8 h-px bg-accent-primary/50" />
        </span>

        {/* Headline */}
        <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1] tracking-tight text-text-primary mb-6">
          Your Perfect Look
          <br />
          <span
            className="italic text-accent-glow"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Starts Here.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-text-muted font-light text-[0.95rem] leading-relaxed tracking-wide max-w-sm mx-auto mb-12">
          One consultation. That&apos;s all it takes to begin creating
          something extraordinary.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <CalendarDays size={15} />
            Book Appointment
          </Button>
          <Button
            variant="whatsapp"
            size="lg"
            href={WHATSAPP_URL}
            external
          >
            <MessageCircle size={15} />
            Message on WhatsApp
          </Button>
        </div>

        {/* Note */}
        <p className="text-[10px] tracking-widest uppercase text-text-muted/30 mt-10">
          Response within 2 hours · Mon–Sat, 10am–7pm
        </p>
      </div>
    </section>
  );
}
