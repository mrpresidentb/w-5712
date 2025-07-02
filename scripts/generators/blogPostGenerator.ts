import { BlogPost } from '../types.js';
import { escapeHtml, calculateReadingTime } from '../utils.js';
import { generatePostContent, generateNavigation, generateFooter } from './contentGenerator.js';

export function generateBlogPostHTML(post: BlogPost, baseHTML: string): string {
  const title = escapeHtml(post.custom_title || `${post.title} | IT Carolina - Charlotte NC Computer Repair`);
  const description = escapeHtml(post.custom_description || post.excerpt || 'Professional IT support for home and small business in Charlotte, NC');
  const keywords = escapeHtml(post.custom_keywords || 'computer repair charlotte nc, IT support charlotte nc, computer help charlotte');
  
  const ogTitle = escapeHtml(post.og_title || title);
  const ogDescription = escapeHtml(post.og_description || description);
  
  // Handle image URL - check if it's already a full URL or just a path
  let ogImage = 'https://itcarolina.us/og.jpg'; // default
  if (post.og_image) {
    ogImage = post.og_image;
  } else if (post.image_url) {
    // Check if image_url is already a full URL
    ogImage = post.image_url.startsWith('http') ? post.image_url : `https://itcarolina.us${post.image_url}`;
  }
  
  const twitterTitle = escapeHtml(post.twitter_title || title);
  const twitterDescription = escapeHtml(post.twitter_description || description);
  const twitterImage = post.twitter_image || ogImage;
  const readingTime = calculateReadingTime(post.content);

  // Generate the content HTML
  const contentHTML = generateContentHTML(post, readingTime);

  // Inject meta tags and content into the HTML
  const metaTags = `
    <!-- Blog Post Meta Tags -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://itcarolina.us/blog/${post.slug}" />
    <meta property="og:title" content="${ogTitle}" />
    <meta property="og:description" content="${ogDescription}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:secure_url" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(post.title)}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="IT Carolina" />
    <meta property="article:published_time" content="${post.created_at}" />
    <meta property="article:modified_time" content="${post.updated_at}" />
    <meta property="article:author" content="IT Carolina" />
    <meta property="article:section" content="Technology" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${twitterTitle}" />
    <meta name="twitter:description" content="${twitterDescription}" />
    <meta name="twitter:image" content="${twitterImage}" />
    <meta name="twitter:image:alt" content="${escapeHtml(post.title)}" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://itcarolina.us/blog/${post.slug}" />
    
    <!-- Article Schema.org structured data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${escapeHtml(post.title)}",
      "description": "${description}",
      "image": {
        "@type": "ImageObject",
        "url": "${ogImage}",
        "width": 1200,
        "height": 630
      },
      "author": {
        "@type": "Organization",
        "name": "IT Carolina",
        "url": "https://itcarolina.us"
      },
      "publisher": {
        "@type": "Organization",
        "name": "IT Carolina",
        "logo": {
          "@type": "ImageObject",
          "url": "https://itcarolina.us/og.jpg",
          "width": 1200,
          "height": 630
        }
      },
      "datePublished": "${post.created_at}",
      "dateModified": "${post.updated_at}",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://itcarolina.us/blog/${post.slug}"
      },
      "url": "https://itcarolina.us/blog/${post.slug}"
    }
    </script>
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

  // Replace the body content with static HTML
  html = html.replace(
    /<body[^>]*>[\s\S]*?<\/body>/i,
    `<body>
      ${contentHTML}
    </body>`
  );

  return html;
}

function generateContentHTML(post: BlogPost, readingTime: number): string {
  return `
    <div class="min-h-screen bg-white">
      ${generateNavigation('post')}

      <!-- Hero Section -->
      <div class="w-full pt-32 pb-16 bg-gradient-to-b from-black to-gray-900 text-white relative"
           style="background-image: ${post.image_url ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${post.image_url}')` : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))'}; background-position: center; background-size: cover; background-repeat: no-repeat;">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <a href="/blog" class="inline-flex items-center text-white/80 hover:text-white mb-6">
              ← Back to Blog
            </a>
            <div class="flex items-center gap-2 mb-4">
              <span class="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">${escapeHtml(post.category)}</span>
              <span class="border border-white/10 text-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">${post.date}</span>
              <span class="border border-white/10 text-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">${readingTime} min read</span>
            </div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">${escapeHtml(post.title)}</h1>
            <div class="flex items-center text-gray-300">
              <span>By ${escapeHtml(post.author)}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg max-w-none">
            ${generatePostContent(post.content)}
          </div>
          
          <!-- Footer Info -->
          <div class="mt-12 p-6 bg-gray-50 rounded-lg">
            <p class="text-sm text-gray-600 mb-2">Category: ${escapeHtml(post.category)}</p>
            <p class="text-sm text-gray-600">For more IT support tips and computer repair services in Charlotte, NC, visit <a href="/" class="text-blue-600 hover:text-blue-800">IT Carolina</a></p>
          </div>
        </div>
      </div>

      ${generateFooter()}
    </div>
  `;
}