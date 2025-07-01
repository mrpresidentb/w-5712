
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import BlogPostCard from '@/components/BlogPostCard';
import BlogSidebar from '@/components/BlogSidebar';
import SEO from '@/components/SEO';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useSupabaseBlog } from '@/hooks/useSupabaseBlog';
import { Loader2 } from 'lucide-react';

const BlogListing = () => {
  const { blogPosts, categories, loading, error } = useSupabaseBlog();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts by category
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog' }
  ];

  // Enhanced blog listing structured data
  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://itcarolina.us/blog',
    name: 'IT Carolina Blog',
    description: 'Expert IT support tips, computer troubleshooting guides, and technology insights for home users and small businesses in Charlotte, North Carolina.',
    url: 'https://itcarolina.us/blog',
    publisher: {
      '@type': 'Organization',
      name: 'IT Carolina',
      logo: {
        '@type': 'ImageObject',
        url: 'https://itcarolina.us/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'
      }
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://itcarolina.us/blog/${post.slug}`,
      datePublished: new Date(post.created_at).toISOString(),
      author: {
        '@type': 'Organization',
        name: post.author
      },
      image: post.image_url ? `https://itcarolina.us${post.image_url}` : undefined
    }))
  };

  const pageTitle = selectedCategory 
    ? `${selectedCategory} Articles | IT Carolina Blog - Charlotte NC`
    : 'IT Support Blog - Charlotte NC | Computer Repair Tips & Guides';
    
  const pageDescription = selectedCategory
    ? `Expert ${selectedCategory.toLowerCase()} tips and guides for Charlotte area home users and small businesses. Professional IT support advice from IT Carolina.`
    : 'Expert IT support tips, computer troubleshooting guides, and technology insights for home users and small businesses in Charlotte, North Carolina.';

  if (loading) {
    return (
      <PageLayout breadcrumbItems={breadcrumbItems}>
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Loading blog posts...</span>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout breadcrumbItems={breadcrumbItems}>
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Error Loading Blog Posts</h2>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout breadcrumbItems={breadcrumbItems}>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="IT support blog charlotte nc, computer repair tips, troubleshooting guides, technology insights, home office setup, cybersecurity tips, printer support"
        canonical="https://itcarolina.us/blog"
      />
      
      {/* Blog structured data */}
      <script type="application/ld+json">
        {JSON.stringify(blogStructuredData)}
      </script>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              IT Support Blog
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Expert tips, troubleshooting guides, and technology insights for Charlotte's home users and small businesses
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={selectedCategory ? "outline" : "default"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(null)}
            >
              All Posts ({blogPosts.length})
            </Badge>
            {categories.map((category) => {
              const count = blogPosts.filter(post => post.category === category.name).length;
              return (
                <Badge 
                  key={category.id}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name} ({count})
                </Badge>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                <p className="text-gray-600">
                  {selectedCategory 
                    ? `No posts found in the ${selectedCategory} category.`
                    : 'No blog posts are available at the moment.'
                  }
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <BlogPostCard post={post} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar 
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogListing;
