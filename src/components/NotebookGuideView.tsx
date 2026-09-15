import React, { useState } from 'react';
import { NOTEBOOK_RULES } from '../data/notebookRules';
import { QUESTIONS } from '../data/questions';
import { BookOpen, Calendar, Search, Sparkles, CheckCircle2, Bookmark, HelpCircle, FileEdit, CheckCircle, Award, UserCheck } from 'lucide-react';

export const NotebookGuideView: React.FC = () => {
  const [subTab, setSubTab] = useState<'rules' | 'questions'>('rules');
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [questionFilter, setQuestionFilter] = useState<'all' | 'mcq' | 'make_question' | 'error_correction'>('all');

  const currentPageData = NOTEBOOK_RULES.find(p => p.pageNumber === selectedPage) || NOTEBOOK_RULES[0];

  const filteredSections = currentPageData.sections.filter(sec => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      sec.heading.toLowerCase().includes(term) ||
      sec.description.toLowerCase().includes(term) ||
      (sec.formula && sec.formula.toLowerCase().includes(term)) ||
      sec.examples.some(ex => ex.en.toLowerCase().includes(term) || ex.ar.toLowerCase().includes(term)) ||
      (sec.importantNotes && sec.importantNotes.some(n => n.toLowerCase().includes(term)))
    );
  });

  // Notebook questions (from the 5 notebook photos)
  const notebookQuestions = QUESTIONS.filter(q => q.fromNotebook);
  const filteredNotebookQuestions = notebookQuestions.filter(q => {
    if (questionFilter !== 'all' && q.type !== questionFilter) return false;
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      q.sentenceEn.toLowerCase().includes(term) ||
      q.correctAnswer.toLowerCase().includes(term) ||
      q.ruleBadge.toLowerCase().includes(term) ||
      q.ruleDetail.ruleTitle.toLowerCase().includes(term) ||
      q.ruleDetail.teacherNote.toLowerCase().includes(term) ||
      q.ruleDetail.arabicExplanation.toLowerCase().includes(term)
    );
  });

  return (
    <div id="notebook-guide-view" className="space-y-6">
      {/* Top Banner */}
      <div className="bg-linear-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>دفتر قواعد اللغة الإنجليزية المدرسي مع المعلمة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              تفريغ الدفتر المدرسي كاملاً 📖
            </h2>
            <p className="text-slate-200 text-sm max-w-2xl leading-relaxed">
              تفريغ منظم لجميع القواعد والـ 40 تمريناً المكتوبة في الدفتر المدرسي مع المعلمة: المضارع البسيط، المستمر، والأفعال التقريرية مع الإعراب والتفسير النحوي.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>تطوير وإعداد وتفريغ: وسيم قيمري (Waseem Qaimary)</span>
            </div>
          </div>

          {/* Search box */}
          <div className="w-full sm:w-72 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="ابحث في قواعد أو أسئلة الدفتر..."
              className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-white/20 focus:bg-white/20 focus:border-amber-400 outline-hidden text-sm transition-all"
            />
            <Search className="w-4 h-4 text-slate-300 absolute right-3.5 top-3" />
          </div>
        </div>

        {/* Sub-Tabs: Rules vs All 40 Questions */}
        <div className="flex flex-wrap gap-2.5 mt-6 pt-5 border-t border-white/10">
          <button
            onClick={() => setSubTab('rules')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              subTab === 'rules'
                ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                : 'bg-white/10 hover:bg-white/20 text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>قواعد وشروحات الدفتر (3 صفحات)</span>
          </button>

          <button
            onClick={() => setSubTab('questions')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              subTab === 'questions'
                ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                : 'bg-white/10 hover:bg-white/20 text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>جميع أسئلة الدفتر بالحرف ({notebookQuestions.length} سؤالاً مع الحل)</span>
          </button>
        </div>
      </div>

      {/* Sub-Tab 1: Rules */}
      {subTab === 'rules' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          {/* Page selector buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div className="flex flex-wrap gap-2">
              {NOTEBOOK_RULES.map(page => (
                <button
                  key={page.id}
                  onClick={() => setSelectedPage(page.pageNumber)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    selectedPage === page.pageNumber
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>الصفحة {page.pageNumber}: {page.titleAr}</span>
                </button>
              ))}
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
              صفحة {currentPageData.pageNumber} من 3
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>تاريخ الحصة في الدفتر: {currentPageData.date}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {currentPageData.titleAr}
            </h3>
            <p className="text-xs font-mono text-slate-500 dir-ltr text-left mt-0.5">
              {currentPageData.titleEn}
            </p>
          </div>

          <p className="text-sm font-medium text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200 leading-relaxed">
            {currentPageData.summaryAr}
          </p>

          {/* Sections */}
          <div className="space-y-6">
            {filteredSections.map((sec, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50 hover:border-slate-300 transition-colors space-y-4"
              >
                <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  {sec.heading}
                </h4>

                {sec.formula && (
                  <div className="p-3.5 rounded-xl bg-blue-900 text-amber-300 font-mono text-sm sm:text-base font-bold text-left dir-ltr shadow-xs overflow-x-auto">
                    {sec.formula}
                  </div>
                )}

                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {sec.description}
                </p>

                {/* Examples */}
                {sec.examples && sec.examples.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      أمثلة وتطبيقات الدفتر:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {sec.examples.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs text-left dir-ltr space-y-1"
                        >
                          <div className="font-mono font-bold text-slate-900 text-sm">
                            {ex.en}
                          </div>
                          <div className="text-xs text-slate-600 font-sans dir-rtl text-right">
                            {ex.ar}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Important Teacher Notes */}
                {sec.importantNotes && sec.importantNotes.length > 0 && (
                  <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-950 space-y-1.5 text-xs sm:text-sm">
                    <span className="font-bold text-amber-900 flex items-center gap-1.5 mb-2">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      تنبيهات وقواعد المعلمة في الدفتر:
                    </span>
                    {sec.importantNotes.map((note, noteIdx) => (
                      <div key={noteIdx} className="leading-relaxed">
                        {note}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {filteredSections.length === 0 && (
              <div className="text-center py-8 text-slate-400 text-sm">
                لا توجد نتائج تطابق بحثك في هذه الصفحة. جرب كلمة أخرى أو امسح شريط البحث.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sub-Tab 2: All 40 Notebook Questions */}
      {subTab === 'questions' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                جميع أسئلة وتمارين الدفتر المكتوبة مع المعلمة ({notebookQuestions.length} سؤالاً)
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                تشمل جميع أسئلة الضع دائرة وتكوين السؤال وتصحيح الأخطاء مع الحل النموذجي وقاعدته المعلمية
              </p>
            </div>

            {/* Filter by type */}
            <div className="flex flex-wrap gap-1.5 text-xs font-bold">
              <button
                onClick={() => setQuestionFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  questionFilter === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                الكل ({notebookQuestions.length})
              </button>
              <button
                onClick={() => setQuestionFilter('mcq')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  questionFilter === 'mcq'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                }`}
              >
                ضع دائرة
              </button>
              <button
                onClick={() => setQuestionFilter('make_question')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  questionFilter === 'make_question'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100'
                }`}
              >
                تكوين سؤال
              </button>
              <button
                onClick={() => setQuestionFilter('error_correction')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  questionFilter === 'error_correction'
                    ? 'bg-violet-600 text-white'
                    : 'bg-violet-50 text-violet-800 hover:bg-violet-100'
                }`}
              >
                تصحيح خطأ
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredNotebookQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300 transition-all space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {q.titleAr}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      ⭐ من الدفتر
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-white text-slate-700 border border-slate-200">
                      {q.ruleBadge}
                    </span>
                  </div>
                </div>

                {/* Sentence */}
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 font-mono text-sm sm:text-base font-bold text-slate-900 dir-ltr text-left">
                  {q.sentenceEn}
                </div>

                {/* Answer box */}
                <div className="flex flex-wrap items-center gap-2 text-sm bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-emerald-950 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>الإجابة النموذجية:</span>
                  <span className="font-mono font-black text-emerald-700 dir-ltr px-2 py-0.5 bg-white rounded border border-emerald-300">
                    {q.correctAnswer}
                  </span>
                </div>

                {/* Rule explanation */}
                <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 text-xs sm:text-sm text-slate-700 space-y-1.5">
                  <div className="font-bold text-blue-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>القاعدة وشرح المعلمة:</span>
                  </div>
                  <div className="text-slate-800 leading-relaxed font-medium">
                    {q.ruleDetail.arabicExplanation}
                  </div>
                  <div className="font-mono text-blue-800 text-xs font-bold pt-1 dir-ltr text-left">
                    Formula: {q.ruleDetail.ruleFormula}
                  </div>
                </div>
              </div>
            ))}

            {filteredNotebookQuestions.length === 0 && (
              <div className="text-center py-10 text-slate-400 text-sm">
                لا توجد أسئلة تطابق البحث الحالي.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
