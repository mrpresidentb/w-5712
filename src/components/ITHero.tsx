
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

            {/* Right Column - Professional IT Illustration */}
            <motion.div 
              className="flex justify-center lg:justify-end order-first lg:order-last"
              variants={itemVariants}
            >
              <div className="relative max-w-lg w-full px-4">
                <svg 
                  viewBox="0 0 500 400" 
                  className="w-full h-auto"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="IT technician working on a laptop with server infrastructure"
                >
                  {/* Background Circle */}
                  <circle cx="250" cy="200" r="180" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.2"/>
                  
                  {/* Server Rack */}
                  <rect x="320" y="120" width="100" height="160" rx="8" fill="#1E40AF" stroke="#3B82F6" strokeWidth="2"/>
                  <rect x="330" y="135" width="80" height="12" rx="2" fill="#60A5FA"/>
                  <rect x="330" y="155" width="80" height="12" rx="2" fill="#60A5FA"/>
                  <rect x="330" y="175" width="80" height="12" rx="2" fill="#60A5FA"/>
                  <rect x="330" y="195" width="80" height="12" rx="2" fill="#93C5FD"/>
                  <rect x="330" y="215" width="80" height="12" rx="2" fill="#93C5FD"/>
                  <rect x="330" y="235" width="80" height="12" rx="2" fill="#93C5FD"/>
                  
                  {/* Server Indicators */}
                  <circle cx="340" cy="141" r="3" fill="#10B981"/>
                  <circle cx="350" cy="141" r="3" fill="#10B981"/>
                  <circle cx="360" cy="141" r="3" fill="#F59E0B"/>
                  <circle cx="340" cy="161" r="3" fill="#10B981"/>
                  <circle cx="350" cy="161" r="3" fill="#10B981"/>
                  <circle cx="360" cy="161" r="3" fill="#10B981"/>
                  
                  {/* Desk */}
                  <rect x="80" y="250" width="240" height="25" rx="4" fill="#6B7280"/>
                  <rect x="85" y="275" width="15" height="60" fill="#6B7280"/>
                  <rect x="300" y="275" width="15" height="60" fill="#6B7280"/>
                  
                  {/* Laptop */}
                  <rect x="140" y="220" width="120" height="80" rx="6" fill="#374151"/>
                  <rect x="145" y="225" width="110" height="70" rx="4" fill="#1F2937"/>
                  <rect x="150" y="230" width="100" height="60" rx="2" fill="#3B82F6"/>
                  
                  {/* Laptop Screen Content */}
                  <rect x="155" y="235" width="90" height="3" rx="1" fill="#60A5FA"/>
                  <rect x="155" y="242" width="70" height="3" rx="1" fill="#93C5FD"/>
                  <rect x="155" y="249" width="85" height="3" rx="1" fill="#60A5FA"/>
                  <rect x="155" y="256" width="60" height="3" rx="1" fill="#93C5FD"/>
                  
                  {/* IT Professional */}
                  {/* Head */}
                  <circle cx="200" cy="140" r="28" fill="#FBBF24"/>
                  
                  {/* Hair */}
                  <path d="M175 120 Q200 105 225 120 Q220 115 200 115 Q180 115 175 120" fill="#1F2937"/>
                  
                  {/* Eyes */}
                  <circle cx="190" cy="135" r="2" fill="#1F2937"/>
                  <circle cx="210" cy="135" r="2" fill="#1F2937"/>
                  
                  {/* Glasses */}
                  <circle cx="190" cy="135" r="8" fill="none" stroke="#374151" strokeWidth="2"/>
                  <circle cx="210" cy="135" r="8" fill="none" stroke="#374151" strokeWidth="2"/>
                  <path d="M198 135 L202 135" stroke="#374151" strokeWidth="2"/>
                  
                  {/* Mouth */}
                  <path d="M192 145 Q200 150 208 145" stroke="#1F2937" strokeWidth="2" fill="none"/>
                  
                  {/* Body */}
                  <rect x="175" y="168" width="50" height="70" rx="25" fill="#3B82F6"/>
                  
                  {/* Arms */}
                  <rect x="145" y="185" width="30" height="18" rx="9" fill="#FBBF24"/>
                  <rect x="225" y="185" width="30" height="18" rx="9" fill="#FBBF24"/>
                  
                  {/* Hands on keyboard */}
                  <circle cx="150" cy="230" r="8" fill="#FBBF24"/>
                  <circle cx="250" cy="230" r="8" fill="#FBBF24"/>
                  
                  {/* Legs */}
                  <rect x="180" y="238" width="18" height="40" rx="9" fill="#1E40AF"/>
                  <rect x="202" y="238" width="18" height="40" rx="9" fill="#1E40AF"/>
                  
                  {/* Connection Lines with Animation */}
                  <path d="M260 250 Q290 240 320 220" stroke="#60A5FA" strokeWidth="3" strokeDasharray="8,4" fill="none">
                    <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M260 235 Q290 225 320 200" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6,3" fill="none">
                    <animate attributeName="stroke-dashoffset" values="0;9" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Floating Tech Elements */}
                  <g opacity="0.6">
                    <rect x="100" y="80" width="20" height="20" rx="3" fill="#60A5FA" transform="rotate(15 110 90)">
                      <animateTransform attributeName="transform" type="rotate" values="15 110 90;25 110 90;15 110 90" dur="4s" repeatCount="indefinite"/>
                    </rect>
                    <circle cx="350" cy="90" r="8" fill="#93C5FD">
                      <animate attributeName="cy" values="90;80;90" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <polygon points="120,320 135,310 135,330" fill="#60A5FA">
                      <animateTransform attributeName="transform" type="rotate" values="0 127.5 320;10 127.5 320;0 127.5 320" dur="3.5s" repeatCount="indefinite"/>
                    </polygon>
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Smooth Slanted Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-24 md:h-32" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            fill="#ffffff"
          >
            <path d="M0,0 L1200,60 L1200,120 L0,120 Z"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ITHero;
