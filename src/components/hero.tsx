"use client";

import * as React from "react";
import { buttonVariants } from "@/components/ui/button";
import { useThemeTransition } from "@/components/theme-transition";
import { useDisableParallax } from "@/lib/section-motion";
import { cn } from "@/lib/utils";

type LayerOffset = { x: number; y: number };

const LAYER_DEPTHS = [0.015, 0.04, 0.08, 0.12] as const;

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function useParallax() {
  const disableParallax = useDisableParallax();
  const [liveOffset, setLiveOffset] = React.useState<LayerOffset>({
    x: 0,
    y: 0,
  });
  const frame = React.useRef<number | null>(null);
  const pointer = React.useRef<LayerOffset>({ x: 0, y: 0 });
  const scrollY = React.useRef(0);

  const flush = React.useCallback(() => {
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      const max = Math.max(window.innerHeight, 1);
      const scrollFactor = Math.min(scrollY.current / max, 1.2);
      setLiveOffset({
        x: pointer.current.x,
        y: pointer.current.y + scrollFactor * 0.9,
      });
      frame.current = null;
    });
  }, []);

  React.useEffect(() => {
    if (disableParallax) return;

    const onMove = (event: PointerEvent) => {
      pointer.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      };
      flush();
    };

    const onScroll = () => {
      scrollY.current = window.scrollY;
      flush();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [disableParallax, flush]);

  return {
    offset: disableParallax ? { x: 0, y: 0 } : liveOffset,
    reducedMotion: disableParallax,
  };
}

function layerStyle(
  offset: LayerOffset,
  depth: number,
  reducedMotion: boolean,
) {
  if (reducedMotion) return undefined;
  return {
    transform: `translate3d(${offset.x * depth * 100}px, ${offset.y * depth * 60}px, 0)`,
  };
}

function MountainLayers({
  offset,
  reducedMotion,
  nightness,
}: {
  offset: LayerOffset;
  reducedMotion: boolean;
  nightness: number;
}) {
  const day = {
    far: [0.78, 0.04, 145],
    mid: [0.66, 0.055, 145],
    near: [0.53, 0.06, 145],
    ridge: [0.42, 0.04, 140],
  } as const;
  const night = {
    far: [0.32, 0.03, 250],
    mid: [0.26, 0.025, 240],
    near: [0.22, 0.02, 80],
    ridge: [0.165, 0.015, 55],
  } as const;

  // Pendant le coucher, les silhouettes s'assombrissent plus vite
  const t = smoothstep(0.15, 0.75, nightness);

  const color = (key: keyof typeof day) => {
    const d = day[key];
    const n = night[key];
    return `oklch(${lerp(d[0], n[0], t)} ${lerp(d[1], n[1], t)} ${lerp(d[2], n[2], t)})`;
  };

  // Wrapper pour le centrage ; transform parallaxe sur le SVG seul.
  // Largeur > 100% + ratio viewBox (pas de hauteur % viewport) :
  // évite les pics étirés en hauteur sur mobile.
  const wrap = (bottom: string, width: string) =>
    cn("absolute left-1/2 -translate-x-1/2", bottom, width);

  return (
    <>
      <div
        className={wrap(
          "bottom-[10%] sm:bottom-[14%]",
          "w-[240%] sm:w-[160%] lg:w-[120%]",
        )}
      >
        <svg
          className="h-auto w-full will-change-transform"
          viewBox="0 0 1440 420"
          preserveAspectRatio="xMidYMax meet"
          style={{
            color: color("far"),
            ...layerStyle(offset, LAYER_DEPTHS[0], reducedMotion),
          }}
        >
          <polygon fill="currentColor" points="0,420 180,210 360,420" />
          <polygon fill="currentColor" points="240,420 520,120 780,420" />
          <polygon fill="currentColor" points="640,420 900,190 1120,420" />
          <polygon fill="currentColor" points="980,420 1240,150 1440,420" />
          <polygon fill="currentColor" points="1100,420 1320,230 1440,420" />
        </svg>
      </div>

      <div
        className={wrap(
          "bottom-[4%] sm:bottom-[8%]",
          "w-[220%] sm:w-[150%] lg:w-[115%]",
        )}
      >
        <svg
          className="h-auto w-full will-change-transform"
          viewBox="0 0 1440 460"
          preserveAspectRatio="xMidYMax meet"
          style={{
            color: color("mid"),
            ...layerStyle(offset, LAYER_DEPTHS[1], reducedMotion),
          }}
        >
          <polygon fill="currentColor" points="0,460 220,200 460,460" />
          <polygon fill="currentColor" points="300,460 620,90 940,460" />
          <polygon fill="currentColor" points="760,460 1040,170 1280,460" />
          <polygon fill="currentColor" points="1120,460 1320,220 1440,460" />
        </svg>
      </div>

      <div className={wrap("bottom-0", "w-[200%] sm:w-[140%] lg:w-[110%]")}>
        <svg
          className="h-auto w-full will-change-transform"
          viewBox="0 0 1440 380"
          preserveAspectRatio="xMidYMax meet"
          style={{
            color: color("near"),
            ...layerStyle(offset, LAYER_DEPTHS[2], reducedMotion),
          }}
        >
          <polygon fill="currentColor" points="0,380 160,170 360,380" />
          <polygon fill="currentColor" points="220,380 480,60 780,380" />
          <polygon fill="currentColor" points="640,380 900,140 1140,380" />
          <polygon fill="currentColor" points="980,380 1220,100 1440,380" />
        </svg>
      </div>

      <div className={wrap("bottom-0", "w-[180%] sm:w-[130%] lg:w-[108%]")}>
        <svg
          className="h-auto w-full will-change-transform"
          viewBox="0 0 1440 180"
          preserveAspectRatio="xMidYMax meet"
          style={{
            color: color("ridge"),
            ...layerStyle(offset, LAYER_DEPTHS[3], reducedMotion),
          }}
        >
          <polygon
            fill="currentColor"
            points="0,180 0,90 240,40 520,110 820,30 1100,95 1440,50 1440,180"
          />
        </svg>
      </div>
    </>
  );
}

