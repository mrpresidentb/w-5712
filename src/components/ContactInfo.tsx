
import React from 'react';
import { Mail, Linkedin, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
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
                  <a href="tel:+18001234567" className="font-medium text-blue-900 hover:text-blue-700">
                    (800) 123-4567
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
                  <p className="text-sm text-gray-600">Visit our office</p>
                  <p className="font-medium text-blue-900">
                    123 Tech Lane, Charleston, SC 29401
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Support Hours</p>
                  <p className="font-medium text-blue-900">
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-medium mb-4 text-gray-800">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-full transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-6 text-blue-900">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
