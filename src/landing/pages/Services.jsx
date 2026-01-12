import React from "react";
import { motion } from "framer-motion";
import { FiAirplay, FiTruck, FiBox, FiCheckCircle, FiShield, FiGlobe, FiMapPin } from "react-icons/fi";

const Services = () => {
  const coreServices = [
    {
      title: "Air and Sea Freight",
      description: "Dedicated global shipping solutions ensuring your cargo reaches its destination efficiently via air or sea.",
      icon: <FiAirplay />,
    },
    {
      title: "Customs Clearance and Brokerage",
      description: "Hassle-free customs processing with our licensed brokers, ensuring full compliance and speed.",
      icon: <FiBox />,
    },
    {
      title: "Warehousing and Distribution",
      description: "Secure storage and smart distribution services for international enterprises and local firms.",
      icon: <FiCheckCircle />,
    },
    {
      title: "Haulage and Inland Logistics",
      description: "Efficient domestic transportation network across Nigeria for timely cargo delivery.",
      icon: <FiTruck />,
    },
    {
      title: "End-to-End Delivery Services",
      description: "Complete logistics management from procurement to final doorstep delivery.",
      icon: <FiShield />,
    },
  ];

  const tradeTerms = [
    { code: "DDP/DDU", label: "Door-to-Door", desc: "Full delivery service to your specific location." },
    { code: "FCA", label: "Free Carrier", desc: "Cargo delivery to a named place or carrier." },
    { code: "CPT", label: "Carriage Paid To", desc: "Freight charges paid to a named destination." },
    { code: "FOB", label: "Free on Board", desc: "Seller delivers when goods pass ships rail." },
    { code: "EXW", label: "Ex-Works", desc: "Goods available at sellers premises." },
    { code: "CIF", label: "Cost, Insurance, and Freight", desc: "Seller pays cost, insurance, and freight." },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl text-white mb-6">Our <span className="text-gold">Service Offerings</span></h1>
            <p className="text-gray-400 text-lg">Comprehensive and purposefully designed to meet the dynamic demands of modern trade and logistics.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold rounded-2xl flex items-center justify-center text-3xl mb-8 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Terms Section */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute right-0 bottom-0 opacity-10">
          <FiGlobe className="text-[400px] text-gold" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 text-balance">
            <h2 className="text-3xl font-bold mb-4">International Trade Terms</h2>
            <p className="text-gold uppercase tracking-widest font-bold">We operate across all major Incoterms</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradeTerms.map((term, index) => (
              <motion.div
                key={term.code}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="text-gold font-black text-2xl mb-2">{term.code}</div>
                <div className="font-bold text-lg mb-2">{term.label}</div>
                <p className="text-gray-400 text-sm">{term.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">Specialized Sector Consulting</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our deep understanding of specialized sectors gives us a strategic advantage in handling sensitive, high-value, and time-critical shipments.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {['Supermarkets', 'Wine Distribution', 'Imported Meats', 'Hotels', 'Restaurants', 'Financial Institutions'].map(item => (
                    <li key={item} className="flex items-center space-x-2 text-navy font-medium">
                      <FiCheckCircle className="text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 bg-navy/5 rounded-2xl flex items-center justify-center"><FiMapPin className="text-4xl text-navy opacity-20" /></div>
                <div className="h-48 bg-gold/5 rounded-2xl flex items-center justify-center mt-8"><FiBox className="text-4xl text-gold opacity-20" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
