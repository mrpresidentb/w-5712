import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import ITHero from '@/components/ITHero';
import ITServices from '@/components/ITServices';
import ITFeatures from '@/components/ITFeatures';
import ITTestimonials from '@/components/ITTestimonials';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="Computer Repair Charlotte NC | IT Support | IT Carolina"
        description="Professional computer repair & IT support in Charlotte NC. Same-day PC repair, virus removal, network setup. Call (704) 520-0809 for free quote."
        canonical="https://itcarolina.us/"
        keywords="computer repair Charlotte NC, IT support Charlotte, PC repair near me, virus removal Charlotte, network setup Charlotte, laptop repair Charlotte"
      />
      <ITHero />
      <ITServices />
      <ITFeatures />
      
      {/* Frequently Asked Questions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-gray-900">How do I find computer repair places near me?</h3>
                <p className="text-gray-600 text-sm">
                  Look for local computer repair shops with good reviews, transparent pricing, and certified technicians. If Carolina serves the entire Charlotte area, we provide on-site computer repair services.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-gray-900">Do you provide Apple computer support?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! Our Apple computer support includes Mac repairs, software troubleshooting, data migration, and hardware upgrades. We're experienced with both Mac and PC systems.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-gray-900">What's included in your computer support services?</h3>
                <p className="text-gray-600 text-sm">
                  Our comprehensive computer support includes virus removal, performance optimization, hardware repairs, software installation, data recovery, and ongoing maintenance for both home and business computers.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-gray-900">How much does computer repair cost in Charlotte?</h3>
                <p className="text-gray-600 text-sm">
                  Our computer repair services start at $99 for diagnostics, with flat-rate pricing for most services. We provide upfront quotes with no hidden fees or surprise charges.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/faq" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View All Frequently Asked Questions
            </Link>
          </div>
        </div>
      </section>
      
      {/* Common Questions Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Got Questions About Computer Repair in Charlotte?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that computer problems can be frustrating. That's why we've compiled answers to the most common questions about computer repair, IT support, and our services in Charlotte, NC.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3 text-blue-900">Common Computer Issues</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Computer running slow or freezing</li>
                <li>• Virus and malware infections</li>
                <li>• Wi-Fi connection problems</li>
                <li>• Blue screen errors</li>
                <li>• Hardware failures</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3 text-blue-900">Service Areas</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Uptown Charlotte</li>
                <li>• South End & NoDa</li>
                <li>• University City</li>
                <li>• Ballantyne & SouthPark</li>
                <li>• Myers Park & Dilworth</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3 text-blue-900">Quick Answers</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Same-day service available</li>
                <li>• Flat-rate pricing, no surprises</li>
                <li>• Free diagnostics and estimates</li>
                <li>• Support for all major brands</li>
                <li>• On-site and remote support</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/faq" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View All Frequently Asked Questions
            </Link>
          </div>
        </div>
      </section>
      
      <ITTestimonials />
    </PageLayout>
  );
};

export default Index;
