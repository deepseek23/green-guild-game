import { Navigation } from "@/components/Navigation";
import { Leaderboard as LeaderboardComponent } from "@/components/Leaderboard";

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <LeaderboardComponent />
      </div>
    </div>
  );
};

export default Leaderboard;