import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Bookmark, BookmarkCheck, MapPin, TrendingUp, DollarSign, GraduationCap, Star, Filter, Search, Target, Users, Globe, Zap } from 'lucide-react';
import { careers } from '@/data/careers';
import { Career, QuizResult } from '@/types/career';
import { 
  filterCareers, 
  sortCareers, 
  calculateCareerStats, 
  getMatchingCareers, 
  saveCareer, 
  unsaveCareer, 
  isCareerSaved,
  getDemandColor,
  getDemandBadgeVariant
} from '@/utils/careerUtils';
import { getPersonalityTrait } from '@/utils/quizScoring';
import { useToast } from '@/hooks/use-toast';

interface CareerDashboardProps {
  quizResult?: QuizResult | null;
}

export function CareerDashboard({ quizResult }: CareerDashboardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [demandFilter, setDemandFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState('A-Z');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [showPersonalityMatches, setShowPersonalityMatches] = useState(false);
  const { toast } = useToast();

  const personalityTrait = quizResult ? getPersonalityTrait(quizResult.personalityType) : null;

  const filteredAndSortedCareers = useMemo(() => {
    let filtered = careers.filter(career =>
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Apply personality filter if enabled
    if (showPersonalityMatches && quizResult) {
      filtered = getMatchingCareers(filtered, quizResult.personalityType);
    }

    // Apply other filters
    filtered = filterCareers(filtered, {
      category: categoryFilter || undefined,
      demand: demandFilter || undefined,
    });

    return sortCareers(filtered, sortBy);
  }, [searchTerm, categoryFilter, demandFilter, sortBy, showPersonalityMatches, quizResult]);

  const stats = calculateCareerStats(filteredAndSortedCareers);
  const matchingCareers = quizResult ? getMatchingCareers(careers, quizResult.personalityType) : [];

  const categories = [...new Set(careers.map(c => c.category))];
  const demands = ['Low', 'Medium', 'High', 'Very High'];

  const handleSaveCareer = (career: Career) => {
    if (isCareerSaved(career.id)) {
      unsaveCareer(career.id);
      toast({
        title: "Career Removed",
        description: `${career.title} has been removed from your saved careers.`,
      });
    } else {
      saveCareer(career.id);
      toast({
        title: "Career Saved! 🎯",
        description: `${career.title} has been added to your saved careers.`,
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Personality Banner */}
      {personalityTrait && (
        <Card className={`bg-gradient-to-r from-${personalityTrait.color}/10 to-${personalityTrait.color}/5 border-${personalityTrait.color}/20`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-${personalityTrait.color}/20 flex items-center justify-center`}>
                  <div className={`w-6 h-6 rounded-full bg-${personalityTrait.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Your Personality: {personalityTrait.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {matchingCareers.length} matching careers found
                  </p>
                </div>
              </div>
              <Button
                variant={showPersonalityMatches ? "default" : "outline"}
                onClick={() => setShowPersonalityMatches(!showPersonalityMatches)}
                className="gap-2"
              >
                <Target className="h-4 w-4" />
                {showPersonalityMatches ? 'Show All' : 'Show Matches'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{stats.totalCareers}</div>
                <div className="text-sm text-gray-500">Total Careers</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{stats.highDemand}</div>
                <div className="text-sm text-gray-500">High Demand</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{stats.remoteAvailable}</div>
                <div className="text-sm text-gray-500">Remote Available</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">+{stats.avgGrowth}%</div>
                <div className="text-sm text-gray-500">Avg Growth</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search your dream career..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-12 py-3 rounded-xl border-gray-200 bg-white text-base placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Zap className="h-5 w-5 text-blue-500" />
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Filter className="h-4 w-4" />
            Advanced Filters
          </Button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={demandFilter} onValueChange={setDemandFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Demand Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Demand Levels</SelectItem>
                {demands.map(demand => (
                  <SelectItem key={demand} value={demand}>{demand} Demand</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A-Z">A-Z</SelectItem>
                <SelectItem value="Salary">Salary</SelectItem>
                <SelectItem value="Demand">Demand</SelectItem>
                <SelectItem value="Growth Rate">Growth Rate</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Career Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedCareers.map((career) => {
          const isMatching = quizResult && career.personalityTypes.includes(quizResult.personalityType);
          const isSaved = isCareerSaved(career.id);
          
          return (
            <Card key={career.id} className={`relative group hover:shadow-lg transition-all duration-200 ${isMatching ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg leading-tight">{career.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {career.category}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSaveCareer(career)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {isSaved ? (
                      <BookmarkCheck className="h-4 w-4 text-primary" />
                    ) : (
                      <Bookmark className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                
                {isMatching && (
                  <Badge variant="default" className="w-fit text-xs">
                    ✨ Personality Match
                  </Badge>
                )}
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
                        Remote
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>{career.salaryRange}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span>{career.education}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="line-clamp-1">{career.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-success">
                    <TrendingUp className="h-4 w-4" />
                    <span>{career.growthRate}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{career.satisfaction}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedCareer(career)}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Career Detail Modal */}
      <Dialog open={!!selectedCareer} onOpenChange={() => setSelectedCareer(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedCareer && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <DialogTitle className="text-2xl">{selectedCareer.title}</DialogTitle>
                    <DialogDescription className="text-base mt-2">
                      {selectedCareer.description}
                    </DialogDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSaveCareer(selectedCareer)}
                  >
                    {isCareerSaved(selectedCareer.id) ? (
                      <BookmarkCheck className="h-5 w-5 text-primary" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </DialogHeader>

              <div className="space-y-6 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Salary Range</h4>
                    <p className="text-muted-foreground">{selectedCareer.salaryRange}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Education Required</h4>
                    <p className="text-muted-foreground">{selectedCareer.education}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Job Market</h4>
                    <Badge variant={getDemandBadgeVariant(selectedCareer.demand)}>
                      {selectedCareer.demand} Demand
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Growth Rate</h4>
                    <p className="text-success font-medium">{selectedCareer.growthRate}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareer.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Typical Locations</h4>
                  <p className="text-muted-foreground">{selectedCareer.location}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Job Satisfaction</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(selectedCareer.satisfaction) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{selectedCareer.satisfaction}/5</span>
                  </div>
                </div>

                {quizResult && selectedCareer.personalityTypes.includes(quizResult.personalityType) && (
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-primary">Personality Match!</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This career aligns well with your {personalityTrait?.name} personality type.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}