import PageLayout from '@/components/PageLayout';
import ITHero from '@/components/ITHero';
import ITServices from '@/components/ITServices';
import ITFeatures from '@/components/ITFeatures';
import ITTestimonials from '@/components/ITTestimonials';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

// External reputable resource for IT help (example: Microsoft 365)
const EXTERNAL_IT_RESOURCE = "https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products";

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="IT Carolina | Expert IT Support, Home & Small Business, Web Design, Charlotte NC"
        description="IT Carolina offers expert IT support, computer repair, home office tech help, small business networking, web design, and Microsoft 365/Google Workspace setup in Charlotte NC."
        imageUrl="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
      />
      {/* SEO headline & intro are now inside the hero below for tight layout */}
      <ITHero />
      <ITServices />
      <ITFeatures />
      <ITTestimonials />
    </PageLayout>
  );
};

export default Index;
