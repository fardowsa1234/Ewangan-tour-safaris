import type React from "react"
import Link from "next/link"
import OptimizedImage from "../components/OptimizedImage"

const PackageCard: React.FC<{
  id: string
  title: string
  description: string
  features: string[]
  price: string
  image: string
}> = ({ id, title, description, features, price, image }) => (
  <div
    id={id}
    className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 flex flex-col"
  >
    <OptimizedImage
      src={image}
      alt={title}
      width={400}
      height={300}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h3 className="text-xl font-semibold text-primary">{title}</h3>
    <p className="mt-4 text-gray-600">{description}</p>
    <ul className="mt-4 space-y-2 text-gray-600">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <div className="mt-auto">
      <p className="text-lg font-bold text-primary mt-4">{price}</p>
      <Link href="/contact">
        <button className="mt-6 px-6 py-3 bg-primary-dark transition-colors text-white rounded-full hover:bg-blue-600 transition duration-300 w-full">
          Book Now
        </button>
      </Link>
    </div>
  </div>
)

const Packages = () => {
  const packages = [
    {
      id: "wasini-island",
      title: "Wasini Island Tour",
      description:
        "Experience the magic of Wasini Island with a thrilling boat ride, dolphin watching, and snorkeling in Kisite Marine Park.",
      features: [
        "🚤 Traditional Dhow Boat Ride",
        "🐬 Dolphin Watching & Snorkeling",
        "🍽️ Swahili Seafood Lunch",
        "🌴 Village & Coral Garden Tour",
        "🚐 Pick-up & Drop-off: Mombasa & Diani",
      ],
      price: "Only 4,500 KES per person",
      image: "/WhatsApp7.jpeg",
    },
    {
      id: "diani-beach",
      title: "Diani Beach Getaway (2 Nights)",
      description: "Enjoy a luxurious 2-night stay in Diani with breathtaking beach views and exclusive amenities.",
      features: [
        "🏖️ 2 Nights in a Beachfront Hotel",
        "🍹 Breakfast & Beachside Dining",
        "🌊 Wasini Island Full-Day Tour Included",
        "🚐 Pick-up & Drop-off: Mombasa & Diani",
      ],
      price: "Only 21,000 KES per person",
      image: "/WhatsApp10.jpeg",
    },
  ]

  return (
    <div className="bg-neutral min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center py-12  text-primary-dark transition-colors">Our Packages</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Discover our carefully curated packages for unforgettable experiences in Kenya
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Packages

