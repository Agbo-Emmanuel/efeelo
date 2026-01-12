import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiTruck, FiBox, FiCheckCircle } from "react-icons/fi";
import { FaShip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero_image.jpg";

const Home = () => {
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
      title: "Warehousing",
      description: "Secure storage and distribution services tailored for international and local enterprises.",
      icon: <FiCheckCircle className="text-3xl" />,
    },
    {
      title: "Haulage Logistics",
      description: "Reliable inland transportation and distribution network across Nigeria.",
      icon: <FiTruck className="text-3xl" />,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
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

        <div className="container mx-auto px-6 relative z-10 pt-24 pb-20 md:pt-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-gold font-bold text-sm tracking-widest uppercase mb-4">Precision & Professionalism</h4>
              <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight mb-6">
                Your Global Partner in <span className="text-gold">Logistics Excellence</span>
              </h1>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl">
                EFEELO International Logistics is a leading provider of customs clearance, freight forwarding, and supply-chain solutions with over a decade of proven expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-4xl font-bold flex items-center justify-center space-x-2 transition-all transform hover:translate-y-[-2px] shadow-lg shadow-gold/20"
                >
                  <span>Our Services</span>
                  <FiArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-4xl font-bold flex items-center justify-center transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-navy leading-tight">
                A Decade of Proven <br />
                <span className="text-gold underline decoration-2 underline-offset-8">Industry Experience</span>
              </h2>
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-gold pl-6">
                "Our passion is to source, move, clear, and deliver your cargo with precision and professionalism—directly to your doorstep."
              </p>
              <p className="text-gray-600 leading-relaxed">
                At EFEELO, we place our clients’ business objectives at the center of everything we do. Our extensive global network enables us to provide unmatched efficiency and cargo security.
              </p>
              <div className="pt-4">
                <Link to="/about" className="text-navy font-bold flex items-center space-x-2 hover:text-gold transition-colors">
                  <span>Learn More About Us</span>
                  <FiArrowRight />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-4xl font-black text-navy mb-2">10+</h3>
                <p className="text-sm font-bold text-gray-500 uppercase">Years Experience</p>
              </div>
              <div className="bg-navy p-8 rounded-2xl border border-navy shadow-2xl">
                <h3 className="text-4xl font-black text-gold mb-2">100%</h3>
                <p className="text-sm font-bold text-white/50 uppercase">Reliability Rate</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-4xl font-black text-navy mb-2">24/7</h3>
                <p className="text-sm font-bold text-gray-500 uppercase">Cargo Security</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-4xl font-black text-navy mb-2">Global</h3>
                <p className="text-sm font-bold text-gray-500 uppercase">Partner Network</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-navy mb-4">Our Comprehensive Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            Purposefully designed to meet the dynamic demands of modern trade and logistics across international trade corridors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-2xl transition-all group text-left"
              >
                <div className="w-16 h-16 bg-navy text-gold rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;