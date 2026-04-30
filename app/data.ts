export const MORPH_WORDS = [
  { text: 'an applied linguist', cls: 'w-lang' },
  { text: 'an energy strategist', cls: 'w-energy' },
  { text: 'a director of education', cls: 'w-teach' },
  { text: 'a classroom storyteller', cls: 'w-lang' },
  { text: 'a decarbonization writer', cls: 'w-energy' },
  { text: 'a curriculum designer', cls: 'w-teach' },
  { text: 'a recovering academic', cls: 'w-writer' },
  { text: 'a cruciverbalist', cls: 'w-writer' },
  { text: 'a language lover', cls: 'w-lang' },
];

export const NOW_ITEMS = [
  'Finalizing the first series for the "Language and Power" blog',
  'Drafting a paper on incorporating EMI in Brazil',
  'Managing the publication Staying Current for Evolved Energy Research',
  'Designing an energy themed crossword',
];

export const TIMELINE = [
  {
    id: 'eer', year: '2024 — Now', role: 'Director of Education',
    place: 'Evolved Energy Research · San Diego', current: true, badge: 'Current',
    bullets: [
      'Lead internal education efforts: training, curriculum, onboarding for new staff across engineering and policy teams.',
      'Run external education: newsletters, blog posts, press releases, news articles translating modeling work for non-modelers.',
      'Write and co-author technical reports, including EER\'s 2024 Annual Decarbonization Perspective in Europe and dozens of client deliverables.',
      'Bridge the firm\'s quantitative research and the public-facing voice of the practice.',
    ],
  },
  {
    id: 'dos', year: '2023 — 2024', role: 'English Language Fellow',
    place: 'U.S. Department of State', current: false, badge: 'Diplomat',
    bullets: [
      'Represented the United States as a visiting scholar and English-language expert at the University of São Paulo.',
      'Recruited local scholars for English language teaching conferences.',
      'Delivered keynotes and seminars to train teachers across the region.',
      'Expanded access to equitable education across classes and cultures through diverse outreach.',
    ],
  },
  {
    id: 'usp', year: '2023 — 2024', role: 'Visiting Professor',
    place: 'Universidade de São Paulo · Brazil', current: false, badge: 'Faculty',
    bullets: [
      'Designed curricula and taught Linguistics, Applied Linguistics, and English at the top university in Latin America.',
      'Led English as a Medium of Instruction (EMI) conferences and workshops for 50+ professors across Brazil.',
      'Instructed an online EMI course for over 100 professors shifting from Portuguese to English.',
      'Mentored dozens of scholars on papers for publication at the LLAC campus language lab.',
    ],
  },
  {
    id: 'ucla', year: '2017 — 2020', role: 'Lecturer',
    place: 'UCLA · Los Angeles', current: false, badge: 'Faculty',
    bullets: [
      'Full-time lecturer in Applied Linguistics, Linguistics, and ESL — academic writing and language studies.',
      'Designed syllabi, selected readings, facilitated discussion, held office hours.',
      'Oversaw courses of 15 – 88 students per lecture; 500+ students total.',
      'Managed, observed, and mentored up to four TAs per course.',
    ],
  },
  {
    id: 'phd', year: '2009 — 2017', role: 'PhD · Applied Linguistics',
    place: 'UCLA · Los Angeles', current: false, badge: 'Doctorate',
    bullets: [
      'Dissertation: "Measuring Linguistic Empathy — an experimental approach to connecting linguistic and social-psychological notions of empathy."',
      'Designed and administered behavioral + EEG psycholinguistic experiments.',
      'Taught as Teaching Associate, TA, and Instructor; 400+ students across sections.',
      'Assistant Editor, Issues in Applied Linguistics; Student Rep for the department.',
    ],
  },
  {
    id: 'korea', year: '2006', role: 'English Instructor',
    place: 'South Korea', current: false, badge: 'Early career',
    bullets: [
      'Tutored high school students in English language and academic skills.',
      'Freelanced as an English instructor at a Korean university.',
      'First professional teaching experience abroad — left to pursue graduate study at UCLA.',
    ],
  },
  {
    id: 'smc', year: '2012 — 2013', role: 'Adjunct Professor',
    place: 'Santa Monica College · ESL', current: false, badge: 'Early career',
    bullets: [
      'Instructor in the Department of English as a Second Language.',
      'Designed syllabi, selected materials, wrote essay prompts and testing materials.',
      'Facilitated discussion, interaction, and presentations for 50+ students.',
    ],
  },
];

