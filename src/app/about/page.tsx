import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - R. Eric Kiser',
  description: 'Learn more about my background in cybersecurity, certifications, and experience.',
};

const skills = [
  { category: 'Security', items: ['Penetration Testing', 'Vulnerability Management', 'Incident Response', 'Risk Assessment'] },
  { category: 'Certifications', items: ['CISM', 'Ethical Hacking', 'Security Management', 'IT Security'] },
  { category: 'Tools', items: ['PowerShell', 'Network Security', 'SIEM', 'Attack Simulation'] },
  { category: 'Education', items: ['Courseware Development', 'Training Delivery', 'Curriculum Design', 'Mentoring'] },
];

const timeline = [
  {
    year: 'Present',
    title: 'Manager, IT Security - The Heritage Group',
    description: 'Leading information technology security initiatives and protecting organizational assets.',
  },
  {
    year: 'Previous',
    title: 'Manager, IT Security - Albemarle',
    description: 'Managed cybersecurity protocols within a manufacturing environment.',
  },
  {
    year: 'Education',
    title: 'Advanced Ethical Hacking Courseware Author - Virginia Cyber Range',
    description: 'Designed and developed ethical hacking curriculum utilized by numerous students.',
  },
  {
    year: 'Teaching',
    title: 'Course Instructor - Vanderbilt University',
    description: 'Taught cybersecurity courses and mentored students in information security.',
  },
];

export default function About() {
  return (
    <div className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 animate-float">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="section-heading mb-4">About Me</h1>
          <p className="text-lg text-purple-300/70 max-w-2xl mx-auto">
            A certified information security manager with over a decade of experience protecting
            organizations and educating security professionals.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="card p-8 animate-fade-in-left" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold text-purple-100 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              My Story
            </h2>
            <div className="space-y-4 text-purple-300/70">
              <p>
                I&apos;m a highly skilled Certified Information Security Manager (CISM) with over 10 years
                of experience in the cybersecurity field. My expertise spans network security, vulnerability
                management, penetration testing, and incident response.
              </p>
              <p>
                I hold a Master of Science from EC-Council University and a Bachelor of Science from
                Shippensburg University of Pennsylvania. My passion for security extends beyond protecting
                organizations—I&apos;m dedicated to educating the next generation of cybersecurity professionals.
              </p>
              <p>
                As an Advanced Ethical Hacking Courseware Author for Virginia Cyber Range and a Course
                Instructor at Vanderbilt University, I&apos;ve helped numerous students develop their
                security skills. I also share insights through my technical writing on Medium.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="card p-8 animate-fade-in-right" style={{ opacity: 0, animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold text-purple-100 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              Skills &amp; Technologies
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={skillGroup.category}>
                  <h3 className="font-semibold text-purple-200 mb-3">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-purple-300/70 flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-2 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
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
              <div key={item.year} className="relative pl-8 pb-8 last:pb-0 animate-fade-in-up" style={{ opacity: 0, animationDelay: `${0.2 + index * 0.15}s` }}>
                {/* Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500" />
                )}
                {/* Dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                {/* Content */}
                <div className="card p-6 ml-4">
                  <span className="text-sm font-semibold text-purple-400">{item.year}</span>
                  <h3 className="text-lg font-bold text-purple-100 mt-1">{item.title}</h3>
                  <p className="text-purple-300/70 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="section-heading text-center mb-12">What I Value</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center animate-float icon-animated">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-purple-100 mb-2 group-hover:text-white transition-colors">Integrity</h3>
              <p className="text-purple-300/70">
                Maintaining the highest ethical standards in security practices and education.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center animate-float icon-animated" style={{ animationDelay: '0.5s' }}>
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-purple-100 mb-2 group-hover:text-white transition-colors">Continuous Learning</h3>
              <p className="text-purple-300/70">
                Staying current with evolving threats and emerging security technologies.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center animate-float icon-animated" style={{ animationDelay: '1s' }}>
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-purple-100 mb-2 group-hover:text-white transition-colors">Community</h3>
              <p className="text-purple-300/70">
                Sharing knowledge and helping others grow in their security careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
