
import PageLayout from '@/components/PageLayout';
import { ArrowRight, Check, Building, Server, Shield, Database, Headphones } from "lucide-react";
import SEO from '@/components/SEO';

const BusinessSupport = () => {
  return (
    <PageLayout>
      <SEO 
        title="Small Business IT Support - IT Carolina" 
        description="IT solutions for small businesses and LLC. Network setup, security, website hosting, and managed IT services in Charlotte, NC."
      />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">IT Support for Small Businesses & LLCs</h1>
            <p className="text-xl text-blue-100 mb-8">
              Affordable, reliable IT solutions tailored for Charlotte's small businesses and startups.
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
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/pricing';
                }}
                className="px-6 py-3 bg-blue-700 text-white border border-blue-600 rounded-md hover:bg-blue-600 transition-all duration-300"
              >
                View Business Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">IT Services for Your Growing Business</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From setting up your first office network to creating your business website, we provide the technology foundation your company needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Design & Hosting</h3>
              <p className="text-gray-600 mb-4">
                Launch your online presence in days, not weeks. Our one-page or multi-page websites start at $499, hosted on secure, managed infrastructure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Domain registration & DNS</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Responsive design (mobile-friendly)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">SSL certificate & basic SEO setup</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business-Grade Email & Collaboration</h3>
              <p className="text-gray-600 mb-4">
                Get @yourcompany.com email with Microsoft 365 or Google Workspace, shared calendars, and document collaboration—professional and reliable.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Custom domain email setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Microsoft 365 or Google Workspace configuration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Team collaboration tools & training</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Network & Security</h3>
              <p className="text-gray-600 mb-4">
                From wired LAN to secure Wi-Fi for your team, plus firewall configuration and regular vulnerability scans.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Office network design & installation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Secure Wi-Fi setup with guest access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Firewall & VPN configuration</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Managed Backups & Disaster Recovery</h3>
              <p className="text-gray-600 mb-4">
                Daily backups to local or cloud, with rapid recovery SLA—protect your invoices, contracts, and customer data.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Automated daily backup solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Secure cloud storage integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Disaster recovery planning & testing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ongoing Support Plans</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our monthly plan for priority response, remote assistance, and discounted on-site visits.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Proactive system monitoring & maintenance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Priority response for critical issues</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Discounted on-site service rates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Business IT Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Need something specific for your business? We create custom IT solutions tailored to your unique requirements and budget.
                </p>
              </div>
              <div className="mt-auto">
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get a Business IT Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Small Business IT That Makes Sense</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We understand that small businesses need reliable IT without the enterprise price tag. That's why we offer flexible solutions that grow with you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Managed IT Plans</h3>
              <p className="text-gray-600">
                Custom plans starting at $199/month for 4 hours of support + remote monitoring. Perfect for businesses with 2-20 employees.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Project-Based Work</h3>
              <p className="text-gray-600">
                One-time needs like office moves, equipment upgrades, or network overhauls with clear, upfront pricing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Scalable Solutions</h3>
              <p className="text-gray-600">
                Start with what you need today, and easily add services as your business grows. No long-term contracts required.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Local Charlotte Support</h3>
              <p className="text-gray-600">
                We're based in Charlotte, not some distant call center. When you need on-site help, we're there fast.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => {
                window.location.href = '/pricing';
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
            >
              See Business IT Plans & Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BusinessSupport;
