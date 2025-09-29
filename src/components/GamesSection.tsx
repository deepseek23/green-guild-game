import { Badge } from "@/components/ui/badge";
import { GameCard } from "./GameCard";
import puzzleGame from "@/assets/game-puzzle.jpg";
import quizGame from "@/assets/game-quiz.jpg";
import missionGame from "@/assets/game-mission.jpg";

const games = [
  {
    title: "EcoCircuit Puzzle",
    description: "Build sustainable energy circuits by connecting renewable sources. Master the flow of clean energy through challenging logic puzzles.",
    image: puzzleGame,
    reward: { type: "tokens" as const, amount: 150 },
    difficulty: "Medium" as const,
    players: 12500,
    category: "Game" as const,
  },
  {
    title: "Climate Knowledge Quiz",
    description: "Test your environmental expertise with problem-based scenarios. Answer questions about climate change, biodiversity, and sustainability.",
    image: quizGame,
    reward: { type: "tokens" as const, amount: 100 },
    difficulty: "Easy" as const,
    players: 25800,
    category: "Quiz" as const,
  },
  {
    title: "Tree Planting Mission",
    description: "Join real-world reforestation efforts coordinated by environmental NGOs. Document your tree planting and earn Ecoins for impact.",
    image: missionGame,
    reward: { type: "ecoins" as const, amount: 5 },
    difficulty: "Hard" as const,
    players: 8200,
    category: "Mission" as const,
  },
  {
    title: "Recycling Sort Challenge",
    description: "Sort waste materials into correct recycling categories against the clock. Learn proper waste management while earning rewards.",
    image: puzzleGame,
    reward: { type: "tokens" as const, amount: 75 },
    difficulty: "Easy" as const,
    players: 18700,
    category: "Game" as const,
  },
  {
    title: "Ocean Conservation Quiz",
    description: "Dive deep into marine ecosystem challenges. Answer complex questions about ocean pollution, marine life, and conservation efforts.",
    image: quizGame,
    reward: { type: "tokens" as const, amount: 120 },
    difficulty: "Medium" as const,
    players: 15300,
    category: "Quiz" as const,
  },
  {
    title: "Community Garden Mission",
    description: "Help establish community gardens in urban areas. Work with local organizations to create green spaces and grow food sustainably.",
    image: missionGame,
    reward: { type: "ecoins" as const, amount: 8 },
    difficulty: "Hard" as const,
    players: 5600,
    category: "Mission" as const,
  },
];

export function GamesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-token text-background font-bold px-4 py-2">
            🎮 Interactive Learning
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Games & Missions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your adventure: solve environmental puzzles, master eco-knowledge through quizzes, 
            or take on real-world missions that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <GameCard {...game} />
            </div>
          ))}
        </div>

        {/* Token to Ecoin Conversion */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">💰 Reward System</h3>
            <div className="flex items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2 bg-gradient-token rounded-full px-4 py-2">
                <span className="font-bold">100 Tokens</span>
              </div>
              <span className="text-2xl">→</span>
              <div className="flex items-center gap-2 bg-gradient-ecoin rounded-full px-4 py-2">
                <span className="font-bold">1 Ecoin</span>
              </div>
            </div>
            <p className="text-muted-foreground mt-4">
              Earn Tokens through games and quizzes, then convert them to Ecoins for real-world impact!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}