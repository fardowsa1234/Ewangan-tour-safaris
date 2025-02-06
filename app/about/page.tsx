import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight py-12  text-primary-dark transition-colors sm:text-5xl md:text-6xl">
          About Ewang'an Tours & Safaris
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Creating Unforgettable Experiences Since 2019</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <h2 className="text-3xl font-extrabold text-blue-600">Our Story</h2>
            <p className="mt-4 text-lg text-gray-500">
              Ewang'an Tours & Safaris was born out of a passion for travel and a deep love for the natural wonders of Africa.
              Since our inception in 2019, we've been dedicated to crafting unforgettable experiences for travelers from
              around the world. Our team of expert guides and travel planners work tirelessly to ensure that each
              journey is tailored to our clients' unique interests and desires.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              We believe in responsible tourism and are committed to preserving the beautiful landscapes and diverse
              wildlife that make our destinations so special. Through partnerships with local communities and
              conservation organizations, we strive to make a positive impact on the places we visit.
            </p>
          </div>
          <div>
             <Image
              src="/WhatsApp17.jpeg"
              alt="Safari landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            /> 
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </div>
  )
}

