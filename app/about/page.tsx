'use client'; // Mark this file as a client component
import React from "react";
import Image from "next/image"
import Link from "next/link"
import dynamic from 'next/dynamic'

// Dynamically import the Motion components from Framer Motion
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });
const MotionImg = dynamic(() => import('framer-motion').then((mod) => mod.motion.img), { ssr: false });

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Page Title with animation */}
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold tracking-tight py-12 text-primary-dark transition-colors sm:text-5xl md:text-6xl"
          >
            About Ewang'an Tours & Safaris
          </MotionH1>
          {/* Page description with animation */}
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
          >
            Creating Unforgettable Experiences Since 2024
          </MotionP>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            {/* "Our Story" section */}
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-3xl font-extrabold text-blue-600"
            >
              Our Story
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-4 text-lg text-gray-500"
            >
              Ewang'an Tours & Safaris was born out of a passion for travel and a deep love for the natural wonders of Africa.
              Since our inception in 2019, we've been dedicated to crafting unforgettable experiences for travelers from
              around the world. Our team of expert guides and travel planners work tirelessly to ensure that each
              journey is tailored to our clients' unique interests and desires.
            </MotionP>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-4 text-lg text-gray-500"
            >
              We believe in responsible tourism and are committed to preserving the beautiful landscapes and diverse
              wildlife that make our destinations so special. Through partnerships with local communities and
              conservation organizations, we strive to make a positive impact on the places we visit.
            </MotionP>
          </div>
          
          <div>
            {/* Image with animation */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Image
                src="/WhatsApp17.jpeg"
                alt="Safari landscape"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </MotionDiv>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          {/* Call to action button with animation */}
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </div>
  )
}
