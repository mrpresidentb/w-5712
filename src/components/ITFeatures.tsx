
import { Check, Shield, Clock, Wrench, MapPin, DollarSign, Users, AlertCircle } from "lucide-react";

const ITFeatures = () => {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      title: "Transparent, Flat-Rate Pricing",
      description: "No hourly rates or surprise fees. You know exactly what you'll pay before we start.",
      highlight: true
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Local Charlotte Focus",
      description: "We're part of your Charlotte community and understand the unique needs of local residents and small businesses."
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Same-Day Emergency Service",
      description: "When computer problems threaten your productivity, our team responds quickly to get you back up and running."
    }
  ];

  const commonProblems = [
    "My computer is running really slow",
    "I think I have a virus or malware",
    "My Wi-Fi keeps dropping out",
    "My printer says it's offline but it's plugged in",
    "I accidentally deleted important files",
    "I need a professional website for my small business",
    "How can I set up email for my business domain?",
    "I need help backing up my important data"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
            Why Choose Our Local Computer Service Team?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Whether you need a computer repair technician near you or comprehensive IT services for your small business, our certified professionals understand that tech problems can be frustrating. We've built our computer support services around transparency, reliability, and experienced customer service throughout the Charlotte metro area.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-lg shadow-sm border ${
                  feature.highlight ? 'border-green-200 bg-green-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Our team of qualified technicians has over <strong>15 years of combined experience</strong> helping Charlotte residents and small businesses with everything from computer repair and virus removal to professional web design.
            </p>
            <a 
              href="/about" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn more about our local team →
            </a>
          </div>
        </div>

        {/* Common Problems Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Common Computer Problems We Solve Daily
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {commonProblems.map((problem, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">"{problem}"</span>
              </div>
            ))}
          </div>
          
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pricing" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                View Our Service Pricing →
              </a>
              <a 
                href="/services/printer" 
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Printer Support Services →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITFeatures;
