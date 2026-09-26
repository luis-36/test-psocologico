import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/ad-slot";
import { AxisMark } from "@/components/marks";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { saveResult, setName, useProfile } from "@/lib/profile";
import { getTest, isTestSlug, scoreAnswers, type TestDef } from "@/lib/tests";

export const Route = createFileRoute("/test/$slug")({ component: TestPage });

type Phase = "intro" | "ask" | "compose";

function TestPage() {
  const { slug } = Route.useParams();
  const test = isTestSlug(slug) ? getTest(slug) : undefined;

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

  return <LiveTest test={test} />;
}

function LiveTest({ test }: { test: TestDef }) {
  const navigate = useNavigate();
  const profile = useProfile();
  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<number[]>([]);
  const [chosen, setChosen] = useState<number | null>(null);

  const question = test.questions[step];
  const progress = phase === "ask" ? (step + (chosen !== null ? 1 : 0)) / test.questions.length : 0;

  const goNext = () => {
    if (chosen === null) return;
    const nextPicks = [...picks];
    nextPicks[step] = chosen;
    setPicks(nextPicks);
    setChosen(null);
    if (step + 1 >= test.questions.length) {
      const scored = scoreAnswers(test, nextPicks);
      saveResult({
        slug: test.slug,
        trait: scored.trait,
        score: scored.score,
        answers: nextPicks,
        completedAt: Date.now(),
      });
      setPhase("compose");
      return;
    }
    setStep(step + 1);
  };

  const goBack = () => {
    if (step === 0) {
      setPhase("intro");
      return;
    }
    setChosen(picks[step - 1] ?? null);
    setStep(step - 1);
  };

  return (
    <Shell>
      <div className="mx-auto max-w-2xl px-5 pb-24 pt-10 sm:pt-14">
        <div className="mb-10 h-px overflow-hidden bg-border">
          <div
            className="h-full origin-left bg-primary transition-transform duration-500 ease-out"
            style={{ transform: `scaleX(${phase === "compose" ? 1 : progress})` }}
          />
        </div>

        {phase === "intro" ? (
          <div>
            <div className="flex items-center gap-3 text-subtle">
              <AxisMark slug={test.slug} className="size-9" />
              <span className="text-xs font-medium uppercase tracking-[0.2em]">
                {test.index} · {test.axis}
              </span>
            </div>
            <h1 className="font-display mt-6 text-display">{test.name}</h1>
            <p className="mt-5 max-w-xl text-lg text-pretty text-muted-foreground">{test.intro}</p>
            <p className="mt-4 text-sm text-subtle">
              {test.questions.length} preguntas · {test.minutes} minutos · sin registro
            </p>
            {!profile.name ? (
              <label className="mt-8 block max-w-sm">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
                  Cómo te nombramos
                </span>
                <input
                  defaultValue={profile.name}
                  onBlur={(e) => setName(e.target.value)}
                  placeholder="Tu nombre, si quieres"
                  maxLength={40}
                  className="mt-2 h-11 w-full border-0 border-b border-border bg-transparent text-base outline-none placeholder:text-subtle focus:border-primary"
                />
              </label>
            ) : (
              <p className="mt-8 text-sm text-muted-foreground">
                Lectura para <span className="text-foreground">{profile.name}</span>
              </p>
            )}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="xl" onClick={() => setPhase("ask")}>
                Empezar la lectura
              </Button>
              <Button asChild variant="ghost" size="xl">
                <Link to="/">Otra vez no</Link>
              </Button>
            </div>
          </div>
        ) : null}

        {phase === "ask" && question ? (
          <div key={step}>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">
              {String(step + 1).padStart(2, "0")} / {String(test.questions.length).padStart(2, "0")}
              {question.hint ? ` · ${question.hint}` : ""}
            </p>
            <h1 className="font-display mt-4 text-title">{question.prompt}</h1>
            <ul className="mt-8 space-y-3">
              {question.options.map((opt, i) => {
                const active = chosen === i;
                return (
                  <li key={opt.label}>
                    <button
                      type="button"
                      onClick={() => setChosen(i)}
                      className={cn(
                        "flex min-h-14 w-full items-center gap-4 rounded-lg px-4 py-3 text-left text-base transition-[background-color,color,box-shadow] duration-150",
                        active
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-foreground hairline hairline-hover",
                      )}
                    >
                      <span
                        className={cn(
                          "font-display w-6 shrink-0 text-sm",
                          active ? "text-primary-foreground/70" : "text-subtle",
                        )}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-pretty">{opt.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 flex items-center justify-between gap-3">
              <Button variant="ghost" onClick={goBack}>
                Atrás
              </Button>
              <Button size="lg" disabled={chosen === null} onClick={goNext}>
                {step + 1 === test.questions.length ? "Cerrar la lectura" : "Siguiente"}
              </Button>
            </div>
          </div>
        ) : null}

        {phase === "compose" ? <Compose slug={test.slug} name={profile.name} navigate={navigate} /> : null}
      </div>
    </Shell>
  );
}

function Compose({
  slug,
  name,
  navigate,
}: {
  slug: string;
  name: string;
  navigate: ReturnType<typeof useNavigate>;
}) {
  const lines = useMemo(
    () => [
      "Ordenando respuestas",
      "Contrastando con el modelo",
      "Nombrando el patrón",
      "Preparando tu lectura",
    ],
    [],
  );
  const [i, setI] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setI(1), 700),
      window.setTimeout(() => setI(2), 1400),
      window.setTimeout(() => setI(3), 2100),
      window.setTimeout(() => setReady(true), 2600),
    ];
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">Cierre</p>
      <h1 className="font-display mt-4 text-title">
        {name ? `${name}, tu lectura está lista.` : "Tu lectura está lista."}
      </h1>
      <p className={cn("mt-4 text-muted-foreground", !ready && "shimmer")}>{lines[i]}</p>
      <div className="mt-3 h-px overflow-hidden bg-border">
        <div className="h-full origin-left bg-primary" style={{ animation: "meter 2.6s ease-out forwards" }} />
      </div>

      {ready ? (
        <div className="mt-10 space-y-6">
          <AdSlot featured />
          <Button
            size="xl"
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => navigate({ to: "/lectura/$slug", params: { slug } })}
          >
            Ver mi lectura
          </Button>
        </div>
      ) : null}
    </div>
  );
}
