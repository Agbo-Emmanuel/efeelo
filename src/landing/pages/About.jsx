import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiEye, FiZap, FiAward, FiBox } from "react-icons/fi";

const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header Section */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl text-white mb-6">Corporate <span className="text-gold">Profile</span></h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Leading provider of customs clearance, freight forwarding, and supply-chain solutions with over a decade of proven industry experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  EFEELO International Logistics has consistently delivered reliable, compliant, and cost-effective logistics services on behalf of our diverse clientele. Our extensive global network of partners, agents, and licensed brokers enables us to provide unmatched efficiency, speed, cargo security, and operational flexibility across international trade corridors.
                </p>
                <p>
                  Our customer portfolio spans small and medium-sized enterprises to major corporate organizations, including banks and financial institutions, hotels, restaurants, lounges, nightclubs, power supply companies, and wine and liqueur distributors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-gold">
                  <FiTarget className="text-3xl text-navy mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-2">Our Mission</h3>
                  <p className="text-sm text-gray-500">To provide seamless end-to-end logistics solutions that empower businesses to grow globally.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-gold">
                  <FiEye className="text-3xl text-navy mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-2">Our Vision</h3>
                  <p className="text-sm text-gray-500">To be the most trusted name in International trade corridors across Africa and beyond.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-navy rounded-3xl p-10 text-white relative z-10">
                <h3 className="text-2xl font-bold text-gold mb-6 italic">"Our passion is to source, move, clear, and deliver your cargo with precision and professionalism—directly to your doorstep."</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-gold text-2xl font-bold">AR</div>
                  <div>
                    <h4 className="font-bold">Adaimoni Roland</h4>
                    <p className="text-gold text-sm">Managing Director / CEO</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gold/10 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Advantage */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Strategic Advantage</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Specific expertise that sets us apart in the logistics landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <FiZap className="text-gold text-2xl mb-4" />
              <h3 className="font-bold text-navy mb-4 text-lg">Hospitality Specialist</h3>
              <p className="text-sm text-gray-500">Deep understanding of hotels, restaurants, lounges, and nightclub logistics requirements.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <FiAward className="text-gold text-2xl mb-4" />
              <h3 className="font-bold text-navy mb-4 text-lg">Retail Excellence</h3>
              <p className="text-sm text-gray-500">Expertise in handling supermarkets, wine distribution, and imported meats supply chains.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <FiBox className="text-gold text-2xl mb-4" />
              <h3 className="font-bold text-navy mb-4 text-lg">Operational Flexibility</h3>
              <p className="text-sm text-gray-500">Fast, secure, and economical delivery tailored to dynamic trade demands.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
