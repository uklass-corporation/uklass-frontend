import HeroUniversities from "@/features/landing/sections/universities/hero-universities";
import UniversitiesList from "@/features/landing/sections/universities/universities-list";
import FeaturedPrograms from "@/features/landing/sections/universities/featured-programs";

export default function UniversitiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Universities Section */}
      <HeroUniversities />
      
      {/* Universities List Section */}
      <UniversitiesList />
      
      {/* Featured Programs Section */}
      <FeaturedPrograms />
    </main>
  );
}