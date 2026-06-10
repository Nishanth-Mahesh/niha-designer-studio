"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export default function StickyBooking() {
  return (
    <>
      {/* Mobile bottom sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="glass border-t border-white/[0.06] px-4 py-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full bg-accent-primary text-white text-[11px] tracking-[0.2em] uppercase font-medium py-3.5 rounded-xl shadow-[0_0_30px_rgba(122,90,166,0.3)] active:scale-[0.98] transition-transform"
          >
            <MessageCircle size={15} />
            Book a Consultation
          </a>
        </div>
      </div>

      {/* Desktop floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-40 hidden md:flex w-13 h-13 items-center justify-center bg-[#25D366] rounded-full shadow-[0_4px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_45px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300"
        style={{ width: 52, height: 52 }}
      >
        <MessageCircle size={22} className="text-white" />
      </a>
    </>
  );
}
