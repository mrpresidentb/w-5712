import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BlogPost } from '@/types/supabase-blog';
import { useAdminOperations } from '@/hooks/useAdminOperations';
import ImageUploader from './ImageUploader';
import { Edit, Save, X, Eye, FileText, Calendar, User, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface BlogPostsTableProps {
  blogPosts: BlogPost[];
  onRefresh: () => void;
  onEdit?: (post: BlogPost) => void;
}

const BlogPostsTable: React.FC<BlogPostsTableProps> = ({ blogPosts, onRefresh, onEdit }) => {
  const { updateBlogPost, deleteBlogPost, isLoading: isUpdating } = useAdminOperations();
  const [editingImagePost, setEditingImagePost] = useState<string | null>(null);
  const [tempImageUrl, setTempImageUrl] = useState<string>('');

  const handleImageEditStart = (post: BlogPost) => {
    console.log('Starting image edit for post:', post.title);
    setEditingImagePost(post.id);
    setTempImageUrl(post.image_url || '');
  };

  const handleImageSave = async (postId: string) => {
    if (!tempImageUrl) return;
    
    console.log('Saving image for post:', postId, 'Image URL:', tempImageUrl);
    
    try {
      await updateBlogPost(postId, { 
        image_url: tempImageUrl
      });

      console.log('Post image updated successfully');
      setEditingImagePost(null);
      setTempImageUrl('');
      onRefresh();
      toast.success('Image updated successfully!');
    } catch (error) {
      console.error('Error updating post:', error);
      toast.error('Failed to update post image');
    }
  };

  const handleImageCancel = () => {
    console.log('Cancelling image edit');
    setEditingImagePost(null);
    setTempImageUrl('');
  };

  const handleImageUploaded = (imagePath: string) => {
    console.log('Image uploaded, setting temp URL:', imagePath);
    setTempImageUrl(imagePath);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleDeletePost = async (postId: string, title: string) => {
    const confirmed = window.confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`);
    if (!confirmed) return;

    try {
      await deleteBlogPost(postId);
      onRefresh();
      toast.success('Article deleted successfully!');
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Failed to delete article');
    }
  };

  const getStatusBadge = (post: BlogPost) => {
    if (post.published) {
      return <Badge variant="default" className="bg-green-500">Published</Badge>;
    }
    return <Badge variant="secondary">Draft</Badge>;
  };

  const publishedPosts = blogPosts.filter(post => post.published);
  const draftPosts = blogPosts.filter(post => !post.published);

  const PostsTable = ({ posts }: { posts: BlogPost[] }) => (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/5">Article</TableHead>
            <TableHead className="w-1/6">Category</TableHead>
            <TableHead className="w-1/6">Status</TableHead>
            <TableHead className="w-1/4">Featured Image</TableHead>
            <TableHead className="w-1/4">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-medium truncate max-w-xs" title={post.title}>
                    {post.title}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  {post.excerpt && (
                    <div className="text-xs text-gray-600 truncate max-w-xs" title={post.excerpt}>
                      {post.excerpt}
                    </div>
                  )}
                </div>
              </TableCell>
              
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
              </TableCell>
              
              <TableCell>
                {getStatusBadge(post)}
              </TableCell>
              
              <TableCell>
                {editingImagePost === post.id ? (
                  <div className="space-y-3">
                    {tempImageUrl && (
                      <div className="mb-2">
                        <div className="text-xs text-gray-600 mb-1">Preview:</div>
                        <img 
                          src={tempImageUrl} 
                          alt="Preview" 
                          className="w-20 h-12 object-cover rounded border"
                        />
                      </div>
                    )}
                    <ImageUploader onImageUploaded={handleImageUploaded} />
                  </div>
                ) : post.image_url ? (
                  <div className="flex items-center gap-2">
                    <img 
                      src={post.image_url} 
                      alt={post.title}
                      className="w-20 h-12 object-cover rounded border"
                    />
                    <div className="text-xs text-green-600">✓</div>
                  </div>
                ) : (
                  <div className="text-center py-2">
                    <div className="text-gray-400 text-xs">No image</div>
                    <div className="text-xs text-orange-600">Recommended</div>
                  </div>
                )}
              </TableCell>
              
              <TableCell>
                <div className="flex gap-1">
                  {editingImagePost === post.id ? (
                    <>
                      <Button 
                        size="sm" 
                        onClick={() => handleImageSave(post.id)}
                        disabled={!tempImageUrl || isUpdating}
                        className="flex items-center gap-1"
                      >
                        <Save className="w-3 h-3" />
                        {isUpdating ? 'Saving...' : 'Save'}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={handleImageCancel}
                        disabled={isUpdating}
                        className="flex items-center gap-1"
                      >
                        <X className="w-3 h-3" />
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      {onEdit && (
                        <Button 
                          size="sm" 
                          variant="default"
                          onClick={() => onEdit(post)}
                          className="flex items-center gap-1"
                        >
                          <Edit className="w-3 h-3" />
                          Edit
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => handleImageEditStart(post)}
                        className="flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" />
                        {post.image_url ? 'Change' : 'Add'} Image
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive" 
                        onClick={() => handleDeletePost(post.id, post.title)}
                        className="flex items-center gap-1"
                        disabled={isUpdating}
                      >
                        <Trash2 className="w-3 h-3" />
                        Delete
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Articles Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Articles ({blogPosts.length})</TabsTrigger>
            <TabsTrigger value="published">Published ({publishedPosts.length})</TabsTrigger>
            <TabsTrigger value="drafts">Drafts ({draftPosts.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <PostsTable posts={blogPosts} />
          </TabsContent>
          
          <TabsContent value="published" className="mt-4">
            <PostsTable posts={publishedPosts} />
          </TabsContent>
          
          <TabsContent value="drafts" className="mt-4">
            <PostsTable posts={draftPosts} />
          </TabsContent>
        </Tabs>
        
        {blogPosts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No articles found</p>
            <p className="text-sm mt-1">Create your first article to get started</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogPostsTable;
