import Link from "next/link"

const destinations = [
  {
    name: "Maasai Mara, Kenya",
    image:
      "/WhatsApp4.jpeg",
    description: "Experience the incredible wildlife of the Maasai Mara.",
  },
  {
    name: "Diani Beach",
    image:
      "/WhatsApp7.jpeg",
    description: "Relax on pristine beaches and crystal-clear waters.",
  },
  {
    name: "Serengeti, Tanzania",
    image:
      "/WhatsApp8.jpeg",
    description: "Witness the great wildebeest migration in the Serengeti.",
  },
]

const TrendingDestinations = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-primary-dark transition-colors text-center mb-8">Trending Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{destination.name}</h3>
                <p className="text-black mb-4">{destination.description}</p>
                <Link href="/destinations" className="text-green-500 hover:text-blue-800 font-medium">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Find Your Dream Destination
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TrendingDestinations

