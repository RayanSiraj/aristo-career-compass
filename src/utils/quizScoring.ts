import { QuizResult, QuizOption } from '@/types/career';
import { personalityTraits } from '@/data/personalityTraits';

export function calculateQuizResult(answers: QuizOption[]): QuizResult {
  const scores = {
    visionary: 0,
    analytical: 0,
    empathic: 0,
    innovative: 0,
    structured: 0,
    persuasive: 0
  };

  // Sum up scores from all answers
  answers.forEach(answer => {
    Object.keys(scores).forEach(trait => {
      scores[trait as keyof typeof scores] += answer.scores[trait as keyof typeof answer.scores];
    });
  });

  // Find the highest scoring personality type
  const personalityType = Object.keys(scores).reduce((a, b) => 
    scores[a as keyof typeof scores] > scores[b as keyof typeof scores] ? a : b
  );

  return {
    personalityType,
    scores,
    completedAt: new Date()
  };
}

export function getPersonalityTrait(personalityType: string) {
  return personalityTraits.find(trait => trait.id === personalityType);
}

export function saveQuizResult(result: QuizResult) {
  localStorage.setItem('careerQuizResult', JSON.stringify(result));
}

export function getStoredQuizResult(): QuizResult | null {
  const stored = localStorage.getItem('careerQuizResult');
  if (stored) {
    const result = JSON.parse(stored);
    result.completedAt = new Date(result.completedAt);
    return result;
  }
  return null;
}

export function clearQuizResult() {
  localStorage.removeItem('careerQuizResult');
}

export function getPersonalityColor(personalityType: string): string {
  const trait = getPersonalityTrait(personalityType);
  return trait ? trait.color : 'primary';
}

export function formatScores(scores: QuizResult['scores']): Array<{trait: string, score: number, percentage: number}> {
  const totalPoints = Object.values(scores).reduce((sum, score) => sum + score, 0);
  
  return Object.entries(scores).map(([trait, score]) => ({
    trait: trait.charAt(0).toUpperCase() + trait.slice(1),
    score,
    percentage: totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0
  })).sort((a, b) => b.score - a.score);
}