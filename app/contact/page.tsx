import React from 'react';
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16 bg-white">
      <h1 className="text-4xl font-bold py-20 mb-4 text-primary-dark transition-colors">Get in Touch</h1>
      <h2 className="text-2xl text-gray-800 mb-12 py-6">We're here to help you plan your next adventure.</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-2 border-gray-200 text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-2 border-gray-200 text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-2 border-gray-200 text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-2 border-gray-200 text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Submit
            </button>
          </form>
        </div>
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Location</h3>
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
            <div className="flex items-center text-gray-800">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              <span>123 Adventure Street, Nairobi, Kenya</span>
            </div>
            <div className="flex items-center text-gray-800">
              <Phone className="w-6 h-6 text-blue-600 mr-2" />
              <span>+254 123 456 789</span>
            </div>
            <div className="flex items-center text-gray-800">
              <Mail className="w-6 h-6 text-blue-600 mr-2" />
              <span>info@safariadventures.com</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Facebook
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Instagram
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
