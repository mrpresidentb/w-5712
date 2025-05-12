
import { Shield, Clock, Network, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const ITFeatures = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-2 px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-sm font-medium">
            Why Choose Us
          </div>
          <h2 className="text-3xl font-bold mb-4">Why Choose IT Carolina?</h2>
          <p className="text-blue-200 max-w-3xl mx-auto">
            We provide world-class IT services with a local touch. Here's what makes our support stand out from the rest.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            <motion.div 
              className="bg-blue-800/50 rounded-lg p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-lg p-3 mr-4">
                  <Network className="h-6 w-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local, On-Site Service</h3>
                  <p className="text-blue-200">
                    We work in Charlotte neighborhoods—no national call-center delays.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-blue-800/50 rounded-lg p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-lg p-3 mr-4">
                  <DollarSign className="h-6 w-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flat-Rate Pricing</h3>
                  <p className="text-blue-200">
                    Know your costs up front. No surprises on your bill.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            <motion.div 
              className="bg-blue-800/50 rounded-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-lg p-3 mr-4">
                  <Shield className="h-6 w-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Jargon-Free Support</h3>
                  <p className="text-blue-200">
                    We explain every step in clear, simple English.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-blue-800/50 rounded-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-lg p-3 mr-4">
                  <Clock className="h-6 w-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Emergency Coverage</h3>
                  <p className="text-blue-200">
                    After-hours help when you need it most.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-blue-100 transition-all duration-300"
          >
            Schedule a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ITFeatures;
