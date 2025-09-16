"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import illustration from "@/assets/illustration.webp";

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
        <div
            className="container w-full px-6 mx-auto relative"
            id="home">
            <div className="w-[500px] lg:w-[700px] h-[350px] bg-gradient-to-tr z-10 from-violet-500 to-rose-500 rounded-[100%] absolute top-[50%] left-[25%] opacity-50 translate-x-[-50%] lg:translate-x-[-70%] translate-y-[-70%] blur-[100px]"></div>
            <div className="grid xl:grid-cols-3 gap-8 pt-[15vh]">
                <div className="flex flex-col lg:col-span-2 gap-5 h-full justify-center z-20">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-[2.3rem] lg:leading-[3.5rem] inline-flex sm:hidden">
                        Ton site ne sert à rien ? <br />
                        Changeons ça
                    </h1>
                    <h1 className="text-3xl lg:text-5xl font-bold leading-[2.3rem] lg:leading-[3.5rem] hidden sm:inline-flex">
                        Ton site ne sert à rien ? <br />
                        Transformons-le en machine à clients
                    </h1>
                    <p className="text-md lg:text-lg">
                        Aujourd’hui ton site existe… mais il dort. Tu as quelques visites, parfois aucune, et les rares
                        visiteurs repartent aussitôt. Tu passes des heures à écrire des posts ou à réfléchir à tes
                        mots-clés, mais rien ne bouge. <br />
                        Je t’aide pas à pas à le rendre incontournable.
                    </p>
                    <div className="flex items-center flex-wrap gap-3 lg:gap-4">
                        <Button
                            className="duration-300 transition-colors"
                            size="lg"
                            onClick={() => scrollToSection("offers")}>
                            <span className="text-center">{"Découvre mes offres"}</span>
                        </Button>
                        <Button
                            className="duration-300 transition-colors"
                            size="lg"
                            variant="outline"
                            onClick={() => scrollToSection("contact")}>
                            <span className="text-center">{"Contacte moi"}</span>
                        </Button>
                    </div>
                </div>
                <div className="hidden xl:flex flex-col">
                    <Image
                        src={illustration}
                        alt="Freelance aidant un entrepreneur à créer un site web optimisé en SEO, design et copywriting"
                        className="rounded-xl"
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
