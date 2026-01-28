import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications - R. Eric Kiser',
  description: 'Read my articles on Medium covering cybersecurity, penetration testing, and information security.',
};

const publications = [
  {
    title: 'Attending CruiseCon 2025',
    description:
      'A cybersecurity review of Ira Winkler\'s latest venture. An incredible experience that exceeded expectations, focusing on real conversations and meaningful connections within the IT security community.',
    date: '2025-02-15',
    readTime: '8 min read',
    tags: ['Cybersecurity', 'Conferences', 'Networking'],
    url: 'https://medium.com/@ekiser_48014/attending-cruisecon-2025-b059729be6e9',
  },
  {
    title: 'PowerShell System Port Scans',
    description:
      'Exploring PowerShell techniques for penetration testing, including how organizations can detect and defend against port scanning activities with endpoint security measures.',
    date: '2024-06-10',
    readTime: '10 min read',
    tags: ['PowerShell', 'Penetration Testing', 'Security'],
    url: 'https://medium.com/@ekiser_48014/powershell-system-port-scans-d9299a9e8962',
  },
  {
    title: 'The ROI On Enterprise Attack Simulation',
    description:
      'Discussing how penetration testing is increasingly recognized not just as a cost but as a strategic investment that can yield substantial returns for organizations.',
    date: '2024-04-20',
    readTime: '12 min read',
    tags: ['Attack Simulation', 'ROI', 'Enterprise Security'],
    url: 'https://medium.com/@ekiser_48014/the-roi-one-enterprise-attack-simulation-6c8bbf5083da',
  },
  {
    title: 'Is Cybersecurity Recession Proof?',
    description:
      'Analyzing whether cybersecurity careers remain stable during economic downturns. While some organizations may cut spending, demand for security professionals persists across the board.',
    date: '2024-02-15',
    readTime: '7 min read',
    tags: ['Careers', 'Cybersecurity', 'Industry Trends'],
    url: 'https://medium.com/@ekiser_48014/is-cybersecurity-recession-proof-b5af61690508',
  },
  {
    title: 'Cyber Incident Response Workflow Diagraming Tools',
    description:
      'A comprehensive review of tools and techniques for documenting and visualizing incident response workflows to improve team coordination and response times.',
    date: '2023-11-08',
    readTime: '9 min read',
    tags: ['Incident Response', 'Tools', 'Workflow'],
    url: 'https://medium.com/@ekiser_48014/cyber-incident-response-workflow-diagraming-tools-7ca4a2445bb2',
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Publications() {
  return (
    <div className="py-20 tech-bg circuit-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading mb-4">Publications</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Articles I&apos;ve written on Medium covering cybersecurity, penetration testing,
            incident response, and industry insights.
          </p>
        </div>

        {/* Medium Link */}
        <div className="flex justify-center mb-12 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
          <a
            href="https://medium.com/@ekiser_48014"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              Follow on Medium
            </span>
          </a>
        </div>

        {/* Publications Grid */}
        <div className="grid gap-8">
          {publications.map((publication, index) => (
            <article key={publication.title} className="card p-8 group animate-fade-in-up" style={{ opacity: 0, animationDelay: `${0.3 + index * 0.1}s` }}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 animate-float icon-animated" style={{ animationDelay: `${index * 0.2}s` }}>
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-blue-200">
                      <time dateTime={publication.date}>{formatDate(publication.date)}</time>
                      <span className="w-1 h-1 bg-blue-300 rounded-full" />
                      <span>{publication.readTime}</span>
                    </div>
                  </div>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link"
                  >
                    <h2 className="text-xl lg:text-2xl font-bold text-white group-hover/link:text-blue-200 transition-colors mb-3">
                      {publication.title}
                    </h2>
                  </a>
                  <p className="text-blue-100 mb-4">
                    {publication.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-white/20 text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 font-medium transition-all group/btn"
                >
                  Read Article
                  <svg
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.8s' }}>
          <div className="card p-8 lg:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center animate-float">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Follow me on Medium to get notified when I publish new articles about cybersecurity,
              penetration testing, and information security.
            </p>
            <a
              href="https://medium.com/@ekiser_48014"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Follow on Medium
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
