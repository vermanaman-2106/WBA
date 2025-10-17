import { defineField, defineType } from 'sanity'

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: "Let's Connect",
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube',
      type: 'url',
    }),
    defineField({
      name: 'pinterest',
      title: 'Pinterest',
      type: 'url',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'contactFormMessage',
      title: 'Contact Form Message',
      type: 'text',
      rows: 3,
      description: 'Message shown on the contact form page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      email: 'email',
    },
    prepare(selection) {
      const { title, email } = selection
      return {
        title: title,
        subtitle: email,
      }
    },
  },
})
