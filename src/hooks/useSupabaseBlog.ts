
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
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('date', { ascending: false });

      if (error) throw error;

      // Transform the data to match our interface with proper type casting
      const transformedPosts: BlogPost[] = (data || []).map(post => ({
        ...post,
        content: (post.content as ContentSection[]) || [],
        date: new Date(post.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }));

      setBlogPosts(transformedPosts);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch categories');
    }
  };

  const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (error) throw error;

      if (!data) return null;

      return {
        ...data,
        content: (data.content as ContentSection[]) || [],
        date: new Date(data.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      };
    } catch (err) {
      console.error('Error fetching blog post by slug:', err);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchBlogPosts(), fetchCategories()]);
      setLoading(false);
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
