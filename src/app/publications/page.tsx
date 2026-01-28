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
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading mb-4">Publications</h1>
          <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            Articles I&apos;ve written on Medium covering cybersecurity, penetration testing,
            incident response, and industry insights.
          </p>
        </div>

        {/* Medium Link */}
        <div className="flex justify-center mb-12">
          <a
            href="https://medium.com/@ekiser_48014"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#000000] text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
            Follow on Medium
          </a>
        </div>

        {/* Publications Grid */}
        <div className="grid gap-8">
          {publications.map((publication) => (
            <article key={publication.title} className="card p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-sm text-primary-500 dark:text-primary-400 mb-3">
                    <time dateTime={publication.date}>{formatDate(publication.date)}</time>
                    <span>&middot;</span>
                    <span>{publication.readTime}</span>
                  </div>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h2 className="text-xl lg:text-2xl font-bold text-primary-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors mb-3">
                      {publication.title}
                    </h2>
                  </a>
                  <p className="text-primary-600 dark:text-primary-300 mb-4">
                    {publication.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-800/50 text-primary-700 dark:text-primary-300 rounded-full"
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
                  className="flex-shrink-0 inline-flex items-center gap-2 text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors"
                >
                  Read Article
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16">
          <div className="card bg-gradient-primary p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-primary-100 mb-6 max-w-xl mx-auto">
              Follow me on Medium to get notified when I publish new articles about cybersecurity,
              penetration testing, and information security.
            </p>
            <a
              href="https://medium.com/@ekiser_48014"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-700 bg-white rounded-lg shadow-lg hover:bg-primary-50 transition-all duration-300"
            >
              Follow on Medium
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
