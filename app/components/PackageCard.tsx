'use client'; // Mark this file as a client component

import Link from "next/link";
import OptimizedImage from "./OptimizedImage";
import type React from "react"; // Added import for React
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import motion components from Framer Motion
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionH3 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h3), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then((mod) => mod.motion.button), { ssr: false });

interface PackageCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ name, description, price, image }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 flex flex-col"
    >
      {/* Image - Ensuring it covers the card properly */}
      <OptimizedImage
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-64 object-cover rounded-t-xl"
      />
      
      <div className="p-6 flex flex-col justify-between flex-grow">
        {/* Package Name with animation */}
        <MotionH3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl font-semibold text-primary mb-2"
        >
          {name}
        </MotionH3>

        {/* Package Description with animation */}
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-700 mb-4 text-base"
        >
          {description}
        </MotionP>

        {/* Package Price with animation */}
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl font-bold text-primary mb-6"
        >
          {price}
        </MotionP>

        <div className="flex justify-between items-center mt-auto">
          {/* Learn More Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              href="/packages"
              className="text-secondary hover:text-secondary-dark font-medium transition-colors"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Book Now Button with animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-6 font-medium text-white shadow-lg bg-gradient-to-br from-blue-600 via-primary-dark to-blue-600 hover:scale-105 transition-all duration-300"
            >
              <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-dark transition-colors to-blue-600"></span>
              <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-blue-600 opacity-30 transition duration-500 group-hover:rotate-90"></span>
              <span className="relative text-lg font-bold">Book Now</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default PackageCard;
