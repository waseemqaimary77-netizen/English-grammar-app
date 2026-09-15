import React, { useState, useEffect, useCallback } from 'react';
import { QUESTIONS } from './data/questions';
import { Question, GrammarCategory, UserAnswerRecord } from './types';
import { McqQuestionView } from './components/McqQuestionView';
import { NotebookGuideView } from './components/NotebookGuideView';
import { ExamResultsModal } from './components/ExamResultsModal';
import { sounds } from './utils/audio';
import { 
  BookOpen, 
  Award, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw,
  CheckCircle2,
  Filter,
  GraduationCap,
  Flame,
  Target,
  UserCheck,
  Dices,
  RefreshCw,
  Heart,
  ShieldCheck
} from 'lucide-react';

type AppTab = 'notebook' | 'exam';
type ExamFilter = 'all' | 'notebook_only' | 'tricky_only' | 'external_only' | 'present_simple' | 'present_continuous' | 'stative_verbs';

/**
 * Utility to generate exactly 10 random questions from the pool
 * with shuffled questions and shuffled options inside each question.
 */
function generateRandom10Questions(filter: ExamFilter, pool: Question[] = QUESTIONS): Question[] {
  let filtered = pool;
  if (filter === 'notebook_only') {
    filtered = pool.filter(q => q.fromNotebook);
  } else if (filter === 'tricky_only') {
    filtered = pool.filter(q => q.difficulty === 'tricky');
  } else if (filter === 'external_only') {
    filtered = pool.filter(q => !q.fromNotebook);
  } else if (filter === 'present_simple') {
    filtered = pool.filter(q => q.category === 'present_simple');
  } else if (filter === 'present_continuous') {
    filtered = pool.filter(q => q.category === 'present_continuous');
  } else if (filter === 'stative_verbs') {
    filtered = pool.filter(q => q.category === 'stative_verbs');
  }

  // Fisher-Yates shuffle
  const shuffled = [...filtered];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Exactly 10 questions without repetition
  const selected = shuffled.slice(0, Math.min(10, shuffled.length));

  // Also shuffle the 4 choices in each question so order of answers is random
  return selected.map(q => {
    const shuffledOpts = [...q.options];
    for (let i = shuffledOpts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOpts[i], shuffledOpts[j]] = [shuffledOpts[j], shuffledOpts[i]];
    }
    return {
      ...q,
      options: shuffledOpts
    };
  });
}

