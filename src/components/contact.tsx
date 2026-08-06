"use client";

import * as React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Loader2, Mail } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { socialLinks } from "@/lib/nav";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  parallaxShift,
  useDisableParallax,
  useSectionProgress,
} from "@/lib/section-motion";

function EnvelopeSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 120 80"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 18 H112 V66 H8 Z" opacity="0.4" />
      <path d="M8 18 L60 48 L112 18" opacity="0.75" />
      <path d="M8 66 L44 42 M112 66 L76 42" opacity="0.3" />
    </svg>
  );
}

function SignalSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-full", className)}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="32" cy="40" r="5" fill="currentColor" stroke="none" />
      <path d="M20 30 C24 24 40 24 44 30" opacity="0.7" />
      <path d="M14 22 C22 12 42 12 50 22" opacity="0.45" />
      <path d="M8 14 C20 0 44 0 56 14" opacity="0.28" />
    </svg>
  );
}

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
  loading: () => (
    <div className="h-[78px] w-[304px] animate-pulse rounded-lg bg-secondary" />
  ),
});

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "LinkedIn" as const,
    href: socialLinks[0].href,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub" as const,
    href: socialLinks[1].href,
    icon: GitHubIcon,
  },
];

const fieldClass =
  "w-full rounded-lg border bg-background/60 px-3.5 py-2.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:ring-3 disabled:opacity-50";

const fieldOkClass =
  "border-border/80 focus-visible:border-ring focus-visible:ring-ring/50";

const fieldErrorClass =
  "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40";

type FieldKey = "name" | "email" | "message" | "privacy";

type FieldErrors = Partial<Record<FieldKey, string>>;

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success" }
  | { type: "error"; message: string };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function RequiredMark() {
  return (
    <>
      <span className="text-destructive" aria-hidden="true">
        {" "}
        *
      </span>
      <span className="sr-only"> (obligatoire)</span>
    </>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs text-destructive" role="alert">
      {message}
    </p>
  );
}

function validateName(name: string): string | undefined {
  if (name.length < 2) {
    return "Le nom est obligatoire (2 caractères minimum).";
  }
  if (name.length > 120) {
    return "Le nom est trop long.";
  }
  return undefined;
}

function validateEmail(email: string): string | undefined {
  if (!email) {
    return "L'e-mail est obligatoire.";
  }
  if (!isValidEmail(email) || email.length > 200) {
    return "Indiquez une adresse e-mail valide.";
  }
  return undefined;
}

function validateMessage(message: string): string | undefined {
  if (message.length < 10) {
    return "Le message est obligatoire (10 caractères minimum).";
  }
  if (message.length > 5000) {
    return "Le message est trop long.";
  }
  return undefined;
}

function validateCaptcha(
  captchaToken: string | null,
  siteKey: string,
): string | undefined {
  if (siteKey && !captchaToken) {
    return "Validez le reCAPTCHA avant d'envoyer.";
  }
  return undefined;
}

function validatePrivacy(accepted: boolean): string | undefined {
  if (!accepted) {
    return "Veuillez accepter la politique de confidentialité.";
  }
  return undefined;
}

function validateFields(input: {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}): FieldErrors {
  const errors: FieldErrors = {};
  const nameError = validateName(input.name);
  const emailError = validateEmail(input.email);
  const messageError = validateMessage(input.message);
  const privacyError = validatePrivacy(input.privacy);

  if (nameError) errors.name = nameError;
  if (emailError) errors.email = emailError;
  if (messageError) errors.message = messageError;
  if (privacyError) errors.privacy = privacyError;

  return errors;
}

