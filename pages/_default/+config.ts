import type { Config } from 'vite-plugin-ssr/types'

export default {
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