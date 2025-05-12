
import { DollarSign, Globe, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PricingPreview = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Pricing at a Glance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Know what you're paying for before we start.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Home Visit */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-2">Home Visit</h3>
            <div className="text-3xl font-bold text-center text-blue-600 mb-4">$99</div>
            <p className="text-center text-gray-600 mb-4">
              $99 call-out + $75/hr on-site
            </p>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-blue-500">✓</span>
                No travel fees in Charlotte area
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-blue-500">✓</span>
                Same-day service when available
              </li>
            </ul>
          </motion.div>
          
          {/* One-Page Website */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-2">One-Page Website</h3>
            <div className="text-3xl font-bold text-center text-blue-600 mb-4">$499</div>
            <p className="text-center text-gray-600 mb-4">
              Starting at $499 (design, responsive, SEO basics)
            </p>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-blue-500">✓</span>
                Mobile-responsive design
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-blue-500">✓</span>
                SSL certificate included
              </li>
            </ul>
          </motion.div>
          
          {/* Business Plan */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-2">Business Plan</h3>
            <div className="text-3xl font-bold text-center text-blue-600 mb-4">$199/mo</div>
            <p className="text-center text-gray-600 mb-4">
              Starting at $199/mo for 4 hrs support + remote monitoring
            </p>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-blue-500">✓</span>
                Priority response times
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-blue-500">✓</span>
                24/7 monitoring included
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            to="/pricing" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            View Full Pricing
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;
