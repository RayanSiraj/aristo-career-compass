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
            <div className="flex flex-col gap-8">
              {/* Pill-style navigation */}
              <div className="flex gap-2">
                <TabsList className="inline-flex bg-transparent p-0 h-auto gap-2">
                  <TabsTrigger 
                    value="dashboard" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-muted/80 transition-all"
                  >
                    <div className="w-4 h-4 rounded bg-current/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded bg-current" />
                    </div>
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger 
                    value="quiz" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-100 text-pink-700 data-[state=active]:bg-pink-100 data-[state=active]:text-pink-700 data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-muted/80 transition-all"
                  >
                    <div className="w-4 h-4 rounded bg-current/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded bg-current" />
                    </div>
                    Quiz
                  </TabsTrigger>
                  <TabsTrigger 
                    value="saved" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-100 text-yellow-700 data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-700 data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-muted/80 transition-all"
                  >
                    <div className="w-4 h-4 rounded bg-current/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded bg-current" />
                    </div>
                    Saved
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Main header */}
              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-foreground">Career Exploration</h1>
                <p className="text-lg text-muted-foreground">
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
