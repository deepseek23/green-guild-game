import { HeroSection } from "@/components/HeroSection";
import { GamesSection } from "@/components/GamesSection";
import { Dashboard } from "@/components/Dashboard";
import { Leaderboard } from "@/components/Leaderboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <GamesSection />
      <Dashboard />
      <Leaderboard />
    </div>
  );
};

export default Index;
