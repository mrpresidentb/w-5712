
import PageLayout from '../components/PageLayout';
import { ArrowRight, Check, Globe, Server, Shield, Settings } from "lucide-react";
import SEO from '../components/SEO';

const WebHosting = () => {
  return (
    <PageLayout>
      <SEO 
        title="Web Design & Hosting | Website Development Charlotte NC | IT Carolina"
        description="Professional website design, hosting, domain registration, and email setup for small businesses in Charlotte NC. Affordable web solutions with ongoing support."
        canonical="https://itcarolina.us/services/web-hosting"
      />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Web & Hosting Solutions</h1>
            <p className="text-xl text-blue-100 mb-8">
              Beyond simple sites, we support WordPress, basic e-commerce, and light custom work—ideal for LLCs wanting a bigger footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
              >
                Request a Web Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/pricing';
                }}
                className="px-6 py-3 bg-blue-700 text-white border border-blue-600 rounded-md hover:bg-blue-600 transition-all duration-300"
              >
                View Web Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Web Solutions for Small Businesses</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From simple one-page websites to custom WordPress solutions, we provide the web presence your business needs to succeed online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">One-Page Website</h3>
              <p className="text-gray-600 mb-4">
                Perfect for new businesses needing a simple online presence. Includes responsive design, contact form, and basic SEO setup.
              </p>
              <p className="font-bold text-blue-800 mb-4">Starting at $499</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Responsive mobile-friendly design</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Contact form with email notifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Google Maps integration</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Page Website</h3>
              <p className="text-gray-600 mb-4">
                For businesses needing more content sections. Includes 5-7 pages, content management system, and expanded features.
              </p>
              <p className="font-bold text-blue-800 mb-4">Starting at $999</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">5-7 custom designed pages</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">WordPress content management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Blog or news section</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce Solutions</h3>
              <p className="text-gray-600 mb-4">
                Sell products or services online with a custom e-commerce solution. Includes product catalog, payment processing, and order management.
              </p>
              <p className="font-bold text-blue-800 mb-4">Starting at $1,499</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">WooCommerce or Shopify setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Product setup (up to 25 items)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Hosting Services</h3>
              <p className="text-gray-600 mb-4">
                Reliable, secure hosting for your website with 99.9% uptime guarantee, daily backups, and technical support.
              </p>
              <p className="font-bold text-blue-800 mb-4">Starting at $15/month</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Fast SSD hosting with CDN</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Daily automated backups</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">SSL certificate included</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Domain & Email Services</h3>
              <p className="text-gray-600 mb-4">
                Professional domain registration and business email setup with your custom domain name (@yourcompany.com).
              </p>
              <p className="font-bold text-blue-800 mb-4">Domain: $15/yr, Email: $10/user/mo</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Domain name registration & renewal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Google Workspace or Microsoft 365 setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Email migration & training</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Keep your website secure, updated, and performing at its best with our monthly maintenance plans.
              </p>
              <p className="font-bold text-blue-800 mb-4">Starting at $49/month</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">WordPress & plugin updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Security monitoring & scanning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Monthly performance reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Web Design Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We make creating your business website simple, straightforward, and stress-free with our proven process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Consultation & Planning</h3>
              <p className="text-gray-600">
                We discuss your business needs, target audience, and goals to plan the perfect website structure and content.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Design & Development</h3>
              <p className="text-gray-600">
                Our team creates a custom design that matches your brand and builds a responsive, user-friendly website.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Launch & Support</h3>
              <p className="text-gray-600">
                We handle the technical details of launching your site, then provide ongoing support and maintenance.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Start Your Web Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WebHosting;
