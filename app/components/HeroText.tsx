import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/placeholder.svg"
      >
        <source
          src="./videos/palm_trees.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="left-[4%] w-10/12 absolute regular-14 max-container top-1/3 z-1 xl:w-3/6 bg-indigo-100/[.15] p-4 rounded-3xl xl:left-[12%] xl:regular-18 lg:left-[7%] md:left-[7%] lg:w-4/6 md:w-4/5 sm:left-[3%]">
            <h1 className="regular-20 text-white mb-6 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] 2xl:regular-64 xl:regular-40 md:regular-32 sm:regular-24">
            Escape to Paradise with Our Exclusive Holiday Packages
            </h1>
            <p className="text-white mb-6 text-lg sm:text-base">
              Let us turn your dream vacation into reality. Explore our handpicked destinations and find the perfect getaway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/packages"
                className="bg-primary-dark transition-colors text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 text-center"
              >
                Explore Our Tours
                </Link>
              {/* </Link>
              <Link
                href="/contact"
                className="bg-primary-dark transition-colors text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 text-center"
              >
                Contact Us
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero

