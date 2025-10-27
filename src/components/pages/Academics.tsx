'use client';

import { type ReactNode } from 'react';
import { m } from 'framer-motion';
import { Award, Calendar, GraduationCap, BookOpen, ArrowRight, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface ExtraSection {
  title: string;
  items: string[];
  accent?: 'cyan' | 'green' | 'orange';
}

interface Education {
  title: string;
  organization: string;
  description: string;
  period: string;
  icon?: ReactNode;
  type: 'degree' | 'postgrad'| 'School' | 'certification';
  verificationLink?: string;
  credentialId?: string;
  status?: 'paused' | 'in-progress'| 'completed' | 'coming-soon';
  extraSections?: ExtraSection[];
}

const educationData: Education[] = [
  // Academic Degrees
  {
    title: 'Bachelor of Technology- Computer Science & Engineering',
    organization: 'Dr. APJ Abdul Kalam Technical University',
    description: 'Focused on core concepts of computing, programming, and cybersecurity.Developed strong foundations in data structures, algorithms, networking, and operating systems, along with hands-on experience in Python, web technologies, and security fundamentals. Gained exposure to software development, ethical hacking, and system analysis, building a problem-solving mindset essential for the cybersecurity field.',
    period: '2021 - 2025 ',
    icon: '💻',
    type: 'degree',
    extraSections: [
      {
        title: 'Mental Health Detection using AI Chatbot.',
        items: ['The project aimed at researching about different ML models such as Random Forest and SVM for detecting mental health problems.'],
        accent: 'cyan',
      },
    ],
  },
  // {
  //   title: 'Bachelor of Science in Physics',
  //   organization: 'Massachusetts Institute of Technology (MIT)',
  //   description: 'Comprehensive physics education with emphasis on theoretical foundations, quantum mechanics, statistical physics, and computational modeling. Strong mathematical and analytical training applicable to cybersecurity threat analysis.',
  //   period: '2016 - 2022',
  //   icon: '⚛️',
  //   type: 'degree',
  //   extraSections: [
  //     {
  //       title: 'Research Projects',
  //       items: [
  //         'Experimental detection of cosmic radiation using cloud chamber technology.',
  //         'Science outreach programs for underserved communities and rural areas.',
  //         'Active participation in academic conferences with presentations and organizational roles.',
  //       ],
  //       accent: 'cyan',
  //     },
  //   ],
  // },
  // Postgraduate Studies
  {
    title: 'Secondary Education (Class Xth)',
    organization: 'Delhi Public School',
    description: 'Studied a broad curriculum including English, Hindi, Mathematics, Science, and Social Studies. Developed conceptual understanding across multiple disciplines and strengthened logical reasoning and communication skills.',
    period: '2018 - 2019',
    icon: '📖',
    type: 'postgrad',
    status: 'completed'
  },
  {
    title: 'Higher Secondary Education (Class XII)',
    organization: 'Delhi Public School',
    description: 'Focused on core science subjects — Physics, Chemistry, and Mathematics — with additional emphasis on English and Physical Education.',
    period: '2020-2021',
    icon: '📖',
    type: 'postgrad',
    status: 'completed'
  },
  // Certifications
  {
    title: 'Google Cybersecurity Professional Certificate',
    organization: 'Google',
    description: 'Industry-leading certification in cybersecurity fundamentals, covering network security, threats, and vulnerabilities.',
    period: '2023',
    icon: <ShieldAlert className="w-7 h-7 text-red-400" aria-hidden />,
    type: 'certification',
    status: 'completed',
    verificationLink: 'https://www.coursera.org/account/accomplishments/specialization/certificate/GUJR6NR3SGRZ',
    credentialId: 'GUJR6NR3SGRZ'
  },
  {
    title: 'SOC Level 1 Course Path',
    organization: 'TryHackMe',
    description: 'Hands-on learning path focused on SIEM monitoring, threat detection, and incident response with Cyber Threat Intelligence and DFIR. Built a strong foundation in Blue Team operations through practical, real-world security scenarios.',
    period: '2025',
    icon: '🔐',
    type: 'certification',
    status: 'completed',
    verificationLink: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-7U34RWENGN.png',
    credentialId: 'THM-7U34RWENGN'
  },
  {
    title: 'C3SA Cyber Security Analyst ',
    organization: 'CyberWarFare Labs',
    description: 'Comprehensive training covering web, network, OS, and cloud security, along with threat hunting, incident response, and SOC operations. Included extensive hands-on labs on OWASP Top 10, pentesting methodologies, and defensive security practices through a practical, project-based approach.',
    period: '2024',
    icon: '🔵',
    type: 'certification',
    status: 'completed',
    verificationLink: 'https://app.kajabi.com/certificates/0fd1a025',
    credentialId: '0fd1a025'
  }
];

export default function AcademicsSection() {
  const degrees = educationData.filter(item => item.type === 'degree');
  const postgrads = educationData.filter(item => item.type === 'postgrad');
  const certifications = educationData.filter(item => item.type === 'certification');

  return (
    <section
      id="academics"
      className="min-h-screen py-20 bg-gradient-to-br from-cyber-dark via-cyber-teal-dark to-cyber-navy"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyber-green font-mono text-sm mb-4 tracking-widest"
          >
            ACADEMIC JOURNEY
          </m.p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-cyber-gray-light text-lg max-w-2xl mx-auto">
            From physics foundations to cybersecurity expertise. My journey through academic excellence and professional certifications.
          </p>
        </m.div>

        {/* Academic Degrees */}
        {degrees.length > 0 && (
          <div className="mb-16">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="text-cyber-cyan" size={32} />
              <h3 className="text-2xl font-bold text-cyber-cyan">Undergraduate Degrees</h3>
              <div className="flex-1 h-px bg-cyber-cyan/20" />
            </m.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {degrees.map((item, index) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-6 bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl hover:border-cyber-cyan/50 hover:shadow-glow-cyan transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{item.icon}</div>
                      <span className="text-xs font-mono text-cyber-green px-2 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-cyber-cyan mb-2 group-hover:text-cyber-green transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-cyber-gray-light text-sm mb-4 font-mono">
                      {item.organization}
                    </p>

                    <p className="text-cyber-gray leading-relaxed text-sm">
                      {item.description}
                    </p>

                    {item.extraSections && item.extraSections.length > 0 && (
                      <div className="mt-4 space-y-4">
                        {item.extraSections.map((section) => {
                          const accent = section.accent ?? 'cyan';
                          const borderClass =
                            accent === 'green'
                              ? 'border-cyber-green/20'
                              : accent === 'orange'
                                ? 'border-cyber-orange/20'
                                : 'border-cyber-cyan/20';
                          const titleClass =
                            accent === 'green'
                              ? 'text-cyber-green'
                              : accent === 'orange'
                                ? 'text-cyber-orange'
                                : 'text-cyber-cyan';
                          return (
                            <div key={section.title} className={`pt-4 border-t ${borderClass}`}>
                              <p className={`${titleClass} text-xs font-mono mb-2`}>
                                {section.title}:
                              </p>
                              <ul className="space-y-1 text-cyber-gray text-xs">
                                {section.items.map((itemText) => (
                                  <li key={itemText}>▸ {itemText}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        )}

        {/* Post-Graduations */}
        {postgrads.length > 0 && (
          <div className="mb-16">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <BookOpen className="text-cyber-green" size={32} />
              <h3 className="text-2xl font-bold text-cyber-green">Secondary and Senior Secondary Education</h3>
              <div className="flex-1 h-px bg-cyber-green/20" />
            </m.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {postgrads.map((item, index) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-6 bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-green/20 rounded-xl hover:border-cyber-green/50 hover:shadow-glow-green transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-xs font-mono text-cyber-cyan px-2 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded">
                          {item.period}
                        </span>
                        {item.status === 'paused' && (
                          <span className="text-xs font-mono text-yellow-500 px-2 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded">
                            PAUSED
                          </span>
                        )}
                        {item.status === 'in-progress' && (
                          <span className="text-xs font-mono text-cyber-cyan px-2 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded animate-pulse">
                            IN PROGRESS
                          </span>
                        )}
                        {item.status === 'coming-soon' && (
                          <span className="text-xs font-mono text-purple-400 px-2 py-1 bg-purple-400/10 border border-purple-400/30 rounded">
                            COMING SOON
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-cyber-green mb-2 group-hover:text-cyber-cyan transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-cyber-gray-light text-sm mb-4 font-mono">
                      {item.organization}
                    </p>

                    <p className="text-cyber-gray leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Award className="text-cyber-orange" size={32} />
              <h3 className="text-2xl font-bold text-cyber-orange">Professional Certifications</h3>
              <div className="flex-1 h-px bg-cyber-orange/20" />
            </m.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {certifications.map((item, index) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-6 bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-orange/20 rounded-xl hover:border-cyber-orange/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div className="flex flex-col items-end gap-2">
                        <Award className="text-cyber-orange/50 group-hover:text-cyber-orange transition-colors" size={20} />
                        {item.status === 'coming-soon' && (
                          <span className="text-xs font-mono text-purple-400 px-2 py-1 bg-purple-400/10 border border-purple-400/30 rounded">
                            COMING SOON
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-cyber-orange mb-2 group-hover:text-cyber-cyan transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-cyber-gray-light text-xs mb-3">
                      <span className="font-mono">{item.organization}</span>
                      <span className="text-cyber-cyan/30">|</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                    </div>

                    <p className="text-cyber-gray leading-relaxed text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Verification Link */}
                    {item.verificationLink && (
                      <div className="mt-4 pt-4 border-t border-cyber-orange/20">
                        <a
                          href={item.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-cyber-orange hover:text-cyber-cyan transition-colors"
                        >
                          <span className="font-mono">🔗 Verify Authenticity</span>
                        </a>
                        {item.credentialId && (
                          <p className="text-cyber-gray text-xs mt-2 font-mono">
                            ID: {item.credentialId}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        )}

        {/* View More Button - Mobile */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:hidden"
        >
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-green text-cyber-dark font-bold rounded-lg hover:shadow-neon-green hover:scale-105 transition-all duration-300 group"
          >
            View Complete Details
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </m.div>

        {/* Bottom Decoration */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-4 text-cyber-cyan/30">
            <div className="h-px w-16 bg-cyber-cyan/30" />
            <GraduationCap size={20} />
            <div className="h-px w-16 bg-cyber-cyan/30" />
          </div>
        </m.div>
      </div>
    </section>
  );
}
