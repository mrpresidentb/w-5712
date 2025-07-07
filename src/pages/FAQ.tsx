import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I find the best computer repair technician near me?",
      answer: "Look for local computer repair shops with certified technicians, transparent pricing, good reviews, and same-day service availability. IT Carolina serves the Charlotte metro area with experienced technicians who provide upfront quotes and quality repairs for both PC and Mac systems. Learn more about our team and approach on our About Us page.",
      relatedLinks: [{ text: "About Our Team", url: "/about" }]
    },
    {
      question: "What computer repair services do you offer?",
      answer: "Our comprehensive computer repair services include virus and malware removal, performance optimization, hardware repairs, software installation, data recovery, operating system repairs, and hardware upgrades. We service both Windows PCs and Apple computers for home users throughout Charlotte.",
      relatedLinks: [{ text: "Home & Home-Office Support", url: "/services/home-office" }]
    },
    {
      question: "How much does computer repair cost in Charlotte?",
      answer: "Our computer repair services start at $99 for diagnostics and estimates. We provide flat-rate pricing for most services including virus removal ($149), performance tune-ups ($129), and data recovery (starting at $199). No hidden fees or hourly charges. View our complete pricing structure for transparent costs.",
      relatedLinks: [{ text: "View Our Pricing", url: "/pricing" }]
    },
    {
      question: "What areas do you serve for computer repair near me?",
      answer: "We provide computer repair services throughout the Charlotte metro area including Uptown, South End, NoDa, University City, Ballantyne, SouthPark, Dilworth, Myers Park, Plaza Midwood, and surrounding communities. We offer both on-site visits and in-shop repairs to serve our local community effectively."
    },
    {
      question: "Do you offer Dell computer support and other brand repairs?",
      answer: "Yes, we provide Dell computer support along with repairs for HP, Lenovo, ASUS, Acer, and all major computer brands. Our technicians are experienced with desktop and laptop repairs for both consumer and business systems. Whether you need printer support or complete system repairs, we handle all major brands.",
      relatedLinks: [{ text: "Printer & Peripheral Support", url: "/services/printer" }]
    },
    {
      question: "What's included in your personal computer repair service?",
      answer: "Our personal computer repair service includes complete diagnostics, virus/malware removal, performance optimization, hardware repairs or replacements, software installation, data backup and recovery, and system security setup. We explain everything in plain English so you understand exactly what we're doing and why."
    },
    {
      question: "How quickly can you provide computer help near me?",
      answer: "We offer same-day computer help for urgent issues and typically schedule on-site visits within 24-48 hours. For immediate assistance, we also provide remote computer support for software-related problems that can be resolved online. Contact us at (704) 520-0809 for emergency support."
    },
    {
      question: "Do you provide computer support services for small businesses?",
      answer: "Absolutely! Our computer support services for small businesses include network setup, server maintenance, managed IT support, security solutions, backup systems, and ongoing maintenance plans. We also offer website design and hosting solutions. We tailor our services to fit your business needs and budget.",
      relatedLinks: [
        { text: "Small Business IT Support", url: "/services/business" },
        { text: "Web & Hosting Solutions", url: "/services/web-hosting" }
      ]
    },
    {
      question: "Where can I find computer repair shops near me in Charlotte?",
      answer: "IT Carolina is conveniently located in Charlotte and serves the entire metro area. Unlike chain stores, we provide personalized service with certified local technicians who understand your community's needs and offer competitive pricing with quality repairs. Learn more about our local approach and commitment to Charlotte."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Prepare FAQ data for structured data
  const faqStructuredData = faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <PageLayout>
      <SEO 
        title="Computer Repair FAQ | IT Support Questions | Charlotte NC"
        description="Common questions about computer repair, IT support, and technology services in Charlotte NC. Get answers about pricing, services, and local computer help."
        canonical="https://itcarolina.us/faq"
        faqData={faqStructuredData}
      />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Common questions about computer repair, IT support, and our services in Charlotte, NC
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {faq.answer}
                    </p>
                    {faq.relatedLinks && (
                      <div className="flex flex-wrap gap-3">
                        {faq.relatedLinks.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            to={link.url}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium underline"
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Still Have Questions?
            </h2>
            <p className="text-gray-700 mb-6">
              Can't find the answer you're looking for? Our friendly team is here to help with any computer or IT questions. 
              You can also learn more about our <Link to="/about" className="text-blue-600 hover:text-blue-700 underline">team and approach</Link> or 
              browse our <Link to="/pricing" className="text-blue-600 hover:text-blue-700 underline">service pricing</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17045200809"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Call (704) 520-0809
              </a>
              <a
                href="mailto:support@itcarolina.us"
                className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>

          {/* Related Services Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
              Explore Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/services/home-office" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Home & Home-Office</h3>
                <p className="text-gray-600 text-sm">PC tune-ups, virus removal, Wi-Fi setup</p>
              </Link>
              <Link to="/services/business" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Small Business IT</h3>
                <p className="text-gray-600 text-sm">Network setup, managed IT, security</p>
              </Link>
              <Link to="/services/printer" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Printer Support</h3>
                <p className="text-gray-600 text-sm">Setup, troubleshooting, repair</p>
              </Link>
              <Link to="/services/web-hosting" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Web & Hosting</h3>
                <p className="text-gray-600 text-sm">Website design, domains, email</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
