import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BlogPost } from '@/types/supabase-blog';
import { 
  Search, 
  Facebook, 
  Twitter, 
  Code, 
  Globe, 
  Clock, 
  User,
  Tag,
  Calendar,
  ExternalLink,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SEOPreviewProps {
  post: BlogPost;
}

const SEOPreview: React.FC<SEOPreviewProps> = ({ post }) => {
  const [liveMetaData, setLiveMetaData] = useState<any>(null);
  const [isLoadingLive, setIsLoadingLive] = useState(false);
  const [liveDataError, setLiveDataError] = useState<string | null>(null);

  // Use custom meta data if available, otherwise fall back to defaults
  const seoTitle = post.custom_title || `${post.title} | IT Carolina - Charlotte NC Computer Repair`;
  const description = post.custom_description || post.excerpt || 'Professional IT support for home and small business in Charlotte, NC';
  const ogTitle = post.og_title || seoTitle;
  const ogDescription = post.og_description || description;
  const ogImage = post.og_image || post.image_url;
  const twitterTitle = post.twitter_title || post.title;
  const twitterDescription = post.twitter_description || description;
  const twitterImage = post.twitter_image || post.image_url;
  
  const absoluteImageUrl = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `https://itcarolina.us${ogImage}`)
    : 'https://itcarolina.us/og.jpg';
  
  const postUrl = `https://itcarolina.us/blog/${post.slug}`;

  // Fetch live meta data from the actual page
  const fetchLiveMetaData = async () => {
    if (!post.published) {
      setLiveDataError('Page is not published yet');
      return;
    }

    setIsLoadingLive(true);
    setLiveDataError(null);
    
    try {
      // Use a CORS proxy or disable for now due to CORS restrictions
      setLiveDataError('Live data fetching is disabled due to CORS restrictions when accessing from preview domain');
      
      // Mock data for demonstration - in production, this would work from the actual domain
      const mockLiveData = {
        title: seoTitle,
        description: description,
        canonical: postUrl,
        ogType: 'article',
        ogTitle: ogTitle,
        ogDescription: ogDescription,
        ogImage: absoluteImageUrl,
        ogUrl: postUrl,
        twitterCard: 'summary_large_image',
        twitterTitle: twitterTitle,
        twitterImage: twitterImage,
        lastFetched: new Date().toISOString()
      };
      
      // Simulate a delay
      setTimeout(() => {
        setLiveMetaData(mockLiveData);
        setLiveDataError('Note: This is simulated data. Live fetching is only available from the actual domain due to CORS restrictions.');
      }, 1000);
      
    } catch (error) {
      console.error('Error fetching live meta data:', error);
      setLiveDataError(error instanceof Error ? error.message : 'Failed to fetch live data');
    } finally {
      setTimeout(() => setIsLoadingLive(false), 1000);
    }
  };

  // Calculate reading time
  const wordCount = post.content.reduce((count, section) => {
    if (section.content) {
      return count + section.content.split(/\s+/).length;
    } else if (section.items) {
      return count + section.items.join(' ').split(/\s+/).length;
    }
    return count;
  }, 0);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const GoogleSearchPreview = () => (
    <div className="border rounded-lg p-4 bg-white">
      <div className="space-y-1">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Globe className="w-4 h-4 mr-1" />
          itcarolina.us › blog › {post.slug}
        </div>
        <h3 className="text-xl text-blue-600 hover:underline cursor-pointer font-normal leading-6">
          {seoTitle}
        </h3>
        <div className="text-sm text-gray-600 leading-5 max-w-2xl">
          {description.length > 156 ? `${description.substring(0, 156)}...` : description}
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.created_at).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readingTime} min read
          </div>
        </div>
      </div>
    </div>
  );

  const FacebookPreview = () => (
    <div className="border rounded-lg overflow-hidden bg-white max-w-lg">
      <img 
        src={absoluteImageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-3 space-y-1">
        <div className="text-xs text-gray-500 uppercase">
          ITCAROLINA.US
        </div>
        <h3 className="font-semibold text-gray-900 text-lg leading-5">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm leading-4">
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </p>
      </div>
    </div>
  );

  const TwitterPreview = () => (
    <div className="border rounded-xl overflow-hidden bg-white max-w-lg">
      <img 
        src={absoluteImageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-3 space-y-1">
        <h3 className="font-semibold text-gray-900 text-base leading-5">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm leading-4">
          {description.length > 125 ? `${description.substring(0, 125)}...` : description}
        </p>
        <div className="flex items-center text-xs text-gray-500 mt-2">
          <ExternalLink className="w-3 h-3 mr-1" />
          itcarolina.us
        </div>
      </div>
    </div>
  );

  const MetaTagsPreview = () => {
    const ComparisonRow = ({ label, expected, actual, type = 'text' }: { 
      label: string; 
      expected: string; 
      actual?: string | null; 
      type?: 'text' | 'url' 
    }) => {
      const isMatch = actual === expected;
      const hasActual = actual !== null && actual !== undefined;
      
      return (
        <div className="border rounded-lg p-3 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">{label}</h4>
            {liveMetaData && (
              <div className="flex items-center gap-1">
                {hasActual ? (
                  isMatch ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                  )
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-500" />
                )}
                <span className="text-xs text-gray-500">
                  {hasActual ? (isMatch ? 'Match' : 'Different') : 'Missing'}
                </span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <div>
              <div className="text-xs font-medium text-gray-600">Expected:</div>
              <div className="text-xs font-mono bg-gray-50 p-2 rounded break-all max-h-20 overflow-y-auto">
                {expected}
              </div>
            </div>
            
            {liveMetaData && (
              <div>
                <div className="text-xs font-medium text-gray-600">Live Data:</div>
                <div className={`text-xs font-mono p-2 rounded break-all max-h-20 overflow-y-auto ${
                  hasActual 
                    ? (isMatch ? 'bg-green-50 text-green-800' : 'bg-orange-50 text-orange-800')
                    : 'bg-red-50 text-red-800'
                }`}>
                  {hasActual ? actual : 'Not found in live page'}
                </div>
              </div>
            )}
          </div>
        </div>
      );
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Meta Tags Comparison</h3>
          <div className="flex items-center gap-2">
            {post.published ? (
              <Button
                onClick={fetchLiveMetaData}
                disabled={isLoadingLive}
                size="sm"
                variant="outline"
                className="flex items-center gap-2"
              >
                {isLoadingLive ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4" />
                )}
                {liveMetaData ? 'Refresh Live Data' : 'Fetch Live Data'}
              </Button>
            ) : (
              <Badge variant="secondary">Page not published</Badge>
            )}
          </div>
        </div>

        {liveDataError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="w-4 h-4" />
              <span className="font-medium">Error fetching live data:</span>
            </div>
            <p className="text-red-600 text-sm mt-1">{liveDataError}</p>
          </div>
        )}

        {liveMetaData && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-blue-700">
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium">Live data fetched:</span>
            </div>
            <p className="text-blue-600 text-sm mt-1">
              Last updated: {new Date(liveMetaData.lastFetched).toLocaleString()}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4">
          <ComparisonRow 
            label="Page Title" 
            expected={seoTitle} 
            actual={liveMetaData?.title} 
          />
          <ComparisonRow 
            label="Meta Description" 
            expected={description} 
            actual={liveMetaData?.description} 
          />
          <ComparisonRow 
            label="Canonical URL" 
            expected={postUrl} 
            actual={liveMetaData?.canonical} 
            type="url"
          />
          <ComparisonRow 
            label="Open Graph Title" 
            expected={seoTitle} 
            actual={liveMetaData?.ogTitle} 
          />
          <ComparisonRow 
            label="Open Graph Image" 
            expected={absoluteImageUrl} 
            actual={liveMetaData?.ogImage} 
            type="url"
          />
          <ComparisonRow 
            label="Twitter Card Type" 
            expected="summary_large_image" 
            actual={liveMetaData?.twitterCard} 
          />
        </div>

        {!liveMetaData && post.published && (
          <div className="text-center py-8 text-gray-500">
            <Globe className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Click "Fetch Live Data" to compare with actual page meta tags</p>
            <p className="text-sm mt-1">This will help you identify any differences between expected and live data</p>
          </div>
        )}
      </div>
    );
  };

  const PostAnalysis = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-blue-600" />
              <div>
                <div className="text-sm font-medium">Title Length</div>
                <div className="text-xs text-gray-600">
                  {seoTitle.length} chars {seoTitle.length > 60 ? '⚠️ Too long' : '✅ Good'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-green-600" />
              <div>
                <div className="text-sm font-medium">Description</div>
                <div className="text-xs text-gray-600">
                  {description.length} chars {description.length > 160 ? '⚠️ Too long' : '✅ Good'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-600" />
              <div>
                <div className="text-sm font-medium">Featured Image</div>
                <div className="text-xs text-gray-600">
                  {post.image_url ? '✅ Present' : '❌ Missing'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-600" />
              <div>
                <div className="text-sm font-medium">Reading Time</div>
                <div className="text-xs text-gray-600">
                  {readingTime} minutes ({wordCount} words)
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">SEO Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            {seoTitle.length > 60 && (
              <div className="flex items-start gap-2 text-sm">
                <Badge variant="destructive" className="mt-0.5">Warning</Badge>
                <span>Title is {seoTitle.length} characters. Consider shortening to under 60 characters for better search display.</span>
              </div>
            )}
            {description.length > 160 && (
              <div className="flex items-start gap-2 text-sm">
                <Badge variant="destructive" className="mt-0.5">Warning</Badge>
                <span>Description is {description.length} characters. Consider shortening to under 160 characters for better search snippets.</span>
              </div>
            )}
            {!post.image_url && (
              <div className="flex items-start gap-2 text-sm">
                <Badge variant="destructive" className="mt-0.5">Missing</Badge>
                <span>No featured image. Add an image for better social media sharing and visual appeal.</span>
              </div>
            )}
            {wordCount < 300 && (
              <div className="flex items-start gap-2 text-sm">
                <Badge variant="secondary" className="mt-0.5">Suggestion</Badge>
                <span>Article is {wordCount} words. Consider expanding to 300+ words for better SEO.</span>
              </div>
            )}
            {seoTitle.length <= 60 && description.length <= 160 && post.image_url && wordCount >= 300 && (
              <div className="flex items-start gap-2 text-sm">
                <Badge variant="default" className="mt-0.5 bg-green-500">Excellent</Badge>
                <span>This article is well-optimized for SEO and social sharing!</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">SEO Preview</h3>
          <p className="text-sm text-gray-600">See how this article will appear on search engines and social media</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1">
          <Globe className="w-3 h-3" />
          {post.published ? 'Live' : 'Draft'}
        </Badge>
      </div>

      <Tabs defaultValue="previews" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="previews" className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            Social Previews
          </TabsTrigger>
          <TabsTrigger value="meta" className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            Meta Tags
          </TabsTrigger>
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            SEO Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="previews" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Search className="w-4 h-4" />
                <h4 className="font-medium">Google Search Result</h4>
              </div>
              <GoogleSearchPreview />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Facebook className="w-4 h-4" />
                <h4 className="font-medium">Facebook Link Preview</h4>
              </div>
              <FacebookPreview />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <div className="flex items-center gap-2 mb-3">
                <Twitter className="w-4 h-4" />
                <h4 className="font-medium">Twitter Card Preview</h4>
              </div>
              <TwitterPreview />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="meta" className="space-y-4">
          <MetaTagsPreview />
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <PostAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEOPreview;