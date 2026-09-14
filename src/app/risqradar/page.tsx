import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RisqRadar - Cyber Risk in Dollars, Not Guesswork',
  description:
    'RisqRadar turns controls, vulnerabilities, vendors, and audit posture into one financial model of loss. Monte Carlo CRQ, 14+ compliance frameworks, TPRM, and audit-ready evidence in a single platform.',
};

const SITE_URL = 'https://www.risqradar.com';

const pillars = [
  {
    number: '01',
    eyebrow: 'Quantify',
    title: 'Loss, modeled, not colored in',
    summary: 'A real quantitative engine, not a scored spreadsheet.',
    points: [
      'Monte Carlo loss-exceedance simulation that puts a dollar figure and a probability on every scenario',
      'Capture actual loss events and backtest the model against them',
      'Estimator calibration and confidence surfaced next to each figure',
      'Risk appetite and tolerance with breach alerts the moment a line is crossed',
    ],
    gradient: 'from-orange-500 to-red-600',
  },
  {
    number: '02',
    eyebrow: 'Comply',
    title: 'Audit-ready, continuously',
    summary: 'One control engine across cyber, privacy, and industrial-safety regimes.',
    points: [
      'NIST CSF, ISO 27001, DORA, NIS2, GDPR, HIPAA, OSHA PSM, EPA RMP, PHMSA, DOT, DOE, USCG and more',
      'Coverage and gap views, evidence linking, and PBC request tracking',
      'Type-II observation-window tracking computed from your validation history',
      'A shareable Trust Center and per-auditor access portals',
    ],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    number: '03',
    eyebrow: 'Govern',
    title: 'Exceptions with a shelf life',
    summary: 'Waivers that are time-boxed, attested, and re-checked automatically.',
    points: [
      'Policies mapped to the controls they satisfy, counted as evidence automatically',
      'Compensating controls that actually move the modeled likelihood',
      'Security-exception register with dual attestation and segregation of duties',
      'Automated recertification, so every exception is renewed or lapsed on schedule',
    ],
    gradient: 'from-green-500 to-teal-600',
  },
  {
    number: '04',
    eyebrow: 'Watch',
    title: 'Third parties and change, tracked',
    summary: 'The edges of your risk, monitored without extra headcount.',
    points: [
      'Vendor register with on-demand external security scans and outbound questionnaires',
      'New-technology risk assessments, with an ISO 42001 / NIST AI RMF addendum for AI',
      'A regulatory-change monitor that flags a framework when the rules move',
      'Jira and ServiceNow ticketing and a unified notification center, built in',
    ],
    gradient: 'from-purple-500 to-pink-600',
  },
];

const qrmFactors = [
  { code: 'TP', name: 'Threat Probability', description: 'How often attackers try' },
  { code: 'RR', name: 'Realization Rate', description: 'How often they succeed' },
  { code: 'IS', name: 'Impact Severity', description: 'Direct costs when they do' },
  { code: 'CI', name: 'Cascading Impact', description: 'Secondary costs that follow' },
  { code: 'IM', name: 'Impact Multiplier', description: 'Probability of those secondaries' },
];

const differentiators = [
  {
    symbol: '$',
    title: 'Dollars, not scores',
    description:
      'A genuine actuarial-style engine (loss exceedance, calibration, backtesting), so risk is a number you can budget against, not a color you argue about.',
  },
  {
    symbol: '∑',
    title: 'Breadth in one engine',
    description:
      'Cyber, privacy, and industrial-safety frameworks share one model. Map a control once; it counts everywhere it applies, across every business unit.',
  },
  {
    symbol: '▣',
    title: 'Evidence-grade access',
    description:
      'A database-enforced auditor role confines an outside reviewer to exactly the assessment you grant: read-only, and provable, not just hidden in the UI.',
  },
  {
    symbol: '⛨',
    title: 'Secure by construction',
    description:
      'Per-tenant isolation and envelope-encrypted connector credentials. Bring your own keys for external scanners, so your secrets stay yours.',
  },
];

const frameworks = [
  'NIST CSF',
  'NIST 800-53',
  'NIST 800-30',
  'ISO 27001',
  'ISO 42001',
  'NIST AI RMF',
  'SOC 2',
  'Trust Controls Baseline',
  'DORA',
  'NIS2',
  'GDPR',
  'HIPAA',
  'OSHA PSM',
  'EPA RMP',
  'PHMSA HMR',
  'DOT FMCSA',
  'DOE 851',
  'USCG 33 CFR',
];

const modules = [
  {
    group: 'Inventory',
    items: ['Applications', 'Assets', 'Service Accounts', 'App Registrations', 'Copilot Agents', 'Agent Governance'],
  },
  {
    group: 'Risk Quantification',
    items: ['Risk Scenarios', 'Controls', 'Key-Person Risk', 'Portfolio', 'Loss Events', 'Calibration'],
  },
  {
    group: 'Findings & Treatment',
    items: ['Vulnerabilities', 'Risk Register', 'Remediation & POA&M', 'Risk Acceptance', 'Control Exceptions'],
  },
  {
    group: 'Third Parties',
    items: ['Vendors', 'Contract Portfolio', 'Contract Cybersecurity Review', 'Breach Monitor'],
  },
  {
    group: 'Compliance',
    items: ['Audit Readiness', 'Policies', 'Document Library', 'Risk Assessments', 'Access Review'],
  },
  {
    group: 'Resilience & Insights',
    items: ['Business Impact', 'Continuity', 'Incidents', 'Analytics', 'Alerts', 'AI ROI'],
  },
];

const integrations = [
  { name: 'Microsoft Entra ID', detail: 'App registrations, service principals, group attestation' },
  { name: 'Microsoft Graph & SharePoint', detail: 'Policy search, attach, and approved-version pinning' },
  { name: 'Tenable, Qualys, Rapid7', detail: 'Vulnerability ingestion mapped to controls and scenarios' },
  { name: 'CISA KEV & Shodan', detail: 'Known-exploited enrichment and external exposure checks' },
  { name: 'Jira & ServiceNow', detail: 'Two-way remediation ticketing with deep links back' },
  { name: 'SIEM egress', detail: 'Splunk and Sentinel-compatible event and agent-metric streams' },
];

const aiFeatures = [
  {
    title: 'AI Calibration Coach',
    description:
      'Analyzes calibration performance, detects cognitive biases (anchoring, overconfidence, availability), and prescribes exercises that improve estimation accuracy.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'AI Estimation Assistant',
    description:
      'Available on every input field. Industry benchmarks, range validation, and decomposition help, referencing sources like Verizon DBIR and IBM/Ponemon.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'AI Scenario Generator',
    description:
      'Reads your organization profile and proposes relevant risk scenarios with pre-populated QRM estimates, cutting time-to-first-number from weeks to minutes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'AI Report Narrator',
    description:
      'Generates board-ready talking points, executive summaries, and Q&A prep. Pick the audience (Board, Executive, Technical, Audit) and get tailored language.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'AI Vulnerability Enrichment',
    description:
      'Turns a raw scanner finding into a modeled impact: likely exploit path, affected controls, and the QRM factors it moves, instead of another CVSS number.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
      </svg>
    ),
  },
  {
    title: 'AI Compliance Gap Summary',
    description:
      'Reads coverage across a framework and writes the gap narrative: what is missing, what evidence would close it, and what it is worth in risk reduction.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const audiences = [
  {
    role: 'Risk officers',
    description: 'Quantified exposure to take to the board, and the ROI case for every control investment.',
  },
  {
    role: 'Compliance & audit',
    description: 'Continuous evidence, coverage and gap tracking, and auditor access that is safe to hand out.',
  },
  {
    role: 'IT & security',
    description: 'Vulnerabilities, controls, and third-party posture tied straight to loss and to the frameworks they satisfy.',
  },
  {
    role: 'Business units',
    description: 'A simple intake for new-technology requests, with no login, just a secure link.',
  },
];

