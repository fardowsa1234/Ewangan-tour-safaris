'use client'; // Mark this file as a client component

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import Heroicons and motion components
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionH2 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h2), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });

// Dynamically import Heroicons
const GlobeAltIcon = dynamic(() => import('@heroicons/react/24/outline').then((mod) => mod.GlobeAltIcon), { ssr: false });
const SunIcon = dynamic(() => import('@heroicons/react/24/outline').then((mod) => mod.SunIcon), { ssr: false });
const HeartIcon = dynamic(() => import('@heroicons/react/24/outline').then((mod) => mod.HeartIcon), { ssr: false });
const UserGroupIcon = dynamic(() => import('@heroicons/react/24/outline').then((mod) => mod.UserGroupIcon), { ssr: false });

const features = [
  {
    name: "Safari Tours",
    description: "Explore Africa's most iconic wildlife and ecosystems.",
    icon: GlobeAltIcon,
  },
  {
    name: "Beach Destinations",
    description: "Relax on the world's most beautiful beaches.",
    icon: SunIcon,
  },
  {
    name: "Umrah Packages",
    description: "Spiritual journey packages for religious trips.",
    icon: HeartIcon,
  },
  {
    name: "Team Building",
    description: "Fun and engaging activities for corporate retreats.",
    icon: UserGroupIcon,
  },
];

const FeatureSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <MotionH2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-base text-blue-600 font-semibold tracking-wide uppercase"
          >
            Features
          </MotionH2>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary-dark transition-colors sm:text-4xl"
          >
            A better way to travel
          </MotionP>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
          >
            Experience the world like never before with our tailored travel packages.
          </MotionP>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + index * 0.2, // Staggered delay for each feature
                  duration: 1,
                }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <MotionDiv className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </MotionDiv>
                </dt>
                <MotionP className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </MotionP>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
