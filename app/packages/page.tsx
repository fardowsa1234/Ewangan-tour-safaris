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
    <h3 className="text-xl font-bold text-black">{title}</h3>
    <p className="mt-4 text-gray-600">{description}</p>
    <ul className="mt-4 space-y-2 text-gray-600">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <div className="mt-auto">
      <p className="text-lg font-bold text-black mt-4">{price}</p>
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
      id: "dubai-awaits",
      title: "Dubai Awaits! ✈️✨",
      description: "Experience the ultimate Sky-High & High-Speed adventure in Dubai.",
      features: [
        "✅ 5-night stay at a 4-star hotel with breakfast",
        "✅ Real Madrid Theme Park entry",
        "✅ Desert Safari with BBQ dinner",
        "✅ Ain Dubai experience",
        "✅ Marina Dhow Cruise with dinner",
        "✅ Half-day Dubai city tour & more!",
      ],
      price: "$469 per person (double sharing)",
      image: "/Dubai.jpeg",
    },
    {
      id: "mombasa-package",
      title: "Mombasa Package (3 Nights, 4 Days)",
      description: "Explore the stunning beaches of Mombasa with luxurious accommodations.",
      features: [
        "🌟 Voyager Beach Resort - From Ksh 62,700 (Flight), Ksh 45,400 (SGR)",
        "🌟 Mombasa Continental Hotel - From Ksh 57,825 (Flight), Ksh 40,525 (SGR)",
        "🌟 Severin Sea Lodge - From Ksh 67,800 (Flight), Ksh 50,500 (SGR)",
        "📌 3 Nights accommodation with meals",
        "📌 SGR and Airport transfers",
        "📌 Return SGR & flight tickets",
      ],
      price: "From Ksh 40,525 per person",
      image: "/Mombasa.jpeg",
    },
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
    {
      id: "dubai-students-tour",
      title: "5 Days 4 Nights Dubai Students Tour",
      description: "An exciting educational tour packed with thrilling experiences.",
      features: [
        "📍 Landmark Grand Hotel Deira – From USD 1336",
        "📍 Best Western Premier M Four – From USD 1350",
        "📍 Hampton by Hilton Dubai Airport – From USD 1353",
        "📌 04N Accommodation with Breakfast",
        "📌 Dubai City Tour, Desert Safari, Museum of Future, and more",
      ],
      price: "From USD 1336",
      image: "/dubai-students.jpg",
    },
    {
      id: "canton-fair",
      title: "137th China Import & Export Fair",
      description: "A business networking experience at the Canton Fair.",
      features: [
        "📌 8 Nights accommodation in a 4* hotel",
        "📌 Daily breakfast & dinner",
        "📌 Transportation & Guangzhou city tour",
        "📌 Canton Tower, Pearl River Tour",
        "📌 Visa & return air ticket",
      ],
      price: "USD 2,290 per person",
      image: "/canton-fair.jpg",
    },
    {
      id: "dar-es-salaam",
      title: "5 Days 4 Nights Dar Es Salaam",
      description: "Experience the beauty of Dar Es Salaam with luxury stays.",
      features: [
        "📍 Crowne Plaza Dar Es Salaam – From USD 944",
        "📍 Golden Tulip Dar City Centre – From USD 964",
        "📌 Return Airport Transfers on PVT basis",
        "📌 04 Nights Accommodation with Breakfast",
        "📌 Optional Full-Day Zanzibar Tour",
      ],
      price: "From USD 944",
      image: "/dar-es-salaam.jpg",
    },
  ];

  return (
    <div className="bg-neutral min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center py-12 text-primary-dark">
          Our Packages
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Discover our carefully curated packages for unforgettable experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;