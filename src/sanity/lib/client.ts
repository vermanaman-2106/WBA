import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
  perspective: 'published', // Only fetch published content
  // Add retry configuration for better reliability
  retry: 3,
  // Add timeout configuration
  timeout: 10000,
})
