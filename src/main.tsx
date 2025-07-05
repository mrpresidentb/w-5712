import { createRoot } from 'react-dom/client'
import pkg from 'react-helmet-async';
const { HelmetProvider } = pkg;
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);