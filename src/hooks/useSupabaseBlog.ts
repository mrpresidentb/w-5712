
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost, BlogCategory, ContentSection } from '@/types/supabase-blog';

export const useSupabaseBlog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      console.log('[useSupabaseBlog] Fetching blog posts from Supabase...');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('date', { ascending: false });

      if (error) {
        console.error('[useSupabaseBlog] Supabase error:', error);
        throw error;
      }

      console.log('[useSupabaseBlog] Raw blog posts data:', data);
      console.log('[useSupabaseBlog] Number of posts fetched:', data?.length || 0);

      // Transform the data to match our interface with proper type casting
      const transformedPosts: BlogPost[] = (data || []).map(post => {
        console.log('[useSupabaseBlog] Processing post:', post.title, 'with slug:', post.slug);
        return {
          ...post,
          content: (post.content as unknown as ContentSection[]) || [],
          date: new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        };
      });

      console.log('[useSupabaseBlog] Transformed blog posts:', transformedPosts.map(p => ({ title: p.title, slug: p.slug })));
      setBlogPosts(transformedPosts);
    } catch (err) {
      console.error('[useSupabaseBlog] Error fetching blog posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
    }
  };

  const fetchCategories = async () => {
    try {
      console.log('[useSupabaseBlog] Fetching categories from Supabase...');
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');

      if (error) {
        console.error('[useSupabaseBlog] Categories error:', error);
        throw error;
      }

      console.log('[useSupabaseBlog] Categories data:', data);
      setCategories(data || []);
    } catch (err) {
      console.error('[useSupabaseBlog] Error fetching categories:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch categories');
    }
  };

  const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    try {
      console.log('[getBlogPostBySlug] Starting fetch for slug:', slug);
      
      // First, let's check what posts are available
      const { data: allPosts, error: allPostsError } = await supabase
        .from('blog_posts')
        .select('slug, title, published')
        .eq('published', true);
      
      if (allPostsError) {
        console.error('[getBlogPostBySlug] Error fetching all posts for debugging:', allPostsError);
      } else {
        console.log('[getBlogPostBySlug] Available published posts:', allPosts?.map(p => ({ slug: p.slug, title: p.title })));
        console.log('[getBlogPostBySlug] Looking for slug:', slug);
        console.log('[getBlogPostBySlug] Exact matches:', allPosts?.filter(p => p.slug === slug));
      }
      
      // Now fetch the specific post with more detailed logging
      console.log('[getBlogPostBySlug] Executing query for slug:', slug);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      console.log('[getBlogPostBySlug] Query result - data:', data, 'error:', error);

      if (error) {
        console.error('[getBlogPostBySlug] Error fetching blog post by slug:', error);
        throw error;
      }

      if (!data) {
        console.log('[getBlogPostBySlug] No blog post found for slug:', slug);
        return null;
      }

      console.log('[getBlogPostBySlug] Found blog post:', data);

      const transformedPost: BlogPost = {
        ...data,
        content: (data.content as unknown as ContentSection[]) || [],
        date: new Date(data.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      };

      console.log('[getBlogPostBySlug] Transformed blog post:', transformedPost);
      return transformedPost;
    } catch (err) {
      console.error('[getBlogPostBySlug] Error fetching blog post by slug:', err);
      throw err; // Re-throw to let the component handle it
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log('[useSupabaseBlog] Starting to fetch blog data...');
      try {
        await Promise.all([fetchBlogPosts(), fetchCategories()]);
      } catch (err) {
        console.error('[useSupabaseBlog] Error in fetchData:', err);
      } finally {
        setLoading(false);
        console.log('[useSupabaseBlog] Finished fetching blog data');
      }
    };

    fetchData();
  }, []);

  return {
    blogPosts,
    categories,
    loading,
    error,
    refetch: () => {
      fetchBlogPosts();
      fetchCategories();
    },
    getBlogPostBySlug
  };
};
