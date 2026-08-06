"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import {
  parallaxShift,
  useDisableParallax,
  useSectionProgress,
} from "@/lib/section-motion";

function LayersSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 140 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M70 8 L128 36 L70 64 L12 36 Z" opacity="0.35" />
      <path d="M70 28 L118 50 L70 72 L22 50 Z" opacity="0.55" />
      <path d="M70 48 L108 66 L70 84 L32 66 Z" opacity="0.85" />
    </svg>
  );
}

function WindowSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 120 90"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="6" y="10" width="108" height="70" rx="8" opacity="0.35" />
      <rect x="6" y="10" width="108" height="18" rx="8" opacity="0.55" />
      <circle
        cx="22"
        cy="19"
        r="3.5"
        className="fill-background"
        opacity="0.7"
      />
      <circle
        cx="34"
        cy="19"
        r="3.5"
        className="fill-background"
        opacity="0.55"
      />
      <circle
        cx="46"
        cy="19"
        r="3.5"
        className="fill-background"
        opacity="0.4"
      />
      <rect x="18" y="42" width="40" height="6" rx="2" opacity="0.7" />
      <rect x="18" y="56" width="64" height="6" rx="2" opacity="0.45" />
    </svg>
  );
}

function BoltSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 48 80"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M28 2 L8 44 H22 L18 78 L42 34 H26 Z" />
    </svg>
  );
}

function ServicesBackdrop({
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
        className="absolute inset-0 opacity-85 dark:opacity-42"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 12% 20%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 65%), radial-gradient(ellipse 50% 40% at 92% 70%, color-mix(in oklch, var(--accent) 28%, transparent), transparent 68%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklch, var(--primary) 14%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, var(--primary) 14%, transparent) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 70% 45%, black 15%, transparent 72%)",
        }}
      />

      <div
        className="absolute top-[12%] right-[6%] w-[min(38vw,12rem)] text-primary/14 will-change-transform dark:text-foreground/11"
        style={parallaxShift(progress, -36, reducedMotion, 4)}
      >
        <LayersSilhouette />
      </div>

      <div
        className="absolute top-[48%] left-[6%] w-[min(34vw,10rem)] text-accent/28 will-change-transform dark:text-accent/20"
        style={parallaxShift(progress, 42, reducedMotion, -6)}
      >
        <WindowSilhouette />
      </div>

      <div
        className="absolute right-[16%] bottom-[16%] w-8 text-foreground/12 will-change-transform sm:w-9 dark:text-foreground/14"
        style={
          reducedMotion
            ? { transform: "rotate(12deg)" }
            : {
                transform: `translate3d(0, ${(progress - 0.5) * -36}px, 0) rotate(${12 + progress * 18}deg)`,
              }
        }
      >
        <BoltSilhouette />
      </div>
    </div>
  );
}

export function Services({ className }: { className?: string }) {
  const disableParallax = useDisableParallax();
  const { ref, progress } = useSectionProgress(disableParallax, 0.4);

  return (
    <section
      ref={ref}
      id="services"
      aria-labelledby="services-title"
      className={cn(
        "relative scroll-mt-24 overflow-hidden border-t border-border/60",
        className,
      )}
    >
      <ServicesBackdrop progress={progress} reducedMotion={disableParallax} />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="animate-in fade-in slide-in-from-bottom-4 max-w-2xl duration-700">
          <p className="mb-4 text-sm font-medium tracking-[0.22em] text-primary uppercase">
            Services
          </p>
          <h2
            id="services-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Du besoin au produit livré
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Full-stack · Toulouse & à distance · React, Next.js, TypeScript
          </p>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Je construis des sites et des applications qui tiennent en
            production. Cadrage, développement et déploiement. Voici comment je
            peux intervenir.
          </p>
        </div>

        <ul className="mt-12 grid gap-10 sm:mt-14 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-12">
          {siteConfig.services.map((service, index) => (
            <li
              key={service.title}
              className="animate-in fade-in slide-in-from-bottom-4 max-w-md duration-700"
              style={{ animationDelay: `${80 + index * 60}ms` }}
            >
              <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {service.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="animate-in fade-in slide-in-from-bottom-4 mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground duration-700 sm:text-lg">
          Tu veux discuter d&apos;une idée ou lancer un projet ?{" "}
          <Link
            href="/#contact"
            className="text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
          >
            Écris-moi
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
