import { Navigation } from "@/components/Navigation";
import { GamesSection } from "@/components/GamesSection";

const Games = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <GamesSection />
      </div>
    </div>
  );
};

export default Games;