import type { Config } from 'vite-plugin-ssr/types'

export default {
  // Disable pre-rendering temporarily to debug
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