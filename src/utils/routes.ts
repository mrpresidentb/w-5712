// Static routes for react-snap crawling
export const getStaticRoutes = async (): Promise<string[]> => {
  const baseRoutes = [
    '/',
    '/about',
    '/privacy-policy',
    '/terms',
    '/faq',
    '/blog',
    '/services/home-office',
    '/services/business',
    '/services/printer',
    '/services/web-hosting',
    '/pricing'
  ];

  try {
    // Fetch blog posts for dynamic routes
    const response = await fetch('https://vmmhvciyxfbwytuzvtug.supabase.co/rest/v1/blog_posts?select=slug&published=eq.true', {
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbWh2Y2l5eGZid3l0dXV6dHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzg2NzAsImV4cCI6MjA2NjkxNDY3MH0._pu1smjtNkE7i_-mSX6NCkwSa_dwAWsNsqkoBsI6R74',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbWh2Y2l5eGZid3l0dXV6dHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzg2NzAsImV4cCI6MjA2NjkxNDY3MH0._pu1smjtNkE7i_-mSX6NCkwSa_dwAWsNsqkoBsI6R74'
      }
    });
    
    if (response.ok) {
      const posts = await response.json();
      const blogRoutes = posts.map((post: { slug: string }) => `/blog/${post.slug}`);
      return [...baseRoutes, ...blogRoutes];
    }
  } catch (error) {
    console.warn('Failed to fetch blog routes for static generation:', error);
  }

  return baseRoutes;
};