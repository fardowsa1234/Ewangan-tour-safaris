import DestinationCard from "../components/DestinationCard";
import React from 'react';
type DestinationType = "safari" | "beach" | "abroad";

interface Destination {
  name: string;
  description: string;
  image: string;
}

const destinations: Record<DestinationType, Destination[]> = {
  safari: [
    {
      name: "Maasai Mara, Kenya",
      description: "Experience the incredible wildlife of the Maasai Mara.",
      image: "/MaasaiMara.jpeg",
    },
    {
      name: "Lake Nakuru, Kenya",
      description: "Explore the beauty of Lake Nakuru and its flamingos.",
      image: "/LakeNakuru.jpeg",
    },
    {
      name: "Amboseli, Kenya",
      description: "Discover the beauty of Amboseli with views of Mount Kilimanjaro.",
      image: "/Amboseli.jpeg",
    },
    {
      name: "Tsavo, Kenya",
      description: "Witness the grandeur of Tsavo's vast landscapes.",
      image: "/Tsavo.jpeg",
    },
    {
      name: "Serengeti, Tanzania",
      description: "Witness the great wildebeest migration in the Serengeti.",
      image: "/Serengeti.jpeg",
    },
    {
      name: "Kruger National Park, South Africa",
      description: "Explore one of Africa's largest game reserves.",
      image: "/Kruger.jpeg",
    },
  ],
  beach: [
    {
      name: "Diani, Kenya",
      description: "Relax on the beautiful beaches of Diani.",
      image: "/Diani.jpeg",
    },
    {
      name: "Mombasa, Kenya",
      description: "Enjoy pristine beaches and crystal-clear waters.",
      image: "/Mombasa.jpeg",
    },
    {
      name: "Malindi, Kenya",
      description: "Experience the tranquility of Malindi’s coastline.",
      image: "/Malindi.jpeg",
    },
    {
      name: "Watamu, Kenya",
      description: "Discover the coral reefs of Watamu.",
      image: "/Watamu.jpeg",
    },
    {
      name: "Wasini, Kenya",
      description: "Explore the charming island of Wasini.",
      image: "/Wasini.jpeg",
    },
    {
      name: "Seychelles",
      description: "Discover the stunning beauty of Seychelles.",
      image: "/Seychelles.jpeg",
    },
  ],
  abroad: [
    {
      name: "Dubai, UAE",
      description: "Experience the luxury and wonders of Dubai.",
      image: "/Dubai.jpeg",
    },
    {
      name: "Maldives",
      description: "Relax in the paradise of Maldives’ white sandy beaches.",
      image: "/Maldives.jpeg",
    },
    {
      name: "Cape Town",
      description: "Explore the stunning landscapes of Cape Town.",
      image: "/CapeTown.jpeg",
    },
    {
      name: "Singapore",
      description: "Discover the vibrant culture and landmarks of Singapore.",
      image: "/Singapore.jpeg",
    },
  ],
};

interface DestinationSectionProps {
  id: DestinationType;
  title: string;
  destinations: Destination[];
}

const DestinationSection: React.FC<DestinationSectionProps> = ({ id, title, destinations }) => (
  <div className="mt-16">
    <h2 id={id} className="text-3xl font-extrabold text-blue-600 mb-8">
      {title}
    </h2>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.name}
          name={destination.name}
          description={destination.description}
          image={destination.image}
          type={id as "safari" | "beach"} // ✅ This ensures proper type safety
        />
      ))}
    </div>
  </div>
);

export default function Destinations() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight py-12 text-primary-dark sm:text-5xl md:text-6xl">
            Our Destinations
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our handpicked safari, beach, and international destinations.
          </p>
        </div>

        <DestinationSection id="safari" title="Safari Adventures" destinations={destinations.safari} />
        <DestinationSection id="beach" title="Beach Destinations" destinations={destinations.beach} />
        <DestinationSection id="abroad" title="International Destinations" destinations={destinations.abroad} />
      </div>
    </div>
  );
}