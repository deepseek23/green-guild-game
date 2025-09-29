import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Gamepad2, Trophy, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="EcoGaming Platform" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50" />
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-gradient-token rounded-full p-3 shadow-glow">
          <Gamepad2 className="w-6 h-6 text-background" />
        </div>
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-gradient-ecoin rounded-full p-3 shadow-neon">
          <Trophy className="w-6 h-6 text-background" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-eco-green rounded-full p-3 shadow-glow">
          <Leaf className="w-6 h-6 text-background" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <Badge className="mb-6 bg-gradient-primary text-background font-bold px-4 py-2 text-sm animate-scale-in">
          🌱 Learn • Play • Save the Planet
        </Badge>

        <h1 className="text-6xl md:text-8xl font-black mb-6 animate-slide-up">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            EcoGaming
          </span>
          <br />
          <span className="text-foreground">Platform</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Master environmental challenges through interactive games, earn tokens for knowledge, 
          and contribute to real-world eco missions. Join the green gaming revolution!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6">
            <Link to="/games">
              <Play className="w-5 h-5 mr-2" />
              Start Gaming
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10 text-lg px-8 py-6">
            <Link to="/leaderboard">View Leaderboard</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
            <div className="text-3xl font-bold text-eco-green mb-2">50K+</div>
            <div className="text-muted-foreground">Active Players</div>
          </div>
          <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
            <div className="text-3xl font-bold text-electric-blue mb-2">200+</div>
            <div className="text-muted-foreground">Eco Missions</div>
          </div>
          <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
            <div className="text-3xl font-bold text-neon-orange mb-2">1M+</div>
            <div className="text-muted-foreground">Tokens Earned</div>
          </div>
          <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
            <div className="text-3xl font-bold text-cyber-cyan mb-2">25K+</div>
            <div className="text-muted-foreground">Ecoins Awarded</div>
          </div>
        </div>
      </div>
    </section>
  );
}