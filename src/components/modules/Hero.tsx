"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import illustration from "@/assets/Illustration.webp";
import { StaticTexts } from "@/lib/sanity.data";

interface HeroProps {
    staticTexts?: StaticTexts | null;
}

export default function Hero({ staticTexts }: HeroProps) {
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
                            <span
                                className="text-sm text-violet-400"
                                dangerouslySetInnerHTML={{ __html: staticTexts?.heroAvailabilityText || "" }}></span>
                        </div>
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            dangerouslySetInnerHTML={{ __html: staticTexts?.heroTitle || "" }}
                        />
                        {staticTexts?.heroSubtitle && (
                            <p
                                className="text-base sm:text-lg md:text-xl text-gray-400 mb-8"
                                dangerouslySetInnerHTML={{ __html: staticTexts?.heroSubtitle }}
                            />
                        )}
                        {staticTexts?.heroDescription && (
                            <p
                                className="text-sm sm:text-base text-gray-400 mb-8"
                                dangerouslySetInnerHTML={{ __html: staticTexts?.heroDescription }}
                            />
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button
                                className="duration-300 transition-colors w-full sm:w-auto"
                                size={"lg"}
                                onClick={() => scrollToSection("contact")}>
                                {staticTexts?.heroCtaPrimary}
                            </Button>
                            <Button
                                className="duration-300 transition-colors w-full sm:w-auto"
                                size={"lg"}
                                variant="outline"
                                onClick={() => scrollToSection("realisations")}>
                                {staticTexts?.heroCtaSecondary}
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
