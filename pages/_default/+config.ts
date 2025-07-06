import type { Config } from 'vite-plugin-ssr/types'

export default {
  // Server-side rendering
  onRenderHtml: './onRenderHtml',
  // Client-side hydration  
  onRenderClient: './onRenderClient',
  // Disable pre-rendering temporarily
  prerender: false,
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