import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface Questions {
    question: string;
    answer: string;
}

export default function FAQ() {
    const questions: Questions[] = [
        {
            question: "Et si ça ne marche pas ?",
            answer: "C’est ta plus grande peur. Justement, tu ne payes pas seulement pour un site ou une méthode : tu payes pour comprendre.<br /> Tu appliques les bases, tu vois les résultats, tu progresses. L’objectif : que tu sois autonome et jamais bloqué.",
        },
        {
            question: "Vais-je devoir repayer pour chaque modification ?",
            answer: "Non. Mon but est exactement l’inverse. Tu sauras modifier ton site toi-même, changer tes textes, améliorer ton SEO. Tu gardes le contrôle.",
        },
        {
            question: "Je débute totalement, est-ce que c’est pour moi ?",
            answer: "Oui. Tout est pensé pour les indépendants qui n’ont aucune base technique. Tu n’as pas besoin de “parler geek” pour appliquer.",
        },
        {
            question: "Combien de temps ça prend ?",
            answer: "Chaque formation se lit et se met en pratique en moins d’une heure. Tu peux avancer pas à pas, sans pression, et voir des résultats rapidement.",
        },
    ];

    return (
        <section
            className="container px-6 w-full mx-auto mt-20 gap-5 flex flex-col"
            id="faq">
            <h2 className="text-3xl lg:text-4xl font-medium text-center">{"Les questions que tu te poses déjà"}</h2>

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
