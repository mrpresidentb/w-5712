
import { supabase } from '@/integrations/supabase/client';
import { BlogPost, BlogCategory } from '@/types/supabase-blog';
import { transformBlogPostData } from './blogDataTransformers';

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  console.log('[blogApiService] Fetching blog posts from Supabase...');
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('date', { ascending: false });

  if (error) {
    console.error('[blogApiService] Supabase error:', error);
    throw error;
  }

  console.log('[blogApiService] Raw blog posts data:', data);
  console.log('[blogApiService] Number of posts fetched:', data?.length || 0);

  return (data || []).map(transformBlogPostData);
};

export const fetchBlogCategories = async (): Promise<BlogCategory[]> => {
  console.log('[blogApiService] Fetching categories from Supabase...');
  
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('[blogApiService] Categories error:', error);
    throw error;
  }

  console.log('[blogApiService] Categories data:', data);
  return data || [];
};

export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  console.log('[blogApiService] Starting fetch for slug:', slug);
  
  // Debug: Check available posts
  const { data: allPosts, error: allPostsError } = await supabase
    .from('blog_posts')
    .select('slug, title, published')
    .eq('published', true);
  
  if (allPostsError) {
    console.error('[blogApiService] Error fetching all posts for debugging:', allPostsError);
  } else {
    console.log('[blogApiService] Available published posts:', allPosts?.map(p => ({ slug: p.slug, title: p.title })));
    console.log('[blogApiService] Looking for slug:', slug);
    console.log('[blogApiService] Exact matches:', allPosts?.filter(p => p.slug === slug));
  }
  
  // Fetch the specific post
  console.log('[blogApiService] Executing query for slug:', slug);
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  console.log('[blogApiService] Query result - data:', data, 'error:', error);

  if (error) {
    console.error('[blogApiService] Error fetching blog post by slug:', error);
    throw error;
  }

  if (!data) {
    console.log('[blogApiService] No blog post found for slug:', slug);
    return null;
  }

  console.log('[blogApiService] Found blog post:', data);
  return transformBlogPostData(data);
};
