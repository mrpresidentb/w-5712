
import { Check, Shield, Clock, Wrench } from "lucide-react";

const ITFeatures = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-sm font-medium">
            Why Choose Us
          </div>
          <h2 className="text-3xl font-bold mb-4">The IT Carolina Advantage</h2>
          <p className="text-blue-200 max-w-3xl mx-auto">
            We provide world-class IT services with a local touch. Here's what makes our support stand out from the rest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            <div className="bg-blue-800/50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-lg p-3 mr-4">
                  <Shield className="h-6 w-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
                  <p className="text-blue-200">
                    We implement the same high-level security measures used by large enterprises, making them accessible and affordable for businesses of all sizes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-800/50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-lg p-3 mr-4">
                  <Clock className="h-6 w-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Responsive Support</h3>
                  <p className="text-blue-200">
                    Our dedicated support team is available around the clock to address issues promptly, ensuring minimal downtime for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            <div className="bg-blue-800/50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-lg p-3 mr-4">
                  <Wrench className="h-6 w-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proactive Maintenance</h3>
                  <p className="text-blue-200">
                    We don't just fix problems – we prevent them. Our proactive approach identifies and addresses potential issues before they impact your business.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-800/50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-lg p-3 mr-4">
                  <Check className="h-6 w-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
                  <p className="text-blue-200">
                    We understand that every business is unique. Our IT solutions are tailored specifically to meet your needs and align with your business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-blue-200 mb-6">Join hundreds of businesses across Carolina that trust us with their IT needs</p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-blue-100 transition-all duration-300"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ITFeatures;
