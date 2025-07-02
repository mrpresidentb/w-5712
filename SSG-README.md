# Static Site Generation (SSG) for Blog Posts

This implementation solves the social media sharing problem by pre-rendering blog posts at build time with proper meta tags.

## How It Works

1. **Build Process**: After the regular Vite build, a Node.js script (`scripts/generateSSG.ts`) runs
2. **Data Fetching**: The script fetches all published blog posts from Supabase
3. **Static Generation**: For each blog post, it creates a static HTML file at `dist/blog/[slug]/index.html`
4. **Meta Tag Injection**: Each generated page contains complete Open Graph, Twitter Card, and SEO meta tags
5. **Nginx Routing**: The server first tries to serve static files, then falls back to the SPA

## File Structure After Build

```
dist/
├── index.html (main SPA)
├── blog/
│   ├── computer-running-slow-solutions/
│   │   └── index.html (static with meta tags)
│   ├── printer-troubleshooting-guide/
│   │   └── index.html (static with meta tags)
│   └── ... (all other blog posts)
└── assets/
    └── ... (JS, CSS, images)
```

## Key Benefits

✅ **Social Media Compatibility**: Facebook, Twitter, LinkedIn bots see proper meta tags
✅ **SEO Optimization**: Each page has unique title, description, and structured data
✅ **No Architecture Change**: Still uses React/Vite, just adds pre-rendering
✅ **Fast Performance**: Static HTML loads instantly for blog pages
✅ **Fallback Support**: New posts still work via SPA until next build

## Build Commands

```bash
# Standard build with SSG
npm run build

# Or use the shell script
./build-with-ssg.sh

# Generate SSG only (after Vite build)
npx tsx scripts/generateSSG.ts
```

## Deployment

The Docker build process automatically includes SSG generation. The generated static files are served by Nginx with proper routing.

## Testing Social Media Previews

After deployment, test your blog post URLs with:
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Meta Tags Generated

Each blog post page includes:
- Open Graph tags (og:title, og:description, og:image, etc.)
- Twitter Card tags
- SEO meta tags (title, description, keywords)
- Canonical URL
- Article structured data (Schema.org)
- Publication and modification dates

## Adding New Blog Posts

New blog posts will work immediately via the SPA. To get the SSG benefits (static meta tags), run a new build and deploy.