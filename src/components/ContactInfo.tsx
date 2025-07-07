
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "../hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone || 'Not provided',
        message: formData.message
      };
      
      console.log('Sending email with params:', templateParams);
      
      // Use the correct EmailJS send method with all required parameters
      const result = await emailjs.send(
        'service_dz6gzno',     // Service ID
        'template_lykvrgc',    // Template ID
        templateParams,        // Template parameters
        'h9E6sJhuwXi9wo0ui'   // Public key (User ID)
      );
      
      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try calling us at (704) 520-0809 or email support@itcarolina.us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-gray-100 text-gray-800 relative py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Contact Our IT Support Team
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our IT support services? Need help with a technical issue? Our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-6 text-blue-900">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call us at</p>
                  <a href="tel:+17045200809" className="font-medium text-blue-900 hover:text-blue-700">
                    (704) 520-0809
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email us at</p>
                  <a href="mailto:support@itcarolina.us" className="font-medium text-blue-900 hover:text-blue-700">
                    support@itcarolina.us
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Address (appointment required)</p>
                  <p className="font-medium text-blue-900">3540 Toringdon Way, Suite 200<br />Charlotte, NC 28277</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-6 text-blue-900">Send Us a Message</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="(123) 456-7890"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="How can we help you?"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