function SkyLayers({ nightness }: { nightness: number }) {
  const dayOpacity = 1 - smoothstep(0.05, 0.45, nightness);
  const goldenOpacity =
    smoothstep(0.05, 0.22, nightness) * (1 - smoothstep(0.28, 0.48, nightness));
  const sunsetOpacity =
    smoothstep(0.18, 0.35, nightness) * (1 - smoothstep(0.42, 0.62, nightness));
  const twilightOpacity =
    smoothstep(0.35, 0.5, nightness) * (1 - smoothstep(0.58, 0.78, nightness));
  const nightOpacity = smoothstep(0.48, 0.78, nightness);

  return (
    <>
      {/* Jour */}
      <div
        className="absolute inset-0"
        style={{
          opacity: dayOpacity,
          background:
            "linear-gradient(180deg, oklch(0.9 0.035 210) 0%, oklch(0.93 0.03 135) 45%, oklch(0.935 0.028 128) 100%)",
        }}
      />
      {/* Heure dorée */}
      <div
        className="absolute inset-0"
        style={{
          opacity: goldenOpacity,
          background:
            "linear-gradient(180deg, oklch(0.78 0.08 230) 0%, oklch(0.88 0.1 80) 40%, oklch(0.92 0.08 70) 100%)",
        }}
      />
      {/* Coucher de soleil */}
      <div
        className="absolute inset-0"
        style={{
          opacity: sunsetOpacity,
          background:
            "linear-gradient(180deg, oklch(0.35 0.1 280) 0%, oklch(0.55 0.16 30) 38%, oklch(0.72 0.18 55) 62%, oklch(0.78 0.12 70) 100%)",
        }}
      />
      {/* Crépuscule */}
      <div
        className="absolute inset-0"
        style={{
          opacity: twilightOpacity,
          background:
            "linear-gradient(180deg, oklch(0.18 0.08 280) 0%, oklch(0.28 0.1 300) 35%, oklch(0.35 0.12 40) 70%, oklch(0.28 0.06 50) 100%)",
        }}
      />
      {/* Nuit */}
      <div
        className="absolute inset-0"
        style={{
          opacity: nightOpacity,
          background:
            "linear-gradient(180deg, oklch(0.12 0.04 260) 0%, oklch(0.16 0.03 250) 38%, oklch(0.2 0.02 80) 72%, oklch(0.19 0.012 55) 100%)",
        }}
      />
      {/* Bande lumineuse à l'horizon */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[20%] h-[35%]"
        style={{
          opacity: sunsetOpacity * 0.9 + twilightOpacity * 0.45,
          background:
            "radial-gradient(ellipse 80% 70% at 70% 100%, oklch(0.75 0.18 55 / 0.55), transparent 70%)",
        }}
      />
    </>
  );
}

function Sun({
  nightness,
  offset,
  reducedMotion,
}: {
  nightness: number;
  offset: LayerOffset;
  reducedMotion: boolean;
}) {
  // Descend du ciel vers l'horizon, puis disparaît
  const descend = smoothstep(0, 0.5, nightness);
  const top = lerp(18, 78, descend);
  const right = lerp(12, 22, descend);
  const opacity = 1 - smoothstep(0.42, 0.58, nightness);
  const warmth = smoothstep(0.1, 0.4, nightness);
  const size = lerp(9, 12, warmth); // rem-ish via % of viewport feel with h/w classes

  if (opacity <= 0.01) return null;

  return (
    <div
      className="absolute will-change-transform"
      style={{
        top: `${top}%`,
        right: `${right}%`,
        opacity,
        ...layerStyle(offset, LAYER_DEPTHS[0], reducedMotion),
      }}
    >
      <div
        className="rounded-full blur-sm"
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
          background: `radial-gradient(circle, oklch(${lerp(0.95, 0.85, warmth)} ${lerp(0.06, 0.18, warmth)} ${lerp(85, 50, warmth)}) 0%, oklch(0.9 0.08 60 / 0) 70%)`,
          boxShadow: `0 0 ${lerp(20, 50, warmth)}px oklch(0.85 0.16 55 / ${0.25 + warmth * 0.35})`,
        }}
      />
    </div>
  );
}

