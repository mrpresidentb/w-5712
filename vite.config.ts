import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ssr } from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ssr({ prerender: false }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  // Removed alias to avoid vite-plugin-ssr warnings
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  optimizeDeps: {
    include: ['react-helmet-async'],
  },
}));
