import { groq } from 'next-sanity'

// Gallery Images
export const galleryImagesQuery = groq`
  *[_type == "galleryImage"] | order(order desc, _createdAt desc) {
    _id,
    title,
    description,
    category,
    location,
    date,
    isFeatured,
    order,
    mediaType,
    image {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    video {
      asset->{
        _id,
        url
      }
    },
    videoUrl
  }
`

export const featuredGalleryImagesQuery = groq`
  *[_type == "galleryImage" && isFeatured == true] | order(order desc, _createdAt desc) {
    _id,
    title,
    description,
    category,
    location,
    date,
    image {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }
`

// Blog Posts
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    isFeatured,
    mainImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    categories
  }
`

export const featuredBlogPostsQuery = groq`
  *[_type == "blogPost" && isFeatured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }
`

// About Content
export const aboutContentQuery = groq`
  *[_type == "aboutContent"][0] {
    _id,
    title,
    biography,
    specialties,
    awards,
    yearsExperience,
    portraitImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }
`

// Contact Info
export const contactInfoQuery = groq`
  *[_type == "contactInfo"][0] {
    _id,
    title,
    email,
    phone,
    whatsapp,
    instagram,
    youtube,
    pinterest,
    address,
    contactFormMessage,
    ctaText
  }
`

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    clientName,
    coupleName,
    feedback,
    rating,
    eventDate,
    eventLocation,
    isFeatured,
    clientImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }
`

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && isFeatured == true] | order(_createdAt desc) [0...3] {
    _id,
    clientName,
    coupleName,
    feedback,
    rating,
    eventDate,
    eventLocation,
    clientImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }
`

// Hero Content
export const heroContentQuery = groq`
  *[_type == "heroContent"] {
    _id,
    page,
    title,
    subtitle,
    backgroundMedia {
      mediaType,
      image {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      videoFile {
        asset->{
          _id,
          url
        }
      },
      videoUrl
    },
    ctaButtons,
    showScrollIndicator
  }
`
