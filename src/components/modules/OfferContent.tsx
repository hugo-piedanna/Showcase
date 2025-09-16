"use client";

import { LaptopMinimal, PenIcon, SearchIcon } from "lucide-react";

export default function Trust() {
    return (
        <section className="container px-6 w-full mx-auto mt-20">
            <div>
                <h2 className="text-3xl lg:text-4xl font-medium text-center">{"Ce que tu vas vraiment maîtriser"}</h2>
                <p className="text-muted-foreground text-center mt-4 max-w-4xl mx-auto">
                    Ces formations ne sont pas des cours théoriques. Elles vont droit au but, avec des exemples concrets
                    et des exercices simples que tu peux appliquer immédiatement sur ton site ou dans ta communication.
                    En moins d’une heure chacune, tu as les bases pour attirer des visiteurs et les transformer en
                    clients.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 divide-y-2 lg:divide-x-2 lg:divide-y-0 lg:w-full divide-dashed divide-accent mt-10">
                <div className="flex flex-col items-center justify-center gap-4 p-3">
                    <span className="text-3xl lg:text-4xl font-bold">SEO</span>
                    <SearchIcon
                        className="text-secondary"
                        size={32}
                    />
                    <p className="text-muted-foreground text-sm text-center">
                        Fini le site invisible. Apprends à trouver tes mots-clés et à optimiser tes pages pour Google.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-3">
                    <span className="text-3xl lg:text-4xl font-bold">Copywriting</span>
                    <PenIcon
                        className="text-secondary"
                        size={32}
                    />
                    <p className="text-muted-foreground text-sm text-center">
                        Découvre comment parler la langue de tes clients et écrire des textes qui donnent envie
                        d’acheter.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-3">
                    <span className="text-3xl lg:text-4xl font-bold">UI/UX</span>
                    <LaptopMinimal
                        className="text-secondary"
                        size={32}
                    />
                    <p className="text-muted-foreground text-sm text-center">
                        Comprends ce qui fait fuir tes visiteurs et comment construire une expérience fluide et
                        rassurante.
                    </p>
                </div>
            </div>
        </section>
    );
}
