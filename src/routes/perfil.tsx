import { createFileRoute, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/ad-slot";
import { AxisMark } from "@/components/marks";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Venn } from "@/components/venn";
import { completedCount, useProfile } from "@/lib/profile";
import { architecture, TESTS } from "@/lib/tests";

export const Route = createFileRoute("/perfil")({ component: PerfilPage });

function PerfilPage() {
  const profile = useProfile();
  const done = completedCount(profile);
  const arch = architecture({
    vinculo: profile.results.vinculo?.trait.name,
    mente: profile.results.mente?.trait.name,
    esfera: profile.results.esfera?.trait.name,
  });
  const who = profile.name || "Tu";

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-subtle">Retrato</p>
        <h1 className="font-display mt-4 text-display">
          {done === 3 ? `${who === "Tu" ? "Tu" : who + ","} arquitectura.` : `${done} de 3 ejes.`}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-pretty text-muted-foreground">
          {done === 0
            ? "Aún no hay lectura. Elige el eje que te tira."
            : done < 3
              ? "El perfil se nombra cuando los tres espejos coinciden. Te falta poco — y es la parte que cambia el retrato."
              : "Tres lecturas, un nombre compuesto. No es un ranking. Es cómo te unes, cómo razonas y cómo te leen."}
        </p>

        {arch ? (
          <p className="font-display mt-8 text-title italic text-pretty">{arch}</p>
        ) : null}

        <div className="mt-10">
          <Venn profile={profile} />
        </div>

        <ul className="mt-4 space-y-4">
          {TESTS.map((test) => {
            const result = profile.results[test.slug];
            return (
              <li key={test.slug}>
                <Link
                  to={result ? "/lectura/$slug" : "/test/$slug"}
                  params={{ slug: test.slug }}
                  className="flex items-center gap-4 rounded-xl bg-card p-5 hairline hairline-hover"
                >
                  <AxisMark slug={test.slug} className="size-10 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.16em] text-subtle">{test.name}</p>
                    <p className="font-display truncate text-2xl tracking-tight">
                      {result ? result.trait.name : "Sin lectura"}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {result ? "Abrir" : "Iniciar"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {done === 3 ? (
          <div className="mt-12 space-y-4 text-pretty text-muted-foreground">
            <p>
              {profile.results.vinculo?.trait.name} en el afecto, {profile.results.mente?.trait.name.toLowerCase()} en
              el criterio, {profile.results.esfera?.trait.name.toLowerCase()} en la sala. El cruce no es un promedio:
              es una forma de estar.
            </p>
            <p>
              Guarda el nombre. Los tests cambian si los repites en otro día — el patrón, casi nunca.
            </p>
          </div>
        ) : (
          <div className="mt-10">
            <Button asChild size="xl">
              <Link
                to="/test/$slug"
                params={{ slug: TESTS.find((t) => !profile.results[t.slug])?.slug ?? "vinculo" }}
              >
                Completar el siguiente eje
              </Link>
            </Button>
          </div>
        )}

        <div className="mt-16">
          <AdSlot featured />
        </div>
      </article>
    </Shell>
  );
}
