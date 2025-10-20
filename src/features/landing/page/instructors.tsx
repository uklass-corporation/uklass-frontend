import HeroInstructors from "@/features/landing/sections/instructors/hero-instructors";
import InstructorsList from "@/features/landing/sections/instructors/instructors-list";
import InstructorSpecialties from "@/features/landing/sections/instructors/instructor-specialties";

export default function InstructorsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroInstructors />
      
      {/* Instructors List */}
      <InstructorsList />
      
      {/* Instructor Specialties */}
      <InstructorSpecialties />
    </main>
  );
}