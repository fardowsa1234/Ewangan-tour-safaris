import Link from "next/link"
import OptimizedImage from "./OptimizedImage"
import type React from "react" // Added import for React

interface PackageCardProps {
  name: string
  description: string
  price: string
  image: string
}

const PackageCard: React.FC<PackageCardProps> = ({ name, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <OptimizedImage src={image} alt={name} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-2xl font-bold text-primary mb-4">{price}</p>
        <div className="flex justify-between items-center">
          <Link href="/packages" className="text-secondary hover:text-secondary-dark font-medium transition-colors">
            Learn More
          </Link>
          <button
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
            aria-label={`Book ${name}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default PackageCard

