import { Button } from "@/components/ui/button";

interface Step {
    title: string;
    description: string;
}

export default function Process() {
    const steps: Step[] = [
        {
            title: "Échange découverte",
            description:
                "On discute de votre projet autour d'un café (virtuel ou réel). Je comprends vos besoins, vos objectifs et votre budget. Vous repartez avec des premières pistes de réflexion, même si vous ne me choisissez pas.",
        },
        {
            title: "Proposition & devis",
            description:
                "Je vous envoie une proposition détaillée : fonctionnalités, technologies, planning et tarif. Tout est clair, pas de surprise. Vous décidez en toute transparence.",
        },
        {
            title: "Création du site",
            description:
                "Je développe votre site en vous tenant informé régulièrement. Vous avez accès à une version de travail pour suivre l'avancement et faire vos retours. Vous êtes impliqué autant que vous le souhaitez.",
        },
        {
            title: "Formation & mise en ligne",
            description:
                "Je vous forme à l'utilisation de votre site (mise à jour de textes, des images, des contenus). Puis on lance le site ensemble. Vous êtes autonome, vous gérez votre site au quotidien.",
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
        <section className="py-20 bg-linear-to-b from-violet-500/5 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    Comment On <span className="gradient">Travaille Ensemble</span> ?
                </h2>
                <p className="text-center text-gray-400 mb-12 text-base sm:text-lg">
                    Un process simple et transparent, de l'idée à la mise en ligne
                </p>

                <div className="space-y-6 sm:space-y-8">
                    {steps.map((step, index) => (
                        <div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                            key={index}>
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-full bg-violet-500/20 border-2 border-violet-500 flex items-center justify-center font-bold text-violet-400">
                                    {index + 1}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-sm sm:text-base text-gray-400">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        className="duration-300 transition-colors w-full sm:w-auto"
                        size="lg"
                        variant="outline"
                        onClick={() => scrollToSection("contact")}>
                        Commençons par un échange gratuit
                    </Button>
                </div>
            </div>
        </section>
    );
}
