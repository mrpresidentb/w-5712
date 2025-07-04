import { supabaseServer } from '../../../src/integrations/supabase/serverClient'

export { prerender }

async function prerender() {
  console.log('[SSR] Starting prerender for blog posts...')
  
  try {
    // Fetch all published blog post slugs
    const { data: posts, error } = await supabaseServer
      .from('blog_posts')
      .select('slug')
      .eq('published', true)

    if (error) {
      console.error('[SSR] Error fetching blog slugs:', error)
      return []
    }

    if (!posts || posts.length === 0) {
      console.log('[SSR] No published blog posts found')
      return []
    }

    const urls = posts.map(post => `/blog/${post.slug}`)
    console.log('[SSR] Pre-rendering blog posts:', urls)
    
    return urls
  } catch (error) {
    console.error('[SSR] Error in prerender function:', error)
    return []
  }
}