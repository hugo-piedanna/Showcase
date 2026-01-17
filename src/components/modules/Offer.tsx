import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface offer {
    title: string;
    description: string;
    price: number;
    details: string[];
    ideals: string[];
    cta: string;
    link: string;
}

export default function Offers() {
    const offers: offer[] = [
        {
            title: "Site Vitrine Professionnel",
            price: 1500,
            description:
                "Vous êtes <strong>artisan</strong>, <strong>consultant</strong> ou <strong>profession libérale</strong> et cherchez à créer un <strong>site vitrine</strong> qui reflète votre professionnalisme ? Je développe des <strong>sites internet vitrines</strong> modernes, rapides et optimisés pour attirer vos futurs clients.",
            details: [
                "Optimisation SEO et performance",
                "Design moderne et responsive",
                "Accompagnement jusqu’à la mise en ligne",
                "Formation à la gestion du site",
                "Formulaire de contact",
                "Espace d'administration simple",
            ],
            ideals: ["Artisans", "Consultants", "TPE", "Professions libérales"],
            cta: "Lancer mon site vitrine",
            link: "https://buy.stripe.com/aFa14pejA5aLbOT2Lj4Ni01",
        },
        {
            title: "Application Web Sur-Mesure",
            price: -1,
            description:
                "Vous avez un projet d'<strong>application web</strong> spécifique ? Je développe des <strong>applications web</strong> complexes et performantes. Que ce soit un <strong>outil interne</strong>, une <strong>plateforme client</strong> ou un <strong>SaaS</strong>, je crée des solutions adaptées à vos besoins.",
            details: [],
            ideals: ["Startups", "SaaS", "Outils métier"],
            cta: "Discuter de mon projet",
            link: "https://buy.stripe.com/14AbJ3b7o7iT2ejbhP4Ni00",
        },
    ];

    function scrollToSection(section: string) {
        const el = document.getElementById(section);
        if (el) {
            const topOffset = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topOffset - 100,
                behavior: "smooth",
            });
        }
    }

    return (
        <section
            className="py-20"
            id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                        Services de <span className="gradient">Développement Web</span>
                    </h2>
                    <p className="text-center text-gray-400 mb-12 text-base sm:text-lg">
                        Des services adaptés à vos besoins et votre budget
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                    {offers.map((offer, index) => (
                        <Card
                            className="p-8"
                            key={index}>
                            <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
                                <h3 className="text-xl sm:text-2xl font-bold">{offer.title}</h3>
                                {offer.price === -1 ? (
                                    <div>
                                        <span className="text-2xl sm:text-3xl font-bold gradient">Sur devis</span>
                                    </div>
                                ) : (
                                    <div>
                                        <span className="text-2xl sm:text-3xl font-bold gradient">{offer.price}€</span>
                                        <span className="text-gray-400 text-sm sm:text-base"> TTC</span>
                                    </div>
                                )}
                            </CardTitle>

                            <p className="text-sm sm:text-base text-gray-400 mb-2">
                                Idéal pour : {offer.ideals.join(", ")}
                            </p>

                            <CardDescription
                                className="text-sm sm:text-base text-gray-300 mb-6"
                                dangerouslySetInnerHTML={{ __html: offer.description }}
                            />
                            {offer.details.length > 0 && (
                                <div>
                                    <ul className="space-y-2 mb-6">
                                        {offer.details.map((detail, index) => (
                                            <li
                                                className="flex items-start gap-2"
                                                key={index}>
                                                <svg
                                                    className="w-5 h-5 text-primary mt-0.5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <p className="text-sm">{detail}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div
                                className="flex flex-col gap-6"
                                id="offer-footer">
                                <Button
                                    onClick={() => scrollToSection("contact")}
                                    size={"lg"}
                                    className="duration-300 transition-colors w-full sm:w-auto sm:mx-auto">
                                    {offer.cta}
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
