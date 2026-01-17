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
                    text: "Adresse : Communiquée sur demande",
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
                    text: 'Les présentes Conditions Générales de Vente (ci-après "CGV") encadrent les relations contractuelles entre Hugo PIEDANNA (ci-après "le Prestataire") et toute personne physique ou morale (ci-après "le Client"), professionnelle ou consommateur, souhaitant acquérir les services suivants :',
                },
                {
                    type: "list",
                    text: "Site Vitrine Professionnel - 1500€ HT",
                },
                {
                    type: "list",
                    text: "Projet Sur-Mesure - Sur devis",
                },
                {
                    type: "paragraph",
                    text: "Le périmètre exact, les fonctionnalités, le planning et le tarif sont définis dans un devis personnalisé validé par les deux parties avant le début de la prestation.",
                },
            ],
        },
        {
            title: "Commandes et modalités",
            content: [
                {
                    type: "subtitle",
                    text: "Processus de commande",
                },
                {
                    type: "paragraph",
                    text: "Les commandes s'effectuent selon le processus suivant :",
                },
                {
                    type: "list",
                    text: "Premier échange : Prise de contact gratuite et sans engagement pour comprendre les besoins du Client",
                },
                {
                    type: "list",
                    text: "Devis personnalisé : Le Prestataire envoie un devis détaillé sous 48h comprenant le périmètre, les fonctionnalités, le planning et le tarif",
                },
                {
                    type: "list",
                    text: 'Validation : Le Client valide le devis par signature électronique ou retour par email avec mention "Bon pour accord"',
                },
                {
                    type: "list",
                    text: "Paiement de l'acompte : Le Client verse l'acompte de 30% pour confirmer la commande",
                },
                {
                    type: "list",
                    text: "Début de la prestation : Le Prestataire commence le développement après réception de l'acompte",
                },
                {
                    type: "subtitle",
                    text: "Fermeté de la commande",
                },
                {
                    type: "paragraph",
                    text: "La commande est ferme et définitive après :",
                },
                {
                    type: "list",
                    text: "Signature du devis par le Client",
                },
                {
                    type: "list",
                    text: "ET paiement de l'acompte de 30%",
                },
            ],
        },
        {
            title: "Prix et facturation",
            content: [
                {
                    type: "subtitle",
                    text: "Tarifs",
                },
                {
                    type: "list",
                    text: "Site Vitrine Professionnel : 1500€ HT (TVA non applicable, art. 293B du CGI)",
                },
                {
                    type: "list",
                    text: "Projet Sur-Mesure : Tarif défini dans le devis personnalisé",
                },
                {
                    type: "subtitle",
                    text: "Modalités de paiement",
                },
                {
                    type: "paragraph",
                    text: "Paiement en 2 fois pour tous les projets :",
                },
                {
                    type: "list",
                    text: "30% à la signature du devis (confirmation de commande)",
                },
                {
                    type: "list",
                    text: "70% à la livraison (mise en ligne du site et formation effectuée)",
                },
                {
                    type: "paragraph",
                    text: "Les paiements s'effectuent par virement bancaire dans un délai de 7 jours suivant la réception de la facture.",
                },
                {
                    type: "subtitle",
                    text: "Facturation",
                },
                {
                    type: "paragraph",
                    text: "Une facture est envoyée par email au Client à chaque échéance de paiement.",
                },
            ],
        },
        {
            title: "Obligations du Client",
            content: [
                {
                    type: "subtitle",
                    text: "Fourniture des contenus",
                },
                {
                    type: "paragraph",
                    text: "Le Client s'engage à fournir au Prestataire les éléments nécessaires à la réalisation du site :",
                },
                {
                    type: "list",
                    text: "Textes et contenus rédactionnels",
                },
                {
                    type: "list",
                    text: "Images et visuels (libres de droits ou dont il détient les droits)",
                },
                {
                    type: "list",
                    text: "Logo et charte graphique (si existante)",
                },
                {
                    type: "list",
                    text: "Accès aux outils nécessaires (hébergement, domaine, etc.)",
                },
                {
                    type: "paragraph",
                    text: "En l'absence de contenus fournis par le Client, le Prestataire pourra utiliser des contenus temporaires (lorem ipsum, images de placeholder) ou proposer un accompagnement à la rédaction moyennant un supplément tarifaire.",
                },
                {
                    type: "subtitle",
                    text: "Validation des livrables",
                },
                {
                    type: "paragraph",
                    text: "Le Client s'engage à valider les livrables intermédiaires (maquettes, développements) dans un délai raisonnable de 7 jours ouvrés. Passé ce délai sans retour du Client, les livrables seront considérés comme validés.",
                },
                {
                    type: "subtitle",
                    text: "Disponibilité",
                },
                {
                    type: "paragraph",
                    text: "Le Client s'engage à être disponible pour les rendez-vous de cadrage, les points d'avancement et la formation à l'interface d'administration.",
                },
            ],
        },
        {
            title: "Livraison et exécution des prestations",
            content: [
                {
                    type: "subtitle",
                    text: "Délais de livraison",
                },
                {
                    type: "paragraph",
                    text: "Site Vitrine Professionnel : 3 à 4 semaines après validation du devis et réception de l'acompte, sous réserve de la réactivité du Client pour la fourniture des contenus et la validation des livrables.",
                },
                {
                    type: "paragraph",
                    text: "Projet Sur-Mesure : Délai défini dans le devis personnalisé.",
                },
                {
                    type: "paragraph",
                    text: "Ces délais sont indicatifs et peuvent être prolongés en cas de force majeure ou de retard dans la fourniture des contenus par le Client.",
                },
                {
                    type: "subtitle",
                    text: "Processus de développement",
                },
                {
                    type: "paragraph",
                    text: "Le développement suit les étapes suivantes :",
                },
                {
                    type: "list",
                    text: "Rendez-vous de cadrage : définition précise des besoins et de la structure du site",
                },
                {
                    type: "list",
                    text: "Création de la maquette : validation du design et de l'ergonomie",
                },
                {
                    type: "list",
                    text: "Développement : intégration des contenus et développement des fonctionnalités",
                },
                {
                    type: "list",
                    text: "Tests et ajustements : corrections et optimisations",
                },
                {
                    type: "list",
                    text: "Formation : session de 30 minutes à l'utilisation de l'interface d'administration",
                },
                {
                    type: "list",
                    text: "Mise en ligne : déploiement du site en production sur un hébergement fourni par le Client",
                },
                {
                    type: "paragraph",
                    text: "Le Client est tenu informé régulièrement de l'avancement et dispose d'un accès à une version de travail pour suivre le développement.",
                },
                {
                    type: "subtitle",
                    text: "Interface d'administration et autonomie",
                },
                {
                    type: "paragraph",
                    text: "Le Client bénéficie d'une interface d'administration intuitive lui permettant de modifier en autonomie :",
                },
                {
                    type: "list",
                    text: "Les textes de toutes les pages",
                },
                {
                    type: "list",
                    text: "Les images et visuels",
                },
                {
                    type: "list",
                    text: "Les services et tarifs (selon structure du site)",
                },
                {
                    type: "list",
                    text: "Le portfolio de projets (selon structure du site)",
                },
                {
                    type: "list",
                    text: "Les témoignages clients (selon structure du site)",
                },
                {
                    type: "paragraph",
                    text: "Important : L'interface d'administration permet la gestion des contenus existants. Les modifications structurelles (ajout de nouvelles fonctionnalités, changement de design, modification de l'agencement) nécessitent l'intervention du Prestataire et peuvent faire l'objet d'une facturation supplémentaire.",
                },
                {
                    type: "subtitle",
                    text: "Formation",
                },
                {
                    type: "paragraph",
                    text: "Une session de formation de 30 minutes est incluse pour permettre au Client d'utiliser l'interface d'administration en autonomie. Cette formation peut se faire en présentiel (région toulousaine) ou en visio.",
                },
            ],
        },
        {
            title: "Droit de rétractation",
            content: [
                {
                    type: "subtitle",
                    text: "Clients professionnels (B2B)",
                },
                {
                    type: "paragraph",
                    text: "Conformément à l'article L221-3 du Code de la consommation, les professionnels ne bénéficient d'aucun droit de rétractation.",
                },
                {
                    type: "subtitle",
                    text: "Clients consommateurs (B2C)",
                },
                {
                    type: "paragraph",
                    text: "Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas pour :",
                },
                {
                    type: "list",
                    text: "Les prestations de services pleinement exécutées avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur",
                },
                {
                    type: "list",
                    text: "Les biens ou services personnalisés (création de site web sur-mesure)",
                },
                {
                    type: "paragraph",
                    text: "Le Client consommateur reconnaît expressément que la prestation commence dès la validation du devis et le paiement de l'acompte, et renonce donc à son droit de rétractation conformément à l'article L221-28 du Code de la consommation.",
                },
                {
                    type: "paragraph",
                    text: "En conséquence, aucun remboursement n'est accordé une fois la prestation commencée.",
                },
            ],
        },
        {
            title: "Propriété intellectuelle",
            content: [
                {
                    type: "subtitle",
                    text: "Propriété du site web",
                },
                {
                    type: "paragraph",
                    text: "Le site web créé dans le cadre de la prestation devient la propriété du Client après paiement intégral du prix et livraison du site.",
                },
                {
                    type: "paragraph",
                    text: "Le Client devient propriétaire de :",
                },
                {
                    type: "list",
                    text: "Le code source du site (sauf librairies et frameworks tiers sous licence open-source)",
                },
                {
                    type: "list",
                    text: "Les contenus fournis par le Client",
                },
                {
                    type: "list",
                    text: "Les contenus créés spécifiquement pour le Client (hors templates)",
                },
                {
                    type: "subtitle",
                    text: "Droits sur les outils et technologies",
                },
                {
                    type: "paragraph",
                    text: "Le Prestataire reste propriétaire de :",
                },
                {
                    type: "list",
                    text: "Ses méthodes de travail et processus",
                },
                {
                    type: "list",
                    text: "Les templates et composants réutilisables",
                },
                {
                    type: "list",
                    text: "Les outils et librairies tiers utilisés (React, Next.js, etc.) qui restent sous leur licence respective",
                },
                {
                    type: "subtitle",
                    text: "Utilisation en portfolio",
                },
                {
                    type: "paragraph",
                    text: "Le Prestataire se réserve le droit d'utiliser le site créé à des fins promotionnelles (portfolio, site web, réseaux sociaux) sauf demande contraire expresse du Client.",
                },
                {
                    type: "subtitle",
                    text: "Respect des droits tiers",
                },
                {
                    type: "paragraph",
                    text: "Le Client garantit que tous les contenus qu'il fournit (textes, images, logos) sont libres de droits ou qu'il détient les droits nécessaires à leur utilisation. Le Client assume l'entière responsabilité en cas de litige lié à l'utilisation de contenus dont il ne détiendrait pas les droits.",
                },
            ],
        },
        {
            title: "Responsabilité et garanties",
            content: [
                {
                    type: "subtitle",
                    text: "Obligation de moyens",
                },
                {
                    type: "paragraph",
                    text: "Le Prestataire s'engage à mettre en œuvre tous les moyens nécessaires pour réaliser la prestation dans les meilleures conditions. Il s'agit d'une obligation de moyens et non de résultat.",
                },
                {
                    type: "subtitle",
                    text: "Limitations de responsabilité",
                },
                {
                    type: "paragraph",
                    text: "Le Prestataire ne peut être tenu responsable de :",
                },
                {
                    type: "list",
                    text: "L'absence de résultats commerciaux, SEO, ou marketing obtenus par le Client après utilisation du site",
                },
                {
                    type: "list",
                    text: "Les dysfonctionnements liés à l'hébergement, à la sécurité ou à la maintenance du site après livraison (sauf contrat de maintenance souscrit)",
                },
                {
                    type: "list",
                    text: "Les contenus fournis par le Client (textes, images) et leur conformité légale",
                },
                {
                    type: "list",
                    text: "Les conséquences d'une mauvaise utilisation du site par le Client",
                },
                {
                    type: "list",
                    text: "Les dommages indirects, pertes de profits, pertes de clients, ou préjudice moral",
                },
                {
                    type: "subtitle",
                    text: "Garantie",
                },
                {
                    type: "paragraph",
                    text: "Le Prestataire garantit le bon fonctionnement du site à la livraison. Les bugs éventuels identifiés dans le mois suivant la mise en ligne seront corrigés gratuitement.",
                },
                {
                    type: "paragraph",
                    text: "Passé ce délai, les interventions pourront faire l'objet d'une facturation.",
                },
                {
                    type: "subtitle",
                    text: "Cas de force majeure",
                },
                {
                    type: "paragraph",
                    text: "Le Prestataire ne pourra être tenu responsable de tout retard ou inexécution lorsque la cause du retard ou de l'inexécution est liée à un cas de force majeure tel que défini par la jurisprudence française.",
                },
            ],
        },
        {
            title: "Résiliation et annulation",
            content: [
                {
                    type: "subtitle",
                    text: "Annulation par le Client",
                },
                {
                    type: "paragraph",
                    text: "En cas d'annulation de la commande par le Client après signature du devis :",
                },
                {
                    type: "list",
                    text: "Avant le début de la prestation : l'acompte de 30% reste acquis au Prestataire à titre de dédommagement",
                },
                {
                    type: "list",
                    text: "Après le début de la prestation : le Client devra régler l'intégralité des sommes correspondant aux travaux déjà réalisés, avec un minimum de 50% du montant total du devis",
                },
                {
                    type: "subtitle",
                    text: "Résiliation par le Prestataire",
                },
                {
                    type: "paragraph",
                    text: "Le Prestataire se réserve le droit de résilier le contrat en cas de :",
                },
                {
                    type: "list",
                    text: "Non-paiement d'une échéance malgré relance",
                },
                {
                    type: "list",
                    text: "Non-respect des obligations du Client (fourniture des contenus, validation des livrables, disponibilité)",
                },
                {
                    type: "list",
                    text: "Comportement abusif ou non professionnel du Client",
                },
                {
                    type: "paragraph",
                    text: "En cas de résiliation pour faute du Client, les sommes déjà versées restent acquises au Prestataire.",
                },
            ],
        },
        {
            title: "Protection des données personnelles",
            content: [
                {
                    type: "subtitle",
                    text: "Données collectées",
                },
                {
                    type: "paragraph",
                    text: "Le Prestataire collecte et traite les données personnelles du Client nécessaires à l'exécution de la prestation :",
                },
                {
                    type: "list",
                    text: "Nom, prénom, email, téléphone",
                },
                {
                    type: "list",
                    text: "Adresse de facturation",
                },
                {
                    type: "list",
                    text: "Informations liées au projet",
                },
                {
                    type: "subtitle",
                    text: "Finalités du traitement",
                },
                {
                    type: "paragraph",
                    text: "Les données sont utilisées pour :",
                },
                {
                    type: "list",
                    text: "L'exécution du contrat (devis, facturation, livraison)",
                },
                {
                    type: "list",
                    text: "La communication avec le Client",
                },
                {
                    type: "list",
                    text: "Le support technique",
                },
                {
                    type: "subtitle",
                    text: "Droits du Client",
                },
                {
                    type: "paragraph",
                    text: "Conformément au RGPD, le Client dispose d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de ses données.",
                },
                {
                    type: "paragraph",
                    text: "Pour exercer ces droits, le Client peut contacter le Prestataire à l'adresse : {e}.",
                },
            ],
        },
        {
            title: "Réclamations et médiation",
            content: [
                {
                    type: "subtitle",
                    text: "Réclamation amiable",
                },
                {
                    type: "paragraph",
                    text: "En cas de difficulté ou de litige, le Client est invité à contacter en priorité le Prestataire par email ({e}) afin de trouver une solution amiable.",
                },
                {
                    type: "subtitle",
                    text: "Médiation de la consommation (B2C uniquement)",
                },
                {
                    type: "paragraph",
                    text: "Conformément à l'article L612-1 du Code de la consommation, en cas d'échec de la réclamation amiable, le Client consommateur peut recourir gratuitement à un médiateur de la consommation.",
                },
            ],
        },
        {
            title: "Droit applicable et juridiction compétente",
            content: [
                {
                    type: "subtitle",
                    text: "Droit applicable",
                },
                {
                    type: "paragraph",
                    text: "Les présentes CGV sont régies par le droit français.",
                },
                {
                    type: "subtitle",
                    text: "Clients professionnels (B2B)",
                },
                {
                    type: "paragraph",
                    text: "En cas de litige et à défaut de résolution amiable, le tribunal compétent sera celui du ressort du siège du Prestataire.",
                },
                {
                    type: "subtitle",
                    text: "Clients consommateurs (B2C)",
                },
                {
                    type: "paragraph",
                    text: "En cas d'échec de la médiation, le Client consommateur peut saisir le tribunal compétent conformément aux dispositions du Code de la consommation.",
                },
            ],
        },
        {
            title: "Acceptation des CGV",
            content: [
                {
                    type: "paragraph",
                    text: "La validation d'un devis et le paiement de l'acompte impliquent l'acceptation pleine et entière des présentes Conditions Générales de Vente par le Client.",
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
                    Dernière mise à jour : 09/01/2026
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