export const COURSES = [
  { code: 'LING 1',      title: 'The Study of Language',                        where: 'UCLA',              cat: 'ling' },
  { code: 'LING 9W',     title: 'Linguistic Humor — Amusing & Abusing with Language', where: 'UCLA',        cat: 'ling' },
  { code: 'LING 11',     title: 'Language in Action — Applied Linguistics',      where: 'UCLA',              cat: 'ling' },
  { code: 'LING 20',     title: 'Introduction to Linguistic Analysis',           where: 'UCLA',              cat: 'ling' },
  { code: 'LING 144',    title: 'Fundamentals in Translation & Interpreting',    where: 'UCLA',              cat: 'ling' },
  { code: 'LING 170',    title: 'Language & Society — Sociolinguistics',         where: 'UCLA',              cat: 'ling' },
  { code: 'USP',         title: 'Topics of Semantics',                           where: 'São Paulo',         cat: 'ling' },
  { code: 'USP',         title: 'Phonetics & Phonology',                         where: 'São Paulo',         cat: 'ling' },
  { code: 'APPLING 30W', title: 'Language & Social Interaction',                 where: 'UCLA',              cat: 'appling' },
  { code: 'APPLING 40W', title: 'Language & Gender',                             where: 'UCLA',              cat: 'appling' },
  { code: 'APPLING 101W',title: 'Language Learning & Teaching',                  where: 'UCLA',              cat: 'appling' },
  { code: 'APPLING 102W',title: 'The Nature of Language',                        where: 'UCLA',              cat: 'appling' },
  { code: 'APPLING 161W',title: 'Talk and the Body',                             where: 'UCLA · cross-listed Anthro', cat: 'appling' },
  { code: 'USP',         title: 'Topics in Discourse Analysis',                  where: 'São Paulo',         cat: 'appling' },
  { code: 'EMI',         title: 'English as a Medium of Instruction',            where: 'USP + U.S. DoS · online', cat: 'appling' },
  { code: 'ESL 28',      title: 'English Through Language, Culture & Society',  where: 'UCLA',              cat: 'esl' },
  { code: 'ESL 33C',     title: 'Academic Writing',                              where: 'UCLA',              cat: 'esl' },
  { code: 'ESL 34',      title: 'Public Speaking',                               where: 'UCLA',              cat: 'esl' },
  { code: 'ESL 38B',     title: 'Pronunciation',                                 where: 'UCLA',              cat: 'esl' },
  { code: 'Anderson',    title: 'Business English — Speaking/Listening',         where: 'UCLA Anderson',     cat: 'esl' },
  { code: 'USP',         title: 'Academic Writing',                              where: 'São Paulo',         cat: 'esl' },
];

export const TESTIMONIALS = [
  { quote: "Thanks for sharing your knowledge and jokes with us!", author: 'Paulo · USP 2024', lang: 'EN' },
  { quote: "Obrigada pelo semestre — você é um professor cativante.", author: 'Júlia · USP 2023', lang: 'PT' },
  { quote: "Love the style of your teaching. As students, we enjoy inexhaustible knowledge and a facetious professor at the same time.", author: 'UCLA Linguistics 170', lang: 'EN' },
  { quote: "感谢 Trevor, 祝一切好 — thank you for this great semester!", author: 'Junzilan · USP 2024', lang: 'ZH' },
  { quote: "Thank you for being the best teacher in my life. A lot more appreciated than I can say.", author: 'UCLA ESL student', lang: 'EN' },
  { quote: "Obrigado pelas aulas incríveis desse semestre. Todo de bom!", author: 'Gustavo · USP 2023', lang: 'PT' },
  { quote: "By far, Mr. Trevor has been the best T.A. in any class I have attended here at UCLA — and this is my last quarter here. He has been very fun, approachable, supportive, very useful, and has made this otherwise tedious class very enjoyable and useful to me. Writing has always been a daunting task for me but Trevor has made writing manageable, logical, and fun.", author: 'UCLA Applied Linguistics · 2011', lang: 'EN', span: true },
];

