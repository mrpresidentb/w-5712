
import { ArrowRight, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ITHero = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="relative mt-16 md:mt-0 w-full max-w-[100vw] overflow-hidden"
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
    >
      {/* Hero Section with Blue Gradient Background */}
      <div className="relative bg-gradient-to-b from-[#0F3BB8] to-[#EEF2FF] min-h-[700px] md:min-h-[750px] w-full">
        
        {/* Circuit Board Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1200 800" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M100 100h200v50h150v-50h200v100h-150v150h150v100h-200v-50h-150v50h-200v-100h150v-150h-150z" stroke="white" strokeWidth="2"/>
            <circle cx="200" cy="150" r="8" fill="white"/>
            <circle cx="400" cy="200" r="8" fill="white"/>
            <circle cx="600" cy="250" r="8" fill="white"/>
            <circle cx="800" cy="300" r="8" fill="white"/>
            <path d="M900 200h200v50h150v-50h200" stroke="white" strokeWidth="1"/>
            <path d="M50 400h300v100h200v-100h300" stroke="white" strokeWidth="1"/>
          </svg>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">
            
            {/* Left Column - Text Content */}
            <motion.div className="text-left" variants={itemVariants}>
              <h1 className="text-white font-bold leading-tight mb-6">
                <span className="block text-4xl md:text-5xl lg:text-6xl">Fast, Friendly IT Support</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl">in Charlotte, NC</span>
              </h1>
              
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-[600px] leading-relaxed">
                24/7 monitoring, on-site repairs, and remote help — one call covers it all.
              </p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                variants={itemVariants}
              >
                <button 
                  onClick={scrollToContact}
                  className="bg-[#2563EB] text-white px-8 py-3 rounded-lg h-12 font-medium transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center group"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Get Support Now
                </button>
                
                <button 
                  onClick={scrollToServices}
                  className="bg-white text-[#2563EB] border border-[#2563EB] px-8 py-3 rounded-lg h-12 font-medium transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center group"
                >
                  View Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Illustration */}
            <motion.div 
              className="flex justify-center lg:justify-end order-first lg:order-last"
              variants={itemVariants}
            >
              <div className="relative max-w-md w-full">
                <svg 
                  viewBox="0 0 400 300" 
                  className="w-full h-auto"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  alt="Professional IT technician with laptop and server equipment providing technical support"
                >
                  {/* Server Rack */}
                  <rect x="280" y="80" width="80" height="140" rx="8" fill="#1E40AF" stroke="#3B82F6" strokeWidth="2"/>
                  <rect x="290" y="95" width="60" height="15" rx="2" fill="#60A5FA"/>
                  <rect x="290" y="115" width="60" height="15" rx="2" fill="#60A5FA"/>
                  <rect x="290" y="135" width="60" height="15" rx="2" fill="#60A5FA"/>
                  <rect x="290" y="155" width="60" height="15" rx="2" fill="#60A5FA"/>
                  <circle cx="295" cy="102" r="3" fill="#10B981"/>
                  <circle cx="305" cy="102" r="3" fill="#10B981"/>
                  <circle cx="315" cy="102" r="3" fill="#F59E0B"/>
                  
                  {/* Desk */}
                  <rect x="50" y="180" width="200" height="20" rx="4" fill="#6B7280"/>
                  <rect x="55" y="200" width="10" height="40" fill="#6B7280"/>
                  <rect x="235" y="200" width="10" height="40" fill="#6B7280"/>
                  
                  {/* Laptop */}
                  <rect x="80" y="160" width="80" height="50" rx="4" fill="#374151"/>
                  <rect x="85" y="165" width="70" height="40" rx="2" fill="#1F2937"/>
                  <rect x="90" y="170" width="60" height="30" rx="2" fill="#60A5FA"/>
                  
                  {/* IT Technician */}
                  {/* Head */}
                  <circle cx="150" cy="100" r="25" fill="#FBBF24"/>
                  {/* Hair */}
                  <path d="M130 85 Q150 70 170 85 Q165 80 150 80 Q135 80 130 85" fill="#1F2937"/>
                  {/* Eyes */}
                  <circle cx="142" cy="95" r="2" fill="#1F2937"/>
                  <circle cx="158" cy="95" r="2" fill="#1F2937"/>
                  {/* Mouth */}
                  <path d="M145 105 Q150 110 155 105" stroke="#1F2937" strokeWidth="2" fill="none"/>
                  
                  {/* Body */}
                  <rect x="130" y="125" width="40" height="60" rx="20" fill="#3B82F6"/>
                  
                  {/* Arms */}
                  <rect x="105" y="135" width="25" height="15" rx="7" fill="#FBBF24"/>
                  <rect x="170" y="135" width="25" height="15" rx="7" fill="#FBBF24"/>
                  
                  {/* Legs */}
                  <rect x="135" y="185" width="15" height="30" rx="7" fill="#1E40AF"/>
                  <rect x="150" y="185" width="15" height="30" rx="7" fill="#1E40AF"/>
                  
                  {/* Connection Lines */}
                  <path d="M160 170 Q200 165 280 140" stroke="#60A5FA" strokeWidth="2" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                  </path>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg 
            className="relative block w-full h-16 md:h-20" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ITHero;