function Moon({
  nightness,
  offset,
  reducedMotion,
}: {
  nightness: number;
  offset: LayerOffset;
  reducedMotion: boolean;
}) {
  // Monte de derrière les montagnes vers sa place finale
  const rise = smoothstep(0.4, 0.95, nightness);
  const top = lerp(72, 13, rise);
  const right = lerp(18, 12, rise);
  const opacity = smoothstep(0.42, 0.62, nightness);

  if (opacity <= 0.01) return null;

  return (
    <div
      className="absolute will-change-transform"
      style={{
        top: `${top}%`,
        right: `${right}%`,
        opacity,
        ...layerStyle(offset, LAYER_DEPTHS[0], reducedMotion),
      }}
    >
      <div
        className="absolute -inset-16 rounded-full blur-2xl sm:-inset-24"
        style={{
          opacity: 0.55 * opacity,
          background:
            "radial-gradient(circle, oklch(0.88 0.06 85 / 0.45) 0%, oklch(0.7 0.04 250 / 0.12) 45%, transparent 70%)",
        }}
      />
      <div
        className="relative h-24 w-24 sm:h-32 sm:w-32"
        style={{
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 32% 28%, oklch(0.97 0.02 95) 0%, oklch(0.9 0.03 90) 38%, oklch(0.78 0.03 80) 100%)",
          boxShadow:
            "0 0 40px oklch(0.9 0.05 85 / 0.35), 0 0 80px oklch(0.75 0.04 250 / 0.2), inset -10px -8px 20px oklch(0.55 0.02 260 / 0.25)",
        }}
      >
        <span
          className="absolute top-[28%] left-[22%] h-[18%] w-[22%] rounded-full opacity-25"
          style={{ background: "oklch(0.7 0.02 80)" }}
        />
        <span
          className="absolute top-[48%] left-[40%] h-[14%] w-[18%] rounded-full opacity-20"
          style={{ background: "oklch(0.68 0.02 85)" }}
        />
        <span
          className="absolute top-[36%] right-[24%] h-[12%] w-[14%] rounded-full opacity-[0.18]"
          style={{ background: "oklch(0.72 0.015 90)" }}
        />
      </div>
    </div>
  );
}

