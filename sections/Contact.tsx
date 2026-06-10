"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { Send, MapPin, Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/utils";

const services = [
  "Custom Clothing",
  "Rental Wear",
  "Designer Blouse",
  "Pre-Wedding Styling",
  "Maternity Gown",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const text = encodeURIComponent(
      `Hi! I'd like to book an appointment at NIHA DESIGNER STUDIO.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Date: ${form.date}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-bg-card border border-white/[0.08] rounded-xl px-4 py-3.5 text-text-primary text-[0.88rem] tracking-wide placeholder:text-text-muted/30 focus:outline-none focus:border-accent-primary/40 focus:bg-bg-card/70 transition-all duration-300";

  return (
    <section id="contact" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-accent-primary/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <SectionLabel>Book a Slot</SectionLabel>
              <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-light leading-[1.05] tracking-tight text-text-primary">
                Reserve
                <br />
                <span
                  className="italic text-accent-glow"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Your Session
                </span>
              </h2>
              <p className="text-text-muted text-[0.88rem] font-light leading-relaxed tracking-wide max-w-xs">
                Fill the form and we&apos;ll reach out within 2 hours to
                confirm your appointment.
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-4 pt-4 border-t border-white/[0.05]">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-bg-card border border-white/[0.06] flex items-center justify-center group-hover:border-[#25D366]/30 transition-all duration-300">
                  <MessageCircle size={15} className="text-text-muted group-hover:text-[#25D366] transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted/40 font-light">WhatsApp</p>
                  <p className="text-text-primary text-[0.88rem] tracking-wide">+91 99999 99999</p>
                </div>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-bg-card border border-white/[0.06] flex items-center justify-center group-hover:border-accent-primary/30 transition-all duration-300">
                  <Instagram size={15} className="text-text-muted group-hover:text-accent-glow transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted/40 font-light">Instagram</p>
                  <p className="text-text-primary text-[0.88rem] tracking-wide">@niha_designer_studioo</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-bg-card border border-white/[0.06] flex items-center justify-center">
                  <MapPin size={15} className="text-text-muted" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted/40 font-light">Studio</p>
                  <p className="text-text-primary text-[0.88rem] tracking-wide">By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass rounded-2xl p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-14 h-14 rounded-full border border-accent-primary/40 flex items-center justify-center">
                  <Send size={20} className="text-accent-glow" />
                </div>
                <h3 className="text-text-primary text-[1.1rem] font-light tracking-wide">
                  Redirecting to WhatsApp
                </h3>
                <p className="text-text-muted text-[0.85rem] max-w-xs">
                  Complete your booking on WhatsApp. We&apos;ll confirm within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] tracking-[0.2em] uppercase text-accent-primary/60 hover:text-accent-primary mt-4 transition-colors"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] tracking-[0.25em] uppercase text-text-muted/50">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] tracking-[0.25em] uppercase text-text-muted/50">Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[0.25em] uppercase text-text-muted/50">Service</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled className="bg-bg-card">Select service</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-bg-card">{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[0.25em] uppercase text-text-muted/50">Preferred Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[0.25em] uppercase text-text-muted/50">Message</label>
                  <textarea
                    placeholder="Tell us about your vision..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button variant="primary" size="md" type="submit" className="mt-2 justify-center">
                  <Send size={13} />
                  Reserve My Slot
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
