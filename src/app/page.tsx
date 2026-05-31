import React from "react";
import { Navbar } from "@/src/widgets/navbar";
import { Hero } from "@/src/widgets/hero";
import { WhyUsSection } from "@/src/widgets/sections/why-us-section";
import { FeaturedProducts } from "@/src/widgets/sections/featured-products";
import { AboutSection } from "@/src/widgets/sections/about-section";
import { TestimonialsSection } from "@/src/widgets/sections/testimonials-section";
import { CTASection } from "@/src/widgets/sections/cta-section";
import { Footer } from "@/src/widgets/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <WhyUsSection />
        <FeaturedProducts />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
