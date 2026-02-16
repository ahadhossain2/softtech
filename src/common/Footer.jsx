import React from "react";

import { MapPin } from "lucide-react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  // contact
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, margin: "-100px" });

  return (
    <footer className="bg-[#FFFFFA]" ref={footerRef}>
      {/* Top Section */}
      <div className="grid grid-cols-1 gap-12 px-6 py-16 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#1E5470] leading-snug">
            SoftTech
            <br />
            If you can imagine it, <br />
            we can build it
          </h2>
          <p className="flex items-center gap-2 mt-4 text-sm text-[#16151A]">
            <FaEnvelope className="text-[#1E5470]" />
            contact@softtech.com
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" target="_blank">
              <img src="https://i.ibb.co/gZRFsRrb/twitter-1.png" alt="" />
            </a>
            <a href="#" target="_blank">
              <img src="https://i.ibb.co/7x3vN05j/facebook.png" alt="" />
            </a>
            <a href="#" target="_blank">
              <img src="https://i.ibb.co/kgFX3pDc/linkedin.png" alt="" />
            </a>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          <div>
            <h3 className="text-[22px] font-semibold mb-3 text-[#1E5470]">
              Useful Links
            </h3>
            <ul className="space-y-2 text-[15px] text-[#151517]">
              <li>
                <a href="#" className="hover:text-[#1E5470]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1E5470]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1E5470]">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1E5470]">
                  Industries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1E5470]">
                  Our Products
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[22px] font-semibold mb-3 text-[#1E5470]">
              Careers
            </h3>
            <ul className="space-y-2 text-[15px] text-[#151517]">
              <li>
                <a href="#" className="hover:text-[#1E5470]">
                  Fresh Grad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1E5470]">
                  Open Positions
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-[22px] font-semibold mb-3 text-[#1E5470]">
            Our Global Offices
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Canada */}
            <div>
              <h4 className="font-medium text-[20px] text-[#151517]">Canada</h4>
              <p className="flex items-center gap-2 text-[15px] py-1 text-[#151517]">
                <FaPhoneAlt className="text-[#1E5470]" /> +1 2345 67890
              </p>
              <p className="flex items-center gap-2 text-[15px] text-[#151517]">
                <MapPin className="text-[#1E5470]" /> Your location, city
              </p>
            </div>
            {/* Bangladesh */}
            <div>
              <h4 className="font-medium text-[20px] text-[#151517]">
                Bangladesh
              </h4>
              <p className="flex items-center gap-2 text-[15px] text-[#151517] py-1">
                <FaPhoneAlt className="text-[#1E5470]" /> +880 1234 567890
              </p>
              <p className="flex items-center gap-2 text-[15px] text-[#151517]">
                <MapPin className="text-[#1E5470]" /> Your location, city
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={footerInView ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="border-t border-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-6 text-sm text-[#151517]">
          <a href="#" className="hover:text-[#1E5470] transition">
            Terms of Use
          </a>
          <a href="#" className="hover:text-[#1E5470] transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#1E5470] transition">
            Cookies
          </a>
          <a href="#" className="hover:text-[#1E5470] transition">
            Help & FAQs
          </a>
          <a href="/contact" className="hover:text-[#1E5470] transition">
            Contact Us
          </a>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={footerInView ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="border-t border-gray-900 "
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#151517] text-center md:text-left">
          <p className="mb-2 md:mb-0">
            Privacy Policy <span className="text-[#1E5470]">|</span> Security
            Policy
          </p>
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href="#" className="text-[#1E5470] font-medium hover:underline">
              Ahad
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;