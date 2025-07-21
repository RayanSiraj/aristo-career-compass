import { QuizQuestion } from '@/types/career';

export const quizQuestions: QuizQuestion[] = [
  // Category 1: Leadership & Initiative
  {
    id: 'leadership-1',
    category: 'Leadership & Initiative',
    question: 'When working on a group project, what role do you usually take?',
    options: [
      {
        text: 'I naturally take charge and delegate tasks.',
        scores: { visionary: 3, analytical: 0, empathic: 1, innovative: 1, structured: 2, persuasive: 2 }
      },
      {
        text: 'I help organize and keep everyone on track.',
        scores: { visionary: 1, analytical: 1, empathic: 2, innovative: 0, structured: 3, persuasive: 1 }
      },
      {
        text: 'I contribute ideas and let someone else lead.',
        scores: { visionary: 0, analytical: 2, empathic: 2, innovative: 3, structured: 1, persuasive: 0 }
      },
      {
        text: 'I prefer to work solo when possible.',
        scores: { visionary: 1, analytical: 3, empathic: 0, innovative: 2, structured: 2, persuasive: 0 }
      }
    ]
  },
  {
    id: 'leadership-2',
    category: 'Leadership & Initiative',
    question: 'If something you\'re passionate about is being done poorly, what do you do?',
    options: [
      {
        text: 'Speak up and offer a better plan.',
        scores: { visionary: 3, analytical: 1, empathic: 1, innovative: 2, structured: 1, persuasive: 3 }
      },
      {
        text: 'Ask questions to understand what went wrong.',
        scores: { visionary: 1, analytical: 3, empathic: 2, innovative: 1, structured: 2, persuasive: 1 }
      },
      {
        text: 'Work quietly to improve your part.',
        scores: { visionary: 0, analytical: 2, empathic: 1, innovative: 2, structured: 3, persuasive: 0 }
      },
      {
        text: 'Let it be; you don\'t like conflict.',
        scores: { visionary: 0, analytical: 1, empathic: 3, innovative: 1, structured: 1, persuasive: 0 }
      }
    ]
  },
  {
    id: 'leadership-3',
    category: 'Leadership & Initiative',
    question: 'How do you respond to new opportunities?',
    options: [
      {
        text: 'Jump in quickly and figure it out as you go.',
        scores: { visionary: 3, analytical: 0, empathic: 1, innovative: 3, structured: 0, persuasive: 2 }
      },
      {
        text: 'Take time to assess the pros and cons.',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 1, structured: 3, persuasive: 1 }
      },
      {
        text: 'Only commit if it aligns with your long-term goals.',
        scores: { visionary: 2, analytical: 2, empathic: 2, innovative: 1, structured: 2, persuasive: 1 }
      },
      {
        text: 'Avoid them unless they feel 100% safe.',
        scores: { visionary: 0, analytical: 1, empathic: 2, innovative: 0, structured: 3, persuasive: 0 }
      }
    ]
  },

  // Category 2: Ambition & Drive
  {
    id: 'ambition-1',
    category: 'Ambition & Drive',
    question: 'Which statement best describes you?',
    options: [
      {
        text: 'I want to be the best in my field.',
        scores: { visionary: 3, analytical: 2, empathic: 0, innovative: 2, structured: 1, persuasive: 3 }
      },
      {
        text: 'I want to make a positive impact.',
        scores: { visionary: 2, analytical: 1, empathic: 3, innovative: 2, structured: 1, persuasive: 2 }
      },
      {
        text: 'I want a balanced life with consistent success.',
        scores: { visionary: 1, analytical: 2, empathic: 2, innovative: 1, structured: 3, persuasive: 1 }
      },
      {
        text: 'I want stability and peace of mind.',
        scores: { visionary: 0, analytical: 1, empathic: 2, innovative: 0, structured: 3, persuasive: 0 }
      }
    ]
  },
  {
    id: 'ambition-2',
    category: 'Ambition & Drive',
    question: 'How do you define success?',
    options: [
      {
        text: 'Earning recognition and leadership roles.',
        scores: { visionary: 3, analytical: 1, empathic: 0, innovative: 1, structured: 1, persuasive: 3 }
      },
      {
        text: 'Solving tough problems that matter.',
        scores: { visionary: 2, analytical: 3, empathic: 2, innovative: 2, structured: 1, persuasive: 1 }
      },
      {
        text: 'Helping others grow and improve.',
        scores: { visionary: 1, analytical: 1, empathic: 3, innovative: 1, structured: 1, persuasive: 2 }
      },
      {
        text: 'Feeling secure and respected.',
        scores: { visionary: 0, analytical: 1, empathic: 2, innovative: 0, structured: 3, persuasive: 1 }
      }
    ]
  },
  {
    id: 'ambition-3',
    category: 'Ambition & Drive',
    question: 'You have the opportunity to join an intensive program with 60-hour weeks but high payoff. What do you do?',
    options: [
      {
        text: 'Accept it immediately — I thrive under pressure.',
        scores: { visionary: 3, analytical: 2, empathic: 0, innovative: 2, structured: 1, persuasive: 2 }
      },
      {
        text: 'Take it if it aligns with my long-term goals.',
        scores: { visionary: 2, analytical: 3, empathic: 1, innovative: 1, structured: 2, persuasive: 2 }
      },
      {
        text: 'Maybe — I\'d need to ensure I can balance my life.',
        scores: { visionary: 1, analytical: 1, empathic: 3, innovative: 2, structured: 2, persuasive: 1 }
      },
      {
        text: 'Probably pass — I don\'t like burning out.',
        scores: { visionary: 0, analytical: 1, empathic: 2, innovative: 1, structured: 3, persuasive: 0 }
      }
    ]
  },

  // Category 3: Risk-Taking & Adaptability
  {
    id: 'risk-1',
    category: 'Risk-Taking & Adaptability',
    question: 'When faced with uncertainty, how do you feel?',
    options: [
      {
        text: 'Excited — it\'s a chance to grow.',
        scores: { visionary: 3, analytical: 1, empathic: 1, innovative: 3, structured: 0, persuasive: 2 }
      },
      {
        text: 'Ready — I trust my skills.',
        scores: { visionary: 2, analytical: 2, empathic: 1, innovative: 2, structured: 1, persuasive: 3 }
      },
      {
        text: 'Cautious — I want to plan first.',
        scores: { visionary: 1, analytical: 3, empathic: 2, innovative: 1, structured: 3, persuasive: 1 }
      },
      {
        text: 'Stressed — I like things predictable.',
        scores: { visionary: 0, analytical: 1, empathic: 2, innovative: 0, structured: 3, persuasive: 0 }
      }
    ]
  },
  {
    id: 'risk-2',
    category: 'Risk-Taking & Adaptability',
    question: 'You\'re offered two internships: one safe, one with potential but no guarantees. You:',
    options: [
      {
        text: 'Take the high-risk, high-reward role.',
        scores: { visionary: 3, analytical: 1, empathic: 0, innovative: 3, structured: 0, persuasive: 2 }
      },
      {
        text: 'Analyze both, leaning toward the bold choice.',
        scores: { visionary: 2, analytical: 3, empathic: 1, innovative: 2, structured: 1, persuasive: 2 }
      },
      {
        text: 'Choose the safer one for security.',
        scores: { visionary: 0, analytical: 1, empathic: 2, innovative: 0, structured: 3, persuasive: 1 }
      },
      {
        text: 'Pick whichever your mentor recommends.',
        scores: { visionary: 1, analytical: 2, empathic: 3, innovative: 1, structured: 2, persuasive: 1 }
      }
    ]
  },
  {
    id: 'risk-3',
    category: 'Risk-Taking & Adaptability',
    question: 'How do you respond to failure?',
    options: [
      {
        text: 'I bounce back stronger.',
        scores: { visionary: 3, analytical: 1, empathic: 1, innovative: 2, structured: 1, persuasive: 3 }
      },
      {
        text: 'I reflect and adapt my strategy.',
        scores: { visionary: 2, analytical: 3, empathic: 2, innovative: 2, structured: 2, persuasive: 1 }
      },
      {
        text: 'I get discouraged but try again.',
        scores: { visionary: 1, analytical: 1, empathic: 3, innovative: 2, structured: 1, persuasive: 1 }
      },
      {
        text: 'I avoid similar situations in the future.',
        scores: { visionary: 0, analytical: 2, empathic: 1, innovative: 0, structured: 3, persuasive: 0 }
      }
    ]
  },

  // Category 4: Creativity & Innovation
  {
    id: 'creativity-1',
    category: 'Creativity & Innovation',
    question: 'How do you usually solve a problem?',
    options: [
      {
        text: 'With original, out-of-the-box ideas.',
        scores: { visionary: 2, analytical: 1, empathic: 1, innovative: 3, structured: 0, persuasive: 2 }
      },
      {
        text: 'With logic and research.',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 1, structured: 2, persuasive: 1 }
      },
      {
        text: 'By asking others for input.',
        scores: { visionary: 1, analytical: 1, empathic: 3, innovative: 2, structured: 1, persuasive: 2 }
      },
      {
        text: 'By following proven methods.',
        scores: { visionary: 0, analytical: 2, empathic: 1, innovative: 0, structured: 3, persuasive: 1 }
      }
    ]
  },
  {
    id: 'creativity-2',
    category: 'Creativity & Innovation',
    question: 'When you get free time at work or school, you:',
    options: [
      {
        text: 'Brainstorm new ideas or projects.',
        scores: { visionary: 3, analytical: 1, empathic: 1, innovative: 3, structured: 0, persuasive: 2 }
      },
      {
        text: 'Explore and research something.',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 2, structured: 1, persuasive: 1 }
      },
      {
        text: 'Help someone else with their task.',
        scores: { visionary: 1, analytical: 1, empathic: 3, innovative: 1, structured: 2, persuasive: 1 }
      },
      {
        text: 'Relax — free time is for rest.',
        scores: { visionary: 0, analytical: 1, empathic: 2, innovative: 1, structured: 2, persuasive: 0 }
      }
    ]
  },
  {
    id: 'creativity-3',
    category: 'Creativity & Innovation',
    question: 'What\'s your dream work environment?',
    options: [
      {
        text: 'A startup with big ideas and high stakes.',
        scores: { visionary: 3, analytical: 1, empathic: 0, innovative: 3, structured: 0, persuasive: 2 }
      },
      {
        text: 'A lab or think tank with constant learning.',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 2, structured: 1, persuasive: 1 }
      },
      {
        text: 'A team-oriented nonprofit or social org.',
        scores: { visionary: 1, analytical: 1, empathic: 3, innovative: 1, structured: 1, persuasive: 2 }
      },
      {
        text: 'A structured and prestigious institution.',
        scores: { visionary: 1, analytical: 2, empathic: 1, innovative: 0, structured: 3, persuasive: 2 }
      }
    ]
  },

  // Category 5: Analytical & Technical Thinking
  {
    id: 'analytical-1',
    category: 'Analytical & Technical Thinking',
    question: 'Which task sounds most appealing?',
    options: [
      {
        text: 'Designing a revolutionary app.',
        scores: { visionary: 3, analytical: 2, empathic: 0, innovative: 3, structured: 1, persuasive: 1 }
      },
      {
        text: 'Solving a complex legal case.',
        scores: { visionary: 2, analytical: 3, empathic: 1, innovative: 1, structured: 2, persuasive: 3 }
      },
      {
        text: 'Running a fundraising campaign.',
        scores: { visionary: 2, analytical: 1, empathic: 3, innovative: 2, structured: 1, persuasive: 3 }
      },
      {
        text: 'Managing a corporate department.',
        scores: { visionary: 2, analytical: 2, empathic: 1, innovative: 0, structured: 3, persuasive: 2 }
      }
    ]
  },
  {
    id: 'analytical-2',
    category: 'Analytical & Technical Thinking',
    question: 'You enjoy working with:',
    options: [
      {
        text: 'Code, algorithms, and machines.',
        scores: { visionary: 1, analytical: 3, empathic: 0, innovative: 2, structured: 2, persuasive: 0 }
      },
      {
        text: 'Theories, concepts, and data.',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 1, structured: 2, persuasive: 1 }
      },
      {
        text: 'People, emotions, and motivation.',
        scores: { visionary: 2, analytical: 0, empathic: 3, innovative: 1, structured: 1, persuasive: 3 }
      },
      {
        text: 'Systems, plans, and logistics.',
        scores: { visionary: 1, analytical: 2, empathic: 1, innovative: 0, structured: 3, persuasive: 1 }
      }
    ]
  },
  {
    id: 'analytical-3',
    category: 'Analytical & Technical Thinking',
    question: 'How do you prepare for a major test or interview?',
    options: [
      {
        text: 'Make a custom study plan with unique strategies.',
        scores: { visionary: 3, analytical: 2, empathic: 1, innovative: 3, structured: 1, persuasive: 1 }
      },
      {
        text: 'Do intense research and gather all the data.',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 1, structured: 2, persuasive: 1 }
      },
      {
        text: 'Join a study group or ask others for tips.',
        scores: { visionary: 1, analytical: 1, empathic: 3, innovative: 1, structured: 1, persuasive: 2 }
      },
      {
        text: 'Stick to a clear checklist and routine.',
        scores: { visionary: 0, analytical: 2, empathic: 1, innovative: 0, structured: 3, persuasive: 1 }
      }
    ]
  },

  // Category 6: Communication & Influence
  {
    id: 'communication-1',
    category: 'Communication & Influence',
    question: 'When giving a presentation, you:',
    options: [
      {
        text: 'Love the spotlight and own the room.',
        scores: { visionary: 3, analytical: 0, empathic: 1, innovative: 2, structured: 0, persuasive: 3 }
      },
      {
        text: 'Use visuals and facts to make your point.',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 2, structured: 2, persuasive: 1 }
      },
      {
        text: 'Try to connect emotionally with the audience.',
        scores: { visionary: 1, analytical: 0, empathic: 3, innovative: 2, structured: 1, persuasive: 2 }
      },
      {
        text: 'Get nervous and keep it brief.',
        scores: { visionary: 0, analytical: 2, empathic: 2, innovative: 1, structured: 3, persuasive: 0 }
      }
    ]
  },
  {
    id: 'communication-2',
    category: 'Communication & Influence',
    question: 'You\'re trying to convince someone to join your cause. What\'s your approach?',
    options: [
      {
        text: 'Passionate speech and clear leadership.',
        scores: { visionary: 3, analytical: 0, empathic: 1, innovative: 2, structured: 1, persuasive: 3 }
      },
      {
        text: 'Data and logic to show your point.',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 1, structured: 2, persuasive: 2 }
      },
      {
        text: 'Ask them questions and empathize.',
        scores: { visionary: 1, analytical: 1, empathic: 3, innovative: 1, structured: 1, persuasive: 2 }
      },
      {
        text: 'Let your results speak for themselves.',
        scores: { visionary: 2, analytical: 2, empathic: 1, innovative: 1, structured: 3, persuasive: 1 }
      }
    ]
  },
  {
    id: 'communication-3',
    category: 'Communication & Influence',
    question: 'What feedback do you most often get?',
    options: [
      {
        text: '"You\'re a natural leader."',
        scores: { visionary: 3, analytical: 0, empathic: 1, innovative: 1, structured: 1, persuasive: 3 }
      },
      {
        text: '"You\'re smart and analytical."',
        scores: { visionary: 1, analytical: 3, empathic: 0, innovative: 1, structured: 2, persuasive: 1 }
      },
      {
        text: '"You\'re easy to talk to and inspiring."',
        scores: { visionary: 1, analytical: 0, empathic: 3, innovative: 2, structured: 1, persuasive: 2 }
      },
      {
        text: '"You\'re dependable and organized."',
        scores: { visionary: 1, analytical: 2, empathic: 2, innovative: 0, structured: 3, persuasive: 1 }
      }
    ]
  },

  // Category 7: Values & Goals
  {
    id: 'values-1',
    category: 'Values & Goals',
    question: 'What\'s most important to you in a career?',
    options: [
      {
        text: 'Influence and making decisions.',
        scores: { visionary: 3, analytical: 1, empathic: 0, innovative: 1, structured: 1, persuasive: 3 }
      },
      {
        text: 'Innovation and discovery.',
        scores: { visionary: 2, analytical: 3, empathic: 1, innovative: 3, structured: 0, persuasive: 1 }
      },
      {
        text: 'Helping others and connecting.',
        scores: { visionary: 1, analytical: 0, empathic: 3, innovative: 1, structured: 1, persuasive: 2 }
      },
      {
        text: 'Stability and steady growth.',
        scores: { visionary: 0, analytical: 2, empathic: 2, innovative: 0, structured: 3, persuasive: 1 }
      }
    ]
  },
  {
    id: 'values-2',
    category: 'Values & Goals',
    question: 'Which quote resonates most?',
    options: [
      {
        text: '"Fortune favors the bold."',
        scores: { visionary: 3, analytical: 1, empathic: 0, innovative: 2, structured: 0, persuasive: 2 }
      },
      {
        text: '"Knowledge is power."',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 1, structured: 2, persuasive: 2 }
      },
      {
        text: '"Empathy is strength."',
        scores: { visionary: 1, analytical: 0, empathic: 3, innovative: 1, structured: 1, persuasive: 1 }
      },
      {
        text: '"Discipline equals freedom."',
        scores: { visionary: 1, analytical: 2, empathic: 1, innovative: 0, structured: 3, persuasive: 1 }
      }
    ]
  },
  {
    id: 'values-3',
    category: 'Values & Goals',
    question: 'What kind of legacy do you want to leave?',
    options: [
      {
        text: 'A trail of disruptive success and bold moves.',
        scores: { visionary: 3, analytical: 0, empathic: 0, innovative: 2, structured: 0, persuasive: 2 }
      },
      {
        text: 'Major contributions to science or thought.',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 2, structured: 1, persuasive: 1 }
      },
      {
        text: 'Changed lives through care or action.',
        scores: { visionary: 1, analytical: 1, empathic: 3, innovative: 1, structured: 1, persuasive: 2 }
      },
      {
        text: 'A well-run system or institution.',
        scores: { visionary: 1, analytical: 2, empathic: 1, innovative: 0, structured: 3, persuasive: 1 }
      }
    ]
  },

  // Category 8: Self-Awareness & Motivation
  {
    id: 'motivation-1',
    category: 'Self-Awareness & Motivation',
    question: 'How do you handle big goals?',
    options: [
      {
        text: 'Break them into steps and dominate each one.',
        scores: { visionary: 3, analytical: 2, empathic: 1, innovative: 1, structured: 2, persuasive: 2 }
      },
      {
        text: 'Research everything before starting.',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 1, structured: 3, persuasive: 1 }
      },
      {
        text: 'Talk it through with others for perspective.',
        scores: { visionary: 1, analytical: 1, empathic: 3, innovative: 2, structured: 1, persuasive: 2 }
      },
      {
        text: 'Take small actions and build momentum.',
        scores: { visionary: 0, analytical: 2, empathic: 2, innovative: 2, structured: 3, persuasive: 1 }
      }
    ]
  },
  {
    id: 'motivation-2',
    category: 'Self-Awareness & Motivation',
    question: 'What motivates you more?',
    options: [
      {
        text: 'Power and competition.',
        scores: { visionary: 3, analytical: 1, empathic: 0, innovative: 1, structured: 1, persuasive: 3 }
      },
      {
        text: 'Mastery and understanding.',
        scores: { visionary: 1, analytical: 3, empathic: 1, innovative: 2, structured: 2, persuasive: 1 }
      },
      {
        text: 'Purpose and relationships.',
        scores: { visionary: 1, analytical: 0, empathic: 3, innovative: 2, structured: 1, persuasive: 2 }
      },
      {
        text: 'Security and routine.',
        scores: { visionary: 0, analytical: 2, empathic: 2, innovative: 0, structured: 3, persuasive: 1 }
      }
    ]
  },
  {
    id: 'motivation-3',
    category: 'Self-Awareness & Motivation',
    question: 'How do you handle criticism?',
    options: [
      {
        text: 'Use it to prove people wrong.',
        scores: { visionary: 3, analytical: 1, empathic: 0, innovative: 2, structured: 1, persuasive: 3 }
      },
      {
        text: 'Reflect and adjust.',
        scores: { visionary: 1, analytical: 3, empathic: 2, innovative: 2, structured: 2, persuasive: 1 }
      },
      {
        text: 'Feel it deeply but grow from it.',
        scores: { visionary: 1, analytical: 1, empathic: 3, innovative: 2, structured: 1, persuasive: 1 }
      },
      {
        text: 'Avoid it if I can.',
        scores: { visionary: 0, analytical: 1, empathic: 1, innovative: 1, structured: 2, persuasive: 0 }
      }
    ]
  }
];