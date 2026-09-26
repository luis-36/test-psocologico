import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";
import type { Profile } from "@/lib/profile";
import { TESTS, type TestSlug } from "@/lib/tests";

const nodes: { slug: TestSlug; cx: number; cy: number; labelX: number; labelY: number }[] = [
  { slug: "vinculo", cx: 86, cy: 78, labelX: 40, labelY: 28 },
  { slug: "mente", cx: 154, cy: 78, labelX: 200, labelY: 28 },
  { slug: "esfera", cx: 120, cy: 136, labelX: 120, labelY: 198 },
];

export function Venn({ profile }: { profile: Profile }) {
  return (
    <div className="mx-auto w-full max-w-md">
      <svg viewBox="0 0 240 220" className="w-full text-foreground" role="img" aria-label="Tres ejes del perfil">
        <title>Vínculo, mente y esfera se cruzan en un perfil</title>
        {nodes.map((n) => {
          const on = Boolean(profile.results[n.slug]);
          return (
            <circle
              key={n.slug}
              cx={n.cx}
              cy={n.cy}
              r="58"
              fill={on ? "currentColor" : "none"}
              fillOpacity={on ? 0.1 : 0}
              stroke="currentColor"
              strokeWidth={on ? 1.6 : 1.2}
              strokeOpacity={on ? 0.9 : 0.45}
            />
          );
        })}
        {nodes.map((n) => {
          const test = TESTS.find((t) => t.slug === n.slug);
          const on = Boolean(profile.results[n.slug]);
          return (
            <text
              key={`${n.slug}-label`}
              x={n.labelX}
              y={n.labelY}
              textAnchor="middle"
              className="fill-current"
              fontSize="11"
              fontFamily="var(--font-sans)"
              letterSpacing="0.16em"
              fillOpacity={on ? 1 : 0.55}
            >
              {test?.name.toUpperCase()}
            </text>
          );
        })}
        <text
          x="120"
          y="102"
          textAnchor="middle"
          className="fill-current"
          fontSize="10"
          fontFamily="var(--font-sans)"
          letterSpacing="0.22em"
          fillOpacity="0.55"
        >
          PERFIL
        </text>
      </svg>
      <div className="sr-only">
        {TESTS.map((t) => (
          <Link key={t.slug} to="/test/$slug" params={{ slug: t.slug }}>
            {t.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function AxisDot({ on, className }: { on: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block size-2 rounded-full",
        on ? "bg-primary" : "bg-border",
        className,
      )}
      aria-hidden="true"
    />
  );
}
