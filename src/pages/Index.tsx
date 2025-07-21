import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PersonalityQuiz } from '@/components/PersonalityQuiz';
import { CareerDashboard } from '@/components/CareerDashboard';
import { SavedCareers } from '@/components/SavedCareers';
import { QuizResult } from '@/types/career';
import { getStoredQuizResult } from '@/utils/quizScoring';

const Index = () => {
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    // Load stored quiz result on component mount
    const stored = getStoredQuizResult();
    if (stored) {
      setQuizResult(stored);
    }
  }, []);

  const handleQuizResultUpdate = (result: QuizResult | null) => {
    setQuizResult(result);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <Tabs defaultValue="dashboard" className="w-full">
            <div className="flex flex-col gap-6">
              {/* Compact tabs above header */}
              <TabsList className="inline-flex w-fit h-9 bg-muted p-1 rounded-lg">
                <TabsTrigger value="dashboard" className="text-xs px-3 py-1">
                  🏠 Dashboard
                </TabsTrigger>
                <TabsTrigger value="quiz" className="text-xs px-3 py-1">
                  📝 Quiz
                </TabsTrigger>
                <TabsTrigger value="saved" className="text-xs px-3 py-1">
                  ⭐ Saved
                </TabsTrigger>
              </TabsList>

              {/* Main header */}
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold">Career Exploration</h1>
                <p className="text-base text-muted-foreground">
                  Discover your perfect career path with AI-powered recommendations and personalized insights
                </p>
              </div>

              {/* Tab content */}
              <TabsContent value="dashboard" className="mt-0">
                <CareerDashboard quizResult={quizResult} />
              </TabsContent>

              <TabsContent value="quiz" className="mt-0">
                <PersonalityQuiz onResultUpdate={handleQuizResultUpdate} />
              </TabsContent>

              <TabsContent value="saved" className="mt-0">
                <SavedCareers quizResult={quizResult} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