export default function App() {
  // Only two primary tabs: Notebook Transcription & Comprehensive Exam
  const [activeTab, setActiveTab] = useState<AppTab>('exam');
  const [examFilter, setExamFilter] = useState<ExamFilter>('all');
  const [examQuestions, setExamQuestions] = useState<Question[]>(() => generateRandom10Questions('all'));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswerRecord>>({});
  const [isExamCompleted, setIsExamCompleted] = useState<boolean>(false);

  // Toggle sound
  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sounds.enabled = nextState;
  };

  // Start a fresh random 10-question set
  const startNewRandomExam = useCallback((filter: ExamFilter = examFilter) => {
    const newQuestions = generateRandom10Questions(filter);
    setExamQuestions(newQuestions);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setIsExamCompleted(false);
  }, [examFilter]);

  // Handle changing exam category filter
  const handleFilterChange = (filter: ExamFilter) => {
    setExamFilter(filter);
    startNewRandomExam(filter);
  };

  // Answer submit
  const handleAnswerSubmit = (questionId: string, userAnswer: string, isCorrect: boolean) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: {
        questionId,
        userAnswer,
        isCorrect,
        timestamp: Date.now()
      }
    }));
  };

  // Next Question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Finished the 10 questions!
      setIsExamCompleted(true);
    }
  };

  // Previous Question
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Review a specific question from the results modal
  const handleReviewQuestionFromResults = (idx: number) => {
    setCurrentQuestionIndex(idx);
    setIsExamCompleted(false);
  };

  // Retake only mistakes
  const handleRetakeMistakesOnly = (mistakeIds: string[]) => {
    const filteredMistakes = examQuestions.filter(q => mistakeIds.includes(q.id));
    if (filteredMistakes.length > 0) {
      setExamQuestions(filteredMistakes);
      setUserAnswers({});
      setCurrentQuestionIndex(0);
      setIsExamCompleted(false);
    }
  };

  // Restart current set of questions
  const handleRestartSameQuestions = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setIsExamCompleted(false);
  };

  const currentQuestion = examQuestions[currentQuestionIndex] || examQuestions[0];
  const totalQuestions = examQuestions.length;
  const answeredCount = examQuestions.filter(q => !!userAnswers[q.id]).length;
  const correctCount = examQuestions.filter(q => userAnswers[q.id]?.isCorrect).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-xs shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    English Grammar Trainer
                  </h1>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                    إهداء خاص: أكرم عواد (صاحب الواد) 🌟
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                    <UserCheck className="w-3 h-3 text-blue-600" />
                    المطور: وسيم قيمري
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  قواعد المضارع البسيط، المستمر، والأفعال التقريرية (بنك من 82 سؤالاً شاملاً)
                </p>
              </div>
            </div>

            {/* Sound Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleSound}
                title={soundEnabled ? 'كتم الصوت' : 'تشغيل الصوت'}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 border border-slate-200 cursor-pointer transition-colors"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <VolumeX className="w-4 h-4 text-slate-400" />
                )}
              </button>
            </div>
          </div>

          {/* EXACTLY TWO APPLICATION TABS */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex gap-2 pb-2 pt-1">
            {/* Tab 1: تفريغ الدفتر للدراسة */}
            <button
              onClick={() => setActiveTab('notebook')}
              className={`flex-1 py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === 'notebook'
                  ? 'bg-amber-400 text-slate-950 shadow-xs scale-101'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>قائمة تفريغ الدفتر وقواعده للدراسة 📖</span>
            </button>

            {/* Tab 2: الاختبار الشامل */}
            <button
              onClick={() => setActiveTab('exam')}
              className={`flex-1 py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === 'exam'
                  ? 'bg-blue-600 text-white shadow-xs scale-101'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>قائمة الاختبار الشامل (10 أسئلة عشوائية) 🎯</span>
            </button>
          </div>
        </header>

        {/* Main Body */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-12 space-y-6">
          {/* TAB 1: NOTEBOOK VIEW */}
          {activeTab === 'notebook' ? (
            <NotebookGuideView />
          ) : isExamCompleted ? (
            /* EXAM COMPLETED: SHOW SCORE & DETAILED REVIEW */
            <ExamResultsModal
              questions={examQuestions}
              answers={userAnswers}
              onRestartAll={handleRestartSameQuestions}
              onReviewQuestion={handleReviewQuestionFromResults}
              onRetakeMistakesOnly={handleRetakeMistakesOnly}
              onStartNewRandomExam={() => startNewRandomExam()}
            />
          ) : (
            /* TAB 2: EXAM IN PROGRESS (10 RANDOM QUESTIONS) */
            <>
              {/* Exam Category Filter Chips & Randomize Button */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-bold">
                    <Filter className="w-3.5 h-3.5 text-blue-600" />
                    <span>اختر نوع بنك الـ 10 أسئلة العشوائية:</span>
                  </div>

                  {/* New 10 Random questions button */}
                  <button
                    onClick={() => startNewRandomExam()}
                    className="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-2xs"
                  >
                    <Dices className="w-3.5 h-3.5 text-blue-600" />
                    <span>توليد 10 أسئلة عشوائية جديدة 🎲</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 text-xs font-bold">
                  <button
                    onClick={() => handleFilterChange('all')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      examFilter === 'all'
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    شامل (دفتر + خارجي)
                  </button>
                  <button
                    onClick={() => handleFilterChange('notebook_only')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                      examFilter === 'notebook_only'
                        ? 'bg-amber-500 text-slate-950 font-black shadow-2xs'
                        : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    من الدفتر فقط ⭐
                  </button>
                  <button
                    onClick={() => handleFilterChange('tricky_only')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                      examFilter === 'tricky_only'
                        ? 'bg-rose-600 text-white font-black shadow-2xs'
                        : 'bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    <Flame className="w-3 h-3 text-rose-600" />
                    أسئلة تريكية وصعبة 🔥
                  </button>
                  <button
                    onClick={() => handleFilterChange('external_only')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                      examFilter === 'external_only'
                        ? 'bg-teal-700 text-white font-black shadow-2xs'
                        : 'bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100'
                    }`}
                  >
                    <Target className="w-3 h-3 text-teal-600" />
                    أسئلة خارجية للامتحان 🎯
                  </button>
                  <button
                    onClick={() => handleFilterChange('present_simple')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      examFilter === 'present_simple'
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                    }`}
                  >
                    مضارع بسيط
                  </button>
                  <button
                    onClick={() => handleFilterChange('present_continuous')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      examFilter === 'present_continuous'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100'
                    }`}
                  >
                    مضارع مستمر
                  </button>
                  <button
                    onClick={() => handleFilterChange('stative_verbs')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      examFilter === 'stative_verbs'
                        ? 'bg-amber-600 text-white'
                        : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                    }`}
                  >
                    أفعال تقريرية Stative
                  </button>
                </div>
              </div>

              {/* Exam Progress & Navigation Header */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-900 font-extrabold">
                      السؤال {currentQuestionIndex + 1} من {totalQuestions}
                    </span>
                    <span className="text-slate-500 font-medium hidden sm:inline">
                      (10 أسئلة عشوائية دون ترتيب مسبق)
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-slate-700 font-bold">
                      أجبت: {answeredCount} / {totalQuestions}
                    </span>
                    {answeredCount > 0 && (
                      <span className="text-emerald-700 font-bold">
                        العلامة الحالية: {correctCount} / {answeredCount}
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-linear-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIndex + 1) / (totalQuestions || 1)) * 100}%`
                    }}
                  ></div>
                </div>

                {/* 10 Question Dots Navigator */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {examQuestions.map((q, idx) => {
                      const ans = userAnswers[q.id];
                      let dotClass = "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200";

                      if (idx === currentQuestionIndex) {
                        dotClass = "ring-2 ring-blue-500 bg-blue-600 text-white font-extrabold scale-105";
                      } else if (ans) {
                        if (ans.isCorrect) {
                          dotClass = "bg-emerald-600 text-white";
                        } else {
                          dotClass = "bg-rose-600 text-white";
                        }
                      }

                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentQuestionIndex(idx)}
                          className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${dotClass}`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  {answeredCount > 0 && (
                    <button
                      onClick={() => setIsExamCompleted(true)}
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>إنهاء وتسليم الاختبار ({answeredCount}/{totalQuestions})</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Current Question View */}
              {currentQuestion ? (
                <div>
                  <McqQuestionView
                    key={currentQuestion.id}
                    question={currentQuestion}
                    onAnswerSubmit={handleAnswerSubmit}
                    onNextQuestion={handleNextQuestion}
                    isLast={currentQuestionIndex === examQuestions.length - 1}
                  />

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-4 text-xs font-bold">
                    <button
                      onClick={handlePrevQuestion}
                      disabled={currentQuestionIndex === 0}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>السابق</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => startNewRandomExam()}
                        className="px-3 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>اختبار عشوائي آخر</span>
                      </button>

                      {currentQuestionIndex === examQuestions.length - 1 && answeredCount > 0 && (
                        <button
                          onClick={() => setIsExamCompleted(true)}
                          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                        >
                          <Award className="w-4 h-4" />
                          <span>عرض العلامة والنتيجة النهائية</span>
                        </button>
                      )}
                    </div>

                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                    >
                      <span>{currentQuestionIndex === examQuestions.length - 1 ? 'إنهاء وعرض العلامة' : 'التالي'}</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </main>
      </div>

      {/* Footer with Akram Awwad dedication, Al-Wad company copyright & Waseem Qaimary Developer Credit */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-10 text-xs text-slate-600 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-slate-100">
            {/* Dedication to Akram Awwad */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
              <span>إهداء خاص إلى: <strong className="text-amber-950 underline decoration-amber-400">أكرم عواد (صاحب الواد)</strong> 🌟</span>
            </div>

            {/* Developer credit */}
            <div className="font-semibold text-slate-600 flex items-center gap-1.5 text-xs">
              <UserCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>تطوير وإعداد: <strong className="text-blue-700">وسيم قيمري (Waseem Qaimary)</strong></span>
            </div>
          </div>

          {/* Copyright notice for Al-Wad Import and Export Company */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[11px] pt-1">
            <div className="flex items-center gap-1.5 font-bold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>جميع الحقوق محفوظة لدى <strong className="text-slate-900">شركة الواد للاستيراد والتصدير</strong> © {new Date().getFullYear()}</span>
            </div>
            <div className="text-slate-400 font-medium">
              English Grammar Trainer • بنك تدريب واختبارات قواعد اللغة الإنجليزية الشامل
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
