
import { ArrowRight, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Website Subscriber",
        from_email: email,
        message: `New subscription request from the website footer.`,
        to_name: 'IT Carolina Team',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="footer" className="bg-blue-900 text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-blue-800">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">IT Carolina</h2>
            <p className="text-blue-200 mb-6">
              IT Carolina provides comprehensive IT support and services for businesses across South Carolina. From network security to cloud solutions, we're your trusted technology partner.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-300" />
                <a href="tel:+18001234567" className="text-blue-200 hover:text-white transition-colors">
                  (800) 123-4567
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
                  123 Tech Lane, Charleston, SC 29401
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-blue-200 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-blue-200 mb-4">Subscribe to our newsletter for IT tips and updates</p>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-blue-800 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-white placeholder-blue-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
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
