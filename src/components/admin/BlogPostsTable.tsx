
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BlogPost } from '@/data/blog/blogTypes';
import ImageUploader from './ImageUploader';
import { Edit, Save, X } from 'lucide-react';

interface BlogPostsTableProps {
  blogPosts: BlogPost[];
  onUpdatePost: (postId: string, updates: Partial<BlogPost>) => void;
}

const BlogPostsTable: React.FC<BlogPostsTableProps> = ({ blogPosts, onUpdatePost }) => {
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [tempImageUrl, setTempImageUrl] = useState<string>('');

  const handleEditStart = (post: BlogPost) => {
    setEditingPost(post.id);
    setTempImageUrl(post.imageUrl || '');
  };

  const handleSave = (postId: string) => {
    if (tempImageUrl) {
      onUpdatePost(postId, { imageUrl: tempImageUrl });
    }
    setEditingPost(null);
    setTempImageUrl('');
  };

  const handleCancel = () => {
    setEditingPost(null);
    setTempImageUrl('');
  };

  const handleImageUploaded = (imagePath: string) => {
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
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Current Image</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium max-w-xs">
                  <div className="truncate">{post.title}</div>
                </TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>
                  {editingPost === post.id ? (
                    <div className="space-y-2">
                      {tempImageUrl && (
                        <img 
                          src={tempImageUrl} 
                          alt="Preview" 
                          className="w-20 h-12 object-cover rounded"
                        />
                      )}
                      <ImageUploader onImageUploaded={handleImageUploaded} />
                    </div>
                  ) : post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-20 h-12 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-400">No image</span>
                  )}
                </TableCell>
                <TableCell>
                  {editingPost === post.id ? (
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleSave(post.id)}
                        disabled={!tempImageUrl}
                      >
                        <Save className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={handleCancel}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button size="sm" variant="outline" onClick={() => handleEditStart(post)}>
                      <Edit className="w-4 h-4" />
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
