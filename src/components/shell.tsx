import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Wordmark } from "@/components/marks";
import { completedCount, useProfile } from "@/lib/profile";
import { TESTS } from "@/lib/tests";

export function Shell({ children }: { children: ReactNode }) {
  const profile = useProfile();
  const done = completedCount(profile);

  return (
    <div className="paper-wash min-h-dvh">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2"
      >
        Saltar al contenido
      </a>
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="text-foreground" aria-label="Noesis, inicio">
            <Wordmark />
          </Link>
          <Link
            to="/perfil"
            className="flex h-11 items-center gap-3 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            <span className="hidden sm:inline">Perfil</span>
            <span className="font-display tabular-nums text-foreground">
              {done} / {TESTS.length}
            </span>
          </Link>
        </div>
      </header>
      <main id="contenido">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-foreground">Noesis</p>
          <p className="max-w-xl text-pretty">
            Lecturas de estilo en tres ejes. No sustituyen evaluación clínica ni profesional.
            Esta sesión vive solo en tu pestaña: al cerrarla, se borra.
          </p>
        </div>
      </footer>
    </div>
  );
}
