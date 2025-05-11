
import { useState } from "react";
import { Star } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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
    <section className="py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Client Testimonials
          </div>
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses across Carolina have to say about our IT support services.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="bg-white rounded-xl shadow-md p-6 m-2 border border-gray-100 h-full flex flex-col">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i + testimonial.rating} className="w-5 h-5 text-gray-300" />
                      ))}
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
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
