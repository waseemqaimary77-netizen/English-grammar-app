import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { RuleExplanationCard } from './RuleExplanationCard';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Check, X, RotateCcw, ArrowLeft, Delete, Sparkles, HelpCircle, Flame } from 'lucide-react';

interface Props {
  question: Question;
  onAnswerSubmit?: (questionId: string, userAnswer: string, isCorrect: boolean) => void;
  onNextQuestion?: () => void;
  isLast?: boolean;
}

export const MakeQuestionView: React.FC<Props> = ({
  question,
  onAnswerSubmit,
  onNextQuestion,
  isLast = false
}) => {
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [selectedWordChips, setSelectedWordChips] = useState<string[]>([]);
  const [availableChips, setAvailableChips] = useState<{ id: string; word: string; used: boolean }[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [inputMode, setInputMode] = useState<'chips' | 'typing'>('chips');

  // Prepare word chips shuffled or prepared
  useEffect(() => {
    setIsSubmitted(false);
    setIsCorrect(null);
    setShowHint(false);
    setTypedAnswer('');
    setSelectedWordChips([]);

    if (question.wordsForOrdering && question.wordsForOrdering.length > 0) {
      // Shuffle words slightly so it's a real exercise
      const chips = [...question.wordsForOrdering]
        .map((w, index) => ({ id: `${index}-${w}`, word: w, used: false }))
        .sort(() => Math.random() - 0.5);
      setAvailableChips(chips);
    } else {
      // Create chips from correct answer
      const tokens = question.correctAnswer.replace('?', ' ?').split(' ').filter(Boolean);
      const chips = tokens
        .map((w, index) => ({ id: `${index}-${w}`, word: w, used: false }))
        .sort(() => Math.random() - 0.5);
      setAvailableChips(chips);
    }
  }, [question.id]);

  const handleChipClick = (chipId: string) => {
    if (isSubmitted) return;
    const targetChip = availableChips.find(c => c.id === chipId);
    if (!targetChip || targetChip.used) return;

    // Mark as used
    setAvailableChips(prev =>
      prev.map(c => (c.id === chipId ? { ...c, used: true } : c))
    );
    setSelectedWordChips(prev => [...prev, targetChip.word]);
  };

  const handleRemoveChip = (indexToRemove: number) => {
    if (isSubmitted) return;
    const wordToRemove = selectedWordChips[indexToRemove];
    
    // Unmark the first matching used chip
    let unmarked = false;
    setAvailableChips(prev =>
      prev.map(c => {
        if (!unmarked && c.used && c.word === wordToRemove) {
          unmarked = true;
          return { ...c, used: false };
        }
        return c;
      })
    );

    setSelectedWordChips(prev => prev.filter((_, i) => i !== indexToRemove));
  };

  const handleResetChips = () => {
    if (isSubmitted) return;
    setAvailableChips(prev => prev.map(c => ({ ...c, used: false })));
    setSelectedWordChips([]);
  };

  const currentConstructedSentence = inputMode === 'chips' 
    ? selectedWordChips.join(' ').replace(/\s+\?/g, '?') 
    : typedAnswer;

  const normalize = (text: string) => {
    return text
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[?؟]/g, '')
      .trim();
  };

  const checkAnswer = () => {
    if (isSubmitted) return;
    const userNorm = normalize(currentConstructedSentence);
    const correctNorm = normalize(question.correctAnswer);

    let correct = userNorm === correctNorm;
    if (!correct && question.acceptableAnswers) {
      correct = question.acceptableAnswers.some(ans => normalize(ans) === userNorm);
    }

    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct) {
      sounds.playCorrect();
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    } else {
      sounds.playIncorrect();
    }

    if (onAnswerSubmit) {
      onAnswerSubmit(question.id, currentConstructedSentence, correct);
    }
  };

  const handleTryAgain = () => {
    setIsSubmitted(false);
    setIsCorrect(null);
    handleResetChips();
    setTypedAnswer('');
  };

  return (
    <div id={`make-question-view-${question.id}`} className="space-y-5">
      {/* Exercise Card Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
            {question.titleAr}
          </span>
          <div className="flex items-center gap-1.5">
            {question.difficulty === 'tricky' && (
              <span className="inline-flex items-center gap-1 text-xs font-black text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-300 shadow-xs">
                <Flame className="w-3.5 h-3.5 text-rose-600" />
                سؤال تريكي امتحاني
              </span>
            )}
            {question.fromNotebook ? (
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                دفتر المعلمة (صفحة {question.notebookPage})
              </span>
            ) : (
              <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                سؤال خارجي إضافي
              </span>
            )}
          </div>
        </div>

        {/* Prompt from Notebook */}
        <div className="text-right">
          <p className="text-sm font-semibold text-slate-500 mb-1">
            صيغة المعطيات من الدفتر / السؤال المطلوب تكوينه:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left dir-ltr">
            <span className="text-xl sm:text-2xl font-mono font-bold text-indigo-900">
              {question.sentenceEn}
            </span>
          </div>
        </div>

        {/* Mode Toggle & Hints */}
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setInputMode('chips')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                inputMode === 'chips' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ترتيب الكلمات التفاعلي (Word Chips)
            </button>
            <button
              onClick={() => setInputMode('typing')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                inputMode === 'typing' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              الكتابة باليد (Manual Typing)
            </button>
          </div>

          <button
            onClick={() => setShowHint(!showHint)}
            className="text-amber-700 hover:text-amber-800 flex items-center gap-1 font-bold cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            {showHint ? 'إخفاء التلميح' : 'مساعدة / تلميح'}
          </button>
        </div>

        {showHint && (
          <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed text-right">
            💡 تلميح: تذكّر ترتيب السؤال في الدفتر: الفعل المساعد أولاً (Does / Do / Is) ثم الفاعل ثم الفعل في المصدر المجرد خالي من s!
          </div>
        )}
      </div>

      {/* Answer Construction Area */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <label className="block text-sm font-bold text-slate-700 mb-2 text-right">
          سؤالك الذي قمت بتكوينه:
        </label>

        {inputMode === 'chips' ? (
          <div>
            {/* Display constructed sentence from chips */}
            <div className="min-h-[70px] p-4 rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50/30 flex flex-wrap items-center gap-2 dir-ltr text-left">
              {selectedWordChips.length === 0 ? (
                <span className="text-slate-400 font-medium text-sm italic">
                  انقر على الكلمات بالترتيب لتكوين السؤال هنا...
                </span>
              ) : (
                selectedWordChips.map((word, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRemoveChip(idx)}
                    disabled={isSubmitted}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-sm shadow-xs flex items-center gap-1.5 cursor-pointer disabled:cursor-default"
                  >
                    <span>{word}</span>
                    {!isSubmitted && <X className="w-3 h-3 text-indigo-200" />}
                  </button>
                ))
              )}
            </div>

            {/* Chips bank to pick from */}
            {!isSubmitted && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-600 text-right">
                    الكلمات المتاحة للاختيار:
                  </span>
                  <button
                    onClick={handleResetChips}
                    disabled={selectedWordChips.length === 0}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer disabled:opacity-40"
                  >
                    <Delete className="w-3.5 h-3.5" />
                    مسح الترتيب والبدء من جديد
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 dir-ltr">
                  {availableChips.map(chip => (
                    <button
                      key={chip.id}
                      onClick={() => handleChipClick(chip.id)}
                      disabled={chip.used}
                      className={`px-3.5 py-2 rounded-xl border-2 font-semibold text-base transition-all ${
                        chip.used
                          ? 'border-slate-200 bg-slate-100 text-slate-300 cursor-default line-through'
                          : 'border-slate-300 bg-white hover:border-indigo-500 hover:bg-indigo-50 text-slate-800 shadow-xs cursor-pointer'
                      }`}
                    >
                      {chip.word}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Typing input mode */
          <div className="space-y-3">
            <input
              type="text"
              dir="ltr"
              value={typedAnswer}
              onChange={e => setTypedAnswer(e.target.value)}
              disabled={isSubmitted}
              placeholder="Type your question here (e.g., Does Huda watch TV every day?)..."
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 font-mono text-lg text-slate-800 outline-hidden transition-all disabled:bg-slate-50"
            />
          </div>
        )}

        {/* Submission and verification */}
        {!isSubmitted ? (
          <div className="mt-5 flex justify-end">
            <button
              onClick={checkAnswer}
              disabled={
                inputMode === 'chips'
                  ? selectedWordChips.length === 0
                  : typedAnswer.trim().length === 0
              }
              id="make-question-submit-btn"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Check className="w-4 h-4" />
              <span>تحقق من تكوين السؤال</span>
            </button>
          </div>
        ) : (
          /* Display Result status */
          <div className="mt-4 p-4 rounded-xl border-2 flex flex-col gap-2 dir-ltr text-left">
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                  <Check className="w-3.5 h-3.5" /> Perfect Question! إجابة صحيحة
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white">
                  <X className="w-3.5 h-3.5" /> حاول مرة أخرى أو انتبه للترتيب الصحيح
                </span>
              )}
            </div>

            <div className="mt-1">
              <span className="text-xs text-slate-500 block">السؤال النموذجي من الدفتر:</span>
              <p className="text-lg font-bold font-mono text-emerald-800 mt-0.5">
                {question.correctAnswer}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Immediate Rule Explanation Card (ووضع القاعدة مع كل اجابة) */}
      {isSubmitted && (
        <RuleExplanationCard
          ruleDetail={question.ruleDetail}
          ruleBadge={question.ruleBadge}
          isCorrect={isCorrect ?? false}
          fromNotebook={question.fromNotebook}
          notebookPage={question.notebookPage}
          difficulty={question.difficulty}
          trapExplanation={question.trapExplanation}
        />
      )}

      {/* Action controls */}
      {isSubmitted && (
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handleTryAgain}
            id="make-question-try-again-btn"
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            إعادة المحاولة
          </button>

          {onNextQuestion && (
            <button
              onClick={onNextQuestion}
              id="make-question-next-btn"
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold flex items-center gap-2 cursor-pointer shadow-sm transition-colors"
            >
              <span>{isLast ? 'إنهاء التدريب' : 'السؤال التالي'}</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
