import { CreditCard, Plane, Camera, Hotel, Book, Users } from "lucide-react"
import Link from "next/link"
import OptimizedImage from "../components/OptimizedImage"

const services = [
  {
    id: "visa-processing",
    title: "Visa Processing",
    description:
      "Fast and reliable visa processing services for various countries. We ensure your visa application is handled smoothly and promptly.",
    icon: CreditCard,
    image: "/WhatsApp20.jpg",
  },
  {
    id: "ticketing",
    title: "Ticketing",
    description:
      "Hassle-free ticketing services for the best deals on flights, trains, and buses. Book your travel tickets for an easy, stress-free experience.",
    icon: Plane,
    image: "/WhatsApp24.jpg",
  },
  {
    id: "safari-packages",
    title: "Safari Packages",
    description:
      "Experience breathtaking wildlife safaris with expert guides, luxury lodges, and thrilling wildlife encounters in the best destinations.",
    icon: Camera,
    image: "/WhatsApp21.jpg",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    description:
      "We partner with top hotels worldwide to offer you the best accommodation options for both business and leisure stays.",
    icon: Hotel,
    image: "/WhatsApp25.jpg",
  },
  {
    id: "umrah-packages",
    title: "Umrah Packages",
    description:
      "Embark on your spiritual journey with our exclusive Umrah packages, including flights, accommodation, and guided services.",
    icon: Book,
    image: "/WhatsApp22.jpg",
  },
  {
    id: "team-building",
    title: "Team Building",
    description:
      "Boost your team's collaboration with tailored programs designed to improve communication, teamwork, and problem-solving skills.",
    icon: Users,
    image: "/WhatsApp23.jpg",
  },
]

const OurServices = () => {
  return (
    <section id="our-services" className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary-dark transition-colors py-16 mb-4">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Discover our range of travel services designed to make your journey unforgettable
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-start p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2 transition-transform duration-300 group-hover:translate-y-[-10px]">
                    {service.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 bg-primary rounded-full p-2 shadow-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-green-400 hover:text-secondary-dark font-medium transition-colors"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices

