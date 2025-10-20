import HeroAbout from "@/features/landing/sections/about/hero-about";
import MissionVision from "@/features/landing/sections/about/mission-vision";
import TeamSection from "@/features/landing/sections/about/team-section";
import HistoryTimeline from "@/features/landing/sections/about/history-timeline";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero About Section */}
      <HeroAbout />
      
      {/* Mission & Vision Section */}
      <MissionVision />
      
      {/* History Timeline Section */}
      <HistoryTimeline />
      
      {/* Team Section */}
      <TeamSection />
    </main>
  );
}
