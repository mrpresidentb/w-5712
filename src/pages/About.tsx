
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Shield, Users, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <PageLayout>
      <SEO 
        title="About IT Carolina | Expert IT Support Team in Charlotte NC"
        description="Learn about IT Carolina's expert IT support team serving Charlotte, NC. Local computer repair, network setup, and web design services with transparent pricing and personal service."
      />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About IT Carolina
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted local IT partner in Charlotte, North Carolina, providing expert technology solutions 
              for homes and small businesses since our founding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                At IT Carolina, we believe technology should work for you, not against you. Our mission is to 
                provide reliable, honest, and affordable IT support that helps our clients focus on what they do best.
              </p>
              <p className="text-gray-600 text-lg">
                We specialize in making complex technology simple and accessible for home users and small businesses 
                throughout the Charlotte area. No confusing jargon, no hidden fees – just straightforward solutions 
                that work.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Us</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Local & Trusted</h3>
                    <p className="text-gray-600">Based in Charlotte, we understand local business needs and provide personalized service.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Response</h3>
                    <p className="text-gray-600">Same-day service available for urgent issues. We're here when you need us most.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Transparent Pricing</h3>
                    <p className="text-gray-600">Fixed-rate pricing with no surprises. You'll know the cost upfront.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600">Experienced technicians who explain solutions in plain English.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">For Home Users</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Computer slow-down and virus removal</li>
                  <li>• Wi-Fi setup and troubleshooting</li>
                  <li>• Printer installation and support</li>
                  <li>• Data backup and recovery</li>
                  <li>• Software installation and updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">For Small Business</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Network setup and management</li>
                  <li>• Business email and collaboration tools</li>
                  <li>• Website design and hosting</li>
                  <li>• Security solutions and monitoring</li>
                  <li>• Ongoing IT support plans</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today for a free consultation and see how we can help solve your IT challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+18886610020" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call (888) 661-0020
              </a>
              <a 
                href="mailto:support@itcarolina.us" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