export default function RisqRadar() {
  return (
    <div className="tech-bg circuit-overlay">
      {/* Hero Section */}
      <section className="pt-14 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-heading mb-3">RisqRadar</h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
              Cyber risk in dollars, not guesswork.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-7">
              RisqRadar turns your controls, vulnerabilities, vendors, and audit posture into one
              financial model of loss, so you can tell the board how much risk you carry, which fix
              buys the most reduction per dollar, and prove it to an auditor.
            </p>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">
                Explore RisqRadar
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
            <p className="mt-5 text-sm text-gray-500 font-mono">
              CRQ engine · 14+ frameworks · TPRM · audit-ready
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-6 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Heat maps don&apos;t survive a board meeting.
            </h2>
            <p className="text-blue-100 mb-4">
              A red-amber-green grid can&apos;t answer the only questions leadership actually asks:
              How much could this cost us? Which control spend reduces the most risk? Are we ready
              if the auditor shows up Monday?
            </p>
            <p className="text-blue-100">
              RisqRadar answers all three from a single model:{' '}
              <strong className="text-white">quantified in currency, backed by evidence, and
              defensible line by line.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-4">One Platform, Four Jobs</h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Quantify the risk. Prove the compliance. Govern the exceptions. Watch the edges. Every
            module feeds the same graph, so evidence, controls, and dollars are reused across the
            business, never re-entered.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="card p-8">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${pillar.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">{pillar.number}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-200">
                      {pillar.eyebrow}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{pillar.title}</h3>
                    <p className="text-blue-200 mb-4">{pillar.summary}</p>
                    <ul className="space-y-2 text-blue-100">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="text-green-400 flex-shrink-0">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QRM Methodology */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              The QRM™ Methodology
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              <div className="p-4 rounded-lg bg-white/10 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">NIST 800-30</h3>
                <p className="text-blue-200 text-sm">Federal standard for risk assessment</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">Hubbard Calibration</h3>
                <p className="text-blue-200 text-sm">Proven techniques to fix overconfidence</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">Monte Carlo</h3>
                <p className="text-blue-200 text-sm">Loss-exceedance modeling of uncertainty</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">Backtested</h3>
                <p className="text-blue-200 text-sm">Real loss events checked against the model</p>
              </div>
            </div>

            {/* Five Factors */}
            <h3 className="text-xl font-bold text-white mb-6 text-center">The Five Factors of QRM</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 px-4 text-white font-semibold">Factor</th>
                    <th className="py-3 px-4 text-white font-semibold">What It Measures</th>
                  </tr>
                </thead>
                <tbody>
                  {qrmFactors.map((factor) => (
                    <tr key={factor.code} className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-2">
                          <span className="px-2 py-1 bg-white/20 rounded text-white font-mono text-sm">{factor.code}</span>
                          <span className="text-blue-100">{factor.name}</span>
                        </span>
                      </td>
                      <td className="py-3 px-4 text-blue-200">{factor.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
              <h4 className="text-lg font-bold text-white mb-2">
                The Result: Annualized Loss Exposure
              </h4>
              <p className="text-blue-100 font-mono text-sm mb-2">
                ALE = (TP × RR) × (IS + (CI × IM))
              </p>
              <p className="text-blue-100">
                Run through Monte Carlo simulation, it produces a loss-exceedance curve: the
                expected annual loss and the 1-in-20-year tail, instead of a single flattering
                number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why RisqRadar */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-4">Why RisqRadar</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Built to be believed by the board and the auditor.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">{item.symbol}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-100">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-4">Frameworks &amp; Regimes, One Control Library</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Map a control once. It counts everywhere it applies: cyber, privacy, and
            industrial-safety regimes alike.
          </p>

          <div className="card p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {frameworks.map((framework) => (
                <span
                  key={framework}
                  className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-blue-100 text-sm font-medium"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-4">What&apos;s Inside</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Every module writes to the same risk graph. An asset, a control, a policy, or a vendor
            is entered once and reused everywhere it matters.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((group) => (
              <div key={group.group} className="card p-6">
                <h3 className="text-lg font-bold text-white mb-4">{group.group}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-blue-100 text-sm flex items-center">
                      <span className="w-2 h-2 bg-white/60 rounded-full mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-4">AI That Guides, Not Replaces</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Benchmarks, validation, and narrative at every step, but never a single &quot;correct&quot;
            answer handed down. You remain in control of the estimate.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature) => (
              <div key={feature.title} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-4">Connected to the Tools You Run</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Connector credentials are envelope-encrypted per tenant, and you can bring your own keys
            for external scanners.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => (
              <div key={integration.name} className="card p-6">
                <h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3>
                <p className="text-blue-100 text-sm">{integration.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-4">Who It&apos;s For</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Made for complex, multi-entity organizations. When you&apos;re accountable for many
            business units, many frameworks, and many vendors, RisqRadar puts the whole picture,
            and its price tag, in one place.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => (
              <div key={audience.role} className="card p-6">
                <h3 className="text-lg font-bold text-white mb-2">{audience.role}</h3>
                <p className="text-blue-100 text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Backing */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-10">Trusted Methodology</h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="card p-8">
              <h3 className="text-lg font-bold text-white mb-4">Based on Proven Research</h3>
              <blockquote className="border-l-4 border-indigo-400 pl-4 text-blue-100 italic mb-4">
                &quot;When people give 90% confidence intervals, they typically contain the true
                answer only 50-60% of the time.&quot;
              </blockquote>
              <p className="text-blue-200 text-sm">Douglas Hubbard, &quot;How to Measure Anything&quot;</p>
            </div>

            <div className="card p-8">
              <h3 className="text-lg font-bold text-white mb-4">NIST Aligned</h3>
              <p className="text-blue-100 mb-4">
                QRM maps directly to NIST Special Publication 800-30, the federal standard for
                conducting risk assessments.
              </p>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>• Regulatory alignment</li>
                <li>• Audit defensibility</li>
                <li>• Framework compatibility</li>
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="text-lg font-bold text-white mb-4">Industry Benchmarks</h3>
              <p className="text-blue-100 mb-4">The AI Estimation Assistant references:</p>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>• Verizon Data Breach Investigations Report</li>
                <li>• IBM/Ponemon Cost of a Data Breach</li>
                <li>• Coveware Ransomware Reports</li>
                <li>• Mandiant M-Trends</li>
                <li>• HHS HIPAA Penalty Database</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stop reporting risk in colors.
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Book a walkthrough and we&apos;ll model a scenario from your own environment: a
              loss-exceedance curve, a control-ROI case, and an audit-readiness snapshot in one
              session.
            </p>
            <a
              href={`${SITE_URL}/contact`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <div className="py-8 text-center relative z-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
