import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/efeelo_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <img 
                src={logo} 
                alt="EFEELO Logistics" 
                className="w-[120px] h-[80px] object-fill" 
                // className="w-[120px] h-[80px] object-fill brightness-0 invert" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed md:text-left text-center">
              Leading provider of customs clearance, freight forwarding, and supply-chain solutions with over a decade of proven industry experience.
            </p>
            <div className="flex md:justify-start justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><FaFacebook size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><FaTwitter size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><FaLinkedin size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><FaInstagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-start items-center">
            <h4 className="text-gold font-bold mb-6 md:text-start text-center">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400 md:text-start text-center">
              <li><Link to="/" className="hover:text-white transition-colors">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Company</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="flex flex-col md:items-start items-center">
            <h4 className="text-gold font-bold mb-6 md:text-start text-center">Core Services</h4>
            <ul className="space-y-4 text-sm text-gray-400 md:text-start text-center">
              <li>Air & Sea Freight</li>
              <li>Customs Clearance</li>
              <li>Wine Distribution</li>
              <li>Hospitality Supply</li>
              <li>Supermarket Provisioning</li>
              <li>Warehousing</li>
              <li>Haulage Logistics</li>
              <li>End-to-End Delivery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:items-start items-center">
            <h4 className="text-gold font-bold mb-6 md:text-start text-center">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400 md:text-start text-center">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gold mt-1" />
                <span>Major Trade Corridors, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-gold" />
                <span>+234 (0) XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gold" />
                <span>info@effeelo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs text-center md:text-left">
          <p>© {currentYear} EFEELO International Logistics Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
