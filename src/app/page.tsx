import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary-900 dark:text-white">Hi, I&apos;m </span>
            <span className="gradient-text">R. Eric Kiser</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-300 mb-8 max-w-2xl mx-auto">
            Cybersecurity Professional &amp; Technical Writer
          </p>
          <p className="text-lg text-primary-500 dark:text-primary-400 mb-12 max-w-xl mx-auto">
            Certified Information Security Manager with 10+ years of experience protecting organizations
            and educating the next generation of security professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white/50 dark:bg-primary-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Security */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-4">
                Information Security
              </h3>
              <p className="text-primary-600 dark:text-primary-300">
                Protecting organizations with comprehensive security strategies, vulnerability management,
                and incident response.
              </p>
            </div>

            {/* Education */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-4">
                Security Education
              </h3>
              <p className="text-primary-600 dark:text-primary-300">
                Developing ethical hacking courseware and training the next generation of cybersecurity
                professionals.
              </p>
            </div>

            {/* Writing */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-4">
                Technical Writing
              </h3>
              <p className="text-primary-600 dark:text-primary-300">
                Sharing cybersecurity insights and knowledge through articles on Medium and
                industry publications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-gradient-primary p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-700 bg-white rounded-lg shadow-lg hover:bg-primary-50 transition-all duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
