import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend, FiClock } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl text-white mb-6">Get in <span className="text-gold">Touch</span></h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to streamline your supply chain? Contact us for a quote or consultation on your next shipment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 -mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Call Us</h4>
                  <p className="text-gray-500 text-sm">Direct Line: +234 (0) XXX XXX XXXX</p>
                  <p className="text-gray-500 text-sm">Customer Support: +234 (0) YYY YYY YYYY</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Email Us</h4>
                  <p className="text-gray-500 text-sm">Quotes: info@effeelo.com</p>
                  <p className="text-gray-500 text-sm">Admin: operations@effeelo.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Head Office Address, Lagos, Nigeria.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-navy p-8 rounded-3xl shadow-lg text-white space-y-4"
              >
                <div className="flex items-center space-x-3 text-gold">
                  <FiClock size={20} />
                  <span className="font-bold">Operating Hours</span>
                </div>
                <div className="text-sm space-y-2 opacity-80">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-gray-50"
              >
                <h2 className="text-3xl font-bold text-navy mb-8">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy">Full Name</label>
                      <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="Adaimoni Roland" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy">Email Address</label>
                      <input type="email" className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="name@company.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">Subject</label>
                    <select className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold outline-none transition-all">
                      <option>Freight Quote</option>
                      <option>Customs Clearance</option>
                      <option>Warehousing Inquiry</option>
                      <option>General Support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">Message</label>
                    <textarea rows="5" className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="bg-navy text-gold w-full py-5 rounded-xl font-bold flex items-center justify-center space-x-3 hover:bg-navy/90 transition-all transform hover:scale-[1.01] active:scale-95">
                    <span>Send Message</span>
                    <FiSend />
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
