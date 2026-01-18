"use client";

import { Button } from "@/components/ui/button";
import { ProcessStep, StaticTexts } from "@/lib/sanity.data";

interface ProcessProps {
    steps?: ProcessStep[];
    staticTexts?: StaticTexts | null;
}

export default function Process({ steps, staticTexts }: ProcessProps) {
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

    const title = staticTexts?.processTitle || "Comment On <span class='gradient'>Travaille Ensemble</span> ?";
    const description =
        staticTexts?.processDescription || "Un process simple et transparent, de l'idée à la mise en ligne";
    const cta = staticTexts?.processCta || "Commençons par un échange gratuit";

    if (!steps || steps.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-linear-to-b from-violet-500/5 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-3xl sm:text-4xl font-bold text-center mb-4"
                    dangerouslySetInnerHTML={{ __html: staticTexts?.processTitle || "" }}
                />
                <p className="text-center text-gray-400 mb-12 text-base sm:text-lg">
                    {staticTexts?.processDescription}
                </p>

                <div className="space-y-6 sm:space-y-8">
                    {steps.map((step, index) => (
                        <div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                            key={step._id}>
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
                        {staticTexts?.processCta}
                    </Button>
                </div>
            </div>
        </section>
    );
}
