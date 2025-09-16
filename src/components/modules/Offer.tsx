import { Check } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface offer {
    title: string;
    description: string;
    scalable?: boolean;
    price: number;
    details: string[];
    ps?: string;
    bref: string;
    cta: string;
    link: string;
}

export default function Offers() {
    const offers: offer[] = [
        {
            title: "Pack Formations",
            price: 199,
            description:
                "Ton site existe déjà, mais il ne décolle pas ?<br /> Ce pack est fait pour toi si tu veux enfin comprendre comment rendre ton site visible et convaincant.",
            details: [
                "Formation SEO → Apprends à trouver les bons mots-clés et à te placer sur Google.",
                "Formation Copywriting → Savoir écrire des textes qui accrochent et qui vendent.",
                "Formation UX/UI → Offrir une navigation claire et agréable qui garde tes visiteurs.",
            ],
            bref: "En quelques heures, tu as les clés pour optimiser ton site vitrine et attirer tes premiers vrais clients.",
            cta: "Je veux apprendre",
            link: "https://buy.stripe.com/aFa14pejA5aLbOT2Lj4Ni01",
        },
        {
            title: "Pack Site + Formations",
            price: 980,
            scalable: true,
            description:
                "Ton site est inexistant ou inutile ?<br /> Repars de zéro avec un site qui attire. Je crée pour toi un site vitrine professionnel, optimisé pour Google dès le lancement, avec un design clair et des textes pensés pour convertir.",
            details: [
                "Un site vitrine simple, pro et responsive*",
                "Optimisation SEO incluse",
                "Accompagnement jusqu’à la mise en ligne",
                "Les 3 formations pour être totalement autonome",
            ],
            ps: "Selon vos besoins.",
            bref: "Pas juste un site. Un site + la compétence pour le faire vivre.",
            cta: "Je veux un site qui attire",
            link: "https://buy.stripe.com/14AbJ3b7o7iT2ejbhP4Ni00",
        },
    ];

    return (
        <section
            className="container px-6 w-full mx-auto mt-20"
            id="offers">
            <div>
                <h2 className="text-3xl lg:text-4xl font-medium text-center">{"Mes offres"}</h2>
                <p className="text-muted-foreground text-center mt-4">Choisis l’offre qui correspond à ta situation.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 mt-10">
                {offers.map((offer, index) => (
                    <Card
                        className="lg:p-8 p-4 relative group"
                        key={index}>
                        <CardTitle className="flex justify-between text-xl lg:text-2xl">
                            <h3>{offer.title}</h3>
                            <p className="font-light text-lg">
                                {offer.scalable ? "À partir de" : ""}
                                <span className="text-xl lg:text-2xl font-bold"> {offer.price} €</span>
                                {" TTC"}
                            </p>
                        </CardTitle>

                        <CardDescription dangerouslySetInnerHTML={{ __html: offer.description }} />
                        <div>
                            <span className="text-md lg:text-lg font-semibold">Contenu :</span>
                            <ul className="text-muted-foreground">
                                {offer.details.map((detail, index) => (
                                    <li key={index}>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Check
                                                className="inline mr-2 text-primary"
                                                size={18}
                                            />
                                            <p>{detail}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            {offer.ps && <p className="text-sm text-muted-foreground mt-2">* {offer.ps}</p>}
                        </div>
                        <div
                            className="flex flex-col gap-6 mt-auto"
                            id="offer-footer">
                            <p className="text-muted-foreground text-sm mt-4">{offer.bref}</p>
                            <div className="mx-auto">
                                <Link href={offer.link}>
                                    <Button className="duration-300 transition-colors">{offer.cta}</Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
