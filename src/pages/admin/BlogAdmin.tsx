
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, RefreshCw } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useSupabaseBlog } from '@/hooks/useSupabaseBlog';
import AdminLogin from '@/components/admin/AdminLogin';
import BlogPostsTable from '@/components/admin/BlogPostsTable';

const BlogAdmin: React.FC = () => {
  const { isAuthenticated, isLoading, login, logout } = useAdminAuth();
  const { blogPosts, loading, error, refetch } = useSupabaseBlog();

  if (isLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={login} />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>Error loading blog posts: {error}</p>
          <Button onClick={refetch} className="mt-4">
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Admin Panel</h1>
            <p className="text-gray-600">Manage blog post images and content</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={refetch}
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh Data
            </Button>
            <Button 
              variant="outline" 
              onClick={logout}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Admin Dashboard</CardTitle>
              <CardDescription>
                Upload and assign images to blog posts. Changes are saved automatically to Supabase.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-semibold text-blue-800">Total Posts</div>
                  <div className="text-2xl font-bold text-blue-600">{blogPosts.length}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="font-semibold text-green-800">With Images</div>
                  <div className="text-2xl font-bold text-green-600">
                    {blogPosts.filter(post => post.image_url).length}
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="font-semibold text-orange-800">Need Images</div>
                  <div className="text-2xl font-bold text-orange-600">
                    {blogPosts.filter(post => !post.image_url).length}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <BlogPostsTable 
            blogPosts={blogPosts} 
            onRefresh={refetch}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
