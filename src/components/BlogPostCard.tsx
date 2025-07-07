
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '../types/supabase-blog';
import LazyImage from './LazyImage';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  // Calculate reading time (average 200 words per minute)
  const wordCount = post.content.reduce((count, section) => {
    if (section.content) {
      return count + section.content.split(/\s+/).length;
    } else if (section.items) {
      return count + section.items.join(' ').split(/\s+/).length;
    }
    return count;
  }, 0);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative overflow-hidden">
          <LazyImage
            src={post.image_url || '/placeholder.svg'}
            alt={post.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
              {post.category}
            </Badge>
          </div>
        </div>
        
        <CardContent className="flex-1 p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readingTime} min read</span>
            </div>
          </div>
          
          <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
            {post.title}
          </h2>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <User size={14} />
              <span>{post.author}</span>
            </div>
            <span className="text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors">
              Read More →
            </span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogPostCard;
