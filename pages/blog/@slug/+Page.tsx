import React from 'react';
import BlogPostDetail from '../../../src/pages/BlogPostDetail';

export { Page }

function Page({ post, notFound }: { post: any; notFound: boolean }) {
  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Blog post not found</p>
          <a href="/blog" className="text-blue-500 hover:text-blue-700 underline">
            Return to Blog
          </a>
        </div>
      </div>
    );
  }

  return <BlogPostDetail />;
}