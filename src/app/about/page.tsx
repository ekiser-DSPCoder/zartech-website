import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Zartech',
  description: 'Learn more about my background, skills, and experience.',
};

const skills = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Go'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
];

const timeline = [
  {
    year: '2024',
    title: 'Senior Developer',
    description: 'Leading development of scalable web applications and mentoring junior developers.',
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    description: 'Built end-to-end solutions for various clients across different industries.',
  },
  {
    year: '2020',
    title: 'Started Technical Writing',
    description: 'Began sharing knowledge through articles on Medium and technical documentation.',
  },
  {
    year: '2018',
    title: 'Started Coding Journey',
    description: 'Discovered passion for programming and began learning software development.',
  },
];

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading mb-4">About Me</h1>
          <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            A passionate developer and writer dedicated to building great software and sharing
            knowledge.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-6">
              My Story
            </h2>
            <div className="space-y-4 text-primary-600 dark:text-primary-300">
              <p>
                I&apos;m a software developer with a passion for creating elegant solutions to
                complex problems. My journey in tech started with curiosity and has evolved into a
                fulfilling career building applications that make a difference.
              </p>
              <p>
                Beyond coding, I enjoy sharing my knowledge through technical writing. I believe
                that teaching is one of the best ways to deepen understanding and contribute to the
                developer community.
              </p>
              <p>
                When I&apos;m not coding or writing, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good book.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-6">
              Skills &amp; Technologies
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="font-semibold text-accent-600 dark:text-accent-400 mb-3">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-primary-600 dark:text-primary-300 flex items-center"
                      >
                        <span className="w-2 h-2 bg-gradient-primary rounded-full mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="section-heading text-center mb-12">My Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative pl-8 pb-8 last:pb-0">
                {/* Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />
                )}
                {/* Dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                {/* Content */}
                <div className="card p-6 ml-4">
                  <span className="text-sm font-semibold text-accent-600 dark:text-accent-400">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-primary-900 dark:text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-300 mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="section-heading text-center mb-12">What I Value</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-800/50 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-600 dark:text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary-900 dark:text-white mb-2">Quality</h3>
              <p className="text-primary-600 dark:text-primary-300">
                Writing clean, maintainable code that stands the test of time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-800/50 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-600 dark:text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary-900 dark:text-white mb-2">Learning</h3>
              <p className="text-primary-600 dark:text-primary-300">
                Continuously growing and staying current with new technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-800/50 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-600 dark:text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary-900 dark:text-white mb-2">Community</h3>
              <p className="text-primary-600 dark:text-primary-300">
                Sharing knowledge and helping others grow in their careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
