import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'

// For now, keep the standard React setup while we prepare SSG
// TODO: Implement ViteSSG in the next phase

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);