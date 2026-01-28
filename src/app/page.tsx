import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center hero-section">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in-up mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/eric-kiser.jpeg"
                alt="R. Eric Kiser"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </div>
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">R. Eric Kiser</span>
            </h1>
          </div>
          <div className="animate-fade-in-up animation-delay-200" style={{ opacity: 0 }}>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Cybersecurity Leader &amp; Strategic Risk Advisor
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-300" style={{ opacity: 0 }}>
            <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
              Leading enterprise security programs, driving compliance initiatives, and shaping
              the future of cybersecurity through education and innovation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400" style={{ opacity: 0 }}>
            <Link href="/projects" className="btn-primary group">
              <span className="flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 tech-bg circuit-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="section-heading text-center mb-4">What I Do</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Protecting organizations and empowering security professionals
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Security */}
            <div className="card p-8 text-center group animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.1s' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center animate-float icon-animated">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Information Security</h3>
              <p className="text-blue-100">
                Protecting organizations with comprehensive security strategies, vulnerability management,
                and incident response.
              </p>
            </div>

            {/* Education */}
            <div className="card p-8 text-center group animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center animate-float icon-animated" style={{ animationDelay: '0.5s' }}>
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security Education</h3>
              <p className="text-blue-100">
                Developing ethical hacking courseware and training the next generation of cybersecurity
                professionals.
              </p>
            </div>

            {/* Writing */}
            <div className="card p-8 text-center group animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.3s' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center animate-float icon-animated" style={{ animationDelay: '1s' }}>
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Technical Writing</h3>
              <p className="text-blue-100">
                Sharing cybersecurity insights and knowledge through articles on Medium and
                industry publications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 tech-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Have a security challenge or want to collaborate? I&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
