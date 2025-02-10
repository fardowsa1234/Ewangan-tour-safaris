'use client';

import dynamic from 'next/dynamic';
import HeroText from "./HeroText";

// Dynamically import motion components
const MotionVideo = dynamic(() => import('framer-motion').then((mod) => mod.motion.video), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <MotionVideo
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/placeholder.svg"
      >
        <source src="./videos/palm_trees.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </MotionVideo>

      {/* Overlay */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black bg-opacity-50"
      />

      {/* Hero Text Content */}
      <HeroText />

      {/* Scroll Indicator */}
      <MotionDiv
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
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
      </MotionDiv>
    </div>
  );
};

export default Hero;
