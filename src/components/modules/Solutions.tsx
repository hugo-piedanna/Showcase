import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Solutions() {
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
                <h2 className="text-4xl font-bold text-center mb-4">
                    Un Développeur Web Freelance qui Comprend Vos <span className="gradient">Besoins Business</span>
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
                    Je suis <strong>Hugo</strong>, <strong>développeur web freelance</strong> spécialisé dans la{" "}
                    <strong>création de sites internet performants</strong>. Mon approche ? Des{" "}
                    <strong>sites web professionnels</strong> conçus pour atteindre vos objectifs : générer des leads,
                    vendre en ligne, ou simplement renforcer votre crédibilité.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card className="p-6 text-center">
                        <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-violet-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Design qui convertit</h3>
                        <p className="text-gray-400">
                            Pas juste "joli", mais pensé pour guider vos visiteurs vers l'action : prise de contact,
                            achat, inscription...
                        </p>
                    </Card>

                    <Card className="p-6 text-center">
                        <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-violet-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Performance optimale</h3>
                        <p className="text-gray-400">
                            Sites rapides, optimisés SEO, qui s'affichent parfaitement sur mobile, tablette et
                            ordinateur. Google (et vos visiteurs) adorent.
                        </p>
                    </Card>

                    <Card className="p-6 text-center">
                        <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-violet-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Technologies modernes</h3>
                        <p className="text-gray-400">
                            React, Next.js, Tailwind CSS : des outils puissants pour des sites évolutifs et maintenables
                            dans le temps.
                        </p>
                    </Card>
                </div>

                <div className="text-center">
                    <Button
                        className="duration-300 transition-colors"
                        size="lg"
                        onClick={() => scrollToSection("contact")}>
                        Parlons de Votre Projet
                    </Button>
                </div>
            </div>
        </section>
    );
}
