
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useBlogData } from '@/hooks/useBlogData';

interface BlogSidebarProps {
  currentSlug?: string;
  selectedCategory?: string | null;
  onCategorySelect?: (category: string | null) => void;
}

const BlogSidebar = ({ currentSlug, selectedCategory, onCategorySelect }: BlogSidebarProps) => {
  const { blogPosts } = useBlogData();
  
  // Get recent posts (excluding current post if on detail page)
  const recentPosts = blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 5);

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const handleCategoryClick = (category: string) => {
    if (onCategorySelect) {
      onCategorySelect(selectedCategory === category ? null : category);
    }
  };

  return (
    <div className="space-y-6">
      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-3">
              {post.imageUrl && (
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-16 h-12 object-cover rounded flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-sm font-medium hover:text-purple-600 transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const postCount = blogPosts.filter(post => post.category === category).length;
              const isSelected = selectedCategory === category;
              return (
                <Badge 
                  key={category} 
                  variant={isSelected ? "default" : "secondary"} 
                  className={`text-xs cursor-pointer transition-colors ${
                    isSelected 
                      ? "bg-purple-600 hover:bg-purple-700" 
                      : "hover:bg-secondary/80"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category} ({postCount})
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
