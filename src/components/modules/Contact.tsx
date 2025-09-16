"use client";

import Link from "next/link";
import { Card, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface Contact {
    title: string;
    text: string[];
    cta: string;
    link: string;
}

export default function Contact() {
    const contacts: Contact[] = [
        {
            title: "Par email",
            text: ["Tu préfères écrire tranquillement ? ", "Envoie-moi un message et je te réponds sous 24h."],
            cta: "Écrire un email",
            link: "mailto:hugo@piedanna.dev",
        },
        {
            title: "Sur LinkedIn",
            text: ["Envie de voir mon parcours et échanger directement ? ", "Retrouve-moi sur LinkedIn"],
            cta: "Me rejoindre sur LinkedIn",
            link: "https://www.linkedin.com/in/hugo-piedanna-a80570246/",
        },
        {
            title: "Prendre rendez-vous",
            text: ["Besoin d’en parler directement, sans perdre de temps ?", "Réserve un appel de 15 minutes"],
            cta: "Réserver un appel",
            link: "https://calendly.com/hugo-piedanna/session",
        },
    ];

    return (
        <section
            className="container px-6 w-full mx-auto mt-20 gap-5 flex flex-col"
            id="contact">
            <div>
                <h2 className="text-3xl lg:text-4xl font-medium text-center">
                    <span className="inline-flex sm:hidden">Prêt à passer à l’action ?</span>
                    <span className="hidden sm:inline-flex">
                        Prêt à transformer ton site en vrai outil de business ?
                    </span>
                </h2>
                <p className="text-muted-foreground text-center mt-4">
                    Choisis le moyen de contact qui te convient le mieux et faisons le premier pas ensemble.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mt-10">
                {contacts.map((contact) => (
                    <Card
                        key={contact.title}
                        className="lg:p-8 p-4 relative flex flex-col text-center justify-between">
                        <div>
                            <CardTitle className="text-2xl">
                                <h3>{contact.title}</h3>
                            </CardTitle>
                            <div className="mt-2">
                                {contact.text.map((line, index) => (
                                    <p
                                        key={index}
                                        className="text-muted-foreground">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Link
                                href={contact.link}
                                className="mt-4 btn"
                                target="_blank">
                                <Button className="duration-300 transition-colors">{contact.cta}</Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
