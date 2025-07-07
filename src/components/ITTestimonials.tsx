
import { useState } from "react";
import { Star } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "./ui/carousel";

const ITTestimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Small Business Owner",
      content: "The IT support we've received has been exceptional. Their team is always responsive and they've helped us upgrade our entire network infrastructure with minimal disruption to our operations.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Attorney",
      content: "As a legal professional, security is my top priority. Their cybersecurity solutions give me peace of mind knowing my client data is protected. The 24/7 support is invaluable.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Healthcare Administrator",
      content: "Their cloud migration services were exactly what we needed. The team guided us through every step of the process and provided training for our staff. Highly recommended!",
      rating: 5
    },
    {
      name: "Jessica Rodriguez",
      role: "Operations Manager",
      content: "We've been using their managed IT services for three years now, and it's been transformative for our business. Problems are resolved quickly, and their proactive approach has prevented many issues.",
      rating: 4
    },
    {
      name: "Robert Kim",
      role: "Startup Founder",
      content: "Setting up our office network seemed overwhelming until we found IT Carolina. They made the whole process simple and affordable. Our team can now work efficiently from day one.",
      rating: 5
    },
    {
      name: "Emily Carter",
      role: "Home Office User",
      content: "My computer was running incredibly slow and I thought I'd need to buy a new one. They cleaned it up, removed all the viruses, and now it runs like new. Saved me hundreds of dollars!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Client Testimonials
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what home users and small businesses across Charlotte have to say about our IT support services.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full flex flex-col group">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i + testimonial.rating} className="w-5 h-5 text-gray-200" />
                      ))}
                    </div>
                    
                    <div className="flex-grow mb-6">
                      <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                          <p className="text-blue-600 font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static transform-none bg-white border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 text-blue-600" />
              <CarouselNext className="static transform-none bg-white border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 text-blue-600" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to join our satisfied clients?
          </p>
          <a 
            href="tel:+17045200809" 
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ITTestimonials;
