"use client";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import {
  parallaxShift,
  useDisableParallax,
  useSectionProgress,
} from "@/lib/section-motion";

function ChatSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 120 90"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M14 12 H90 C98 12 104 18 104 26 V48 C104 56 98 62 90 62 H48 L28 78 V62 H14 C6 62 0 56 0 48 V26 C0 18 6 12 14 12 Z"
        opacity="0.45"
      />
      <rect x="22" y="28" width="52" height="6" rx="2" opacity="0.7" />
      <rect x="22" y="42" width="36" height="6" rx="2" opacity="0.45" />
    </svg>
  );
}

function MarkSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 64 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="32" cy="28" r="18" opacity="0.55" />
      <path d="M32 18 V30" opacity="0.9" />
      <circle cx="32" cy="40" r="2.5" fill="currentColor" stroke="none" />
      <path d="M32 48 V72" opacity="0.4" />
    </svg>
  );
}

function FaqBackdrop({
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
            "radial-gradient(ellipse 55% 45% at 88% 22%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 68%), radial-gradient(ellipse 45% 50% at 8% 78%, color-mix(in oklch, var(--accent) 28%, transparent), transparent 70%)",
        }}
      />

      <div
        className="absolute inset-x-0 top-[20%] bottom-[22%] opacity-[0.14] dark:opacity-[0.09]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 32px, color-mix(in oklch, var(--primary) 16%, transparent) 32px, color-mix(in oklch, var(--primary) 16%, transparent) 33px)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 18%, black 82%, transparent 100%)",
        }}
      />

      <div
        className="absolute top-[14%] right-[7%] w-[min(36vw,11rem)] text-primary/14 will-change-transform dark:text-foreground/11"
        style={parallaxShift(progress, -34, reducedMotion, 3)}
      >
        <ChatSilhouette />
      </div>

      <div
        className="absolute bottom-[18%] left-[7%] w-11 text-primary/16 will-change-transform sm:w-12 dark:text-primary/20"
        style={parallaxShift(progress, 40, reducedMotion, -8)}
      >
        <MarkSilhouette />
      </div>
    </div>
  );
}

export function Faq({ className }: { className?: string }) {
  const disableParallax = useDisableParallax();
  const { ref, progress } = useSectionProgress(disableParallax, 0.4);

  return (
    <section
      ref={ref}
      id="faq"
      aria-labelledby="faq-title"
      className={cn(
        "relative scroll-mt-24 overflow-hidden border-t border-border/60",
        className,
      )}
    >
      <FaqBackdrop progress={progress} reducedMotion={disableParallax} />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="animate-in fade-in slide-in-from-bottom-4 max-w-2xl duration-700">
          <p className="mb-4 text-sm font-medium tracking-[0.22em] text-primary uppercase">
            FAQ
          </p>
          <h2
            id="faq-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Avant de m&apos;écrire
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Les questions qui reviennent le plus souvent
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 mt-12 max-w-3xl duration-700 [animation-delay:80ms] sm:mt-14">
          {siteConfig.faqs.map((item) => (
            <details
              key={item.question}
              className="group border-t border-border/70 py-6 first:border-t-0 first:pt-0 last:pb-0"
            >
              <summary className="cursor-pointer list-none text-xl font-semibold tracking-tight text-foreground marker:content-none sm:text-2xl [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{item.question}</span>
                  <span
                    className="mt-1 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
