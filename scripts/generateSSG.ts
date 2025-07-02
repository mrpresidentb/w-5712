import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';

// Add fetch polyfill for Node.js if needed
if (!globalThis.fetch) {
  globalThis.fetch = fetch as any;
}

const supabaseUrl = 'https://vmmhvciyxfbwytuvztug.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbWh2Y2l5eGZid3l0dXZ6dHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzg2NzAsImV4cCI6MjA2NjkxNDY3MH0._pu1smjtNkE7i_-mSX6NCkwSa_dwAWsNsqkoBsI6R74';

const supabase = createClient(supabaseUrl, supabaseKey);

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image_url: string;
  custom_title?: string;
  custom_description?: string;
  custom_keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  created_at: string;
  updated_at: string;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function generateBlogPostHTML(post: BlogPost, baseHTML: string): string {
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

  // Inject meta tags into the HTML
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

  // Replace the head content with our enhanced meta tags
  return baseHTML.replace(
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
    </head>`
  );
}

async function generateStaticPages() {
  try {
    console.log('🚀 Starting SSG generation...');
    
    // Read the base HTML template
    const baseHTMLPath = path.join(process.cwd(), 'dist', 'index.html');
    if (!fs.existsSync(baseHTMLPath)) {
      throw new Error('Base HTML file not found. Run "npm run build" first.');
    }
    
    const baseHTML = fs.readFileSync(baseHTMLPath, 'utf8');
    console.log('📄 Base HTML template loaded');
    
    // Test Supabase connection first
    console.log('🔍 Testing Supabase connection...');
    const { data: testData, error: testError } = await supabase
      .from('blog_posts')
      .select('count')
      .limit(1);
    
    if (testError) {
      console.error('❌ Supabase connection failed:', testError.message);
      throw new Error(`Supabase connection error: ${testError.message}`);
    }
    
    console.log('✅ Supabase connection successful');
    
    // Fetch all published blog posts
    console.log('📡 Fetching blog posts from Supabase...');
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true);
    
    if (error) {
      console.error('❌ Error fetching blog posts:', error);
      throw new Error(`Supabase fetch error: ${error.message}`);
    }
    
    if (!posts || posts.length === 0) {
      console.log('⚠️ No published blog posts found');
      return;
    }
    
    console.log(`📝 Found ${posts.length} published blog posts`);
    
    // Generate static HTML for each blog post
    for (const post of posts) {
      const blogPostHTML = generateBlogPostHTML(post, baseHTML);
      
      // Create directory structure
      const blogDir = path.join(process.cwd(), 'dist', 'blog', post.slug);
      fs.mkdirSync(blogDir, { recursive: true });
      
      // Write the HTML file
      const htmlPath = path.join(blogDir, 'index.html');
      fs.writeFileSync(htmlPath, blogPostHTML);
      
      console.log(`✅ Generated: /blog/${post.slug}/index.html`);
    }
    
    console.log(`🎉 SSG generation complete! Generated ${posts.length} blog post pages.`);
    
  } catch (error) {
    console.error('❌ SSG generation failed:', error);
    process.exit(1);
  }
}

generateStaticPages();