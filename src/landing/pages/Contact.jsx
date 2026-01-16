import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend, FiClock } from "react-icons/fi";
import heroImage from "../../assets/hero_image.jpg";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    subject: "Freight Quote",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!values.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!values.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!values.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const onChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);
    try {
      // const body = values;
      const url =
        "https://effeelo-backend.onrender.com/api/v1/send-contact-mail";
      const response = await axios.post(url, values);

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
      });
      setValues({
        fullName: "",
        email: "",
        subject: "Freight Quote",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "Error!",
        text: `${
          error.response?.data?.error || "Something went wrong. Please try again."
        }`,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
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
            `,
          }}
        />

        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gold rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to streamline your supply chain? Contact us for a quote or
              consultation on your next shipment.
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
                className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Call Us</h4>
                  <p className="text-gray-500 text-sm">
                    Direct Line: +234 (0) XXX XXX XXXX
                  </p>
                  <p className="text-gray-500 text-sm">
                    Customer Support: +234 (0) YYY YYY YYYY
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Email Us</h4>
                  <p className="text-gray-500 text-sm">
                    Quotes: info@effeelo.com
                  </p>
                  <p className="text-gray-500 text-sm">
                    Admin: operations@effeelo.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Head Office Address, Lagos, Nigeria.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-navy p-8 rounded-3xl shadow-md text-white space-y-4"
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
                className="bg-white p-8 md:p-16 rounded-[40px] shadow-xl border border-gray-50"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={sendMessage} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={values.fullName}
                        onChange={onChange}
                        className={`w-full bg-gray-50 border border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold outline-none transition-all ${
                          errors.fullName ? "!border-red-500" : ""
                        }`}
                        placeholder="Adaimoni Roland"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        className={`w-full bg-gray-50 border border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold outline-none transition-all ${
                          errors.email ? "!border-red-500" : ""
                        }`}
                        placeholder="name@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={values.subject}
                      onChange={onChange}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold outline-none transition-all"
                    >
                      <option>Freight Quote</option>
                      <option>Customs Clearance</option>
                      <option>Warehousing Inquiry</option>
                      <option>General Support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">
                      Message
                    </label>
                      <textarea
                        rows="5"
                        name="message"
                        value={values.message}
                        onChange={onChange}
                        className={`w-full bg-gray-50 border border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold outline-none transition-all resize-none ${
                          errors.message ? "!border-red-500" : ""
                        }`}
                        placeholder="How can we help you?"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>
                      )}
                    </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-navy text-gold w-full py-5 rounded-xl font-bold flex items-center justify-center space-x-3 hover:bg-navy/90 transition-all transform hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                    {!loading && <FiSend />}
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
