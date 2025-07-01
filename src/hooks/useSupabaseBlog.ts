
import { useState, useEffect, useCallback } from 'react';
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
        console.log('[useSupabaseBlog] Raw content type:', typeof post.content);
        console.log('[useSupabaseBlog] Raw content:', post.content);
        
        // Properly parse the JSONB content
        let parsedContent: ContentSection[] = [];
        try {
          if (typeof post.content === 'string') {
            parsedContent = JSON.parse(post.content);
          } else if (Array.isArray(post.content)) {
            parsedContent = post.content;
          } else if (post.content && typeof post.content === 'object') {
            // If it's already an object, use it directly
            parsedContent = post.content as ContentSection[];
          }
        } catch (parseError) {
          console.error('[useSupabaseBlog] Error parsing content for post:', post.title, parseError);
          parsedContent = [];
        }
        
        console.log('[useSupabaseBlog] Parsed content sections:', parsedContent.length);
        console.log('[useSupabaseBlog] Parsed content preview:', parsedContent.slice(0, 2));
        
        return {
          ...post,
          content: parsedContent,
          date: new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        };
      });

      console.log('[useSupabaseBlog] Transformed blog posts:', transformedPosts.map(p => ({ 
        title: p.title, 
        slug: p.slug, 
        contentSections: p.content.length 
      })));
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

  // Memoize the getBlogPostBySlug function to prevent infinite re-renders
  const getBlogPostBySlug = useCallback(async (slug: string): Promise<BlogPost | null> => {
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
      console.log('[getBlogPostBySlug] Raw content from DB:', data.content);
      console.log('[getBlogPostBySlug] Content type:', typeof data.content);

      // Properly parse the JSONB content
      let parsedContent: ContentSection[] = [];
      try {
        if (typeof data.content === 'string') {
          parsedContent = JSON.parse(data.content);
        } else if (Array.isArray(data.content)) {
          parsedContent = data.content;
        } else if (data.content && typeof data.content === 'object') {
          // If it's already an object, use it directly
          parsedContent = data.content as ContentSection[];
        }
      } catch (parseError) {
        console.error('[getBlogPostBySlug] Error parsing content:', parseError);
        parsedContent = [];
      }

      console.log('[getBlogPostBySlug] Parsed content sections:', parsedContent.length);
      console.log('[getBlogPostBySlug] Parsed content details:', parsedContent);

      const transformedPost: BlogPost = {
        ...data,
        content: parsedContent,
        date: new Date(data.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      };

      console.log('[getBlogPostBySlug] Final transformed post content sections:', transformedPost.content.length);
      return transformedPost;
    } catch (err) {
      console.error('[getBlogPostBySlug] Error fetching blog post by slug:', err);
      throw err; // Re-throw to let the component handle it
    }
  }, []); // Empty dependency array since this function doesn't depend on any state

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
  }, []); // Empty dependency array to run only once

  const refetch = useCallback(() => {
    fetchBlogPosts();
    fetchCategories();
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
