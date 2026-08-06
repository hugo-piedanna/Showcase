"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useDisableParallax, useReducedMotion } from "@/lib/section-motion";
import { cn } from "@/lib/utils";

const TECHS = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "MongoDB",
  "Keycloak",
  "Docker",
  "Socket.io",
  "Redux",
  "Stripe",
  "Tailwind CSS",
] as const;

const SLIDES = [
  {
    src: "/chariot/character_sheet.webp",
    alt: "Fiche de personnage Chariot",
    label: "Personnages",
  },
  {
    src: "/chariot/session_hub.webp",
    alt: "Session de jeu en temps réel Chariot",
    label: "Sessions",
  },
  {
    src: "/chariot/battle.webp",
    alt: "Combat en temps réel Chariot",
    label: "Combats",
  },
] as const;

function useSectionParallax(reducedMotion: boolean) {
  const ref = React.useRef<HTMLElement>(null);
  const [liveProgress, setLiveProgress] = React.useState(0);
  const [liveFlyingRight, setLiveFlyingRight] = React.useState(true);
  const frame = React.useRef<number | null>(null);
  const prevProgress = React.useRef(0);

  React.useEffect(() => {
    if (reducedMotion) return;

    const update = () => {
      frame.current = null;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const view = Math.max(window.innerHeight, 1);
      const raw = (view - rect.top) / (view + rect.height);
      const next = Math.min(1, Math.max(0, raw));
      const delta = next - prevProgress.current;
      if (Math.abs(delta) > 0.002) {
        setLiveFlyingRight(delta > 0);
        prevProgress.current = next;
      }
      setLiveProgress(next);
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

  return {
    ref,
    progress: reducedMotion ? 0.35 : liveProgress,
    flyingRight: reducedMotion ? true : liveFlyingRight,
  };
}

function DragonSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 280 120"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* queue */}
      <polygon points="8,72 36,64 42,78 22,86" />
      <polygon points="0,58 18,64 28,54 8,48" />
      {/* corps */}
      <polygon points="40,70 90,52 150,58 170,78 120,96 70,92" />
      {/* cou + tête */}
      <polygon points="148,56 188,42 210,48 198,62 168,68" />
      <polygon points="208,40 232,34 248,46 230,52 214,50" />
      {/* cornes */}
      <polygon points="220,34 228,18 236,34" />
      <polygon points="232,36 244,22 248,38" />
      {/* aile haute */}
      <polygon points="88,52 70,8 118,18 132,48" />
      <polygon points="118,18 148,4 156,28 132,48" />
      {/* aile basse */}
      <polygon points="96,78 78,108 124,96 128,78" />
      {/* pattes */}
      <polygon points="108,92 102,112 116,112 118,94" />
      <polygon points="140,90 136,110 150,110 150,92" />
    </svg>
  );
}

function DiceSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" />
    </svg>
  );
}

function ShieldSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 80 96"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M40 4 L72 18 L72 48 C72 70 56 86 40 92 C24 86 8 70 8 48 L8 18 Z" />
    </svg>
  );
}

function ParallaxBackdrop({
  progress,
  flyingRight,
  reducedMotion,
}: {
  progress: number;
  flyingRight: boolean;
  reducedMotion: boolean;
}) {
  const t = progress;
  const bob = Math.sin(t * Math.PI * 2) * 18;
  const wingTilt = Math.sin(t * Math.PI * 3) * 6;
  // Le SVG regarde naturellement vers la droite
  const faceScale = flyingRight ? 1 : -1;

  const dragonPosition = reducedMotion
    ? {
        left: "58%",
        top: "22%",
      }
    : {
        left: `${-12 + t * 118}%`,
        top: `${18 + bob * 0.35 + (1 - t) * 8}%`,
        transform: `translate(-50%, 0) rotate(${wingTilt * (flyingRight ? 1 : -1)}deg)`,
      };

  const shiftY = (depth: number) =>
    reducedMotion
      ? undefined
      : { transform: `translate3d(0, ${(t - 0.5) * depth}px, 0)` };

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-95 dark:opacity-55"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 78% 18%, color-mix(in oklch, var(--primary) 26%, transparent), transparent 68%), radial-gradient(ellipse 50% 40% at 12% 72%, color-mix(in oklch, var(--accent) 34%, transparent), transparent 70%)",
        }}
      />

      {/* nuages / collines lointaines — formes simples */}
      <svg
        className="absolute top-[8%] left-[-5%] w-[55%] text-primary/10 will-change-transform dark:text-foreground/8"
        viewBox="0 0 400 120"
        style={shiftY(36)}
      >
        <ellipse cx="80" cy="70" rx="70" ry="28" fill="currentColor" />
        <ellipse cx="150" cy="62" rx="55" ry="24" fill="currentColor" />
        <ellipse cx="220" cy="74" rx="80" ry="30" fill="currentColor" />
      </svg>

      <svg
        className="absolute top-[12%] right-[-8%] w-[45%] text-accent/15 will-change-transform dark:text-foreground/7"
        viewBox="0 0 360 100"
        style={shiftY(52)}
      >
        <ellipse cx="100" cy="55" rx="90" ry="32" fill="currentColor" />
        <ellipse cx="200" cy="48" rx="60" ry="26" fill="currentColor" />
        <ellipse cx="280" cy="60" rx="70" ry="28" fill="currentColor" />
      </svg>

      {/* dragon volant — motif fort de la section */}
      <div
        className="absolute w-[min(42vw,18rem)] text-primary/32 will-change-transform sm:w-[min(36vw,22rem)] dark:text-primary/32"
        style={dragonPosition}
      >
        <div
          className="origin-center transition-transform ease-out"
          style={{
            transform: `scaleX(${faceScale})`,
            transitionDuration: reducedMotion ? "0ms" : "350ms",
          }}
        >
          <DragonSilhouette />
        </div>
      </div>

      <div
        className="absolute top-[30%] left-[9%] w-10 text-primary/14 will-change-transform sm:w-12 dark:text-foreground/16"
        style={
          reducedMotion
            ? undefined
            : {
                transform: `translate3d(0, ${(t - 0.5) * -56}px, 0) rotate(${t * 36}deg)`,
              }
        }
      >
        <DiceSilhouette />
      </div>

      <div
        className="absolute bottom-[10%] right-[10%] w-12 text-primary/18 will-change-transform sm:w-14 dark:text-primary/22"
        style={shiftY(56)}
      >
        <ShieldSilhouette />
      </div>

      {/* crêtes / sol */}
      <svg
        className="absolute -bottom-4 left-1/2 w-[150%] max-w-none -translate-x-1/2 text-primary/10 will-change-transform sm:w-[115%] dark:text-foreground/10"
        viewBox="0 0 1440 200"
        preserveAspectRatio="xMidYMax meet"
        style={shiftY(40)}
      >
        <polygon
          fill="currentColor"
          points="0,200 0,120 180,90 360,130 520,70 720,115 900,60 1100,110 1280,75 1440,100 1440,200"
        />
      </svg>
    </div>
  );
}

