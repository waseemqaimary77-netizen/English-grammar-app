import React from 'react';
import { Question, UserAnswerRecord } from '../types';
import { Trophy, CheckCircle2, XCircle, RotateCcw, ArrowLeft, Award, Sparkles, UserCheck, CheckCircle } from 'lucide-react';

interface Props {
  questions: Question[];
  answers: Record<string, UserAnswerRecord>;
  onRestartAll: () => void;
  onReviewQuestion: (index: number) => void;
  onRetakeMistakesOnly?: (mistakeQuestionIds: string[]) => void;
  onStartNewRandomExam?: () => void;
}

export const ExamResultsModal: React.FC<Props> = ({
  questions,
  answers,
  onRestartAll,
  onReviewQuestion,
  onRetakeMistakesOnly,
  onStartNewRandomExam
}) => {
  const total = questions.length;
  const answerList = Object.values(answers) as UserAnswerRecord[];
  const correctCount = answerList.filter(a => a.isCorrect).length;
  const percentage = Math.round((correctCount / (total || 1)) * 100);

  const mistakeQuestions = questions.filter(q => {
    const record = answers[q.id];
    return record && !record.isCorrect;
  });

  let gradeText = 'ممتاز! إتقان رائع لقواعد المعلمة 🎉';
  let gradeColor = 'text-emerald-700';
  let gradeBg = 'bg-emerald-50 border-emerald-300';

  if (percentage < 50) {
    gradeText = 'تحتاج إلى مراجعة قواعد الدفتر والتركيز على الكلمات الدالة 📚';
    gradeColor = 'text-rose-700';
    gradeBg = 'bg-rose-50 border-rose-300';
  } else if (percentage < 70) {
    gradeText = 'مستوى متوسط - تدرب أكثر على الأسئلة التريكية لتصل إلى التميز 👍';
    gradeColor = 'text-amber-700';
    gradeBg = 'bg-amber-50 border-amber-300';
  } else if (percentage < 90) {
    gradeText = 'جيد جداً! راجع الأسئلة الخاطئة لتصل إلى العلامة الكاملة 10/10 🌟';
    gradeColor = 'text-blue-700';
    gradeBg = 'bg-blue-50 border-blue-300';
  }

  return (
    <div id="exam-results-modal" className="space-y-6">
      {/* Score Card Header */}
      <div className={`rounded-3xl p-6 sm:p-8 border-2 text-center space-y-4 shadow-xs ${gradeBg}`}>
        <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-xs flex items-center justify-center">
          {percentage >= 80 ? (
            <Trophy className="w-9 h-9 text-amber-500" />
          ) : percentage >= 50 ? (
            <Award className="w-9 h-9 text-blue-600" />
          ) : (
            <XCircle className="w-9 h-9 text-rose-500" />
          )}
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
            كشف نتيجة الاختبار الشامل
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            العلامة: {correctCount} من {total}
          </h2>
          <p className={`text-base font-bold mt-1 ${gradeColor}`}>
            {gradeText}
          </p>
        </div>

        {/* Score cards */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 pt-2">
          <div className="bg-white/90 px-6 py-3.5 rounded-2xl border border-black/5 shadow-2xs">
            <span className="text-xs text-slate-500 block font-bold mb-0.5">النسبة المئوية</span>
            <span className="text-3xl font-black text-slate-900">{percentage}%</span>
          </div>
          <div className="bg-white/90 px-6 py-3.5 rounded-2xl border border-black/5 shadow-2xs">
            <span className="text-xs text-slate-500 block font-bold mb-0.5">العلامة من {total}</span>
            <span className="text-3xl font-black text-emerald-700">{correctCount} <span className="text-base text-slate-400 font-normal">/ {total}</span></span>
          </div>
          <div className="bg-white/90 px-6 py-3.5 rounded-2xl border border-black/5 shadow-2xs">
            <span className="text-xs text-slate-500 block font-bold mb-0.5">الأخطاء</span>
            <span className="text-3xl font-black text-rose-600">{mistakeQuestions.length}</span>
          </div>
        </div>

        {/* Developer Credit Tag */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-700 font-bold">
            <UserCheck className="w-4 h-4 text-blue-600" />
            <span>نظام التدريب والاختبارات تم تطويره وبرمجته بواسطة: <span className="text-slate-950 font-black">وسيم قيمري (Waseem Qaimary)</span></span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          {onStartNewRandomExam && (
            <button
              onClick={onStartNewRandomExam}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-102"
            >
              <RotateCcw className="w-4 h-4" />
              <span>بدء اختبار عشوائي جديد (10 أسئلة جديدة) 🎲</span>
            </button>
          )}

          <button
            onClick={onRestartAll}
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center gap-2 cursor-pointer shadow-sm transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>إعادة نفس الأسئلة</span>
          </button>

          {mistakeQuestions.length > 0 && onRetakeMistakesOnly && (
            <button
              onClick={() => onRetakeMistakesOnly(mistakeQuestions.map(q => q.id))}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm flex items-center gap-2 cursor-pointer shadow-sm transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>إعادة التدريب على الأخطاء فقط ({mistakeQuestions.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Review breakdown of every question */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center justify-between">
          <span>مراجعة الأسئلة وتفاصيل كل إجابة وقاعدتها:</span>
          <span className="text-xs font-normal text-slate-500">انقر لمراجعة السؤال</span>
        </h3>

        <div className="space-y-3">
          {questions.map((q, idx) => {
            const rec = answers[q.id];
            const isQCorrect = rec?.isCorrect;

            return (
              <div
                key={q.id}
                onClick={() => onReviewQuestion(idx)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-wrap items-center justify-between gap-3 ${
                  isQCorrect
                    ? 'border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50'
                    : 'border-rose-200 bg-rose-50/40 hover:bg-rose-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    isQCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                  }`}>
                    {idx + 1}
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-700">
                        {q.titleAr}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                        {q.ruleBadge}
                      </span>
                      {q.difficulty === 'tricky' && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 border border-rose-200">
                          تريكي 🔥
                        </span>
                      )}
                    </div>

                    <p className="font-mono text-sm font-bold text-slate-800 dir-ltr text-left mt-1">
                      {q.sentenceEn}
                    </p>

                    <div className="text-xs mt-1 text-slate-600 flex flex-wrap items-center gap-2">
                      <span>إجابتك: <span className={`font-mono font-bold dir-ltr ${isQCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>{rec?.userAnswer || '(لم تجب)'}</span></span>
                      <span>•</span>
                      <span>الإجابة النموذجية: <span className="font-mono font-bold text-emerald-700 dir-ltr">{q.correctAnswer}</span></span>
                    </div>

                    <div className="text-xs text-slate-500 mt-1">
                      {q.ruleDetail.arabicExplanation}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isQCorrect ? (
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> صحيح
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-rose-700 flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> خطأ
                    </span>
                  )}
                  <ArrowLeft className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
