"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useThemeTransition } from "@/components/theme-transition";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { toggleTheme, isTransitioning, nightness } = useThemeTransition();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard hydration-safe mount check
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        disabled
        aria-hidden="true"
        className="opacity-0"
      />
    );
  }

  const showMoon = nightness > 0.5;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      disabled={isTransitioning}
      aria-label={showMoon ? "Passer en thème clair" : "Passer en thème sombre"}
      className="cursor-pointer"
    >
      <Sun
        className={cn(
          "h-[1.2rem] w-[1.2rem] transition-all duration-500",
          showMoon ? "-rotate-90 scale-0" : "rotate-0 scale-100",
        )}
        aria-hidden
      />
      <Moon
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] transition-all duration-500",
          showMoon ? "rotate-0 scale-100" : "rotate-90 scale-0",
        )}
        aria-hidden
      />
    </Button>
  );
}
