import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { RuleExplanationCard } from './RuleExplanationCard';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { ArrowLeft, Check, X, RotateCcw, Flame } from 'lucide-react';

interface Props {
  question: Question;
  onAnswerSubmit?: (questionId: string, selectedOption: string, isCorrect: boolean) => void;
  onNextQuestion?: () => void;
  isLast?: boolean;
}

export const McqQuestionView: React.FC<Props> = ({
  question,
  onAnswerSubmit,
  onNextQuestion,
  isLast = false
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [question.id]);

  const handleSelect = (option: string) => {
    if (isSubmitted) return;
    setSelectedOption(option);
    setIsSubmitted(true);

    const isCorrect = option.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();
    
    if (isCorrect) {
      sounds.playCorrect();
      try {
        confetti({
          particleCount: 40,
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
      onAnswerSubmit(question.id, option, isCorrect);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const isCorrect = selectedOption?.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();

  return (
    <div id={`mcq-view-${question.id}`} className="space-y-5">
      {/* Question Header & Prompt */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
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

        {/* English Sentence Display */}
        <div className="text-left dir-ltr p-4 rounded-xl bg-slate-50 border border-slate-200">
          <p className="text-xl sm:text-2xl font-bold font-sans text-slate-800 leading-relaxed tracking-wide">
            {question.sentenceEn}
          </p>
        </div>

        {question.bracketVerb && (
          <p className="text-xs text-slate-500 mt-2 text-right">
            الفعل الأصلي المطلوب تصريفه: <span className="font-mono font-bold text-slate-700 dir-ltr inline-block">({question.bracketVerb})</span>
          </p>
        )}
      </div>

      {/* Options grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="mcq-options-container">
        {question.options?.map((option, idx) => {
          const letter = String.fromCharCode(65 + idx); // A, B, C, D
          const isThisSelected = selectedOption === option;
          const isThisCorrect = option.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();

          let btnStyles = "bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-slate-800";
          if (isSubmitted) {
            if (isThisCorrect) {
              btnStyles = "bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20";
            } else if (isThisSelected && !isThisCorrect) {
              btnStyles = "bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-500/20";
            } else {
              btnStyles = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              id={`mcq-option-${idx}`}
              onClick={() => handleSelect(option)}
              disabled={isSubmitted}
              className={`flex items-center justify-between p-4 rounded-xl border-2 font-medium text-left dir-ltr transition-all duration-200 ${btnStyles} cursor-pointer disabled:cursor-default`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                  isSubmitted && isThisCorrect 
                    ? 'bg-emerald-600 text-white' 
                    : isSubmitted && isThisSelected && !isThisCorrect
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {letter}
                </span>
                <span className="font-sans font-semibold text-lg">{option}</span>
              </div>

              {isSubmitted && isThisCorrect && (
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
              )}
              {isSubmitted && isThisSelected && !isThisCorrect && (
                <X className="w-5 h-5 text-rose-600 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Immediate Rule Explanation */}
      {isSubmitted && (
        <RuleExplanationCard
          ruleDetail={question.ruleDetail}
          ruleBadge={question.ruleBadge}
          isCorrect={isCorrect}
          fromNotebook={question.fromNotebook}
          notebookPage={question.notebookPage}
          difficulty={question.difficulty}
          trapExplanation={question.trapExplanation}
        />
      )}

      {/* Action buttons */}
      {isSubmitted && (
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handleReset}
            id="mcq-try-again-btn"
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            إعادة المحاولة
          </button>

          {onNextQuestion && (
            <button
              onClick={onNextQuestion}
              id="mcq-next-question-btn"
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold flex items-center gap-2 cursor-pointer shadow-sm transition-colors"
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
