
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/supabase-blog';

export const useAdminOperations = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateBlogPost = async (id: string, updates: Partial<BlogPost>) => {
    setIsLoading(true);
    try {
      console.log('[useAdminOperations] Starting update for post:', id);
      console.log('[useAdminOperations] Updates:', updates);

      // Use direct SQL query to bypass RLS for admin operations
      const { data, error } = await supabase.rpc('admin_update_blog_post', {
        post_id: id,
        updates: updates
      });

      if (error) {
        console.error('[useAdminOperations] RPC error:', error);
        // Fallback to direct update (this might still hit RLS)
        const { error: directError } = await supabase
          .from('blog_posts')
          .update({
            ...updates,
            updated_at: new Date().toISOString()
          })
          .eq('id', id);
        
        if (directError) {
          throw directError;
        }
      }

      console.log('[useAdminOperations] Update successful');
      return { success: true };
    } catch (error) {
      console.error('[useAdminOperations] Update failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const createBlogPost = async (postData: Partial<BlogPost>) => {
    setIsLoading(true);
    try {
      console.log('[useAdminOperations] Creating new post:', postData);

      const { data, error } = await supabase
        .from('blog_posts')
        .insert({
          title: postData.title!,
          slug: postData.slug!,
          excerpt: postData.excerpt,
          content: postData.content as any,
          category: postData.category!,
          author: postData.author || 'IT Carolina Team',
          image_url: postData.image_url,
          published: postData.published ?? true,
          date: postData.date || new Date().toISOString().split('T')[0]
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      console.log('[useAdminOperations] Create successful:', data);
      return { success: true, data };
    } catch (error) {
      console.error('[useAdminOperations] Create failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateBlogPost,
    createBlogPost,
    isLoading
  };
};
