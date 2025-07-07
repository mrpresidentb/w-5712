
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSupabaseBlog } from '@/hooks/useSupabaseBlog';

interface BlogSidebarProps {
  currentSlug?: string;
  selectedCategory?: string | null;
  onCategorySelect?: (category: string | null) => void;
}

const BlogSidebar = ({ currentSlug, selectedCategory, onCategorySelect }: BlogSidebarProps) => {
  const { blogPosts, categories } = useSupabaseBlog();
  
  // Get recent posts (excluding current post if on detail page)
  const recentPosts = blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 5);

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
              {post.image_url && (
                <img 
                  src={post.image_url} 
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
              const postCount = blogPosts.filter(post => post.category === category.name).length;
              const isSelected = selectedCategory === category.name;
              return (
                <Badge 
                  key={category.id} 
                  variant={isSelected ? "default" : "secondary"} 
                  className={`text-xs cursor-pointer transition-colors ${
                    isSelected 
                      ? "bg-purple-600 hover:bg-purple-700" 
                      : "hover:bg-secondary/80"
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name} ({postCount})
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
