
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogSidebarProps {
  currentSlug?: string;
}

const BlogSidebar = ({ currentSlug }: BlogSidebarProps) => {
  // Get recent posts (excluding current post)
  const recentPosts = blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 3);

  // Get unique categories with post counts
  const categories = blogPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Articles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group hover:bg-gray-50 p-3 rounded-lg transition-colors"
            >
              <h4 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600 mb-2">
                {post.title}
              </h4>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="w-3 h-3 mr-1" />
                {post.date}
              </div>
            </Link>
          ))}
          <Link 
            to="/blog"
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            View all articles
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(categories).map(([category, count]) => (
              <Link
                key={category}
                to={`/blog?category=${encodeURIComponent(category)}`}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm">{category}</span>
                <Badge variant="secondary" className="text-xs">
                  {count}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter CTA */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-blue-900 mb-2">Stay Updated</h3>
          <p className="text-sm text-blue-700 mb-4">
            Get the latest IT tips and computer repair guides delivered to your inbox.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
