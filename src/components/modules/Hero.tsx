"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import illustration from "@/assets/Illustration.webp";

export default function Home() {
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
        <section className="pt-25">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6">
                            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
                            <span className="text-sm text-violet-400">Disponible pour nouveaux projets</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Développeur Web Freelance à <span className="gradient">Toulouse</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8">
                            Expert en <strong>développement web</strong> et <strong>création de sites internet</strong>,
                            je transforme vos projets en <strong>sites professionnels performants</strong>. Sites
                            vitrine, e-commerce, applications web : des solutions digitales adaptées aux TPE, PME et
                            entrepreneurs.
                        </p>
                        <p className="text-sm sm:text-base text-gray-400 mb-8">
                            Vous cherchez un <strong>développeur web freelance</strong> pour{" "}
                            <strong>créer votre site internet</strong> ? Je conçois des{" "}
                            <strong>sites web sur-mesure</strong>, modernes et optimisés pour le référencement naturel.
                            Basé à <strong>Toulouse</strong>, j'interviens partout en France pour vos projets de{" "}
                            <strong>création site vitrine</strong>, <strong>boutique en ligne</strong> ou{" "}
                            <strong>développement d'application web</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button
                                className="duration-300 transition-colors w-full sm:w-auto"
                                size={"lg"}
                                onClick={() => scrollToSection("contact")}>
                                Discutons de votre projet
                            </Button>
                            <Button
                                className="duration-300 transition-colors w-full sm:w-auto"
                                size={"lg"}
                                variant="outline"
                                onClick={() => scrollToSection("realisations")}>
                                Voir mes réalisations
                            </Button>
                        </div>
                    </div>

                    <Image
                        src={illustration}
                        alt="Illustration Développeur Web Freelance"
                        className="w-full h-auto rounded-lg shadow-lg hidden md:block"
                        fetchPriority="high"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
