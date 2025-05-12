
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
    <section id="who-we-help" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Who We Help
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4 tracking-tight">Who We Help</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide tailored IT solutions for everyone from individual home users to growing small businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Home & Home-Office Users */}
          <motion.div 
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="p-10">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <Laptop className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Home & Home-Office Users</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Non-technical individuals needing fast fixes: slow PCs, Wi-Fi dead zones, virus removal, data recovery.
              </p>
              <button 
                onClick={() => scrollToSection('home-services')}
                className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors group"
              >
                View Home Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          
          {/* Small LLCs & Startups */}
          <motion.div 
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="p-10">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <Briefcase className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Small LLCs & Startups</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Small businesses needing websites, hosting, email setup, network security, and backup solutions.
              </p>
              <button 
                onClick={() => scrollToSection('business-services')}
                className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors group"
              >
                View Business Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
