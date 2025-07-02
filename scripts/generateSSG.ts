import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';
import { BlogPost } from './types.js';
import { generateBlogPostHTML } from './generators/blogPostGenerator.js';
import { generateBlogListingHTML } from './generators/blogListingGenerator.js';

// Add fetch polyfill for Node.js if needed
if (!globalThis.fetch) {
  globalThis.fetch = fetch as any;
}

const supabaseUrl = 'https://vmmhvciyxfbwytuvztug.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbWh2Y2l5eGZid3l0dXZ6dHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzg2NzAsImV4cCI6MjA2NjkxNDY3MH0._pu1smjtNkE7i_-mSX6NCkwSa_dwAWsNsqkoBsI6R74';

const supabase = createClient(supabaseUrl, supabaseKey);

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
    
    // Generate blog listing page
    const blogListingHTML = generateBlogListingHTML(posts, baseHTML);
    const blogMainDir = path.join(process.cwd(), 'dist', 'blog');
    fs.mkdirSync(blogMainDir, { recursive: true });
    fs.writeFileSync(path.join(blogMainDir, 'index.html'), blogListingHTML);
    console.log('✅ Generated: /blog/index.html');

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
    
    console.log(`🎉 SSG generation complete! Generated ${posts.length} blog post pages and 1 listing page.`);
    
  } catch (error) {
    console.error('❌ SSG generation failed:', error);
    process.exit(1);
  }
}

generateStaticPages();