import { cn } from "@/lib/cn";
import type { TestSlug } from "@/lib/tests";

type MarkProps = {
  className?: string;
  title?: string;
};

export function TriadMark({ className, title = "Noesis" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("text-foreground", className)}
      aria-hidden={title ? undefined : true}
      role="img"
    >
      {title ? <title>{title}</title> : null}
      <circle cx="18" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="30" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function AxisMark({ slug, className }: { slug: TestSlug; className?: string }) {
  if (slug === "vinculo") {
    return (
      <svg viewBox="0 0 48 48" className={cn("text-foreground", className)} aria-hidden="true">
        <circle cx="18" cy="24" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="30" cy="24" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (slug === "mente") {
    return (
      <svg viewBox="0 0 48 48" className={cn("text-foreground", className)} aria-hidden="true">
        <rect x="12" y="12" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <rect
          x="16.5"
          y="16.5"
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          transform="rotate(45 24 24)"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className={cn("text-foreground", className)} aria-hidden="true">
      <circle cx="24" cy="14" r="3.2" fill="currentColor" />
      <circle cx="14" cy="32" r="3.2" fill="currentColor" />
      <circle cx="34" cy="32" r="3.2" fill="currentColor" />
      <path d="M24 14 L14 32 L34 32 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <TriadMark className="size-7" />
      <span className="font-display text-lg tracking-tight">Noesis</span>
    </span>
  );
}
