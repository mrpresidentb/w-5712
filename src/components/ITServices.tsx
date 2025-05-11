
import { useState } from 'react';
import { Shield, Server, Headphones, Settings, Database, Code, Cloud, Monitor, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ITServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "IT Consulting",
      description: "Strategic technology planning and advice to align IT with your business goals."
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Network Security",
      description: "Advanced protection systems to safeguard your sensitive data and infrastructure."
    },
    {
      icon: <Server className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "IT Infrastructure",
      description: "Design and maintenance of robust, scalable network and server environments."
    },
    {
      icon: <Headphones className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Helpdesk Support",
      description: "Responsive technical assistance for day-to-day IT challenges and questions."
    },
    {
      icon: <Cloud className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Cloud Services",
      description: "Secure, flexible cloud solutions for storage, backup, and application hosting."
    },
    {
      icon: <Database className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Data Backup",
      description: "Reliable backup solutions ensuring your critical business data is never lost."
    },
    {
      icon: <Code className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Software Development",
      description: "Custom business applications and integrations tailored to your specific needs."
    },
    {
      icon: <Cpu className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Hardware Support",
      description: "Procurement, installation, and maintenance for all your hardware components."
    },
    {
      icon: <Settings className="w-10 h-10 text-blue-500 transition-transform duration-300" />,
      title: "Managed IT Services",
      description: "Comprehensive IT management allowing you to focus on your core business."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-3xl font-bold mb-4">IT Solutions for Your Business</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive IT support and services to help your business thrive in the digital world.
            From hardware to software, security to cloud services, we've got you covered.
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
            Looking for a customized IT solution for your business?
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
