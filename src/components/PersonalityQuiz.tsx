import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, RotateCcw, BookOpen, Target } from 'lucide-react';
import { quizQuestions } from '@/data/quizQuestions';
import { QuizOption, QuizResult } from '@/types/career';
import { 
  calculateQuizResult, 
  saveQuizResult, 
  getStoredQuizResult, 
  getPersonalityTrait,
  clearQuizResult,
  formatScores
} from '@/utils/quizScoring';
import { useToast } from '@/hooks/use-toast';

interface PersonalityQuizProps {
  onResultUpdate?: (result: QuizResult | null) => void;
}

export function PersonalityQuiz({ onResultUpdate }: PersonalityQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizOption[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(getStoredQuizResult());
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleAnswer = (option: QuizOption) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      const result = calculateQuizResult(newAnswers);
      setQuizResult(result);
      setShowResults(true);
      onResultUpdate?.(result);
      
      toast({
        title: "Quiz Completed! 🎉",
        description: `You have been identified as a ${getPersonalityTrait(result.personalityType)?.name} personality type.`,
      });
    }
  };

  const handleSaveResults = () => {
    if (quizResult) {
      saveQuizResult(quizResult);
      toast({
        title: "Results Saved! ✅",
        description: "Your personality assessment has been saved to your profile.",
      });
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    clearQuizResult();
    setQuizResult(null);
    onResultUpdate?.(null);
    
    toast({
      title: "Quiz Reset 🔄",
      description: "You can now retake the personality assessment.",
    });
  };

  const personalityTrait = quizResult ? getPersonalityTrait(quizResult.personalityType) : null;
  const formattedScores = quizResult ? formatScores(quizResult.scores) : [];

  // Show saved results if quiz was already completed
  if (quizResult && !showResults && answers.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle className="h-6 w-6 text-success" />
            <CardTitle className="text-2xl font-semibold">Your Personality Assessment</CardTitle>
          </div>
          <p className="text-muted-foreground">
            Completed on {quizResult.completedAt.toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {personalityTrait && (
            <div className="text-center space-y-4">
              <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-${personalityTrait.color}/10 border border-${personalityTrait.color}/20`}>
                <div className={`w-3 h-3 rounded-full bg-${personalityTrait.color}`} />
                <span className={`text-lg font-semibold text-${personalityTrait.color}`}>
                  {personalityTrait.name}
                </span>
              </div>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {personalityTrait.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-md mx-auto">
                {personalityTrait.strengths.map((strength, index) => (
                  <Badge key={index} variant="secondary" className="justify-center">
                    {strength}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={handleRetakeQuiz} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Retake Quiz
            </Button>
            <Button onClick={handleSaveResults} className="gap-2">
              <Target className="h-4 w-4" />
              Save My Results
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Show quiz results
  if (showResults && quizResult && personalityTrait) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="h-8 w-8 text-success" />
            <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="text-center space-y-6">
            <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-full bg-${personalityTrait.color}/10 border-2 border-${personalityTrait.color}/20`}>
              <div className={`w-4 h-4 rounded-full bg-${personalityTrait.color}`} />
              <span className={`text-2xl font-bold text-${personalityTrait.color}`}>
                {personalityTrait.name}
              </span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {personalityTrait.description}
            </p>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Your Key Strengths</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-lg mx-auto">
                {personalityTrait.strengths.map((strength, index) => (
                  <Badge key={index} variant="secondary" className="py-2 px-4 text-sm justify-center">
                    {strength}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Ideal Career Matches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto">
                {personalityTrait.careers.map((career, index) => (
                  <div key={index} className="p-3 bg-muted rounded-lg text-sm">
                    {career}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Your Score Breakdown</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {formattedScores.slice(0, 6).map((item) => (
                  <div key={item.trait} className="text-center">
                    <div className="text-2xl font-bold text-primary">{item.percentage}%</div>
                    <div className="text-sm text-muted-foreground">{item.trait}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleRetakeQuiz} variant="outline" size="lg" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Retake Quiz
            </Button>
            <Button onClick={handleSaveResults} size="lg" className="gap-2">
              <Target className="h-4 w-4" />
              Save My Results
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Show quiz questions
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl">Personality Assessment</CardTitle>
          </div>
          <Badge variant="secondary">
            {currentQuestionIndex + 1} of {quizQuestions.length}
          </Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="text-sm font-medium text-primary">
            {currentQuestion.category}
          </div>
          <h2 className="text-2xl font-semibold leading-tight">
            {currentQuestion.question}
          </h2>
        </div>

        <div className="grid gap-3">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="p-6 h-auto text-left justify-start hover:bg-primary/5 hover:border-primary/20 transition-all duration-200"
              onClick={() => handleAnswer(option)}
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-base leading-relaxed">{option.text}</span>
              </div>
            </Button>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground">
          This assessment takes about 5-7 minutes to complete
        </div>
      </CardContent>
    </Card>
  );
}