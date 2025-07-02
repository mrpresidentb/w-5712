
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Check, Clock, Shield, Users, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <PageLayout>
      <SEO 
        title="Computer Repair Pricing Charlotte NC | IT Carolina"
        description="Transparent computer repair pricing in Charlotte NC. Flat-rate costs for virus removal, PC tune-ups, data recovery. No hidden fees. Call (704) 520-0809."
        canonical="https://itcarolina.us/pricing"
        keywords="computer repair pricing Charlotte NC, IT support costs, virus removal price, PC tune-up cost, data recovery pricing, flat rate computer repair"
      />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Transparent Computer Repair Pricing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              No surprises, no hidden fees. Clear, flat-rate pricing for all computer repair and IT services in Charlotte, NC.
            </p>
            <p className="text-lg text-blue-200">
              Have questions about our pricing or services? Check our <Link to="/faq" className="text-white underline hover:text-blue-100">FAQ page</Link> for detailed answers.
            </p>
          </div>
        </div>
      </section>

      {/* Dedicated Home IT Support Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Home IT Support</h2>
            <p className="text-xl text-gray-700">Our most popular service for personal computers, laptops, printers, and home networks</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
            <div className="flex items-center justify-center mb-6">
              <Home className="w-8 h-8 mr-3 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-900">Home IT Support</h3>
            </div>
            
            <div className="text-center mb-8">
              <div className="mb-4">
                <p className="text-4xl font-bold text-blue-900">$99</p>
                <p className="text-lg text-gray-600">On-site call out fee (includes first hour)</p>
              </div>
              <p className="text-sm text-gray-500 italic">Most home computer issues are resolved within 1-2 hours</p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Includes:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-500" />
                  <span className="text-gray-700">Computer/laptop troubleshooting & repair</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-500" />
                  <span className="text-gray-700">Virus & malware removal</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-500" />
                  <span className="text-gray-700">Home Wi-Fi setup & optimization</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-500" />
                  <span className="text-gray-700">Printer & peripheral setup</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-500" />
                  <span className="text-gray-700">Data backup & recovery services</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Book a Home Visit →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Specialized computer repair and IT services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Virus Removal */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Virus & Malware Removal</h3>
              <p className="text-gray-700 mb-4">Complete virus and malware cleanup to restore your computer's performance and security.</p>
              <div className="flex items-center mb-2">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-gray-600">Full system scan and removal</span>
              </div>
              <div className="flex items-center mb-2">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-gray-600">Rootkit and spyware elimination</span>
              </div>
              <div className="flex items-center mb-2">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-gray-600">Security software installation</span>
              </div>
              <p className="text-2xl font-bold text-blue-900 mt-4">$149</p>
            </div>

            {/* PC Tune-Up */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">PC Performance Tune-Up</h3>
              <p className="text-gray-700 mb-4">Optimize your computer for faster startup, smoother operation, and improved overall performance.</p>
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-gray-600">Startup optimization</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-gray-600">Registry cleanup</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-gray-600">Software updates</span>
              </div>
              <p className="text-2xl font-bold text-blue-900 mt-4">$129</p>
            </div>

            {/* Data Recovery */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Data Recovery Services</h3>
              <p className="text-gray-700 mb-4">Recover lost or deleted files from hard drives, SSDs, USB drives, and other storage devices.</p>
              <div className="flex items-center mb-2">
                <Shield className="w-4 h-4 mr-2 text-yellow-500" />
                <span className="text-gray-600">Hard drive recovery</span>
              </div>
              <div className="flex items-center mb-2">
                <Shield className="w-4 h-4 mr-2 text-yellow-500" />
                <span className="text-gray-600">SSD data retrieval</span>
              </div>
              <div className="flex items-center mb-2">
                <Shield className="w-4 h-4 mr-2 text-yellow-500" />
                <span className="text-gray-600">USB drive recovery</span>
              </div>
              <p className="text-2xl font-bold text-blue-900 mt-4">Starting at $199</p>
            </div>

            {/* Small Business IT Support */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Small Business IT Support</h3>
              <p className="text-gray-700 mb-4">Comprehensive IT solutions for small businesses, including network setup, security, and ongoing support.</p>
              <div className="flex items-center mb-2">
                <Users className="w-4 h-4 mr-2 text-purple-500" />
                <span className="text-gray-600">Network setup and maintenance</span>
              </div>
              <div className="flex items-center mb-2">
                <Users className="w-4 h-4 mr-2 text-purple-500" />
                <span className="text-gray-600">Cybersecurity solutions</span>
              </div>
              <div className="flex items-center mb-2">
                <Users className="w-4 h-4 mr-2 text-purple-500" />
                <span className="text-gray-600">Remote and on-site support</span>
              </div>
              <p className="text-2xl font-bold text-blue-900 mt-4">Custom Quote</p>
            </div>

            {/* Web Design & Hosting */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Web Design & Hosting</h3>
              <p className="text-gray-700 mb-4">Professional website design, domain registration, and reliable hosting services to establish your online presence.</p>
              <div className="flex items-center mb-2">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-gray-600">Custom website design</span>
              </div>
              <div className="flex items-center mb-2">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-gray-600">Domain registration</span>
              </div>
              <div className="flex items-center mb-2">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-gray-600">Reliable web hosting</span>
              </div>
              <p className="text-2xl font-bold text-blue-900 mt-4">Custom Quote</p>
            </div>

            {/* Printer Support */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Printer & Peripheral Support</h3>
              <p className="text-gray-700 mb-4">Setup, troubleshooting, and repair services for printers, scanners, and other computer peripherals.</p>
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-gray-600">Printer setup and installation</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-gray-600">Troubleshooting and repair</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                <span className="text-gray-600">Driver updates and configuration</span>
              </div>
              <p className="text-2xl font-bold text-blue-900 mt-4">$99</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Get Your Computer Fixed?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free diagnostic and upfront pricing. No surprises, just honest computer repair in Charlotte.
          </p>
          <p className="text-gray-600 mb-8">
            Not sure what service you need? Our <Link to="/faq" className="text-blue-600 hover:text-blue-700 underline">FAQ page</Link> answers common questions about computer problems and our repair process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+17045200809" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call (704) 520-0809
            </a>
            <a 
              href="mailto:support@itcarolina.us" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Email for Quote
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
