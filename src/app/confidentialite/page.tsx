import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/legal-document";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et informations RGPD du site ${siteConfig.name} — formulaire de contact et reCAPTCHA.`,
  alternates: { canonical: "/confidentialite" },
  openGraph: {
    title: `Politique de confidentialité · ${siteConfig.name}`,
    url: absoluteUrl("/confidentialite"),
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <LegalDocument
      title="Politique de confidentialité"
      description="Comment vos données personnelles sont collectées, utilisées et protégées sur ce site."
    >
      <section>
        <h2>1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement est <strong>{siteConfig.name}</strong>,
          joignable à{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </section>

      <section>
        <h2>2. Données collectées</h2>
        <p>Via le formulaire de contact, les données suivantes peuvent être collectées :</p>
        <ul>
          <li>nom ou prénom ;</li>
          <li>adresse e-mail ;</li>
          <li>contenu du message ;</li>
          <li>
            consentement explicite à la présente politique (case à cocher) ;
          </li>
          <li>
            données techniques liées à la protection anti-spam (jeton Google
            reCAPTCHA).
          </li>
        </ul>
        <p>
          Aucune création de compte n’est proposée. Aucune donnée sensible n’est
          demandée.
        </p>
      </section>

      <section>
        <h2>3. Finalités</h2>
        <ul>
          <li>répondre aux demandes de contact et de devis ;</li>
          <li>échanger dans le cadre d’un projet professionnel ;</li>
          <li>prévenir le spam et les abus (reCAPTCHA).</li>
        </ul>
        <p>
          Base légale : intérêt légitime et/ou mesures précontractuelles à votre
          demande (art. 6 du RGPD).
        </p>
      </section>

      <section>
        <h2>4. Destinataires</h2>
        <p>
          Les messages sont reçus par {siteConfig.name}. Ils peuvent transiter
          par le prestataire d’envoi d’e-mails (SMTP) configuré pour le site, et
          par Google dans le cadre de la vérification reCAPTCHA.
        </p>
        <p>
          Les données ne sont pas vendues. Elles ne sont communiquées à des
          tiers que si la loi l’exige ou si un prestataire technique est
          strictement nécessaire au fonctionnement du service.
        </p>
      </section>

      <section>
        <h2>5. Durée de conservation</h2>
        <p>
          Les messages de contact sont conservés le temps nécessaire au
          traitement de la demande, puis archivés au maximum 24 mois, sauf
          obligation légale ou besoin lié à un projet en cours.
        </p>
      </section>

      <section>
        <h2>6. Cookies et services tiers</h2>
        <p>
          Ce site n’utilise pas d’outil d’analytics publicitaire. Google
          reCAPTCHA peut déposer des cookies et collecter des données
          techniques pour distinguer humains et robots. Pour en savoir plus,
          consultez la{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            politique de confidentialité de Google
            <span className="sr-only"> (ouvre un nouvel onglet)</span>
          </a>
          .
        </p>
        <p>
          Le thème clair/sombre peut être mémorisé localement dans votre
          navigateur (stockage local), sans identifiant publicitaire.
        </p>
      </section>

      <section>
        <h2>7. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>accès, rectification, effacement ;</li>
          <li>limitation et opposition au traitement ;</li>
          <li>portabilité lorsque applicable.</li>
        </ul>
        <p>
          Pour les exercer :{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Vous
          pouvez aussi introduire une réclamation auprès de la{" "}
          <a
            href="https://www.cnil.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL
            <span className="sr-only"> (ouvre un nouvel onglet)</span>
          </a>
          .
        </p>
      </section>

      <section>
        <h2>8. Sécurité</h2>
        <p>
          Des mesures techniques raisonnables sont mises en œuvre (HTTPS,
          validation des entrées, protection anti-spam). Aucun système n’étant
          infaillible, une vigilance reste recommandée lors de l’envoi
          d’informations confidentielles.
        </p>
      </section>

      <section>
        <h2>9. Mentions légales</h2>
        <p>
          Les informations d’éditeur et d’hébergeur figurent dans les{" "}
          <Link href="/mentions-legales">mentions légales</Link>.
        </p>
      </section>
    </LegalDocument>
  );
}
