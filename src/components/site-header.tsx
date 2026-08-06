"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/nav";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = React.useState<string>("");

  React.useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function SiteHeader() {
  const scrolled = useScrolled();
  const [open, setOpen] = React.useState(false);
  const sectionIds = React.useMemo(
    () => navLinks.map((link) => link.sectionId),
    [],
  );
  const active = useActiveSection(sectionIds);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-border/60 bg-background/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6 sm:h-16 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
          onClick={close}
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => {
            const isActive = active === link.sectionId;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="cursor-pointer md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border/60 bg-background/90 backdrop-blur-md md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 sm:px-10"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link) => {
            const isActive = active === link.sectionId;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  "rounded-lg px-3 py-3 text-base transition-colors",
                  isActive
                    ? "bg-secondary/60 text-foreground"
                    : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground",
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
