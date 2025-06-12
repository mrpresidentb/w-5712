
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
        title="IT Carolina | Expert IT Support, Computer Repair, Web Design Charlotte NC"
        description="Professional IT support for home and small business in Charlotte, NC. Computer repair, virus removal, network setup, web design, printer support, and data recovery services. Flat-rate pricing."
        keywords="IT support Charlotte NC, computer repair Charlotte, virus removal, network setup, web design Charlotte, printer support, data recovery, home office IT, small business IT, Microsoft 365 setup, Google Workspace"
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
