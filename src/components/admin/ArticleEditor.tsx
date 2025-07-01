
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BlogPost, ContentSection } from '@/types/supabase-blog';
import UnifiedTextEditor from './UnifiedTextEditor';
import ImageUploader from './ImageUploader';
import SEOEditor from './SEOEditor';
import SEOPreview from './SEOPreview';
import { Calendar, Save, Eye, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface ArticleEditorProps {
  article?: BlogPost | null;
  onSave: (articleData: Partial<BlogPost>) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

const categories = [
  'Troubleshooting',
  'Computer Repair',
  'Home Office',
  'Printer Support',
  'Cybersecurity',
  'Web Development',
  'Business Support'
];

const ArticleEditor: React.FC<ArticleEditorProps> = ({
  article,
  onSave,
  onCancel,
  isLoading = false
}) => {
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    excerpt: '',
    content: [] as ContentSection[],
    category: '',
    author: 'IT Carolina Team',
    image_url: '',
    published: true,
    date: new Date().toISOString().split('T')[0],
    custom_title: '',
    custom_description: '',
    custom_keywords: '',
    og_title: '',
    og_description: '',
    og_image: '',
    twitter_title: '',
    twitter_description: '',
    twitter_image: ''
  });

  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title || '',
        slug: article.slug || '',
        excerpt: article.excerpt || '',
        content: article.content || [],
        category: article.category || '',
        author: article.author || 'IT Carolina Team',
        image_url: article.image_url || '',
        published: article.published ?? true,
        date: article.date ? new Date(article.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        custom_title: article.custom_title || '',
        custom_description: article.custom_description || '',
        custom_keywords: article.custom_keywords || '',
        og_title: article.og_title || '',
        og_description: article.og_description || '',
        og_image: article.og_image || '',
        twitter_title: article.twitter_title || '',
        twitter_description: article.twitter_description || '',
        twitter_image: article.twitter_image || ''
      });
    } else {
      // Auto-generate SEO data for new articles when title changes
      if (formData.title && !article) {
        const defaultTitle = `${formData.title} | IT Carolina - Charlotte NC Computer Repair`;
        const defaultDescription = formData.excerpt || 'Professional IT support for home and small business in Charlotte, NC';
        const defaultImage = formData.image_url || 'https://itcarolina.us/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png';
        
        setFormData(prev => ({
          ...prev,
          custom_title: prev.custom_title || defaultTitle,
          custom_description: prev.custom_description || defaultDescription,
          custom_keywords: prev.custom_keywords || `computer repair charlotte nc, IT support charlotte, ${prev.category?.toLowerCase() || 'IT services'}, charlotte computer help`,
          og_title: prev.og_title || defaultTitle,
          og_description: prev.og_description || defaultDescription,
          og_image: prev.og_image || defaultImage,
          twitter_title: prev.twitter_title || formData.title,
          twitter_description: prev.twitter_description || defaultDescription,
          twitter_image: prev.twitter_image || defaultImage
        }));
      }
    }
  }, [article, formData.title, formData.excerpt, formData.category, formData.image_url]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      
      // Auto-generate slug when title changes
      if (field === 'title' && !article) {
        newData.slug = generateSlug(value);
      }
      
      return newData;
    });
    setIsDirty(true);
  };

  const handleSEOUpdate = (updates: Partial<BlogPost>) => {
    setFormData(prev => ({ ...prev, ...updates }));
    setIsDirty(true);
  };

  const handleContentChange = (content: ContentSection[]) => {
    setFormData(prev => ({ ...prev, content }));
    setIsDirty(true);
  };

  const handleImageUploaded = (imagePath: string) => {
    setFormData(prev => ({ ...prev, image_url: imagePath }));
    setIsDirty(true);
    toast.success('Featured image updated!');
  };

  const handleRemoveImage = () => {
    setFormData(prev => ({ ...prev, image_url: '' }));
    setIsDirty(true);
  };

  const handleSave = async () => {
    if (!formData.title.trim()) {
      toast.error('Title is required');
      return;
    }
    
    if (!formData.slug.trim()) {
      toast.error('Slug is required');
      return;
    }
    
    if (!formData.category) {
      toast.error('Category is required');
      return;
    }
    
    if (formData.content.length === 0) {
      toast.error('Content is required');
      return;
    }

    try {
      await onSave(formData);
      setIsDirty(false);
      toast.success(article ? 'Article updated successfully!' : 'Article created successfully!');
    } catch (error) {
      console.error('Error saving article:', error);
      toast.error('Failed to save article');
    }
  };

  const handleCancel = () => {
    if (isDirty) {
      const confirmed = window.confirm('You have unsaved changes. Are you sure you want to cancel?');
      if (!confirmed) return;
    }
    onCancel();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              {article ? 'Edit Article' : 'Create New Article'}
              {isDirty && <Badge variant="secondary">Unsaved changes</Badge>}
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleCancel} disabled={isLoading}>
                <X className="w-4 h-4 mr-1" />
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={isLoading}>
                <Save className="w-4 h-4 mr-1" />
                {isLoading ? 'Saving...' : 'Save Article'}
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter article title"
              />
            </div>
            <div>
              <Label htmlFor="slug">URL Slug *</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                placeholder="url-friendly-slug"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => handleInputChange('excerpt', e.target.value)}
              placeholder="Brief description of the article..."
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="category">Category *</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={formData.author}
                onChange={(e) => handleInputChange('author', e.target.value)}
                placeholder="Author name"
              />
            </div>
            <div>
              <Label htmlFor="date">Publication Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Featured Image */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Image</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageUploader
            onImageUploaded={handleImageUploaded}
            currentImage={formData.image_url}
            onRemoveImage={handleRemoveImage}
          />
        </CardContent>
      </Card>

      {/* Unified Content Editor */}
      <UnifiedTextEditor
        content={formData.content}
        onChange={handleContentChange}
        placeholder="Start writing your article content..."
      />

      {/* SEO & Preview Tabs */}
      <Tabs defaultValue="seo" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="seo">SEO Settings</TabsTrigger>
          <TabsTrigger value="preview">SEO Preview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="seo" className="mt-6">
          <SEOEditor 
            post={formData as BlogPost} 
            onUpdate={handleSEOUpdate}
          />
        </TabsContent>
        
        <TabsContent value="preview" className="mt-6">
          <SEOPreview post={formData as BlogPost} />
        </TabsContent>
      </Tabs>

      {/* Publishing Options */}
      <Card>
        <CardHeader>
          <CardTitle>Publishing Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) => handleInputChange('published', checked)}
            />
            <Label htmlFor="published">Publish immediately</Label>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {formData.published ? 'This article will be visible to the public' : 'This article will be saved as a draft'}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleEditor;
