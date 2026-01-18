import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'trustItem',
  title: 'Trust Item (Chiffre)',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Valeur / Nombre',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Sous-texte',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'Ordre',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      label: 'label',
      value: 'value',
      order: 'order',
    },
    prepare({ label, value, order }) {
      return {
        title: `${order}. ${label}`,
        subtitle: `${value}`,
      }
    },
  },
})
