import { client } from './client'
import {
  galleryImagesQuery,
  featuredGalleryImagesQuery,
  blogPostsQuery,
  featuredBlogPostsQuery,
  aboutContentQuery,
  contactInfoQuery,
  testimonialsQuery,
  featuredTestimonialsQuery,
  heroContentQuery
} from './queries'

// Gallery Images
export async function getGalleryImages() {
  return await client.fetch(galleryImagesQuery)
}

export async function getFeaturedGalleryImages() {
  return await client.fetch(featuredGalleryImagesQuery)
}

// Blog Posts
export async function getBlogPosts() {
  return await client.fetch(blogPostsQuery)
}

export async function getFeaturedBlogPosts() {
  return await client.fetch(featuredBlogPostsQuery)
}

export async function getBlogPostBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
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
      },
      categories,
      body
    }`,
    { slug }
  )
}

// About Content
export async function getAboutContent() {
  return await client.fetch(aboutContentQuery)
}

// Contact Info
export async function getContactInfo() {
  return await client.fetch(contactInfoQuery)
}

// Testimonials
export async function getTestimonials() {
  return await client.fetch(testimonialsQuery)
}

export async function getFeaturedTestimonials() {
  return await client.fetch(featuredTestimonialsQuery)
}

// Hero Content
export async function getHeroContent() {
  return await client.fetch(heroContentQuery)
}

export async function getHeroContentByPage(page: string) {
  return await client.fetch(
    `*[_type == "heroContent" && page == $page][0] {
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
    }`,
    { page }
  )
}
