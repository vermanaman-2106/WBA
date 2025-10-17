import { defineField, defineType } from 'sanity'

export const heroContent = defineType({
  name: 'heroContent',
  title: 'Hero Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      initialValue: 'Your Story, Through Our Lens',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Capturing the essence of your special moments with artistic vision and timeless elegance.',
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
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
    defineField({
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      initialValue: 'Book a Shoot',
    }),
    defineField({
      name: 'primaryButtonLink',
      title: 'Primary Button Link',
      type: 'string',
      initialValue: '/contact',
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'View Portfolio',
    }),
    defineField({
      name: 'secondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string',
      initialValue: '#gallery',
    }),
    defineField({
      name: 'showScrollIndicator',
      title: 'Show Scroll Indicator',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})
