import type { PageContextServer } from 'vite-plugin-ssr/types'
import { supabaseServer } from '../../../src/integrations/supabase/serverClient'
import { BlogPost } from '../../../src/types/supabase-blog'
import { transformBlogPostData } from '../../../src/services/blogDataTransformers'

export { onBeforeRender }

async function onBeforeRender(pageContext: PageContextServer) {
  const { slug } = pageContext.routeParams
  
  console.log('[SSR] Fetching blog post for slug:', slug)
  
  try {
    // Fetch the blog post from Supabase
    const { data: postData, error } = await supabaseServer
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle()

    if (error) {
      console.error('[SSR] Error fetching blog post:', error)
      throw error
    }

    if (!postData) {
      console.log('[SSR] No blog post found for slug:', slug)
      return {
        post: null,
        notFound: true
      }
    }

    const post = transformBlogPostData(postData)
    console.log('[SSR] Successfully fetched post:', post.title)

    return {
      post,
      notFound: false
    }
  } catch (error) {
    console.error('[SSR] Error in data function:', error)
    return {
      post: null,
      notFound: true
    }
  }
}