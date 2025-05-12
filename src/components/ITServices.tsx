
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
  bgColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay = 0, bgColor = "bg-white" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className={`${bgColor} rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-8 border border-gray-100`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-5">
        <div className="inline-block p-4 bg-blue-50 rounded-lg">
          <div className={`transform transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
            {icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-blue-900">{title}</h3>
      <p className="text-gray-600 mb-4 min-h-[80px]">{description}</p>
      <Link 
        to={link}
        className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors text-sm group"
      >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block mb-3 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold mb-4 text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            IT Solutions for Everyone
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide jargon-free support for both home users and small businesses in Charlotte, NC.
          </motion.p>
        </div>
        
        {/* Services for Home & Home-Office Users */}
        <div id="home-services" className="mb-24 bg-gray-50 py-16 px-6 rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4 text-blue-800">Services for Home & Home-Office Users</h3>
            <p className="text-lg text-gray-600">
              Fast and reliable help for your tech at home or in your home office.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service, index) => (
              <ServiceCard
                key={`home-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={0.3 + (index * 0.1)}
                bgColor="bg-white"
              />
            ))}
          </div>
        </div>
        
        {/* Services for Small Businesses & LLCs */}
        <div id="business-services" className="bg-white py-16 px-6 rounded-2xl border border-gray-100 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4 text-blue-800">Services for Small Businesses & LLCs</h3>
            <p className="text-lg text-gray-600">
              Scalable web and IT support tailored for small businesses and startups.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <ServiceCard
                key={`business-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={0.3 + (index * 0.1)}
                bgColor="bg-gray-50"
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <motion.p 
            className="text-gray-700 font-medium mb-6 text-lg"
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
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 text-lg font-medium hover:scale-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ITServices;
