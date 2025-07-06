import type { Config } from 'vite-plugin-ssr/types'

export default {
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