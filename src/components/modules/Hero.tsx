"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        <section
            className="container w-full px-6 mx-auto relative"
            id="home">
            <div className="w-[500px] lg:w-[700px] h-[350px] bg-gradient-to-tr z-10 from-violet-500 to-rose-500 rounded-[100%] absolute top-[50%] left-[25%] opacity-50 translate-x-[-50%] lg:translate-x-[-70%] translate-y-[-70%] blur-[100px]"></div>
            <div className="grid xl:grid-cols-3 gap-8 pt-[15vh]">
                <div className="flex flex-col lg:col-span-2 gap-5 h-full justify-center z-20">
                    <h2 className="text-3xl lg:text-5xl font-bold leading-[2.3rem] lg:leading-[3.5rem]">
                        Création de site web professionnel à partir de <span className="gradient">600 €</span> pour
                        entreprises & indépendants
                    </h2>
                    <p className="etxt-md lg:text-lg">
                        Développeur web freelance, je vous propose des sites rapides, efficaces et abordables pour
                        améliorer votre visibilité en ligne. Idéal pour les artisans, freelances, commerçants,
                        associations ou particuliers qui veulent un site simple et professionnel, sans frais cachés.
                    </p>
                    <div className="flex items-center flex-wrap gap-3 lg:gap-4">
                        <Button
                            className="duration-300 transition-colors"
                            size="lg"
                            onClick={() => scrollToSection("offers")}>
                            <span className="xl:hidden text-center">{"Mes offres"}</span>
                            <span className="hidden xl:flex text-center">{"Découvrir mes offres"}</span>
                        </Button>
                        <Link href="https://calendly.com/hugo-piedanna/appel-decouverte">
                            <Button
                                className="duration-300 transition-colors"
                                size="lg"
                                variant="outline">
                                <span className="text-center">{"Demander un devis gratuit"}</span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="hidden xl:flex flex-col gap-8 h-full justify-center border-none rounded-[100%]">
                    <img
                        src="assets/avatar.jpg"
                        alt="Photo d'Hugo Piedanna"
                        className="rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
}
