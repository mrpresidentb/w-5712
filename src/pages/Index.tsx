
import PageLayout from '@/components/PageLayout';
import ITHero from '@/components/ITHero';
import ITServices from '@/components/ITServices';
import ITFeatures from '@/components/ITFeatures';
import ITTestimonials from '@/components/ITTestimonials';
import WhoWeHelp from '@/components/WhoWeHelp';
import PricingPreview from '@/components/PricingPreview';
import SEO from '@/components/SEO';
import SectionDivider from '@/components/SectionDivider';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="IT Carolina - Fast, Friendly IT Help for Home Users & Small Businesses" 
        description="From 'my computer's slow' to 'I need a simple one-page website' — we provide jargon-free IT support in Charlotte, NC for both home users and small businesses."
        imageUrl="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
      />
      <div className="space-y-12 md:space-y-0">
        {/* Hero Section */}
        <ITHero />
        
        {/* Divider */}
        <SectionDivider color="text-slate-50" />
        
        {/* Who We Help Section */}
        <WhoWeHelp />
        
        {/* Divider */}
        <SectionDivider color="text-white" />
        
        {/* IT Services Section */}
        <ITServices />
        
        {/* Divider */}
        <SectionDivider color="text-blue-900" />
        
        {/* IT Features Section */}
        <ITFeatures />
        
        {/* Divider */}
        <SectionDivider color="text-gray-50" />
        
        {/* Pricing Preview Section */}
        <PricingPreview />
        
        {/* Divider */}
        <SectionDivider color="text-white" />
        
        {/* Testimonials Section */}
        <ITTestimonials />
      </div>
    </PageLayout>
  );
};

export default Index;
