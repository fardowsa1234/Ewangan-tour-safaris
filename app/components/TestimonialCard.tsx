'use client';

import type React from "react";
import { Star } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import { motion } from "framer-motion"; // Importing framer-motion for animations

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, location, rating, comment, image }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <OptimizedImage src={image} alt={name} width={64} height={64} className="object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-neutral-dark">{name}</h3>
          <p className="text-gray-500 text-sm">{location}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-primary fill-primary" : "text-gray-300"}`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote>
        <p className="text-gray-600 italic">"{comment}"</p>
      </blockquote>
    </motion.div>
  );
};

export default TestimonialCard;
