import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

import Inovancy from "@/assets/Inovancy.webp";
import Chariot from "@/assets/Chariot.webp";
import Playsir from "@/assets/Playsir.webp";

interface Project {
    image: StaticImageData;
    title: string;
    description: string;
    link: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            image: Inovancy,
            title: "Inovancy",
            description: "Site vitrine pour une ESN spécialisée dans les parcs d'attractions.",
            link: "https://inovancy.dev",
        },
        {
            image: Chariot,
            title: "Chariot",
            description: "Site vitrine d'un SaaS de gestion de campagne D&D.",
            link: "#",
        },
        {
            image: Playsir,
            title: "Playsir",
            description: "Landing page pour une site e-commerce de vente de jouets pour adultes décoratifs.",
            link: "#",
        },
    ];

    return (
        <section
            id="realisations"
            className="p-20 bg-linear-to-b from-violet-500/5 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Projets <span className="gradient">Récents</span>
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg">
                    Découvrez mes <strong>réalisations</strong> : sites vitrine, e-commerce et applications web
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            className="overflow-hidden p-0 gap-0 hover:translate-y-1 transition-transform duration-300"
                            key={index}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="rounded-xl h-55"
                                style={{ objectFit: "cover" }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                                {project.link === "#" ? (
                                    <p className="text-muted-foreground italic mb-4 text-sm">
                                        (Site actuellement indisponible)
                                    </p>
                                ) : (
                                    <a
                                        href={project.link}
                                        className="text-violet-400 hover:text-violet-300 text-sm font-semibold">
                                        Voir le projet →
                                    </a>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
