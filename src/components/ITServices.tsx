
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { 
  ArrowRight, Computer, Network, Shield, Printer, Database,
  Globe, Server, Mail, Clock
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4">
        <div className="inline-block p-3 bg-blue-50 rounded-lg">
          <div className={`transform transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
            {icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <Link 
        to={link}
        className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors text-sm"
      >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </motion.div>
  );
};

const ITServices = () => {
  const homeServices = [
    {
      icon: <Computer className="w-10 h-10 text-blue-500" />,
      title: "PC & Laptop Tune-Up",
      description: "We'll remove bloatware, optimize Windows/Mac for top speed, and enhance overall performance.",
      link: "/services/home-office#pc-tuneup"
    },
    {
      icon: <Network className="w-10 h-10 text-blue-500" />,
      title: "Network & Wi-Fi Help",
      description: "We'll map, relocate routers, and secure your home network—no more dropped Zoom calls.",
      link: "/services/home-office#wifi-help"
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      title: "Virus & Malware Removal",
      description: "We perform deep scans, quarantine threats, and set up ongoing protection for your devices.",
      link: "/services/home-office#virus-removal"
    },
    {
      icon: <Printer className="w-10 h-10 text-blue-500" />,
      title: "Printer & Peripheral Support",
      description: "Our on-site visits include driver installs, network printing setup, and scanner calibration.",
      link: "/services/printer"
    },
    {
      icon: <Database className="w-10 h-10 text-blue-500" />,
      title: "Data Backup & Recovery",
      description: "We'll configure automated backup solutions and recover what's already gone whenever possible.",
      link: "/services/home-office#data-backup"
    }
  ];
  
  const businessServices = [
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "One-Page Websites & Landing Pages",
      description: "Professional, responsive websites designed to convert visitors into customers.",
      link: "/services/web-hosting#one-page"
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Multi-Page Websites & WordPress",
      description: "Custom-designed WordPress sites with easy content management for your business.",
      link: "/services/web-hosting#multi-page"
    },
    {
      icon: <Mail className="w-10 h-10 text-blue-500" />,
      title: "Domain Registration & Business Email",
      description: "Get @yourcompany.com email with Microsoft 365 or Google Workspace integration.",
      link: "/services/web-hosting#domain-email"
    },
    {
      icon: <Server className="w-10 h-10 text-blue-500" />,
      title: "Managed Hosting & SSL Certificates",
      description: "Secure, reliable hosting with automatic updates, backups, and SSL security.",
      link: "/services/web-hosting#managed-hosting"
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      title: "Network Security & Firewall Configuration",
      description: "Protect your business data with enterprise-grade security scaled for small businesses.",
      link: "/services/business#network-security"
    },
    {
      icon: <Database className="w-10 h-10 text-blue-500" />,
      title: "Managed Backups & Disaster Recovery",
      description: "Daily backups to local or cloud, with rapid recovery to protect your business data.",
      link: "/services/business#managed-backups"
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-500" />,
      title: "Ongoing Support Plans",
      description: "Monthly subscription with priority response, remote assistance, and discounted visits.",
      link: "/services/business#support-plans"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-10">
          <motion.div 
            className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold mb-4 text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            IT Solutions for Everyone
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide jargon-free support for both home users and small businesses in Charlotte, NC.
          </motion.p>
        </div>
        
        {/* Services for Home & Home-Office Users */}
        <div id="home-services" className="mb-16">
          <motion.h3 
            className="text-2xl font-bold mb-8 text-blue-800 border-b border-blue-100 pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Services for Home & Home-Office Users
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service, index) => (
              <ServiceCard
                key={`home-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={0.3 + (index * 0.1)}
              />
            ))}
          </div>
        </div>
        
        {/* Services for Small Businesses & LLCs */}
        <div id="business-services">
          <motion.h3 
            className="text-2xl font-bold mb-8 text-blue-800 border-b border-blue-100 pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Services for Small Businesses & LLCs
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((service, index) => (
              <ServiceCard
                key={`business-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={0.3 + (index * 0.1)}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <motion.p 
            className="text-gray-700 font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Looking for a customized IT solution for your home or business?
          </motion.p>
          <motion.button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ITServices;
