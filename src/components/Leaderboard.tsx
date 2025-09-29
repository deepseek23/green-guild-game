import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Crown, Zap } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  score: number;
  ecoins: number;
  badges: string[];
  trend: "up" | "down" | "same";
}

const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "EcoMaster_2024", avatar: "EM", score: 15420, ecoins: 154, badges: ["🌱", "🔥", "⚡"], trend: "same" },
  { rank: 2, name: "GreenGamer", avatar: "GG", score: 14890, ecoins: 148, badges: ["🌿", "🎯"], trend: "up" },
  { rank: 3, name: "ClimateHero", avatar: "CH", score: 14250, ecoins: 142, badges: ["🌍", "💫"], trend: "down" },
  { rank: 4, name: "TreePlanter", avatar: "TP", score: 13680, ecoins: 136, badges: ["🌳"], trend: "up" },
  { rank: 5, name: "EcoWarrior", avatar: "EW", score: 13120, ecoins: 131, badges: ["⚡", "🔥"], trend: "up" },
];

export function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-neon-orange" />;
      case 2: return <Trophy className="w-6 h-6 text-muted-foreground" />;
      case 3: return <Medal className="w-6 h-6 text-neon-orange" />;
      default: return <Award className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1: return "bg-gradient-token border-neon-orange/50 shadow-neon";
      case 2: return "bg-gradient-card border-muted-foreground/30";
      case 3: return "bg-gradient-card border-neon-orange/30";
      default: return "bg-gradient-card border-border/30";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <span className="text-eco-green">↗️</span>;
      case "down": return <span className="text-destructive">↘️</span>;
      default: return <span className="text-muted-foreground">—</span>;
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-background font-bold px-4 py-2">
            🏆 Global Rankings
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compete with eco-gamers worldwide and climb your way to the top
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mockLeaderboard.slice(0, 3).map((player, index) => (
            <Card 
              key={player.rank}
              className={`${getRankBg(player.rank)} p-6 text-center transform transition-all duration-300 hover:scale-105 ${
                player.rank === 1 ? 'md:order-2 md:scale-110' : 
                player.rank === 2 ? 'md:order-1' : 'md:order-3'
              }`}
            >
              <div className="flex justify-center mb-4">
                {getRankIcon(player.rank)}
              </div>
              
              <Avatar className="w-16 h-16 mx-auto mb-4 ring-4 ring-primary/20">
                <AvatarFallback className="bg-gradient-primary text-background font-bold text-lg">
                  {player.avatar}
                </AvatarFallback>
              </Avatar>

              <h3 className="font-bold text-lg mb-2">{player.name}</h3>
              
              <div className="flex justify-center gap-1 mb-3">
                {player.badges.map((badge, i) => (
                  <span key={i} className="text-lg">{badge}</span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-bold text-2xl text-eco-green">{player.score.toLocaleString()}</div>
                  <div className="text-muted-foreground">Score</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-electric-blue">{player.ecoins}</div>
                  <div className="text-muted-foreground">Ecoins</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="bg-gradient-card border-border/50">
          <div className="p-6 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-ecoin rounded-full p-3">
                <Zap className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-2xl font-bold">Top Players</h3>
            </div>
          </div>

          <div className="divide-y divide-border/20">
            {mockLeaderboard.map((player) => (
              <div key={player.rank} className="p-6 hover:bg-muted/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                      <span className="font-bold text-lg">#{player.rank}</span>
                    </div>

                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-primary text-background font-bold">
                        {player.avatar}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg">{player.name}</span>
                        {getTrendIcon(player.trend)}
                      </div>
                      <div className="flex gap-1">
                        {player.badges.map((badge, i) => (
                          <span key={i} className="text-sm">{badge}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 text-right">
                    <div>
                      <div className="font-bold text-lg text-eco-green">
                        {player.score.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Score</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-electric-blue">
                        {player.ecoins}
                      </div>
                      <div className="text-xs text-muted-foreground">Ecoins</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Player's Rank */}
        <Card className="mt-8 bg-gradient-primary/10 border-primary/30">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge className="bg-primary text-primary-foreground">Your Rank</Badge>
                <span className="text-2xl font-bold">#247</span>
                <span className="text-muted-foreground">of 50,000+ players</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-xl text-eco-green">8,450</div>
                <div className="text-sm text-muted-foreground">Your Score</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}