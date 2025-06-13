
import PageLayout from '@/components/PageLayout';
import ITHero from '@/components/ITHero';
import ITServices from '@/components/ITServices';
import ITFeatures from '@/components/ITFeatures';
import ITTestimonials from '@/components/ITTestimonials';
import ContactInfo from '@/components/ContactInfo';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Shield } from 'lucide-react';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="IT Carolina | Expert IT Support, Computer Repair, Web Design Charlotte NC"
        description="Professional IT support for home and small business in Charlotte, NC. Computer repair, virus removal, network setup, web design, printer support, and data recovery services. Flat-rate pricing."
        imageUrl="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
      />
      <ITHero />
      
      {/* Main Content Section with Rich Text */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Your Trusted IT Support Partner in Charlotte, NC
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              IT Carolina has been serving Charlotte area residents and small businesses since 2010, providing reliable, 
              jargon-free technology solutions. Whether you're dealing with a slow computer, need to set up a new office network, 
              or want a professional website for your small business, we're here to help with transparent pricing and friendly service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Choose IT Carolina?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We understand that technology problems can be frustrating and disruptive to your daily life or business operations. 
                That's why we've built our company around three core principles: transparency, reliability, and exceptional customer service.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of certified technicians has over 15 years of combined experience helping Charlotte area residents and 
                small businesses solve their technology challenges. From removing stubborn viruses to designing professional websites, 
                we handle it all with the same level of care and expertise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Flat-Rate, Transparent Pricing</h4>
                    <p className="text-gray-700">No hourly rates or surprise fees. You know exactly what you'll pay before we start.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Local Charlotte Focus</h4>
                    <p className="text-gray-700">We're part of your community and understand the unique needs of Charlotte area businesses and residents.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Same-Day Emergency Service</h4>
                    <p className="text-gray-700">When technology failures threaten your productivity, we respond quickly to get you back up and running.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Common Problems We Solve</h3>
              <ul className="space-y-3 text-gray-700">
                <li>"My computer is running really slow"</li>
                <li>"I think I have a virus or malware"</li>
                <li>"My Wi-Fi keeps dropping out"</li>
                <li>"My printer says it's offline but it's plugged in"</li>
                <li>"I accidentally deleted important files"</li>
                <li>"I need a simple website for my small business"</li>
                <li>"Can you set up email for my business domain?"</li>
                <li>"I need help backing up my important data"</li>
              </ul>
              <div className="mt-6">
                <Link 
                  to="/pricing" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Our Service Pricing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Serving Two Primary Audiences</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our services are specifically designed for the unique needs of home users and small businesses in the Charlotte area.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-gray-900">For Home & Home-Office Users</h4>
                <p className="text-gray-700 mb-4">
                  Non-technical individuals who need reliable help with everyday computer problems, home office setup, 
                  and basic technology needs without confusing jargon or complicated solutions.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Computer tune-ups and virus removal</li>
                  <li>• Home Wi-Fi setup and troubleshooting</li>
                  <li>• Printer and peripheral support</li>
                  <li>• Data backup and file recovery</li>
                  <li>• Home office technology setup</li>
                </ul>
                <Link 
                  to="/home-office-support" 
                  className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn About Home Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-gray-900">For Small LLCs & Startups</h4>
                <p className="text-gray-700 mb-4">
                  Growing businesses that need professional IT services, basic web presence, and light IT infrastructure 
                  without the complexity and cost of enterprise solutions.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Small business network setup</li>
                  <li>• Professional website design and hosting</li>
                  <li>• Business email setup (Microsoft 365/Google Workspace)</li>
                  <li>• Managed backups and security</li>
                  <li>• Ongoing IT support plans</li>
                </ul>
                <Link 
                  to="/business-support" 
                  className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Explore Business Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">How We Work</h3>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our process is designed to be as simple and stress-free as possible. We believe in clear communication, 
              upfront pricing, and getting the job done right the first time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-bold mb-2">Contact Us</h4>
                <p className="text-gray-700">Call, email, or use our contact form to describe your problem or project needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-gray-700">We provide clear, upfront pricing with no hidden fees or hourly rate surprises.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-bold mb-2">Problem Solved</h4>
                <p className="text-gray-700">We complete the work efficiently and follow up to ensure everything is working perfectly.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Solve Your Technology Challenges?</h3>
            <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
              Whether you're dealing with a frustrating computer problem or planning your next business technology project, 
              we're here to help with honest advice and reliable solutions.
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
      
      <ITServices />
      <ITFeatures />
      <ITTestimonials />
      <ContactInfo />
    </PageLayout>
  );
};

export default Index;
