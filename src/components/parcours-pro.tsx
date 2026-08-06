"use client";

import { cn } from "@/lib/utils";
import {
  parallaxShift,
  useDisableParallax,
  useSectionProgress,
} from "@/lib/section-motion";

const EXPERIENCES = [
  {
    kind: "Alternance",
    period: "3 ans",
    company: "Cegedim Assurance",
    place: "Labège",
    role: "Développeur",
    techs: [
      "Java",
      "Spring Boot",
      "AngularJS",
      "Keycloak",
      "Jenkins",
      "Oracle",
    ],
    paragraphs: [
      "Pendant trois ans, j'ai contribué au progiciel phare de Cegedim Assurance : de nouvelles pages full-stack pour paramétrer l'outil, côté backend comme frontend.",
      "J'ai aussi pris en charge l'optimisation de pages, et travaillé directement avec les clients pour corriger les bugs qu'ils rencontraient — un pied dans le code, l'autre dans le terrain.",
    ],
  },
  {
    kind: "Stage",
    period: "3 mois",
    company: "Assuromieux",
    place: "Toulouse",
    role: "Développeur",
    techs: ["PHP", "Laravel 5", "Blade", "MySQL"],
    paragraphs: [
      "Chez Assuromieux, j'ai conçu une GED de A à Z : un espace client pour déposer des documents, et un espace admin pour les valider ou les invalider.",
      "Un premier contact concret avec le produit de bout en bout. Du modèle de données à l'interface que les utilisateurs voient.",
    ],
  },
] as const;

function BracketsSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 120 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M38 12 H18 V78 H38" />
      <path d="M82 12 H102 V78 H82" />
      <path d="M48 45 H72" strokeWidth="5" />
    </svg>
  );
}

function TerminalSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 140 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="4" y="8" width="132" height="84" rx="10" opacity="0.35" />
      <rect x="4" y="8" width="132" height="22" rx="10" opacity="0.55" />
      <circle cx="22" cy="19" r="4" className="fill-background" opacity="0.7" />
      <circle
        cx="36"
        cy="19"
        r="4"
        className="fill-background"
        opacity="0.55"
      />
      <circle cx="50" cy="19" r="4" className="fill-background" opacity="0.4" />
      <path
        d="M28 52 L44 64 L28 76"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <rect x="56" y="70" width="40" height="6" rx="2" opacity="0.7" />
    </svg>
  );
}

function FolderSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 96 80"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 20 H36 L44 28 H88 C92 28 94 30 94 34 V68 C94 72 92 74 88 74 H8 C4 74 2 72 2 68 V24 C2 22 4 20 8 20 Z" />
    </svg>
  );
}

function GearSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 80 80"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M 42.4 14.1 L 48.1 3.9 L 53.4 5.5 L 52.3 17.1 L 60 23.4 L 71.2 20.2 L 73.8 25 L 64.9 32.6 L 65.9 42.4 L 76.1 48.1 L 74.5 53.4 L 62.9 52.3 L 56.6 60 L 59.8 71.2 L 55 73.8 L 47.4 64.9 L 37.6 65.9 L 31.9 76.1 L 26.6 74.5 L 27.7 62.9 L 20 56.6 L 8.8 59.8 L 6.2 55 L 15.1 47.4 L 14.1 37.6 L 3.9 31.9 L 5.5 26.6 L 17.1 27.7 L 23.4 20 L 20.2 8.8 L 25 6.2 L 32.6 15.1 Z" />
      <circle cx="40" cy="40" r="11" className="fill-background" />
    </svg>
  );
}

function ParcoursBackdrop({
  progress,
  reducedMotion,
}: {
  progress: number;
  reducedMotion: boolean;
}) {
  const t = progress;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-85 dark:opacity-42"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 0% 30%, color-mix(in oklch, var(--accent) 30%, transparent), transparent 62%), radial-gradient(ellipse 45% 55% at 100% 70%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 65%)",
        }}
      />

      {/* Grille douce — atelier / bureau */}
      <div
        className="absolute inset-0 opacity-[0.22] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklch, var(--primary) 12%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, var(--primary) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 75% 40%, black 10%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-[10%] right-[6%] w-[min(38vw,12rem)] text-primary/14 will-change-transform dark:text-foreground/11"
        style={parallaxShift(t, -40, reducedMotion, -6)}
      >
        <TerminalSilhouette />
      </div>

      <div
        className="absolute top-[24%] left-[8%] w-14 text-primary/16 will-change-transform sm:w-16 dark:text-primary/20"
        style={parallaxShift(t, 48, reducedMotion, 8)}
      >
        <BracketsSilhouette />
      </div>

      <div
        className="absolute top-[52%] right-[10%] w-10 text-accent/35 will-change-transform sm:w-12 dark:text-accent/28"
        style={
          reducedMotion
            ? undefined
            : {
                transform: `translate3d(0, ${(t - 0.5) * -52}px, 0) rotate(${t * 40}deg)`,
              }
        }
      >
        <GearSilhouette />
      </div>

      <div
        className="absolute bottom-[16%] left-[8%] w-12 text-primary/14 will-change-transform sm:w-14 dark:text-foreground/12"
        style={parallaxShift(t, 56, reducedMotion, -10)}
      >
        <FolderSilhouette />
      </div>
    </div>
  );
}

export function ParcoursPro({ className }: { className?: string }) {
  const disableParallax = useDisableParallax();
  const { ref, progress } = useSectionProgress(disableParallax, 0.35);

  return (
    <section
      ref={ref}
      id="parcours-pro"
      aria-labelledby="parcours-pro-title"
      className={cn(
        "relative scroll-mt-24 overflow-hidden border-t border-border/60",
        className,
      )}
    >
      <ParcoursBackdrop progress={progress} reducedMotion={disableParallax} />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="animate-in fade-in slide-in-from-bottom-4 max-w-2xl duration-700">
          <p className="mb-4 text-sm font-medium tracking-[0.22em] text-primary uppercase">
            Parcours pro
          </p>
          <h2
            id="parcours-pro-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Du terrain au produit
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Une alternance de trois ans, un stage formateur. La pratique pendant
            le diplôme.
          </p>
        </div>

        <ol className="relative mt-14 space-y-16 sm:mt-16 sm:space-y-20">
          {EXPERIENCES.map((item, index) => (
            <li
              key={item.company}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${80 + index * 80}ms` }}
            >
              <article className="grid max-w-3xl gap-6 lg:max-w-none lg:grid-cols-[minmax(0,14rem)_1fr] lg:gap-12">
                <header className="lg:pt-1">
                  <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
                    {item.kind}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.period}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.place}
                  </p>
                </header>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {item.company}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    {item.role}
                  </p>

                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <ul
                    className="mt-8 flex flex-wrap gap-2"
                    aria-label={`Technologies — ${item.company}`}
                  >
                    {item.techs.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg border border-border/70 bg-background/55 px-3 py-1.5 text-sm text-foreground/85 backdrop-blur-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
