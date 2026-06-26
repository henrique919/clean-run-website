// Comparison content for /compare/ hub and the /compare/cleanrun-iq-vs-[slug]/ pages.
// Brand stays CleanRun IQ navy/green for consistency across the site.

export const whatCleanRunIs =
  'A focused web and mobile app for the defect close-out workflow: capture issues on site, assign them to trades, track rectification, collect photo evidence, close items properly and export a clean handover report. It is deliberately not a full construction management suite.';

// Dimensions for the "At a glance" table, in display order.
export const tableDimensions = [
  'Product shape',
  'Best buyer',
  'Defect capture',
  'Subcontractor assignment',
  'Photo evidence',
  'Close-out workflow',
  'Handover reports',
  'Full project management suite',
  'RFIs / submittals / cost control',
  'Document control',
  'Pricing style',
  'Time to value',
];

// CleanRun IQ column — the same across every comparison.
export const cleanRunColumn = [
  'Focused defect & handover tool',
  'Builders, site teams & subbies',
  'Core',
  'Core',
  'Core',
  'Core',
  'Core',
  'Out of scope',
  'Out of scope',
  'Out of scope',
  'Simple, focused, lower-cost',
  'Days',
];

export const comparisons = [
  {
    slug: 'cleanrun-iq-vs-procore',
    name: 'Procore',
    category: 'Full construction management platform',
    metaTitle: 'CleanRun IQ vs Procore — a focused defect & handover alternative',
    metaDescription:
      'Procore is a full construction management platform. CleanRun IQ is a focused defect, close-out and handover reporting tool. See which fits your team.',
    hubSummary: 'A full construction management platform covering project management, financials, RFIs, drawings, quality and more.',
    hubAngle: 'CleanRun IQ skips the enterprise suite and focuses on fast defect capture, close-out and handover reports.',
    heroPara:
      'Procore is a full construction management platform. CleanRun IQ is a focused defect, close-out and reporting tool for teams who do not need a full enterprise suite just to manage handover.',
    shortAnswer:
      'Choose Procore when you want one platform for project management, financials, RFIs, drawings, quality, safety and reporting. Choose CleanRun IQ when the immediate problem is simpler: capture defects quickly, assign them clearly, track rectification and issue clean reports without enterprise setup.',
    pickCleanRun: [
      'Your site team mainly needs defect capture and close-out',
      'You are still using spreadsheets, WhatsApp, email threads or photo folders',
      'You want subcontractors to see only what they need to fix',
      'You need clean PDF/Excel reports for handover meetings',
      'You want a focused tool without paying for modules you will not use',
    ],
    pickCompetitor: [
      'You need a full project management platform',
      'You need RFIs, submittals, drawings, financials, safety and quality in one system',
      'Your head contractor or client already mandates Procore',
      'You have the budget, implementation time and admin support for a larger platform',
    ],
    whatCompetitorIs:
      'A broad, established construction management platform used to run projects end to end — financials, RFIs, submittals, drawings, quality, safety and reporting — usually across the whole business.',
    table: ['Full construction management platform', 'Contractors wanting one full suite', 'Available', 'Available', 'Available', 'Available', 'Available', 'Core', 'Core', 'Available', 'Custom quote / enterprise', 'Weeks to months'],
    pricingNote:
      'Procore is typically priced as a custom, enterprise-style quote based on construction volume. CleanRun IQ is positioned to be simple and lower-cost — you pay for the defect and handover workflow, not a full platform.',
    faqs: [
      { q: 'Does CleanRun IQ replace Procore?', a: 'No. CleanRun IQ is not a full Procore replacement. It is focused on the defect and handover workflow. Many teams may still use a wider platform for RFIs, drawings, financials and document control.' },
      { q: 'Why use CleanRun IQ instead of Procore Punch List?', a: 'If your only urgent pain point is defects, close-out and reporting, CleanRun IQ is designed to be simpler, faster to roll out and easier for site teams and subcontractors to use.' },
      { q: 'Can CleanRun IQ reports be uploaded into Procore?', a: 'Yes. CleanRun IQ produces clean exportable records that can be filed into Procore or a wider project system.' },
      { q: 'Is CleanRun IQ cheaper than Procore?', a: 'CleanRun IQ is positioned as a simpler, lower-cost, focused tool. Because it covers the defect and handover workflow rather than a full platform, it avoids paying for modules a small site team will not use.' },
    ],
  },
  {
    slug: 'cleanrun-iq-vs-dashpivot',
    name: 'Dashpivot',
    category: 'Flexible forms & site records platform',
    metaTitle: 'CleanRun IQ vs Dashpivot — defect close-out vs a forms platform',
    metaDescription:
      'Dashpivot is a flexible forms and site documentation platform. CleanRun IQ is purpose-built for defects, handover and close-out reporting. Compare the two.',
    hubSummary: 'A flexible forms and site documentation platform for digitising many types of records across safety, quality and field reporting.',
    hubAngle: 'CleanRun IQ is a purpose-built defect register, not a form builder you have to configure.',
    heroPara:
      'Dashpivot is a flexible forms and site documentation platform. CleanRun IQ is focused specifically on defects, handover and close-out reporting.',
    shortAnswer:
      'Dashpivot is strong when your business wants to digitise many types of forms across safety, quality, environmental records, diaries and inspections. CleanRun IQ is stronger when you want a purpose-built defect workflow that site teams and subcontractors can use with minimal setup.',
    pickCleanRun: [
      'You want a dedicated defect register',
      'You need fast mobile defect capture',
      'You need subcontractor assignment and close-out evidence',
      'You need simple project handover reports',
      'You do not want to build and maintain custom forms for every workflow',
    ],
    pickCompetitor: [
      'You need a broad form builder',
      'You want to digitise toolbox talks, JSAs, inspections, diaries and quality forms',
      'Your company wants one platform for many different site records',
      'You have the admin capacity to configure templates and workflows',
    ],
    whatCompetitorIs:
      'A flexible platform for building and digitising site forms — safety, quality, environmental, diaries and inspections — so a business can standardise many record types in one place.',
    table: ['Flexible forms & records platform', 'Teams digitising many site forms', 'Available', 'Available', 'Available', 'Available', 'Available', 'Not the focus', 'Out of scope', 'Limited', 'Platform / per-user pricing', 'Depends on setup'],
    pricingNote:
      'Dashpivot is priced as a broader forms platform, often per user. CleanRun IQ keeps pricing simple and focused on the defect and handover workflow, with less setup to get value.',
    faqs: [
      { q: 'Is CleanRun IQ a Dashpivot alternative?', a: 'For defects and handover, yes. For broad HSEQ form management, no. Dashpivot covers a wider range of forms, while CleanRun IQ is intentionally focused on defects and reporting.' },
      { q: 'Which is better for subcontractor defect close-out?', a: 'CleanRun IQ is better suited to simple subcontractor defect assignment, rectification evidence and close-out reporting, because that workflow is the whole product rather than one form among many.' },
      { q: 'Do I have to build templates in CleanRun IQ?', a: 'No. The defect workflow is ready out of the box — capture, assign, rectify, review, close and report — so there is no form-building before your team can start.' },
      { q: 'Can I still use Dashpivot for other forms?', a: 'Yes. Many teams keep a forms platform for safety and quality records and use CleanRun IQ specifically for the defect and handover workflow.' },
    ],
  },
  {
    slug: 'cleanrun-iq-vs-aconex',
    name: 'Aconex',
    category: 'Enterprise document control',
    metaTitle: 'CleanRun IQ vs Aconex — field defects vs enterprise document control',
    metaDescription:
      'Aconex is enterprise document control for major projects. CleanRun IQ is the field defect and handover tool that produces records you can file into a formal system.',
    hubSummary: 'Enterprise document control, correspondence and transmittals for major, principal-led projects.',
    hubAngle: 'CleanRun IQ handles live site defects and produces records you can later file into a formal system.',
    heroPara:
      'Aconex is enterprise document control. CleanRun IQ is the field defect and handover tool that helps produce the records you may later file into a formal document system.',
    shortAnswer:
      'Choose Aconex when the project requires formal document control, correspondence, workflows, transmittals and audit trails across many organisations. Choose CleanRun IQ when the problem is capturing site defects, assigning trades and producing handover reports without turning every issue into a document-control process.',
    pickCleanRun: [
      'You are managing live defects on site',
      'You need photos, comments, status and trade responsibility in one place',
      'You want clean handover reports',
      'You need a field-friendly system for site managers and subcontractors',
      'You do not need enterprise document control',
    ],
    pickCompetitor: [
      'The project requires formal document control',
      'The client or principal mandates Aconex',
      'You need transmittals, correspondence, document workflows and controlled records',
      'You are working on a tier-one or major infrastructure project',
    ],
    whatCompetitorIs:
      'An enterprise document and correspondence platform for major projects — controlled documents, transmittals, workflows and audit trails across many organisations.',
    table: ['Enterprise document control', 'Tier-1 / principal-led projects', 'Depends on setup', 'Depends on setup', 'Available', 'Not the focus', 'Available', 'Available', 'Available', 'Core', 'Enterprise / on enquiry', 'Weeks to months'],
    pricingNote:
      'Aconex is enterprise software, usually priced on enquiry at a project or program level. CleanRun IQ is a focused, lower-cost tool for the defect and handover workflow specifically.',
    faqs: [
      { q: 'Does CleanRun IQ replace Aconex?', a: 'No. Aconex is a formal project document and correspondence platform. CleanRun IQ is focused on the field defect and handover workflow.' },
      { q: 'Can CleanRun IQ reports be saved into Aconex?', a: 'Yes. CleanRun IQ reports are clean exportable records that can be uploaded into Aconex or another document-control system.' },
      { q: 'Is CleanRun IQ enough on a tier-one project?', a: 'On its own, usually not — major projects often mandate formal document control. CleanRun IQ can still run the day-to-day defect workflow on site and feed records into the formal system.' },
      { q: 'Which is easier for trades to use?', a: 'CleanRun IQ. It is built for site managers and subcontractors to capture and close defects quickly, rather than to manage controlled documents.' },
    ],
  },
  {
    slug: 'cleanrun-iq-vs-fieldwire',
    name: 'Fieldwire',
    category: 'Field task, plan & coordination platform',
    metaTitle: 'CleanRun IQ vs Fieldwire — defect close-out vs field coordination',
    metaDescription:
      'Fieldwire is a field management platform for plans, tasks and coordination. CleanRun IQ is narrower: defects, close-out and handover reporting. Compare them.',
    hubSummary: 'A field management platform for plan viewing, task management, checklists and project coordination.',
    hubAngle: 'CleanRun IQ is narrower and simpler — the defect workflow trades will actually use.',
    heroPara:
      'Fieldwire is a field management platform for plans, tasks, checklists and project coordination. CleanRun IQ is narrower: defects, close-out and handover reporting.',
    shortAnswer:
      'Fieldwire is a strong choice when your team wants plan viewing, task management, checklists, scheduling and field coordination. CleanRun IQ is for builders who want a focused defect workflow that is easier to explain to trades and faster to use during handover.',
    pickCleanRun: [
      'Defect close-out is the main pain',
      'You need quick reporting',
      'You want the simplest possible field workflow',
      'Your subcontractors do not want another complex platform',
      'You want a focused tool at a lower cost',
    ],
    pickCompetitor: [
      'Plan viewing and markup are central to your workflow',
      'You need broader task management and checklists',
      'You want field coordination beyond defects',
      'You need more project-management features such as RFIs or budget on higher tiers',
    ],
    whatCompetitorIs:
      'A field-first platform for plans, tasks, checklists and coordination, with RFIs, submittals and budget features on its higher Business Plus tier.',
    table: ['Field task & plan platform', 'Field-first task & plan workflows', 'Available', 'Available', 'Available', 'Available', 'Available', 'Limited', 'Available (higher tiers)', 'Limited', 'Transparent per-user tiers', 'Days to weeks'],
    pricingNote:
      'Fieldwire uses transparent per-user tiers, with more project-management features on higher plans. CleanRun IQ keeps it to one focused workflow at a lower cost for teams who mainly need defects and handover.',
    faqs: [
      { q: 'Is CleanRun IQ a Fieldwire alternative?', a: 'For defects and handover, yes. If you also need plan markup, scheduling and broader task management, Fieldwire does more — but it is more for trades to learn.' },
      { q: 'Which is simpler for subcontractors?', a: 'CleanRun IQ. The defect workflow is the whole app, so subbies see only the items assigned to them with no extra modules to navigate.' },
      { q: 'Does CleanRun IQ do plan markup?', a: 'No. Plan viewing and markup are a Fieldwire strength. CleanRun IQ focuses on capturing the defect, the trade, the evidence and the close-out record.' },
      { q: 'Can I use both?', a: 'Yes. Some teams coordinate the wider job in a field platform and run the defect and handover process in CleanRun IQ.' },
    ],
  },
  {
    slug: 'cleanrun-iq-vs-visibuild',
    name: 'VisiBuild',
    category: 'Construction quality (QA) platform',
    metaTitle: 'CleanRun IQ vs VisiBuild — defects first vs a full QA rollout',
    metaDescription:
      'VisiBuild is a construction quality platform for inspections and sign-offs. CleanRun IQ is a focused defects and handover tool. See which suits your team.',
    hubSummary: 'A construction quality platform for structured QA, inspections, sign-offs and project-wide quality visibility.',
    hubAngle: 'CleanRun IQ starts with the most immediate pain — defects, evidence and handover — without a full QA rollout.',
    heroPara:
      'VisiBuild is a construction quality platform. CleanRun IQ is a focused defects and handover tool for teams who want the close-out workflow without a heavier QA rollout.',
    shortAnswer:
      'VisiBuild is strong for structured QA, inspections, sign-offs and project-wide quality visibility. CleanRun IQ is better positioned for builders starting with the most immediate pain: defects, rectification evidence and handover reports.',
    pickCleanRun: [
      'You want to start with defects first',
      'You need a simple close-out workflow',
      'You want minimal training for site teams',
      'You want professional reports without a large QA implementation',
    ],
    pickCompetitor: [
      'You want a broader construction QA management platform',
      'You need inspections, sign-offs, quality records and progress-linked QA',
      'You are ready to standardise quality management across the business',
    ],
    whatCompetitorIs:
      'A construction quality platform for running structured QA across a business — inspections, sign-offs, quality records and project-wide visibility.',
    table: ['Construction QA platform', 'Business-wide QA & inspections', 'Available', 'Available', 'Core', 'Available', 'Available', 'Not the focus', 'Out of scope', 'Limited', 'Platform pricing / on enquiry', 'Depends on setup'],
    pricingNote:
      'VisiBuild is priced as a quality platform, typically on enquiry. CleanRun IQ is a simpler, lower-cost starting point focused on defects and handover, which you can adopt before a full QA program.',
    faqs: [
      { q: 'Is CleanRun IQ a VisiBuild alternative?', a: 'For the defect and handover workflow, yes. For a full, business-wide QA program with structured inspections and sign-offs, VisiBuild does more.' },
      { q: 'Can I start with defects and add QA later?', a: 'That is exactly the CleanRun IQ position — start with the most immediate pain (defects and handover) with minimal training, and consider a broader QA platform when you are ready.' },
      { q: 'Which needs less setup?', a: 'CleanRun IQ. The defect workflow works out of the box, so site teams can start on the next defect walk rather than after a QA implementation.' },
      { q: 'Does CleanRun IQ do inspections and sign-offs?', a: 'CleanRun IQ focuses on defect capture, rectification evidence and close-out. Structured inspection and sign-off programs are a VisiBuild strength.' },
    ],
  },
  {
    slug: 'cleanrun-iq-vs-defectwise',
    name: 'DefectWise',
    category: 'Defect-focused app',
    metaTitle: 'CleanRun IQ vs DefectWise — two defect tools compared',
    metaDescription:
      'Both CleanRun IQ and DefectWise focus on defects. Compare how they handle capture, subcontractor close-out and handover reporting for site teams.',
    hubSummary: 'A defect-focused app for tracking site issues through to resolution.',
    hubAngle: 'CleanRun IQ leans hard into fast capture, subcontractor close-out and clean handover reporting.',
    heroPara:
      'DefectWise and CleanRun IQ both focus on defects rather than full project management. The difference is emphasis: CleanRun IQ is built tightly around fast capture, subcontractor close-out and clean handover reporting.',
    shortAnswer:
      'Both tools are in the same category, so the decision comes down to fit. CleanRun IQ leans into speed on site, clear subcontractor assignment, photo evidence on every item and a handover report that is ready when you need it — with simple, focused pricing.',
    pickCleanRun: [
      'You want fast, photo-first defect capture on site',
      'You want clear subcontractor assignment and close-out evidence',
      'Handover reporting is a priority, not an afterthought',
      'You want simple, focused pricing',
    ],
    pickCompetitor: [
      'You are already invested in DefectWise and it suits your team',
      'Its specific workflow or pricing fits the way you work',
      'You prefer its approach to your projects',
    ],
    whatCompetitorIs:
      'A defect-focused app for logging and tracking site issues through to resolution — in the same broad category as CleanRun IQ rather than a full enterprise platform.',
    table: ['Defect-focused app', 'Teams wanting defect tracking', 'Core', 'Available', 'Core', 'Available', 'Available', 'Out of scope', 'Out of scope', 'Out of scope', 'Per-user / on enquiry', 'Days'],
    pricingNote:
      'Both are focused tools rather than enterprise platforms. CleanRun IQ keeps pricing simple and centred on the capture-to-handover workflow. Confirm current details on each site, as pricing changes.',
    faqs: [
      { q: 'How is CleanRun IQ different from DefectWise?', a: 'They are in the same category. CleanRun IQ emphasises fast on-site capture, clear subcontractor close-out and handover reporting, with simple pricing. The best fit depends on how your team works.' },
      { q: 'Which is better for subcontractor close-out?', a: 'CleanRun IQ is built around assigning items to trades and collecting rectification evidence before close-out, so subbies see only what they need to fix.' },
      { q: 'Do both produce handover reports?', a: 'CleanRun IQ treats the handover report as a core output — a clean PDF/Excel record of items and evidence. Check the current details of any alternative before deciding.' },
    ],
  },
];
