import { supabase } from '@/integrations/supabase/client';

export async function generateBlogRoutes(): Promise<string[]> {
  try {
    console.log('[SSG] Fetching blog posts for route generation...');
    
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('slug')
      .eq('published', true);
    
    if (error) {
      console.error('[SSG] Error fetching blog posts:', error);
      return [];
    }
    
    const routes = posts?.map(post => `/blog/${post.slug}`) || [];
    console.log('[SSG] Generated blog routes:', routes);
    
    return routes;
  } catch (error) {
    console.error('[SSG] Error in generateBlogRoutes:', error);
    return [];
  }
}