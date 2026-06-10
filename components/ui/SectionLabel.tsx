import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-accent-glow font-medium",
        className
      )}
    >
      <span className="w-6 h-px bg-gradient-to-r from-accent-primary to-transparent" />
      {children}
      <span className="w-6 h-px bg-gradient-to-l from-accent-primary to-transparent" />
    </span>
  );
}
