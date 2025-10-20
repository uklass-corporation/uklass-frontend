import HeroCarousel from "@/features/landing/sections/home/hero-carousel";
import CracksSemana from "@/features/landing/sections/home/cracks-semana";
import FeaturesSection from "@/features/landing/sections/home/features-section";
import TestimonialsSection from "@/features/landing/sections/home/testimonials-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Cracks de la Semana Section */}
      <CracksSemana />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
    </main>
  );
}
