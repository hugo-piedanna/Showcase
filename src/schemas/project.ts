import { defineType, defineField } from "sanity";

export default defineType({
    name: "project",
    title: "Projet",
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
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "link",
            title: "Lien",
            type: "string",
            description: "URL du projet (utilisez # si le site n'est pas disponible)",
            validation: (Rule) => 
                Rule.required().custom((value) => {
                    if (!value) return "Le lien est requis";
                    if (value === '#') return true;
                    // Vérifie si c'est une URL valide
                    try {
                        new URL(value);
                        return true;
                    } catch {
                        return "Doit être une URL valide (http://... ou https://...) ou #";
                    }
                }),
        }),
        defineField({
            name: "order",
            title: "Ordre d'affichage",
            type: "number",
            description: "Ordre d'affichage des projets (plus petit = en premier)",
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
            order: "order",
        },
        prepare({ title, media, order }) {
            return {
                title: title || "Sans titre",
                subtitle: `Ordre: ${order || 0}`,
                media,
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
