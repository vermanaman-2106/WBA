import { type SchemaTypeDefinition } from 'sanity'

// Import schema types
import { galleryImage } from './galleryImage'
import { blogPost } from './blogPost'
import { aboutContent } from './aboutContent'
import { contactInfo } from './contactInfo'
import { testimonial } from './testimonial'
import { heroContent } from './heroContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document types
    galleryImage,
    blogPost,
    aboutContent,
    contactInfo,
    testimonial,
    heroContent,
  ],
}
