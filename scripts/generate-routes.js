const fs = require('fs');
const path = require('path');

async function generateRoutes() {
  try {
    // Fetch blog posts from Supabase
    const fetch = (await import('node-fetch')).default;
    const response = await fetch('https://vmmhvciyxfbwytuzvtug.supabase.co/rest/v1/blog_posts?select=slug&published=eq.true', {
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbWh2Y2l5eGZid3l0dXV6dHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzg2NzAsImV4cCI6MjA2NjkxNDY3MH0._pu1smjtNkE7i_-mSX6NCkwSa_dwAWsNsqkoBsI6R74',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbWh2Y2l5eGZid3l0dXV6dHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzg2NzAsImV4cCI6MjA2NjkxNDY3MH0._pu1smjtNkE7i_-mSX6NCkwSa_dwAWsNsqkoBsI6R74'
      }
    });

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

    let allRoutes = [...baseRoutes];

    if (response.ok) {
      const posts = await response.json();
      const blogRoutes = posts.map(post => `/blog/${post.slug}`);
      allRoutes = [...allRoutes, ...blogRoutes];
    }

    // Write routes to a file that react-snap can read
    const routesContent = allRoutes.join('\n');
    fs.writeFileSync(path.join(process.cwd(), 'routes.txt'), routesContent);
    
    console.log(`Generated ${allRoutes.length} routes for static generation`);
  } catch (error) {
    console.error('Error generating routes:', error);
    process.exit(1);
  }
}

generateRoutes();