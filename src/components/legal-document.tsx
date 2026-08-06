import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function LegalDocument({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      id="contenu"
      className={cn(
        "flex-1 border-t border-transparent pt-20 text-foreground sm:pt-24",
        className,
      )}
    >
      <article className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16 lg:px-0">
        <p className="mb-4 text-sm font-medium tracking-[0.22em] text-primary uppercase">
          Informations légales
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-base text-muted-foreground">{description}</p>
        ) : null}
        <p className="mt-3 text-sm text-muted-foreground">
          Dernière mise à jour :{" "}
          {new Date(siteConfig.legal.lastUpdated).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:decoration-primary/40 [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:decoration-primary [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:mt-2 [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          <Link href="/">← Retour à l&apos;accueil</Link>
        </p>
      </article>
    </main>
  );
}
