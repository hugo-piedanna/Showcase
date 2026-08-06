export const navLinks = [
  { href: "/#apropos", label: "À propos", sectionId: "apropos" },
  { href: "/#services", label: "Services", sectionId: "services" },
  { href: "/#experience", label: "Expérience", sectionId: "experience" },
  { href: "/#contact", label: "Contact", sectionId: "contact" },
] as const;

export const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hugo-piedanna-a80570246",
  },
  {
    label: "GitHub",
    href: "https://github.com/hugo-piedanna",
  },
] as const;
