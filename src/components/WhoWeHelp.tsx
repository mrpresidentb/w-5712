
import React from "react";
import { Laptop, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const WhoWeHelp = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="who-we-help" className="py-16 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900">Who We Help</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Home & Home-Office Users */}
          <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Laptop className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Home & Home-Office Users</h3>
              <p className="text-gray-600 mb-4">
                Non-technical individuals needing fast fixes: slow PCs, Wi-Fi dead zones, virus removal, data recovery.
              </p>
              <button 
                onClick={() => scrollToSection('home-services')}
                className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
              >
                View Home Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </motion.div>
          
          {/* Small LLCs & Startups */}
          <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Small LLCs & Startups</h3>
              <p className="text-gray-600 mb-4">
                Small businesses needing websites, hosting, email setup, network security, and backup solutions.
              </p>
              <button 
                onClick={() => scrollToSection('business-services')}
                className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
              >
                View Business Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
