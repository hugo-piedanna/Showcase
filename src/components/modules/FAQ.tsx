import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface Questions {
    question: string;
    answer: string;
}

export default function FAQ() {
    const questions: Questions[] = [
        {
            question: "Est-ce que les prix sont vraiment fixes ?",
            answer: "Oui. L’offre essentielle est à 600 € tout compris.<br /> L’offre sur-mesure démarre à 980 €, et le tarif est défini ensemble après un appel, selon vos besoins réels.",
        },
        {
            question: "Comment choisir entre les deux offres ?",
            answer: "Choisissez l’offre essentielle si vous avez besoin d’un site simple, rapide, efficace, sans fonctionnalités avancées.<br /> Optez pour l’offre sur-mesure si vous voulez plusieurs pages, un formulaire, une galerie, ou une structure spécifique.",
        },
        {
            question: "Dois-je tout payer en une fois ?",
            answer: "Non. Vous pouvez payer en 2 fois : 50 % à la commande, 50 % à la livraison.<br /> Pour les projets sur-mesure, je peux aussi proposer un échéancier adapté si besoin.",
        },
        {
            question: "Et après, qui s’occupe du site ?",
            answer: "Je reste disponible après la livraison pour vous accompagner en cas de besoin.<br /> Chaque offre inclut une période de maintenance gratuite (1 semaine pour l’offre essentielle, 3 mois pour l’offre sur-mesure).<br /> Passé ce délai, toute modification est facturée selon le temps nécessaire, avec devis préalable.",
        },
        {
            question: "Et si je n’ai pas encore mes textes ou mon logo ?",
            answer: "Pas de problème ! Je vous aide à structurer vos idées, à rédiger les grandes lignes, et je peux vous recommander des outils ou partenaires (rédaction, design…).",
        },
        {
            question: "Est-ce que le nom de domaine et l’hébergement sont inclus ?",
            answer: "Non, mais je vous guide pas à pas pour les choisir et les configurer. Je recommande des solutions simples et économiques.",
        },
        {
            question: "Est-ce qu’on peut en discuter avant de se lancer ?",
            answer: "Oui, toujours. Vous pouvez réserver un appel gratuit et sans engagement pour poser vos questions ou me présenter votre projet.",
        },
        {
            question: "Et si je ne sais pas encore ce que je veux ?",
            answer: "C’est très courant ! Justement, l’offre sur-mesure permet de construire le projet ensemble, étape par étape. Je vous accompagne pour transformer vos idées en structure claire.",
        },
    ];

    return (
        <section
            className="container px-6 w-full mx-auto mt-20 gap-5 flex flex-col"
            id="faq">
            <h2 className="text-3xl lg:text-4xl font-medium text-center">{"Questions fréquentes"}</h2>

            <Accordion
                type="single"
                collapsible
                className="w-full">
                {questions.map((item, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index + 1}`}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>
                            <div
                                className="text-muted-foreground"
                                dangerouslySetInnerHTML={{ __html: item.answer }}
                            />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
