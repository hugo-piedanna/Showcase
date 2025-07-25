# Site vitrine — Hugo Piedanna

> Développeur web freelance à Toulouse — Création de site vitrine et sur-mesure pour indépendants et petites entreprises.

---

## Objectif

Ce site a pour but de :

- Présenter mes services et offres web freelance
- Générer des contacts qualifiés via email, LinkedIn ou prise de rendez-vous Calendly
- Être bien référencé sur Google grâce à un SEO optimisé (sitemap, metadata, JSON-LD)

---

## Stack technique

- **Next.js 14 App Router**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (UI composants)
- **Framer Motion** (animations légères)
- **ESLint + Prettier** (code style)
- **next-sitemap** (SEO sitemap + robots.txt)
- **JSON-LD Schema.org** (rich snippets + FAQ SEO)

---

## Structure du site

| Section | Ancre HTML | Contenu principal                                   |
| ------- | ---------- | --------------------------------------------------- |
| Accueil | `#home`    | Hero, présentation, call-to-action                  |
| Offres  | `#offers`  | Présentation des offres + tableau comparatif        |
| FAQ     | `#faq`     | Réponses aux questions fréquentes, en JSON-LD aussi |
| Contact | `#contact` | Email, LinkedIn, Calendly (cartes avec CTA)         |

---

## SEO

Le site est optimisé pour les moteurs de recherche :

- ✅ `metadata` via le système de Next.js App Router (`metadata.ts`)
- ✅ OpenGraph + image de partage (`og-image.png`)
- ✅ Sitemap : [`/sitemap.xml`](https://piedanna.dev/sitemap.xml)
- ✅ Robots.txt : [`/robots.txt`](https://piedanna.dev/robots.txt)
- ✅ Balisage **JSON-LD** incluant :
    - `Person`
    - `LocalBusiness`
    - `FAQPage`
    - `WebSite`
    - `ReserveAction` (prise de rdv Calendly)

---

## Déploiement

Site déployé automatiquement via :

- Docker + GitHub webhooks
- Serveur Hostinger

---

## Auteur

**Hugo Piedanna**  
[Développeur web freelance](https://piedanna.dev)  
Basé à Toulouse  
[LinkedIn](https://www.linkedin.com/in/hugo-piedanna-a80570246/) | hugo@piedanna.dev

---
