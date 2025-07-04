import type { Config } from 'vite-plugin-ssr/types'

export default {
  data: 'import:pages/blog/@slug/+data.ts',
  prerender: true
} satisfies Config