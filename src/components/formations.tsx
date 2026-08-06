"use client";

import * as React from "react";
import Link from "next/link";
import { useDisableParallax } from "@/lib/section-motion";
import { cn } from "@/lib/utils";

const FORMATIONS = [
  {
    period: "Depuis le collège",
    title: "Autodidacte",
    place: "Web & développement",
    href: undefined,
    description:
      "Premiers pas dans le code par curiosité, puis pratique continue : apprendre en construisant, casser, recommencer. Bien avant le parcours scolaire.",
  },
  {
    period: "3 ans",
    title: "IUT Paul Sabatier",
    place: "Informatique · Toulouse",
    href: "https://iut.univ-tlse3.fr/",
    description:
      "Bases solides du métier : algo, développement, projets en équipe et culture technique au sein de l'Université Toulouse III — Paul Sabatier.",
  },
  {
    period: "2 ans",
    title: "Ynov Toulouse Campus",
    place: "Expert en développement logiciel · Bac+5",
    href: "https://ynov.com/campus/toulouse/",
    description:
      "Spécialisation full-stack et posture pro : architecture, produit, et aujourd'hui transmission en tant qu'intervenant sur le même campus.",
  },
] as const satisfies ReadonlyArray<{
  period: string;
  title: string;
  place: string;
  href?: string;
  description: string;
}>;

const STEP_COUNT = FORMATIONS.length;
/** Hauteur de scroll par étape (vh) — assez pour lire, sans étirer la fatigue */
const VH_PER_STEP = 68;

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

function useScrollProgress(reducedMotion: boolean) {
  const ref = React.useRef<HTMLElement>(null);
  const [liveProgress, setLiveProgress] = React.useState(0);
  const frame = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (reducedMotion) return;

    const update = () => {
      frame.current = null;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = Math.max(el.offsetHeight - window.innerHeight, 1);
      setLiveProgress(clamp(-rect.top / scrollable));
    };

    const onScroll = () => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [reducedMotion]);

  return { ref, progress: reducedMotion ? 0 : liveProgress };
}

function FormationCard({
  item,
  index,
}: {
  item: (typeof FORMATIONS)[number];
  index: number;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
        {String(index + 1).padStart(2, "0")} · {item.period}
      </p>
      <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {item.href ? (
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
          >
            {item.title}
            <span className="sr-only"> (ouvre un nouvel onglet)</span>
          </Link>
        ) : (
          item.title
        )}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground sm:text-base">
        {item.place}
      </p>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {item.description}
      </p>
    </div>
  );
}

