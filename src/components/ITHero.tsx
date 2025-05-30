
import { ArrowRight, Headphones, Shield, Server, Clock } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ITHero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3, duration: 0.8 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="relative mt-16 md:mt-0 w-full max-w-[100vw]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="banner-container bg-blue-900 relative overflow-hidden h-[700px] md:h-[750px] w-full">
        <div className="absolute inset-0 bg-blue-900 w-full">
          <img
            src="/lovable-uploads/photo-1486312338219-ce68d2c6f44d.png"
            alt="IT Support Services"
            className={`w-full h-full object-cover opacity-30 ${isMobile ? 'object-right' : 'object-center'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-white"></div>
        </div>
        <div className="banner-overlay bg-transparent pt-21 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center flex flex-col items-center" variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                Professional IT Support Services
              </h1>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Your trusted partner for comprehensive IT solutions. We keep your business running smoothly with 24/7 technical support.
              </p>
              <motion.div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2 md:mt-4 justify-center" variants={itemVariants}>
                <button
                  className="px-6 md:px-8 py-2 md:py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-sm md:text-base"
                  onClick={e => {
                    e.preventDefault();
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Our Services
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Button
                  onClick={scrollToContact}
                  className="px-6 md:px-8 py-2 md:py-3 bg-white text-blue-900 rounded-md hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-sm md:text-base"
                >
                  Contact IT Support
                  <Headphones className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 flex items-center justify-center rounded-lg text-blue-500 mb-2 md:mb-3">
              <Shield className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Network Security</h3>
            <p className="text-gray-600 text-xs md:text-sm">Protecting your business with enterprise-grade security solutions and threat monitoring.</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 flex items-center justify-center rounded-lg text-blue-500 mb-2 md:mb-3">
              <Server className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Cloud Solutions</h3>
            <p className="text-gray-600 text-xs md:text-sm">Scalable cloud infrastructure and migration services for modern business needs.</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 flex items-center justify-center rounded-lg text-blue-500 mb-2 md:mb-3">
              <Clock className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">24/7 Support</h3>
            <p className="text-gray-600 text-xs md:text-sm">Round-the-clock technical assistance to keep your systems running without interruption.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ITHero;
