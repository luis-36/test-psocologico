import { createFileRoute, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/ad-slot";
import { AxisMark } from "@/components/marks";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Venn } from "@/components/venn";
import { cn } from "@/lib/cn";
import { completedCount, setName, useProfile } from "@/lib/profile";
import { TESTS } from "@/lib/tests";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const profile = useProfile();
  const done = completedCount(profile);
  const firstOpen = TESTS.find((t) => !profile.results[t.slug]) ?? TESTS[0];

  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:pt-16">
        <p className="reveal text-xs font-medium uppercase tracking-[0.22em] text-subtle">
          Laboratorio de lectura
        </p>
        <h1 className="reveal reveal-2 font-display mt-5 text-display text-foreground">
          Tres lecturas.
          <span className="mt-1 block italic">Un perfil.</span>
        </h1>
        <p className="reveal reveal-3 mt-6 max-w-xl text-lg text-pretty text-muted-foreground">
          Vínculo, mente y esfera social se leen juntas. Empieza por el eje que te llama. El
          retrato se nombra cuando los tres coinciden.
        </p>
        <div className="reveal reveal-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="xl">
            <Link to="/test/$slug" params={{ slug: firstOpen.slug }}>
              {done === 0 ? "Empezar mi perfil" : "Continuar el perfil"}
            </Link>
          </Button>
          {done > 0 ? (
            <Button asChild variant="outline" size="xl">
              <Link to="/perfil">Ver retrato</Link>
            </Button>
          ) : null}
        </div>
        <label className="reveal reveal-5 mt-8 block max-w-sm">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            Cómo te nombramos
          </span>
          <input
            value={profile.name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre, si quieres"
            maxLength={40}
            className="mt-2 h-11 w-full border-0 border-b border-border bg-transparent text-base text-foreground outline-none placeholder:text-subtle focus:border-primary"
          />
        </label>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6" aria-label="Los tres ejes">
        <Venn profile={profile} />
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-3">
        {TESTS.map((test, i) => {
          const result = profile.results[test.slug];
          return (
            <Link
              key={test.slug}
              to={result ? "/lectura/$slug" : "/test/$slug"}
              params={{ slug: test.slug }}
              className={cn(
                "group flex flex-col rounded-xl bg-card p-6 hairline hairline-hover",
                "reveal",
              )}
              style={{ animationDelay: `${220 + i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-4xl text-subtle/80">{test.index}</span>
                <AxisMark slug={test.slug} className="size-10" />
              </div>
              <h2 className="font-display mt-8 text-3xl tracking-tight">{test.name}</h2>
              <p className="mt-1 text-sm uppercase tracking-[0.16em] text-subtle">{test.axis}</p>
              <p className="mt-4 flex-1 text-pretty text-muted-foreground">{test.promise}</p>
              <div className="mt-8 flex items-center justify-between text-sm">
                <span className="text-subtle">{test.questions.length} preguntas · {test.minutes} min</span>
                <span className="font-medium text-primary">
                  {result ? result.trait.name : "Iniciar lectura"}
                </span>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { n: "01", t: "Eliges un eje", d: "El que te tira ahora. No hace falta el orden." },
            { n: "02", t: "Respondes sin pose", d: "Seis escenas. La primera impresión suele ser la cierta." },
            { n: "03", t: "Se nombra el patrón", d: "Una lectura, no un ranking. Luego, el siguiente espejo." },
          ].map((step) => (
            <div key={step.n}>
              <p className="font-display text-sm text-subtle">{step.n}</p>
              <h3 className="font-display mt-2 text-2xl tracking-tight">{step.t}</h3>
              <p className="mt-2 text-pretty text-muted-foreground">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <AdSlot featured />
      </section>
    </Shell>
  );
}
