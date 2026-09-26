import { createFileRoute, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/ad-slot";
import { AxisMark } from "@/components/marks";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { completedCount, useProfile } from "@/lib/profile";
import { getTest, isTestSlug, TESTS } from "@/lib/tests";

export const Route = createFileRoute("/lectura/$slug")({ component: LecturaPage });

function LecturaPage() {
  const { slug } = Route.useParams();
  const profile = useProfile();
  const test = isTestSlug(slug) ? getTest(slug) : undefined;
  const result = test ? profile.results[test.slug] : undefined;

  if (!test) {
    return (
      <Shell>
        <div className="mx-auto max-w-lg px-5 py-24 text-center">
          <h1 className="font-display text-title">Esa lectura no existe.</h1>
          <Button asChild className="mt-8">
            <Link to="/">Volver al laboratorio</Link>
          </Button>
        </div>
      </Shell>
    );
  }

  if (!result) {
    return (
      <Shell>
        <div className="mx-auto max-w-lg px-5 py-24">
          <h1 className="font-display text-title">Aún no hay lectura de {test.name}.</h1>
          <p className="mt-3 text-muted-foreground">Seis preguntas. El patrón aparece al cerrar.</p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/test/$slug" params={{ slug: test.slug }}>
              Empezar {test.name}
            </Link>
          </Button>
        </div>
      </Shell>
    );
  }

  const done = completedCount(profile);
  const next = TESTS.find((t) => !profile.results[t.slug]);
  const who = profile.name ? `${profile.name}, ` : "";

  return (
    <Shell>
      <article className="mx-auto max-w-2xl px-5 pb-24 pt-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-subtle">
          {test.index} · {test.name} · {test.axis}
        </p>
        <p className="mt-6 text-sm text-muted-foreground">{who}tu patrón se llama</p>
        <h1 className="font-display mt-2 text-display italic">{result.trait.name}</h1>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-subtle">{result.trait.kicker}</p>

        {test.slug === "mente" ? (
          <p className="font-display mt-8 text-5xl tabular-nums tracking-tight">
            {result.score}
            <span className="ml-2 text-lg text-subtle">estimación</span>
          </p>
        ) : null}

        <p className="mt-8 text-lg text-pretty text-foreground/90">{result.trait.portrait}</p>

        <ul className="mt-10 space-y-4">
          {result.trait.lines.map((line) => (
            <li key={line} className="border-t border-border pt-4 text-pretty text-muted-foreground">
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex items-center gap-3">
          <AxisMark slug={test.slug} className="size-8" />
          <p className="text-sm text-muted-foreground">
            Perfil {done} de {TESTS.length}. {next ? "El retrato pide otro eje." : "Los tres ejes están nombrados."}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {next ? (
            <Button asChild size="xl">
              <Link to="/test/$slug" params={{ slug: next.slug }}>
                Seguir con {next.name}
              </Link>
            </Button>
          ) : (
            <Button asChild size="xl">
              <Link to="/perfil">Abrir el retrato completo</Link>
            </Button>
          )}
          <Button asChild variant="outline" size="xl">
            <Link to="/">Los tres ejes</Link>
          </Button>
        </div>

        <div className="mt-16">
          <AdSlot featured />
        </div>
      </article>
    </Shell>
  );
}
