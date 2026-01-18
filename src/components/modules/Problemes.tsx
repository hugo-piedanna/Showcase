"use client";

import { Card } from "@/components/ui/card";
import { ProblemItem, StaticTexts } from "@/lib/sanity.data";

interface ProblemesProps {
    items?: ProblemItem[];
    staticTexts?: StaticTexts | null;
}

export default function Problemes({ items, staticTexts }: ProblemesProps) {
    const title =
        staticTexts?.problemesTitle ||
        "Pourquoi Faire Appel à un <span class='gradient'>Développeur Web Freelance</span> ?";
    const description =
        staticTexts?.problemesDescription ||
        "Créer un <strong>site internet professionnel</strong> peut vite devenir un casse-tête : agences web hors de prix, prestataires peu réactifs, résultats décevants. En tant que <strong>développeur freelance indépendant</strong>, je vous offre une alternative efficace et abordable.";

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-4xl font-bold text-center mb-4"
                    dangerouslySetInnerHTML={{ __html: staticTexts?.problemesTitle || "" }}
                />
                <p
                    className="text-center text-gray-400 mb-12 text-base sm:text-lg max-w-3xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: staticTexts?.problemesDescription || "" }}
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {items.map((item) => (
                        <Card
                            className="p-6"
                            key={item._id}>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p
                                className="text-gray-400"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
