
import { useState, useEffect } from 'react';
import { blogPosts as originalBlogPosts } from '@/data/blog';
import { BlogPost } from '@/data/blog/blogTypes';

const BLOG_DATA_KEY = 'admin_blog_data';

export const useBlogData = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(originalBlogPosts);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem(BLOG_DATA_KEY);
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          console.log('Loaded blog data from localStorage:', parsedData.length, 'posts');
          setBlogPosts(parsedData);
        } catch (error) {
          console.error('Error parsing saved blog data:', error);
          setBlogPosts(originalBlogPosts);
        }
      }
    }
  }, []);

  const updateBlogPost = (postId: string, updates: Partial<BlogPost>) => {
    console.log('Updating blog post:', postId, 'with updates:', updates);
    
    const updatedPosts = blogPosts.map(post => 
      post.id === postId ? { ...post, ...updates } : post
    );
    
    setBlogPosts(updatedPosts);
    
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(BLOG_DATA_KEY, JSON.stringify(updatedPosts));
        console.log('Blog data saved to localStorage successfully');
      }
    } catch (error) {
      console.error('Error saving blog data to localStorage:', error);
    }
  };

  const resetBlogData = () => {
    console.log('Resetting blog data to original state');
    setBlogPosts(originalBlogPosts);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(BLOG_DATA_KEY);
    }
  };

  return { blogPosts, updateBlogPost, resetBlogData };
};
