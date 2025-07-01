
import { BlogPost, ContentSection } from '@/types/supabase-blog';

export const transformBlogPostData = (post: any): BlogPost => {
  console.log('[blogDataTransformers] Processing post:', post.title, 'with slug:', post.slug);
  console.log('[blogDataTransformers] Raw content type:', typeof post.content);
  console.log('[blogDataTransformers] Raw content:', post.content);
  
  // Properly parse the JSONB content with type guards
  let parsedContent: ContentSection[] = [];
  try {
    if (typeof post.content === 'string') {
      parsedContent = JSON.parse(post.content);
    } else if (Array.isArray(post.content)) {
      // Cast Json[] to ContentSection[] with proper validation
      parsedContent = post.content as unknown as ContentSection[];
    } else if (post.content && typeof post.content === 'object') {
      // If it's an object, try to cast it as ContentSection[]
      parsedContent = post.content as unknown as ContentSection[];
    }
  } catch (parseError) {
    console.error('[blogDataTransformers] Error parsing content for post:', post.title, parseError);
    parsedContent = [];
  }
  
  console.log('[blogDataTransformers] Parsed content sections:', parsedContent.length);
  console.log('[blogDataTransformers] Parsed content preview:', parsedContent.slice(0, 2));
  
  return {
    ...post,
    content: parsedContent,
    date: new Date(post.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  };
};
