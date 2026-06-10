"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-40 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-accent-primary text-white hover:bg-accent-secondary active:scale-[0.97] shadow-[0_0_30px_rgba(122,90,166,0.25)] hover:shadow-[0_0_45px_rgba(122,90,166,0.4)]",
      secondary:
        "glass text-text-primary hover:bg-white/[0.06] active:scale-[0.97] border border-white/10 hover:border-accent-primary/40",
      ghost:
        "text-text-muted hover:text-text-primary border-b border-transparent hover:border-accent-primary/50 rounded-none pb-0.5",
      whatsapp:
        "bg-[#25D366] text-white hover:bg-[#22C55E] active:scale-[0.97] shadow-[0_0_30px_rgba(37,211,102,0.2)] hover:shadow-[0_0_45px_rgba(37,211,102,0.35)]",
    };

    const sizes = {
      sm: "text-xs tracking-widest px-5 py-2.5 rounded-full",
      md: "text-[11px] tracking-[0.18em] px-7 py-3.5 rounded-full",
      lg: "text-[12px] tracking-[0.2em] px-9 py-4 rounded-full",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
