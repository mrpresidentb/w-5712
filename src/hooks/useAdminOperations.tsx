import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost, ContentSection } from '@/types/supabase-blog';

export const useAdminOperations = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateBlogPost = async (id: string, updates: Partial<BlogPost>) => {
    setIsLoading(true);
    try {
      console.log('[useAdminOperations] Starting update for post:', id);
      console.log('[useAdminOperations] Updates:', updates);

      // Convert ContentSection[] to Json for Supabase
      const supabaseUpdates = {
        ...updates,
        content: updates.content ? JSON.parse(JSON.stringify(updates.content)) : undefined
      };

      // Use RPC function to bypass RLS for admin operations
      const { error } = await supabase.rpc('admin_update_blog_post', {
        post_id: id,
        updates: supabaseUpdates
      });

      if (error) {
        console.error('[useAdminOperations] RPC error:', error);
        throw error;
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

      // Convert ContentSection[] to Json for Supabase
      const supabasePostData = {
        title: postData.title!,
        slug: postData.slug!,
        excerpt: postData.excerpt || null,
        content: postData.content ? JSON.parse(JSON.stringify(postData.content)) : [],
        category: postData.category!,
        author: postData.author || 'IT Carolina Team',
        image_url: postData.image_url || null,
        published: postData.published ?? true,
        date: postData.date || new Date().toISOString().split('T')[0]
      };

      // Use RPC function to create blog post
      const { data, error } = await supabase.rpc('admin_create_blog_post', {
        post_data: supabasePostData
      });

      if (error) {
        console.error('[useAdminOperations] RPC error:', error);
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

  const deleteBlogPost = async (id: string) => {
    setIsLoading(true);
    try {
      console.log('[useAdminOperations] Starting delete for post:', id);

      // Use direct delete from the blog_posts table
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('[useAdminOperations] Delete error:', error);
        throw error;
      }

      console.log('[useAdminOperations] Delete successful');
      return { success: true };
    } catch (error) {
      console.error('[useAdminOperations] Delete failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateBlogPost,
    createBlogPost,
    deleteBlogPost,
    isLoading
  };
};
