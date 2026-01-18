"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SolutionItem, StaticTexts } from "@/lib/sanity.data";

interface SolutionsProps {
    items?: SolutionItem[];
    staticTexts?: StaticTexts | null;
}

export default function Solutions({ items, staticTexts }: SolutionsProps) {
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

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-linear-to-b from-violet-500/5 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-4xl font-bold text-center mb-4"
                    dangerouslySetInnerHTML={{ __html: staticTexts?.solutionsTitle || "" }}
                />
                <p
                    className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: staticTexts?.solutionsDescription || "" }}
                />

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {items.map((item) => (
                        <Card
                            className="p-6 text-center"
                            key={item._id}>
                            <div
                                className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                                dangerouslySetInnerHTML={{ __html: item.icon }}
                            />
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        className="duration-300 transition-colors"
                        size="lg"
                        onClick={() => scrollToSection("contact")}>
                        {staticTexts?.solutionsCta}
                    </Button>
                </div>
            </div>
        </section>
    );
}
