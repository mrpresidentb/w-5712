
import PageLayout from '@/components/PageLayout';
import { ArrowRight, Check, Computer, Building, Globe, Printer, Database, Shield } from "lucide-react";
import SEO from '@/components/SEO';

const Pricing = () => {
  return (
    <PageLayout>
      <SEO 
        title="IT Support Pricing - IT Carolina" 
        description="Transparent pricing for IT services, web design, and tech support for home users and small businesses in Charlotte, NC."
      />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-blue-100 mb-8">
              No hidden fees, no surprise charges. Just clear pricing for the services you need.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Home User Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fixed-rate pricing for home computer repairs, setup, and troubleshooting.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-blue-50 p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Computer className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Home IT Support</h3>
              </div>
              <p className="text-gray-600 mt-2">For personal computers, laptops, printers, and home networks</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-800 mb-2">$99</div>
                  <p className="text-gray-600 mb-4">Onsite call-out fee (includes first hour)</p>
                  
                  <div className="text-xl font-bold text-blue-800 mb-2">+$75/hr</div>
                  <p className="text-gray-600 mb-4">After first hour (billed in 15-minute increments)</p>
                  
                  <p className="text-sm text-gray-500 italic">Most home computer issues are resolved within 1-2 hours</p>
                </div>
                
                <div className="space-y-3">
                  <p className="font-semibold text-gray-700">Includes:</p>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Computer/laptop troubleshooting & repair</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Virus & malware removal</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Home Wi-Fi setup & optimization</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Printer & peripheral setup</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Data backup & recovery services</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
                >
                  Book a Home Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Small Business Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Flexible plans designed for small businesses and startups.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-blue-50 p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <Building className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">Managed IT Plan</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-3xl font-bold text-blue-800 mb-2">$199/month</div>
                  <p className="text-gray-600 mb-4">Starting price for small businesses (2-10 employees)</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">4 hours of support per month</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Remote monitoring & maintenance</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Security updates & patches</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Help desk support during business hours</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Discounted onsite service rates</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
                    >
                      Get a Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-blue-50 p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <Database className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">Data Backup & Security</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-3xl font-bold text-blue-800 mb-2">$50/month</div>
                  <p className="text-gray-600 mb-4">Per server or 5 workstations</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Daily automated backups</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Secure cloud storage (100GB included)</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Monthly backup verification</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Ransomware protection</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Quick data recovery</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Need a custom plan? We create tailored IT solutions for businesses of all sizes.
              </p>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Request a Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Web & Hosting Packages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get your business online with our affordable web solutions.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-blue-50 p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800">Web Starter Package</h3>
                </div>
                
                <div className="p-6">
                  <div className="text-3xl font-bold text-blue-800 mb-2">$499</div>
                  <p className="text-gray-600 mb-4">One-time fee</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">One-page professional website</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Responsive mobile design</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Contact form</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">1 year hosting included</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">SSL certificate</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md border border-blue-300 overflow-hidden transform md:scale-105 z-10">
                <div className="bg-blue-600 p-6 border-b border-blue-500">
                  <h3 className="text-xl font-bold text-white">Business Website</h3>
                  <span className="inline-block mt-1 text-sm bg-blue-700 text-white px-2 py-1 rounded">Most Popular</span>
                </div>
                
                <div className="p-6">
                  <div className="text-3xl font-bold text-blue-800 mb-2">$999</div>
                  <p className="text-gray-600 mb-4">One-time fee</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">5-7 page professional website</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">WordPress CMS</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Contact form with custom fields</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">1 year hosting included</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Basic SEO setup</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Social media integration</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-blue-50 p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800">E-Commerce Package</h3>
                </div>
                
                <div className="p-6">
                  <div className="text-3xl font-bold text-blue-800 mb-2">$1,499</div>
                  <p className="text-gray-600 mb-4">One-time fee</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Online store with up to 25 products</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">WooCommerce or Shopify</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Payment gateway integration</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Product setup assistance</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">1 year hosting included</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">SSL certificate & security setup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Additional Services & Add-Ons</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div>
                    <p className="font-semibold text-gray-800">Domain Registration</p>
                    <p className="text-blue-800 font-medium">$15/yr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <p className="font-semibold text-gray-800">Business Email Setup</p>
                    <p className="text-blue-800 font-medium">$10/user/mo</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <p className="font-semibold text-gray-800">Website Maintenance</p>
                    <p className="text-blue-800 font-medium">$49/mo</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <p className="font-semibold text-gray-800">SEO Optimization</p>
                    <p className="text-blue-800 font-medium">Starting at $299</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <p className="font-semibold text-gray-800">Content Updates</p>
                    <p className="text-blue-800 font-medium">$75/hr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <p className="font-semibold text-gray-800">Custom Development</p>
                    <p className="text-blue-800 font-medium">$95/hr</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button 
                onClick={() => {
                  window.location.href = '/services/web-hosting';
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
              >
                View Web Services Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Quote?</h2>
            <p className="text-gray-600 mb-8">
              Every business has unique IT needs. Contact us for a personalized IT solution tailored to your specific requirements and budget.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Request a Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
