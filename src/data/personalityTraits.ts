import { PersonalityTrait } from '@/types/career';

export const personalityTraits: PersonalityTrait[] = [
  {
    id: 'visionary',
    name: 'Visionary',
    description: 'Bold leaders and self-starters who thrive in fast-paced environments where innovation and risk-taking are key. Visionaries are goal-driven, confident, and excel at creating opportunities from scratch.',
    strengths: ['Leadership', 'Initiative', 'Strategic thinking', 'Ambition'],
    idealFor: 'Those who enjoy starting businesses, leading teams, or making high-impact decisions.',
    careers: [
      'Entrepreneur / Startup Founder',
      'Product Manager',
      'Venture Capitalist',
      'Corporate Strategy Director'
    ],
    color: 'quiz-visionary'
  },
  {
    id: 'analytical',
    name: 'Analytical',
    description: 'Detail-oriented problem solvers who enjoy exploring complex systems, data, and theories. Analytical individuals love logic, structure, and understanding how things work at a deep level.',
    strengths: ['Critical thinking', 'Precision', 'Research', 'Independence'],
    idealFor: 'Those who enjoy STEM fields and solving real-world problems with data or models.',
    careers: [
      'Data Scientist',
      'Software Engineer',
      'Aerospace Engineer',
      'Financial Quantitative Analyst'
    ],
    color: 'quiz-analytical'
  },
  {
    id: 'empathic',
    name: 'Empathic',
    description: 'People-centered individuals who find fulfillment in helping others, improving lives, and making a difference. Empathics are caring, emotionally intelligent, and motivated by social good.',
    strengths: ['Compassion', 'Listening', 'Service', 'Emotional insight'],
    idealFor: 'Those passionate about health, wellness, education, or human development.',
    careers: [
      'Physician or Surgeon',
      'Clinical Psychologist',
      'Public Health Leader',
      'School Counselor'
    ],
    color: 'quiz-empathic'
  },
  {
    id: 'innovative',
    name: 'Innovative',
    description: 'Imaginative creators who thrive when expressing original ideas, designing solutions, or reinventing experiences. Innovatives blend creativity with vision and often work across art and technology.',
    strengths: ['Creativity', 'Originality', 'Design thinking', 'Adaptability'],
    idealFor: 'Those drawn to digital products, branding, visual design, or media.',
    careers: [
      'UX/UI Designer',
      'Creative Director',
      'Brand Strategist',
      'Product Innovation Lead'
    ],
    color: 'quiz-innovative'
  },
  {
    id: 'structured',
    name: 'Structured',
    description: 'Highly organized and reliable planners who value efficiency, consistency, and systems. Structured individuals shine in roles that require discipline, order, and attention to fine detail.',
    strengths: ['Organization', 'Planning', 'Accuracy', 'Process management'],
    idealFor: 'Those who enjoy working with logistics, numbers, and structured frameworks.',
    careers: [
      'Financial Analyst',
      'Operations Manager',
      'Project Manager',
      'Supply Chain Analyst'
    ],
    color: 'quiz-structured'
  },
  {
    id: 'persuasive',
    name: 'Persuasive',
    description: 'Charismatic influencers who are skilled at communicating, negotiating, and inspiring others. Persuasive individuals use their voice and ideas to lead, advocate, or shape public perception.',
    strengths: ['Communication', 'Leadership', 'Influence', 'Public speaking'],
    idealFor: 'Those who enjoy debate, advocacy, law, or messaging strategy.',
    careers: [
      'Lawyer',
      'Public Relations Executive',
      'Political Campaign Director',
      'Corporate Communications Manager'
    ],
    color: 'quiz-persuasive'
  }
];