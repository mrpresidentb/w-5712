
import PageLayout from '@/components/PageLayout';
import ITHero from '@/components/ITHero';
import ITServices from '@/components/ITServices';
import ITFeatures from '@/components/ITFeatures';
import ITTestimonials from '@/components/ITTestimonials';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="IT Carolina - Professional IT Support Services" 
        description="IT Carolina provides professional IT support services, network security, cloud solutions, and managed IT services for businesses across South Carolina."
        imageUrl="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
      />
      <ITHero />
      <ITServices />
      <ITFeatures />
      <ITTestimonials />
    </PageLayout>
  );
};

export default Index;
