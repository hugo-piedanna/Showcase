import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
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
    title: "Développeur Web Freelance Toulouse | Création Site Internet Professionnel",
    description:
        "Développeur web freelance spécialisé création site vitrine, e-commerce et application web. Sites modernes, rapides et optimisés SEO. Devis gratuit, livraison rapide. Basé à Toulouse, intervention France entière.",
    keywords: [
        "développeur web freelance",
        "création site internet",
        "développeur freelance",
        "site web sur-mesure",
        "développeur web Toulouse",
        "création site vitrine",
        "site internet professionnel",
        "développeur react freelance",
        "site web Toulouse",
        "développeur Next.js",
        "Hugo Piedanna",
        "freelance web Toulouse",
        "création site e-commerce",
        "application web sur-mesure",
        "refonte site web",
        "site responsive",
        "optimisation SEO",
        "développeur indépendant",
        "site vitrine TPE PME",
        "développeur web Gironde",
        "freelance Nouvelle-Aquitaine",
    ],
    openGraph: {
        title: "Développeur Web Freelance Toulouse | Sites Modernes & Performants",
        description:
            "Création de sites vitrine et applications web sur-mesure. Développeur freelance React/Next.js. Livraison en 3 semaines, interface admin incluse. Toulouse & France entière.",
        url: "https://piedanna.dev",
        siteName: "Hugo Piedanna - Développeur Web Freelance",
        images: [
            {
                url: "https://piedanna.dev/og-image.png",
                width: 1200,
                height: 630,
                alt: "Hugo Piedanna - Développeur Web Freelance Toulouse",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hugo Piedanna | Développeur Web Freelance Toulouse",
        description:
            "Création de sites vitrine et applications web sur-mesure. Basé à Toulouse, disponible dans toute la France.",
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
                <meta
                    name="description"
                    content={metadata.description!}
                />

                <meta
                    name="keywords"
                    content={Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : metadata.keywords || ""}
                />
                <meta
                    name="robots"
                    content="index, follow"
                />

                {/* Données structurées Schema.org */}
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
                                    jobTitle: "Développeur Web Freelance",
                                    description:
                                        "Développeur web freelance spécialisé en création de sites vitrine et applications web sur-mesure. Expert React, Next.js et développement moderne.",
                                    image: "https://piedanna.dev/og-image.png",
                                    url: "https://piedanna.dev",
                                    email: "hugo@piedanna.dev",
                                    sameAs: [
                                        "https://www.linkedin.com/in/hugo-piedanna-a80570246/",
                                        "https://github.com/hugo-piedanna", // Ajoute ton GitHub si public
                                    ],
                                    worksFor: {
                                        "@type": "Organization",
                                        name: "Hugo Piedanna - Développeur Web Freelance",
                                    },
                                    knowsAbout: [
                                        "Développement Web",
                                        "React",
                                        "Next.js",
                                        "JavaScript",
                                        "TypeScript",
                                        "SEO",
                                        "UX/UI Design",
                                    ],
                                },
                                {
                                    "@type": "ProfessionalService",
                                    "@id": "https://piedanna.dev#business",
                                    name: "Hugo Piedanna - Développeur Web Freelance",
                                    description:
                                        "Création de sites internet professionnels et applications web sur-mesure pour TPE, PME et entrepreneurs. Sites vitrines, e-commerce, applications métier.",
                                    url: "https://piedanna.dev",
                                    image: "https://piedanna.dev/og-image.png",
                                    priceRange: "€€",
                                    telephone: "+33-6-17-42-47-94",
                                    email: "hugo@piedanna.dev",
                                    address: {
                                        "@type": "PostalAddress",
                                        addressLocality: "Toulouse",
                                        addressRegion: "Occitanie",
                                        postalCode: "31000",
                                        addressCountry: "FR",
                                    },
                                    geo: {
                                        "@type": "GeoCoordinates",
                                        latitude: 43.60437768490977,
                                        longitude: 1.443378890799077,
                                    },
                                    areaServed: [
                                        {
                                            "@type": "City",
                                            name: "Toulouse",
                                        },
                                        {
                                            "@type": "State",
                                            name: "Haute-Garonne",
                                        },
                                        {
                                            "@type": "State",
                                            name: "Occitanie",
                                        },
                                        {
                                            "@type": "Country",
                                            name: "France",
                                        },
                                    ],
                                    hasOfferCatalog: {
                                        "@type": "OfferCatalog",
                                        name: "Services de développement web",
                                        itemListElement: [
                                            {
                                                "@type": "Offer",
                                                itemOffered: {
                                                    "@type": "Service",
                                                    name: "Création Site Vitrine Professionnel",
                                                    description:
                                                        "Site vitrine moderne, responsive et optimisé SEO avec interface d'administration. Idéal pour artisans, consultants, TPE et professions libérales.",
                                                    provider: {
                                                        "@id": "https://piedanna.dev#business",
                                                    },
                                                },
                                                price: "1500",
                                                priceCurrency: "EUR",
                                            },
                                            {
                                                "@type": "Offer",
                                                itemOffered: {
                                                    "@type": "Service",
                                                    name: "Projet Sur-Mesure",
                                                    description:
                                                        "E-commerce, applications web, plateformes métier, refonte complète. Solutions personnalisées selon vos besoins.",
                                                    provider: {
                                                        "@id": "https://piedanna.dev#business",
                                                    },
                                                },
                                                priceSpecification: {
                                                    "@type": "PriceSpecification",
                                                    priceCurrency: "EUR",
                                                    price: "Sur devis",
                                                },
                                            },
                                        ],
                                    },
                                    openingHoursSpecification: [
                                        {
                                            "@type": "OpeningHoursSpecification",
                                            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                            opens: "09:00",
                                            closes: "18:00",
                                        },
                                    ],
                                },
                                {
                                    "@type": "FAQPage",
                                    "@id": "https://piedanna.dev#faq",
                                    mainEntity: [
                                        {
                                            "@type": "Question",
                                            name: "Combien coûte la création d'un site web par un développeur freelance ?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Le prix d'un site web varie selon la complexité : un site vitrine coûte entre 1200€ et 3000€, un site e-commerce entre 2500€ et 8000€, et une application web sur-mesure à partir de 5000€. Ces tarifs incluent le design, le développement, l'hébergement première année et la formation.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Combien de temps pour avoir mon site en ligne ?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Entre 3 et 6 semaines selon la complexité du projet et votre réactivité pour fournir les contenus (textes, images). Un site vitrine : environ 3 semaines. Un e-commerce : 4 à 6 semaines.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Proposez-vous un paiement échelonné pour la création de site ?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Oui, paiement en 3 fois sans frais pour tout projet supérieur à 2000€ : 30% à la signature, 40% à mi-projet, 30% à la livraison. Cette facilité de paiement rend la création de site web accessible à tous les budgets.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Est-ce que je pourrai modifier mon site moi-même ?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Oui ! Vous aurez accès à une interface d'administration intuitive pour modifier vos textes, images, ajouter des pages simples. Je vous forme à son utilisation. Pour des modifications plus complexes, je reste disponible.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Travaillez-vous avec des clients hors de Toulouse ?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Absolument ! 80% de mes échanges se font en visio. Que vous soyez à Paris, Lyon, Marseille ou ailleurs en France, on travaille ensemble sans problème. Basé à Toulouse, j'interviens partout en France.",
                                            },
                                        },
                                    ],
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "https://piedanna.dev#website",
                                    url: "https://piedanna.dev",
                                    name: "Hugo Piedanna - Développeur Web Freelance",
                                    description:
                                        "Développeur web freelance spécialisé création site vitrine, e-commerce et application web. Toulouse & France entière.",
                                    publisher: {
                                        "@id": "https://piedanna.dev#hugo",
                                    },
                                    inLanguage: "fr-FR",
                                },
                            ],
                        }),
                    }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
