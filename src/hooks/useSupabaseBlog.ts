
import { useState, useEffect, useCallback } from 'react';
import { BlogPost, BlogCategory } from '@/types/supabase-blog';
import { fetchBlogPosts, fetchBlogCategories, fetchBlogPostBySlug } from '@/services/blogApiService';

export const useSupabaseBlog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadBlogPosts = async () => {
    try {
      setLoading(true);
      console.log('[useSupabaseBlog] Starting to fetch blog data...');
      
      const [postsData, categoriesData] = await Promise.all([
        fetchBlogPosts(),
        fetchBlogCategories()
      ]);

      console.log('[useSupabaseBlog] Transformed blog posts:', postsData.map(p => ({ 
        title: p.title, 
        slug: p.slug, 
        contentSections: p.content.length 
      })));
      
      setBlogPosts(postsData);
      setCategories(categoriesData);
    } catch (err) {
      console.error('[useSupabaseBlog] Error in loadBlogPosts:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch blog data');
    } finally {
      setLoading(false);
      console.log('[useSupabaseBlog] Finished fetching blog data');
    }
  };

  // Memoize the getBlogPostBySlug function to prevent infinite re-renders
  const getBlogPostBySlug = useCallback(async (slug: string): Promise<BlogPost | null> => {
    try {
      return await fetchBlogPostBySlug(slug);
    } catch (err) {
      console.error('[useSupabaseBlog] Error fetching blog post by slug:', err);
      throw err;
    }
  }, []);

  useEffect(() => {
    loadBlogPosts();
  }, []);

  const refetch = useCallback(() => {
    loadBlogPosts();
  }, []);

  return {
    blogPosts,
    categories,
    loading,
    error,
    refetch,
    getBlogPostBySlug
  };
};
