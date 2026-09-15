import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    "id": "nb_photo1_mcq1",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص1): إضافة ies للفعل المفرد",
    "sentenceEn": "The baby often ______ (cry) at night.",
    "bracketVerb": "cry",
    "options": [
      "cries",
      "cry",
      "crys",
      "is crying"
    ],
    "correctAnswer": "cries",
    "ruleBadge": "المضارع البسيط - قاعدة ies",
    "fromNotebook": true,
    "notebookPage": 1,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "تحويل y إلى ies عند انتهاء الفعل بساكن + y مع الفاعل المفرد",
      "ruleFormula": "Singular Subject (The baby) + Verb(-ies)",
      "keywordOrTrigger": "often (ظرف تكرار) + The baby (فاعل مفرد)",
      "teacherNote": "⭐ من تمرين 1 بالدفتر: \"The baby often [cry/cries/crys] at night\". الفعل cry ينتهي بحرف r ساكن قبله y، فتتحول y إلى ies لتصبح cries.",
      "arabicExplanation": "الفاعل The baby مفرد، ووجود often يدل على عادة وتكرار في المضارع البسيط. الفعل cry ينتهي بحرف ساكن (r) يليه (y)، لذلك تقلب y إلى ies فتصبح cries.",
      "englishGrammarRule": "Verbs ending in consonant + y change the \"y\" to \"ies\" in third-person singular present simple."
    }
  },
  {
    "id": "nb_photo1_mcq2",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص1): إضافة es مع الأفعال المنتهية بـ x",
    "sentenceEn": "My dad always ______ (fix) the car himself.",
    "bracketVerb": "fix",
    "options": [
      "fixes",
      "fix",
      "fixs",
      "is fixing"
    ],
    "correctAnswer": "fixes",
    "ruleBadge": "المضارع البسيط - نهاية es",
    "fromNotebook": true,
    "notebookPage": 1,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "إضافة es للأفعال المنتهية بحرف x",
      "ruleFormula": "Singular Subject (My dad) + Verb(-es)",
      "keywordOrTrigger": "always (ظرف تكرار) + My dad (مفرد)",
      "teacherNote": "⭐ من تمرين 2 بالدفتر: \"My dad always [fix/fixs/fixes] the car himself\". نضيف es لأن الفعل fix ينتهي بـ x.",
      "arabicExplanation": "الفاعل My dad مفرد، والكلمة الدالة always تدل على المضارع البسيط. وبما أن الفعل fix ينتهي بالحرف x، فإننا نضيف es ليصبح fixes.",
      "englishGrammarRule": "Verbs ending in \"-x\" take \"-es\" in third-person singular present simple (\"fixes\")."
    }
  },
  {
    "id": "nb_photo1_mcq3",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص1): فاعل Every المفرد وفعل want التقريري",
    "sentenceEn": "Every student ______ (want) to pass the final exam.",
    "bracketVerb": "want",
    "options": [
      "wants",
      "want",
      "is wanting",
      "are wanting"
    ],
    "correctAnswer": "wants",
    "ruleBadge": "مفرد Every + الفعل want",
    "fromNotebook": true,
    "notebookPage": 1,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: كلمة Every تدل على الجميع، لكنها في قواعد اللغة تعامل معاملة المفرد دائماً، والفعل want تقريري لا يقبل ing، لذا فالجواب الصحيح wants فقط.",
    "ruleDetail": {
      "ruleTitle": "كلمة Every تعامل دائماً معاملة المفرد",
      "ruleFormula": "Every + singular noun (student) + Verb(s)",
      "keywordOrTrigger": "Every (تفرض الإفراد دائماً)",
      "teacherNote": "⭐ تمرين 3 بالدفتر: \"Every student [want/wants] to pass the final exam\". انتبه لملاحظة المعلمة: \"كل أداة تدل على مفرد دائمًا تعامل معاملة المفرد\".",
      "arabicExplanation": "كلمة Every متبوعة باسم مفرد (student) تعامل كاسم مفرد، ولذلك يأخذ الفعل s فيصبح wants، كما أن want فعل حالة ورغبة لا يقبل ing.",
      "englishGrammarRule": "\"Every\" takes a grammatically singular subject, requiring the singular \"-s\" inflection on the lexical verb."
    }
  },
  {
    "id": "nb_photo1_mcq4",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "دفتر المعلمة (ص1): الفاعل الجمع وفعل have الحركي (تناول الغداء)",
    "sentenceEn": "Ahmad and Ali ______ (have) lunch together right now.",
    "bracketVerb": "have",
    "options": [
      "are having",
      "is having",
      "have",
      "has"
    ],
    "correctAnswer": "are having",
    "ruleBadge": "المضارع المستمر - have كحدث حركي",
    "fromNotebook": true,
    "notebookPage": 1,
    "difficulty": "tricky",
    "trapExplanation": "فعل have هنا لا يعني الملكية (Stative)، بل يعني \"يتناولان الغداء\" (Eating lunch)، وهو حدث حركي مستمر الآن مع right now والفاعل جمع (Ahmad and Ali) فيأخذ are having.",
    "ruleDetail": {
      "ruleTitle": "فعل have بمعنى يتناول أو يشرب يقبل المضارع المستمر",
      "ruleFormula": "Plural Subject (Ahmad and Ali) + are + having",
      "keywordOrTrigger": "right now (الآن) + have lunch (يتناول الغداء)",
      "teacherNote": "⭐ تمرين 4 بالدفتر: \"Ahmad and Ali [is having/are having] lunch together right now\". الفاعل مثنى/جمع ويأكلان الآن، لذلك are having.",
      "arabicExplanation": "الفاعل Ahmad and Ali فاعل جمع (they)، وكلمة right now تدل على الاستمرار في هذه اللحظة، وتناول الطعام حدث حركي يقبل ing، لذا نختار are having.",
      "englishGrammarRule": "Dynamic uses of \"have\" (e.g. eating/drinking) take continuous aspect; compound subject takes plural auxiliary \"are\"."
    }
  },
  {
    "id": "nb_photo1_mcq5",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص1): الاسم غير المعدود (Milk) وحقيقة علمية",
    "sentenceEn": "Milk ______ (has / have) a lot of calcium.",
    "bracketVerb": "has",
    "options": [
      "has",
      "have",
      "is having",
      "having"
    ],
    "correctAnswer": "has",
    "ruleBadge": "غير معدود - حقيقة علمية",
    "fromNotebook": true,
    "notebookPage": 1,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "الاسم غير المعدود يعامل دائماً معاملة المفرد",
      "ruleFormula": "Uncountable Noun (Milk) + has",
      "keywordOrTrigger": "Milk (اسم غير معدود) + حقيقة علمية",
      "teacherNote": "⭐ تمرين 5 بالدفتر: \"Milk [has/have] a lot of calcium\". الحليب غير معدود وغير المعدود مفرد، ومفرد have هو has.",
      "arabicExplanation": "كلمة Milk (الحليب) اسم غير معدود، والأسماء غير المعدودة تعامل كالمفرد الغائب (It)، ومفرد الفعل have في المضارع هو has.",
      "englishGrammarRule": "Uncountable mass nouns like \"milk\" are singular and take the third-person singular form \"has\"."
    }
  },
  {
    "id": "nb_photo1_mcq6",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص1): إملاء الفعل try مع الفاعل المفرد",
    "sentenceEn": "She ______ (try) her best to get high marks.",
    "bracketVerb": "try",
    "options": [
      "tries",
      "trys",
      "tryes",
      "is trying"
    ],
    "correctAnswer": "tries",
    "ruleBadge": "المضارع البسيط - تحويل y إلى ies",
    "fromNotebook": true,
    "notebookPage": 1,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "إملاء الأفعال المنتهية بـ حرف ساكن + y",
      "ruleFormula": "She + Verb(ies)",
      "keywordOrTrigger": "She (مفرد) + عادة وسعي مستمر",
      "teacherNote": "⭐ تمرين 6 بالدفتر: \"She [tries/trys/tryes] her best to get high marks\". حرف r ساكن فتقلب y إلى ies (tries).",
      "arabicExplanation": "الفاعل She مفرد، والفعل try ينتهي بحرف ساكن (r) متبوعاً بـ y، فتحذف y وتضاف ies ليصبح tries.",
      "englishGrammarRule": "Consonant + y changes to \"-ies\" in third-person singular simple present (\"try\" ➔ \"tries\")."
    }
  },
  {
    "id": "nb_photo1_mcq8_wh",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص1): تكوين سؤال Wh مع regularly",
    "sentenceEn": "Choose the correct question: What hobbies / you / engage / in regularly?",
    "bracketVerb": "engage in",
    "options": [
      "What hobbies do you engage in regularly?",
      "What hobbies does you engage in regularly?",
      "What hobbies are you engaging in regularly?",
      "What hobbies you engage in regularly?"
    ],
    "correctAnswer": "What hobbies do you engage in regularly?",
    "ruleBadge": "تكوين سؤال Wh - regularly",
    "fromNotebook": true,
    "notebookPage": 1,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "تكوين سؤال Wh-Question في المضارع البسيط مع الفاعل you",
      "ruleFormula": "What hobbies + do + you + engage in(inf) + regularly?",
      "keywordOrTrigger": "regularly (بانتظام - دالة على المضارع البسيط) + الفاعل you",
      "teacherNote": "⭐ تمرين 8 بالدفتر: \"What hobbies / you / engage / in regularly? Wh Q\". الفاعل you يأخذ do كفعل مساعد.",
      "arabicExplanation": "الترتيب الصحيح لسؤال Wh: أداة السؤال والمفعول (What hobbies) ➔ الفعل المساعد (do) لأن الفاعل you ➔ الفاعل (you) ➔ الفعل المجرد (engage in) ➔ الكلمة الدالة (regularly) وعلامة الاستفهام.",
      "englishGrammarRule": "Wh-question format with second-person subject \"you\" requires auxiliary \"do\" followed by bare infinitive."
    }
  },
  {
    "id": "nb_photo1_mcq9_neg",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص1): نفي الملكية مع He و have",
    "sentenceEn": "Choose the correct negative sentence: He / have / three luxury cars.",
    "bracketVerb": "have",
    "options": [
      "He doesn't have three luxury cars.",
      "He don't have three luxury cars.",
      "He isn't having three luxury cars.",
      "He hasn't three luxury cars."
    ],
    "correctAnswer": "He doesn't have three luxury cars.",
    "ruleBadge": "نفي الملكية - doesn't have",
    "fromNotebook": true,
    "notebookPage": 1,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: يكتب بعض الطلاب He hasn't أو He isn't having. الصواب في نفي المضارع البسيط للملكية هو doesn't have دائماً!",
    "ruleDetail": {
      "ruleTitle": "نفي فعل الملكية have في المضارع البسيط",
      "ruleFormula": "He + doesn't + have (مجرد)",
      "keywordOrTrigger": "have (ملكية سيارات فارهة) + الفاعل He",
      "teacherNote": "⭐ تمرين 9 بالدفتر: \"He / have / three luxury cars Negative\". مع He نستخدم doesn't ويعود الفعل إلى المصدر have.",
      "arabicExplanation": "لنفي فعل الملكية have مع الفاعل المفرد He، نستخدم doesn't متبوعة بالمصدر المجرد have: He doesn't have three luxury cars.",
      "englishGrammarRule": "Simple present negation of lexical \"have\" uses \"does not / doesn't\" + bare infinitive \"have\"."
    }
  },
  {
    "id": "nb_photo1_mcq10_neg",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "دفتر المعلمة (ص1): تحويل السؤال إلى جملة منفية (Change to N)",
    "sentenceEn": "Convert to a negative statement: Are you playing outside?",
    "bracketVerb": "play",
    "options": [
      "You aren't playing outside.",
      "You don't play outside.",
      "You isn't playing outside.",
      "You not playing outside."
    ],
    "correctAnswer": "You aren't playing outside.",
    "ruleBadge": "نفي المضارع المستمر - aren't playing",
    "fromNotebook": true,
    "notebookPage": 1,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "نفي المضارع المستمر مع الفاعل you",
      "ruleFormula": "You + aren't + playing",
      "keywordOrTrigger": "Are you playing (مضارع مستمر)",
      "teacherNote": "⭐ تمرين 10 بالدفتر: \"Are you playing outside? change to N\". النفي بإضافة not بعد are لتصبح aren't playing.",
      "arabicExplanation": "الجملة في زمن المضارع المستمر، ونفيها يكون بوضع not بعد الفعل المساعد are، فيصبح: You aren't playing outside.",
      "englishGrammarRule": "To negate present continuous, attach \"not\" to the auxiliary verb: \"are not\" or \"aren't\"."
    }
  },
  {
    "id": "nb_photo2_mcq7",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص2): فاعل الجمع الشاذ Children",
    "sentenceEn": "Children normally ______ (pass) the ball quickly in the game.",
    "bracketVerb": "pass",
    "options": [
      "pass",
      "passes",
      "passing",
      "are passing"
    ],
    "correctAnswer": "pass",
    "ruleBadge": "فاعل جمع شاذ - Children",
    "fromNotebook": true,
    "notebookPage": 2,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: يظن بعض الطلاب أن Children مفرد لعدم احتوائها على s! لكن كلمة Children هي جمع شاذ لكلمة child، والفاعل الجمع يأخذ الفعل مجرداً pass بدون s.",
    "ruleDetail": {
      "ruleTitle": "الأسماء الجمع الشاذة (Irregular Plural) تأخذ فعلاً مجرداً",
      "ruleFormula": "Plural Subject (Children) + Verb(مجرد بدون s)",
      "keywordOrTrigger": "normally (عادةً - ظرف تكرار) + Children (جمع)",
      "teacherNote": "⭐ تمرين 7 بالدفتر: \"Children normally [pass/passes] the ball quickly in the game\". الأطفال جمع شاذ فيأخذ pass.",
      "arabicExplanation": "كلمة Children جمع شاذ لكلمة Child، ومع الفاعل الجمع في المضارع البسيط نضع الفعل مجرداً بدون إضافة s: pass.",
      "englishGrammarRule": "Irregular plural nouns (e.g. \"children\", \"people\") take the base plural form of the verb without \"-s\"."
    }
  },
  {
    "id": "nb_photo2_mcq8",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص2): فاعل Everyone مع فعل Be",
    "sentenceEn": "Everyone ______ (be) here today.",
    "bracketVerb": "be",
    "options": [
      "is",
      "are",
      "am",
      "be"
    ],
    "correctAnswer": "is",
    "ruleBadge": "فاعل مفرد - Everyone is",
    "fromNotebook": true,
    "notebookPage": 2,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: يعتقد الطلاب أن Everyone تعني الكل فهي جمع وتأخذ are! لكنها في قواعد اللغة الإنجليزية مفردة حتماً وتأخذ is.",
    "ruleDetail": {
      "ruleTitle": "الضمير Everyone يعامل دائماً معاملة المفرد",
      "ruleFormula": "Everyone + is",
      "keywordOrTrigger": "Everyone (ضمير نكرة مفرد نحوياً)",
      "teacherNote": "⭐ تمرين 8 بالدفتر: \"Everyone [is/are/am] here today\". انتبه للقاعدة الذهبية: Everyone مفرد ويأخذ is.",
      "arabicExplanation": "الضمير Everyone يعني الجميع، ولكنه في قواعد الإنجليزية يعامل مفرد دائماً، وصيغة فعل be مع المفرد في المضارع هي is.",
      "englishGrammarRule": "Indefinite pronouns such as \"everyone\" and \"everybody\" are grammatically singular and require singular verb \"is\"."
    }
  },
  {
    "id": "nb_photo2_mcq9",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص2): إضافة es للفعل المنتهي بـ z (fizz الوحيد)",
    "sentenceEn": "The volcano sometimes ______ (fizz) before it erupts.",
    "bracketVerb": "fizz",
    "options": [
      "fizzes",
      "fizzs",
      "fizzing",
      "is fizzing"
    ],
    "correctAnswer": "fizzes",
    "ruleBadge": "المضارع البسيط - fizz الوحيد بالدفتر",
    "fromNotebook": true,
    "notebookPage": 2,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "إضافة es للأفعال المنتهية بحرف z",
      "ruleFormula": "Singular Subject (The volcano) + Verb(-es)",
      "keywordOrTrigger": "sometimes (أحياناً) + The volcano (بركان - فاعل مفرد)",
      "teacherNote": "⭐ تمرين 9 بالدفتر: \"The volcano sometimes [fizzes/fizzs] before it erupts\". كتبت المعلمة في الدفتر مربعاً خاصاً: [fizz الوحيد ➔ fizzes].",
      "arabicExplanation": "الفاعل The volcano مفرد، والكلمة sometimes تدل على المضارع البسيط. الفعل fizz ينتهي بحرف z، والقاعدة تقتضي إضافة es فيصبح fizzes.",
      "englishGrammarRule": "Verbs ending in \"-z\" or \"-zz\" take \"-es\" in third-person singular present simple (\"fizzes\")."
    }
  },
  {
    "id": "nb_photo2_mcq10",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "دفتر المعلمة (ص2): النظر الموجه في اللحظة المحددة (at the exact moment)",
    "sentenceEn": "I ______ (look) at the board at the exact moment.",
    "bracketVerb": "look",
    "options": [
      "am looking",
      "look",
      "looks",
      "looking"
    ],
    "correctAnswer": "am looking",
    "ruleBadge": "المضارع المستمر - at the exact moment",
    "fromNotebook": true,
    "notebookPage": 2,
    "difficulty": "tricky",
    "trapExplanation": "الفعل look at هنا فعل حركة وتوجيه بصر إرادي مقترن بـ at the exact moment، وليس فعلاً تقريرياً، ولذلك يأخذ المضارع المستمر: am looking.",
    "ruleDetail": {
      "ruleTitle": "استخدام look at في المضارع المستمر عند وقوع الفعل الآن",
      "ruleFormula": "I + am + looking at",
      "keywordOrTrigger": "at the exact moment (في هذه اللحظة بالذات)",
      "teacherNote": "⭐ تمرين 10 بالدفتر: \"I [am looking/look] at the board at the exact moment\". حدث يقع الآن بالذات فيأخذ am looking.",
      "arabicExplanation": "وجود العبارة at the exact moment يدل بشكل قاطع على وقوع الحدث في هذه اللحظة، والضمير I يأخذ am والفعل يضاف له ing: am looking.",
      "englishGrammarRule": "Active sensory engagement with directional preposition (\"look at\") at a specific moment takes present continuous aspect."
    }
  },
  {
    "id": "nb_photo3_q1_huda",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص3): تكوين سؤال Yes/No للمفرد (Huda)",
    "sentenceEn": "Form the correct Yes/No question: Huda / watch / TV / every day",
    "bracketVerb": "watch",
    "options": [
      "Does Huda watch TV every day?",
      "Do Huda watch TV every day?",
      "Is Huda watching TV every day?",
      "Does Huda watches TV every day?"
    ],
    "correctAnswer": "Does Huda watch TV every day?",
    "ruleBadge": "تكوين سؤال - Does للمفرد",
    "fromNotebook": true,
    "notebookPage": 3,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "سؤال Yes/No مع الفاعل المفرد في المضارع البسيط",
      "ruleFormula": "Does + Singular Subject (Huda) + Verb(inf مجرد) + TV every day?",
      "keywordOrTrigger": "every day (روتين) + الفاعل Huda مفرد",
      "teacherNote": "⭐ تمرين 1 بصفحة yes/no: \"Huda / watch / TV / every day? yes/no\". نبدأ بـ Does ويعود watch مجرداً.",
      "arabicExplanation": "لبدء سؤال Yes/No مع الفاعل المفرد Huda، نستخدم Does، ثم نكتب الفاعل Huda، ثم نضع الفعل مجرداً watch بدون es، ونكمل الجملة بعلامة الاستفهام.",
      "englishGrammarRule": "Yes/No questions with singular subjects use auxiliary \"Does\" followed by the base infinitive form."
    }
  },
  {
    "id": "nb_photo3_q2_boy_neg",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "دفتر المعلمة (ص3): نفي المضارع المستمر مع right now",
    "sentenceEn": "Form the correct negative sentence: The boy / go / to school / right now",
    "bracketVerb": "go",
    "options": [
      "The boy isn't going to school right now.",
      "The boy doesn't go to school right now.",
      "The boy aren't going to school right now.",
      "The boy not going to school right now."
    ],
    "correctAnswer": "The boy isn't going to school right now.",
    "ruleBadge": "نفي المستمر - isn't going",
    "fromNotebook": true,
    "notebookPage": 3,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "نفي المضارع المستمر مع الفاعل المفرد",
      "ruleFormula": "The boy + is not (isn't) + going",
      "keywordOrTrigger": "right now (الآن) + Negative",
      "teacherNote": "⭐ تمرين 2 بصفحة yes/no: \"The boy / go / to school / right now Negative\". مع المفرد و right now نستخدم isn't going.",
      "arabicExplanation": "الكلمة right now تدل على المضارع المستمر، والفاعل The boy مفرد، والنفي يكون بإضافة not للفعل المساعد is ليصبح isn't going.",
      "englishGrammarRule": "Negation of singular present continuous requires auxiliary \"is not / isn't\" + \"-ing\" participle."
    }
  },
  {
    "id": "nb_photo3_q3_play_football",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "دفتر المعلمة (ص3): تكوين سؤال Yes/No في المستمر مع at the moment",
    "sentenceEn": "Form the correct Yes/No question: They / play / football / at the moment",
    "bracketVerb": "play",
    "options": [
      "Are they playing football at the moment?",
      "Do they play football at the moment?",
      "Is they playing football at the moment?",
      "Are they play football at the moment?"
    ],
    "correctAnswer": "Are they playing football at the moment?",
    "ruleBadge": "سؤال المستمر - Are they playing",
    "fromNotebook": true,
    "notebookPage": 3,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "تكوين سؤال Yes/No في المضارع المستمر مع الفاعل الجمع",
      "ruleFormula": "Are + they + playing + football at the moment?",
      "keywordOrTrigger": "at the moment (في هذه اللحظة)",
      "teacherNote": "⭐ تمرين 3 بصفحة yes/no: \"They / play / football / at the moment? yes/no\". نبدأ بـ Are ثم الفاعل they ثم الفعل مضافاً له ing.",
      "arabicExplanation": "العبارة at the moment تدل على المضارع المستمر، والفاعل they جمع، فنبدأ السؤال بـ Are متبوعة بالفاعل they ثم playing.",
      "englishGrammarRule": "Present continuous Yes/No questions invert the auxiliary \"Are\" with plural subject pronoun \"they\"."
    }
  },
  {
    "id": "nb_photo3_q4_how_often_ahmad",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص3): سؤال Wh بـ How often مع أحمد",
    "sentenceEn": "Form the correct Wh-Question: How often / Ahmad / play / football",
    "bracketVerb": "play",
    "options": [
      "How often does Ahmad play football?",
      "How often do Ahmad play football?",
      "How often is Ahmad playing football?",
      "How often Ahmad plays football?"
    ],
    "correctAnswer": "How often does Ahmad play football?",
    "ruleBadge": "سؤال Wh - How often does",
    "fromNotebook": true,
    "notebookPage": 3,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "تكوين سؤال How often في المضارع البسيط",
      "ruleFormula": "How often + does + Ahmad + play(inf) + football?",
      "keywordOrTrigger": "How often (كم مرة - سؤال عن التكرار)",
      "teacherNote": "⭐ تمرين 4 بصفحة yes/no: \"How often / Ahmad / play / football? Wh Q\". أحمد مفرد فيأخذ does ويعود play مجرداً.",
      "arabicExplanation": "أداة السؤال How often يليها الفعل المساعد does لأن الفاعل أحمد مفرد، ثم الفاعل Ahmad، ثم الفعل بالمصدر المجرد play.",
      "englishGrammarRule": "Frequency inquiry with \"How often\" requires auxiliary \"does\" before the third-person singular subject."
    }
  },
  {
    "id": "nb_photo3_q5_what_students_study",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص3): سؤال Wh مع الفاعل الجمع the students",
    "sentenceEn": "Form the correct Wh-Question: What / the students / study / in the evenings",
    "bracketVerb": "study",
    "options": [
      "What do the students study in the evenings?",
      "What does the students study in the evenings?",
      "What are the students studying in the evenings?",
      "What the students study in the evenings?"
    ],
    "correctAnswer": "What do the students study in the evenings?",
    "ruleBadge": "سؤال Wh - do مع الجمع",
    "fromNotebook": true,
    "notebookPage": 3,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "سؤال Wh-Question مع الفاعل الجمع في المضارع البسيط",
      "ruleFormula": "What + do + the students + study(inf) + in the evenings?",
      "keywordOrTrigger": "in the evenings (عادة مسائية) + the students (جمع)",
      "teacherNote": "⭐ تمرين 5 بصفحة yes/no: \"What / the students / study / in the evenings? Wh Q\". الطلاب جمع فيأخذون do.",
      "arabicExplanation": "الفاعل the students جمع، ولذلك نستخدم الفعل المساعد do بعد أداة السؤال What، ثم نضع الفعل مجرداً study.",
      "englishGrammarRule": "Wh-questions with plural nominal subjects require auxiliary \"do\" followed by bare infinitive."
    }
  },
  {
    "id": "nb_photo3_q6_be_creative_writer",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص3): سؤال Yes/No مع فعل Be الرئيسي",
    "sentenceEn": "Form the correct Yes/No question: Be / she / a creative writer",
    "bracketVerb": "be",
    "options": [
      "Is she a creative writer?",
      "Does she be a creative writer?",
      "Are she a creative writer?",
      "Was she a creative writer?"
    ],
    "correctAnswer": "Is she a creative writer?",
    "ruleBadge": "سؤال فعل Be - Is she",
    "fromNotebook": true,
    "notebookPage": 3,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "تكوين السؤال مع فعل be الرئيسي بدون الاستعانة بـ Does",
      "ruleFormula": "Is + she + a creative writer?",
      "keywordOrTrigger": "الفعل be كفعل رئيسي وحيد في الجملة",
      "teacherNote": "⭐ تمرين 6 بصفحة yes/no: \"Be / she / a creative writer yes/no\". مع فعل be لا نستخدم Does بل نضع Is في البداية!",
      "arabicExplanation": "فعل be مع الضمير she هو Is، وعند تكوين السؤال يتقدم Is إلى بداية الجملة مباشرة بدون الحاجة إلى فعل مساعد خارجي.",
      "englishGrammarRule": "The verb \"to be\" forms questions through subject-auxiliary inversion without requiring dummy \"do/does\"."
    }
  },
  {
    "id": "nb_photo3_q7_lack_of_sleep",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص3): نفي الفاعل المفرد المركب (Lack of sleep)",
    "sentenceEn": "Form the correct negative sentence: Lack of sleep / cause / lots of health problems",
    "bracketVerb": "cause",
    "options": [
      "Lack of sleep doesn't cause lots of health problems.",
      "Lack of sleep don't cause lots of health problems.",
      "Lack of sleep isn't causing lots of health problems.",
      "Lack of sleep not cause lots of health problems."
    ],
    "correctAnswer": "Lack of sleep doesn't cause lots of health problems.",
    "ruleBadge": "نفي الفاعل المركب - doesn't cause",
    "fromNotebook": true,
    "notebookPage": 3,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: يرى الطالب كلمة problems فيعتقد أنها جمع ويختار don't! الفاعل الحقيقي هو كلمة Lack (قلة/نقص) وهي اسم مفرد غير معدود، فننفي بـ doesn't cause.",
    "ruleDetail": {
      "ruleTitle": "نفي الجملة عندما يكون الفاعل عبارة اسمية متبوعة بحرف جر",
      "ruleFormula": "Singular Noun Phrase (Lack of sleep) + doesn't + cause(inf)",
      "keywordOrTrigger": "Lack (الفاعل الحقيقي هو قلة النوم - اسم مفرد)",
      "teacherNote": "⭐ تمرين 7 بصفحة yes/no: \"Lack of sleep / cause / lots of health problems Negative\". الفاعل Lack مفرد ويأخذ doesn't.",
      "arabicExplanation": "الفاعل الحقيقي هو كلمة Lack (نقص أو قلة) وهو اسم مفرد غير معدود، ونفي المضارع البسيط للمفرد يكون باستخدام doesn't متبوعة بالمصدر cause.",
      "englishGrammarRule": "The head noun of the subject noun phrase \"Lack of sleep\" is \"Lack\" (singular uncountable), taking \"does not / doesn't\"."
    }
  },
  {
    "id": "nb_photo4_q12_sami_prays",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص4): سامي يصلي خمس مرات يومياً",
    "sentenceEn": "Sami ______ (pray) five times a day.",
    "bracketVerb": "pray",
    "options": [
      "prays",
      "pray",
      "praies",
      "is praying"
    ],
    "correctAnswer": "prays",
    "ruleBadge": "المضارع البسيط - حرف علة + y",
    "fromNotebook": true,
    "notebookPage": 4,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "الفعل المنتهي بـ حرف علة + y يضاف له s فقط بدون حذف y",
      "ruleFormula": "Singular Subject (Sami) + Verb(s)",
      "keywordOrTrigger": "five times a day (روتين يومي دائم)",
      "teacherNote": "⭐ تمرين 12 بالدفتر: \"Sami ______ (pray) five times a day\". الفعل pray قبله حرف علة (a) فنضيف s فقط (prays) ولا نحذف y.",
      "arabicExplanation": "سامي فاعل مفرد والصلاة 5 مرات يومياً عادة دائمة، وبما أن الفعل pray مسبوق بحرف العلة a، فإننا نكتفي بإضافة s لتصبح prays.",
      "englishGrammarRule": "Verbs ending in vowel + \"y\" add \"-s\" without modifying the root (\"pray\" ➔ \"prays\")."
    }
  },
  {
    "id": "nb_photo4_q13_tree_falling",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "دفتر المعلمة (ص4): التحذير اللحظي بـ Look out!",
    "sentenceEn": "Look out! That big tree ______ (fall).",
    "bracketVerb": "fall",
    "options": [
      "is falling",
      "falls",
      "fall",
      "are falling"
    ],
    "correctAnswer": "is falling",
    "ruleBadge": "المضارع المستمر - تحذير Look out!",
    "fromNotebook": true,
    "notebookPage": 4,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "المضارع المستمر مع عبارات التحذير والتنبيه اللحظي",
      "ruleFormula": "Singular Subject (That big tree) + is + falling",
      "keywordOrTrigger": "Look out! (انتبه! - تحذير من حدث يقع أمام عينيك الآن)",
      "teacherNote": "⭐ تمرين 13 بالدفتر: \"Look out! That big tree ______ (fall)\". عند وجود Look out! نستخدم المضارع المستمر مباشرة (is falling).",
      "arabicExplanation": "العبارة التحذيرية Look out! تدل على أن الشجرة تسقط في هذه اللحظة بالذات أمام أعيننا، والشجرة مفردة فتأخذ is falling.",
      "englishGrammarRule": "Imperative warning markers like \"Look out!\" or \"Watch out!\" govern present continuous for unfolding events."
    }
  },
  {
    "id": "nb_photo4_q14_mouse_cheese",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص4): الفأر يأكل الجبن دائماً",
    "sentenceEn": "The mouse always ______ (eat) cheese when no one is watching.",
    "bracketVerb": "eat",
    "options": [
      "eats",
      "eat",
      "is eating",
      "eaten"
    ],
    "correctAnswer": "eats",
    "ruleBadge": "المضارع البسيط - The mouse eats",
    "fromNotebook": true,
    "notebookPage": 4,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "المضارع البسيط مع الفاعل المفرد وظرف التكرار always",
      "ruleFormula": "Singular Subject (The mouse) + Verb(s)",
      "keywordOrTrigger": "always (دائماً - تكرار) + The mouse (مفرد)",
      "teacherNote": "⭐ تمرين 14 بالدفتر: \"The mouse always ______ (eat) cheese when no one is watching\". الفأر مفرد ويأخذ eats.",
      "arabicExplanation": "كلمة The mouse اسم مفرد (جمعه mice)، والكلمة always تدل على عادة وتكرار، لذا يضاف للفعل s ليصبح eats.",
      "englishGrammarRule": "Singular noun \"The mouse\" takes singular present inflection \"-s\" (\"eats\")."
    }
  },
  {
    "id": "nb_photo4_q15_students_not_travel",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص4): نفي الجمع في المضارع البسيط",
    "sentenceEn": "Students ______ (not / travel) to school by bus every day.",
    "bracketVerb": "not travel",
    "options": [
      "don't travel",
      "doesn't travel",
      "aren't travelling",
      "not travel"
    ],
    "correctAnswer": "don't travel",
    "ruleBadge": "نفي الجمع - don't travel",
    "fromNotebook": true,
    "notebookPage": 4,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "نفي المضارع البسيط مع الفاعل الجمع",
      "ruleFormula": "Plural Subject (Students) + don't + travel(inf)",
      "keywordOrTrigger": "every day (روتين يومي) + Students (فاعل جمع)",
      "teacherNote": "⭐ تمرين 15 بالدفتر: \"Students ______ (not/travel) to school by bus every day\". مع فاعل الجمع نستخدم don't travel.",
      "arabicExplanation": "الفاعل Students جمع، والكلمة every day تدل على المضارع البسيط. لنفي المضارع البسيط مع الجمع نستخدم don't متبوعة بالمصدر travel.",
      "englishGrammarRule": "Plural subject nouns mandate \"do not / don't\" + bare infinitive in negative simple present."
    }
  },
  {
    "id": "nb_photo4_q16_she_takes_long_time",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص4): استغراق وقت مع sometimes",
    "sentenceEn": "She sometimes ______ (take) a long time to finish her homework.",
    "bracketVerb": "take",
    "options": [
      "takes",
      "take",
      "is taking",
      "taking"
    ],
    "correctAnswer": "takes",
    "ruleBadge": "المضارع البسيط - sometimes takes",
    "fromNotebook": true,
    "notebookPage": 4,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "المضارع البسيط مع الفاعل المفرد وظرف التكرار sometimes",
      "ruleFormula": "She + sometimes + Verb(s)",
      "keywordOrTrigger": "sometimes (أحياناً - ظرف تكرار)",
      "teacherNote": "⭐ تمرين 16 بالدفتر: \"She sometimes ______ (take) a long time to finish her homework\". الفاعل She مفرد فيأخذ takes.",
      "arabicExplanation": "الفاعل She ضمير مفرد غائب، والكلمة sometimes تدل على عادة تتكرر أحياناً، ولذا نضيف s للفعل ليصبح takes.",
      "englishGrammarRule": "Third-person singular \"She\" with frequency adverb \"sometimes\" takes singular \"-s\" (\"takes\")."
    }
  },
  {
    "id": "nb_photo4_q17_they_not_enjoy",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص4): نفي الفعل enjoy مع normally",
    "sentenceEn": "They ______ (not / enjoy) loud parties normally.",
    "bracketVerb": "not enjoy",
    "options": [
      "don't enjoy",
      "doesn't enjoy",
      "aren't enjoying",
      "not enjoying"
    ],
    "correctAnswer": "don't enjoy",
    "ruleBadge": "نفي الجمع - don't enjoy",
    "fromNotebook": true,
    "notebookPage": 4,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "نفي المضارع البسيط مع الفاعل الجمع They و normally",
      "ruleFormula": "They + don't + enjoy(inf)",
      "keywordOrTrigger": "normally (عادةً - ظرف تكرار) + They (جمع)",
      "teacherNote": "⭐ تمرين 17 بالدفتر: \"They ______ (not/enjoy) loud parties normally\". الفاعل They جمع فننفي بـ don't enjoy.",
      "arabicExplanation": "الكلمة normally تدل على طبع وعادة في المضارع البسيط، والفاعل They جمع، فننفي بـ don't متبوعة بالفعل مجرداً enjoy.",
      "englishGrammarRule": "Plural pronoun \"They\" takes \"don't\" + bare infinitive in negative present simple."
    }
  },
  {
    "id": "nb_photo4_q18_rice_needs_water",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص4): الأرز والماء الساخن (غير معدود + فعل تقريري)",
    "sentenceEn": "Rice ______ (need) hot water to cook well.",
    "bracketVerb": "need",
    "options": [
      "needs",
      "need",
      "is needing",
      "are needing"
    ],
    "correctAnswer": "needs",
    "ruleBadge": "غير معدود - Rice needs",
    "fromNotebook": true,
    "notebookPage": 4,
    "difficulty": "tricky",
    "trapExplanation": "الفعل need فعل حاجة وتقريري لا يقبل ing، وكلمة Rice اسم غير معدود يعامل دائماً كالمفرد فيأخذ s: needs.",
    "ruleDetail": {
      "ruleTitle": "الاسم غير المعدود يعامل كالمفرد + الفعل need فعل حالة تقريري",
      "ruleFormula": "Uncountable Subject (Rice) + needs",
      "keywordOrTrigger": "Rice (غير معدود) + need (فعل حالة تقريري)",
      "teacherNote": "⭐ تمرين 18 بالدفتر: \"Rice ______ (need) hot water to cook well\". الأرز غير معدود مفرد، وفعل need تقريري فيأخذ s: needs.",
      "arabicExplanation": "كلمة Rice (الأرز) اسم مادة غير معدودة تعامل كالمفرد، والفعل need فعل تقريري يعبر عن الحاجة ولا يقبل ing، لذا نضع needs.",
      "englishGrammarRule": "Uncountable nouns are grammatically singular; stative \"need\" takes third-person \"-s\" suffix (\"needs\")."
    }
  },
  {
    "id": "nb_photo4_q19_at_present_talking",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "دفتر المعلمة (ص4): المضارع المستمر مع At present",
    "sentenceEn": "At present, she ______ (talk) to a customer on the phone.",
    "bracketVerb": "talk",
    "options": [
      "is talking",
      "talks",
      "talk",
      "is talk"
    ],
    "correctAnswer": "is talking",
    "ruleBadge": "المضارع المستمر - At present",
    "fromNotebook": true,
    "notebookPage": 4,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "استخدام المضارع المستمر مع الكلمة الدالة At present",
      "ruleFormula": "She + is + talking",
      "keywordOrTrigger": "At present (في الوقت الحاضر - دالة على المضارع المستمر)",
      "teacherNote": "⭐ تمرين 19 بالدفتر: \"At present, she ______ (talk) to a customer on the phone\". وجود At present يتطلب is talking.",
      "arabicExplanation": "العبارة At present تعني في الوقت الحالي وتدل على استمرار الحدث، والفاعل she مفرد فيأخذ is والفعل يضاف له ing: is talking.",
      "englishGrammarRule": "Time adjunct \"At present\" denotes an action occurring around the present time, requiring present continuous."
    }
  },
  {
    "id": "nb_photo4_q20_everything_happens",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (ص4): حقيقة كل شيء يحدث لسبب",
    "sentenceEn": "Everything ______ (happen) for a reason.",
    "bracketVerb": "happen",
    "options": [
      "happens",
      "happen",
      "is happening",
      "happening"
    ],
    "correctAnswer": "happens",
    "ruleBadge": "فاعل مفرد - Everything happens",
    "fromNotebook": true,
    "notebookPage": 4,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: يظن الطالب أن Everything تعني كل شيء فهي جمع! لكن كلمات Everything / Everyone تعامل مفرد دائماً في قواعد الإنجليزية، فتأخذ happens.",
    "ruleDetail": {
      "ruleTitle": "كلمة Everything تعامل معاملة المفرد دائماً",
      "ruleFormula": "Everything + Verb(s)",
      "keywordOrTrigger": "Everything (ضمير نكرة مفرد نحوياً) + حقيقة عامة",
      "teacherNote": "⭐ تمرين 20 بالدفتر: \"Everything ______ (happen) for a reason\". قاعدة الدفتر: \"كل أداة تدل على مفرد دائمًا تعامل معاملة المفرد\" ➔ happens.",
      "arabicExplanation": "الضمير Everything يعامل في قواعد اللغة الإنجليزية كاسم مفرد غائب، وللتعبير عن حقيقة عامة نضيف s للفعل ليصبح happens.",
      "englishGrammarRule": "Indefinite pronoun \"everything\" is grammatically singular and takes singular verb inflection \"-s\" (\"happens\")."
    }
  },
  {
    "id": "nb_photo5_q1_train_coming",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "دفتر المعلمة (اختبار ص5): Look! القطار قادم الآن",
    "sentenceEn": "Look! The train ______ (come) right now.",
    "bracketVerb": "come",
    "options": [
      "is coming",
      "comes",
      "come",
      "is comeing"
    ],
    "correctAnswer": "is coming",
    "ruleBadge": "المضارع المستمر - Look! + right now",
    "fromNotebook": true,
    "notebookPage": 5,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "المضارع المستمر مع Look! وحذف حرف e الصامت عند إضافة ing",
      "ruleFormula": "The train + is + coming",
      "keywordOrTrigger": "Look! + right now",
      "teacherNote": "⭐ اختبار إنجليزي بالدفتر تمرين 1: \"Look! The train ______ (come) right now\". انتبه لحذف حرف e من come لتصبح coming.",
      "arabicExplanation": "كلمة Look! التنبيهية وعبارة right now تدلان على المضارع المستمر، والقطار مفرد فيأخذ is coming مع حذف حرف e عند إضافة ing.",
      "englishGrammarRule": "Exclamation \"Look!\" indicates an ongoing visual event; final silent \"-e\" is dropped before adding \"-ing\" (\"coming\")."
    }
  },
  {
    "id": "nb_photo5_q2_reading_stories",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (اختبار ص5): الاستمتاع بقراءة القصص مع normally",
    "sentenceEn": "She normally ______ (enjoy) reading stories before bed.",
    "bracketVerb": "enjoy",
    "options": [
      "enjoys",
      "enjoy",
      "enjoies",
      "is enjoying"
    ],
    "correctAnswer": "enjoys",
    "ruleBadge": "المضارع البسيط - حرف علة + y",
    "fromNotebook": true,
    "notebookPage": 5,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "إضافة s للفعل المنتهي بـ علة + y مع الفاعل المفرد",
      "ruleFormula": "She + normally + enjoys",
      "keywordOrTrigger": "normally (عادةً - ظرف تكرار) + She (مفرد)",
      "teacherNote": "⭐ اختبار إنجليزي بالدفتر تمرين 2: \"She normally ______ (enjoy) reading stories before bed\". الفعل enjoy مسبوق بحرف علة o فنضيف s فقط: enjoys.",
      "arabicExplanation": "الفاعل She مفرد، والكلمة normally تدل على المضارع البسيط. الفعل enjoy ينتهي بحرف علة (o) يليه y، لذلك نضيف s مباشرة دون تغيير y: enjoys.",
      "englishGrammarRule": "Vowel + \"y\" endings retain the \"y\" and simply append \"-s\" in present simple (\"enjoy\" ➔ \"enjoys\")."
    }
  },
  {
    "id": "nb_photo5_q3_not_agree",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "دفتر المعلمة (اختبار ص5): نفي الفعل التقريري agree (الموافقة)",
    "sentenceEn": "I am sorry, but I ______ (not / agree) with your opinion.",
    "bracketVerb": "not agree",
    "options": [
      "don't agree",
      "am not agreeing",
      "doesn't agree",
      "not agree"
    ],
    "correctAnswer": "don't agree",
    "ruleBadge": "فعل تقريري - agree لا يقبل ing",
    "fromNotebook": true,
    "notebookPage": 5,
    "difficulty": "tricky",
    "trapExplanation": "الفعل agree هو فعل رأي وموقف عقلي تقريري (Stative Verb) ممنوع من أخذ -ing إطلاقاً، ونفيه مع الضمير I يكون don't agree.",
    "ruleDetail": {
      "ruleTitle": "الفعل agree فعل حالة ورأي تقريري لا يقبل الاستمرار",
      "ruleFormula": "I + don't + agree(inf)",
      "keywordOrTrigger": "agree (فعل موافقة ورأي تقريري من قائمة الدفتر)",
      "teacherNote": "⭐ اختبار إنجليزي بالدفتر تمرين 3: \"I am sorry, but I ______ (not/agree) with your opinion\". أفعال الرأي لا تأخذ ing.",
      "arabicExplanation": "فعل agree مدرج في جدول الدفتر تحت تصنيف أفعال الرأي والحالة الذهنية، وهذه الأفعال لا تأتي في المضارع المستمر، ونفيها مع I يكون don't agree.",
      "englishGrammarRule": "\"Agree\" is a stative verb expressing an intellectual stance; it resists the progressive aspect."
    }
  },
  {
    "id": "nb_photo5_q4_someone_knocking",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "دفتر المعلمة (اختبار ص5): Listen! شخص يطرق الباب الآن",
    "sentenceEn": "Listen! Someone ______ (knock) at the door.",
    "bracketVerb": "knock",
    "options": [
      "is knocking",
      "knocks",
      "knock",
      "are knocking"
    ],
    "correctAnswer": "is knocking",
    "ruleBadge": "المضارع المستمر - Listen! + Someone",
    "fromNotebook": true,
    "notebookPage": 5,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "المضارع المستمر مع الفعل التنبيهي Listen! والفاعل المفرد Someone",
      "ruleFormula": "Someone (مفرد) + is + knocking",
      "keywordOrTrigger": "Listen! (استمع! - تنبيه لحظي)",
      "teacherNote": "⭐ اختبار إنجليزي بالدفتر تمرين 4: \"Listen! Someone ______ (knock) at the door\". كلمة Listen! تفرض المضارع المستمر، و Someone مفرد يأخذ is knocking.",
      "arabicExplanation": "كلمة Listen! تدل على حدث صوتي يقع في هذه اللحظة، والضمير Someone مفرد، فيأخذ is knocking.",
      "englishGrammarRule": "Auditory cue \"Listen!\" requires present continuous for immediate concurrent action; \"someone\" is grammatically singular."
    }
  },
  {
    "id": "nb_photo5_q5_honey_never_spoils",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (اختبار ص5): العسل لا يفسد أبداً (حقيقة + غير معدود)",
    "sentenceEn": "Honey never ______ (spoil); it lasts forever.",
    "bracketVerb": "spoil",
    "options": [
      "spoils",
      "spoil",
      "is spoiling",
      "spoiles"
    ],
    "correctAnswer": "spoils",
    "ruleBadge": "حقيقة علمية - Honey spoils",
    "fromNotebook": true,
    "notebookPage": 5,
    "difficulty": "tricky",
    "trapExplanation": "العسل Honey اسم غير معدود يعامل مفرد دائماً، وفساد العسل حقيقة علمية دائمة مع never فتأخذ المضارع البسيط المفرد: spoils.",
    "ruleDetail": {
      "ruleTitle": "الاسم غير المعدود يعامل مفرد مع الحقائق العلمية وظرف never",
      "ruleFormula": "Uncountable Subject (Honey) + never + Verb(s)",
      "keywordOrTrigger": "Honey (غير معدود) + never + حقيقة علمية",
      "teacherNote": "⭐ اختبار إنجليزي بالدفتر تمرين 5: \"Honey never ______ (spoil); it lasts forever\". ملاحظة الدفتر بخط اليد: \"غير معدود دائماً يعامل معاملة المفرد\" ➔ spoils.",
      "arabicExplanation": "العسل اسم غير معدود يعامل دائماً كالمفرد، وكونه لا يفسد حقيقة علمية دائمة، لذا نضيف s للفعل ليصبح spoils.",
      "englishGrammarRule": "Uncountable nouns take singular inflection in statements of scientific timeless truths (\"spoils\")."
    }
  },
  {
    "id": "nb_photo5_q6_ahmad_having_breakfast",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "دفتر المعلمة (اختبار ص5): أحمد يتناول إفطاراً سريعاً الآن",
    "sentenceEn": "Ahmad ______ (have) a quick breakfast at the moment.",
    "bracketVerb": "have",
    "options": [
      "is having",
      "has",
      "have",
      "is haveing"
    ],
    "correctAnswer": "is having",
    "ruleBadge": "المستمر - have بمعنى يتناول",
    "fromNotebook": true,
    "notebookPage": 5,
    "difficulty": "tricky",
    "trapExplanation": "فعل have breakfast يعني أكل الطعام (Eating) وليس امتلاكاً، ومقترن بـ at the moment والفاعل أحمد مفرد، فيأخذ is having.",
    "ruleDetail": {
      "ruleTitle": "فعل have بمعنى يتناول وجبة يقبل المضارع المستمر",
      "ruleFormula": "Ahmad + is + having a meal",
      "keywordOrTrigger": "at the moment (في هذه اللحظة) + have breakfast (يتناول الفطور)",
      "teacherNote": "⭐ اختبار إنجليزي بالدفتر تمرين 6: \"Ahmad ______ (have) a quick breakfast at the moment\". هنا have يعني يأكل فيقبل ing.",
      "arabicExplanation": "الفاعل Ahmad مفرد، والعبارة at the moment تدل على اللحظة الحالية، والفعل have هنا يعني يتناول وجبة وهو نشاط حركي يقبل ing: is having.",
      "englishGrammarRule": "\"Have\" expressing consumption is a dynamic event and takes present continuous when occurring at the moment of speech."
    }
  },
  {
    "id": "nb_photo5_q7_everyone_ready",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (اختبار ص5): الجميع في الصف مستعدون للاختبار",
    "sentenceEn": "Everyone in the class ______ (be) ready for the exam.",
    "bracketVerb": "be",
    "options": [
      "is",
      "are",
      "am",
      "be"
    ],
    "correctAnswer": "is",
    "ruleBadge": "فاعل مفرد - Everyone is",
    "fromNotebook": true,
    "notebookPage": 5,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: يعتقد الطلاب أن Everyone in the class جمع بسبب معنى الصف والجميع! لكن Everyone تفرض الإفراد نحوياً وتأخذ is.",
    "ruleDetail": {
      "ruleTitle": "الفاعل Everyone يأخذ الفعل المفرد is دائماً",
      "ruleFormula": "Everyone + is ready",
      "keywordOrTrigger": "Everyone (ضمير نكرة مفرد نحوياً)",
      "teacherNote": "⭐ اختبار إنجليزي بالدفتر تمرين 7: \"Everyone in the class ______ (be) ready for the exam\". قاعدة الدفتر: Everyone مفرد ويأخذ is.",
      "arabicExplanation": "كلمة Everyone مفردة نحوياً بصرف النظر عن عبارة in the class، وصيغة فعل be مع المفرد هي is.",
      "englishGrammarRule": "The indefinite pronoun \"everyone\" is strictly singular and selects the third-person singular copula \"is\"."
    }
  },
  {
    "id": "nb_photo5_q8_water_boils_100",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "دفتر المعلمة (اختبار ص5): حقيقة غليان الماء عند 100 درجة مئوية",
    "sentenceEn": "Water ______ (boil) at 100 degrees Celsius.",
    "bracketVerb": "boil",
    "options": [
      "boils",
      "is boiling",
      "boil",
      "boiles"
    ],
    "correctAnswer": "boils",
    "ruleBadge": "حقيقة علمية - Water boils",
    "fromNotebook": true,
    "notebookPage": 5,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "المضارع البسيط للتعبير عن الحقائق العلمية الكونية الثابتة",
      "ruleFormula": "Uncountable Subject (Water) + Verb(s)",
      "keywordOrTrigger": "حقيقة علمية ثابتة (غليان الماء عند 100 درجة)",
      "teacherNote": "⭐ اختبار إنجليزي بالدفتر تمرين 8: \"Water ______ (boil) at 100 degrees Celsius\". حقيقة علمية والمياه غير معدودة فتأخذ boils.",
      "arabicExplanation": "الماء اسم غير معدود يعامل كالمفرد، وهذه حقيقة علمية ثابتة تتطلب المضارع البسيط، لذا نضيف s للفعل: boils.",
      "englishGrammarRule": "Universal scientific physical facts must be formulated in simple present tense (\"boils\")."
    }
  },
  {
    "id": "nb_photo5_q9_thinking_about_answer",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "دفتر المعلمة (اختبار ص5): التفكير الإرادي في إجابة السؤال الآن",
    "sentenceEn": "Right now, I ______ (think) about the answer to this question.",
    "bracketVerb": "think",
    "options": [
      "am thinking",
      "think",
      "thinks",
      "thinking"
    ],
    "correctAnswer": "am thinking",
    "ruleBadge": "think الحركي - am thinking about",
    "fromNotebook": true,
    "notebookPage": 5,
    "difficulty": "tricky",
    "trapExplanation": "الفعل think هنا متبوع بـ about ويعني \"أشغل عقلي بالبحث والتفكير في الحل الآن\"، وهو نشاط ذهني حركي يقبل ing مع Right now: am thinking.",
    "ruleDetail": {
      "ruleTitle": "استخدام think مع about للدلالة على التفكير النشط في المضارع المستمر",
      "ruleFormula": "I + am + thinking about",
      "keywordOrTrigger": "Right now (الآن) + think about (يفكر في مسألة بنشاط)",
      "teacherNote": "⭐ اختبار إنجليزي بالدفتر تمرين 9: \"Right now, I ______ (think) about the answer to this question\". هنا نشاط ذهني نشط فيأخذ am thinking.",
      "arabicExplanation": "وجود Right now وعبارة think about يدل على عملية تفكير نشطة جارية في هذه اللحظة، والضمير I يأخذ am thinking.",
      "englishGrammarRule": "When \"think\" denotes the active, deliberate cognitive process of considering something (\"thinking about\"), it is dynamic."
    }
  },
  {
    "id": "nb_photo5_q10_think_smart_boy",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "دفتر المعلمة (اختبار ص5): الرأي والاعتقاد (think = believe)",
    "sentenceEn": "I ______ (think) he is a very smart boy.",
    "bracketVerb": "think",
    "options": [
      "think",
      "am thinking",
      "thinks",
      "thought"
    ],
    "correctAnswer": "think",
    "ruleBadge": "فعل تقريري - think بمعنى أعتقد/رأي",
    "fromNotebook": true,
    "notebookPage": 5,
    "difficulty": "tricky",
    "trapExplanation": "الفعل think هنا يعني \"في رأيي أو أعتقد\" (have an opinion / believe)، وهو فعل تقريري بحت ممنوع من أخذ ing إطلاقاً، فيبقى think.",
    "ruleDetail": {
      "ruleTitle": "الفعل think بمعنى الرأي والاعتقاد فعل تقريري لا يقبل الاستمرار",
      "ruleFormula": "I + think (رأي)",
      "keywordOrTrigger": "think بمعنى believe / in my opinion",
      "teacherNote": "⭐ اختبار إنجليزي بالدفتر تمرين 10: \"I ______ (think) he is a very smart boy\". قارنها مع رقم 9: هنا تعني في رأيي فلا تأخذ ing أبداً!",
      "arabicExplanation": "الفعل think هنا يعبر عن رأي شخصي ثابت (أعتقد أنه ذكي)، ولذلك فهو فعل تقريري ممنوع من أخذ ing، والضمير I يأخذ think.",
      "englishGrammarRule": "\"Think\" expressing an opinion or belief is purely stative and cannot be conjugated in the progressive aspect."
    }
  },
  {
    "id": "nb_photo5_q11_look_like_mother",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "دفتر المعلمة (اختبار ص5): الشبه والملامح (look like = تشبه)",
    "sentenceEn": "The little girl ______ (look) like her mother.",
    "bracketVerb": "look",
    "options": [
      "looks",
      "is looking",
      "look",
      "lookes"
    ],
    "correctAnswer": "looks",
    "ruleBadge": "فعل تقريري - look like تشبه",
    "fromNotebook": true,
    "notebookPage": 5,
    "difficulty": "tricky",
    "trapExplanation": "العبارة look like تعني \"تشبه ملامحها\" (resemble) وهي صفة شكلية تقريرية ثابتة لا تقبل ing إطلاقاً، والطفلة مفردة فتأخذ s: looks.",
    "ruleDetail": {
      "ruleTitle": "الفعل look like بمعنى الشبه الخارجي فعل حالة تقريري",
      "ruleFormula": "Singular Subject (The little girl) + looks like",
      "keywordOrTrigger": "look like (تشبه في الملامح)",
      "teacherNote": "⭐ اختبار إنجليزي بالدفتر تمرين 11: \"The little girl ______ (look) like her mother\". الشبه حالة ثابتة فلا تأخذ ing، والطفلة مفردة فتأخذ looks.",
      "arabicExplanation": "الفعل look like يعني تشبه في المظهر، وهي حالة تقريرية دائمة، والفاعل The little girl مفرد فيأخذ الفعل s: looks.",
      "englishGrammarRule": "\"Look like\" functioning as resemblance is stative; third-person singular subject takes \"-s\" (\"looks like\")."
    }
  },
  {
    "id": "ext_taste_stative",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: الفعل taste كوصف للمذاق",
    "sentenceEn": "This homemade apple pie ______ (taste) absolutely delicious.",
    "bracketVerb": "taste",
    "options": [
      "tastes",
      "is tasting",
      "taste",
      "are tasting"
    ],
    "correctAnswer": "tastes",
    "ruleBadge": "سؤال خارجي تريكي: taste حالة",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: يكتب الطلاب is tasting! لكن الفطيرة لا تتذوق بنفسها بل هذا هو طعمها ومذاقها كصفة تقريرية (Stative)، فتأخذ المضارع البسيط المفرد: tastes.",
    "ruleDetail": {
      "ruleTitle": "الفعل taste كفعل حواس تقريري يصف الطعم",
      "ruleFormula": "Singular Subject (apple pie) + tastes",
      "keywordOrTrigger": "taste متبوعاً بصفة (delicious)",
      "teacherNote": "مدرج بالدفتر تحت تصنيف (الحواس): taste و smell و see و hear. عندما تصف طعم الشيء فهو بسيط فقط!",
      "arabicExplanation": "الفطيرة مفردة، واستخدام taste هنا لوصف مذاقها كحالة حسية ثابتة، لذا فهو فعل تقريري لا يقبل الاستمرار ويأخذ s: tastes.",
      "englishGrammarRule": "\"Taste\" linked with a predicative adjective describes sensory quality and is strictly stative (\"tastes\")."
    }
  },
  {
    "id": "ext_taste_dynamic",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: الفعل taste كعملية تذوق إرادية",
    "sentenceEn": "Shh! The master chef ______ (taste) the soup right now to see if it needs salt.",
    "bracketVerb": "taste",
    "options": [
      "is tasting",
      "tastes",
      "taste",
      "are tasting"
    ],
    "correctAnswer": "is tasting",
    "ruleBadge": "سؤال خارجي تريكي: taste تذوق بالملعقة",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "هنا الشيف يقوم بعمل حركي إرادي (التذوق بالملعقة في فمه الآن)، وهذا فعل ديناميكي يقبل المضارع المستمر مع right now: is tasting.",
    "ruleDetail": {
      "ruleTitle": "الفعل taste كنشاط حركي إرادي في المضارع المستمر",
      "ruleFormula": "The chef + is + tasting",
      "keywordOrTrigger": "right now + الشيف يقوم بعملية التذوق بنفسه بالملعقة",
      "teacherNote": "لاحظ الفرق الجوهري: إذا كان الفاعل شخصاً يتذوق شيئاً بالملعقة فهو مستمر (is tasting). أما إذا كان الفاعل هو الطعام نفسه فوصفه بسيط (tastes)!",
      "arabicExplanation": "الشيف شخص عاقل يقوم بفعل التذوق الإرادي في هذه اللحظة (right now)، ولذلك يقبل الفعل الاستمرار: is tasting.",
      "englishGrammarRule": "Deliberate physical tasting by an agent is dynamic and licenses the progressive aspect."
    }
  },
  {
    "id": "ext_smell_stative_dynamic",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: فخ الفعل smell في جملة واحدة",
    "sentenceEn": "Why ______ that carton of milk? Because it ______ sour!",
    "bracketVerb": "smell",
    "options": [
      "are you smelling / smells",
      "do you smell / is smelling",
      "are you smelling / is smelling",
      "do you smell / smells"
    ],
    "correctAnswer": "are you smelling / smells",
    "ruleBadge": "سؤال خارجي تريكي: smell حركي وحالة",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الشق الأول حركة شَم إرادية بالأنف (are you smelling)، والشق الثاني وصف لرائحة الحليب كصفة تقريرية ثابتة لا تقبل ing أبداً (smells sour)!",
    "ruleDetail": {
      "ruleTitle": "الفرق بين الشم الإرادي ووصف الرائحة للفعل smell",
      "ruleFormula": "are you smelling (حركي) / it smells (حالة)",
      "keywordOrTrigger": "Why are you... (عمل الآن) + sour (صفة تقريرية)",
      "teacherNote": "هذا من أشهر أسئلة الامتحانات الوزارية للتمييز بين الفعل الحركي و Stative Verb في جملة واحدة.",
      "arabicExplanation": "أنت تشم الحليب بأنفك الآن = حركي (are you smelling). ورائحة الحليب حامضة = وصف تقريري يمنع ing (smells).",
      "englishGrammarRule": "Active sniffing is dynamic (\"are you smelling\"); emitting an odor is stative (\"smells\")."
    }
  },
  {
    "id": "ext_see_appointment",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: الفعل see بمعنى المقابلة بموعد مسبق",
    "sentenceEn": "I ______ (see) my specialist doctor tomorrow morning at 10:00 AM.",
    "bracketVerb": "see",
    "options": [
      "am seeing",
      "see",
      "sees",
      "am seen"
    ],
    "correctAnswer": "am seeing",
    "ruleBadge": "سؤال خارجي تريكي: see مقابلة رسمية",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: يرى الطالب الفعل see فيظنه الرؤية بالعين فيختار see! لكن see هنا تعني \"مقابلة أو موعد مسبق\" (Meeting / Consultation) وهو استخدام يقبل ing حتماً: am seeing.",
    "ruleDetail": {
      "ruleTitle": "الفعل see بمعنى المقابلة بموعد محدد يقبل المضارع المستمر",
      "ruleFormula": "I + am + seeing (meeting)",
      "keywordOrTrigger": "doctor tomorrow morning (موعد رسمي مسبق)",
      "teacherNote": "إذا كان see يعني \"يرى بالعين أو يفهم\" فهو تقريري بسيط (I see). أما إذا كان يعني \"يقابل بموعد\" فهو مستمر (I am seeing my doctor)!",
      "arabicExplanation": "الفعل see هنا جاء بمعنى موعد مقابلة الطبيب، والترتيبات المستقبلية المؤكدة تصاغ بالمضارع المستمر: am seeing.",
      "englishGrammarRule": "\"See\" meaning \"to meet or consult by appointment\" is dynamic and commonly takes present continuous."
    }
  },
  {
    "id": "ext_weigh_stative",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: وزن الحقيبة (weigh كخاصية قياس ثابتة)",
    "sentenceEn": "The passenger's heavy suitcase ______ (weigh) exactly 23 kilograms.",
    "bracketVerb": "weigh",
    "options": [
      "weighs",
      "is weighing",
      "weigh",
      "are weighing"
    ],
    "correctAnswer": "weighs",
    "ruleBadge": "سؤال خارجي تريكي: weigh مقياس ثابت",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الحقيبة لا تقوم بوزن نفسها على الميزان، بل وزنها الثابت هو 23 كغ، وخاصية القياس حالة تقريرية لا تقبل ing: weighs.",
    "ruleDetail": {
      "ruleTitle": "الفعل weigh للتعبير عن مقدار الوزن الثابت",
      "ruleFormula": "Singular Subject (suitcase) + weighs",
      "keywordOrTrigger": "مقدار وزن محدد (23 kilograms)",
      "teacherNote": "إذا كان الفاعل هو الشيء ومقداره فهو بسيط (weighs). أما إذا كان الموظف يضعه على الميزان الآن فهو مستمر (The officer is weighing it).",
      "arabicExplanation": "الحقيبة مفرد، ووزنها مقياس ثابت وليس حركة، لذا يعامل كفعل تقريري ويأخذ s: weighs.",
      "englishGrammarRule": "Indicating an intrinsic measure of weight is stative (\"weighs\")."
    }
  },
  {
    "id": "ext_weigh_dynamic",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: موظف المطار يزن الحقيبة على الميزان الآن",
    "sentenceEn": "Look! The airport officer ______ (weigh) our luggage right now.",
    "bracketVerb": "weigh",
    "options": [
      "is weighing",
      "weighs",
      "weigh",
      "are weighing"
    ],
    "correctAnswer": "is weighing",
    "ruleBadge": "سؤال خارجي تريكي: weigh عملية قياس نشطة",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "هنا الموظف يقوم بعملية الوزن الحركية على الميزان في هذه اللحظة، وهذا عمل نشط يقبل ing مع right now: is weighing.",
    "ruleDetail": {
      "ruleTitle": "الفعل weigh كفعل حركة نشط (وضع الشيء على الميزان)",
      "ruleFormula": "The officer + is + weighing",
      "keywordOrTrigger": "Look! + right now + الفاعل شخص يزن",
      "teacherNote": "هذا النمط يقيس قدرتك على التمييز الدقيق بين المقياس والعملية الحركية.",
      "arabicExplanation": "الموظف شخص يقوم بوضع الحقائب على الميزان الآن، ووجود Look! و right now يوجب المضارع المستمر: is weighing.",
      "englishGrammarRule": "The active physical operation of measuring weight is dynamic (\"is weighing\")."
    }
  },
  {
    "id": "ext_be_stubborn_behavior",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: استثناء الفعل be مع ing (السلوك المؤقت)",
    "sentenceEn": "Why ______ so stubborn today? You are usually very cooperative!",
    "bracketVerb": "be",
    "options": [
      "are you being",
      "are you",
      "do you be",
      "is you being"
    ],
    "correctAnswer": "are you being",
    "ruleBadge": "سؤال خارجي تريكي: استثناء be النادر",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "أندر وأصعب استثناء! فعل be يقبل -ing (is/are being) فقط عند الحديث عن تصرف وسلوك مؤقت مفتعل اليوم يختلف عن طبيعة الشخص المعتادة!",
    "ruleDetail": {
      "ruleTitle": "استثناء: فعل be في المضارع المستمر لوصف سلوك مؤقت",
      "ruleFormula": "Subject + is/are being + Adjective (stubborn, silly, rude)",
      "keywordOrTrigger": "today (مؤقت اليوم) + المقارنة مع الطبيعة المعتادة (usually)",
      "teacherNote": "عندما يتصرف الشخص بغباء أو عناد مؤقت اليوم خلافاً لعادته، نستخدم are being / is being بمعنى (acting / behaving).",
      "arabicExplanation": "أنت لست عنيداً في طبيعتك، لكنك تتصرف بعناد اليوم فقط، وهذا السلوك المؤقت المفتعل يجيز استخدام are being.",
      "englishGrammarRule": "The copula \"be\" enters the progressive (\"is/are being\") exclusively to describe temporary voluntary conduct or behavior."
    }
  },
  {
    "id": "ext_one_of_the_students",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: فخ One of the smartest students...",
    "sentenceEn": "One of the smartest students in our class ______ (speak) four languages fluently.",
    "bracketVerb": "speak",
    "options": [
      "speaks",
      "speak",
      "is speaking",
      "speaking"
    ],
    "correctAnswer": "speaks",
    "ruleBadge": "سؤال خارجي تريكي: فاعل One of",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: يرى الطالب كلمة students (جمع) فيختار speak! لكن الفاعل الحقيقي للجملة هو كلمة One (واحد فقط وهو مفرد)، ولذا يجب وضع speaks!",
    "ruleDetail": {
      "ruleTitle": "الفاعل في عبارة One of the... هو One (مفرد دائماً)",
      "ruleFormula": "One of the [plural nouns] + Verb(s)",
      "keywordOrTrigger": "One (الفاعل الحقيقي هو واحد من الطلاب)",
      "teacherNote": "احذر هذا الفخ الشائع جداً في التوجيهي والامتحانات الدولية: الكلمة الملاصقة للفراغ جمع، لكن الفاعل في بداية الجملة مفرد!",
      "arabicExplanation": "الفاعل الحقيقي للجملة هو كلمة One (واحد من الطلاب) وهو اسم مفرد، ولذلك يأخذ الفعل s في المضارع البسيط: speaks.",
      "englishGrammarRule": "Subject-verb agreement: the head of the noun phrase \"One of the students\" is the singular pronoun \"One\" (\"speaks\")."
    }
  },
  {
    "id": "ext_the_number_of_cars",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: The number of مقابل A number of",
    "sentenceEn": "The number of registered electric cars ______ (increase) every year.",
    "bracketVerb": "increase",
    "options": [
      "increases",
      "increase",
      "are increasing",
      "is increase"
    ],
    "correctAnswer": "increases",
    "ruleBadge": "سؤال خارجي تريكي: The number of",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: كلمة \"The number of\" مفردة حتماً وتأخذ فعل مفرد (increases)، بينما \"A number of\" جمع وتأخذ فعل جمع.",
    "ruleDetail": {
      "ruleTitle": "عبارة The number of مفردة دائماً",
      "ruleFormula": "The number of + plural noun + Verb(s)",
      "keywordOrTrigger": "The number of (العدد الإجمالي - اسم مفرد)",
      "teacherNote": "The number of ➔ تأخذ s (مفرد). أما A number of ➔ لا تأخذ s (جمع). احفظ هذا الفارق جيداً!",
      "arabicExplanation": "الفاعل هو The number (العدد) وهو مفرد، والكلمة every year تدل على المضارع البسيط، لذا نضع increases.",
      "englishGrammarRule": "\"The number of...\" takes a singular verb, whereas \"A number of...\" takes a plural verb."
    }
  },
  {
    "id": "ext_neither_manager_employees",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: قاعدة القرب مع Neither... nor",
    "sentenceEn": "Neither the manager nor the employees ______ (know) how to operate the new system.",
    "bracketVerb": "know",
    "options": [
      "know",
      "knows",
      "are knowing",
      "is knowing"
    ],
    "correctAnswer": "know",
    "ruleBadge": "سؤال خارجي تريكي: Neither... nor",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "في قاعدة Neither... nor يطابق الفعل الفاعل الأقرب له مباشرة! الأقرب للفراغ هنا هو employees (جمع)، ولذلك نأخذ الفعل المجرد know بدون s.",
    "ruleDetail": {
      "ruleTitle": "قاعدة القرب (Proximity Rule) مع Neither... nor",
      "ruleFormula": "Neither [Singular] nor [Plural] + Verb(مجرد للجمع)",
      "keywordOrTrigger": "the employees (الفاعل الأقرب للفراغ جمع)",
      "teacherNote": "الفعل يتبع الاسم الذي قبله مباشرة: إذا كان ما قبل الفراغ جمعاً نضع know، وإذا كان مفرداً نضع knows.",
      "arabicExplanation": "الفاعل الأقرب للفعل هو the employees وهو جمع، وقاعدة Neither... nor تنص على مطابقة الفاعل الأقرب، وفعل know تقريري فيكون know.",
      "englishGrammarRule": "With correlative conjunctions (\"neither... nor\"), the verb agrees in number with the closer subject noun phrase."
    }
  },
  {
    "id": "ext_along_with_parenthetical",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: الفاعل المفرد مع along with / as well as",
    "sentenceEn": "The head teacher, along with twenty students, ______ (visit) the science museum annually.",
    "bracketVerb": "visit",
    "options": [
      "visits",
      "visit",
      "are visiting",
      "visiting"
    ],
    "correctAnswer": "visits",
    "ruleBadge": "سؤال خارجي تريكي: along with",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: عبارة \"along with twenty students\" جمع، لكنها ليست جزءاً من الفاعل النحوي! الفاعل هو The head teacher (مفرد) ولذا نختار visits!",
    "ruleDetail": {
      "ruleTitle": "العبارات الاعتراضية (along with / as well as) لا تجمع الفاعل",
      "ruleFormula": "Singular Subject + , along with ... , + Verb(s)",
      "keywordOrTrigger": "annually (سنوياً) + الفاعل الحقيقي The head teacher",
      "teacherNote": "حرف العطف الوحيد الذي يجمع المفرد هو and. أما along with و as well as فلا تجمع، ويبقى الفاعل مفرداً.",
      "arabicExplanation": "الفاعل الحقيقي للجملة هو The head teacher فقط، والعبارة بين فاصلتين لا تؤثر على إفراد الفاعل، ووجود annually يدل على البسيط: visits.",
      "englishGrammarRule": "Parenthetical phrases like \"along with\" do not create compound subjects; agreement remains with the primary singular subject."
    }
  },
  {
    "id": "ext_physics_singular",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: أسماء المواد المنتهية بـ s (Physics, Maths)",
    "sentenceEn": "Physics ______ (be) considered by many students to be a challenging subject.",
    "bracketVerb": "be",
    "options": [
      "is",
      "are",
      "were",
      "am"
    ],
    "correctAnswer": "is",
    "ruleBadge": "سؤال خارجي تريكي: أسماء مفردة منتهية بـ s",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: كلمة Physics تنتهي بـ s فيعتقد الطلاب أنها جمع وتأخذ are! لكن أسماء المواد والعلوم (Physics, Mathematics, News) أسماء مفردة وتأخذ is.",
    "ruleDetail": {
      "ruleTitle": "الأسماء التي تنتهي بـ s كجزء من بنية الكلمة تعامل كمفرد",
      "ruleFormula": "Physics / News / Mathematics + is",
      "keywordOrTrigger": "Physics (اسم علم مفرد ينتهي بـ s)",
      "teacherNote": "كلمات مثل Physics, Maths, Politics, The news تنتهي بحرف s ولكنها مفردة 100% وتأخذ is دائماً.",
      "arabicExplanation": "كلمة Physics تعني مادة الفيزياء، وهي اسم مفرد يعامل معاملة المفرد الغائب، وصيغة فعل be معها هي is.",
      "englishGrammarRule": "Nouns ending in \"-s\" representing fields of study or singular entities (physics, economics, news) take singular verbs."
    }
  },
  {
    "id": "ext_always_annoyance",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: استخدام always مع المضارع المستمر للتذمر",
    "sentenceEn": "He is so untidy! He ______ (always / leave) his dirty clothes on the bedroom floor.",
    "bracketVerb": "always leave",
    "options": [
      "is always leaving",
      "always leaves",
      "always leave",
      "are always leaving"
    ],
    "correctAnswer": "is always leaving",
    "ruleBadge": "سؤال خارجي تريكي: always للتذمر والشكوى",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفخ الأكبر! عند استخدام always للتعبير عن التذمر والانزعاج والغضب من عادة متكررة مزعجة، تأتي الجملة في المضارع المستمر: is always leaving!",
    "ruleDetail": {
      "ruleTitle": "استخدام always مع المضارع المستمر للتعبير عن الانزعاج والشكوى",
      "ruleFormula": "Subject + is/are + always + Verb(ing)",
      "keywordOrTrigger": "سياق الانزعاج والشكوى (He is so untidy!)",
      "teacherNote": "انتبه: always تدل على المضارع البسيط في العادة العادية. لكن إذا كان السياق فيه تذمر وانتقاد تصبح مضارعاً مستمراً!",
      "arabicExplanation": "المتحدث يتذمر وينتقد تصرفاً مزعجاً متكرراً، وقاعدة اللغة الإنجليزية تقتضي استخدام المضارع المستمر مع always في سياق الشكوى: is always leaving.",
      "englishGrammarRule": "Present continuous with \"always\" or \"constantly\" expresses speaker irritation or criticism regarding repeated behavior."
    }
  },
  {
    "id": "ext_belong_possession",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: فعل الملكية والانتماء belong",
    "sentenceEn": "This rare antique pocket watch ______ (belong) to my great-grandfather.",
    "bracketVerb": "belong",
    "options": [
      "belongs",
      "is belonging",
      "belong",
      "are belonging"
    ],
    "correctAnswer": "belongs",
    "ruleBadge": "سؤال خارجي تريكي: belong ملكية",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "فعل belong يعني \"يخص أو ينتمي إلى\" وهو فعل ملكية تقريري لا يقبل ing نهائياً، والساعة مفردة فتأخذ s: belongs.",
    "ruleDetail": {
      "ruleTitle": "الفعل belong كفعل ملكية تقريري",
      "ruleFormula": "Singular Subject (watch) + belongs to",
      "keywordOrTrigger": "belong (فعل ملكية تقريري)",
      "teacherNote": "مدرج بالدفتر تحت تصنيف أفعال الملكية (have, own, belong). ممنوع وضع ing.",
      "arabicExplanation": "الساعة اسم مفرد، وفعل belong يدل على الملكية والانتماء وهو فعل حالة لا يقبل المضارع المستمر، فيأخذ s: belongs.",
      "englishGrammarRule": "\"Belong to\" is an absolute stative verb denoting possession and cannot take continuous aspect."
    }
  },
  {
    "id": "ext_who_subject_question",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: سؤال الفاعل بـ Who بدون Do/Does",
    "sentenceEn": "Choose the correct question to ask about the teacher: ______ you English this semester?",
    "bracketVerb": "teach",
    "options": [
      "Who teaches",
      "Who does teach",
      "Who do teach",
      "Who is teaching"
    ],
    "correctAnswer": "Who teaches",
    "ruleBadge": "سؤال خارجي تريكي: سؤال الفاعل Who",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "فخ شهير! عند السؤال عن الفاعل بأداة Who لا نستخدم do أو does على الإطلاق، بل نضع الفعل مضافاً له es مباشرة: Who teaches you?!",
    "ruleDetail": {
      "ruleTitle": "سؤال الفاعل (Subject Question) بدون فعل مساعد do/does",
      "ruleFormula": "Who + Verb(s/es) + Object?",
      "keywordOrTrigger": "السؤال عن الفاعل العاقل (من يعلمكم؟)",
      "teacherNote": "إذا كانت أداة السؤال تسأل عن الفاعل، لا نضع does بل يصرف الفعل مباشرة كالمفرد: Who teaches you English?.",
      "arabicExplanation": "عندما تسأل Who عن فاعل الجملة، لا نستخدم does كفعل مساعد، بل نصرف الفعل مباشرة مع المفرد بإضافة es: Who teaches you.",
      "englishGrammarRule": "Subject questions with \"Who\" or \"What\" retain affirmative word order without auxiliary \"do/does\"."
    }
  },
  {
    "id": "ext_feel_texture",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: ملمس الحرير الناعم (feel كصفة حسية)",
    "sentenceEn": "This pure silk scarf ______ (feel) amazingly soft against the skin.",
    "bracketVerb": "feel",
    "options": [
      "feels",
      "is feeling",
      "feel",
      "are feeling"
    ],
    "correctAnswer": "feels",
    "ruleBadge": "سؤال خارجي تريكي: feel للملمس",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الوشاح الحريري له ملمس ناعم كصفة حسية تقريرية ثابتة، ولا يقوم باللمس بنفسه، لذا فهو فعل تقريري يأخذ s: feels.",
    "ruleDetail": {
      "ruleTitle": "الفعل feel كفعل حواس تقريري لوصف الملمس",
      "ruleFormula": "Singular Subject (scarf) + feels + adjective (soft)",
      "keywordOrTrigger": "feel متبوعاً بصفة ملمس (soft)",
      "teacherNote": "أفعال الحواس الخمسة تصف خصائص الأشياء في المضارع البسيط فقط.",
      "arabicExplanation": "الوشاح مفرد، واستخدام feel لوصف الملمس يعامل كفعل حالة تقريري لا يقبل ing، فيأخذ s: feels.",
      "englishGrammarRule": "\"Feel\" used copularly with a sensory predicate adjective is stative (\"feels soft\")."
    }
  },
  {
    "id": "ext_realize_right_now",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: الفعل realize مع right now",
    "sentenceEn": "Do you ______ (realize) the significance of this discovery right now?",
    "bracketVerb": "realize",
    "options": [
      "realize",
      "realizing",
      "are realizing",
      "realizes"
    ],
    "correctAnswer": "realize",
    "ruleBadge": "سؤال خارجي تريكي: realize إدراك عقلي",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "وجود right now فخ منصوب! الفعل realize من أفعال الإدراك العقلي والذهني التقريرية الممنوعة من -ing، ويأتي بعد Do بالمصدر المجرد: realize.",
    "ruleDetail": {
      "ruleTitle": "أفعال الإدراك الذهني (realize, understand, know) لا تقبل ing",
      "ruleFormula": "Do you + realize(inf) + right now?",
      "keywordOrTrigger": "realize (فعل إدراك عقلي تقريري)",
      "teacherNote": "لا تنخدع بوجود right now! إذا كان الفعل ذهنياً تقريرياً مثل realize يبقى في صيغة المصدر بعد Do.",
      "arabicExplanation": "الفعل realize فعل حالة وإدراك ذهني لا يقبل الاستمرار، وبما أن الجملة سؤال يبدأ بـ Do، يوضع الفعل بالمصدر المجرد realize.",
      "englishGrammarRule": "\"Realize\" expresses instantaneous cognitive state; stative verbs retain base forms after auxiliary \"do\"."
    }
  }
