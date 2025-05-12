
import { DollarSign, Globe, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PricingPreview = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Pricing at a Glance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
            Transparent pricing with no hidden fees. Know what you're paying for before we start.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Home Visit */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all hover:scale-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
              <DollarSign className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-3">Home Visit</h3>
            <div className="text-3xl font-bold text-center text-blue-600 mb-5">$99</div>
            <p className="text-center text-gray-600 mb-6 text-lg">
              $99 call-out + $75/hr on-site
            </p>
            <ul className="text-gray-600 mb-6 space-y-3">
              <li className="flex items-center">
                <span className="mr-3 text-blue-500 text-lg">✓</span>
                <span className="text-gray-700">No travel fees in Charlotte area</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-blue-500 text-lg">✓</span>
                <span className="text-gray-700">Same-day service when available</span>
              </li>
            </ul>
          </motion.div>
          
          {/* One-Page Website */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-all hover:scale-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
              <Globe className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-3">One-Page Website</h3>
            <div className="text-3xl font-bold text-center text-blue-600 mb-5">$499</div>
            <p className="text-center text-gray-600 mb-6 text-lg">
              Starting at $499 (design, responsive, SEO basics)
            </p>
            <ul className="text-gray-600 mb-6 space-y-3">
              <li className="flex items-center">
                <span className="mr-3 text-blue-500 text-lg">✓</span>
                <span className="text-gray-700">Mobile-responsive design</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-blue-500 text-lg">✓</span>
                <span className="text-gray-700">SSL certificate included</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Business Plan */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all hover:scale-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
              <Briefcase className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-3">Business Plan</h3>
            <div className="text-3xl font-bold text-center text-blue-600 mb-5">$199/mo</div>
            <p className="text-center text-gray-600 mb-6 text-lg">
              Starting at $199/mo for 4 hrs support + remote monitoring
            </p>
            <ul className="text-gray-600 mb-6 space-y-3">
              <li className="flex items-center">
                <span className="mr-3 text-blue-500 text-lg">✓</span>
                <span className="text-gray-700">Priority response times</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-blue-500 text-lg">✓</span>
                <span className="text-gray-700">24/7 monitoring included</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            to="/pricing" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] text-lg font-medium"
          >
            View Full Pricing
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;
