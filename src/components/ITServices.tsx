
import { useState } from 'react';
import { Monitor, Shield, Wifi, Printer, Globe, Users, Home, Building, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ITServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Computer Repair & Tune-up",
      description: "Fix slow computers, remove viruses, and optimize performance for home and office users."
    },
    {
      icon: <Wifi className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Network & Wi-Fi Setup",
      description: "Professional network installation, Wi-Fi troubleshooting, and small office network configuration."
    },
    {
      icon: <Printer className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Printer Support",
      description: "Printer installation, troubleshooting offline printers, and peripheral device support."
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Data Backup & Recovery",
      description: "Protect your important files with reliable backup solutions and recover deleted data."
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Website Design & Hosting",
      description: "One-page to small multi-page websites, domain setup, SSL certificates, and reliable hosting."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Business Email Setup",
      description: "Microsoft 365 and Google Workspace setup for professional business communication."
    },
    {
      icon: <Home className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Home Office Support",
      description: "Complete home office IT setup including computers, printers, and network connectivity."
    },
    {
      icon: <Building className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Small Business IT",
      description: "Comprehensive IT support for small businesses and startups in the Charlotte area."
    },
    {
      icon: <Monitor className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Ongoing Support Plans",
      description: "Flat-rate subscription tiers for continuous IT support and maintenance services."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-3xl font-bold mb-4">IT Solutions for Everyone</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From "my computer's slow" to "I need a simple one-page website" — we've got you covered. 
            We provide friendly, jargon-free IT support for both home users and small businesses in Charlotte, NC.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="mb-4">
                <div 
                  className="inline-block p-3 bg-blue-50 rounded-lg transition-all duration-300"
                >
                  <div className={`transform transition-transform duration-300 ${hoveredService === index ? 'scale-110' : ''}`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 font-medium mb-4">
            Looking for a customized IT solution for your home or business?
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ITServices;
