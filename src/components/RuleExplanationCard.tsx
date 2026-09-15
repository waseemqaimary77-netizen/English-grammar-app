import React from 'react';
import { RuleDetail } from '../types';
import { BookOpen, Sparkles, CheckCircle2, AlertCircle, Lightbulb, Flame } from 'lucide-react';

interface Props {
  ruleDetail: RuleDetail;
  ruleBadge: string;
  isCorrect?: boolean;
  fromNotebook?: boolean;
  notebookPage?: 1 | 2 | 3;
  difficulty?: 'normal' | 'tricky';
  trapExplanation?: string;
}

export const RuleExplanationCard: React.FC<Props> = ({
  ruleDetail,
  ruleBadge,
  isCorrect,
  fromNotebook,
  notebookPage,
  difficulty,
  trapExplanation
}) => {
  return (
    <div 
      id="rule-explanation-card" 
      className={`mt-4 rounded-2xl p-5 border-2 transition-all duration-300 text-right ${
        isCorrect === true
          ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
          : isCorrect === false
          ? 'bg-rose-50/90 border-rose-300 text-rose-950'
          : 'bg-amber-50/80 border-amber-200 text-amber-950'
      }`}
    >
      {/* Header with badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-black/10">
        <div className="flex items-center gap-2">
          {isCorrect === true && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
              <CheckCircle2 className="w-3.5 h-3.5" /> إجابة صحيحة!
            </span>
          )}
          {isCorrect === false && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white">
              <AlertCircle className="w-3.5 h-3.5" /> راجع القاعدة أدناه
            </span>
          )}
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-100">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            {ruleBadge}
          </span>
          {difficulty === 'tricky' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-rose-600 text-white shadow-xs animate-pulse">
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              سؤال تريكي امتحاني
            </span>
          )}
        </div>

        {fromNotebook ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/20 text-amber-900 border border-amber-400/40">
            <Sparkles className="w-3 h-3 text-amber-600" />
            من دفتر المعلمة {notebookPage ? `(صفحة ${notebookPage})` : ''}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-500/20 text-indigo-950 border border-indigo-400/40">
            سؤال وزاري خارجي متقدم
          </span>
        )}
      </div>

      {/* Tricky Trap Warning if present */}
      {trapExplanation && (
        <div className="mb-3.5 p-3.5 rounded-xl bg-linear-to-r from-rose-100 to-amber-100 border-2 border-rose-300 text-rose-950 text-xs sm:text-sm leading-relaxed shadow-xs">
          <div className="flex items-center gap-1.5 font-black text-rose-900 mb-1">
            <Flame className="w-4 h-4 text-rose-600 shrink-0" />
            <span>تنبيه الفخ والخدعة النحوية (Exam Trap Alert):</span>
          </div>
          <p className="font-medium text-slate-900">{trapExplanation}</p>
        </div>
      )}

      {/* Rule Title & Formula */}
      <div className="space-y-3">
        <div>
          <h4 className="text-base font-extrabold flex items-center gap-2 text-slate-900">
            <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
            {ruleDetail.ruleTitle}
          </h4>
          <div className="mt-1.5 p-2.5 rounded-xl bg-white/80 border border-black/10 font-mono text-sm text-left dir-ltr text-blue-900 font-semibold tracking-wide shadow-xs">
            {ruleDetail.ruleFormula}
          </div>
        </div>

        {/* Trigger / Keyword */}
        {ruleDetail.keywordOrTrigger && (
          <div className="flex items-start gap-2 text-sm bg-white/60 p-2.5 rounded-xl border border-black/5">
            <span className="font-bold text-slate-700 shrink-0">السبب أو الكلمة الدالة:</span>
            <span className="font-semibold text-blue-700">{ruleDetail.keywordOrTrigger}</span>
          </div>
        )}

        {/* Teacher Note */}
        {ruleDetail.teacherNote && (
          <div className="p-3 rounded-xl bg-amber-100/80 border-r-4 border-amber-500 text-amber-950 text-sm leading-relaxed">
            <span className="font-bold block mb-1 text-amber-900 flex items-center gap-1">
              📝 ملاحظة القاعدة المهمة:
            </span>
            {ruleDetail.teacherNote}
          </div>
        )}

        {/* Arabic Explanation */}
        <div className="text-sm leading-relaxed text-slate-800 pt-1">
          <span className="font-bold block mb-1 text-slate-900">الشرح والتوضيح:</span>
          <p>{ruleDetail.arabicExplanation}</p>
        </div>

        {/* English Grammar Note */}
        <div className="pt-2 border-t border-black/10 text-xs text-slate-600 font-mono text-left dir-ltr">
          <span className="font-sans font-bold text-slate-700 block mb-0.5 dir-rtl text-right">قاعدة القواعد الأكاديمية (English Rule):</span>
          <span className="text-slate-800">{ruleDetail.englishGrammarRule}</span>
        </div>
      </div>
    </div>
  );
};
