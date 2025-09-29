import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { QuizGame } from "@/components/QuizGame";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Trophy, Coins, Leaf } from "lucide-react";

const sampleQuizzes = [
  {
    id: "climate-basics",
    title: "Climate Change Fundamentals",
    description: "Test your knowledge about climate science, greenhouse gases, and global warming effects.",
    difficulty: "Easy" as const,
    timeLimit: 300, // 5 minutes
    reward: { type: "tokens" as const, amount: 100 },
    questions: [
      {
        id: 1,
        question: "What is the primary greenhouse gas responsible for human-caused climate change?",
        options: [
          "Oxygen (O2)",
          "Carbon Dioxide (CO2)",
          "Nitrogen (N2)",
          "Water Vapor (H2O)"
        ],
        correctAnswer: 1,
        explanation: "Carbon dioxide (CO2) from burning fossil fuels is the primary driver of human-caused climate change, accounting for about 76% of greenhouse gas emissions.",
        points: 100
      },
      {
        id: 2,
        question: "Which of the following is NOT a renewable energy source?",
        options: [
          "Solar power",
          "Wind power",
          "Natural gas",
          "Hydroelectric power"
        ],
        correctAnswer: 2,
        explanation: "Natural gas is a fossil fuel and therefore not renewable. Solar, wind, and hydroelectric power are all renewable energy sources that don't deplete natural resources.",
        points: 100
      },
      {
        id: 3,
        question: "What percentage of global greenhouse gas emissions come from transportation?",
        options: [
          "About 14%",
          "About 24%",
          "About 34%",
          "About 44%"
        ],
        correctAnswer: 0,
        explanation: "Transportation accounts for approximately 14% of global greenhouse gas emissions, making it a significant but not the largest sector contributing to climate change.",
        points: 100
      }
    ]
  },
  {
    id: "ocean-conservation",
    title: "Ocean Conservation Challenge",
    description: "Dive deep into marine ecosystem knowledge, ocean pollution, and conservation strategies.",
    difficulty: "Medium" as const,
    timeLimit: 420, // 7 minutes
    reward: { type: "tokens" as const, amount: 150 },
    questions: [
      {
        id: 1,
        question: "What is the main cause of ocean acidification?",
        options: [
          "Plastic pollution",
          "Overfishing",
          "CO2 absorption from the atmosphere",
          "Oil spills"
        ],
        correctAnswer: 2,
        explanation: "Ocean acidification occurs when the ocean absorbs CO2 from the atmosphere, forming carbonic acid and lowering the pH of seawater.",
        points: 150
      },
      {
        id: 2,
        question: "Which marine ecosystem is often called the 'rainforest of the sea'?",
        options: [
          "Kelp forests",
          "Coral reefs",
          "Deep sea vents",
          "Mangrove swamps"
        ],
        correctAnswer: 1,
        explanation: "Coral reefs are called the 'rainforests of the sea' due to their incredible biodiversity, supporting about 25% of all marine species despite covering less than 1% of the ocean floor.",
        points: 150
      },
      {
        id: 3,
        question: "How long does it take for a plastic bottle to decompose in the ocean?",
        options: [
          "10-50 years",
          "100-200 years",
          "450-1000 years",
          "It never fully decomposes"
        ],
        correctAnswer: 2,
        explanation: "Plastic bottles can take 450-1000 years to decompose in marine environments, breaking down into microplastics that continue to harm marine life.",
        points: 150
      }
    ]
  },
  {
    id: "biodiversity-expert",
    title: "Biodiversity Expert Test",
    description: "Advanced quiz on ecosystem interactions, species conservation, and biodiversity hotspots worldwide.",
    difficulty: "Hard" as const,
    timeLimit: 600, // 10 minutes
    reward: { type: "ecoins" as const, amount: 3 },
    questions: [
      {
        id: 1,
        question: "Which concept describes the variety of life at genetic, species, and ecosystem levels?",
        options: [
          "Ecological succession",
          "Biodiversity",
          "Biomagnification",
          "Biogeochemical cycling"
        ],
        correctAnswer: 1,
        explanation: "Biodiversity encompasses the variety of life at three levels: genetic diversity within species, species diversity within ecosystems, and ecosystem diversity across landscapes.",
        points: 200
      },
      {
        id: 2,
        question: "What percentage of known species live in tropical rainforests despite covering only 6% of Earth's surface?",
        options: [
          "25%",
          "50%",
          "75%",
          "90%"
        ],
        correctAnswer: 1,
        explanation: "Tropical rainforests are home to approximately 50% of all known species on Earth, making them incredibly biodiverse ecosystems despite their relatively small area.",
        points: 200
      },
      {
        id: 3,
        question: "Which term describes a species that has a disproportionately large effect on ecosystem structure?",
        options: [
          "Endemic species",
          "Invasive species",
          "Keystone species",
          "Indicator species"
        ],
        correctAnswer: 2,
        explanation: "Keystone species have effects on ecosystem structure that are disproportionate to their abundance. Their removal can cause dramatic changes to the entire ecosystem.",
        points: 200
      }
    ]
  }
];

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<any>(null);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const handleQuizComplete = (score: number, totalQuestions: number) => {
    setQuizScore(score);
  };

  const handleQuizSelect = (quiz: any) => {
    setSelectedQuiz(quiz);
    setQuizScore(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-eco-green";
      case "Medium": return "bg-neon-orange"; 
      case "Hard": return "bg-destructive";
      default: return "bg-muted";
    }
  };

  if (selectedQuiz) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <Button
              onClick={() => setSelectedQuiz(null)}
              variant="outline"
              className="mb-6"
            >
              ← Back to Quiz Selection
            </Button>
            <QuizGame quiz={selectedQuiz} onComplete={handleQuizComplete} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-ecoin text-background font-bold px-4 py-2">
              🧠 Test Your Knowledge
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Environmental
              </span>
              <br />
              <span className="text-foreground">Quiz Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Challenge yourself with problem-based environmental scenarios. 
              Test your eco-knowledge and earn tokens and Ecoins!
            </p>
          </div>

          {/* Quiz Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleQuizzes.map((quiz, index) => (
              <Card 
                key={quiz.id}
                className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 cursor-pointer"
                onClick={() => handleQuizSelect(quiz)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-ecoin rounded-full p-3">
                      <Brain className="w-6 h-6 text-background" />
                    </div>
                    <Badge className={`${getDifficultyColor(quiz.difficulty)} text-background font-bold`}>
                      {quiz.difficulty}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {quiz.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {quiz.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{Math.floor(quiz.timeLimit / 60)} minutes</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Trophy className="w-4 h-4" />
                        <span>{quiz.questions.length} questions</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {quiz.reward.type === "tokens" ? (
                          <Badge className="bg-gradient-token text-background font-bold">
                            <Coins className="w-3 h-3 mr-1" />
                            +{quiz.reward.amount}
                          </Badge>
                        ) : (
                          <Badge className="bg-gradient-ecoin text-background font-bold">
                            <Leaf className="w-3 h-3 mr-1" />
                            +{quiz.reward.amount}
                          </Badge>
                        )}
                      </div>

                      <Button 
                        size="sm" 
                        className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      >
                        Start Quiz
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-border/50 p-6 text-center">
              <div className="text-3xl font-bold text-eco-green mb-2">2,450</div>
              <div className="text-muted-foreground">Total Quiz Score</div>
            </Card>
            <Card className="bg-gradient-card border-border/50 p-6 text-center">
              <div className="text-3xl font-bold text-electric-blue mb-2">28</div>
              <div className="text-muted-foreground">Quizzes Completed</div>
            </Card>
            <Card className="bg-gradient-card border-border/50 p-6 text-center">
              <div className="text-3xl font-bold text-neon-orange mb-2">94%</div>
              <div className="text-muted-foreground">Average Accuracy</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;