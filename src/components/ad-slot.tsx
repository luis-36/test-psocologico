import { cn } from "@/lib/cn";

export function AdSlot({
  className,
  featured = false,
}: {
  className?: string;
  featured?: boolean;
}) {
  return (
    <aside
      aria-label="Publicidad"
      className={cn("ad-slot rounded-xl bg-card hairline", featured && "ad-slot-lg", className)}
    />
  );
}
