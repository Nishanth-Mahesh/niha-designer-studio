import { Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Collections", href: "#collections" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/[0.05] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col leading-none">
              <span className="text-[10px] tracking-[0.35em] uppercase text-accent-glow font-medium">
                NIHA
              </span>
              <span className="text-[14px] tracking-[0.2em] uppercase text-text-primary font-light">
                DESIGNER STUDIO
              </span>
            </div>
            <p className="text-text-muted text-[0.8rem] font-light leading-relaxed tracking-wide max-w-[180px]">
              Premium fashion crafted for moments that deserve to be remembered.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <span className="text-[9px] tracking-[0.3em] uppercase text-text-muted/40 mb-2">
              Navigate
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted text-[0.82rem] tracking-wide hover:text-text-primary transition-colors duration-300 w-fit relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-primary/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-3">
            <span className="text-[9px] tracking-[0.3em] uppercase text-text-muted/40 mb-2">
              Connect
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-muted text-[0.82rem] tracking-wide hover:text-text-primary transition-colors duration-300 group"
            >
              <Instagram size={13} className="group-hover:text-accent-glow transition-colors duration-300" />
              @niha_designer_studioo
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-muted text-[0.82rem] tracking-wide hover:text-text-primary transition-colors duration-300 group"
            >
              <MessageCircle size={13} className="group-hover:text-[#25D366] transition-colors duration-300" />
              +91 99999 99999
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-[9px] tracking-[0.25em] uppercase text-text-muted/30">
            Designed To Be Remembered.
          </p>
          <p className="text-[9px] tracking-[0.2em] uppercase text-text-muted/25">
            © {new Date().getFullYear()} NIHA DESIGNER STUDIO — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
