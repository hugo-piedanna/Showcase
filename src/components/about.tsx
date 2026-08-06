"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  parallaxShift,
  useDisableParallax,
  useSectionProgress,
} from "@/lib/section-motion";

function RidgeSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 200 80"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="0,80 30,42 70,58 110,22 150,48 180,30 200,44 200,80" />
    </svg>
  );
}

function CompassSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="26" opacity="0.55" />
      <path d="M32 10 V18 M32 46 V54 M10 32 H18 M46 32 H54" opacity="0.45" />
      <polygon
        points="32,16 38,32 32,48 26,32"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

function AboutBackdrop({
  progress,
  reducedMotion,
}: {
  progress: number;
  reducedMotion: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-90 dark:opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 8% 30%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 65%), radial-gradient(ellipse 55% 45% at 95% 70%, color-mix(in oklch, var(--accent) 28%, transparent), transparent 68%)",
        }}
      />

      <div
        className="absolute right-[-4%] bottom-[8%] w-[min(55vw,18rem)] text-primary/12 will-change-transform dark:text-foreground/10"
        style={parallaxShift(progress, 36, reducedMotion, 0)}
      >
        <RidgeSilhouette />
      </div>

      <div
        className="absolute top-[18%] right-[12%] w-10 text-primary/14 will-change-transform sm:w-12 dark:text-primary/18"
        style={parallaxShift(progress, -44, reducedMotion, -8)}
      >
        <CompassSilhouette />
      </div>
    </div>
  );
}

export function About({ className }: { className?: string }) {
  const disableParallax = useDisableParallax();
  const { ref, progress } = useSectionProgress(disableParallax, 0.35);

  return (
    <section
      ref={ref}
      id="apropos"
      aria-labelledby="apropos-title"
      className={cn(
        "relative scroll-mt-24 overflow-hidden border-t border-border/60",
        className,
      )}
    >
      <AboutBackdrop progress={progress} reducedMotion={disableParallax} />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-16 lg:px-16 lg:py-28">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 lg:pt-2">
          <figure className="mx-auto w-44 sm:w-52 lg:mx-0 lg:w-full">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary ring-1 ring-border/70">
              <Image
                src="/profil.webp"
                alt="Portrait de Hugo Piedanna, développeur web full-stack"
                fill
                sizes="(max-width: 1024px) 13rem, 17rem"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="sr-only">
              Portrait de Hugo Piedanna
            </figcaption>
          </figure>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 max-w-2xl duration-700 [animation-delay:80ms]">
          <p className="mb-4 text-sm font-medium tracking-[0.22em] text-primary uppercase">
            À propos
          </p>
          <h2
            id="apropos-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Développeur web full-stack à Toulouse
          </h2>

          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Bac+5 · React, Next.js, TypeScript · Intervenant Ynov Toulouse
          </p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Autodidacte dès 14 ans, j&apos;ai choisi le développement web pour
              une raison simple : transformer une idée en produit qui tient en
              production. Aujourd&apos;hui, j&apos;accompagne des clients sur
              des sites, applications et MVP. Du cadrage technique au
              déploiement.
            </p>
            <p>
              Titulaire d&apos;un Bac+5 Expert en développement logiciel, je
              transmets aussi ce métier en tant qu&apos;intervenant à{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://ynov.com/campus/toulouse/"
                className="text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
              >
                Toulouse Ynov Campus
                <span className="sr-only"> (ouvre un nouvel onglet)</span>
              </Link>
              . Cette double casquette de builder et formateur nourrit un code
              clair, maintenable et orienté résultat.
            </p>
            <p>
              En dehors du code :{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://captaincoaster.com/fr/users/hugo-piedanna"
                className="text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
              >
                parcs d&apos;attractions
                <span className="sr-only"> (ouvre un nouvel onglet)</span>
              </Link>
              , randonnée, sport et voyages. J&apos;aime comprendre un système,
              trouver son rythme, puis passer le prochain palier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
