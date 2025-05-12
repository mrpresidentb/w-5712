
import { MessageSquare, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show the button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  if (!isVisible) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={scrollToTop}
          className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
          size="icon"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
        
        <Button
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
          size="icon"
          aria-label="Contact Us"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingContactButton;
