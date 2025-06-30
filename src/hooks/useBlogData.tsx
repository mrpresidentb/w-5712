
import { useState, useEffect } from 'react';
import { blogPosts as originalBlogPosts } from '@/data/blog';
import { BlogPost } from '@/data/blog/blogTypes';

const BLOG_DATA_KEY = 'admin_blog_data';

export const useBlogData = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(originalBlogPosts);

  useEffect(() => {
    const savedData = localStorage.getItem(BLOG_DATA_KEY);
    if (savedData) {
      setBlogPosts(JSON.parse(savedData));
    }
  }, []);

  const updateBlogPost = (postId: string, updates: Partial<BlogPost>) => {
    const updatedPosts = blogPosts.map(post => 
      post.id === postId ? { ...post, ...updates } : post
    );
    setBlogPosts(updatedPosts);
    localStorage.setItem(BLOG_DATA_KEY, JSON.stringify(updatedPosts));
  };

  const resetBlogData = () => {
    setBlogPosts(originalBlogPosts);
    localStorage.removeItem(BLOG_DATA_KEY);
  };

  return { blogPosts, updateBlogPost, resetBlogData };
};
