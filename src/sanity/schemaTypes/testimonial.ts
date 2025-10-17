import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coupleNames',
      title: 'Couple Names',
      type: 'string',
      description: 'e.g., "Sarah & John" or "Priya & Raj"',
    }),
    defineField({
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Wedding', value: 'wedding' },
          { title: 'Pre-Wedding', value: 'pre-wedding' },
          { title: 'Destination Wedding', value: 'destination' },
          { title: 'Portrait Session', value: 'portrait' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Event Location',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show this testimonial in the featured section',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
    defineField({
      name: 'clientImage',
      title: 'Client Photo',
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
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Event Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'coupleNames',
      media: 'clientImage',
      rating: 'rating',
    },
    prepare(selection) {
      const { title, subtitle, media, rating } = selection
      return {
        title: title,
        subtitle: `${subtitle || ''} ${rating ? `⭐ ${rating}/5` : ''}`.trim(),
        media: media,
      }
    },
  },
})
