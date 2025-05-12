
import PageLayout from '@/components/PageLayout';
import ITHero from '@/components/ITHero';
import ITServices from '@/components/ITServices';
import ITFeatures from '@/components/ITFeatures';
import ITTestimonials from '@/components/ITTestimonials';
import WhoWeHelp from '@/components/WhoWeHelp';
import PricingPreview from '@/components/PricingPreview';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="IT Carolina - Fast, Friendly IT Help for Home Users & Small Businesses" 
        description="From 'my computer's slow' to 'I need a simple one-page website' — we provide jargon-free IT support in Charlotte, NC for both home users and small businesses."
        imageUrl="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
      />
      <div className="space-y-12 md:space-y-0">
        <ITHero />
        <WhoWeHelp />
        <ITServices />
        <ITFeatures />
        <PricingPreview />
        <ITTestimonials />
      </div>
    </PageLayout>
  );
};

export default Index;
