
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
      console.log('Fetching blog posts from Supabase...');
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('date', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Raw blog posts data:', data);

      // Transform the data to match our interface with proper type casting
      const transformedPosts: BlogPost[] = (data || []).map(post => ({
        ...post,
        content: (post.content as unknown as ContentSection[]) || [],
        date: new Date(post.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }));

      console.log('Transformed blog posts:', transformedPosts);
      setBlogPosts(transformedPosts);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
    }
  };

  const fetchCategories = async () => {
    try {
      console.log('Fetching categories from Supabase...');
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');

      if (error) {
        console.error('Categories error:', error);
        throw error;
      }

      console.log('Categories data:', data);
      setCategories(data || []);
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch categories');
    }
  };

  const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    try {
      console.log('Fetching blog post by slug:', slug);
      
      // First, let's check what posts are available
      const { data: allPosts, error: allPostsError } = await supabase
        .from('blog_posts')
        .select('slug, title, published')
        .eq('published', true);
      
      if (allPostsError) {
        console.error('Error fetching all posts for debugging:', allPostsError);
      } else {
        console.log('Available published posts:', allPosts?.map(p => ({ slug: p.slug, title: p.title })));
      }
      
      // Now fetch the specific post
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching blog post by slug:', error);
        throw error;
      }

      if (!data) {
        console.log('No blog post found for slug:', slug);
        return null;
      }

      console.log('Found blog post:', data);

      const transformedPost: BlogPost = {
        ...data,
        content: (data.content as unknown as ContentSection[]) || [],
        date: new Date(data.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      };

      console.log('Transformed blog post:', transformedPost);
      return transformedPost;
    } catch (err) {
      console.error('Error fetching blog post by slug:', err);
      throw err; // Re-throw to let the component handle it
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log('Starting to fetch blog data...');
      try {
        await Promise.all([fetchBlogPosts(), fetchCategories()]);
      } catch (err) {
        console.error('Error in fetchData:', err);
      } finally {
        setLoading(false);
        console.log('Finished fetching blog data');
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