export function Contact({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const disableParallax = useDisableParallax();
  const { ref, progress } = useSectionProgress(disableParallax, 0.45);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);
  const [captchaKey, setCaptchaKey] = React.useState(0);
  const [status, setStatus] = React.useState<Status>({ type: "idle" });
  const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({});
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const captchaTheme = mounted && resolvedTheme === "dark" ? "dark" : "light";

  /** Met à jour l'erreur d'un champ déjà en erreur : elle reste tant que le problème n'est pas résolu. */
  function syncFieldError(key: FieldKey, error: string | undefined) {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      if (!error) {
        const next = { ...prev };
        delete next[key];
        const remaining = Object.keys(next).length;
        if (
          remaining === 0 &&
          status.type === "error" &&
          status.message === "Corrigez les champs indiqués avant d'envoyer."
        ) {
          queueMicrotask(() => setStatus({ type: "idle" }));
        }
        return next;
      }
      if (prev[key] === error) return prev;
      return { ...prev, [key]: error };
    });
  }

  function resetCaptcha() {
    setCaptchaToken(null);
    setCaptchaKey((key) => key + 1);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.type === "loading") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const privacy = data.get("privacy") === "on";

    const errors = validateFields({ name, email, message, privacy });
    const captchaError = validateCaptcha(captchaToken, siteKey);

    if (Object.keys(errors).length > 0 || captchaError) {
      setFieldErrors(errors);
      setStatus({
        type: "error",
        message:
          captchaError ?? "Corrigez les champs indiqués avant d'envoyer.",
      });
      return;
    }

    setFieldErrors({});
    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          captchaToken,
          privacyAccepted: true,
        }),
      });
      const payload = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        resetCaptcha();
        setStatus({
          type: "error",
          message: payload.error ?? "Une erreur est survenue.",
        });
        return;
      }

      form.reset();
      resetCaptcha();
      setFieldErrors({});
      setStatus({ type: "success" });
    } catch {
      resetCaptcha();
      setStatus({
        type: "error",
        message: "Impossible de joindre le serveur. Réessayez plus tard.",
      });
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      aria-labelledby="contact-title"
      className={cn(
        "relative scroll-mt-24 overflow-hidden border-t border-border/60",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-90 dark:opacity-42"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 15%, color-mix(in oklch, var(--primary) 26%, transparent), transparent 65%), radial-gradient(ellipse 50% 40% at 10% 80%, color-mix(in oklch, var(--accent) 32%, transparent), transparent 70%)",
          }}
        />
        <div
          className="absolute top-[14%] right-[6%] w-[min(40vw,13rem)] text-primary/13 will-change-transform dark:text-foreground/11"
          style={parallaxShift(progress, -34, disableParallax, 4)}
        >
          <EnvelopeSilhouette />
        </div>
        <div
          className="absolute bottom-[18%] left-[7%] w-11 text-primary/16 will-change-transform sm:w-14 dark:text-primary/20"
          style={parallaxShift(progress, 40, disableParallax, -6)}
        >
          <SignalSilhouette />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-16 lg:px-16 lg:py-28">
        <div className="animate-in fade-in slide-in-from-bottom-4 max-w-xl duration-700">
          <p className="mb-4 text-sm font-medium tracking-[0.22em] text-primary uppercase">
            Contact
          </p>
          <h2
            id="contact-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Lance ton prochain projet web
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Site, application React/Next.js, MVP ou besoin technique à Toulouse
            ou à distance : décris ton contexte, je te réponds sous 48 h.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
            >
              <Mail className="size-4 text-primary" aria-hidden />
              {siteConfig.email}
            </a>

            <div className="flex flex-wrap gap-3 pt-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "cursor-pointer bg-background/50 backdrop-blur-sm",
                  )}
                >
                  <Icon className="size-4" aria-hidden />
                  {label}
                  <span className="sr-only"> (ouvre un nouvel onglet)</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          aria-labelledby="contact-title"
          className="animate-in fade-in slide-in-from-bottom-4 flex flex-col gap-4 duration-700 [animation-delay:80ms]"
          noValidate
        >
          <p className="text-xs text-muted-foreground">
            Les champs marqués d&apos;un{" "}
            <span className="text-destructive">*</span> sont obligatoires.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-2 text-sm">
              <span className="font-medium text-foreground">
                Nom
                <RequiredMark />
              </span>
              <input
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={120}
                autoComplete="name"
                disabled={status.type === "loading"}
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={
                  fieldErrors.name ? "contact-name-error" : undefined
                }
                onChange={(event) => {
                  if (!fieldErrors.name) return;
                  syncFieldError(
                    "name",
                    validateName(event.currentTarget.value.trim()),
                  );
                }}
                className={cn(
                  fieldClass,
                  fieldErrors.name ? fieldErrorClass : fieldOkClass,
                )}
                placeholder="Votre nom"
              />
              <FieldError id="contact-name-error" message={fieldErrors.name} />
            </label>
            <label className="block space-y-2 text-sm">
              <span className="font-medium text-foreground">
                E-mail
                <RequiredMark />
              </span>
              <input
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                disabled={status.type === "loading"}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={
                  fieldErrors.email ? "contact-email-error" : undefined
                }
                onChange={(event) => {
                  if (!fieldErrors.email) return;
                  syncFieldError(
                    "email",
                    validateEmail(event.currentTarget.value.trim()),
                  );
                }}
                className={cn(
                  fieldClass,
                  fieldErrors.email ? fieldErrorClass : fieldOkClass,
                )}
                placeholder="vous@exemple.com"
              />
              <FieldError
                id="contact-email-error"
                message={fieldErrors.email}
              />
            </label>
          </div>

          <label className="block space-y-2 text-sm">
            <span className="font-medium text-foreground">
              Message
              <RequiredMark />
            </span>
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={6}
              disabled={status.type === "loading"}
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={
                fieldErrors.message ? "contact-message-error" : undefined
              }
              onChange={(event) => {
                if (!fieldErrors.message) return;
                syncFieldError(
                  "message",
                  validateMessage(event.currentTarget.value.trim()),
                );
              }}
              className={cn(
                fieldClass,
                "min-h-36 resize-y",
                fieldErrors.message ? fieldErrorClass : fieldOkClass,
              )}
              placeholder="Parle-moi de ton besoin…"
            />
            <FieldError
              id="contact-message-error"
              message={fieldErrors.message}
            />
          </label>

          <div className="space-y-2">
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <input
                type="checkbox"
                name="privacy"
                required
                disabled={status.type === "loading"}
                aria-invalid={Boolean(fieldErrors.privacy)}
                aria-describedby={
                  fieldErrors.privacy ? "contact-privacy-error" : undefined
                }
                onChange={(event) => {
                  if (!fieldErrors.privacy) return;
                  syncFieldError(
                    "privacy",
                    validatePrivacy(event.currentTarget.checked),
                  );
                }}
                className={cn(
                  "mt-1 size-4 shrink-0 rounded border border-border accent-primary focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                  fieldErrors.privacy && "border-destructive",
                )}
              />
              <span>
                J&apos;accepte que mes données soient utilisées pour traiter ma
                demande, conformément à la{" "}
                <Link
                  href="/confidentialite"
                  className="text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
                >
                  politique de confidentialité
                </Link>
                .
                <RequiredMark />
              </span>
            </label>
            <FieldError
              id="contact-privacy-error"
              message={fieldErrors.privacy}
            />
          </div>

          <div className="max-w-full overflow-x-auto pt-1">
            {siteKey ? (
              <div aria-label="Vérification reCAPTCHA">
                <ReCAPTCHA
                  key={`${captchaKey}-${captchaTheme}`}
                  sitekey={siteKey}
                  theme={captchaTheme}
                  onChange={(token) => {
                    setCaptchaToken(token);
                    if (
                      status.type === "error" &&
                      status.message === "Validez le reCAPTCHA avant d'envoyer."
                    ) {
                      const next = validateCaptcha(token, siteKey);
                      setStatus(
                        next
                          ? { type: "error", message: next }
                          : { type: "idle" },
                      );
                    }
                  }}
                  onExpired={() => setCaptchaToken(null)}
                  onErrored={() => setCaptchaToken(null)}
                />
              </div>
            ) : (
              <p
                role="status"
                className="rounded-lg border border-border/70 bg-secondary/40 px-3 py-2 text-sm text-muted-foreground"
              >
                reCAPTCHA non configuré — ajoutez{" "}
                <code className="text-foreground">
                  NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                </code>{" "}
                dans ton environnement.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              type="submit"
              size="lg"
              disabled={status.type === "loading" || !siteKey}
              className="cursor-pointer"
            >
              {status.type === "loading" ? (
                <>
                  <Loader2 className="animate-spin" aria-hidden />
                  Envoi…
                </>
              ) : (
                "Envoyer le message"
              )}
            </Button>

            <p
              className={cn(
                "text-xs",
                status.type === "error"
                  ? "text-destructive"
                  : "text-muted-foreground",
              )}
              role={status.type === "error" ? "alert" : undefined}
              aria-live={status.type === "error" ? "assertive" : "polite"}
            >
              {status.type === "success" &&
                "Message envoyé — merci, je te répondrai bientôt."}
              {status.type === "error" && status.message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
