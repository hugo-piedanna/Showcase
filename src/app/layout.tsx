import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sites web pour indépendants & TPE – Hugo Piedanna",
    description:
        "Développeur web freelance, je crée des sites professionnels, rapides et abordables. Offre vitrine à 600€ et création sur-mesure pour les indépendants, artisans et TPE.",
    keywords: [
        "développeur web freelance",
        "création site internet",
        "site vitrine 600€",
        "site web sur mesure",
        "freelance Next.js",
        "site pour indépendants",
        "création site pour petites entreprises",
        "Hugo Piedanna",
    ],
    openGraph: {
        title: "Site internet pro à prix clair – Développeur freelance",
        description:
            "Offre claire à 600€ pour un site vitrine, ou projet sur-mesure selon vos besoins. Par Hugo Piedanna, freelance web à Toulouse.",
        url: "https://piedanna.dev",
        siteName: "Hugo Piedanna - Développeur web freelance",
        images: [
            {
                url: "https://piedanna.dev/og-image.png",
                width: 1200,
                height: 630,
                alt: "Exemple site vitrine freelance",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Site internet pro à prix clair – Développeur freelance",
        description:
            "Offre site vitrine à 600€, projet sur-mesure selon vos besoins. Créé par Hugo Piedanna, développeur web freelance à Toulouse.",
        images: ["https://piedanna.dev/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Person",
                                    "@id": "https://piedanna.dev#hugo",
                                    name: "Hugo Piedanna",
                                    jobTitle: "Développeur web freelance",
                                    image: "https://piedanna.dev/og-image.png",
                                    url: "https://piedanna.dev",
                                    sameAs: ["https://www.linkedin.com/in/hugo-piedanna-a80570246/"],
                                },
                                {
                                    "@type": "LocalBusiness",
                                    "@id": "https://piedanna.dev#business",
                                    name: "Hugo Piedanna - Développeur Web",
                                    url: "https://piedanna.dev",
                                    image: "https://piedanna.dev/og-image.png",
                                    priceRange: "€€",
                                    address: {
                                        "@type": "PostalAddress",
                                        postalCode: "31000",
                                        addressLocality: "Toulouse",
                                        addressCountry: "FR",
                                    },
                                    potentialAction: {
                                        "@type": "ReserveAction",
                                        target: {
                                            "@type": "EntryPoint",
                                            urlTemplate: "https://calendly.com/hugo-piedanna/appel-decouverte",
                                            inLanguage: "fr",
                                            actionPlatform: [
                                                "http://schema.org/DesktopWebPlatform",
                                                "http://schema.org/MobileWebPlatform",
                                            ],
                                        },
                                    },
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "https://piedanna.dev#website",
                                    name: "Hugo Piedanna - Création de site internet",
                                    url: "https://piedanna.dev",
                                    description:
                                        "Création de site internet pour indépendants et petites entreprises. Offre vitrine ou sur-mesure, hébergement, maintenance et accompagnement inclus.",
                                    inLanguage: "fr-FR",
                                    publisher: {
                                        "@id": "https://piedanna.dev#hugo",
                                    },
                                    potentialAction: {
                                        "@type": "SearchAction",
                                        target: "https://piedanna.dev#contact",
                                        "query-input": "required name=search_term_string",
                                    },
                                },
                                {
                                    "@type": "FAQPage",
                                    "@id": "https://piedanna.dev#faq",
                                    mainEntity: [
                                        {
                                            "@type": "Question",
                                            name: "Et si je ne sais pas encore ce que je veux ?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "C’est très courant ! Justement, l’offre sur-mesure permet de construire le projet ensemble, étape par étape. Je vous accompagne pour transformer vos idées en structure claire.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Combien de temps prend la création du site ?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "L’offre vitrine est livrée en 10 à 15 jours, l’offre sur-mesure en 2 à 4 semaines. Les délais sont définis ensemble au début du projet.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Et après, qui s’occupe du site ?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Chaque offre inclut une période de maintenance gratuite (1 semaine pour l’essentielle, 1 mois pour la sur-mesure). Au-delà, les modifications sont facturées selon le temps nécessaire, avec devis préalable.",
                                            },
                                        },
                                    ],
                                },
                            ],
                        }),
                    }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>{children}</body>
        </html>
    );
}
