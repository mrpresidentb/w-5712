
import { useState, useEffect, useCallback } from 'react';
import { BlogPost, BlogCategory } from '@/types/supabase-blog';
import { fetchBlogPosts, fetchBlogPostBySlug, fetchBlogCategories } from '@/services/blogApiService';
import { supabase } from '@/integrations/supabase/client';
import { transformBlogPostData } from '@/services/blogDataTransformers';

export const useSupabaseBlog = (includeUnpublished: boolean = false) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (includeUnpublished) {
        // For admin panel - fetch all posts (published and unpublished)
        console.log('[useSupabaseBlog] Fetching all blog posts for admin...');
        
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('date', { ascending: false });

        if (error) {
          console.error('[useSupabaseBlog] Supabase error:', error);
          throw error;
        }

        console.log('[useSupabaseBlog] Raw admin blog posts data:', data);
        setBlogPosts((data || []).map(transformBlogPostData));
      } else {
        // For public pages - only published posts
        const posts = await fetchBlogPosts();
        setBlogPosts(posts);
      }

      // Fetch categories
      const categoriesData = await fetchBlogCategories();
      setCategories(categoriesData);
    } catch (err) {
      console.error('[useSupabaseBlog] Error fetching blog posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
    } finally {
      setLoading(false);
    }
  }, [includeUnpublished]);

  const getBlogPostBySlug = useCallback(async (slug: string): Promise<BlogPost | null> => {
    try {
      console.log('[useSupabaseBlog] Getting blog post by slug:', slug);
      const post = await fetchBlogPostBySlug(slug);
      return post;
    } catch (err) {
      console.error('[useSupabaseBlog] Error fetching blog post by slug:', err);
      throw err;
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const refetch = useCallback(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    blogPosts,
    categories,
    loading,
    error,
    refetch,
    getBlogPostBySlug
  };
};

export const useSupabaseBlogPost = (slug: string) => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const post = await fetchBlogPostBySlug(slug);
        setBlogPost(post);
      } catch (err) {
        console.error('[useSupabaseBlogPost] Error fetching blog post:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch blog post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return {
    blogPost,
    loading,
    error
  };
};
