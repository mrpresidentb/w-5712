
import { Shield, Clock, Network, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";

const ITFeatures = () => {
  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-3 px-4 py-2 bg-blue-800 text-blue-200 rounded-full text-sm font-medium">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Why Choose IT Carolina?</h2>
          <p className="text-blue-200 max-w-3xl mx-auto text-lg">
            We provide world-class IT services with a local touch. Here's what makes our support stand out from the rest.
          </p>
          <div className="flex justify-center mt-8">
            <Separator className="w-24 bg-blue-500/50" />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-12">
            <motion.div 
              className="bg-blue-800/50 rounded-xl p-10 hover:bg-blue-800/70 transition-colors duration-300 border border-blue-700/30 h-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-xl p-4 mr-5 shadow-lg">
                  <Network className="h-8 w-8 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Local, On-Site Service</h3>
                  <p className="text-blue-200 text-lg">
                    We work in Charlotte neighborhoods—no national call-center delays.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-blue-800/50 rounded-xl p-10 hover:bg-blue-800/70 transition-colors duration-300 border border-blue-700/30 h-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-xl p-4 mr-5 shadow-lg">
                  <DollarSign className="h-8 w-8 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Flat-Rate Pricing</h3>
                  <p className="text-blue-200 text-lg">
                    Know your costs up front. No surprises on your bill.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right column */}
          <div className="space-y-12">
            <motion.div 
              className="bg-blue-800/50 rounded-xl p-10 hover:bg-blue-800/70 transition-colors duration-300 border border-blue-700/30 h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-xl p-4 mr-5 shadow-lg">
                  <Shield className="h-8 w-8 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Jargon-Free Support</h3>
                  <p className="text-blue-200 text-lg">
                    We explain every step in clear, simple English.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-blue-800/50 rounded-xl p-10 hover:bg-blue-800/70 transition-colors duration-300 border border-blue-700/30 h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start">
                <div className="bg-blue-700 rounded-xl p-4 mr-5 shadow-lg">
                  <Clock className="h-8 w-8 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">24/7 Emergency Coverage</h3>
                  <p className="text-blue-200 text-lg">
                    After-hours help when you need it most.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
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
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-md hover:bg-blue-100 transition-all duration-300 text-lg font-medium hover:scale-[1.02] shadow-lg"
          >
            Schedule a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ITFeatures;
