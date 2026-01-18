"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Offer, StaticTexts } from "@/lib/sanity.data";

interface OffersProps {
    offers?: Offer[];
    staticTexts?: StaticTexts | null;
}

export default function Offers({ offers, staticTexts }: OffersProps) {
    if (!offers || offers.length === 0) {
        return null;
    }

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
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-center mb-4"
                        dangerouslySetInnerHTML={{ __html: staticTexts?.offersTitle || "" }}
                    />
                    <p className="text-center text-gray-400 mb-12 text-base sm:text-lg">
                        {staticTexts?.offersDescription}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                    {offers.map((offer) => (
                        <Card
                            className="p-8"
                            key={offer._id}>
                            <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
                                <h3 className="text-xl sm:text-2xl font-bold">{offer.title}</h3>
                                {offer.price === -1 ? (
                                    <div>
                                        <span className="text-2xl sm:text-3xl font-bold gradient">
                                            {staticTexts?.offersOnQuoteLabel}
                                        </span>
                                    </div>
                                ) : (
                                    <div>
                                        <span className="text-2xl sm:text-3xl font-bold gradient">{offer.price}€</span>
                                        <span className="text-gray-400 text-sm sm:text-base">
                                            {" "}
                                            {staticTexts?.offersTtcLabel}
                                        </span>
                                    </div>
                                )}
                            </CardTitle>

                            <p className="text-sm sm:text-base text-gray-400 mb-2">
                                {staticTexts?.offersIdealForLabel} {offer.ideals.join(", ")}
                            </p>

                            <CardDescription
                                className="text-sm sm:text-base text-gray-300 mb-6"
                                dangerouslySetInnerHTML={{ __html: offer.description }}
                            />
                            {offer.details && offer.details.length > 0 && (
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
