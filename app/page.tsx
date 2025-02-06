import React from 'react';
import Hero from "./components/Hero"
import FeatureSection from "./components/FeatureSection"
import ServiceCard from './components/ServiceCard'
import TrendingDestinations from "./components/TrendingDestinations"
import TestimonialsSection from "./components/TestimonialsSection"

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <ServiceCard />
      <TrendingDestinations />
      <TestimonialsSection />
    </>
  )
}

