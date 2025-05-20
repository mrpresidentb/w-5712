
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
      {/* Main H1 for SEO */}
      <header className="max-w-3xl mx-auto px-4 pt-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          IT Support &amp; Web Services for Charlotte Homeowners &amp; Small Businesses
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Fast, friendly tech help for your home or business. We solve computer slowdowns, Wi-Fi woes, backups, web projects, email &amp; more—trusted locally in Charlotte, NC and beyond.
        </p>
        <nav className="flex flex-col md:flex-row items-center justify-center gap-4 my-6">
          {/* Internal Links */}
          <Link to="/services/home-office" className="text-blue-600 hover:underline text-base font-medium">
            Home IT Services
          </Link>
          <span className="hidden md:inline text-gray-400">|</span>
          <Link to="/services/business" className="text-blue-600 hover:underline text-base font-medium">
            Business Solutions
          </Link>
          <span className="hidden md:inline text-gray-400">|</span>
          <Link to="/pricing" className="text-blue-600 hover:underline text-base font-medium">
            Pricing
          </Link>
          <span className="hidden md:inline text-gray-400">|</span>
          <Link to="/about" className="text-blue-600 hover:underline text-base font-medium">
            About Us
          </Link>
          <span className="hidden md:inline text-gray-400">|</span>
          {/* External Link */}
          <a
            href={EXTERNAL_IT_RESOURCE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-medium hover:underline flex items-center"
          >
            Compare Microsoft 365 plans
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-8 8m8 0V7H7"/></svg>
          </a>
        </nav>
      </header>
      <ITHero />
      <ITServices />
      <ITFeatures />
      <ITTestimonials />
    </PageLayout>
  );
};

export default Index;
