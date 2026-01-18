import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navItem',
  title: 'Élément de Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionId',
      title: 'ID de la section',
      type: 'string',
      description: 'L\'ID de la section vers laquelle naviguer (ex: services, realisations, faq, contact)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'label',
      order: 'order',
      sectionId: 'sectionId',
    },
    prepare({ title, order, sectionId }) {
      return {
        title: `${order}. ${title}`,
        subtitle: `Section: ${sectionId}`,
      }
    },
  },
  orderings: [
    {
      title: 'Ordre',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
