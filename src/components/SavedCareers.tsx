import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookmarkCheck, Trash2, DollarSign, MapPin, TrendingUp, GraduationCap, Star, Target } from 'lucide-react';
import { careers } from '@/data/careers';
import { QuizResult } from '@/types/career';
import { getSavedCareers, unsaveCareer, getDemandBadgeVariant } from '@/utils/careerUtils';
import { getPersonalityTrait } from '@/utils/quizScoring';
import { useToast } from '@/hooks/use-toast';

interface SavedCareersProps {
  quizResult?: QuizResult | null;
}

export function SavedCareers({ quizResult }: SavedCareersProps) {
  const { toast } = useToast();
  const savedCareerIds = getSavedCareers();
  const savedCareers = careers.filter(career => savedCareerIds.includes(career.id));
  const personalityTrait = quizResult ? getPersonalityTrait(quizResult.personalityType) : null;

  const handleUnsaveCareer = (careerId: string, careerTitle: string) => {
    unsaveCareer(careerId);
    toast({
      title: "Career Removed",
      description: `${careerTitle} has been removed from your saved careers.`,
    });
    // Force re-render by calling the parent component
    window.location.reload();
  };

  if (savedCareers.length === 0) {
    return (
      <div className="text-center py-12">
        <BookmarkCheck className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">No Saved Careers Yet</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Start exploring careers and save the ones that interest you. They'll appear here for easy access.
        </p>
        <Button variant="outline">
          Explore Careers
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with personality context */}
      {personalityTrait && (
        <Card className={`bg-gradient-to-r from-${personalityTrait.color}/10 to-${personalityTrait.color}/5 border-${personalityTrait.color}/20`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full bg-${personalityTrait.color}/20 flex items-center justify-center`}>
                <div className={`w-4 h-4 rounded-full bg-${personalityTrait.color}`} />
              </div>
              <div>
                <h3 className="font-semibold">Your Personality: {personalityTrait.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {savedCareers.filter(career => career.personalityTypes.includes(quizResult!.personalityType)).length} of your saved careers match your personality
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Saved Careers ({savedCareers.length})</h2>
        <Badge variant="secondary">{savedCareers.length} saved</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {savedCareers.map((career) => {
          const isPersonalityMatch = quizResult && career.personalityTypes.includes(quizResult.personalityType);
          
          return (
            <Card key={career.id} className={`group hover:shadow-lg transition-all duration-200 ${isPersonalityMatch ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg leading-tight">{career.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {career.category}
                      </Badge>
                      {isPersonalityMatch && (
                        <Badge variant="default" className="text-xs">
                          <Target className="h-3 w-3 mr-1" />
                          Personality Match
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleUnsaveCareer(career.id, career.title)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {career.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant={getDemandBadgeVariant(career.demand)} className="text-xs">
                      {career.demand} Demand
                    </Badge>
                    {career.remote && (
                      <Badge variant="outline" className="text-xs">
                        Remote Available
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span>{career.salaryRange}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      <span>{career.education}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="line-clamp-1">{career.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-success">
                      <TrendingUp className="h-4 w-4" />
                      <span>{career.growthRate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{career.satisfaction}</span>
                    <span className="text-sm text-muted-foreground">satisfaction</span>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>

                {/* Skills preview */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Key Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {career.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {career.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{career.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {isPersonalityMatch && personalityTrait && (
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Great Match!</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      This aligns with your {personalityTrait.name} personality strengths.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Summary stats */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Your Career Collection Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{savedCareers.length}</div>
              <div className="text-sm text-muted-foreground">Total Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">
                {savedCareers.filter(c => c.demand === 'High' || c.demand === 'Very High').length}
              </div>
              <div className="text-sm text-muted-foreground">High Demand</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-info">
                {savedCareers.filter(c => c.remote).length}
              </div>
              <div className="text-sm text-muted-foreground">Remote Options</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">
                {quizResult ? savedCareers.filter(c => c.personalityTypes.includes(quizResult.personalityType)).length : 0}
              </div>
              <div className="text-sm text-muted-foreground">Personality Matches</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}