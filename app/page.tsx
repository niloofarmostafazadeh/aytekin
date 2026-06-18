"use client"

import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { AboutPreview } from "@/components/home/about-preview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { FeaturedProducts } from "@/components/home/featured-products"
import { BlogPreview } from "@/components/home/blog-preview"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <WhyChooseUs />
      <FeaturedProducts />
      <BlogPreview />
    </>
  )
}
