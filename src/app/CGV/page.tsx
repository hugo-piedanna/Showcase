import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Legals, Section } from "@/components/common/legals/Legal";

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
                    text: "Les présentes CGV encadrent les relations contractuelles entre Hugo PIEDANNA (ci-après “le Prestataire”) et toute personne physique ou morale (ci-après “le Client”), professionnelle ou consommateur, souhaitant acquérir :",
                },
                {
                    type: "list",
                    text: "Offre Pack complet à 980€ : 3 formations (SEO, Copywriting, UX/UI) livrées en PDF + création d’un site web one page optimisé SEO avec un accompagnement jusqu’à la mise en ligne.",
                },
                {
                    type: "list",
                    text: "Offre Formations seules à 199€ : accès aux 3 formations PDF uniquement.",
                },
            ],
        },
        {
            title: "Commandes et modalités",
            content: [
                {
                    type: "paragraph",
                    text: "Les commandes s’effectuent exclusivement en ligne via la solution Stripe Link.",
                },
                {
                    type: "paragraph",
                    text: "La commande est ferme et définitive après validation et paiement intégral par le Client.",
                },
                {
                    type: "paragraph",
                    text: "Aucun paiement en plusieurs fois n’est proposé.",
                },
            ],
        },
        {
            title: "Prix et facturation",
            content: [
                {
                    type: "list",
                    text: "Prix du Pack complet : 980 € TTC (TVA non applicable, art. 293B du CGI).",
                },
                {
                    type: "list",
                    text: "Prix du Pack Formations : 199 € TTC (TVA non applicable, art. 293B du CGI).",
                },
                {
                    type: "paragraph",
                    text: "Une facture est envoyée automatiquement par email au Client après paiement.",
                },
            ],
        },
        {
            title: "Livraison et exécution des prestations",
            content: [
                {
                    type: "paragraph",
                    text: "Formations PDF : envoyées immédiatement après paiement à l’adresse email communiquée par le Client.",
                },
                {
                    type: "list",
                    text: "Le Prestataire n’est pas responsable si l’email est classé en spam.",
                },
                {
                    type: "list",
                    text: "En cas de non-réception, le Client peut demander gratuitement un renvoi des formations.",
                },
                {
                    type: "paragraph",
                    text: "Création du site web (Pack complet) : réalisée après un rendez-vous de cadrage entre le Prestataire et le Client.",
                },
                {
                    type: "list",
                    text: "Le Client n’a pas d’obligation de fournir des contenus.",
                },
                {
                    type: "list",
                    text: "Le Prestataire accompagne jusqu’à la mise en ligne du site.",
                },
                {
                    type: "list",
                    text: "L’hébergement du site reste sous la responsabilité du Client.",
                },
            ],
        },
        {
            title: "Droit de rétractation",
            content: [
                {
                    type: "paragraph",
                    text: "Clients professionnels (B2B) : aucun droit de rétractation ne s’applique.",
                },
                {
                    type: "paragraph",
                    text: "Clients consommateurs (B2C) : conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne s’applique pas pour :",
                },
                {
                    type: "list",
                    text: "la fourniture de contenus numériques livrés immédiatement (formations PDF),",
                },
                {
                    type: "list",
                    text: "les prestations personnalisées (création de site web).",
                },
                {
                    type: "paragraph",
                    text: "Aucun remboursement n’est donc accordé.",
                },
            ],
        },
        {
            title: "Propriété intellectuelle",
            content: [
                {
                    type: "paragraph",
                    text: "Les formations PDF restent la propriété intellectuelle exclusive du Prestataire.",
                },
                {
                    type: "list",
                    text: "Le Client bénéficie d’un droit d’usage personnel.",
                },
                {
                    type: "list",
                    text: "Toute revente, diffusion ou partage public ou privé est interdit.",
                },
                {
                    type: "paragraph",
                    text: "Le site web créé dans le cadre du Pack complet devient la propriété du Client après livraison.",
                },
            ],
        },
        {
            title: "Responsabilité et garanties",
            content: [
                {
                    type: "paragraph",
                    text: "Le Prestataire n’est pas responsable des résultats commerciaux, SEO ou marketing obtenus par le Client après utilisation des formations ou du site.",
                },
                {
                    type: "paragraph",
                    text: "Le Prestataire n’est pas responsable des dysfonctionnements liés à l’hébergement, à la sécurité ou à la maintenance du site.",
                },
                {
                    type: "paragraph",
                    text: "La responsabilité du Prestataire ne pourra être engagée que pour faute prouvée et directe.",
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
                    text: "En cas de litige, les parties chercheront une solution amiable.",
                },
                {
                    type: "list",
                    text: "Clients professionnels (B2B) : le tribunal compétent est celui du siège du Prestataire.",
                },
                {
                    type: "list",
                    text: "Clients consommateurs (B2C) : en cas d’échec d’une réclamation amiable, le Client peut recourir gratuitement à un médiateur de la consommation.",
                },
                {
                    type: "paragraph",
                    text: "Le Client consommateur peut également saisir le tribunal compétent conformément au droit de la consommation.",
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
