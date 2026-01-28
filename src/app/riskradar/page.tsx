import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Risq Radar - Calibration-First Risk Quantification',
  description: 'RiskRadar: Enterprise risk quantification built on QRM™. NIST 800-30 aligned, AI-powered, with mandatory calibration training. Get defensible dollar amounts, not heat maps.',
};

const qrmFactors = [
  { code: 'TP', name: 'Threat Probability', description: 'How often attackers try' },
  { code: 'ASR', name: 'Attack Success Rate', description: 'How often they succeed' },
  { code: 'IS', name: 'Impact Severity', description: 'Direct costs when they do' },
  { code: 'CI', name: 'Cascading Impact', description: 'Secondary costs that follow' },
  { code: 'IM', name: 'Impact Multiplier', description: 'Probability of those secondaries' },
];

const aiFeatures = [
  {
    title: 'AI Calibration Coach',
    description: 'Analyzes your calibration performance, detects cognitive biases (anchoring, overconfidence, availability), and provides personalized exercises to improve your estimation accuracy.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'AI Estimation Assistant',
    description: 'Available on every input field. Get industry benchmarks, validation, and decomposition help. References authoritative sources like Verizon DBIR and IBM Ponemon.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'AI Scenario Generator',
    description: 'Analyzes your organization profile and recommends relevant risk scenarios with pre-populated QRM estimates. Accelerates time-to-value from weeks to minutes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'AI Report Narrator',
    description: 'Generates board-ready talking points, executive summaries, and Q&A preparation. Select your audience (Board, Executive, Technical, Audit) and get tailored content.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'AI Question Generator',
    description: 'Creates fresh calibration questions on demand. You\'ll never see the same question twice during annual recertification.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['3 risk scenarios', 'Basic calibration training', 'Limited AI assistance', '1 user'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    features: ['Unlimited scenarios', 'Full AI Calibration Coach', 'Full AI Estimation Assistant', 'AI Scenario Generator', 'AI Report Narrator', 'Certification program', '5 team members'],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Everything in Professional', 'Unlimited team members', 'SSO/SAML', 'API access', 'Custom integrations', 'Dedicated support'],
    cta: 'Contact Sales',
    featured: false,
  },
];

export default function RiskRadar() {
  return (
    <div className="tech-bg circuit-overlay">
      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="section-heading mb-4">Risq Radar</h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Calibration-First Risk Quantification
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Built on QRM™ (Quantified Risk Model) — Get defensible dollar amounts your board can act on. Not &quot;high risk.&quot; Not a heat map. A number.
            </p>
            <a
              href="https://riskradar.zartech.info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">
                Launch Risq Radar
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* QRM Methodology Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              The QRM™ Methodology
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                <p className="text-blue-200 text-sm">Statistical modeling of uncertainty</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1">AI-Powered</h3>
                <p className="text-blue-200 text-sm">Benchmarks and guidance at every step</p>
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
              <h4 className="text-lg font-bold text-white mb-2">The Result: Annual Loss Expectancy (ALE)</h4>
              <p className="text-blue-100">A defensible dollar amount your board can act on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">What Makes RiskRadar Different</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Calibration Is Mandatory</h3>
                  <p className="text-blue-100 mb-4">
                    Other tools let you input estimates and run simulations. Garbage in, garbage out.
                  </p>
                  <p className="text-blue-100">
                    RiskRadar <strong className="text-white">requires calibration training</strong> before you create risk assessments. Our AI Coach detects cognitive biases and helps you give estimates that match your actual accuracy.
                  </p>
                  <p className="mt-4 text-green-300 font-medium">
                    Result: When you say 90% confident, you&apos;re actually right 90% of the time.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI That Guides, Not Replaces</h3>
                  <p className="text-blue-100 mb-4">The AI Estimation Assistant provides:</p>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      Industry benchmarks from Verizon DBIR, IBM Ponemon, and more
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      Decomposition help to break complex estimates into simpler parts
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      Validation to flag ranges that seem too narrow or wide
                    </li>
                  </ul>
                  <p className="mt-4 text-blue-200">But it never gives you a single &quot;correct&quot; answer. <strong className="text-white">You remain in control.</strong></p>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">NIST 800-30 Alignment</h3>
                  <p className="text-blue-100 mb-4">
                    QRM explicitly maps to NIST Special Publication 800-30. This means:
                  </p>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      Federal framework compatibility
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      Audit defensibility
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      Works with NIST CSF and 800-53
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Actually Affordable</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm mt-4">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="py-2 text-left text-blue-200"></th>
                          <th className="py-2 text-left text-blue-200">Enterprise CRQ</th>
                          <th className="py-2 text-left text-white font-bold">RiskRadar</th>
                        </tr>
                      </thead>
                      <tbody className="text-blue-100">
                        <tr className="border-b border-white/10">
                          <td className="py-2">Annual Cost</td>
                          <td className="py-2">$50K - $200K</td>
                          <td className="py-2 text-green-300 font-semibold">$99/month</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2">Implementation</td>
                          <td className="py-2">3-6 months</td>
                          <td className="py-2 text-green-300 font-semibold">30 minutes</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2">Consultants</td>
                          <td className="py-2">Required</td>
                          <td className="py-2 text-green-300 font-semibold">No</td>
                        </tr>
                        <tr>
                          <td className="py-2">Calibration</td>
                          <td className="py-2">External ($5K+)</td>
                          <td className="py-2 text-green-300 font-semibold">Built-in</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-4">AI-Powered Features</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Intelligent assistance at every step of your risk quantification journey
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

      {/* Social Proof */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Trusted Methodology</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-lg font-bold text-white mb-4">Based on Proven Research</h3>
              <blockquote className="border-l-4 border-indigo-400 pl-4 text-blue-100 italic mb-4">
                &quot;When people give 90% confidence intervals, they typically contain the true answer only 50-60% of the time.&quot;
              </blockquote>
              <p className="text-blue-200 text-sm">— Douglas Hubbard, &quot;How to Measure Anything&quot;</p>
            </div>

            <div className="card p-8">
              <h3 className="text-lg font-bold text-white mb-4">NIST Aligned</h3>
              <p className="text-blue-100 mb-4">
                QRM maps directly to NIST 800-30 Rev. 1, the federal standard for conducting risk assessments.
              </p>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>• Regulatory alignment</li>
                <li>• Audit defensibility</li>
                <li>• Framework compatibility</li>
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="text-lg font-bold text-white mb-4">Industry Benchmarks</h3>
              <p className="text-blue-100 mb-4">AI Estimation Assistant references:</p>
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

      {/* Pricing */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-center mb-12">Start free, upgrade when you&apos;re ready</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`card p-8 ${plan.featured ? 'ring-2 ring-white/50 scale-105' : ''}`}>
                {plan.featured && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white text-center mb-2">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-blue-200">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-blue-100 text-sm">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://riskradar.zartech.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.featured
                      ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Quantify Your Risk?
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Stop guessing with heat maps. Start making data-driven security decisions with defensible numbers.
            </p>
            <a
              href="https://riskradar.zartech.info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Launch Risq Radar Free
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
