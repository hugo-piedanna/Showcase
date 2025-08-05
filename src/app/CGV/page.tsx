import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Legals, Section } from "@/components/common/legals/Legal";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TOU() {
    const infos: Section[] = [
        {
            title: "Identification du vendeur",
            content: [
                {
                    type: "paragraph",
                    text: "Hugo PIEDANNA",
                },
                {
                    type: "paragraph",
                    text: "Auto-entrepreneur — SIRET : 937 980 597 00010",
                },
                {
                    type: "paragraph",
                    text: "Adresse : sur demande",
                },
                {
                    type: "paragraph",
                    text: "Email : {e}",
                },
            ],
        },
        {
            title: "Objet",
            content: [
                {
                    type: "paragraph",
                    text: "Les présentes CGV définissent les conditions applicables à l’achat d’un accompagnement comprenant :",
                },
                {
                    type: "list",
                    text: "Trois formations livrées au format PDF (SEO, copywriting, UX/UI)",
                },
                {
                    type: "list",
                    text: "La création d’un site vitrine 1 page personnalisé et optimisé SEO",
                },
            ],
        },
        {
            title: "Prix et paiement",
            content: [
                {
                    type: "paragraph",
                    text: "Le prix est fixé à 980€ TTC.",
                },
                {
                    type: "paragraph",
                    text: "L’activité étant exercée sous le régime de la micro-entreprise, la TVA est non applicable, conformément à l’article 293 B du CGI.",
                },
                {
                    type: "paragraph",
                    text: "Le paiement est effectué en une seule fois via la plateforme Stripe.",
                },
            ],
        },
        {
            title: "Livraison des prestations",
            content: [
                {
                    type: "paragraph",
                    text: "Les formations PDF sont envoyées immédiatement après validation du paiement.",
                },
                {
                    type: "paragraph",
                    text: "La création du site web débute après un premier rendez-vous convenu via Calendly.",
                },
                {
                    type: "paragraph",
                    text: "Le délai de réalisation peut varier selon la disponibilité et la réactivité du client.",
                },
            ],
        },
        {
            title: "Droit de rétractation",
            content: [
                {
                    type: "paragraph",
                    text: "Conformément à l’article L221-28 du Code de la consommation, aucun droit de rétractation ne s’applique une fois les contenus numériques livrés, même si ceux-ci n’ont pas été téléchargés.",
                },
            ],
        },
        {
            title: "Limitation de responsabilité",
            content: [
                {
                    type: "paragraph",
                    text: "L’éditeur s’efforce de maintenir le site accessible, à jour et sans erreurs. Toutefois, il ne peut être tenu responsable d’un dysfonctionnement technique ou d’une inexactitude sur le site.",
                },
            ],
        },
        {
            title: "Remboursement",
            content: [
                {
                    type: "paragraph",
                    text: "Aucun remboursement ne sera effectué après validation du paiement.",
                },
            ],
        },
        {
            title: "Responsabilités",
            content: [
                {
                    type: "paragraph",
                    text: "Le vendeur ne peut être tenu responsable de :",
                },
                {
                    type: "list",
                    text: "tout dysfonctionnement lié à l’hébergeur choisi par le client,",
                },
                {
                    type: "list",
                    text: "toute évolution ou performance en matière de référencement naturel (SEO), celui-ci dépendant de nombreux facteurs externes.",
                },
            ],
        },
        {
            title: "Droit applicable",
            content: [
                {
                    type: "paragraph",
                    text: "Les présentes CGV sont régies par le droit français.",
                },
                {
                    type: "paragraph",
                    text: "En cas de litige, les tribunaux français seront seuls compétents.",
                },
            ],
        },
    ];

    return (
        <div className="w-full overflow-hidden">
            <header>
                <Header />
            </header>
            <main className="flex flex-col items-center h-full w-full">
                <span className="container px-6 w-full mx-auto mt-20 mb-15 pt-[10vh]">
                    Dernière mise à jour : 05/08/2025
                </span>
                <Legals
                    title="Conditions Générales de Vente"
                    sections={infos}
                />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
