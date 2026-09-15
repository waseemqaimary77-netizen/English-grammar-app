export interface NotebookRuleSection {
  id: string;
  pageNumber: number;
  date: string;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  sections: {
    heading: string;
    description: string;
    formula?: string;
    examples: { en: string; ar: string; highlight?: string }[];
    importantNotes?: string[];
  }[];
}

export const NOTEBOOK_RULES: NotebookRuleSection[] = [
  {
    id: 'page1_simple_present',
    pageNumber: 1,
    date: 'Wednesday 2nd Sep 2026',
    titleAr: 'المضارع البسيط (Simple Present)',
    titleEn: 'Simple Present - Forms & Rules',
    summaryAr: 'تكوين الجملة المثبتة والمنفية، تكوين أسئلة Yes/No وأسئلة Wh، وقواعد إضافة s/es/ies والحالات الخاصة مثل Everyone والأسماء غير المعدودة واسم المصدر (Gerund).',
    sections: [
      {
        heading: '1. التكوين مع الفاعل المفرد (Singular Subject)',
        formula: 'Subject (He / She / It / المفرد) + Verb(s / es / ies) + Object',
        description: 'إذا كان الفاعل مفرداً، نضيف للفعل s أو es أو ies.',
        examples: [
          { en: 'He plays football.', ar: 'هو يلعب كرة القدم (فعل عادي ينتهي بحرف علة + y فنضيف s فقط).', highlight: 'plays' },
          { en: 'She tries hard.', ar: 'هي تحاول بجد (try تنتهي بساكن + y فنحذف y ونضع ies).', highlight: 'tries' },
          { en: 'Honey never spoils.', ar: 'العسل لا يفسد أبداً (العسل اسم غير معدود يعامل معاملة المفرد).', highlight: 'spoils' }
        ],
        importantNotes: [
          'قاعدة إضافة es: إذا انتهى الفعل بـ: -s, -sh, -ch, -x, -o, -z',
          'أمثلة الدفتر: pass ➔ passes | smash ➔ smashes | watch ➔ watches | mix ➔ mixes | do ➔ does | fizz ➔ fizzes (fizz الوحيد)',
          'قاعدة ies: إذا انتهى بساكن + y (مثل try ➔ tries)، أما إذا قبله حرف علة نضيف s فقط (مثل play ➔ plays).'
        ]
      },
      {
        heading: '2. تكوين الأسئلة (Question Form: Yes / No & Wh-)',
        formula: 'Helping Verb (Do / Does) + Subject + Verb(infinitive مجرد) + Object?',
        description: 'في السؤال نستخدم الفعل المساعد Does مع المفرد و Do مع الجمع، ويعود الفعل الرئيسي إلى صورته المجردة (Infinitive)! وإذا كان الفعل الأصلي be نستخدم (Is / Are / Am).',
        examples: [
          { en: 'Does Huda watch TV every day?', ar: 'هل تشاهد هدى التلفاز كل يوم؟ (Does + Huda + watch مجرد)', highlight: 'Does ... watch' },
          { en: 'Does the mouse eat a lot of cheese?', ar: 'هل يأكل الفأر الكثير من الجبن؟ (الفأر مفرد Does + eat مجرد)', highlight: 'Does ... eat' },
          { en: 'Is she a teacher?', ar: 'هل هي معلمة؟ (مع فعل be نقدّم Is على الفاعل بدون do/does)', highlight: 'Is she' },
          { en: 'How often does Ahmad play football?', ar: 'كم مرة يلعب أحمد كرة القدم؟ (Wh-word + does + Ahmad + play)', highlight: 'How often does Ahmad play' },
          { en: 'What does the student study in the evening?', ar: 'ماذا يدرس الطالب في المساء؟ (What + does + student + study)', highlight: 'What does the student study' },
          { en: 'Do students play football every day?', ar: 'هل يلعب الطلاب كرة القدم يومياً؟ (Do + students جمع + play)', highlight: 'Do students play' }
        ],
        importantNotes: [
          'قاعدة ذهبية: بعد Do و Does و Did يعود الفعل دائمًا إلى المصدر المجرد خاليًا من أي إضافات!',
          'مع فعل (be)، لا نستخدم do أو does، بل نضع Is أو Are في بداية السؤال مباشرة: (be \\ she \\ a teacher ➔ Is she a teacher?).'
        ]
      },
      {
        heading: '3. صيغة النفي (-ve Form) وحالات فاعل خاصة',
        formula: 'Subject + Helping Verb(not) [doesn\'t / don\'t] + Verb(infinitive مجرد) + Object',
        description: 'ننفي بـ doesn\'t للمفرد و don\'t للجمع مع إعادة الفعل للمصدر. مع فعل be نستخدم isn\'t / aren\'t.',
        examples: [
          { en: 'She doesn\'t like rice.', ar: 'هي لا تحب الأرز (doesn\'t + like مجرد).', highlight: 'doesn\'t like' },
          { en: 'Students don\'t travel every weekend.', ar: 'الطلاب لا يسافرون كل عطلة (don\'t + travel).', highlight: 'don\'t travel' },
          { en: 'Everyone isn\'t in their places.', ar: 'الجميع ليسوا في أماكنهم (كل أداة تدل على مفرد دائمًا تعامل معاملة المفرد: Everyone).', highlight: 'Everyone isn\'t' },
          { en: 'Reading stories for children doesn\'t promote their brain development.', ar: 'قراءة القصص للأطفال لا تعزز... (الفاعل هو Reading اسم مصدر Gerund ويعامل معاملة المفرد دائماً).', highlight: 'doesn\'t promote' }
        ],
        importantNotes: [
          '⭐ ملاحظة الدفتر 1: (Everyone / Everybody / Someone / Nobody) كل كلمة تدل على مفرد دائمًا تعامل معاملة المفرد في القواعد.',
          '⭐ ملاحظة الدفتر 2: الفاعل المبدئي بـ Gerund (اسم مصدر ينتهي بـ ing مثل Reading stories...) يعامل معاملة المفرد (doesn\'t promote).',
          '⭐ ملاحظة الدفتر 3: الأسماء غير المعدودة (Uncountable Nouns) مثل Honey, water, stress تعامل دائمًا معاملة المفرد (Honey never spoils).'
        ]
      },
      {
        heading: '4. التكوين مع الفاعل الجمع (Plural Form)',
        formula: 'Subject (I, We, You, They / Ahmad and Ali / Children) + Verb(infinitive مجرد) + Object',
        description: 'مع الفاعل الجمع والضمير I، يبقى الفعل مجرداً بدون s أو es.',
        examples: [
          { en: 'Students don\'t travel every weekend.', ar: 'الطلاب لا يسافرون كل أسبوع.', highlight: 'don\'t travel' },
          { en: 'I don\'t enjoy parties normally.', ar: 'أنا لا أستمتع بالحفلات عادةً.', highlight: 'don\'t enjoy' }
        ]
      }
    ]
  },
  {
    id: 'page2_present_continuous',
    pageNumber: 2,
    date: 'Tuesday 8th Sep 2026',
    titleAr: 'المضارع المستمر والكلمات الدالة (Present Continuous)',
    titleEn: 'Present Continuous & Keywords Comparison',
    summaryAr: 'تكوين المضارع المستمر am/is/are + V(ing)، وقواعد الإملاء، وجدول الكلمات الدالة مقارنة بالمضارع البسيط، وتطبيقات هامة.',
    sections: [
      {
        heading: '1. تكوين المضارع المستمر (Rule Form)',
        formula: 'Subject + (am / is / are) + Verb(ing) + Object',
        description: 'يستخدم للحديث عن أحداث تقع الآن في لحظة التحدث أو حول الوقت الحالي.',
        examples: [
          { en: 'I am not working.', ar: 'أنا لا أعمل الآن (نفي المستمر: am not + V-ing).', highlight: 'am not working' },
          { en: 'The boy is going to school right now.', ar: 'الولد ذاهب إلى المدرسة الآن.', highlight: 'is going' },
          { en: 'Look out! The stone is falling.', ar: 'احذر! الحجر يسقط الآن.', highlight: 'is falling' },
          { en: 'What is happening outside?', ar: 'ماذا يحدث في الخارج؟', highlight: 'is happening' },
          { en: 'Are you playing outside?', ar: 'هل تلعب بالخارج؟ (سؤال المستمر: Are + you + playing).', highlight: 'Are you playing' }
        ],
        importantNotes: [
          'قواعد إضافة -ing للإملاء:',
          '1) مضاعفة الحرف الساكن الأخير: swim ➔ swimming (ساكن قبله علة قصير)',
          '2) حذف الـ e الصامتة: write ➔ writing',
          '3) تحويل ie إلى ying: die ➔ dying | lie ➔ lying',
          '4) الفعل المنتهي بـ y يبقى كما هو: play ➔ playing'
        ]
      },
      {
        heading: '2. جدول الكلمات المفتاحية (Keywords Comparison)',
        description: 'مقارنة شاملة بين الكلمات الدالة على المضارع البسيط مقابل المضارع المستمر كما وردت بالدفتر:',
        examples: [],
        importantNotes: [
          '📌 كلمات المضارع البسيط (Simple Present Keywords):',
          '• fact (حقائق علمية وثابتة)',
          '• How often (للسؤال عن التكرار)',
          '• Every (day / week / month / year)',
          '• ظروف التكرار Adverbs of frequency (always, usually, sometimes, often, never)',
          '• once / twice (مرة / مرتان)',
          '• in general (بشكل عام)',
          '• regularly (بانتظام)',
          '• normally (بشكل طبيعي / عادةً)',
          '• كل ما يتعلق بالروتين والفترة الزمنية المتكررة.',
          '-----------------------------------------',
          '⚡ كلمات المضارع المستمر (Present Continuous Keywords):',
          '• now, even now, right now, just now',
          '• nowadays (في هذه الأيام)',
          '• at this moment (في هذه اللحظة)',
          '• continually (باستمرار)',
          '• today, outside (اليوم، في الخارج)',
          '• at present (في الوقت الحاضر)',
          '• كلمات التنبيه: Look! / Look out! / Watch out! / Be careful! / Listen!',
          '• this day, these days, this month, this year'
        ]
      },
      {
        heading: '3. تدريبات منوعة وملاحظات حاسمة',
        description: 'أمثلة دقيقة وردت في حصة الإثنين والثلاثاء بالدفتر:',
        examples: [
          { en: 'He usually goes to school by bus.', ar: 'هو يذهب عادة بالحافلة (usually ➔ بسيط).', highlight: 'goes' },
          { en: 'She sometimes takes a long time.', ar: 'هي تأخذ أحياناً وقتاً طويلاً (sometimes ➔ بسيط).', highlight: 'takes' },
          { en: 'Sami prays five times a day.', ar: 'سامي يصلي خمس مرات يومياً (روتين متكرر).', highlight: 'prays' },
          { en: 'Lack of job opportunities causes lots of stress among young people.', ar: 'قلة فرص العمل تسبب الكثير من التوتر (Lack مفرد ➔ causes).', highlight: 'causes' },
          { en: 'She is talking to a customer, and it sometimes takes a long time.', ar: 'هي تتحدث مع زبون الآن (مستمر)، وهذا يأخذ وقتاً طويلاً أحياناً (بسيط).', highlight: 'is talking ... takes' },
          { en: 'I\'m sorry, but I don\'t agree with what you\'re saying.', ar: 'أنا آسف لكني لا أوافقك الرأي (انتبه: agree فعل تقريري لا يقبل ing أبداً!).', highlight: 'don\'t agree' }
        ]
      }
    ]
  },
  {
    id: 'page3_stative_verbs',
    pageNumber: 3,
    date: 'Wednesday / Notebook Lesson',
    titleAr: 'الأفعال التقريرية (Stative Verbs) والأفعال ذات المعنيين',
    titleEn: 'Stative Verbs & Dual-Meaning Verbs',
    summaryAr: 'تصنيف أفعال الحالة إلى عقل ومشاعر وامتلاك، والأفعال الثلاثة الشهيرة ذات المعنيين (Have, Look, Think) ومتى تأتي بسيطة أو مستمرة.',
    sections: [
      {
        heading: '1. تصنيفات الأفعال التقريرية (Stative Verbs Categories)',
        description: 'الأفعال التقريرية تعبر عن حالة أو شعور أو ملكية أو نشاط ذهني داخلي، ولا تقبل صيغة الاستمرار (-ing) في حالتها التقريرية وتأتي في المضارع البسيط حتى لو دل المعنى على الوقت الحالي!',
        examples: [],
        importantNotes: [
          '🧠 1) أفعال العقل والذهن (Mental / Mind):',
          'think (يعتقد), sound (يبدو صوته), look (يبدو), dream (يحلم), guess (يخمن), remember (يتذكر), forget (ينسى), want (يريد), agree (يوافق), disagree (يعارض), seem (يبدو), fed up (سئم), regret (يندم).',
          '❤️ 2) أفعال القلب والمشاعر (Heart / Emotion):',
          'love (يحب), like (يعجب بـ), dislike (يكره/لا يحب), hate (يمقت/يكره), miss (يشتاق).',
          '💼 3) أفعال الامتلاك (Possession):',
          'have (يمتلك), has, own (يمتلك), owe (يدين بـ).'
        ]
      },
      {
        heading: '2. الأفعال المشتركة ذات المعنيين (Dual-Meaning Verbs) - الأهم في اختبارات التوجيهي والمدرسة!',
        description: 'هذه الأفعال الشهيرة في الدفتر تأتي تارة في المضارع البسيط (إذا دلت على حالة/تقريرية)، وتارة أخرى في المضارع المستمر (إذا دلت على حركة أو نشاط جسدي/ذهني جارٍ الآن):',
        examples: [
          {
            en: 'The soup tastes delicious. / The food smells good.',
            ar: 'مذاق الشوربة لذيذ / رائحة الطعام زكية ➔ صفة وحالة تقريرية ثابتة تأخذ بسيط فقط دون ing.',
            highlight: 'tastes / smells'
          },
          {
            en: 'The chef is tasting the soup right now.',
            ar: 'الشيف يتذوق الشوربة بلسانه الآن ➔ حركة ونشاط جسدي جارٍ فيأخذ المضارع المستمر is tasting!',
            highlight: 'is tasting'
          },
          {
            en: 'Ahmad has 3 luxury cars. / I have a smartphone.',
            ar: 'معنى "يمتلك" (حالة ملكية دائمة) ➔ مضارع بسيط فقط! ممنوع وضع ing.',
            highlight: 'has / have'
          },
          {
            en: 'Ahmad is having breakfast / lunch / dinner / a shower / a great time.',
            ar: 'معنى "يتناول وجبة أو يستحم أو يقضي وقتاً" (نشاط وحدث حركي) ➔ يقبل المضارع المستمر is having!',
            highlight: 'is having'
          },
          {
            en: 'He looks tired today. / The girl looks like her mother.',
            ar: 'معنى "يبدو / يظهر بمظهر معين" (وصف وحالة متبوعة بصفة أو like) ➔ مضارع بسيط (looks) ولا يقبل ing إطلاقاً!',
            highlight: 'looks / looks like'
          },
          {
            en: 'I am looking at the board at the exact moment.',
            ar: 'معنى "ينظر بعينيه" (حركة وتوجيه بصر متبوع بحرف الجر at) ➔ مضارع مستمر يقبل ing: am looking at!',
            highlight: 'am looking at'
          },
          {
            en: 'I think he is a very smart boy. / I think English is easy.',
            ar: 'معنى "يعتقد / في رأيي وقناعتي" (إبداء رأي دون حرف جر) ➔ مضارع بسيط تقريري (think) ممنوع من ing تماماً!',
            highlight: 'think'
          },
          {
            en: 'Right now, I am thinking about the answer to this question.',
            ar: 'معنى "يفكر وينشغل ذهنه بحل مسألة" (نشاط ذهني جارٍ متبوع بحرف الجر about أو of) ➔ مضارع مستمر يقبل ing: am thinking about!',
            highlight: 'am thinking about'
          }
        ],
        importantNotes: [
          '⭐ القاعدة الذهبية لفعل (Look) مع حروف الجر:',
          '1) إذا جاء Look بمعنى (يبدو / يظهر بمظهر): يأتي بعده صفة مباشرة (looks happy/tired) أو عبارة (looks like her mother) دون حرف جر موجه، وهنا يكون فعلاً تقريرياً (Stative) ولا يقبل ing إطلاقاً ويأتي بسيطاً (look/looks).',
          '2) إذا جاء Look بمعنى (ينظر بعينيه / يبحث / يعتني): يكون متبوعاً بحرف جر دائماً مثل: look at (ينظر إلى)، look for (يبحث عن)، look after (يعتني بـ). وهنا يصبح فعل حركة إرادي (Dynamic Action) ويقبل صيغة الاستمرار (-ing) مع دلالات اللحظة الحالية مثل: at the moment / right now!',
          '⭐ القاعدة الذهبية لفعل (Think) مع حروف الجر:',
          '1) إذا جاء Think بمعنى (يعتقد / في رأيي / يرى): لا يأتي بعده حرف جر (about/of)، بل تأتي بعده جملة كاملة توضح الرأي أو القناعة مثل: (I think he is honest / I think it will rain). وهنا يكون فعلاً تقريرياً (Stative - Opinion) وممنوع منعاً باتاً وضع ing له، ولا يجوز قول I am thinking he is right ❌.',
          '2) إذا جاء Think بمعنى (يفكر / ينشغل ذهنه بالتدبير أو اتخاذ قرار): يكون متبوعاً بحرف جر دائماً مثل (think about أو think of). وهنا يصبح نشاطاً ذهنياً حركياً مستمراً (Active Cognitive Process) ويقبل صيغة الاستمرار (-ing) في المضارع المستمر: I am thinking about traveling / thinking about the exam!',
          '⭐ ملخص فعل (Have): إذا دل على الملكية (يمتلك سيارة/بيت) ➔ have/has بسيط فقط. إذا دل على نشاط مثل تناول وجبة أو أخذ حمام أو قضاء وقت (having breakfast/lunch/bath/party) ➔ يقبل ing.'
        ]
      }
    ]
  }
];
