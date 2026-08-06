"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  parallaxShift,
  useDisableParallax,
  useSectionProgress,
} from "@/lib/section-motion";

function BookSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 120 90"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M8 14 C28 8 48 10 58 18 L58 78 C44 68 24 66 8 72 Z"
        opacity="0.9"
      />
      <path
        d="M112 14 C92 8 72 10 62 18 L62 78 C76 68 96 66 112 72 Z"
        opacity="0.75"
      />
      <path d="M60 18 V78" opacity="0.35" />
    </svg>
  );
}

function PencilSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 28 120"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="10,0 18,0 22,14 6,14" opacity="0.85" />
      <rect x="6" y="14" width="16" height="78" rx="2" />
      <polygon points="6,92 22,92 14,118" opacity="0.9" />
      <rect
        x="6"
        y="40"
        width="16"
        height="6"
        className="fill-background"
        opacity="0.35"
      />
    </svg>
  );
}

function ChalkboardSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 160 110"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="6" y="6" width="148" height="88" rx="6" opacity="0.4" />
      <rect x="14" y="14" width="132" height="72" rx="3" opacity="0.55" />
      <rect x="68" y="94" width="24" height="10" rx="2" opacity="0.7" />
      <rect x="48" y="102" width="64" height="5" rx="2" opacity="0.45" />
    </svg>
  );
}

function TransmissionBackdrop({
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
            "radial-gradient(ellipse 55% 45% at 88% 18%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 68%), radial-gradient(ellipse 45% 50% at 6% 78%, color-mix(in oklch, var(--accent) 28%, transparent), transparent 70%)",
        }}
      />

      <div
        className="absolute inset-x-0 top-[22%] bottom-[18%] opacity-[0.16] dark:opacity-[0.1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 35px, color-mix(in oklch, var(--primary) 18%, transparent) 35px, color-mix(in oklch, var(--primary) 18%, transparent) 36px)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 22%, black 78%, transparent 100%)",
        }}
      />

      <div
        className="absolute top-[12%] right-[6%] w-[min(36vw,12rem)] text-primary/14 will-change-transform dark:text-foreground/11"
        style={parallaxShift(progress, -36, reducedMotion, 3)}
      >
        <BookSilhouette />
      </div>

      <div
        className="absolute top-[42%] left-[5%] w-[min(32vw,10rem)] text-accent/28 will-change-transform dark:text-accent/20"
        style={parallaxShift(progress, 42, reducedMotion, -2)}
      >
        <ChalkboardSilhouette />
      </div>

      <div
        className="absolute right-[14%] bottom-[14%] w-7 text-foreground/12 will-change-transform sm:w-8 dark:text-foreground/14"
        style={
          reducedMotion
            ? { transform: "rotate(24deg)" }
            : {
                transform: `translate3d(0, ${(progress - 0.5) * -40}px, 0) rotate(${24 + progress * 14}deg)`,
              }
        }
      >
        <PencilSilhouette />
      </div>
    </div>
  );
}

export function Transmission({ className }: { className?: string }) {
  const disableParallax = useDisableParallax();
  const { ref, progress } = useSectionProgress(disableParallax);

  return (
    <section
      ref={ref}
      id="transmission"
      aria-labelledby="transmission-title"
      className={cn(
        "relative scroll-mt-24 overflow-hidden border-t border-border/60",
        className,
      )}
    >
      <TransmissionBackdrop
        progress={progress}
        reducedMotion={disableParallax}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="animate-in fade-in slide-in-from-bottom-4 max-w-2xl duration-700">
          <p className="mb-4 text-sm font-medium tracking-[0.22em] text-primary uppercase">
            Transmission
          </p>
          <h2
            id="transmission-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            React.js & TypeScript
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Intervenant · 2ᵉ année ·{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://ynov.com/campus/toulouse/"
              className="text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
            >
              Toulouse Ynov Campus
              <span className="sr-only"> (ouvre un nouvel onglet)</span>
            </Link>
          </p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Je transmets ce que je pratique au quotidien : React via Next.js,
              avec TypeScript. Comprendre l&apos;écosystème et les bonnes
              pratiques.
            </p>
            <p>
              L&apos;idée n&apos;est pas seulement de faire tourner un
              composant. Mais de comprendre pourquoi on structure ainsi, et
              comment livrer un code que l&apos;on peut faire évoluer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
