'use client'; // Add this to ensure the code is run on the client side

import { motion } from 'framer-motion'; // Import framer-motion
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import TrendingDestinations from "./components/TrendingDestinations";
import ServiceCard from "./components/ServiceCard";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>

      {/* Feature Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FeatureSection />
      </motion.div>

      {/* Service Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ServiceCard />
      </motion.div>

      {/* Trending Destinations Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TrendingDestinations />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TestimonialsSection />
      </motion.div>
    </>
  );
}
