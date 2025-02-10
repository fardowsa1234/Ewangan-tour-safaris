'use client'; // Mark this file as a client component

import type React from "react"
import Link from "next/link"
import OptimizedImage from "./OptimizedImage"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface DestinationCardProps {
  name: string
  description: string
  image: string
  type: "safari" | "beach"
}

const DestinationCard: React.FC<DestinationCardProps> = ({ name, description, image, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="aspect-w-16 aspect-h-9">
        <OptimizedImage
          src={image}
          alt={name}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute bottom-0 w-full p-6 text-white"
      >
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-white/90 mb-4 line-clamp-2">{description}</p>
        <Link
          href={`/destinations#${type}`}
          className="inline-flex items-center space-x-2 bg-primary/90 hover:bg-primary text-white px-6 py-3 rounded-full transition-colors duration-300"
        >
          <span>{type === "safari" ? "Explore Safari" : "Book Beach Tour"}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default DestinationCard
