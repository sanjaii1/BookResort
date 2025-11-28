import React from 'react';
import { Bed, Mountain, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Bed className="w-12 h-12 text-primary mb-4" />,
      title: 'Luxury Accommodation',
      description: 'Experience world-class comfort in our spacious suites with breathtaking views and premium amenities.',
    },
    {
      icon: <Mountain className="w-12 h-12 text-primary mb-4" />,
      title: 'Adventure Activities',
      description: 'Embark on thrilling adventures including hiking, water sports, and guided nature tours.',
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary mb-4" />,
      title: 'Wellness & Spa',
      description: 'Rejuvenate your mind and body with our exclusive spa treatments and yoga sessions.',
    },
  ];

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the perfect blend of luxury, adventure, and relaxation at OasisStay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-50 rounded-full mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
