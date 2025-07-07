
import { ArrowRight, Phone } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[600px]">
            
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
              className="flex justify-center lg:justify-end order-first lg:order-last pr-0 lg:pr-8"
              variants={itemVariants}
            >
              <div className="relative max-w-md w-full px-4" style={{ height: '90%' }}>
                <svg 
                  viewBox="0 0 400 350" 
                  className="w-full h-auto"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="IT support specialist working on a laptop next to a server"
                >
                  {/* Background Elements */}
                  <circle cx="200" cy="175" r="160" fill="#ffffff" fillOpacity="0.08" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.15"/>
                  
                  {/* Desk/Table */}
                  <rect x="50" y="220" width="300" height="20" rx="10" fill="#E5E7EB"/>
                  <rect x="60" y="240" width="15" height="50" fill="#D1D5DB"/>
                  <rect x="325" y="240" width="15" height="50" fill="#D1D5DB"/>
                  
                  {/* Server Rack - Right Side */}
                  <rect x="280" y="120" width="80" height="100" rx="6" fill="#1E40AF" stroke="#3B82F6" strokeWidth="2"/>
                  
                  {/* Server Units */}
                  <rect x="285" y="130" width="70" height="8" rx="2" fill="#60A5FA"/>
                  <rect x="285" y="142" width="70" height="8" rx="2" fill="#60A5FA"/>
                  <rect x="285" y="154" width="70" height="8" rx="2" fill="#93C5FD"/>
                  <rect x="285" y="166" width="70" height="8" rx="2" fill="#93C5FD"/>
                  <rect x="285" y="178" width="70" height="8" rx="2" fill="#DBEAFE"/>
                  <rect x="285" y="190" width="70" height="8" rx="2" fill="#DBEAFE"/>
                  <rect x="285" y="202" width="70" height="8" rx="2" fill="#DBEAFE"/>
                  
                  {/* Server Status Lights */}
                  <circle cx="290" cy="134" r="2" fill="#10B981"/>
                  <circle cx="296" cy="134" r="2" fill="#10B981"/>
                  <circle cx="302" cy="134" r="2" fill="#F59E0B"/>
                  <circle cx="290" cy="146" r="2" fill="#10B981"/>
                  <circle cx="296" cy="146" r="2" fill="#10B981"/>
                  <circle cx="302" cy="146" r="2" fill="#10B981"/>
                  
                  {/* Laptop - Center */}
                  <rect x="120" y="190" width="100" height="60" rx="4" fill="#374151"/>
                  <rect x="125" y="195" width="90" height="50" rx="3" fill="#1F2937"/>
                  <rect x="130" y="200" width="80" height="40" rx="2" fill="#3B82F6"/>
                  
                  {/* Laptop Screen Content - Code/Dashboard */}
                  <rect x="135" y="205" width="70" height="2" rx="1" fill="#60A5FA"/>
                  <rect x="135" y="210" width="50" height="2" rx="1" fill="#93C5FD"/>
                  <rect x="135" y="215" width="65" height="2" rx="1" fill="#60A5FA"/>
                  <rect x="135" y="220" width="45" height="2" rx="1" fill="#93C5FD"/>
                  <rect x="135" y="225" width="60" height="2" rx="1" fill="#DBEAFE"/>
                  <rect x="135" y="230" width="40" height="2" rx="1" fill="#93C5FD"/>
                  
                  {/* IT Professional - Simplified Flat Design */}
                  <g transform="translate(160, 100)">
                    {/* Head */}
                    <circle cx="0" cy="0" r="18" fill="#F3E8FF" stroke="#8B5CF6" strokeWidth="1"/>
                    
                    {/* Hair */}
                    <path d="M-15 -8 Q0 -20 15 -8 Q10 -15 0 -15 Q-10 -15 -15 -8" fill="#4B5563"/>
                    
                    {/* Eyes */}
                    <circle cx="-6" cy="-2" r="1.5" fill="#1F2937"/>
                    <circle cx="6" cy="-2" r="1.5" fill="#1F2937"/>
                    
                    {/* Glasses */}
                    <circle cx="-6" cy="-2" r="5" fill="none" stroke="#6B7280" strokeWidth="1"/>
                    <circle cx="6" cy="-2" r="5" fill="none" stroke="#6B7280" strokeWidth="1"/>
                    <path d="M1 -2 L-1 -2" stroke="#6B7280" strokeWidth="1"/>
                    
                    {/* Body */}
                    <rect x="-12" y="18" width="24" height="35" rx="12" fill="#3B82F6"/>
                    
                    {/* Arms */}
                    <rect x="-25" y="25" width="13" height="8" rx="4" fill="#F3E8FF"/>
                    <rect x="12" y="25" width="13" height="8" rx="4" fill="#F3E8FF"/>
                    
                    {/* Hands positioned over laptop */}
                    <circle cx="-30" cy="90" r="4" fill="#F3E8FF"/>
                    <circle cx="30" cy="90" r="4" fill="#F3E8FF"/>
                  </g>
                  
                  {/* Network Cables/Connections */}
                  <path d="M220 210 Q250 200 280 180" stroke="#60A5FA" strokeWidth="2" strokeDasharray="4,2" fill="none" opacity="0.7">
                    <animate attributeName="stroke-dashoffset" values="0;6" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M220 200 Q250 190 280 160" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3,2" fill="none" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" values="0;5" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Floating Tech Icons */}
                  <g opacity="0.4">
                    <rect x="80" y="70" width="12" height="12" rx="2" fill="#60A5FA" transform="rotate(15 86 76)">
                      <animateTransform attributeName="transform" type="rotate" values="15 86 76;25 86 76;15 86 76" dur="4s" repeatCount="indefinite"/>
                    </rect>
                    <circle cx="320" cy="80" r="5" fill="#93C5FD">
                      <animate attributeName="cy" values="80;70;80" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <polygon points="90,280 100,275 100,285" fill="#60A5FA" opacity="0.6">
                      <animateTransform attributeName="transform" type="rotate" values="0 95 280;8 95 280;0 95 280" dur="3.5s" repeatCount="indefinite"/>
                    </polygon>
                  </g>
                  
                  {/* Subtle Grid Background */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)"/>
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
