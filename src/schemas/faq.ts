import { defineType, defineField } from "sanity";

export default defineType({
    name: "faq",
    title: "FAQ",
    type: "document",
    fields: [
        defineField({
            name: "question",
            title: "Question",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "answer",
            title: "Réponse",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "order",
            title: "Ordre d'affichage",
            type: "number",
            description: "Ordre d'affichage des questions (plus petit = en premier)",
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            question: "question",
            order: "order",
        },
        prepare({ question, order }) {
            return {
                title: question || "Sans question",
                subtitle: `Ordre: ${order || 0}`,
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
