'use client'; // Mark this file as a client component

import Link from "next/link";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// Custom TikTok icon
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full md:w-1/4 mb-6 md:mb-0"
          >
            <h3 className="text-2xl text-white font-bold mb-4">About Ewang'an Tours & Safaris</h3>
            <p className="text-white">Explore the world with our tailored tours and safaris.</p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full md:w-1/4 mb-6 md:mb-0 px-12"
          >
            <h4 className="text-lg font-semibold mb-4 text-white transition-colors">Quick Links</h4>
            <ul>
              <li>
                <Link href="/" className="text-white hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-white hover:text-white">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-white hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="w-full md:w-1/4 mb-6 md:mb-0"
          >
            <h4 className="text-lg font-semibold mb-4 text-white transition-colors">Contact Us</h4>
            <p className="text-white">Nairobi CBD</p>
            <p className="text-white">Nairobi, Kenya</p>
            <p className="text-white">Phone: +254 716745127</p>
            <p className="text-white">Email: booking@ewangantours.com</p>
          </motion.div>

          {/* Follow Us Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="w-full md:w-1/4"
          >
            <h4 className="text-lg font-semibold mb-4 text-white transition-colors">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ewangantours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@ewangantours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <TikTokIcon />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="border-t border-primary-dark transition-colors mt-8 pt-8 text-center"
        >
          <p className="text-white">&copy; 2025 Ewang'an Tours & Safaris. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
