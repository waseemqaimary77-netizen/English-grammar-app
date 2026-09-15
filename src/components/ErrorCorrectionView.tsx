import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { RuleExplanationCard } from './RuleExplanationCard';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Check, X, RotateCcw, ArrowLeft, PenTool, Lightbulb, Flame } from 'lucide-react';

interface Props {
  question: Question;
  onAnswerSubmit?: (questionId: string, userAnswer: string, isCorrect: boolean) => void;
  onNextQuestion?: () => void;
  isLast?: boolean;
}

export const ErrorCorrectionView: React.FC<Props> = ({
  question,
  onAnswerSubmit,
  onNextQuestion,
  isLast = false
}) => {
  const [userCorrection, setUserCorrection] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    setUserCorrection('');
    setIsSubmitted(false);
    setIsCorrect(null);
  }, [question.id]);

  const normalize = (val: string) => {
    return val
      .trim()
      .toLowerCase()
      .replace(/[\u2018\u2019`]/g, "'") // Normalize curved apostrophes
      .replace(/\s+/g, ' ');
  };

  const handleCheck = () => {
    if (isSubmitted || !userCorrection.trim()) return;

    const userNorm = normalize(userCorrection);
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
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // ignore
      }
    } else {
      sounds.playIncorrect();
    }

    if (onAnswerSubmit) {
      onAnswerSubmit(question.id, userCorrection, correct);
    }
  };

  const handleTryAgain = () => {
    setUserCorrection('');
    setIsSubmitted(false);
    setIsCorrect(null);
  };

  const quickShortcuts = ["doesn't", "don't", "isn't", "is", "are", "am"];

  const handleShortcutClick = (shortcut: string) => {
    if (isSubmitted) return;
    setUserCorrection(prev => {
      const trimmed = prev.trim();
      if (!trimmed) return shortcut + ' ';
      return `${trimmed} ${shortcut} `;
    });
  };

  return (
    <div id={`error-correction-view-${question.id}`} className="space-y-5">
      {/* Header card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
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

        {/* English Sentence */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left dir-ltr">
          <p className="text-xl sm:text-2xl font-bold font-sans text-slate-800 leading-relaxed">
            {question.sentenceEn}
          </p>
        </div>

        {question.bracketVerb && (
          <div className="mt-3 flex items-center justify-between text-xs text-slate-600 bg-violet-50/50 p-2.5 rounded-lg border border-violet-100">
            <span className="font-medium text-slate-700">المطلوب: ضع الفعل أو النفي بالشكل الصحيح:</span>
            <span className="font-mono font-bold text-violet-900 dir-ltr bg-white px-2 py-0.5 rounded border border-violet-200">
              {question.bracketVerb}
            </span>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <label className="block text-sm font-bold text-slate-700 mb-2 text-right">
          اكتب التصحيح المطلوب هنا (Correct Verb Form):
        </label>

        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              dir="ltr"
              value={userCorrection}
              onChange={e => setUserCorrection(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') handleCheck();
              }}
              disabled={isSubmitted}
              placeholder="e.g. goes, doesn't promote, is falling..."
              className="w-full pl-4 pr-10 py-3.5 rounded-xl border-2 border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 font-mono text-xl text-slate-800 outline-hidden transition-all disabled:bg-slate-50"
            />
            <div className="absolute right-3 top-3.5 text-slate-400">
              <PenTool className="w-5 h-5" />
            </div>
          </div>

          {/* Quick auxiliary chips */}
          {!isSubmitted && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs text-slate-500 font-medium">أزرار مساعدة سريعة:</span>
              {quickShortcuts.map((sc, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleShortcutClick(sc)}
                  className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-100 hover:bg-violet-100 text-slate-700 hover:text-violet-900 rounded-md border border-slate-200 cursor-pointer transition-colors dir-ltr"
                >
                  +{sc}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Check button or result */}
        {!isSubmitted ? (
          <div className="mt-5 flex justify-end">
            <button
              onClick={handleCheck}
              disabled={!userCorrection.trim()}
              id="error-correction-submit-btn"
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Check className="w-4 h-4" />
              <span>تحقق من تصحيح الفعل</span>
            </button>
          </div>
        ) : (
          <div className="mt-4 p-4 rounded-xl border-2 flex flex-col gap-2 dir-ltr text-left">
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                  <Check className="w-3.5 h-3.5" /> إجابة وتصريف صحيح 100%!
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white">
                  <X className="w-3.5 h-3.5" /> إجابة غير دقيقة - انظر الحل المعتمد أدناه
                </span>
              )}
            </div>

            <div className="mt-1">
              <span className="text-xs text-slate-500 block">التصحيح المعتمد وفق دفتر المعلمة:</span>
              <p className="text-xl font-bold font-mono text-emerald-800 mt-0.5">
                {question.correctAnswer}
              </p>
              {question.acceptableAnswers && question.acceptableAnswers.length > 1 && (
                <span className="text-xs text-slate-500 mt-1 block">
                  صيغ أخرى مقبولة: {question.acceptableAnswers.join(' أو ')}
                </span>
              )}
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
            id="error-correction-try-again-btn"
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            إعادة المحاولة
          </button>

          {onNextQuestion && (
            <button
              onClick={onNextQuestion}
              id="error-correction-next-btn"
              className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold flex items-center gap-2 cursor-pointer shadow-sm transition-colors"
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
