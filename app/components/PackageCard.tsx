import React from "react";
import Link from "next/link";
import OptimizedImage from "../components/OptimizedImage";

// Define a type for the package properties
interface PackageProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
}

const PackageCard: React.FC<PackageProps> = ({ id, title, description, features, price, image }) => (
  <div
    id={id}
    className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 flex flex-col"
  >
    <OptimizedImage
      src={image ?? "/default-image.jpg"} // Fallback image if `image` is missing
      alt={title ?? "Package Image"}
      width={400}
      height={300}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    
    {/* Ensure ID is visible and styled */}
    <p className="text-black font-bold text-sm">{id ?? "N/A"}</p>

    <h3 className="text-xl font-semibold text-black">{title ?? "No Title"}</h3>
    <p className="mt-4 text-gray-600">{description ?? "No description available."}</p>
    
    <ul className="mt-4 space-y-2 text-gray-600">
      {features && features.length > 0 ? (
        features.map((feature, index) => <li key={index}>{feature}</li>)
      ) : (
        <li>No features listed.</li>
      )}
    </ul>

    {/* Ensure Price is displayed correctly */}
    <p className="text-lg font-bold text-black mt-4">Price: {price ?? "Not Available"}</p>

    <div className="mt-auto">
      <Link href="/contact">
        <button className="mt-6 px-6 py-3 bg-primary-dark transition-colors text-white rounded-full hover:bg-blue-600 transition duration-300 w-full">
          Book Now
        </button>
      </Link>
    </div>
  </div>
);
