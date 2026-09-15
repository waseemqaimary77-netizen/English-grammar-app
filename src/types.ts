export type QuestionType = 'mcq' | 'make_question' | 'error_correction';

export type GrammarCategory = 
  | 'present_simple' 
  | 'present_continuous' 
  | 'stative_verbs' 
  | 'mixed';

export interface RuleDetail {
  ruleTitle: string;
  ruleFormula: string;
  keywordOrTrigger?: string;
  teacherNote: string;
  arabicExplanation: string;
  englishGrammarRule: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  category: GrammarCategory;
  titleAr: string;
  sentenceEn: string;
  bracketVerb?: string;
  options?: string[]; // For MCQ or Word Bank
  correctAnswer: string;
  acceptableAnswers?: string[]; // Variations (case-insensitive, punctuation)
  wordsForOrdering?: string[]; // Word chips for Make a Question
  errorWord?: string; // For mistake correction
  correctedSentence?: string;
  ruleBadge: string;
  ruleDetail: RuleDetail;
  fromNotebook: boolean;
  notebookPage?: 1 | 2 | 3 | 4 | 5;
  difficulty?: 'normal' | 'tricky';
  trapExplanation?: string;
}

export interface UserAnswerRecord {
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  timestamp: number;
}

export interface QuizState {
  currentIndex: number;
  score: number;
  answers: Record<string, UserAnswerRecord>;
  completed: boolean;
  selectedCategory: GrammarCategory | 'all';
  selectedType: QuestionType | 'all';
}
