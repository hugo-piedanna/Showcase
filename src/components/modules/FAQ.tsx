import { Card } from "@/components/ui/card";

interface Questions {
    question: string;
    answer: string;
}

export default function FAQ() {
    const questions: Questions[] = [
        {
            question: "Combien coûte la création d'un site web par un développeur freelance ?",
            answer: "Le prix d'un site web varie selon la complexité : un site vitrine coûte environ 1500€, un site e-commerce entre 2500€ et 8000€, et une application web sur-mesure à partir de 5000€. Ces tarifs incluent le design, le développement, l'espace administrateur et la formation.",
        },
        {
            question: "Combien de temps pour avoir mon site en ligne ?",
            answer: "Entre 3 et 6 semaines selon la complexité du projet et votre réactivité pour fournir les contenus (textes, images). Un site vitrine : ~3 semaines. Un e-commerce : ~4-6 semaines.",
        },
        {
            question: "Proposez-vous un paiement échelonné ?",
            answer: "Oui, paiement en 2 fois sans frais pour tout projet supérieur à 2000€ : 40% à la signature, 60% à la livraison. Cette facilité de paiement rend la création de site web accessible à tous les budgets.",
        },
        {
            question: "Est-ce que je pourrai modifier mon site moi-même ?",
            answer: "Oui ! Je vous forme à l'utilisation d'un CMS intuitif. Vous pourrez modifier textes, images, modifier vos informations. Pour des modifications plus complexes, je reste disponible.",
        },
        {
            question: "Travaillez-vous avec des clients hors de Toulouse ?",
            answer: "Absolument ! 80% de mes échanges se font en visio. Que vous soyez à Paris, Lyon, Marseille ou ailleurs en France, on travaille ensemble sans problème. Basé à Toulouse, j'interviens partout en France.",
        },
    ];

    return (
        <section
            id="faq"
            className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    Questions <span className="gradient">Fréquentes</span>
                </h2>
                <p className="text-center text-gray-400 mb-12 text-base sm:text-lg">
                    Tout ce que vous devez savoir sur mes services
                </p>

                <div className="flex flex-col gap-4 sm:gap-6">
                    {questions.map((question, index) => (
                        <Card
                            className="p-4 sm:p-6"
                            key={index}>
                            <h3 className="font-bold mb-2 text-base sm:text-lg">{question.question}</h3>
                            <p className="text-gray-400 text-sm sm:text-base">{question.answer}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
