'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// Use hardcoded values for deployed studio
const projectId = 'gzf59fw4'
const dataset = 'production'
const apiVersion = '2025-10-16'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  // Add CORS configuration for localhost
  api: {
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Use CDN in production, but not in development
  },
  // Add CORS origins for local development and production
  cors: {
    origins: [
      'http://localhost:3000',
      'http://localhost:3001', 
      'http://localhost:3002',
      'http://localhost:3003',
      'http://localhost:3333',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:3001',
      'http://127.0.0.1:3002',
      'http://127.0.0.1:3003',
      'http://127.0.0.1:3333',
      // Vercel production domains
      'https://wba-bsdum4mv2-naman-s-projects-b59abela.vercel.app',
      'https://*.vercel.app',
      'https://weddingsbyartistic.vercel.app',
      'https://weddingsbyartistic.com'
    ]
  },
})
