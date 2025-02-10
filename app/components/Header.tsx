'use client'; // Mark this file as a client component

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion"; // Importing framer-motion for animations

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/packages", label: "Packages" },
    { href: "/destinations", label: "Destinations" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-48 h-20"
          >
            <Link href="/">
              <Image
                src="/WhatsApp1.png"
                alt="Ewang'an Tours & Safaris"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Menu Items with staggered animation */}
          <motion.div
            className={`flex flex-col md:flex-row md:items-center md:space-x-8 ${
              isMenuOpen ? "fixed inset-0 bg-white z-50 pt-20 px-6" : "hidden md:flex"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                <Link
                  href={item.href}
                  className="text-black hover:text-primary transition-colors py-2 md:py-0"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + menuItems.length * 0.2, duration: 0.6 }}
            >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-6 font-medium text-blue-600 shadow-2xl"
            >
              <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-dark transition-colors to-blue-600"></span>
              <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-blue-600 opacity-30 transition duration-500 group-hover:rotate-90"></span>
              <span className="relative text-white text-lg font-bold">Book Now</span>
            </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button with transition animation */}
          <motion.button
            className="md:hidden text-neutral-800 p-2 z-50"
            onClick={handleMenuClick}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 bg-white z-50 pt-20 px-6 transition-all ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center space-y-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            >
              <Link
                href={item.href}
                className="text-black hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + menuItems.length * 0.2, duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-6 font-medium text-blue-600 shadow-2xl"
            >
              <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-dark transition-colors to-blue-600"></span>
              <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-blue-600 opacity-30 transition duration-500 group-hover:rotate-90"></span>
              <span className="relative text-white text-lg font-bold">Book Now</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