export const ETYM_WORDS = [
  { w: 'power',      ipa: '/ˈpaʊ.ər/',        roots: 'O.Fr. poeir, from L. potere — to be able',
    both: ['Language: who holds authority in speech — whose words carry weight, who defines terms.', 'Energy: the rate at which work is done, measured in watts.', 'Both ask the same question: what is this agent able to cause?'] },
  { w: 'current',    ipa: '/ˈkʌr.ənt/',        roots: 'L. currere — to run',
    both: ['Linguistic: "current usage" — what runs in speech now.', 'Electrical: flow of charge running through a conductor.', 'Both descend from the image of something running past.'] },
  { w: 'charge',     ipa: '/tʃɑːrdʒ/',          roots: 'L. carricare — to load a cart',
    both: ['Discourse: to accuse, to invest with meaning ("charged language").', 'Energy: a quantity of electric potential.', 'Shared metaphor: loading something up until it releases.'] },
  { w: 'capacity',   ipa: '/kəˈpæs.ɪ.ti/',     roots: 'L. capax — able to hold',
    both: ['Cognitive: how much a learner can hold in working memory.', 'Grid: maximum generating or transmission throughput.', 'A container metaphor running through both fields.'] },
  { w: 'grid',       ipa: '/ɡrɪd/',             roots: 'Back-formation from *gridiron*, O.E. grædig',
    both: ['Crossword grids; orthographic grids; morphological paradigms.', 'Electrical grid: the synchronized transmission network.', 'Both are structures that make interconnection visible.'] },
  { w: 'fluency',    ipa: '/ˈfluː.ən.si/',      roots: 'L. fluere — to flow',
    both: ['Language fluency: flow of speech without effort.', 'Thermal/fluid dynamics: literal flow.', 'The root *fluere* is doing double duty.'] },
  { w: 'translation',ipa: '/trænsˈleɪ.ʃən/',    roots: 'L. trans + latus — carried across',
    both: ['Language: carrying meaning across from one tongue to another.', 'Energy: losses incurred when moving power across distance.', 'Both are about what survives the crossing.'] },
  { w: 'code',       ipa: '/koʊd/',             roots: 'L. codex — wooden tablet, book',
    both: ['Language: code-switching — bilinguals shift between languages and registers mid-conversation.', 'Energy: computational code governs how models and grid systems behave.', 'Both are rule systems — and someone always writes the rules.'] },
  { w: 'voice',      ipa: '/vɔɪs/',             roots: 'L. vox — voice, word',
    both: ['Active / passive voice — who does what.', 'A utility "voice" — how a company is heard in policy.', 'Both grammar and rhetoric ask who the agent is.'] },
  { w: 'frame',      ipa: '/freɪm/',            roots: 'O.E. framian — to be helpful',
    both: ['Conceptual framing in discourse analysis.', 'Frame of reference for a grid operator.', 'Everything depends on how we bracket the question.'] },
];

export const CONCEPT_NODES = [
  { id: 'ling',       label: 'Linguistics',       type: 'ling',   x: 18, y: 30, size: 1.0 },
  { id: 'discourse',  label: 'Discourse',         type: 'ling',   x: 10, y: 50 },
  { id: 'framing',    label: 'Framing',           type: 'ling',   x: 8,  y: 72 },
  { id: 'register',   label: 'Register',          type: 'ling',   x: 22, y: 78 },
  { id: 'pragmatics', label: 'Pragmatics',        type: 'ling',   x: 28, y: 64 },
  { id: 'empathy',    label: 'Linguistic Empathy',type: 'ling',   x: 16, y: 16 },
  { id: 'teaching',   label: 'Teaching',          type: 'ling',   x: 30, y: 40 },
  { id: 'energy',     label: 'Energy planning',   type: 'energy', x: 82, y: 30, size: 1.0 },
  { id: 'grid',       label: 'Grid',              type: 'energy', x: 88, y: 50 },
  { id: 'decarb',     label: 'Decarbonization',   type: 'energy', x: 90, y: 72 },
  { id: 'policy',     label: 'Policy',            type: 'energy', x: 78, y: 78 },
  { id: 'model',      label: 'RIO / ENSEMBLE',    type: 'energy', x: 72, y: 64 },
  { id: 'transition', label: 'The Transition',    type: 'energy', x: 84, y: 16 },
  { id: 'utility',    label: 'Utility',           type: 'energy', x: 70, y: 40 },
  { id: 'power',      label: 'Power',             type: 'bridge', x: 50, y: 38 },
  { id: 'current',    label: 'Current',           type: 'bridge', x: 50, y: 56 },
  { id: 'capacity',   label: 'Capacity',          type: 'bridge', x: 50, y: 76 },
  { id: 'translation',label: 'Translation',       type: 'bridge', x: 40, y: 26 },
  { id: 'code',       label: 'Code',              type: 'bridge', x: 60, y: 80 },
];

