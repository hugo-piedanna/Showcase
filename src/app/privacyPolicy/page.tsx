import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Legals, Section } from "@/components/common/legals/Legal";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TOU() {
    const infos: Section[] = [
        {
            title: "Collecte de données",
            content: [
                {
                    type: "paragraph",
                    text: "Le site ne collecte aucune donnée personnelle directement (pas de formulaire, pas d’espace membre, pas de cookies).",
                },
                {
                    type: "paragraph",
                    text: "Cependant, des services tiers utilisés sur le site (comme Stripe ou Calendly) peuvent collecter certaines informations lors d’une réservation ou d’un paiement.",
                },
            ],
        },
        {
            title: "Services tiers",
            content: [
                {
                    type: "list",
                    text: "Stripe (paiement) peut collecter vos nom, email, informations de carte bancaire, etc. Ces données sont traitées selon leur propre politique : stripe.com/privacy.",
                },
                {
                    type: "list",
                    text: "Calendly (prise de rendez-vous) peut collecter votre nom et adresse email. Politique : calendly.com/privacy",
                },
                {
                    type: "paragraph",
                    text: "L’éditeur du site n’a pas accès à vos données bancaires et ne les stocke en aucun cas.",
                },
            ],
        },
        {
            title: "Sécurité",
            content: [
                {
                    type: "paragraph",
                    text: "Les services utilisés (Stripe, Calendly) mettent en œuvre des mesures de sécurité pour protéger vos données. Le site piedanna.dev est également sécurisé via HTTPS.",
                },
            ],
        },
        {
            title: "Droits des utilisateurs",
            content: [
                {
                    type: "paragraph",
                    text: "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition ou de suppression de vos données personnelles.",
                },
                {
                    type: "paragraph",
                    text: "Pour exercer ces droits, vous pouvez contacter : {e}",
                },
            ],
        },
        {
            title: "Responsable du traitement",
            content: [
                {
                    type: "paragraph",
                    text: "Hugo Piedanna",
                },
                {
                    type: "paragraph",
                    text: "SIRET : 937 980 597 00010",
                },
                {
                    type: "paragraph",
                    text: "Email : {e}",
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
                    title="Politique de Confidentialité"
                    sections={infos}
                />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
