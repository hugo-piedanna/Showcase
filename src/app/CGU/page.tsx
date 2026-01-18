import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Legals, Section } from "@/components/common/legals/Legal";

export default function TOS() {
    const infos: Section[] = [
        {
            title: "Informations générales",
            content: [
                {
                    type: "paragraph",
                    text: "Le site {a} est édité par Hugo Piedanna, auto-entrepreneur.",
                },
                {
                    type: "paragraph",
                    text: "Hébergeur : Hostinger",
                },
                {
                    type: "paragraph",
                    text: "Contact : {e}",
                },
            ],
        },
        {
            title: "Propriété intellectuelle",
            content: [
                {
                    type: "paragraph",
                    text: "L’ensemble des éléments présents sur ce site (textes, images, graphismes, logos…) est la propriété exclusive de Hugo Piedanna, sauf mentions contraires.",
                },
                {
                    type: "paragraph",
                    text: "Toute reproduction, diffusion ou exploitation sans autorisation est interdite.",
                },
            ],
        },
        {
            title: "Liens externes",
            content: [
                {
                    type: "paragraph",
                    text: "Le site peut contenir des liens vers des services tiers (ex : LinkedIn).",
                },
                {
                    type: "paragraph",
                    text: "L’éditeur ne peut être tenu responsable du contenu ou du fonctionnement de ces services.",
                },
            ],
        },
        {
            title: "Données personnelles et politique de confidentialité",
            content: [
                {
                    type: "paragraph",
                    text: "Le site ne collecte aucune donnée personnelle directement.",
                },
                {
                    type: "paragraph",
                    text: "Cependant, certaines données peuvent être collectées par des services tiers intégrés.",
                },
                {
                    type: "paragraph",
                    text: "L’utilisateur est invité à consulter la politique de confidentialité pour en savoir plus sur les traitements de données personnelles.",
                },
            ],
        },
        {
            title: "Cookies",
            content: [
                {
                    type: "paragraph",
                    text: "Aucun cookie n’est déposé ou utilisé par ce site.",
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
            title: "Droit applicable",
            content: [
                {
                    type: "paragraph",
                    text: "Les présentes CGU sont régies par le droit français.",
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
                    Dernière mise à jour : 09/01/2026
                </span>
                <Legals
                    title="Conditions Générales d’Utilisation"
                    sections={infos}
                />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
