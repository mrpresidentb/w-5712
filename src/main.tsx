import { ViteSSG } from 'vite-ssg'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'
import { generateRoutes } from './ssg/routeGenerator'

// Vite-SSG setup with route generation
export const createApp = ViteSSG(
  App,
  {
    routes: [
      { path: '/', component: () => import('./pages/Index') },
      { path: '/about', component: () => import('./pages/About') },
      { path: '/privacy-policy', component: () => import('./pages/PrivacyPolicy') },
      { path: '/terms', component: () => import('./pages/TermsOfService') },
      { path: '/faq', component: () => import('./pages/FAQ') },
      { path: '/blog', component: () => import('./pages/BlogListing') },
      { path: '/blog/:slug', component: () => import('./pages/BlogPostDetail') },
      { path: '/services/home-office', component: () => import('./pages/HomeOfficeSupport') },
      { path: '/services/business', component: () => import('./pages/BusinessSupport') },
      { path: '/services/printer', component: () => import('./pages/PrinterSupport') },
      { path: '/services/web-hosting', component: () => import('./pages/WebHosting') },
      { path: '/pricing', component: () => import('./pages/Pricing') },
      { path: '/admin/blog', component: () => import('./pages/admin/BlogAdmin') },
    ],
    routeProps: generateRoutes,
  },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(HelmetProvider)
  }
)