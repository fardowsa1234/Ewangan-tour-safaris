'use client'; // Mark this file as a client component

import Link from "next/link";
import { motion } from "framer-motion"; // Importing framer-motion for animations

const destinations = [
  {
    name: "Maasai Mara, Kenya",
    image: "/WhatsApp4.jpeg",
    description: "Experience the incredible wildlife of the Maasai Mara.",
  },
  {
    name: "Diani Beach",
    image: "/WhatsApp7.jpeg",
    description: "Relax on pristine beaches and crystal-clear waters.",
  },
  {
    name: "Serengeti, Tanzania",
    image: "/WhatsApp8.jpeg",
    description: "Witness the great wildebeest migration in the Serengeti.",
  },
];

const TrendingDestinations = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with animation */}
        <motion.h2
          className="text-3xl font-extrabold text-primary-dark transition-colors text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Trending Destinations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            >
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <motion.h3
                  className="text-xl font-semibold text-blue-600 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                >
                  {destination.name}
                </motion.h3>
                <motion.p
                  className="text-black mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.3, duration: 0.6 }}
                >
                  {destination.description}
                </motion.p>
                <Link href="/destinations" className="text-green-500 hover:text-blue-800 font-medium">
                  Learn More &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Button animation */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
         <Link
              href="/destinations"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-6 font-medium text-blue-600 shadow-2xl"
            >
              <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-dark transition-colors to-blue-600"></span>
              <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-blue-600 opacity-30 transition duration-500 group-hover:rotate-90"></span>
              <span className="relative text-white text-lg font-bold">Find Your Dream Destination</span>
            </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TrendingDestinations;
