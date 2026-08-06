export const siteConfig = {
  name: "Hugo Piedanna",
  shortName: "Hugo Piedanna",
  title:
    "Hugo Piedanna — Développeur web full-stack à Toulouse | React, Next.js",
  description:
    "Développeur web full-stack à Toulouse : sites, applications React/Next.js/TypeScript, APIs et produits digitaux. Formateur à Ynov Campus. Disponible pour vos projets.",
  locale: "fr_FR",
  language: "fr",
  email: "hugo@piedanna.dev",
  jobTitle: "Développeur web full-stack",
  location: "Toulouse, France",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://piedanna.dev",
  ogImageAlt:
    "Hugo Piedanna — Développeur web full-stack à Toulouse (React, Next.js, TypeScript)",
  sameAs: [
    "https://www.linkedin.com/in/hugo-piedanna-a80570246",
    "https://github.com/hugo-piedanna",
  ] as const,
  knowsAbout: [
    "Développement web",
    "Développeur full-stack Toulouse",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "Applications web",
    "Formation développement",
  ] as const,
  legal: {
    /** Statut affiché dans les mentions légales */
    editorStatus: "Micro-entreprise",
    legalForm: "Entrepreneur individuel (micro-entreprise)",
    publicationDirector: "Hugo Piedanna",
    /**
     * SIRET obligatoire pour une activité pro en ligne (LCEN).
     * 14 chiffres — visible publiquement dans les mentions légales.
     * Peut aussi être fourni via NEXT_PUBLIC_LEGAL_SIRET.
     */
    siret: process.env.NEXT_PUBLIC_LEGAL_SIRET ?? "",
    /**
     * Adresse de l’établissement (ou adresse professionnelle déclarée).
     * Peut aussi être fournie via NEXT_PUBLIC_LEGAL_ADDRESS.
     */
    addressLine:
      process.env.NEXT_PUBLIC_LEGAL_ADDRESS ?? "Toulouse, France",
    /** Mention fréquente en micro-entreprise franchise en base de TVA */
    vatMention: "TVA non applicable, art. 293 B du CGI",
    host: {
      name: "Vercel Inc.",
      address:
        "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      website: "https://vercel.com",
    },
    lastUpdated: "2026-08-05",
  },
  services: [
    {
      title: "Sites & présence en ligne",
      description:
        "Sites vitrine, landings et pages de contenu. Clairs, rapides, prêts à être trouvés. Pour présenter ton activité simplement.",
    },
    {
      title: "Applications complètes",
      description:
        "Outils métier, espaces connectés, back-office. Auth, API, gestion des données et mise en production. Du front au back, je m'occupe de tout.",
    },
    {
      title: "MVP & lancement produit",
      description:
        "Tu as une idée à tester vite. On cadre le périmètre, on livre les features essentielles, et tu sors quelque chose de réel. Pas une démo jetable.",
    },
    {
      title: "Formation & transmission",
      description:
        "J'enseigne aussi React, Next.js et TypeScript. La même exigence que sur un projet client : comprendre pourquoi, pas seulement faire tourner.",
    },
  ],
  faqs: [
    {
      question: "Tu es basé où ?",
      answer:
        "À Toulouse. Je travaille avec des clients locaux et à distance partout en France.",
    },
    {
      question: "Sur quels projets tu interviens ?",
      answer:
        "Sites vitrine et landing pages, applications métier (auth, API, données), et MVP pour lancer un produit. Stack React / Next.js, full-stack jusqu’à la prod.",
    },
    {
      question: "Quelle stack tu utilises ?",
      answer:
        "Surtout React, Next.js, TypeScript et NestJS. Avec l’auth, le temps réel, les paiements ou le cloud selon le besoin.",
    },
    {
      question: "Comment démarrer un projet ?",
      answer:
        "Via le formulaire ou par e-mail. Décris ton contexte. Je réponds sous 48 h pour cadrer la suite.",
    },
  ],
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}
