import type React from "react"
import Link from "next/link"
import OptimizedImage from "./OptimizedImage"
import { ArrowRight } from "lucide-react"

interface DestinationCardProps {
  name: string
  description: string
  image: string
  type: "safari" | "beach"
}

const DestinationCard: React.FC<DestinationCardProps> = ({ name, description, image, type }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
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
      <div className="absolute bottom-0 w-full p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-white/90 mb-4 line-clamp-2">{description}</p>
        <Link
          href={`/destinations#${type}`}
          className="inline-flex items-center space-x-2 bg-primary/90 hover:bg-primary text-white px-6 py-3 rounded-full transition-colors duration-300"
        >
          <span>{type === "safari" ? "Explore Safari" : "Book Beach Tour"}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default DestinationCard

