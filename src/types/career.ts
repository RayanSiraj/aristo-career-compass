export interface PersonalityTrait {
  id: string;
  name: string;
  description: string;
  strengths: string[];
  idealFor: string;
  careers: string[];
  color: string;
}

export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  scores: {
    visionary: number;
    analytical: number;
    empathic: number;
    innovative: number;
    structured: number;
    persuasive: number;
  };
}

export interface QuizResult {
  personalityType: string;
  scores: {
    visionary: number;
    analytical: number;
    empathic: number;
    innovative: number;
    structured: number;
    persuasive: number;
  };
  completedAt: Date;
}

export interface Career {
  id: string;
  title: string;
  category: string;
  demand: 'Low' | 'Medium' | 'High' | 'Very High';
  salaryRange: string;
  education: string;
  location: string;
  growthRate: string;
  description: string;
  skills: string[];
  satisfaction: number;
  personalityTypes: string[];
  remote: boolean;
}

export interface CareerFilters {
  category?: string;
  demand?: string;
  personalityType?: string;
  remote?: boolean;
}

export interface CareerStats {
  totalCareers: number;
  highDemand: number;
  remoteAvailable: number;
  avgGrowth: string;
}