'use client';

import dynamic from 'next/dynamic';
import Link from "next/link";

// Dynamically import motion components
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });

const HeroText = () => {
  return (
    <div className="relative h-full flex items-center">
      <div className="container mx-auto px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="left-[4%] w-10/12 absolute regular-14 max-container top-1/3 z-1 xl:w-3/6 bg-indigo-100/[.15] p-8 rounded-3xl xl:left-[12%] xl:regular-18 lg:left-[7%] md:left-[7%] lg:w-4/6 md:w-4/5 sm:left-[3%] backdrop-blur-sm"
        >
          <MotionH1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="regular-20 text-white mb-6 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] 2xl:regular-64 xl:regular-40 md:regular-32 sm:regular-24"
          >
            Escape to Paradise with Our Exclusive Holiday Packages
          </MotionH1>
          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white mb-8 text-lg sm:text-base"
          >
            Let us turn your dream vacation into reality. Explore our handpicked destinations and find the perfect
            getaway.
          </MotionP>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/packages"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-6 font-medium text-blue-600 shadow-2xl"
            >
              <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-primary-dark transition-colors to-blue-600"></span>
              <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-blue-600 opacity-30 transition duration-500 group-hover:rotate-90"></span>
              <span className="relative text-white text-lg font-bold">Explore Our Tours</span>
            </Link>
          </MotionDiv>
        </MotionDiv>
      </div>
    </div>
  );
};

export default HeroText;
