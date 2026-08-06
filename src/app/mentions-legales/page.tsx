import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/legal-document";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name} — éditeur, hébergeur et informations de contact.`,
  alternates: { canonical: "/mentions-legales" },
  openGraph: {
    title: `Mentions légales · ${siteConfig.name}`,
    url: absoluteUrl("/mentions-legales"),
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  const { legal } = siteConfig;

  return (
    <LegalDocument
      title="Mentions légales"
      description="Informations obligatoires relatives à l’éditeur et à l’hébergement de ce site."
    >
      <section>
        <h2>1. Éditeur du site</h2>
        <p>
          Le site{" "}
          <Link href={siteConfig.url}>{siteConfig.url.replace(/^https?:\/\//, "")}</Link>{" "}
          est édité par :
        </p>
        <ul>
          <li>
            <strong>Nom :</strong> {siteConfig.name}
          </li>
          <li>
            <strong>Statut :</strong> {legal.editorStatus}
          </li>
          <li>
            <strong>Forme juridique :</strong> {legal.legalForm}
          </li>
          <li>
            <strong>SIRET :</strong>{" "}
            {legal.siret || (
              <span className="text-destructive">
                À renseigner (obligatoire)
              </span>
            )}
          </li>
          {legal.vatMention ? (
            <li>
              <strong>TVA :</strong> {legal.vatMention}
            </li>
          ) : null}
          <li>
            <strong>Adresse :</strong> {legal.addressLine}
          </li>
          <li>
            <strong>E-mail :</strong>{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </li>
        </ul>
        <p>
          Directeur de la publication :{" "}
          <strong>{legal.publicationDirector}</strong>.
        </p>
      </section>

      <section>
        <h2>2. Hébergeur</h2>
        <ul>
          <li>
            <strong>Raison sociale :</strong> {legal.host.name}
          </li>
          <li>
            <strong>Adresse :</strong> {legal.host.address}
          </li>
          <li>
            <strong>Site :</strong>{" "}
            <a
              href={legal.host.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {legal.host.website}
              <span className="sr-only"> (ouvre un nouvel onglet)</span>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Objet du site</h2>
        <p>
          Ce site présente le parcours, les compétences et les réalisations de{" "}
          {siteConfig.name}, développeur web full-stack basé à Toulouse. Il
          permet de prendre contact pour des projets de développement web,
          d’applications et de formation.
        </p>
      </section>

      <section>
        <h2>4. Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur ce site (textes, visuels,
          éléments graphiques, code) est protégé par le droit de la propriété
          intellectuelle. Toute reproduction non autorisée est interdite, sauf
          usage privé et citation courte avec mention de la source.
        </p>
      </section>

      <section>
        <h2>5. Responsabilité</h2>
        <p>
          Les informations publiées le sont à titre informatif. Malgré le soin
          apporté à leur exactitude, {siteConfig.name} ne saurait être tenu
          responsable d’éventuelles erreurs, omissions ou indisponibilités
          temporaires du service.
        </p>
      </section>

      <section>
        <h2>6. Données personnelles</h2>
        <p>
          Le traitement des données personnelles collectées via le formulaire de
          contact est décrit dans la{" "}
          <Link href="/confidentialite">politique de confidentialité</Link>.
        </p>
      </section>
    </LegalDocument>
  );
}
