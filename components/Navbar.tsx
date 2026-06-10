"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Collections", href: "#collections" },
  { label: "Services", href: "#process" },
  { label: "Gallery", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex flex-col leading-none group"
          >
            <span className="text-[11px] tracking-[0.35em] uppercase text-accent-glow font-medium transition-all duration-300 group-hover:text-accent-secondary">
              NIHA
            </span>
            <span className="text-[15px] tracking-[0.2em] uppercase text-text-primary font-light">
              DESIGNER STUDIO
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-[11px] tracking-[0.15em] uppercase text-text-muted hover:text-text-primary transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              href={WHATSAPP_URL}
              external
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center text-text-primary"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col transition-all duration-500",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-2xl" />

        {/* Content */}
        <div className="relative flex flex-col h-full px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex flex-col leading-none">
              <span className="text-[11px] tracking-[0.35em] uppercase text-accent-glow font-medium">
                NIHA
              </span>
              <span className="text-[15px] tracking-[0.2em] uppercase text-text-primary font-light">
                DESIGNER STUDIO
              </span>
            </div>
            <button
              className="w-9 h-9 flex items-center justify-center text-text-primary"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-2 flex-1">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "w-full text-left py-4 border-b border-white/[0.06]",
                    "text-3xl font-light text-text-muted hover:text-text-primary transition-all duration-300",
                    "hover:pl-3",
                    menuOpen ? "animate-fade-up" : ""
                  )}
                  style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Bottom CTA */}
          <div className="pt-8">
            <Button
              variant="primary"
              size="lg"
              href={WHATSAPP_URL}
              external
              className="w-full justify-center"
            >
              Book a Consultation
            </Button>
            <p className="text-center text-[11px] tracking-widest text-text-muted mt-4 uppercase">
              @niha_designer_studioo
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
