import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const dynamic = "force-dynamic";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Pack Site + Formations pour indépendants & TPE – Hugo Piedanna",
    description:
        "Boostez votre visibilité et vos conversions ! Site vitrine sur-mesure + 3 formations pour être autonome. Livraison rapide, accompagnement inclus. Par Hugo Piedanna, développeur web freelance à Toulouse.",
    keywords: [
        "pack site web",
        "formations web",
        "création site internet",
        "site professionnel indépendant",
        "freelance Next.js",
        "site pour petites entreprises",
        "Hugo Piedanna",
        "site + formations",
        "développeur web Toulouse",
        "développeur web freelance",
        "création site vitrine sur-mesure",
        "site internet pour indépendants",
        "formation SEO et Copywriting",
        "optimiser site web pour conversion",
        "freelance Toulouse / France",
        "accompagnement site web",
        "site rapide et professionnel",
    ],
    openGraph: {
        title: "Site vitrine + Formations pour indépendants – Hugo Piedanna",
        description:
            "Pack complet : site sur-mesure livré en 1 semaine + 3 formations SEO, UX/UI, Copywriting pour être autonome et convertir plus.",
        url: "https://piedanna.dev",
        siteName: "Hugo Piedanna - Pack Site + Formations",
        images: [
            {
                url: "https://piedanna.dev/og-image.png",
                width: 1200,
                height: 630,
                alt: "Pack site + formations freelance",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Site vitrine + Formations pour indépendants – Hugo Piedanna",
        description:
            "Pack complet : site sur-mesure livré en 1 semaine + 3 formations SEO, UX/UI, Copywriting pour être autonome et convertir plus.",
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
                                    "@type": "FAQPage",
                                    "@id": "https://piedanna.dev#faq",
                                    mainEntity: [
                                        {
                                            "@type": "Question",
                                            name: "Et si ça ne marche pas ?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "C’est ta plus grande peur. Justement, tu ne payes pas seulement pour un site ou une méthode : tu payes pour comprendre. Tu appliques les bases, tu vois les résultats, tu progresses. L’objectif : que tu sois autonome et jamais bloqué.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Je débute totalement, est-ce que c’est pour moi ?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Oui. Tout est pensé pour les indépendants qui n’ont aucune base technique. Tu n’as pas besoin de “parler geek” pour appliquer.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Combien de temps ça prend ?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Chaque formation se lit et se met en pratique en moins d’une heure. Tu peux avancer pas à pas, sans pression, et voir des résultats rapidement.",
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
