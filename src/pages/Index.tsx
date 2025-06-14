
import PageLayout from '@/components/PageLayout';
import ITHero from '@/components/ITHero';
import ITServices from '@/components/ITServices';
import ITFeatures from '@/components/ITFeatures';
import ITTestimonials from '@/components/ITTestimonials';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Shield, Phone, Mail, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="Computer Repair & IT Support Near Me | Charlotte NC | IT Carolina"
        description="Looking for computer repair technician near me? IT Carolina provides professional computer repair, IT support, virus removal, and web design services in Charlotte, NC. Local computer service experts."
        imageUrl="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
      />
      <ITHero />
      
      <ITServices />
      
      {/* Main Content Section with Natural Keyword Integration */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Professional Computer Repair & IT Support in Charlotte, NC
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              When you search for "computer repair near me" or "computer repair technician near me," you want reliable, local service you can trust. 
              IT Carolina has been providing professional computer repair services and IT support to Charlotte area residents and small businesses since 2010.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Our Local Computer Service Team?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you need a computer repair technician near you or comprehensive IT services for your small business, 
                our certified professionals understand that technology problems can be frustrating. We've built our computer support 
                services around transparency, reliability, and exceptional customer service throughout the Charlotte metro area.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of qualified technicians has over 15 years of combined experience helping Charlotte residents and 
                small businesses with everything from computer repair and virus removal to professional web design. 
                <Link to="/about" className="text-blue-600 hover:text-blue-700 underline"> Learn more about our local team</Link>.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Transparent, Flat-Rate Pricing</h4>
                    <p className="text-gray-700">No hourly rates or surprise fees. You know exactly what you'll pay before we start. <Link to="/pricing" className="text-blue-600 hover:text-blue-700 underline">View our complete pricing guide</Link>.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Local Charlotte Focus</h4>
                    <p className="text-gray-700">We're part of your Charlotte community and understand the unique needs of local residents and small businesses.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Same-Day Emergency Service</h4>
                    <p className="text-gray-700">When computer problems threaten your productivity, our team responds quickly to get you back up and running.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Common Computer Problems We Solve Daily</h3>
              <ul className="space-y-3 text-gray-700">
                <li>"My computer is running really slow"</li>
                <li>"I think I have a virus or malware"</li>
                <li>"My Wi-Fi keeps dropping out"</li>
                <li>"My printer says it's offline but it's plugged in"</li>
                <li>"I accidentally deleted important files"</li>
                <li>"I need a professional website for my small business"</li>
                <li>"Can you set up email for my business domain?"</li>
                <li>"I need help backing up my important data"</li>
              </ul>
              <div className="mt-6 space-y-3">
                <Link 
                  to="/pricing" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Our Service Pricing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <br />
                <Link 
                  to="/services/printer" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Printer Support Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* FAQ Section for Better SEO */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-gray-900">How do I find computer repair places near me?</h4>
                <p className="text-gray-700">Look for local computer repair shops with good reviews, transparent pricing, and certified technicians. IT Carolina serves the entire Charlotte metro area with on-site and in-shop computer repair services.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-gray-900">What's included in your computer support services?</h4>
                <p className="text-gray-700">Our comprehensive computer support includes virus removal, performance optimization, hardware repairs, software installation, data recovery, and ongoing maintenance for both home and business computers.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-gray-900">Do you provide Apple computer support?</h4>
                <p className="text-gray-700">Yes! Our Apple computer support includes Mac repairs, software troubleshooting, data migration, and hardware upgrades. We're experienced with both Mac and PC systems.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-gray-900">How much does computer repair cost in Charlotte?</h4>
                <p className="text-gray-700">Our computer repair services start at $99 for diagnostics, with flat-rate pricing for most services. We provide upfront quotes with no hidden fees or surprise charges.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Computer Help & IT Services for Two Key Audiences</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our computer help and IT services are specifically designed for home users and small businesses in the Charlotte area.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Personal Computer Help & Home Office Support</h4>
                <p className="text-gray-700 mb-4">
                  When you need personal computer help or search for "pc help near me," we provide friendly, jargon-free assistance 
                  for everyday computer problems, home office setup, and basic technology needs.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Computer tune-ups and virus removal</li>
                  <li>• Home Wi-Fi setup and troubleshooting</li>
                  <li>• Printer and peripheral support</li>
                  <li>• Data backup and file recovery</li>
                  <li>• Home office technology setup</li>
                </ul>
                <Link 
                  to="/services/home-office" 
                  className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn About Home Computer Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Small Business Computer Service & IT Support</h4>
                <p className="text-gray-700 mb-4">
                  Growing small businesses need professional computer service and IT support without enterprise complexity. 
                  We provide comprehensive computer support and services tailored for small LLCs and startups.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Small business network setup</li>
                  <li>• Professional web design and hosting</li>
                  <li>• Business email setup (Microsoft 365/Google Workspace)</li>
                  <li>• Managed backups and security</li>
                  <li>• Ongoing IT support plans</li>
                </ul>
                <div className="mt-4 space-y-2">
                  <Link 
                    to="/services/business" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Explore Small Business IT Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <br />
                  <Link 
                    to="/services/web-hosting" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Professional Web Design & Hosting
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Areas Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Computer Repair & IT Services Throughout Charlotte</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Professional Computer Repair Services</h4>
                <p className="text-gray-700 mb-4">
                  Our certified computer repair technicians provide comprehensive computer repair and services throughout the Charlotte metro area. 
                  From basic computer help to complex IT projects, we handle it all with professionalism and care.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Service Areas:</strong> Uptown Charlotte, South End, NoDa, University City, Ballantyne, SouthPark, 
                  Dilworth, Myers Park, Plaza Midwood, and surrounding communities.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Why Choose Local Computer Support?</h4>
                <p className="text-gray-700 mb-4">
                  When you search for "computer support near me" or "computer service and support," choosing a local Charlotte company means 
                  faster response times, personal service, and technicians who understand your community's specific needs.
                </p>
                <p className="text-gray-700">
                  Our local computer support team is available for both on-site visits and remote assistance, ensuring you get the help you need 
                  when you need it most.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white border border-gray-200 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Get Computer Help Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold mb-2">Call for Computer Help</h4>
                <a href="tel:+18886610020" className="text-blue-600 hover:text-blue-700">
                  (888) 661-0020
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold mb-2">Email Our Support Team</h4>
                <a href="mailto:support@itcarolina.us" className="text-blue-600 hover:text-blue-700">
                  support@itcarolina.us
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold mb-2">Service Area</h4>
                <p className="text-gray-700">Charlotte, NC Metro Area</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Solve Your Computer Problems?</h3>
            <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
              Whether you need immediate computer repair, ongoing IT support for your small business, or help setting up your home office, 
              our local Charlotte team is here to provide reliable solutions with honest pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+18886610020" 
                className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                Call (888) 661-0020
              </a>
              <Link 
                to="/pricing" 
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-400 transition-colors font-medium inline-flex items-center justify-center"
              >
                View Pricing & Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ITFeatures />
      <ITTestimonials />
    </PageLayout>
  );
};

export default Index;
