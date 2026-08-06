"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export type ThemeTransitionDirection = "to-dark" | "to-light";

type ThemeTransitionContextValue = {
  isTransitioning: boolean;
  /** 0 = jour, 1 = nuit — piloté pendant la transition */
  nightness: number;
  direction: ThemeTransitionDirection | null;
  toggleTheme: () => void;
};

const ThemeTransitionContext =
  React.createContext<ThemeTransitionContextValue | null>(null);

const DURATION_MS = 2200;
const THEME_SWAP_AT = 0.52;

/** Démarre avec de la vitesse (pas de « dead zone » au clic), puis s'assouplit. */
function easeOutQuint(t: number) {
  return 1 - (1 - t) ** 5;
}

export function ThemeTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [nightness, setNightness] = React.useState(0);
  const [direction, setDirection] =
    React.useState<ThemeTransitionDirection | null>(null);
  const [mounted, setMounted] = React.useState(false);

  const themeSwapped = React.useRef(false);
  const frame = React.useRef<number | null>(null);
  const reducedMotion = React.useRef(false);

  React.useLayoutEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isDark = document.documentElement.classList.contains("dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync sky with resolved theme before paint
    setNightness(isDark ? 1 : 0);
    setMounted(true);
  }, []);

  const idleNightness =
    resolvedTheme === "dark" ? 1 : resolvedTheme === "light" ? 0 : nightness;
  const displayNightness = isTransitioning ? nightness : idleNightness;

  const toggleTheme = React.useCallback(() => {
    if (isTransitioning || !mounted) return;

    const goingDark = resolvedTheme !== "dark";
    const next = goingDark ? "dark" : "light";
    const dir: ThemeTransitionDirection = goingDark ? "to-dark" : "to-light";

    if (reducedMotion.current) {
      setTheme(next);
      setNightness(goingDark ? 1 : 0);
      return;
    }

    const from = goingDark ? 0 : 1;
    const to = goingDark ? 1 : 0;
    themeSwapped.current = false;
    setDirection(dir);
    setIsTransitioning(true);
    // Kick immédiat : le premier paint bouge déjà le ciel
    setNightness(from + (to - from) * 0.08);

    const start = performance.now();

    const tick = (now: number) => {
      const raw = Math.min((now - start) / DURATION_MS, 1);
      const eased = easeOutQuint(raw);
      const value = from + (to - from) * eased;
      setNightness(value);

      if (!themeSwapped.current) {
        const crossed =
          (goingDark && value >= THEME_SWAP_AT) ||
          (!goingDark && value <= 1 - THEME_SWAP_AT);
        if (crossed) {
          themeSwapped.current = true;
          setTheme(next);
        }
      }

      if (raw < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setNightness(to);
        setIsTransitioning(false);
        setDirection(null);
        frame.current = null;
      }
    };

    frame.current = requestAnimationFrame(tick);
  }, [isTransitioning, mounted, resolvedTheme, setTheme]);

  React.useEffect(() => {
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  const value = React.useMemo(
    () => ({
      isTransitioning,
      nightness: displayNightness,
      direction,
      toggleTheme,
    }),
    [isTransitioning, displayNightness, direction, toggleTheme],
  );

  return (
    <ThemeTransitionContext.Provider value={value}>
      {children}
    </ThemeTransitionContext.Provider>
  );
}

export function useThemeTransition() {
  const ctx = React.useContext(ThemeTransitionContext);
  if (!ctx) {
    throw new Error(
      "useThemeTransition must be used within ThemeTransitionProvider",
    );
  }
  return ctx;
}
