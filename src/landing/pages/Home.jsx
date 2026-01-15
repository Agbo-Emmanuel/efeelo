import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiTruck, FiBox, FiCheckCircle, FiChevronRight, FiChevronLeft, FiShoppingBag, FiCoffee } from "react-icons/fi";
import { FaWineGlass, FaShip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero_image.jpg";
import wineImage from "../../assets/wine_image.jpg";
import restaurant_image from "../../assets/restaurant_image.jpg";
import kitchenImage from "../../assets/kitchen_image.avif";
import beefImage from "../../assets/beef_image.avif";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [

     {
      id: 1,
      image: wineImage,
      subtitle: "Premium Selection",
      title: "Finest Wines &",
      highlight: "Spirits Distribution",
      description: "Authorised distributors of premium wines and spirits. We curate and deliver exceptional collections to hotels, lounges, and retailers.",
      cta: "Explore Wines",
    },
    {
      id: 2,
      image: restaurant_image,
      subtitle: "Hospitality Solutions",
      title: "One-Stop Shop for",
      highlight: "Hotels & Restaurants",
      description: "Dedicated procurement partner for hotels and restaurants. We source and deliver everything from guest amenities to essential operational supplies.",
      cta: "View Solutions",
    },
    {
      id: 3,
      image: kitchenImage,
      subtitle: "Professional Grade",
      title: "Premium Kitchen",
      highlight: "Utensils & Equipment",
      description: "High-quality culinary tools and industrial kitchen equipment for professional chefs and home cooks alike.",
      cta: "View Catalog",
    },
    {
      id: 4,
      image: beefImage,
      subtitle: "Fresh & Reliable",
      title: "Premium Food &",
      highlight: "Cold Chain Supply",
      description: "Reliable sourcing and delivery of imported meats and food products, handled with verified cold-chain integrity.",
      cta: "Contact Us",
    },

    {
      id: 5,
      image: heroImage,
      subtitle: "Precision & Professionalism",
      title: "Your Global Partner in",
      highlight: "Logistics Excellence",
      description: "EFEELO International Logistics is a leading provider of customs clearance, freight forwarding, and supply chain solutions with over a decade of proven expertise.",
      cta: "Our Services",
    },
   
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const services = [
    {
      title: "Wine Distribution",
      description: "Curated supply of premium international wines and spirits for retailers and hospitality businesses.",
      icon: <FaWineGlass className="md:text-3xl text-xl" />,
    },

    {
      title: "Supermarket Provisioning",
      description: "Reliable sourcing of imported food products, meats, and retail goods.",
      icon: <FiShoppingBag className="md:text-3xl text-xl" />,
    },

    {
      title: "Hospitality Supply",
      description: "End-to-end procurement of kitchen equipment and operational essentials for hotels.",
      icon: <FiCoffee className="md:text-3xl text-xl" />,
    },
    
    {
      title: "Air & Sea Freight",
      description: "Global logistics solutions ensuring your cargo reaches its destination via the most efficient routes.",
      icon: <FaShip className="md:text-3xl text-xl" />,
    },
    {
      title: "Customs Clearance",
      description: "Expert brokerage services to navigate complex regulations and ensure compliant trade.",
      icon: <FiBox className="md:text-3xl text-xl" />,
    },

    {
      title: "Warehousing",
      description: "Secure storage and distribution services tailored for international and local enterprises.",
      icon: <FiCheckCircle className="md:text-3xl text-xl" />,
    },
    {
      title: "Haulage Logistics",
      description: "Reliable inland transportation and distribution network across Nigeria.",
      icon: <FiTruck className="md:text-3xl text-xl" />,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Carousel Section */}
      <section className="relative min-h-screen overflow-hidden bg-navy">
        {/* Background Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        </AnimatePresence>
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `
              linear-gradient(to right, #001F3F 40%, rgba(0,31,63,0.85) 55%, rgba(0,31,63,0.2) 100%),
              radial-gradient(circle at 80% 50%, transparent 0%, rgba(0,31,63,0.5) 100%)
            `
          }}
        />

        <div className="absolute inset-0 opacity-20 z-10 pointer-events-none">
           <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gold rounded-full blur-[150px]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20 h-screen flex items-center pt-20">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-gold font-bold text-sm tracking-widest uppercase mb-4">
                  {slides[currentSlide].subtitle}
                </h4>
                <h1 className="text-2xl md:text-5xl text-white font-bold leading-tight mb-6">
                  {slides[currentSlide].title} <span className="text-gold block">{slides[currentSlide].highlight}</span>
                </h1>
                <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl">
                  {slides[currentSlide].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services"
                    className="bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-4xl font-bold flex items-center justify-center space-x-2 transition-all transform hover:translate-y-[-2px] shadow-lg shadow-gold/20"
                  >
                    <span>{slides[currentSlide].cta}</span>
                    <FiArrowRight />
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-transparent border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-4xl font-bold flex items-center justify-center transition-all hover:bg-white/5"
                  >
                    Get a Quote
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-10 right-10 z-30 flex items-center gap-6">
           <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "bg-gold w-8" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
           </div>
           <div className="flex gap-2">
             <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-navy transition-all">
               <FiChevronLeft size={20} />
             </button>
             <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-navy transition-all">
               <FiChevronRight size={20} />
             </button>
           </div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-14 md:py-24 bg-navy/5"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-navy leading-tight">
                A Decade of Proven <br />
                <span className="text-gold underline decoration-2 underline-offset-8">Industry Experience</span>
              </h2>
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-gold pl-6">
                "Our passion is to source, move, clear, and deliver your cargo with precision and professionalism directly to your doorstep."
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
              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl md:text-4xl font-black text-navy mb-2 text-center">10+</h3>
                <p className="text-sm font-bold text-gray-500 uppercase text-center">Years Experience</p>
              </div>
              <div className="bg-navy p-8 rounded-2xl border border-navy shadow-2xl">
                <h3 className="text-2xl md:text-4xl font-black text-gold mb-2 text-center">100%</h3>
                <p className="text-sm font-bold text-white/50 uppercase text-center">Reliability Rate</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl md:text-4xl font-black text-navy mb-2 text-center">24/7</h3>
                <p className="text-sm font-bold text-gray-500 uppercase text-center">Cargo Security</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl md:text-4xl font-black text-navy mb-2 text-center">Global</h3>
                <p className="text-sm font-bold text-gray-500 uppercase text-center">Partner Network</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* NEW: Process/Value Timeline Section */}
      <section className="py-14 md:py-24 bg-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 opacity-50 -z-0" />
         <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-20">
             <h2 className="text-base md:text-lg font-bold text-gold tracking-widest uppercase mb-4">How We Deliver Value</h2>
             <h3 className="text-2xl md:text-4xl font-bold text-navy">Integrated Logistics & Supply Chain</h3>
             <p className="text-gray-500 max-w-2xl mx-auto mt-4">We handle the complexities of international trade so you can focus on growing your business.</p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-2 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-300 -z-10" />

              {[
                { step: "01", title: "Consultation", desc: "Understanding your specific cargo or procurement needs." },
                { step: "02", title: "Global Sourcing", desc: "Leveraging our network to find the best products & routes." },
                { step: "03", title: "Logistics & Clearing", desc: "Handling freight, documentation, and customs compliance." },
                { step: "04", title: "Doorstep Delivery", desc: "Secure and timely delivery to your warehouse or facility." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-4 md:p-8 pt-0 relative"
                >
                  <div className="w-24 h-24 bg-navy text-gold font-black text-3xl flex items-center justify-center rounded-full border-8 border-white shadow-xl mb-6 mx-auto md:mx-0">
                    {item.step}
                  </div>
                  <h4 className="text-base md:text-xl font-bold text-navy mb-3 md:text-left text-center">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed md:text-left text-center">{item.desc}</p>
                </motion.div>
              ))}
           </div>
         </div>
      </section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-14 md:py-24 bg-navy/5"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-navy mb-4">Our Comprehensive Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            Purposefully designed to meet the dynamic demands of modern trade and logistics across international trade corridors.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white md:p-8 p-3 flex flex-col items-center md:items-left rounded-2xl border border-gray-200 hover:border-gold/30 hover:shadow-2xl transition-all group text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                
                <div className="w-12 h-12 md:w-16 md:h-16 bg-navy text-gold rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 shadow-lg shadow-navy/20 relative z-10">
                  {service.icon}
                </div>
                
                <h3 className="md:text-xl text-base font-bold text-navy md:text-left text-center mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                
                <p className="text-gray-500 md:text-sm text-xs leading-relaxed mb-6 md:text-left text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;