export const CONCEPT_EDGES: [string, string][] = [
  ['ling','discourse'],['ling','teaching'],['ling','empathy'],
  ['discourse','framing'],['discourse','pragmatics'],
  ['framing','register'],['pragmatics','teaching'],
  ['empathy','teaching'],['empathy','pragmatics'],['register','teaching'],
  ['energy','grid'],['energy','utility'],['energy','transition'],
  ['transition','ling'],['transition','discourse'],
  ['empathy','energy'],
  ['grid','decarb'],['decarb','policy'],['policy','model'],
  ['model','utility'],['transition','model'],
  ['power','ling'],['power','energy'],['power','framing'],['power','grid'],
  ['current','discourse'],['current','grid'],['current','register'],['current','utility'],
  ['capacity','teaching'],['capacity','model'],['capacity','empathy'],['capacity','decarb'],
  ['translation','ling'],['translation','policy'],['translation','register'],['translation','energy'],
  ['code','framing'],['code','model'],['code','policy'],['code','pragmatics'],['code','register'],
];

export const CAPTIONS: Record<string, string> = {
  power: '<b>Power</b> — Sociolinguistic power (dominance or influence asserted through language choices, accent, and style) and electrical power (rate of energy transfer) both describe what an agent is able to cause.',
  current: '<b>Current</b> — in discourse, shared context {you, me, here, now} and what flows in speech right now. On a grid: what flows through a conductor.',
  capacity: '<b>Capacity</b> — the uniquely human drive to engage with others through language. In energy, the installed potential available to meet demand.',
  translation: '<b>Translation</b> — <i>trans + latus</i>, carried across. Both fields obsess over what survives the crossing, and what\'s lost in it.',
  code: '<b>Code</b> governs behavior in both worlds: code-switching in bilinguals, grid-code compliance for inverters.',
  ling: 'The academic home: applied linguistics, sociolinguistics, psycholinguistics. 20 years of teaching and research.',
  energy: 'Planning the decarbonized system: modeling, policy, strategy. EER uses RIO and ENSEMBLE to co-optimize capacity expansion and scenario generation.',
  empathy: '<b>Empathy</b> — in language, perspective encoded in grammar and felt in conversation. In energy planning, understanding how different communities and stakeholders experience the energy transition.',
  framing: '<b>Framing</b> — in discourse, the interpretive lens that allows individuals to interpret what a situation or conversation truly means. In energy, the frame around a project — capacity, emissions, cost, policy — influences stakeholder interpretation of an analysis within a complex system.',
  register: '<b>Register</b> — in language, how speech shifts to fit its context: technical, formal, colloquial, urgent. In energy planning, navigating between the language of models, policy, and public engagement means operating in several registers at once.',
  pragmatics: '<b>Pragmatics</b> — meaning in use: what\'s implied, presupposed, and left to inference. In energy, the same transition gets called \'grid modernization,\' \'climate action,\' or \'energy security\' depending on the room.',
  model: '<b>Model</b> — in linguistics, large language models are statistical representations of language patterns trained on vast amounts of human text. In energy, RIO and ENSEMBLE model the system we\'re trying to build.',
  transition: '<b>Transition</b> — in conversation analysis, the moment when one speaker yields the floor to another: precisely managed, cued by grammar and prosody. In energy, the shift to a decarbonized system is the defining infrastructure project of this century.',
  teaching: '<b>Teaching</b> — in language education, meeting learners where they are and building from there. In energy, the same challenge: making complex systems legible to the people who need to act on them.',
};
