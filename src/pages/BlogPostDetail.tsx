
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import BlogSidebar from '@/components/BlogSidebar';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { useSupabaseBlog } from '@/hooks/useSupabaseBlog';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, MessageSquare, Share, Tag, ArrowLeft, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BlogPost } from '@/types/supabase-blog';

// Helper function to render content with links
const renderContentWithLinks = (content: string) => {
  if (!content) return null;
  
  // Regular expression to find link tags in the content
  const linkRegex = /<Link to="([^"]+)">([^<]+)<\/Link>/g;
  // Regular expression to find URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  const parts = [];
  let lastIndex = 0;
  let processedContent = content;
  let match;
  
  // First, find all link tags and split the content
  while ((match = linkRegex.exec(processedContent)) !== null) {
    // Add the text before the link
    if (match.index > lastIndex) {
      parts.push(processedContent.substring(lastIndex, match.index));
    }
    
    // Add the link component
    parts.push(
      <Link key={match.index} to={match[1]} className="text-purple-600 hover:text-purple-800 underline">
        {match[2]}
      </Link>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add the remaining text after the last link
  if (lastIndex < processedContent.length) {
    const remainingText = processedContent.substring(lastIndex);
    
    // Then find and convert URLs in the remaining text
    let urlLastIndex = 0;
    let urlParts = [];
    let urlMatch;
    
    while ((urlMatch = urlRegex.exec(remainingText)) !== null) {
      // Add the text before the URL
      if (urlMatch.index > urlLastIndex) {
        urlParts.push(remainingText.substring(urlLastIndex, urlMatch.index));
      }
      
      // Add the URL as an external link
      urlParts.push(
        <a 
          key={`url-${urlMatch.index}`}
          href={urlMatch[0]} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800 underline"
        >
          {urlMatch[0]}
        </a>
      );
      
      urlLastIndex = urlMatch.index + urlMatch[0].length;
    }
    
    // Add any remaining text
    if (urlLastIndex < remainingText.length) {
      urlParts.push(remainingText.substring(urlLastIndex));
    }
    
    // Add all URL parts to main parts array
    parts.push(...urlParts);
  }
  
  return parts.length > 0 ? parts : content;
};

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getBlogPostBySlug } = useSupabaseBlog();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchPost = async () => {
      if (!slug) {
        setError('No slug provided');
        setLoading(false);
        return;
      }
      
      try {
        console.log('Fetching blog post with slug:', slug);
        setLoading(true);
        setError(null);
        
        const fetchedPost = await getBlogPostBySlug(slug);
        console.log('Fetched post:', fetchedPost);
        
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, getBlogPostBySlug]);

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Loading blog post...</span>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (error || !post) {
    return (
      <PageLayout>
        <SEO 
          title="Post Not Found - IT Carolina" 
          description="The requested blog post could not be found."
        />
        <div className="container mx-auto px-4 py-16 min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <p className="mb-2">We couldn't find the post you're looking for.</p>
          <p className="text-sm text-gray-600 mb-4">Error: {error}</p>
          <Link to="/blog" className="mt-4">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  // Calculate reading time (average 200 words per minute)
  const wordCount = post.content.reduce((count, section) => {
    if (section.content) {
      return count + section.content.split(/\s+/).length;
    } else if (section.items) {
      return count + section.items.join(' ').split(/\s+/).length;
    }
    return count;
  }, 0);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title }
  ];

  // Enhanced Article structured data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || '',
    image: post.image_url ? {
      '@type': 'ImageObject',
      url: post.image_url,
      width: 1200,
      height: 630
    } : undefined,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://itcarolina.us'
    },
    publisher: {
      '@type': 'Organization',
      name: 'IT Carolina',
      logo: {
        '@type': 'ImageObject',
        url: 'https://itcarolina.us/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png',
        width: 512,
        height: 512
      }
    },
    datePublished: new Date(post.created_at).toISOString(),
    dateModified: new Date(post.updated_at).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://itcarolina.us/blog/${post.slug}`
    },
    articleSection: post.category,
    wordCount: wordCount,
    timeRequired: `PT${readingTime}M`,
    keywords: [
      'computer repair charlotte nc',
      'IT support charlotte',
      post.category.toLowerCase(),
      'charlotte computer help',
      'IT services north carolina'
    ].join(', ')
  };

  // Enhanced SEO keywords based on post category
  const getCategoryKeywords = (category: string) => {
    const baseKeywords = 'computer repair charlotte nc, IT support charlotte nc, computer help charlotte';
    const categoryKeywords = {
      'Troubleshooting': 'computer troubleshooting, PC problems, computer issues, slow computer fix',
      'Computer Repair': 'computer repair service, PC repair charlotte, laptop repair, computer fix',
      'Home Office': 'home office setup, remote work IT, home network setup, work from home technology',
      'Printer Support': 'printer repair charlotte, printer troubleshooting, printer setup, printer problems',
      'Cybersecurity': 'small business cybersecurity, data protection, network security, cyber threats'
    };
    return `${baseKeywords}, ${categoryKeywords[category] || ''}`;
  };

  return (
    <PageLayout breadcrumbItems={breadcrumbItems}>
      <SEO 
        title={`${post.title} | IT Carolina - Charlotte NC Computer Repair`} 
        description={post.excerpt || ''} 
        imageUrl={post.image_url || undefined}
        type="article"
        keywords={getCategoryKeywords(post.category)}
        canonical={`https://itcarolina.us/blog/${post.slug}`}
      />
      
      {/* Article structured data */}
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
      
      <div 
        className="w-full pt-32 pb-16 bg-gradient-to-b from-black to-gray-900 text-white relative" 
        style={{
          backgroundImage: post.image_url ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${post.image_url}')` : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 flex items-center gap-1.5">
                <Tag size={14} />
                {post.category}
              </Badge>
              <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </Badge>
              <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                <Clock size={14} />
                {readingTime} min read
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center text-gray-300">
              <BookOpen size={18} className="mr-2" />
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="prose prose-lg max-w-none">
              {post.content.map((section, index) => (
                <motion.div key={index} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.4,
                  delay: 0.1 * index
                }} className={cn("mb-8", section.type === 'quote' && "my-10")}>
                  {section.type === 'paragraph' && <p className="text-gray-700 mb-4 leading-relaxed">
                    {renderContentWithLinks(section.content || '')}
                  </p>}
                  {section.type === 'heading' && <div className="flex items-center gap-3 mt-12 mb-6">
                      <div className="w-1.5 h-7 bg-purple-500 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-gray-900">{section.content}</h2>
                    </div>}
                  {section.type === 'subheading' && <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      {section.content}
                    </h3>}
                  {section.type === 'list' && <ul className="list-disc pl-5 my-4 space-y-2">
                      {section.items?.map((item, itemIndex) => <li key={itemIndex} className="text-gray-700">{item}</li>)}
                    </ul>}
                  {section.type === 'quote' && <blockquote className="border-l-4 border-purple-500 pl-5 py-2 my-8 bg-purple-50 rounded-r-lg italic text-gray-700">
                      <div className="flex">
                        <MessageSquare size={20} className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-lg m-0">{section.content}</p>
                      </div>
                    </blockquote>}
                </motion.div>
              ))}
            </motion.div>
            
            <Separator className="my-8" />
            
            <div className="flex flex-col sm:flex-row items-center justify-between py-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <div>
                <p className="text-sm text-gray-600 font-medium">Category: {post.category}</p>
              </div>
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <span className="text-sm text-gray-600">Share this article:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    navigator.share?.({
                      title: post.title,
                      text: post.excerpt || '',
                      url: window.location.href
                    }) || navigator.clipboard.writeText(window.location.href);
                  }}
                >
                  <Share className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar currentSlug={slug} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPostDetail;
