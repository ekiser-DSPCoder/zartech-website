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
    <div className="py-20 tech-bg circuit-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A certified information security manager with over a decade of experience protecting
            organizations and educating security professionals.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="card p-8 animate-fade-in-left" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              My Story
            </h2>
            <div className="space-y-4 text-blue-100">
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
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              Skills &amp; Technologies
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="font-semibold text-white mb-3">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-blue-100 flex items-center">
                        <span className="w-2 h-2 bg-white/60 rounded-full mr-2" />
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
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                {/* Content */}
                <div className="card p-6 ml-4">
                  <span className="text-sm font-semibold text-blue-200">{item.year}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-blue-100 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-20">
          <h2 className="section-heading text-center mb-12">Awards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center animate-float icon-animated">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Golden Governor&apos;s Award</h3>
              <p className="text-blue-200 text-sm">Three-time recipient</p>
            </div>
            <div className="card p-6 text-center animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center animate-float icon-animated" style={{ animationDelay: '0.3s' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">VA State Cybersecurity Grant</h3>
              <p className="text-blue-200 text-sm">Four-time educational grant recipient</p>
            </div>
            <div className="card p-6 text-center animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.3s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center animate-float icon-animated" style={{ animationDelay: '0.6s' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Smith Award</h3>
              <p className="text-blue-200 text-sm">Recipient</p>
            </div>
            <div className="card p-6 text-center animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.4s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center animate-float icon-animated" style={{ animationDelay: '0.9s' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">BBB Educational Grant</h3>
              <p className="text-blue-200 text-sm">Better Business Bureau recipient</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="section-heading text-center mb-12">What I Value</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center group animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.1s' }}>
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center animate-float icon-animated">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Integrity</h3>
              <p className="text-blue-100">
                Maintaining the highest ethical standards in security practices and education.
              </p>
            </div>
            <div className="card p-8 text-center group animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center animate-float icon-animated" style={{ animationDelay: '0.5s' }}>
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Continuous Learning</h3>
              <p className="text-blue-100">
                Staying current with evolving threats and emerging security technologies.
              </p>
            </div>
            <div className="card p-8 text-center group animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.3s' }}>
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center animate-float icon-animated" style={{ animationDelay: '1s' }}>
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Community</h3>
              <p className="text-blue-100">
                Sharing knowledge and helping others grow in their security careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