function ChariotCarousel({ className }: { className?: string }) {
  const [index, setIndex] = React.useState(0);
  const reducedMotion = useReducedMotion();
  const count = SLIDES.length;

  React.useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 4500);
    return () => window.clearInterval(id);
  }, [reducedMotion, count]);

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + count) % count);
  };

  return (
    <div
      className={cn("flex flex-col gap-4", className)}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Aperçus de Chariot"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-secondary ring-1 ring-border/70">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-out",
              i === index ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 55vw, 720px"
              className="object-contain object-center"
              priority={i === 0}
            />
          </div>
        ))}

        <p
          className="absolute bottom-3 left-4 rounded-md bg-background/70 px-2 py-1 text-xs font-medium tracking-[0.18em] text-foreground/90 uppercase backdrop-blur-sm"
          aria-live="polite"
          aria-atomic="true"
        >
          {SLIDES[index].label}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div
          className="flex gap-1.5"
          role="tablist"
          aria-label="Slides Chariot"
        >
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Afficher ${slide.label}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all focus-visible:ring-ring focus-visible:ring-3 focus-visible:outline-none",
                i === index
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-border hover:bg-muted-foreground/40",
              )}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Image précédente"
            onClick={() => go(-1)}
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-sm" }),
              "cursor-pointer bg-background/60 backdrop-blur-sm",
            )}
          >
            <ChevronLeft aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Image suivante"
            onClick={() => go(1)}
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-sm" }),
              "cursor-pointer bg-background/60 backdrop-blur-sm",
            )}
          >
            <ChevronRight aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Experience({ className }: { className?: string }) {
  const disableParallax = useDisableParallax();
  const { ref, progress, flyingRight } = useSectionParallax(disableParallax);

  return (
    <section
      ref={ref}
      id="experience"
      aria-labelledby="experience-title"
      className={cn(
        "relative scroll-mt-24 overflow-hidden border-t border-border/60",
        className,
      )}
    >
      <ParallaxBackdrop
        progress={progress}
        flyingRight={flyingRight}
        reducedMotion={disableParallax}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-12 lg:px-12 xl:gap-16 xl:px-16 lg:py-28">
        <div className="animate-in fade-in slide-in-from-bottom-4 max-w-2xl duration-700">
          <p className="mb-4 text-sm font-medium tracking-[0.22em] text-primary uppercase">
            Expérience
          </p>
          <h2
            id="experience-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Chariot
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Co-fondateur · CTO · Développeur · Équipe de 2
          </p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Plateforme d&apos;optimisation d&apos;expérience des parties de{" "}
              <span className="text-foreground">DnD 5e</span> : fiches de
              personnages, campagnes, sessions en temps réel et suivi de combat.
              Avec mon associé, je porte le produit de bout en bout.
              Architecture microservices, produit et technique. Un exemple
              concret de ce que je livre en full-stack : produit web complexe,
              scalable, mis en production.
            </p>
            <p>
              Stack moderne autour de{" "}
              <span className="text-foreground">Next.js</span> et{" "}
              <span className="text-foreground">NestJS</span>, auth SSO via
              Keycloak, temps réel, paiements et observabilité. Le tout
              containerisé.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Technologies">
            {TECHS.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-border/70 bg-background/55 px-3 py-1.5 text-sm text-foreground/85 backdrop-blur-sm"
              >
                {tech}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-muted-foreground">
            Projet en cours —{" "}
            <Link
              href="https://chariot.tools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
            >
              chariot.tools
              <span className="sr-only"> (ouvre un nouvel onglet)</span>
            </Link>
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:100ms]">
          <ChariotCarousel />
        </div>
      </div>
    </section>
  );
}