function Stars({
  nightness,
  offset,
  reducedMotion,
}: {
  nightness: number;
  offset: LayerOffset;
  reducedMotion: boolean;
}) {
  const opacity = smoothstep(0.55, 0.85, nightness);
  if (opacity <= 0.01) return null;

  return (
    <div
      className="absolute inset-0 will-change-transform"
      style={{
        opacity,
        ...layerStyle(offset, LAYER_DEPTHS[0], reducedMotion),
      }}
    >
      {STAR_POSITIONS.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[oklch(0.96_0.02_95)]"
          style={{
            left: star.x,
            top: star.y,
            width: star.s,
            height: star.s,
            opacity: star.o,
            boxShadow:
              star.s >= 2.5 ? "0 0 6px oklch(0.95 0.03 95 / 0.55)" : undefined,
          }}
        />
      ))}
    </div>
  );
}

function HeroBackdrop({
  offset,
  reducedMotion,
  nightness,
}: {
  offset: LayerOffset;
  reducedMotion: boolean;
  nightness: number;
}) {
  const moonWash = smoothstep(0.6, 1, nightness) * 0.4;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <SkyLayers nightness={nightness} />
      <Stars
        nightness={nightness}
        offset={offset}
        reducedMotion={reducedMotion}
      />
      <Sun
        nightness={nightness}
        offset={offset}
        reducedMotion={reducedMotion}
      />
      <Moon
        nightness={nightness}
        offset={offset}
        reducedMotion={reducedMotion}
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-[20%] h-[45%]"
        style={{
          opacity: moonWash,
          background:
            "radial-gradient(ellipse 55% 50% at 78% 20%, oklch(0.85 0.05 85 / 0.22), transparent 70%)",
        }}
      />

      <MountainLayers
        offset={offset}
        reducedMotion={reducedMotion}
        nightness={nightness}
      />
    </div>
  );
}

const STAR_POSITIONS = [
  { x: "6%", y: "10%", s: 2, o: 0.7 },
  { x: "11%", y: "24%", s: 1.5, o: 0.45 },
  { x: "17%", y: "14%", s: 2.5, o: 0.85 },
  { x: "22%", y: "30%", s: 1.5, o: 0.4 },
  { x: "28%", y: "8%", s: 2, o: 0.65 },
  { x: "34%", y: "20%", s: 1.5, o: 0.5 },
  { x: "39%", y: "12%", s: 3, o: 0.9 },
  { x: "45%", y: "26%", s: 1.5, o: 0.4 },
  { x: "50%", y: "7%", s: 2, o: 0.6 },
  { x: "54%", y: "18%", s: 1.5, o: 0.45 },
  { x: "60%", y: "11%", s: 2.5, o: 0.75 },
  { x: "66%", y: "28%", s: 1.5, o: 0.35 },
  { x: "71%", y: "9%", s: 2, o: 0.7 },
  { x: "76%", y: "22%", s: 1.5, o: 0.5 },
  { x: "83%", y: "15%", s: 2, o: 0.55 },
  { x: "88%", y: "6%", s: 1.5, o: 0.45 },
  { x: "93%", y: "25%", s: 2.5, o: 0.8 },
  { x: "14%", y: "36%", s: 1.5, o: 0.3 },
  { x: "48%", y: "34%", s: 1.5, o: 0.35 },
  { x: "97%", y: "14%", s: 2, o: 0.55 },
] as const;

export function Hero({ className }: { className?: string }) {
  const { offset, reducedMotion } = useParallax();
  const { nightness, isTransitioning } = useThemeTransition();

  return (
    <section
      className={cn(
        "relative flex min-h-svh flex-col overflow-hidden",
        className,
      )}
      aria-labelledby="hero-title"
    >
      <HeroBackdrop
        offset={offset}
        reducedMotion={reducedMotion}
        nightness={nightness}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-20 bg-linear-to-t from-background via-background/70 to-transparent sm:h-28 dark:from-background/80 dark:via-background/40"
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative z-10 flex flex-1 flex-col justify-center px-6 pt-24 pb-28 sm:px-10 sm:pt-28 lg:px-16",
          isTransitioning && "transition-colors duration-500",
        )}
      >
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-4 text-sm font-medium tracking-[0.22em] text-primary uppercase">
            Développeur web · Toulouse
          </p>
          <h1
            id="hero-title"
            className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Hugo Piedanna
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Développeur web full-stack : je conçois et livre des sites et
            applications React / Next.js pour les entreprises et porteurs de
            projet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className={cn(buttonVariants({ size: "lg" }), "cursor-pointer")}
            >
              Voir mes services
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "cursor-pointer bg-background/50 backdrop-blur-sm",
              )}
            >
              Discuter de ton projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
