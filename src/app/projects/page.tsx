import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects - R. Eric Kiser',
  description: 'Explore my cybersecurity projects, courseware, and security initiatives.',
};

const projects = [
  {
    title: 'Advanced Ethical Hacking Courseware',
    description:
      'Comprehensive ethical hacking curriculum developed for Virginia Cyber Range, covering penetration testing methodologies, vulnerability assessment, and hands-on security labs utilized by numerous students.',
    tags: ['Education', 'Ethical Hacking', 'Curriculum Development', 'Security Training'],
    featured: true,
  },
  {
    title: 'Enterprise Security Program',
    description:
      'Led the development and implementation of comprehensive information security programs for manufacturing environments, including vulnerability management, incident response, and security awareness training.',
    tags: ['Security Management', 'Risk Assessment', 'Compliance', 'Policy Development'],
    featured: true,
  },
  {
    title: 'Attack Simulation Framework',
    description:
      'Designed and deployed enterprise attack simulation initiatives to identify vulnerabilities and demonstrate ROI of security investments through measurable risk reduction metrics.',
    tags: ['Penetration Testing', 'Red Team', 'Attack Simulation', 'Security Assessment'],
    featured: true,
  },
  {
    title: 'Incident Response Workflows',
    description:
      'Created standardized incident response workflow documentation and diagramming tools to improve team coordination and reduce response times during security incidents.',
    tags: ['Incident Response', 'Documentation', 'Process Improvement'],
    featured: false,
  },
  {
    title: 'PowerShell Security Scripts',
    description:
      'Collection of PowerShell scripts for security assessments, including port scanning utilities and system enumeration tools for penetration testing engagements.',
    tags: ['PowerShell', 'Automation', 'Security Tools'],
    github: 'https://github.com/ekiser-DSPCoder',
    featured: false,
  },
  {
    title: 'Security Awareness Training',
    description:
      'Developed and delivered security awareness training programs for organizations, helping employees recognize and respond to social engineering and phishing attacks.',
    tags: ['Training', 'Security Awareness', 'Phishing Prevention'],
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading mb-4">My Projects</h1>
          <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            A selection of cybersecurity initiatives, courseware, and security programs I&apos;ve
            developed throughout my career.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-8">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="card p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        aria-label="Live demo"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-primary-600 dark:text-primary-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-800/50 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-8">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.title} className="card p-6">
                <div className="flex items-start justify-between mb-3">
                  <svg
                    className="w-8 h-8 text-accent-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                        aria-label="Live demo"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-primary-100 dark:bg-primary-800/50 text-primary-600 dark:text-primary-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-primary-600 dark:text-primary-300 mb-4">
            Interested in security consulting or training?
          </p>
          <Link href="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
