import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Coins, Leaf, Clock, Brain } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
}

interface QuizData {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  timeLimit: number; // in seconds
  questions: QuizQuestion[];
  reward: {
    type: "tokens" | "ecoins";
    amount: number;
  };
}

interface QuizGameProps {
  quiz: QuizData;
  onComplete: (score: number, totalQuestions: number) => void;
}

export function QuizGame({ quiz, onComplete }: QuizGameProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Timer effect would go here in a real implementation
  
  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.correctAnswer;
    if (isCorrect) {
      setScore(score + question.points);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion + 1 < quiz.questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
        onComplete(score + (isCorrect ? question.points : 0), quiz.questions.length);
      }
    }, 2000);
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Easy": return "bg-eco-green";
      case "Medium": return "bg-neon-orange";
      case "Hard": return "bg-destructive";
      default: return "bg-muted";
    }
  };

  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index
        ? "border-primary bg-primary/10"
        : "border-border hover:border-primary/50 hover:bg-muted/50";
    }

    if (index === question.correctAnswer) {
      return "border-eco-green bg-eco-green/20 text-eco-green";
    }

    if (selectedAnswer === index && index !== question.correctAnswer) {
      return "border-destructive bg-destructive/20 text-destructive";
    }

    return "border-border bg-muted/30 text-muted-foreground";
  };

  if (quizCompleted) {
    const finalScore = score;
    const percentage = (finalScore / (quiz.questions.length * 100)) * 100;

    return (
      <Card className="bg-gradient-card border-border/50 p-8 text-center">
        <div className="mb-6">
          <div className="bg-gradient-primary rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <Brain className="w-10 h-10 text-background" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
          <p className="text-muted-foreground">Great job on completing the {quiz.title}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-card rounded-lg p-4 border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">{finalScore}</div>
            <div className="text-muted-foreground">Points Earned</div>
          </div>
          <div className="bg-gradient-card rounded-lg p-4 border border-border/30">
            <div className="text-3xl font-bold text-eco-green mb-2">{Math.round(percentage)}%</div>
            <div className="text-muted-foreground">Accuracy</div>
          </div>
          <div className="bg-gradient-card rounded-lg p-4 border border-border/30">
            <div className="text-3xl font-bold text-electric-blue mb-2">{quiz.questions.length}</div>
            <div className="text-muted-foreground">Questions</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6">
          {quiz.reward.type === "tokens" ? (
            <Badge className="bg-gradient-token text-background font-bold text-lg px-4 py-2">
              <Coins className="w-4 h-4 mr-2" />
              +{quiz.reward.amount} Tokens Earned!
            </Badge>
          ) : (
            <Badge className="bg-gradient-ecoin text-background font-bold text-lg px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              +{quiz.reward.amount} Ecoins Earned!
            </Badge>
          )}
        </div>

        <Button
          size="lg"
          className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          onClick={() => window.location.reload()}
        >
          Play Again
        </Button>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Quiz Header */}
      <Card className="bg-gradient-card border-border/50 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">{quiz.title}</h1>
            <Badge className={`${getDifficultyColor(quiz.difficulty)} text-background font-bold`}>
              {quiz.difficulty}
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
            <Badge className="bg-gradient-primary text-background">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </Badge>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </Card>

      {/* Question Card */}
      <Card className="bg-gradient-card border-border/50 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
          <Badge className="bg-gradient-token text-background font-bold">
            <Coins className="w-3 h-3 mr-1" />
            {question.points} points
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${getOptionStyle(index)}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="font-medium">{option}</span>
                {showResult && index === question.correctAnswer && (
                  <CheckCircle className="w-5 h-5 ml-auto" />
                )}
                {showResult && selectedAnswer === index && index !== question.correctAnswer && (
                  <XCircle className="w-5 h-5 ml-auto" />
                )}
              </div>
            </button>
          ))}
        </div>

        {showResult && (
          <Card className="bg-muted/20 border-border/30 p-4 mb-6">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              {selectedAnswer === question.correctAnswer ? (
                <CheckCircle className="w-5 h-5 text-eco-green" />
              ) : (
                <XCircle className="w-5 h-5 text-destructive" />
              )}
              {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
            </h3>
            <p className="text-muted-foreground">{question.explanation}</p>
          </Card>
        )}

        <div className="flex justify-between items-center">
          <div className="text-muted-foreground">
            Score: <span className="font-bold text-foreground">{score}</span>
          </div>
          <Button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            {currentQuestion + 1 === quiz.questions.length ? "Finish Quiz" : "Next Question"}
          </Button>
        </div>
      </Card>
    </div>
  );
}