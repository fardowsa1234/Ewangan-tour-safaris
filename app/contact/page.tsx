'use client'; // Mark this file as a client component

import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from 'framer-motion';
import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16 bg-white">
      {/* Main Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold py-20 mb-4 text-black"
      >
        Get in Touch
      </motion.h1>

      {/* Subheader */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl font-bold text-black mb-12 py-6"
      >
        We're here to help you plan your next adventure.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-black">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Submit
            </button>
          </form>
        </motion.div>

        {/* Location & Contact Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8194331340643!2d36.81702081475805!3d-1.2833096990629008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f28f0c1%3A0x2b8e3858d5e8d7b7!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1625764841556!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="space-y-4">
  <h3 className="text-xl font-bold !text-black">Contact Details</h3>
  <motion.div className="flex items-center">
    <MapPin className="w-6 h-6 !text-black mr-2" />
    <span className="font-semibold !text-black">Nairobi CBD, Kenya</span>
  </motion.div>
  <motion.div className="flex items-center">
    <Phone className="w-6 h-6 !text-black mr-2" />
    <span className="font-semibold !text-black">Phone: +254 716745127</span>
  </motion.div>
  <motion.div className="flex items-center">
    <Mail className="w-6 h-6 !text-black mr-2" />
    <span className="font-semibold !text-black">Email: booking@ewangantours.com</span>
  </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
