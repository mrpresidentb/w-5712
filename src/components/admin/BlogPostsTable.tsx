
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BlogPost } from '@/types/supabase-blog';
import ImageUploader from './ImageUploader';
import { Edit, Save, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface BlogPostsTableProps {
  blogPosts: BlogPost[];
  onRefresh: () => void;
}

const BlogPostsTable: React.FC<BlogPostsTableProps> = ({ blogPosts, onRefresh }) => {
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [tempImageUrl, setTempImageUrl] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleEditStart = (post: BlogPost) => {
    console.log('Starting edit for post:', post.title);
    setEditingPost(post.id);
    setTempImageUrl(post.image_url || '');
  };

  const handleSave = async (postId: string) => {
    if (!tempImageUrl) return;
    
    setIsUpdating(true);
    console.log('Saving image for post:', postId, 'Image URL:', tempImageUrl);
    
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ image_url: tempImageUrl })
        .eq('id', postId);

      if (error) {
        console.error('Error updating post:', error);
        alert('Failed to update post image');
        return;
      }

      console.log('Post updated successfully');
      setEditingPost(null);
      setTempImageUrl('');
      onRefresh(); // Refresh the data
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post image');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancel = () => {
    console.log('Cancelling edit');
    setEditingPost(null);
    setTempImageUrl('');
  };

  const handleImageUploaded = (imagePath: string) => {
    console.log('Image uploaded, setting temp URL:', imagePath);
    setTempImageUrl(imagePath);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blog Posts Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-2/5">Title</TableHead>
              <TableHead className="w-1/5">Category</TableHead>
              <TableHead className="w-1/3">Current Image</TableHead>
              <TableHead className="w-1/5">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">
                  <div className="max-w-xs truncate" title={post.title}>
                    {post.title}
                  </div>
                </TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {post.category}
                  </span>
                </TableCell>
                <TableCell>
                  {editingPost === post.id ? (
                    <div className="space-y-3">
                      {tempImageUrl && (
                        <div className="mb-2">
                          <div className="text-xs text-gray-600 mb-1">Preview:</div>
                          <img 
                            src={tempImageUrl} 
                            alt="Preview" 
                            className="w-24 h-16 object-cover rounded border"
                          />
                        </div>
                      )}
                      <ImageUploader onImageUploaded={handleImageUploaded} />
                    </div>
                  ) : post.image_url ? (
                    <div>
                      <img 
                        src={post.image_url} 
                        alt={post.title}
                        className="w-24 h-16 object-cover rounded border"
                      />
                      <div className="text-xs text-gray-500 mt-1">✓ Has image</div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-gray-400 text-sm">No image</div>
                      <div className="text-xs text-orange-600">Needs image</div>
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  {editingPost === post.id ? (
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleSave(post.id)}
                        disabled={!tempImageUrl || isUpdating}
                        className="flex items-center gap-1"
                      >
                        <Save className="w-3 h-3" />
                        {isUpdating ? 'Saving...' : 'Save'}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={handleCancel}
                        disabled={isUpdating}
                        className="flex items-center gap-1"
                      >
                        <X className="w-3 h-3" />
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleEditStart(post)}
                      className="flex items-center gap-1"
                    >
                      <Edit className="w-3 h-3" />
                      {post.image_url ? 'Change' : 'Add'} Image
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BlogPostsTable;
