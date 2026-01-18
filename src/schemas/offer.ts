import { defineType, defineField } from "sanity";

export default defineType({
    name: "offer",
    title: "Offre",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Titre",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "price",
            title: "Prix",
            type: "number",
            description: "Prix en euros (mettre -1 pour 'Sur devis')",
        }),
        defineField({
            name: "details",
            title: "Détails",
            type: "array",
            of: [{ type: "string" }],
            description: "Liste des détails de l'offre",
        }),
        defineField({
            name: "ideals",
            title: "Idéal pour",
            type: "array",
            of: [{ type: "string" }],
            description: "Pour qui cette offre est idéale",
        }),
        defineField({
            name: "cta",
            title: "Call-to-action",
            type: "string",
            description: "Texte du bouton (ex: Lancer mon site vitrine)",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "order",
            title: "Ordre d'affichage",
            type: "number",
            description: "Ordre d'affichage des offres (plus petit = en premier)",
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: "title",
            price: "price",
            order: "order",
        },
        prepare({ title, price, order }) {
            const priceText = price === -1 ? "Sur devis" : `${price}€`;
            return {
                title: title || "Sans titre",
                subtitle: `${priceText} - Ordre: ${order || 0}`,
            };
        },
    },
    orderings: [
        {
            title: "Ordre d'affichage",
            name: "orderAsc",
            by: [{ field: "order", direction: "asc" }],
        },
    ],
});
