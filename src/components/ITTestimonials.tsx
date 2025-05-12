
import { useState } from "react";
import { Star } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";

const ITTestimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      company: "Carolina Marketing Group",
      role: "CEO",
      content: "The IT support we've received has been exceptional. Their team is always responsive and they've helped us upgrade our entire network infrastructure with minimal disruption to our operations.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      company: "Palmetto Legal Services",
      role: "Managing Partner",
      content: "As a law firm, security is our top priority. Their cybersecurity solutions give us peace of mind knowing our client data is protected. The 24/7 support is invaluable.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Atlantic Healthcare",
      role: "IT Director",
      content: "Their cloud migration services were exactly what we needed. The team guided us through every step of the process and provided training for our staff. Highly recommended!",
      rating: 5
    },
    {
      name: "Jessica Rodriguez",
      company: "Coastal Manufacturing",
      role: "Operations Manager",
      content: "We've been using their managed IT services for three years now, and it's been transformative for our business. Problems are resolved quickly, and their proactive approach has prevented many issues.",
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block mb-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CLIENT TESTIMONIALS
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what businesses across Carolina have to say about our IT support services.
          </motion.p>
          <div className="flex justify-center mb-8">
            <Separator className="w-24 bg-gray-200" />
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <motion.div 
                    className="bg-white rounded-xl shadow-lg p-8 m-2 border border-gray-100 h-full flex flex-col relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="absolute top-4 right-4 text-blue-100 opacity-30">
                      <svg 
                        className="w-16 h-16" 
                        fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                      </svg>
                    </div>
                    
                    <div className="flex mb-6 z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i + testimonial.rating} className="w-5 h-5 text-gray-300" />
                      ))}
                    </div>
                    <div className="flex-grow z-10">
                      <p className="text-gray-700 italic mb-6">{testimonial.content}</p>
                    </div>
                    <div className="border-t border-gray-100 pt-4 mt-4 z-10">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-10 gap-4">
              <CarouselPrevious className="static transform-none hover:bg-blue-50" />
              <CarouselNext className="static transform-none hover:bg-blue-50" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ITTestimonials;
