import type { Config } from 'vite-plugin-ssr/types'

export default {
  // Disable pre-rendering temporarily
  prerender: false,
  // Enable client routing
  clientRouting: true,
  // Meta tags configuration
  meta: {
    title: {
      env: { server: true, client: true }
    },
    description: {
      env: { server: true, client: true }
    }
  }
} satisfies Config