import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Coins, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  reward: {
    type: "tokens" | "ecoins";
    amount: number;
  };
  difficulty: "Easy" | "Medium" | "Hard";
  players: number;
  category: "Game" | "Quiz" | "Mission";
}

export function GameCard({ title, description, image, reward, difficulty, players, category }: GameCardProps) {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Easy": return "bg-eco-green";
      case "Medium": return "bg-neon-orange";
      case "Hard": return "bg-destructive";
      default: return "bg-muted";
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Game": return Trophy;
      case "Quiz": return Trophy;
      case "Mission": return Leaf;
      default: return Trophy;
    }
  };

  const CategoryIcon = getCategoryIcon(category);

  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <Badge className={`absolute top-3 left-3 ${getDifficultyColor(difficulty)} text-black font-bold`}>
          <CategoryIcon className="w-3 h-3 mr-1" />
          {category}
        </Badge>

        {/* Players Count */}
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
          {players.toLocaleString()} players
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Badge variant="outline" className="border-muted-foreground/30">
            {difficulty}
          </Badge>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {reward.type === "tokens" ? (
              <div className="flex items-center gap-1 text-neon-orange">
                <Coins className="w-4 h-4" />
                <span className="font-bold">{reward.amount} Tokens</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-eco-green">
                <Leaf className="w-4 h-4" />
                <span className="font-bold">{reward.amount} Ecoins</span>
              </div>
            )}
          </div>

          <Button asChild size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Link to={category === "Quiz" ? "/quiz" : "/games"}>
              Play Now
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}