import type { Config } from 'vite-plugin-ssr/types'

export default {
  // Server-side rendering
  onRenderHtml: 'import:pages/_default/+onRenderHtml.tsx',
  // Client-side hydration  
  onRenderClient: 'import:pages/_default/+onRenderClient.tsx',
  // Enable pre-rendering
  prerender: true,
  // Meta tags configuration
  meta: {
    title: {
      env: 'server-and-client'
    },
    description: {
      env: 'server-and-client'
    }
  }
} satisfies Config