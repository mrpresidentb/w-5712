import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BlogPost } from '@/types/supabase-blog';
import { Globe, Search, Facebook, Twitter, RotateCcw } from 'lucide-react';

interface SEOEditorProps {
  post: BlogPost;
  onUpdate: (updates: Partial<BlogPost>) => void;
}

const SEOEditor: React.FC<SEOEditorProps> = ({ post, onUpdate }) => {
  const handleInputChange = (field: keyof BlogPost, value: string) => {
    onUpdate({ [field]: value || null });
  };

  const generateDefaultValues = () => {
    const defaultTitle = `${post.title} | IT Carolina - Charlotte NC Computer Repair`;
    const defaultDescription = post.excerpt || 'Professional IT support for home and small business in Charlotte, NC';
    const defaultImage = post.image_url || 'https://itcarolina.us/og.jpg';
    
    onUpdate({
      custom_title: defaultTitle,
      custom_description: defaultDescription,
      custom_keywords: `computer repair charlotte nc, IT support charlotte, ${post.category.toLowerCase()}, charlotte computer help`,
      og_title: defaultTitle,
      og_description: defaultDescription,
      og_image: defaultImage,
      twitter_title: post.title,
      twitter_description: defaultDescription,
      twitter_image: defaultImage
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">SEO & Meta Data</h3>
          <p className="text-sm text-gray-600">Customize how this article appears in search engines and social media</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={generateDefaultValues}
          className="flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Auto-Generate
        </Button>
      </div>

      {/* Basic Meta Data */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search Engine Meta Data
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="custom_title">Custom Title</Label>
            <Input
              id="custom_title"
              value={post.custom_title || ''}
              onChange={(e) => handleInputChange('custom_title', e.target.value)}
              placeholder={`${post.title} | IT Carolina - Charlotte NC Computer Repair`}
              maxLength={60}
            />
            <p className="text-xs text-gray-500">
              {(post.custom_title || '').length}/60 characters
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom_description">Meta Description</Label>
            <Textarea
              id="custom_description"
              value={post.custom_description || ''}
              onChange={(e) => handleInputChange('custom_description', e.target.value)}
              placeholder={post.excerpt || 'Professional IT support for home and small business in Charlotte, NC'}
              maxLength={160}
              rows={3}
            />
            <p className="text-xs text-gray-500">
              {(post.custom_description || '').length}/160 characters
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom_keywords">Keywords</Label>
            <Input
              id="custom_keywords"
              value={post.custom_keywords || ''}
              onChange={(e) => handleInputChange('custom_keywords', e.target.value)}
              placeholder="computer repair charlotte nc, IT support charlotte, network setup"
            />
            <p className="text-xs text-gray-500">Comma-separated keywords for SEO</p>
          </div>
        </CardContent>
      </Card>

      {/* Open Graph (Facebook) */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Facebook className="w-4 h-4" />
            Facebook & Open Graph
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="og_title">Open Graph Title</Label>
            <Input
              id="og_title"
              value={post.og_title || ''}
              onChange={(e) => handleInputChange('og_title', e.target.value)}
              placeholder={post.custom_title || `${post.title} | IT Carolina`}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="og_description">Open Graph Description</Label>
            <Textarea
              id="og_description"
              value={post.og_description || ''}
              onChange={(e) => handleInputChange('og_description', e.target.value)}
              placeholder={post.custom_description || post.excerpt || ''}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="og_image">Open Graph Image URL</Label>
            <Input
              id="og_image"
              value={post.og_image || ''}
              onChange={(e) => handleInputChange('og_image', e.target.value)}
              placeholder={post.image_url || 'https://itcarolina.us/og.jpg'}
            />
          </div>
        </CardContent>
      </Card>

      {/* Twitter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Twitter className="w-4 h-4" />
            Twitter Card
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="twitter_title">Twitter Title</Label>
            <Input
              id="twitter_title"
              value={post.twitter_title || ''}
              onChange={(e) => handleInputChange('twitter_title', e.target.value)}
              placeholder={post.title}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="twitter_description">Twitter Description</Label>
            <Textarea
              id="twitter_description"
              value={post.twitter_description || ''}
              onChange={(e) => handleInputChange('twitter_description', e.target.value)}
              placeholder={post.custom_description || post.excerpt || ''}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="twitter_image">Twitter Image URL</Label>
            <Input
              id="twitter_image"
              value={post.twitter_image || ''}
              onChange={(e) => handleInputChange('twitter_image', e.target.value)}
              placeholder={post.image_url || 'https://itcarolina.us/og.jpg'}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEOEditor;