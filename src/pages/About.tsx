
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About IT Carolina
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                We're your local IT support team dedicated to keeping your technology running smoothly, 
                whether you're a home user or small business in Charlotte, NC.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    At IT Carolina, we're on a mission to make technology work for you, not against you. 
                    We believe that reliable IT support shouldn't be complicated or expensive.
                  </p>
                  <p className="text-gray-600">
                    Whether you're dealing with a slow computer, need help setting up your home Wi-Fi, 
                    or require a professional website for your small business, we're here to help with 
                    transparent pricing and friendly service.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Transparency:</strong> Clear, upfront pricing with no hidden fees or surprise charges.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Reliability:</strong> We're here when you need us, with emergency support available.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Local Focus:</strong> We understand the needs of Charlotte area homes and businesses.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Plain English:</strong> No confusing tech jargon - we explain everything clearly.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    IT Carolina was founded on the simple principle that technology should make life easier, not harder. 
                    We started as a small local business serving the Charlotte community, and we've grown by focusing 
                    on what matters most: solving real problems for real people.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our experience spans from helping families set up their first home Wi-Fi network to building 
                    professional websites for growing businesses. We've seen how the right IT support can transform 
                    productivity and peace of mind.
                  </p>
                  <p className="text-gray-600">
                    Today, we continue to serve both home users and small businesses throughout the Charlotte area, 
                    always with the same commitment to clear communication, fair pricing, and effective solutions.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Why Choose IT Carolina?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-3">Home User Focus</h3>
                    <p className="text-gray-600">
                      We specialize in the technology challenges that home users face every day - from virus removal 
                      to printer setup to data recovery.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-3">Small Business Expertise</h3>
                    <p className="text-gray-600">
                      We understand what small businesses need to succeed online, from professional websites 
                      to reliable email systems.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-3">Local Support</h3>
                    <p className="text-gray-600">
                      Based right here in Charlotte, we provide onsite service when you need it and understand 
                      the local market.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-3">Fixed-Rate Pricing</h3>
                    <p className="text-gray-600">
                      No surprises - our transparent pricing means you know exactly what you'll pay before we start.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
