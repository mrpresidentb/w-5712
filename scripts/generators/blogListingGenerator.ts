import { BlogPost } from '../types.js';
import { escapeHtml } from '../utils.js';
import { generateNavigation, generateFooter } from './contentGenerator.js';

export function generateBlogListingHTML(posts: BlogPost[], baseHTML: string): string {
  const metaTags = `
    <title>IT Support Blog - Charlotte NC | Computer Repair Tips & Guides</title>
    <meta name="description" content="Expert IT support tips, computer troubleshooting guides, and technology insights for home users and small businesses in Charlotte, North Carolina." />
    <meta name="keywords" content="IT support blog charlotte nc, computer repair tips, troubleshooting guides, technology insights, home office setup, cybersecurity tips, printer support" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://itcarolina.us/blog" />
    <meta property="og:title" content="IT Support Blog - Charlotte NC" />
    <meta property="og:description" content="Expert IT support tips, computer troubleshooting guides, and technology insights for home users and small businesses in Charlotte, North Carolina." />
    <meta property="og:image" content="https://itcarolina.us/og.jpg" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="IT Support Blog - Charlotte NC" />
    <meta name="twitter:description" content="Expert IT support tips, computer troubleshooting guides, and technology insights for home users and small businesses in Charlotte, North Carolina." />
    <meta name="twitter:image" content="https://itcarolina.us/og.jpg" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://itcarolina.us/blog" />
  `;

  const contentHTML = `
    <div class="min-h-screen bg-white">
      ${generateNavigation('blog')}

      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div class="container mx-auto px-4">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">IT Support Blog</h1>
            <p class="text-xl text-purple-100 max-w-2xl mx-auto">
              Expert tips, troubleshooting guides, and technology insights for Charlotte's home users and small businesses
            </p>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12">
        <!-- Category Filter -->
        <div class="mb-8">
          <div class="flex flex-wrap gap-2">
            <span class="inline-flex items-center rounded-md bg-primary text-primary-foreground px-2.5 py-0.5 text-xs font-semibold cursor-pointer">
              All Posts (${posts.length})
            </span>
          </div>
        </div>

        <div class="grid lg:grid-cols-4 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-3">
            <div class="grid md:grid-cols-2 gap-6">
              ${generateBlogPostCards(posts)}
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="space-y-6">
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 class="text-lg font-semibold mb-4">Recent Posts</h3>
                <div class="space-y-3">
                  ${posts.slice(0, 3).map(post => `
                    <div class="flex items-start space-x-3">
                      <div class="flex-1">
                        <a href="/blog/${post.slug}" class="text-sm font-medium hover:text-blue-600 line-clamp-2">
                          ${escapeHtml(post.title)}
                        </a>
                        <p class="text-xs text-muted-foreground mt-1">${post.date}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      ${generateFooter()}
    </div>
  `;

  // Extract CSS and JS links from the original HTML
  const cssLinks = Array.from(baseHTML.matchAll(/<link[^>]*rel="stylesheet"[^>]*>/g)).map(match => match[0]).join('\n      ');
  const jsScripts = Array.from(baseHTML.matchAll(/<script[^>]*src="[^"]*"[^>]*><\/script>/g)).map(match => match[0]).join('\n      ');

  // Replace both head and body content
  let html = baseHTML.replace(
    /<head[^>]*>[\s\S]*?<\/head>/i,
    `<head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <!-- Favicon optimized -->
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="icon" type="image/x-icon" href="/favicon.ico">
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">
      <link rel="apple-touch-icon" href="/apple-touch-icon.png">
      <link rel="manifest" href="/site.webmanifest">
      
      ${metaTags}
      
      <!-- Core Web Vitals optimizations -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      <!-- Vite Build CSS -->
      ${cssLinks}
    </head>`
  );

  html = html.replace(
    /<body[^>]*>[\s\S]*?<\/body>/i,
    `<body>
      ${contentHTML}
    </body>`
  );

  return html;
}

function generateBlogPostCards(posts: BlogPost[]): string {
  return posts.map(post => `
    <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      ${post.image_url ? `<img src="${post.image_url}" alt="${escapeHtml(post.title)}" class="w-full h-48 object-cover" />` : ''}
      <div class="p-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">${escapeHtml(post.category)}</span>
          <span class="text-gray-500 text-sm">${post.date}</span>
        </div>
        <h2 class="text-xl font-bold mb-3 text-gray-900">
          <a href="/blog/${post.slug}" class="hover:text-blue-600 transition-colors">${escapeHtml(post.title)}</a>
        </h2>
        <p class="text-gray-600 mb-4 text-sm leading-relaxed">${escapeHtml(post.excerpt || '')}</p>
        <div class="flex items-center justify-between">
          <span class="text-gray-500 text-sm">By ${escapeHtml(post.author)}</span>
          <a href="/blog/${post.slug}" class="text-blue-600 hover:text-blue-800 font-semibold text-sm">Read More →</a>
        </div>
      </div>
    </article>
  `).join('');
}