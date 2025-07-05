import type { Config } from 'vite-plugin-ssr/types'

export default {
  onBeforeRender: 'import:pages/blog/@slug/+onBeforeRender.ts'
} satisfies Config