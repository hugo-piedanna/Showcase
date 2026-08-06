import { absoluteUrl, siteConfig } from "@/lib/site";

/** Schema global (Person + WebSite) — présent sur toutes les pages. */
export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    image: absoluteUrl("/profil.webp"),
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toulouse",
      addressCountry: "FR",
    },
    sameAs: [...siteConfig.sameAs],
    knowsAbout: [...siteConfig.knowsAbout],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Toulouse Ynov Campus",
      url: "https://ynov.com/campus/toulouse/",
    },
    worksFor: {
      "@type": "Organization",
      name: "Chariot",
      url: "https://chariot.tools",
    },
    knowsLanguage: ["fr", "en"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${siteConfig.url}/#person` },
    author: { "@id": `${siteConfig.url}/#person` },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: `${siteConfig.name} — Développement web`,
    url: siteConfig.url,
    image: absoluteUrl("/profil.webp"),
    description: siteConfig.description,
    areaServed: [
      { "@type": "City", name: "Toulouse" },
      { "@type": "Country", name: "France" },
    ],
    serviceType: [
      "Développement web",
      "Développement full-stack",
      "Applications React / Next.js",
      "Formation développement web",
    ],
    provider: { "@id": `${siteConfig.url}/#person` },
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toulouse",
      addressCountry: "FR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalService),
        }}
      />
    </>
  );
}

export function HomeJsonLd() {
  const webpage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: { "@id": `${siteConfig.url}/#person` },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
