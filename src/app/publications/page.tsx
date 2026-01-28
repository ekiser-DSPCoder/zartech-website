import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications - Zartech',
  description: 'Read my articles and stories on Medium covering software development, technology, and more.',
};

const publications = [
  {
    title: 'Building Scalable Applications with Next.js 14',
    description:
      'A comprehensive guide to building production-ready applications using the latest features of Next.js, including the App Router and Server Components.',
    date: '2024-01-15',
    readTime: '12 min read',
    tags: ['Next.js', 'React', 'Web Development'],
    url: 'https://medium.com',
  },
  {
    title: 'The Art of Clean Code: Best Practices for Maintainable Software',
    description:
      'Exploring principles and patterns that help create code that is easy to read, understand, and maintain over time.',
    date: '2023-12-20',
    readTime: '8 min read',
    tags: ['Clean Code', 'Best Practices', 'Software Engineering'],
    url: 'https://medium.com',
  },
  {
    title: 'Understanding TypeScript Generics: A Practical Guide',
    description:
      'Demystifying TypeScript generics with real-world examples and use cases that you can apply in your projects today.',
    date: '2023-11-10',
    readTime: '10 min read',
    tags: ['TypeScript', 'JavaScript', 'Tutorial'],
    url: 'https://medium.com',
  },
  {
    title: 'From Monolith to Microservices: Lessons Learned',
    description:
      'Sharing insights and challenges from migrating a large monolithic application to a microservices architecture.',
    date: '2023-10-05',
    readTime: '15 min read',
    tags: ['Architecture', 'Microservices', 'DevOps'],
    url: 'https://medium.com',
  },
  {
    title: 'Mastering Git: Advanced Workflows for Teams',
    description:
      'Going beyond the basics of Git to explore advanced workflows, branching strategies, and collaboration techniques.',
    date: '2023-09-18',
    readTime: '11 min read',
    tags: ['Git', 'DevOps', 'Collaboration'],
    url: 'https://medium.com',
  },
  {
    title: 'Introduction to Testing in Modern JavaScript',
    description:
      'A beginner-friendly guide to testing JavaScript applications using Jest, React Testing Library, and Cypress.',
    date: '2023-08-25',
    readTime: '9 min read',
    tags: ['Testing', 'JavaScript', 'Tutorial'],
    url: 'https://medium.com',
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
            Articles and stories I&apos;ve written on Medium. I write about software development,
            technology, and lessons learned along the way.
          </p>
        </div>

        {/* Medium Link */}
        <div className="flex justify-center mb-12">
          <a
            href="https://medium.com/@your-username"
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
              Follow me on Medium to get notified when I publish new articles about software
              development, technology, and more.
            </p>
            <a
              href="https://medium.com/@your-username"
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
