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
            text: [
                "Vous avez une question, un besoin ou un projet ? ",
                "Écrivez-moi directement et je vous réponds sous 24h.",
            ],
            cta: "Envoyer un email",
            link: "mailto:hugo@piedanna.dev",
        },
        {
            title: "Sur LinkedIn",
            text: [
                "Vous préférez passer par LinkedIn ? ",
                "Ajoutez-moi ou envoyez-moi un message, je réponds rapidement.",
            ],
            cta: "Voir mon profil",
            link: "https://www.linkedin.com/in/hugo-piedanna-a80570246/",
        },
        {
            title: "Prendre rendez-vous",
            text: [
                "Besoin d’échanger de vive voix ? ",
                "Réservez un créneau pour discuter de votre projet, c’est gratuit et sans engagement.",
            ],
            cta: "Réserver un appel",
            link: "https://calendly.com/hugo-piedanna/appel-decouverte",
        },
    ];

    return (
        <section
            className="container px-6 w-full mx-auto mt-20 gap-5 flex flex-col"
            id="contact">
            <div>
                <h2 className="text-3xl font-medium text-center">Discutons de votre projet !</h2>
                <p className="text-muted-foreground text-center mt-4">
                    Vous avez un projet de site web ? Écrivez-moi un message et je vous réponds sous 24h. <br />
                    Même si vous ne savez pas par où commencer, je suis là pour vous guider.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mt-10">
                {contacts.map((contact) => (
                    <Card
                        key={contact.title}
                        className="lg:p-8 p-4 relative flex flex-col text-center justify-between">
                        <div>
                            <CardTitle className="text-2xl">{contact.title}</CardTitle>
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
                        <Link
                            href={contact.link}
                            className="mt-4 btn">
                            <Button>{contact.cta}</Button>
                        </Link>
                    </Card>
                ))}
            </div>
        </section>
    );
}
