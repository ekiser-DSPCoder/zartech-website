import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Risk Radar - Zartech',
  description: 'Risk Radar - Enterprise risk quantification and security assessment tool by Zartech.',
};

export default function RiskRadar() {
  return (
    <div className="py-20 tech-bg circuit-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading mb-4">Risk Radar</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise risk quantification and security assessment platform
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 lg:p-12 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center animate-float">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Quantify Your Security Risk</h2>
                <p className="text-blue-200">Data-driven risk assessment for informed decisions</p>
              </div>
            </div>

            <div className="space-y-6 text-blue-100 mb-10">
              <p>
                Risk Radar is a comprehensive risk quantification tool designed to help organizations
                understand, measure, and prioritize their cybersecurity risks using industry-standard
                methodologies and data-driven analysis.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-white/10">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Risk Quantification
                  </h3>
                  <p className="text-sm">
                    Convert qualitative risk assessments into quantifiable metrics for better
                    decision-making and resource allocation.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white/10">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    ROI Analysis
                  </h3>
                  <p className="text-sm">
                    Demonstrate the return on investment for security initiatives with
                    clear financial impact projections.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white/10">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Threat Modeling
                  </h3>
                  <p className="text-sm">
                    Identify and prioritize threats based on likelihood and potential
                    business impact to your organization.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white/10">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Executive Reporting
                  </h3>
                  <p className="text-sm">
                    Generate clear, actionable reports for stakeholders and leadership
                    to support security investment decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://riskradar.zartech.info"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  Launch Risk Radar
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="mt-12 text-center">
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
    </div>
  );
}
