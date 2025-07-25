import { Check } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";

interface offer {
    title: string;
    description: string;
    scalable?: boolean;
    price: number;
    details: string[];
    ps?: string;
    ideal: string[];
    cta: string;
    link: string;
}

export default function Offers() {
    const offers: offer[] = [
        {
            title: "Offre 1 – Site Vitrine Essentiel",
            price: 600,
            description:
                "Un site internet d’une seule page, idéal pour présenter votre activité, vos services, vos coordonnées, et donner confiance à vos clients.",
            details: [
                "Design responsive",
                "Conseils + accompagnement techniques",
                "Aide pour choisir un hébergement adapté",
                "Intégration de vos contenus (textes, photos, logo)",
            ],
            ideal: ["Artisans", "Coachs", "Freelances", "Evénements", "CV professionnels"],
            cta: "Je veux ce site simple et efficace",
            link: "https://calendly.com/hugo-piedanna/site-vitrine",
        },
        {
            title: "Offre 2 – Site Sur Mesure",
            price: 980,
            scalable: true,
            description:
                "Vous avez un besoin spécifique ou un projet plus complexe ? Je vous propose une offre sur-mesure, construite ensemble en fonction de vos objectifs, de votre budget et de votre contenu.",
            details: [
                "Contenu de l'offre 1",
                "Formulaire de contact*",
                "Galerie, blog, articles*",
                "Intégration externes (Maps, Calendly, etc.)*",
            ],
            ps: "Selon vos besoins.",
            ideal: ["Commerçants", "Associations", "Indépendants", "Petites entreprises"],
            cta: "Demander un devis personnalisé",
            link: "https://calendly.com/hugo-piedanna/site-sur-mesure",
        },
    ];

    return (
        <section
            className="container px-6 w-full mx-auto mt-20 gap-5 flex flex-col"
            id="offers">
            <div>
                <h2 className="text-3xl font-medium text-center">{"Mes offres"}</h2>
                <p className="text-muted-foreground text-center mt-4">
                    Deux offres simples, sans frais cachés, qui répondent à vos besoins.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 mt-10">
                {offers.map((offer, index) => (
                    <Card
                        className="lg:p-8 p-4 relative flex flex-col justify-between"
                        key={index}>
                        <CardTitle className="text-2xl">
                            {offer.title}
                            <br />
                            <span className="font-light text-lg">
                                {offer.scalable ? "À partir de" : ""}
                                <span className="text-2xl font-bold"> {offer.price} €</span>
                                {" TTC"}
                            </span>
                        </CardTitle>
                        <CardDescription>{offer.description}</CardDescription>
                        <div>
                            <span className="text-lg font-semibold">Contenu :</span>
                            <ul className="text-muted-foreground">
                                {offer.details.map((detail, index) => (
                                    <li key={index}>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Check
                                                className="inline mr-2 text-primary"
                                                size={18}
                                            />
                                            <span>{detail}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            {offer.ps && (
                                <p className="text-sm text-muted-foreground mt-2">
                                    <span className="font-light">*</span> {offer.ps}
                                </p>
                            )}
                        </div>
                        <div
                            className="flex flex-col gap-6 mt-auto"
                            id="offer-footer">
                            {offer.ideal && (
                                <div>
                                    <span className="text-lg font-semibold">Parfait pour :</span>
                                    <ul className="text-muted-foreground flex flex-row gap-1 mt-2">
                                        {offer.ideal.map((item, index) => (
                                            <li
                                                key={index}
                                                className="text-sm">
                                                <Badge variant={"outline"}>{item}</Badge>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="mx-auto">
                                <Link href={offer.link}>
                                    <Button>{offer.cta}</Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="mt-10">
                <h3 className="text-3xl font-medium text-center">{"Comparatif des offres"}</h3>
                <Table className="mt-6">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1/2">Avantage</TableHead>
                            <TableHead className="text-center">Offre 1</TableHead>
                            <TableHead className="text-center">Offre 2</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Nombre de pages maximum</TableCell>
                            <TableCell className="text-center">1</TableCell>
                            <TableCell className="text-center">8</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Design responsive</TableCell>
                            <TableCell className="text-center">
                                <Check
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                            <TableCell className="text-center">
                                <Check
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Conseils + accompagnement techniques</TableCell>
                            <TableCell className="text-center">
                                <Check
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                            <TableCell className="text-center">
                                <Check
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Paiement en 2 fois</TableCell>
                            <TableCell className="text-center">
                                <Check
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                            <TableCell className="text-center">
                                <Check
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Intégration de vos contenus (textes, photos, logo)</TableCell>
                            <TableCell className="text-center">
                                <Check
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                            <TableCell className="text-center">
                                <Check
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Formulaire de contact</TableCell>
                            <TableCell className="text-center">
                                <IconX
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                            <TableCell className="text-center">
                                <Check
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Galerie, blog, articles</TableCell>
                            <TableCell className="text-center">
                                <IconX
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                            <TableCell className="text-center">
                                <Check
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Intégration externes (Maps, Calendly, etc.)</TableCell>
                            <TableCell className="text-center">
                                <IconX
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                            <TableCell className="text-center">
                                <Check
                                    className="inline mr-2 text-primary"
                                    size={18}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Maintenance après livraison</TableCell>
                            <TableCell className="text-center">1 semaine</TableCell>
                            <TableCell className="text-center">1 mois</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Délai moyen de livraison</TableCell>
                            <TableCell className="text-center">10 à 15 jours</TableCell>
                            <TableCell className="text-center">2 à 4 semaines</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}
