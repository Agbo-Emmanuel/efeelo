import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiTruck, FiBox, FiCheckCircle, FiShield, FiGlobe, FiMapPin, FiShoppingBag, FiCoffee } from "react-icons/fi";
import { FaWineGlass, FaShip } from "react-icons/fa6";
import heroImage from "../../assets/hero_image.jpg";

const Services = () => {
  const services = [
    {
      title: "Air & Sea Freight",
      description: "Global logistics solutions ensuring your cargo reaches its destination via the most efficient routes.",
      icon: <FaShip className="text-3xl" />,
    },
    {
      title: "Customs Clearance",
      description: "Expert brokerage services to navigate complex regulations and ensure compliant trade.",
      icon: <FiBox className="text-3xl" />,
    },
    {
      title: "Wine Distribution",
      description: "Curated supply of premium international wines and spirits for retailers and hospitality businesses.",
      icon: <FaWineGlass className="text-3xl" />,
    },
    {
      title: "Hospitality Supply",
      description: "End-to-end procurement of kitchen equipment and operational essentials for hotels.",
      icon: <FiCoffee className="text-3xl" />,
    },
    {
      title: "Supermarket Provisioning",
      description: "Reliable sourcing of imported food products, meats, and retail goods.",
      icon: <FiShoppingBag className="text-3xl" />,
    },
    {
      title: "Warehousing",
      description: "Secure storage and distribution services tailored for international and local enterprises.",
      icon: <FiCheckCircle className="text-3xl" />,
    },
    {
      title: "Haulage Logistics",
      description: "Reliable inland transportation and distribution network across Nigeria.",
      icon: <FiTruck className="text-3xl" />,
    },
    {
      title: "End-to-End Delivery",
      description: "Complete logistics management from procurement to final doorstep delivery.",
      icon: <FiShield className="text-3xl" />,
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
    <div className="bg-gray-50 flex flex-col w-full">
      {/* Header */}
      <section 
        className="relative min-h-[80vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `
              linear-gradient(to right, #001F3F 40%, rgba(0,31,63,0.85) 55%, rgba(0,31,63,0.1) 100%),
              radial-gradient(circle at 80% 50%, transparent 0%, rgba(0,31,63,0.4) 100%)
            `
          }}
        />

        <div className="absolute inset-0 opacity-20 z-0">
           <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gold rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Our <span className="text-gold">Service Offerings</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Comprehensive and purposefully designed to meet the dynamic demands of modern trade and logistics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-navy/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gold/30 hover:shadow-2xl transition-all group text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                
                <div className="w-16 h-16 bg-navy text-gold rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 shadow-lg shadow-navy/20 relative z-10">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
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
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">Specialized Sector Consulting</h2>
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
              <div className="hidden md:grid grid-cols-2 gap-4">
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
