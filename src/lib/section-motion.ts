"use client";

import * as React from "react";

function subscribeMedia(
  queries: MediaQueryList[],
  onChange: () => void,
) {
  for (const query of queries) {
    query.addEventListener("change", onChange);
  }
  return () => {
    for (const query of queries) {
      query.removeEventListener("change", onChange);
    }
  };
}

/** Respecte prefers-reduced-motion (accessibilité). */
export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    return subscribeMedia([media], sync);
  }, []);

  return reducedMotion;
}

/**
 * Désactive parallax / animations coûteuses :
 * - prefers-reduced-motion
 * - mobile (viewport étroit)
 * - dispositifs tactiles (pas de hover précis)
 *
 * Évite scroll + rAF + transforms inutiles (CPU/GPU/batterie).
 */
export function useDisableParallax() {
  const reducedMotion = useReducedMotion();
  const [lowPowerTarget, setLowPowerTarget] = React.useState(false);

  React.useEffect(() => {
    const narrow = window.matchMedia("(max-width: 767px)");
    const touchLike = window.matchMedia("(hover: none), (pointer: coarse)");
    const sync = () =>
      setLowPowerTarget(narrow.matches || touchLike.matches);
    sync();
    return subscribeMedia([narrow, touchLike], sync);
  }, []);

  return reducedMotion || lowPowerTarget;
}

/** Progression 0→1 d'une section dans le viewport (pour parallax doux). */
export function useSectionProgress(disableParallax: boolean, idle = 0.4) {
  const ref = React.useRef<HTMLElement>(null);
  const [liveProgress, setLiveProgress] = React.useState(idle);
  const frame = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (disableParallax) return;

    const update = () => {
      frame.current = null;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const view = Math.max(window.innerHeight, 1);
      const raw = (view - rect.top) / (view + rect.height);
      setLiveProgress(Math.min(1, Math.max(0, raw)));
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
  }, [disableParallax]);

  return { ref, progress: disableParallax ? idle : liveProgress };
}

export function parallaxShift(
  progress: number,
  depth: number,
  disableParallax: boolean,
  rotate = 0,
): React.CSSProperties | undefined {
  if (disableParallax) {
    return rotate ? { transform: `rotate(${rotate}deg)` } : undefined;
  }
  return {
    transform: `translate3d(0, ${(progress - 0.5) * depth}px, 0) rotate(${rotate + (progress - 0.5) * depth * 0.08}deg)`,
  };
}