,

  {
    "id": "ext_own_restaurants",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: الفعل own (امتلاك مطاعم)",
    "sentenceEn": "My uncle ______ (own) three profitable Italian restaurants in the city.",
    "bracketVerb": "own",
    "options": [
      "owns",
      "is owning",
      "own",
      "are owning"
    ],
    "correctAnswer": "owns",
    "ruleBadge": "سؤال خارجي: own ملكية",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "فعل own يعني يمتلك وهو من أفعال الملكية التقريرية (Stative) الممنوعة من ing، وعمي مفرد فيأخذ s: owns.",
    "ruleDetail": {
      "ruleTitle": "الفعل own فعل ملكية تقريري لا يقبل الاستمرار",
      "ruleFormula": "Singular Subject (My uncle) + owns",
      "keywordOrTrigger": "own (فعل ملكية تقريري بحت)",
      "teacherNote": "أفعال الملكية (own, have, belong, possess) تأتي في المضارع البسيط فقط.",
      "arabicExplanation": "الفاعل My uncle مفرد، وفعل own يدل على الامتلاك ولا يقبل صيغة الاستمرار، فيضاف له s: owns.",
      "englishGrammarRule": "\"Own\" is an inherently stative verb of ownership and resists progressive aspect."
    }
  },
  {
    "id": "ext_consist_of",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: الفعل consist of (يتكون من)",
    "sentenceEn": "The international committee ______ (consist) of ten senior educational experts.",
    "bracketVerb": "consist",
    "options": [
      "consists",
      "is consisting",
      "consist",
      "are consisting"
    ],
    "correctAnswer": "consists",
    "ruleBadge": "سؤال خارجي: consist of تكوين",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفعل consist of يعني يتألف أو يتكون من، وهو فعل حالة وبنية تقريرية لا يقبل ing نهائياً: consists.",
    "ruleDetail": {
      "ruleTitle": "الفعل consist of فعل حالة تركيبي تقريري",
      "ruleFormula": "Singular Collective Subject (The committee) + consists of",
      "keywordOrTrigger": "consist of (يتألف من - علاقة تكوين ثابتة)",
      "teacherNote": "أفعال التكوين والاحتواء (consist of, contain, include) تقريرية دائماً.",
      "arabicExplanation": "اللجنة اسم مفرد، وفعل consist of يعبر عن التكوين وهو فعل حالة لا يقبل ing، فيأخذ s: consists.",
      "englishGrammarRule": "\"Consist of\" denotes constituent composition and is categorically stative."
    }
  },
  {
    "id": "ext_gather_clouds",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: Look at the sky! الغيوم تتجمع الآن",
    "sentenceEn": "Look at the sky! Dark storm clouds ______ (gather) right above our heads.",
    "bracketVerb": "gather",
    "options": [
      "are gathering",
      "gather",
      "is gathering",
      "gathers"
    ],
    "correctAnswer": "are gathering",
    "ruleBadge": "سؤال خارجي: Look at...! + جمع",
    "fromNotebook": false,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "المضارع المستمر مع التنبيه البصري Look at...! والفاعل الجمع",
      "ruleFormula": "Plural Subject (Dark storm clouds) + are + gathering",
      "keywordOrTrigger": "Look at the sky! (انظر إلى السماء الآن!)",
      "teacherNote": "عبارات التنبيه (Look!, Look at...!) تدل على حدث تشاهده يتطور الآن، والغيوم جمع فتأخذ are gathering.",
      "arabicExplanation": "جملة التنبيه Look at the sky تدل على حدث يقع أمام الأعين الآن، والغيوم clouds فاعل جمع فيأخذ are gathering.",
      "englishGrammarRule": "Exclamatory visual directives mandate present continuous for actively unfolding natural phenomena."
    }
  },
  {
    "id": "ext_depend_on",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: الفعل depend on (يعتمد على)",
    "sentenceEn": "Our final exam score ______ (depend) on our hard work and practice.",
    "bracketVerb": "depend",
    "options": [
      "depends",
      "is depending",
      "depend",
      "are depending"
    ],
    "correctAnswer": "depends",
    "ruleBadge": "سؤال خارجي: depend on علاقة",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "فعل depend on يعني يعتمد ويتوقف على، وهو فعل علاقة منطقية تقريرية لا يقبل ing، والدرجة مفردة فتأخذ s: depends.",
    "ruleDetail": {
      "ruleTitle": "الفعل depend on فعل علاقة وارتباط تقريري",
      "ruleFormula": "Singular Subject (score) + depends on",
      "keywordOrTrigger": "depend on (يعتمد على - علاقة سببية تقريرية)",
      "teacherNote": "أفعال العلاقات والارتباط (depend on, relate to, concern) تقريرية دائماً.",
      "arabicExplanation": "الفاعل score مفرد، وفعل depend on يعبر عن علاقة ارتباط منطقية تقريرية لا تقبل المضارع المستمر: depends.",
      "englishGrammarRule": "\"Depend on\" expresses conditional or causal relationship and is stative."
    }
  },
  {
    "id": "ext_what_does_mean",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: السؤال عن معنى الكلمة (mean تقريري)",
    "sentenceEn": "What ______ this complicated scientific word ______ (mean)?",
    "bracketVerb": "mean",
    "options": [
      "does / mean",
      "is / meaning",
      "do / mean",
      "is / meant"
    ],
    "correctAnswer": "does / mean",
    "ruleBadge": "سؤال خارجي: mean معنى تقريري",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "فعل mean يعني يقصد أو يعني معنى، وهو فعل دلالة تقريري ممنوع من ing (لا تقل is meaning)، والكلمة مفردة فيكون السؤال: What does this word mean?!",
    "ruleDetail": {
      "ruleTitle": "سؤال المضارع البسيط مع فعل الدلالة التقريري mean",
      "ruleFormula": "What + does + singular noun + mean(inf)?",
      "keywordOrTrigger": "mean (فعل دلالة ومعنى تقريري)",
      "teacherNote": "السؤال عن معنى الكلمات دائماً يصاغ في المضارع البسيط: What does ... mean?.",
      "arabicExplanation": "الفعل mean فعل حالة ودلالة تقريري لا يقبل الاستمرار، والفاعل word مفرد، فيصاغ السؤال بـ does متبوعة بالمصدر mean.",
      "englishGrammarRule": "\"Mean\" signifying semantic definition is stative, requiring simple present auxiliary \"does\"."
    }
  },
  {
    "id": "ext_neither_nor_cousins",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: Neither Ali nor his cousins...",
    "sentenceEn": "Neither Ali nor his older cousins ______ (enjoy) horror movies.",
    "bracketVerb": "enjoy",
    "options": [
      "enjoy",
      "enjoys",
      "are enjoying",
      "is enjoying"
    ],
    "correctAnswer": "enjoy",
    "ruleBadge": "سؤال خارجي: Neither... nor مع جمع",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "في قاعدة Neither... nor يتبع الفعل الفاعل الأقرب له مباشرة! الفاعل الأقرب للفراغ هو cousins (جمع)، فيأخذ الفعل المجرد enjoy بدون s.",
    "ruleDetail": {
      "ruleTitle": "مطابقة الفعل للفاعل الأقرب مع Neither... nor",
      "ruleFormula": "Neither [Singular] nor [Plural cousins] + enjoy(مجرد)",
      "keywordOrTrigger": "cousins (الفاعل الملاصق للفراغ جمع)",
      "teacherNote": "احفظ قاعدة القرب: الفعل يطابق الكلمة التي قبله مباشرة.",
      "arabicExplanation": "الفاعل الأقرب للفعل هو his older cousins وهو جمع، ولذلك نضع الفعل مجرداً بدون s: enjoy.",
      "englishGrammarRule": "Correlative conjunctions adhere to the principle of proximity; plural \"cousins\" requires base verb \"enjoy\"."
    }
  },
  {
    "id": "ext_neither_nor_ali",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: Neither the cousins nor Ali...",
    "sentenceEn": "Neither the older cousins nor Ali ______ (enjoy) horror movies.",
    "bracketVerb": "enjoy",
    "options": [
      "enjoys",
      "enjoy",
      "are enjoying",
      "is enjoying"
    ],
    "correctAnswer": "enjoys",
    "ruleBadge": "سؤال خارجي: Neither... nor مع مفرد",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "هنا عكسنا الترتيب! الفاعل الأقرب للفراغ هو Ali (مفرد)، ولذلك يطابقه الفعل ويأخذ s: enjoys!",
    "ruleDetail": {
      "ruleTitle": "مطابقة الفعل للفاعل المفرد الأقرب مع Neither... nor",
      "ruleFormula": "Neither [Plural] nor [Singular Ali] + enjoys",
      "keywordOrTrigger": "Ali (الفاعل الملاصق للفراغ مفرد)",
      "teacherNote": "قارن هذا السؤال بالسؤال السابق: هنا Ali مفرد وهو الأقرب للفراغ، فيأخذ enjoys.",
      "arabicExplanation": "الفاعل الأقرب للفعل مباشرة هو Ali وهو مفرد، وقاعدة القرب تقتضي مطابقة المفرد بإضافة s: enjoys.",
      "englishGrammarRule": "With \"neither... nor\", when the proximal subject noun phrase is singular (\"Ali\"), the verb takes \"-s\" (\"enjoys\")."
    }
  },
  {
    "id": "ext_maths_singular",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: مادة الرياضيات Mathematics مفردة",
    "sentenceEn": "Mathematics ______ (require) logical reasoning and sustained practice.",
    "bracketVerb": "require",
    "options": [
      "requires",
      "require",
      "is requiring",
      "are requiring"
    ],
    "correctAnswer": "requires",
    "ruleBadge": "سؤال خارجي: أسماء العلوم منتهية بـ s",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "كلمة Mathematics تنتهي بـ s لكنها اسم علم لمادة دراسية واحدة (مفرد غائب It)، وتأخذ فعلاً مفرداً مضافاً له s: requires.",
    "ruleDetail": {
      "ruleTitle": "أسماء المواد والعلوم المنتهية بـ s تعامل دائماً كمفرد",
      "ruleFormula": "Mathematics / Physics + Verb(s)",
      "keywordOrTrigger": "Mathematics (اسم علم لمادة دراسية مفرد)",
      "teacherNote": "الرياضيات مادة واحدة، وتنتهي بـ s أصلي وليست جمعاً، فتأخذ فعل مفرد: requires.",
      "arabicExplanation": "كلمة Mathematics تعني علم الرياضيات، وهي مفردة نحوياً وتعبر عن حقيقة عامة، فتأخذ s: requires.",
      "englishGrammarRule": "Academic disciplines ending in \"-ics\" (mathematics, physics, economics) take singular agreement."
    }
  },
  {
    "id": "ext_news_gives_hope",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: كلمة The news (الأخبار) مفردة دائماً",
    "sentenceEn": "The latest news about the medical breakthrough ______ (give) hope to millions.",
    "bracketVerb": "give",
    "options": [
      "gives",
      "give",
      "are giving",
      "giving"
    ],
    "correctAnswer": "gives",
    "ruleBadge": "سؤال خارجي: news اسم غير معدود مفرد",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "كلمة news تعني أخبار، ولكنها في قواعد الإنجليزية اسم غير معدود مفرد دائماً ولا يمكن جمعها، فتأخذ gives!",
    "ruleDetail": {
      "ruleTitle": "كلمة The news تعامل معاملة المفرد غير المعدود دائماً",
      "ruleFormula": "The news + Verb(s)",
      "keywordOrTrigger": "The news (اسم غير معدود مفرد نحوياً)",
      "teacherNote": "تذكر دائماً: News مفردة وتأخذ gives / is، ولا تأخذ فعل جمع أبداً!",
      "arabicExplanation": "كلمة news اسم غير معدود يعامل معاملة المفرد، ولذلك نضع للفعل حرف s في المضارع البسيط: gives.",
      "englishGrammarRule": "The noun \"news\" is morphologically ending in \"-s\" but syntactically uncountable and singular (\"gives\")."
    }
  },
  {
    "id": "ext_every_boy_and_girl",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: فخ Every boy and girl...",
    "sentenceEn": "Every boy and girl in the competition ______ (deserve) an encouragement medal.",
    "bracketVerb": "deserve",
    "options": [
      "deserves",
      "deserve",
      "are deserving",
      "is deserving"
    ],
    "correctAnswer": "deserves",
    "ruleBadge": "سؤال خارجي: Every المركبة مفردة",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: يرى الطالب boy and girl فيعتقد أنهما اثنان وجمع! لكن كلمة Every إذا سبقت أي اسمين فإن الفاعل يظل مفرداً حتماً: deserves!",
    "ruleDetail": {
      "ruleTitle": "كلمة Every تجعل الفاعل مفرداً حتى مع وجود حرف العطف and",
      "ruleFormula": "Every + noun and noun + Verb(s)",
      "keywordOrTrigger": "Every (تفرض الإفراد النحوي دائماً)",
      "teacherNote": "قاعدة ذهبية: وجود Every في بداية الفاعل يلغي الجمع تماماً، ويبقى الفاعل مفرداً.",
      "arabicExplanation": "كلمة Every تفرض الإفراد النحوي على ما بعدها حتى لو عطفنا اسمين بـ and، ولذلك يأخذ الفعل s: deserves.",
      "englishGrammarRule": "Compound subjects preceded by \"each\" or \"every\" remain grammatically singular (\"deserves\")."
    }
  },
  {
    "id": "ext_ceo_accompanied_by",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: الفاعل المفرد مع accompanied by و right now",
    "sentenceEn": "The CEO, accompanied by his personal bodyguards, ______ (arrive) right now.",
    "bracketVerb": "arrive",
    "options": [
      "is arriving",
      "are arriving",
      "arrives",
      "arrive"
    ],
    "correctAnswer": "is arriving",
    "ruleBadge": "سؤال خارجي: accompanied by + right now",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفخ: عبارة bodyguards جمع، لكنها عبارة إضافية اعتراضية! الفاعل الحقيقي هو The CEO (مفرد)، ومعه right now فيأخذ is arriving.",
    "ruleDetail": {
      "ruleTitle": "العبارات الاعتراضية (accompanied by) لا تغير إفراد الفاعل في المضارع المستمر",
      "ruleFormula": "Singular Subject (The CEO) + is + arriving",
      "keywordOrTrigger": "right now + الفاعل الحقيقي The CEO (مفرد)",
      "teacherNote": "الفاعل الحقيقي هو المدير التنفيذي فقط، وعبارة الحراس بين فاصلتين، وبما أن الحدث الآن نضع is arriving.",
      "arabicExplanation": "الفاعل الحقيقي هو The CEO وهو مفرد، والحدث يقع الآن (right now)، لذا نختار المضارع المستمر المفرد: is arriving.",
      "englishGrammarRule": "Phrases introduced by \"accompanied by\" do not compound the subject; agreement is singular (\"is arriving\")."
    }
  },
  {
    "id": "ext_gloves_keep_warm",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: الفاعل الجمع للأشياء الزوجية (gloves)",
    "sentenceEn": "These thick woollen gloves ______ (keep) my hands wonderfully warm in freezing weather.",
    "bracketVerb": "keep",
    "options": [
      "keep",
      "keeps",
      "are keeping",
      "is keeping"
    ],
    "correctAnswer": "keep",
    "ruleBadge": "سؤال خارجي: فاعل جمع gloves",
    "fromNotebook": false,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "المضارع البسيط مع الفاعل الجمع (القفازات/الأشياء الثنائية)",
      "ruleFormula": "Plural Subject (These gloves) + Verb(مجرد)",
      "keywordOrTrigger": "These gloves (اسم جمع يشير إلى فردتي القفاز)",
      "teacherNote": "الأشياء التي تتكون من جزأين (gloves, shoes, glasses, trousers) تعامل كاسم جمع وتأخذ فعلاً مجرداً بدون s.",
      "arabicExplanation": "كلمة gloves جمع (قفازات)، ومع الفاعل الجمع في المضارع البسيط نضع الفعل مجرداً بدون s: keep.",
      "englishGrammarRule": "Plural dual nouns like \"gloves\" or \"shoes\" take base plural verb agreement (\"keep\")."
    }
  },
  {
    "id": "ext_laptop_costs",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: السعر والقيمة مع الفعل cost",
    "sentenceEn": "That high-performance laptop ______ (cost) more than one thousand dollars.",
    "bracketVerb": "cost",
    "options": [
      "costs",
      "is costing",
      "cost",
      "are costing"
    ],
    "correctAnswer": "costs",
    "ruleBadge": "سؤال خارجي: cost سعر تقريري",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفعل cost يعني يكلف أو ثمنه، وهو فعل قياس مالي تقريري (Stative) لا يقبل ing إطلاقاً، واللابتوب مفرد فيأخذ s: costs.",
    "ruleDetail": {
      "ruleTitle": "الفعل cost كفعل مقياس وقيمة مالية تقريري",
      "ruleFormula": "Singular Subject (laptop) + costs",
      "keywordOrTrigger": "cost (فعل سعر وقيمة مالية تقريري)",
      "teacherNote": "أفعال القياس والمال (cost, weigh, measure) أفعال تقريرية بسيطة ولا تأخذ ing.",
      "arabicExplanation": "اللابتوب مفرد، وتكلفته خاصية مالية ثابتة تقريرية لا تقبل الاستمرار، ولذلك يأخذ الفعل حرف s: costs.",
      "englishGrammarRule": "\"Cost\" specifying monetary price is stative and resists progressive aspect (\"costs\")."
    }
  },
  {
    "id": "ext_who_knows_puzzle",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: سؤال الفاعل بـ Who مع الفعل know",
    "sentenceEn": "______ (Who / know) the correct answer to this challenging grammar puzzle?",
    "bracketVerb": "know",
    "options": [
      "Who knows",
      "Who does know",
      "Who do know",
      "Who is knowing"
    ],
    "correctAnswer": "Who knows",
    "ruleBadge": "سؤال خارجي: Who knows المفرد",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "أداة Who عند السؤال عن الفاعل تعامل كالمفرد الغائب ولا تأخذ does، وفعل know تقريري ممنوع من ing، فيكون الجواب: Who knows?!",
    "ruleDetail": {
      "ruleTitle": "سؤال الفاعل العاقل بـ Who مع الأفعال التقريرية",
      "ruleFormula": "Who + Verb(s) + Object?",
      "keywordOrTrigger": "Who كفاعل مباشر للسؤال",
      "teacherNote": "عند السؤال عن الفاعل، نضع s للفعل مباشرة: Who knows? وليس Who does know ولا Who is knowing.",
      "arabicExplanation": "أداة Who تسأل عن الفاعل فتعامل كالمفرد ويصرف معها الفعل بإضافة s مباشرة بدون do/does، وفعل know لا يقبل ing: Who knows.",
      "englishGrammarRule": "Subject question with interrogative pronoun \"Who\" takes singular inflection \"-s\" directly on the lexical verb."
    }
  },
  {
    "id": "ext_what_causes_earthquakes",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: سؤال الفاعل بـ What عن حقيقة علمية",
    "sentenceEn": "______ (What / cause) destructive earthquakes along tectonic plates?",
    "bracketVerb": "cause",
    "options": [
      "What causes",
      "What does cause",
      "What do cause",
      "What is causing"
    ],
    "correctAnswer": "What causes",
    "ruleBadge": "سؤال خارجي: What causes حقيقة",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "السؤال يسأل عما يُحدث الزلازل كحقيقة جيولوجية، وأداة What هنا هي الفاعل نفسه، فتأخذ s مباشرة بدون does: What causes?!",
    "ruleDetail": {
      "ruleTitle": "سؤال الفاعل غير العاقل بـ What للتعبير عن الحقائق العلمية",
      "ruleFormula": "What + causes + Object?",
      "keywordOrTrigger": "What كفاعل مباشر لسؤال حقيقة علمية",
      "teacherNote": "إذا كان السؤال عن الفاعل (ما الذي يسبب؟) نضع causes مباشرة كالمفرد بدون فعل مساعد.",
      "arabicExplanation": "أداة What تسأل عن سبب حدوث الزلازل (الفاعل)، وتصاغ كالمفرد الغائب بإضافة s للفعل مباشرة: What causes.",
      "englishGrammarRule": "Non-human subject interrogation with \"What\" takes third-person singular present inflection (\"causes\")."
    }
  },
  {
    "id": "ext_exhausted_working",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: العمل المتواصل في الوقت الحاضر (non-stop)",
    "sentenceEn": "I am completely exhausted because I ______ (work) on this major project non-stop.",
    "bracketVerb": "work",
    "options": [
      "am working",
      "work",
      "works",
      "working"
    ],
    "correctAnswer": "am working",
    "ruleBadge": "سؤال خارجي: المضارع المستمر مع الإرهاق اللحظي",
    "fromNotebook": false,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "المضارع المستمر للتعبير عن نشاط مستمر يفسر حالة الإرهاق الحالية",
      "ruleFormula": "I + am + working",
      "keywordOrTrigger": "I am completely exhausted (حالة حالية) + non-stop",
      "teacherNote": "النشاط المجهد الجاري الآن والمستمر يعبر عنه بالمضارع المستمر: am working.",
      "arabicExplanation": "المتحدث يبرر سبب تعبه في الوقت الحالي بأنه يعمل دون توقف، والضمير I يأخذ am working.",
      "englishGrammarRule": "Present continuous portrays ongoing active labor accounting for an immediate physical state."
    }
  },
  {
    "id": "ext_have_an_argument",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: الجدال الحركي مع have right now",
    "sentenceEn": "Listen! They ______ (have) a very heated argument in the conference room right now.",
    "bracketVerb": "have",
    "options": [
      "are having",
      "have",
      "has",
      "is having"
    ],
    "correctAnswer": "are having",
    "ruleBadge": "سؤال خارجي: have بمعنى يجادل حركي",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "العبارة have an argument تعني يتجادلان بالصوت والكلام وهو حدث حركي وليس امتلاكاً، ومقترن بـ right now والفاعل they جمع: are having.",
    "ruleDetail": {
      "ruleTitle": "استخدام have في الأنشطة الحركية (have a fight / argument) في المضارع المستمر",
      "ruleFormula": "Plural Subject (They) + are + having an argument",
      "keywordOrTrigger": "Listen! + right now + have an argument (نشاط جدال حركي)",
      "teacherNote": "الجدال بالصوت والكلام نشاط حركي ديناميكي يقبل ing حتماً.",
      "arabicExplanation": "الفعل have هنا لا يعني الامتلاك، بل يعني يجري جدالاً وهو حدث حركي مستمر الآن، والفاعل they جمع فيأخذ are having.",
      "englishGrammarRule": "\"Have an argument\" describes a communicative interaction and takes progressive aspect under current temporal focus."
    }
  },
  {
    "id": "ext_believe_in_hard_work",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: الإيمان واليقين العقلي (believe تقريري)",
    "sentenceEn": "Successful entrepreneurs firmly ______ (believe) in continuous learning and resilience.",
    "bracketVerb": "believe",
    "options": [
      "believe",
      "are believing",
      "believes",
      "believing"
    ],
    "correctAnswer": "believe",
    "ruleBadge": "سؤال خارجي: believe إيمان عقلي تقريري",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفعل believe هو فعل إيمان واعتقاد ذهني تقريري (Stative) ممنوع من ing تماماً، والفاعل entrepreneurs جمع فيأخذ الفعل المجرد: believe.",
    "ruleDetail": {
      "ruleTitle": "الفعل believe كفعل إيمان وقناعة عقلية تقريرية",
      "ruleFormula": "Plural Subject (entrepreneurs) + believe(مجرد)",
      "keywordOrTrigger": "believe (فعل قناعة عقلية تقريرية)",
      "teacherNote": "مدرج بالدفتر تحت تصنيف أفعال الرأي والعقل: believe, know, think. ممنوع وضع ing.",
      "arabicExplanation": "الفاعل جمع، وفعل believe يدل على قناعة ويقين عقلي تقريري لا يقبل الاستمرار، فيوضع مجرداً بدون s: believe.",
      "englishGrammarRule": "\"Believe\" is an epistemic stative verb denoting a cognitive stance; it does not admit the continuous aspect."
    }
  },
  {
    "id": "ext_twin_sisters_resemble",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: الشبه التام بين التوأم (resemble تقريري)",
    "sentenceEn": "The twin sisters ______ (resemble) each other so closely that even their teachers get confused.",
    "bracketVerb": "resemble",
    "options": [
      "resemble",
      "are resembling",
      "resembles",
      "is resembling"
    ],
    "correctAnswer": "resemble",
    "ruleBadge": "سؤال خارجي: resemble شبه تقريري",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفعل resemble يعني يشبه في الملامح، وهو فعل حالة تقريري بحت لا يقبل ing، والتوأم جمع فيأخذ الفعل المجرد: resemble.",
    "ruleDetail": {
      "ruleTitle": "الفعل resemble كفعل حالة وشبه شكلي تقريري",
      "ruleFormula": "Plural Subject (The twin sisters) + resemble(مجرد)",
      "keywordOrTrigger": "resemble (يشبه في الشكل والملامح)",
      "teacherNote": "الشبه الشكلي صفة خِلقية دائمة لا تتغير بالاستمرار، ولذلك resemble تقريري دائماً.",
      "arabicExplanation": "الفاعل جمع (The twin sisters)، وفعل resemble يعني يشبه في الملامح وهو فعل تقريري لا يقبل ing، لذا يوضع بالمصدر المجرد: resemble.",
      "englishGrammarRule": "\"Resemble\" is a stative verb of relational similarity; progressive conjugations are ungrammatical."
    }
  },
  {
    "id": "ext_seems_confident",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: الظهور والمظهر مع seem",
    "sentenceEn": "The candidate ______ (seem) exceptionally well-prepared for the technical interview.",
    "bracketVerb": "seem",
    "options": [
      "seems",
      "is seeming",
      "seem",
      "are seeming"
    ],
    "correctAnswer": "seems",
    "ruleBadge": "سؤال خارجي: seem فعل مظهر تقريري",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفعل seem يعني يبدو، وهو من أشهر أفعال المظهر التقريرية (Stative) الممنوعة قطعياً من ing (لا وجود لكلمة is seeming)، والمرشح مفرد فيأخذ s: seems.",
    "ruleDetail": {
      "ruleTitle": "الفعل seem كفعل إدراك ومظهر تقريري لا يقبل الاستمرار",
      "ruleFormula": "Singular Subject (The candidate) + seems",
      "keywordOrTrigger": "seem (يبدو - فعل مظهر تقريري)",
      "teacherNote": "مدرج بالدفتر: أفعال الحواس والمظهر (seem, appear, look) تقريرية ولا تقبل ing.",
      "arabicExplanation": "الفاعل The candidate مفرد، وفعل seem يدل على المظهر وهو فعل تقريري لا يقبل المضارع المستمر، فيأخذ s: seems.",
      "englishGrammarRule": "Copular perception verb \"seem\" is exclusively stative; it never appears in progressive constructions."
    }
  },
  {
    "id": "ext_currently_writing_novel",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: التأليف مع الكلمة الدالة currently",
    "sentenceEn": "The famous author ______ (currently / write) an exciting sequel to her bestseller.",
    "bracketVerb": "currently write",
    "options": [
      "is currently writing",
      "currently writes",
      "currently write",
      "are currently writing"
    ],
    "correctAnswer": "is currently writing",
    "ruleBadge": "سؤال خارجي: currently + مستمر",
    "fromNotebook": false,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "المضارع المستمر مع الكلمة الدالة currently والمشروعات المؤقتة",
      "ruleFormula": "Singular Subject + is + currently + writing",
      "keywordOrTrigger": "currently (حالياً - كلمة دالة على المضارع المستمر)",
      "teacherNote": "الكلمة currently تعني حالياً وتدل على مشروع مؤقت يجري إنجازه في هذه الفترة، فتأخذ is currently writing.",
      "arabicExplanation": "الكاتبة مفردة، والكلمة currently تدل على عمل يجري في هذه المرحلة الحالية، فيصاغ في المضارع المستمر: is currently writing.",
      "englishGrammarRule": "Adverb \"currently\" marks temporary activities in progress around the present period, requiring present continuous."
    }
  },
  {
    "id": "ext_water_freezes_zero",
    "type": "mcq",
    "category": "present_simple",
    "titleAr": "سؤال خارجي تريكي 🔥: تجمد الماء عند الصفر المئوي (حقيقة علمية)",
    "sentenceEn": "Pure water ______ (freeze) at zero degrees Celsius under normal atmospheric conditions.",
    "bracketVerb": "freeze",
    "options": [
      "freezes",
      "is freezing",
      "freeze",
      "freezs"
    ],
    "correctAnswer": "freezes",
    "ruleBadge": "سؤال خارجي: حقيقة علمية - freeze",
    "fromNotebook": false,
    "difficulty": "normal",
    "ruleDetail": {
      "ruleTitle": "المضارع البسيط للحقائق العلمية والظواهر الطبيعية الثابتة",
      "ruleFormula": "Uncountable Subject (Pure water) + freezes",
      "keywordOrTrigger": "حقيقة علمية ثابتة (تجمد الماء عند الصفر)",
      "teacherNote": "الماء اسم غير معدود مفرد، وتجمده حقيقة علمية دائمة، فيأخذ المضارع البسيط المفرد: freezes.",
      "arabicExplanation": "الماء اسم غير معدود يعامل كالمفرد، وكونه يتجمد عند الصفر المئوي حقيقة علمية كونية، لذا نضع للفعل s: freezes.",
      "englishGrammarRule": "Scientific laws and physical constants are universally framed in the present simple tense (\"freezes\")."
    }
  },
  {
    "id": "ext_always_interrupting_teacher",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: الشكوى من المقاطعة المتكررة بـ always",
    "sentenceEn": "Please stop! You ______ (always / interrupt) me while I am trying to explain the math formula!",
    "bracketVerb": "always interrupt",
    "options": [
      "are always interrupting",
      "always interrupt",
      "always interrupts",
      "is always interrupting"
    ],
    "correctAnswer": "are always interrupting",
    "ruleBadge": "سؤال خارجي: always للشكوى والتذمر",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "وجود سياق الغضب والشكوى (Please stop!) مع always يحول الزمن إلى المضارع المستمر: are always interrupting للتعبير عن الاستياء من عادة مزعجة!",
    "ruleDetail": {
      "ruleTitle": "المضارع المستمر مع always للتعبير عن الشكوى واللوم",
      "ruleFormula": "You + are + always + interrupting",
      "keywordOrTrigger": "سياق طلب التوقف والشكوى (Please stop!) + always",
      "teacherNote": "عندما تدل always على سلوك مزعج يثير غضب المتحدث نستخدم المضارع المستمر حصراً.",
      "arabicExplanation": "المتحدث يشكو من مقاطعة مستمرة ومزعجة، والقاعدة الإنجليزية تلزم استخدام المضارع المستمر مع always في سياق الشكوى: are always interrupting.",
      "englishGrammarRule": "Progressive aspect combined with \"always\" signals speaker exasperation at a repeated disruptive habit."
    }
  },
  {
    "id": "ext_box_contains_glasses",
    "type": "mcq",
    "category": "stative_verbs",
    "titleAr": "سؤال خارجي تريكي 🔥: الاحتواء والمحتوى مع contain",
    "sentenceEn": "This delicate wooden box ______ (contain) fragile handmade glass ornaments.",
    "bracketVerb": "contain",
    "options": [
      "contains",
      "is containing",
      "contain",
      "are containing"
    ],
    "correctAnswer": "contains",
    "ruleBadge": "سؤال خارجي: contain احتواء تقريري",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "الفعل contain يعني يحتوي على، وهو فعل سعة واحتواء تقريري (Stative) لا يقبل ing إطلاقاً، والصندوق مفرد فيأخذ s: contains.",
    "ruleDetail": {
      "ruleTitle": "الفعل contain كفعل احتواء وسعة تقريري",
      "ruleFormula": "Singular Subject (This box) + contains",
      "keywordOrTrigger": "contain (فعل احتواء ومحتوى تقريري)",
      "teacherNote": "أفعال المحتوى والاشتمال (contain, include, hold) أفعال حالة بسيطة.",
      "arabicExplanation": "الصندوق اسم مفرد، وفعل contain يدل على المحتوى الداخلي وهو فعل تقريري لا يقبل الاستمرار، فيأخذ s: contains.",
      "englishGrammarRule": "\"Contain\" denotes spatial enclosure and capacity; it is strictly stative and rejects continuous aspect."
    }
  },
  {
    "id": "ext_a_number_of_waiting",
    "type": "mcq",
    "category": "present_continuous",
    "titleAr": "سؤال خارجي تريكي 🔥: A number of جمع مع right now",
    "sentenceEn": "A number of passionate volunteers ______ (wait) outside the community center right now.",
    "bracketVerb": "wait",
    "options": [
      "are waiting",
      "is waiting",
      "waits",
      "wait"
    ],
    "correctAnswer": "are waiting",
    "ruleBadge": "سؤال خارجي: A number of جمع + right now",
    "fromNotebook": false,
    "difficulty": "tricky",
    "trapExplanation": "عبارة \"A number of\" تعامل كجمع دائماً (عكس The number of التي تعامل كمفرد)! ومع وجود right now والفاعل الجمع نختار: are waiting.",
    "ruleDetail": {
      "ruleTitle": "عبارة A number of تعامل معاملة الجمع دائماً",
      "ruleFormula": "A number of + plural noun + are + Verb(ing)",
      "keywordOrTrigger": "A number of (عدد من - فاعل جمع) + right now",
      "teacherNote": "تذكر المعادلة: A number of = جمع ➔ are waiting. أما The number of = مفرد ➔ is / Verb(s).",
      "arabicExplanation": "العبارة A number of تعني عدة متطوعين وهي جمع في قواعد اللغة، ومع وجود right now نختار المضارع المستمر الجمع: are waiting.",
      "englishGrammarRule": "Indefinite quantifier \"A number of\" takes plural concord, requiring plural auxiliary \"are waiting\"."
    }
  }

];
