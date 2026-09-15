import React, { useState } from 'react';
import { NOTEBOOK_RULES } from '../data/notebookRules';
import { QUESTIONS } from '../data/questions';
import { 
  BookOpen, 
  Calendar, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Bookmark, 
  CheckCircle, 
  UserCheck,
  FileText,
  HelpCircle,
  Eye,
  Brain,
  Check,
  X,
  Heart,
  ShieldCheck
} from 'lucide-react';

interface Props {
  initialSubTab?: 'rules' | 'questions';
}

export const NotebookGuideView: React.FC<Props> = ({ 
  initialSubTab = 'rules'
}) => {
  const [subTab, setSubTab] = useState<'rules' | 'questions'>(initialSubTab);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [questionFilter, setQuestionFilter] = useState<'all' | 'mcq' | 'make_question' | 'error_correction'>('all');
  const [selectedNotebookPageFilter, setSelectedNotebookPageFilter] = useState<number | 'all'>('all');

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
    if (selectedNotebookPageFilter !== 'all' && q.notebookPage !== selectedNotebookPageFilter) return false;
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
              <span>تفريغ وشرح دفتر قواعد اللغة الإنجليزية المدرسي مع المعلمة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              قائمة تفريغ وقواعد الدفتر المكتوبة 📖
            </h2>
            <p className="text-slate-200 text-sm max-w-2xl leading-relaxed">
              تفريغ شامل ومنظم لجميع القواعد وتصنيفات الأفعال التقريرية وتمارين الدفتر الـ 40 المحلولة حرفياً، مع التركيز على الفروقات الدقيقة بين البسيط والمستمر مع حروف الجر.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400/25 border border-amber-400/50 text-amber-300 text-xs font-bold shadow-2xs">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                <span>إهداء خاص: أكرم عواد (صاحب الواد) 🌟</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-slate-200 text-xs font-bold">
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>تطوير: وسيم قيمري</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>حقوق النشر محفوظة لدى شركة الواد للاستيراد والتصدير ©</span>
              </div>
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

        {/* 2 Sub-Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/10">
          <button
            onClick={() => setSubTab('rules')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              subTab === 'rules'
                ? 'bg-amber-400 text-slate-950 shadow-md font-black scale-102'
                : 'bg-white/10 hover:bg-white/20 text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>ملخص وقواعد الدفتر بالتفصيل 📜</span>
          </button>

          <button
            onClick={() => setSubTab('questions')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              subTab === 'questions'
                ? 'bg-amber-400 text-slate-950 shadow-md font-black scale-102'
                : 'bg-white/10 hover:bg-white/20 text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>جميع تمارين وأسئلة الدفتر الـ 40 مع الحل 📝</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* STATIVE VERBS MASTERCLASS CALLOUT (ENHANCED WITH LOOK & THINK & PREPOSITIONS) */}
      {/* ========================================================================= */}
      <div className="bg-linear-to-r from-amber-50 via-white to-blue-50 rounded-3xl p-6 sm:p-7 border-2 border-amber-300 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/80 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-amber-500 text-white shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                الشرح الذهبي للأفعال التقريرية (Stative Verbs) وفخاخ (Look & Think)
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                متى يأتي الفعل تقريرياً بالمضارع البسيط (ممنوع ing) ومتى يقبل المستمر بحرف جر؟
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-900 bg-amber-200/70 px-3 py-1 rounded-full border border-amber-300">
            أهم قاعدة امتحانية بالدفتر ⭐
          </span>
        </div>

        {/* 2 Detailed Cards for Look and Think */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* LOOK Card */}
          <div className="bg-white rounded-2xl p-5 border-2 border-amber-200/80 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm pb-2 border-b border-slate-100">
              <Eye className="w-4 h-4 text-amber-600" />
              <span>فعل (Look) مع حروف الجر وبدونها:</span>
            </div>

            {/* Look At (Dynamic / Action) */}
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>1) بمعنى "ينظر بعينيه" (حركة وتوجيه بصر):</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                يكون <strong>متبوعاً بحرف جر دائماً</strong> مثل: <code className="bg-emerald-200/60 px-1 py-0.5 rounded font-mono font-bold text-emerald-950">look at</code> (ينظر إلى)، <code className="bg-emerald-200/60 px-1 py-0.5 rounded font-mono font-bold text-emerald-950">look for</code> (يبحث عن)، <code className="bg-emerald-200/60 px-1 py-0.5 rounded font-mono font-bold text-emerald-950">look after</code> (يعتني بـ).
              </p>
              <div className="text-emerald-950 font-medium pt-1">
                ➔ يعتبر <strong>فعل حركة ونشاط جسدي</strong>، ويقبل صيغة الاستمرار <strong>(-ing)</strong> مع دلالات الحاضر:
              </div>
              <div className="p-2 bg-white rounded-lg border border-emerald-300 font-mono font-bold text-xs text-left dir-ltr text-emerald-900">
                • I am looking at the board at the exact moment.
                <br />
                • She is looking for her lost key right now.
              </div>
            </div>

            {/* Look (Stative / Appearance) */}
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 space-y-1 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 font-bold text-rose-900">
                <X className="w-4 h-4 text-rose-600" />
                <span>2) بمعنى "يبدو / يظهر بمظهر معين" (وصف وحالة مظهرية):</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                <u>لا يأتي بعده حرف جر موجه</u>، بل تأتي بعده <strong>صفة مباشرة</strong> (looks tired / looks happy) أو يأتي بعده <code className="bg-rose-200/60 px-1 py-0.5 rounded font-mono font-bold text-rose-950">look like</code> مع اسم (look like her mother).
              </p>
              <div className="text-rose-950 font-medium pt-1">
                ➔ يعتبر <strong>فعلاً تقريرياً بحتاً (Stative)</strong>، و<strong>ممنوع قطعياً استخدام ing</strong>، ويبقى في المضارع البسيط:
              </div>
              <div className="p-2 bg-white rounded-lg border border-rose-300 font-mono font-bold text-xs text-left dir-ltr text-rose-900">
                • He looks tired today. (وليس is looking tired ❌)
                <br />
                • The little girl looks like her mother. (وليس is looking like ❌)
              </div>
            </div>
          </div>

          {/* THINK Card */}
          <div className="bg-white rounded-2xl p-5 border-2 border-blue-200/80 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm pb-2 border-b border-slate-100">
              <Brain className="w-4 h-4 text-blue-600" />
              <span>فعل (Think) مع حروف الجر وبدونها:</span>
            </div>

            {/* Think About / Of (Dynamic / Mental Action) */}
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>1) بمعنى "يفكر / ينشغل ذهنه بمسألة أو حل":</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                يكون <strong>متبوعاً بحرف جر دائماً</strong> مثل: <code className="bg-emerald-200/60 px-1 py-0.5 rounded font-mono font-bold text-emerald-950">think about</code> (يفكر في موضوع)، أو <code className="bg-emerald-200/60 px-1 py-0.5 rounded font-mono font-bold text-emerald-950">think of</code>.
              </p>
              <div className="text-emerald-950 font-medium pt-1">
                ➔ يعتبر <strong>نشاطاً ذهنياً حركياً جارياً الآن</strong> (Active Cognitive Process)، ويقبل الاستمرار <strong>(-ing)</strong>:
              </div>
              <div className="p-2 bg-white rounded-lg border border-emerald-300 font-mono font-bold text-xs text-left dir-ltr text-emerald-900">
                • Right now, I am thinking about the answer to this question.
                <br />
                • What are you thinking about?
              </div>
            </div>

            {/* Think (Stative / Opinion) */}
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 space-y-1 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 font-bold text-rose-900">
                <X className="w-4 h-4 text-rose-600" />
                <span>2) بمعنى "يعتقد / في رأيي وقناعتي":</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                <u>لا يأتي بعده حرف جر</u> (about/of)، بل تأتي بعده جملة كاملة توضح الرأي أو القناعة الشخصية الثابتة.
              </p>
              <div className="text-rose-950 font-medium pt-1">
                ➔ يعتبر <strong>فعل رأي تقريري (Stative Opinion)</strong>، و<strong>ممنوع منعاً باتاً وضع ing</strong>، ويبقى في المضارع البسيط فقط:
              </div>
              <div className="p-2 bg-white rounded-lg border border-rose-300 font-mono font-bold text-xs text-left dir-ltr text-rose-900">
                • I think he is a very smart boy. (وليس I am thinking he is smart ❌)
                <br />
                • We think English grammar is easy and fun.
              </div>
            </div>
          </div>
        </div>

        {/* Quick summary line for other dual verbs */}
        <div className="p-3 bg-amber-100/70 rounded-xl border border-amber-300 text-amber-950 text-xs font-semibold flex flex-wrap items-center justify-between gap-2">
          <span>💡 تذكير بالأفعال المزدوجة الأخرى:</span>
          <span><strong>have a car</strong> (ملكية ➔ بسيط) مقابل <strong>having lunch/shower</strong> (نشاط ➔ مستمر)</span>
          <span><strong>soup tastes good</strong> (مذاق ➔ بسيط) مقابل <strong>chef is tasting</strong> (يتذوق بلسانه ➔ مستمر)</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUB-TAB 1: RULES (قواعد وشروحات الدفتر) */}
      {/* ========================================================================= */}
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

      {/* ========================================================================= */}
      {/* SUB-TAB 2: ALL 40 NOTEBOOK QUESTIONS */}
      {/* ========================================================================= */}
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

            {/* Filter by Page */}
            <div className="flex flex-wrap gap-1.5 text-xs font-bold">
              <span className="text-slate-400 self-center text-[11px] ml-1">فلترة بالصفحة:</span>
              <button
                onClick={() => setSelectedNotebookPageFilter('all')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  selectedNotebookPageFilter === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                الكل
              </button>
              {[1, 2, 3, 4, 5].map(pg => (
                <button
                  key={pg}
                  onClick={() => setSelectedNotebookPageFilter(pg)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    selectedNotebookPageFilter === pg
                      ? 'bg-amber-400 text-slate-950 font-black'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  ص {pg}
                </button>
              ))}
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
                      ⭐ من الدفتر (صفحة {q.notebookPage})
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
                لا توجد أسئلة تطابق البحث أو الفلتر الحالي.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
