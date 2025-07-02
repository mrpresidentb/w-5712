import { supabase } from '@/integrations/supabase/client'

export async function generateRoutes() {
  const routes: any[] = []
  
  try {
    // Fetch published blog posts for route generation
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('slug')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching blog posts for SSG:', error)
      return routes
    }

    // Generate routes for each blog post
    if (posts) {
      posts.forEach(post => {
        routes.push({
          path: `/blog/${post.slug}`,
          props: { slug: post.slug }
        })
      })
    }

    console.log(`Generated ${routes.length} blog post routes for SSG`)
  } catch (error) {
    console.error('Error in route generation:', error)
  }

  return routes
}