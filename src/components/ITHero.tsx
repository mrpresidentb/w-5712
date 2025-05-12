
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ITHero = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Fast, Friendly IT Help for Home Users & Small Businesses in Charlotte, NC
            </motion.h1>
            
            <motion.p
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From "my computer's slow" to "I need a simple one-page website" — we've got you covered.
            </motion.p>
          </div>
          
          <div className="flex flex-col md:items-start space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full md:max-w-xs"
            >
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg flex items-center justify-center"
                onClick={() => scrollToElement('contact')}
              >
                Book a Visit
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full md:max-w-xs"
            >
              <Button 
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-100 py-6 text-lg flex items-center justify-center"
                onClick={() => scrollToElement('pricing')}
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITHero;
