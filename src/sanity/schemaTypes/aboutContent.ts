import { defineField, defineType } from 'sanity'

export const aboutContent = defineType({
  name: 'aboutContent',
  title: 'About Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Behind the Lens',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'portraitImage',
      title: 'Portrait Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'awards',
      title: 'Awards & Recognition',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Award Title',
            },
            {
              name: 'year',
              type: 'string',
              title: 'Year',
            },
            {
              name: 'organization',
              type: 'string',
              title: 'Organization',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'experience',
      title: 'Years of Experience',
      type: 'number',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Delhi, India',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
    },
  },
})