function StaticTimeline() {
  return (
    <ol className="relative mt-14 space-y-0">
      <div
        className="absolute top-3 bottom-3 left-2.5 w-px bg-border/80 sm:left-3"
        aria-hidden="true"
      />
      {FORMATIONS.map((item) => (
        <li
          key={item.title}
          className="relative grid gap-4 py-8 pl-10 first:pt-0 last:pb-0 sm:pl-12 lg:grid-cols-[8.5rem_1fr] lg:gap-10 lg:pl-14"
        >
          <span
            className="absolute top-8 left-0 flex size-6 items-center justify-center sm:size-7"
            aria-hidden="true"
          >
            <span className="size-2.5 rounded-full bg-primary ring-4 ring-background" />
          </span>
          <p className="pt-0.5 text-sm font-medium tracking-wide text-primary uppercase lg:pt-1">
            {item.period}
          </p>
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
                >
                  {item.title}
                  <span className="sr-only"> (ouvre un nouvel onglet)</span>
                </Link>
              ) : (
                item.title
              )}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
              {item.place}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function stepStyle(progress: number, index: number) {
  // progress 0→1 balaye les étapes ; chaque étape centre sa présence sur i/(n-1)
  const position = progress * (STEP_COUNT - 1);
  const local = position - index;

  // Entrée depuis le bas, sortie vers le haut en s'effaçant
  const enter = clamp(1 + local * 1.35);
  const exit = clamp(1 - local * 1.15);
  const visibility = Math.min(enter, exit);

  const y =
    local < 0
      ? (1 - enter) * 72 // monte pour apparaître
      : local * -48; // part vers le haut en sortant
  const scale = local > 0 ? 1 - local * 0.1 : 0.96 + visibility * 0.04;
  const blur = local > 0.15 ? Math.min((local - 0.15) * 6, 4) : 0;

  return {
    opacity: visibility,
    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
    filter: blur > 0.1 ? `blur(${blur}px)` : undefined,
    zIndex: Math.round(visibility * 10) + index,
    pointerEvents: visibility > 0.55 ? ("auto" as const) : ("none" as const),
  };
}

export function Formations({ className }: { className?: string }) {
  const disableParallax = useDisableParallax();
  const { ref, progress } = useScrollProgress(disableParallax);
  const activeIndex = Math.min(
    STEP_COUNT - 1,
    Math.round(progress * (STEP_COUNT - 1)),
  );

  if (disableParallax) {
    return (
      <section
        id="formations"
        aria-labelledby="formations-title"
        className={cn(
          "relative scroll-mt-24 overflow-hidden border-t border-border/60",
          className,
        )}
      >
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <Header />
          <StaticTimeline />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      id="formations"
      aria-labelledby="formations-title"
      className={cn(
        "relative scroll-mt-24 border-t border-border/60",
        className,
      )}
      style={{ height: `${STEP_COUNT * VH_PER_STEP}vh` }}
    >
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-95 dark:opacity-45"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 15% 20%, color-mix(in oklch, var(--accent) 32%, transparent), transparent 65%), radial-gradient(ellipse 50% 40% at 90% 75%, color-mix(in oklch, var(--primary) 24%, transparent), transparent 70%)",
            }}
          />
          <div
            className="absolute h-64 w-64 rounded-full bg-primary/18 blur-3xl will-change-transform dark:bg-primary/20"
            style={{
              left: `${12 + progress * 55}%`,
              top: `${28 - progress * 12}%`,
              transform: `translate3d(0, ${progress * 40}px, 0)`,
            }}
          />
          {/* Silhouettes — même langage que les autres sections */}
          <svg
            className="absolute top-[18%] right-[8%] w-16 text-primary/14 will-change-transform sm:w-20 dark:text-foreground/12"
            viewBox="0 0 80 80"
            fill="currentColor"
            style={{
              transform: `translate3d(0, ${(progress - 0.5) * -36}px, 0) rotate(${-6 + progress * 10}deg)`,
            }}
            aria-hidden="true"
          >
            <path d="M16 28 H64 L70 34 V68 H10 V34 Z" opacity="0.55" />
            <path d="M28 28 V20 H52 V28" opacity="0.7" />
            <rect
              x="30"
              y="42"
              width="20"
              height="4"
              rx="1"
              className="fill-background"
              opacity="0.4"
            />
          </svg>
          <svg
            className="absolute bottom-[16%] left-[10%] w-12 text-accent/30 will-change-transform sm:w-14 dark:text-accent/22"
            viewBox="0 0 64 64"
            fill="currentColor"
            style={{
              transform: `translate3d(0, ${(progress - 0.5) * 48}px, 0)`,
            }}
            aria-hidden="true"
          >
            <polygon points="32,6 58,18 32,30 6,18" opacity="0.7" />
            <path
              d="M12 22 V42 C12 50 32 56 32 56 C32 56 52 50 52 42 V22"
              opacity="0.45"
            />
          </svg>
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col px-6 pt-12 pb-8 sm:px-10 sm:pt-16 sm:pb-10 lg:px-16 lg:pt-20 lg:pb-12">
          <Header />

          <div className="relative mt-8 flex min-h-0 flex-1 gap-8 sm:mt-10 lg:mt-14 lg:gap-14">
            {/* Rail de progression */}
            <div
              className="relative hidden w-px shrink-0 bg-border/70 sm:block"
              aria-hidden="true"
            >
              <div
                className="absolute inset-x-0 top-0 origin-top bg-primary transition-none"
                style={{ height: `${progress * 100}%` }}
              />
              {FORMATIONS.map((item, index) => {
                const top = (index / (STEP_COUNT - 1)) * 100;
                const lit = progress >= index / (STEP_COUNT - 1) - 0.02;
                return (
                  <span
                    key={item.title}
                    className={cn(
                      "absolute left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-background transition-colors",
                      lit ? "bg-primary" : "bg-border",
                    )}
                    style={{ top: `${top}%` }}
                  />
                );
              })}
            </div>

            <div className="relative min-h-0 flex-1">
              {FORMATIONS.map((item, index) => (
                <div
                  key={item.title}
                  className="absolute inset-0 flex items-center will-change-transform"
                  style={stepStyle(progress, index)}
                  aria-hidden={activeIndex !== index}
                  inert={activeIndex !== index}
                >
                  <FormationCard item={item} index={index} />
                </div>
              ))}
            </div>
          </div>

          <p
            className="relative mt-auto pt-6 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase"
            aria-live="polite"
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(STEP_COUNT).padStart(2, "0")} —{" "}
            {FORMATIONS[activeIndex].title}
          </p>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="relative max-w-2xl shrink-0">
      <p className="mb-4 text-sm font-medium tracking-[0.22em] text-primary uppercase">
        Formations
      </p>
      <h2
        id="formations-title"
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        Un parcours ancré dans la pratique
      </h2>
      <p className="mt-4 text-sm text-muted-foreground sm:text-base">
        Autodidacte d&apos;abord, Bac+5 ensuite.
      </p>
    </div>
  );
}
