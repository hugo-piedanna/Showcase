import { Card } from "@/components/ui/card";

export default function Problemes() {
    return (
        <section className="p-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Pourquoi Faire Appel à un <span className="gradient">Développeur Web Freelance</span> ?
                </h2>
                <p className="text-center text-gray-400 mb-12 text-lg px-4">
                    Créer un <strong>site internet professionnel</strong> peut vite devenir un casse-tête : agences web
                    hors de prix, prestataires peu réactifs, résultats décevants.
                    <br />
                    En tant que <strong>développeur freelance indépendant</strong>, je vous offre une alternative
                    efficace et abordable.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                        <h3 className="text-xl font-semibold mb-3">Votre site web actuel ne génère aucun contact</h3>
                        <p className="text-gray-400">
                            Vous avez un <strong>site internet</strong>, mais il ne convertit pas vos visiteurs en
                            clients. Design daté, contenu peu engageant, temps de chargement trop long : autant de
                            raisons qui font fuir vos prospects.
                        </p>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-xl font-semibold mb-3">
                            Vous n'avez pas encore de site et perdez des clients
                        </h3>
                        <p className="text-gray-400">
                            Sans <strong>présence en ligne professionnelle</strong>, vos concurrents captent les clients
                            à votre place. En 2024, ne pas avoir de <strong>site web</strong> revient à ne pas exister
                            pour 80% des prospects.
                        </p>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-xl font-semibold mb-3">
                            Vous avez déjà payé cher pour un résultat décevant
                        </h3>
                        <p className="text-gray-400">
                            Les <strong>agences web</strong> facturent 5000-10000€ pour des sites qui ne vous
                            appartiennent pas vraiment. Communication difficile, délais non respectés, dépendance totale
                            : vous méritez mieux.
                        </p>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-xl font-semibold mb-3">Vous ne savez pas comment créer un site internet</h3>
                        <p className="text-gray-400">
                            Entre les CMS, le <strong>développement web</strong>, l'hébergement, le SEO : créer un{" "}
                            <strong>site professionnel</strong> nécessite des compétences que vous n'avez pas. Et c'est
                            normal, c'est mon métier.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
