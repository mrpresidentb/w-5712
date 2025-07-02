
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-900 text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-blue-800">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">IT Carolina</h2>
            <p className="text-blue-200 mb-6">
              IT Carolina provides comprehensive IT support and services for home users and small businesses in Charlotte, NC. From computer repair to web design, we're your trusted technology partner.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-300" />
                <a href="tel:+17045200809" className="text-blue-200 hover:text-white transition-colors">
                  (704) 520-0809
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-300" />
                <a href="mailto:support@itcarolina.us" className="text-blue-200 hover:text-white transition-colors">
                  support@itcarolina.us
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-300" />
                <span className="text-blue-200">
                  3540 Toringdon Way, Suite 200<br />
                  Charlotte, NC 28277
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-blue-200 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/privacy-policy" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IT Carolina. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-blue-300 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-blue-300 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
