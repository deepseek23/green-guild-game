import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Zap, Leaf, Coins, TrendingUp } from "lucide-react";

export function Dashboard() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-ecoin text-background font-bold px-4 py-2">
            📊 Your Gaming Stats
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your progress, achievements, and environmental impact in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Token Balance */}
          <Card className="bg-gradient-card border-border/50 hover:border-neon-orange/50 transition-all duration-300 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gradient-token rounded-full p-3">
                <Coins className="w-6 h-6 text-background" />
              </div>
              <Badge className="bg-neon-orange/20 text-neon-orange border-neon-orange/30">
                +50 today
              </Badge>
            </div>
            <div className="text-3xl font-bold text-neon-orange mb-2">2,450</div>
            <div className="text-muted-foreground">Total Tokens</div>
          </Card>

          {/* Ecoin Balance */}
          <Card className="bg-gradient-card border-border/50 hover:border-eco-green/50 transition-all duration-300 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-eco-green rounded-full p-3">
                <Leaf className="w-6 h-6 text-background" />
              </div>
              <Badge className="bg-eco-green/20 text-eco-green border-eco-green/30">
                Level 5
              </Badge>
            </div>
            <div className="text-3xl font-bold text-eco-green mb-2">24</div>
            <div className="text-muted-foreground">Ecoins Earned</div>
          </Card>

          {/* Missions Completed */}
          <Card className="bg-gradient-card border-border/50 hover:border-electric-blue/50 transition-all duration-300 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gradient-ecoin rounded-full p-3">
                <Target className="w-6 h-6 text-background" />
              </div>
              <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                🔥 Streak
              </Badge>
            </div>
            <div className="text-3xl font-bold text-electric-blue mb-2">18</div>
            <div className="text-muted-foreground">Missions Complete</div>
          </Card>

          {/* Rank */}
          <Card className="bg-gradient-card border-border/50 hover:border-neon-purple/50 transition-all duration-300 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-neon-purple rounded-full p-3">
                <Trophy className="w-6 h-6 text-background" />
              </div>
              <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                ↗️ Rising
              </Badge>
            </div>
            <div className="text-3xl font-bold text-neon-purple mb-2">#247</div>
            <div className="text-muted-foreground">Global Rank</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Section */}
          <Card className="bg-gradient-card border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-primary rounded-full p-3">
                <TrendingUp className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-2xl font-bold">Progress Overview</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium">Environmental Knowledge</span>
                  <span className="text-eco-green font-bold">85%</span>
                </div>
                <Progress value={85} className="h-3 bg-muted" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium">Game Mastery</span>
                  <span className="text-electric-blue font-bold">72%</span>
                </div>
                <Progress value={72} className="h-3 bg-muted" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium">Mission Completion</span>
                  <span className="text-neon-orange font-bold">90%</span>
                </div>
                <Progress value={90} className="h-3 bg-muted" />
              </div>
            </div>
          </Card>

          {/* Recent Achievements */}
          <Card className="bg-gradient-card border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-token rounded-full p-3">
                <Zap className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-2xl font-bold">Recent Achievements</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-eco-green/10 rounded-lg border border-eco-green/20">
                <div className="bg-eco-green rounded-full p-2">
                  <Leaf className="w-4 h-4 text-background" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-eco-green">Eco Warrior</div>
                  <div className="text-sm text-muted-foreground">Completed 10 environmental missions</div>
                </div>
                <div className="text-eco-green font-bold">+5 Ecoins</div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20">
                <div className="bg-electric-blue rounded-full p-2">
                  <Trophy className="w-4 h-4 text-background" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-electric-blue">Quiz Master</div>
                  <div className="text-sm text-muted-foreground">Perfect score on Climate Quiz</div>
                </div>
                <div className="text-electric-blue font-bold">+100 Tokens</div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-neon-orange/10 rounded-lg border border-neon-orange/20">
                <div className="bg-neon-orange rounded-full p-2">
                  <Target className="w-4 h-4 text-background" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-neon-orange">Streak King</div>
                  <div className="text-sm text-muted-foreground">7-day login streak achieved</div>
                </div>
                <div className="text-neon-orange font-bold">+50 Tokens</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}