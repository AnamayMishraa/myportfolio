'use client';

import { Header, FloatingNav } from '@/components/layout';
import { m } from 'framer-motion';
import { Shield, Zap, Brain, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-navy cyber-bg-animated">
      <Header />
      <FloatingNav />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Profile Photo */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative shrink-0"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyber-cyan/30 shadow-neon-cyan bg-gradient-to-br from-cyber-cyan/20 to-cyber-green/20">
                  {/* Profile Photo */}
                  <NextImage
                    src="/images/about/hacker-pic.png"
                    alt="Cybersecurity analyst avatar"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-cyber-green rounded-full border-4 border-cyber-dark animate-pulse" />
              </m.div>

              {/* Header Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-teal-dark/50 border border-cyber-cyan/30 rounded-full mb-4">
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                  <span className="text-sm text-cyber-gray-light font-mono">
                    IT Security
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  About <span className="text-cyber-cyan">Me</span>
                </h1>

                <p className="text-xl text-cyber-gray-light leading-relaxed max-w-2xl md:max-w-none">
                  Cybersecurity enthusiast exploring both the red and blue sides of defense—focused on SOC operations, threat hunting, VAPT, malware analysis, and DFIR.
                </p>
              </div>
            </div>
          </m.div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            {/* Story Section */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-2xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-cyber-cyan mb-6">My Journey</h2>

              <div className="space-y-4 text-cyber-gray-light leading-relaxed">
                <p>
                  I’m a cybersecurity professional driven by curiosity and a deep interest in how threats operate and how systems can be defended against them. My focus lies in exploring both the Red and Blue sides of security—building a holistic understanding of the entire threat landscape.
                </p>

                <p>
                  My technical interests span SOC operations, threat hunting, vulnerability assessment and penetration testing (VAPT), malware analysis, and digital forensics & incident response (DFIR). I approach cybersecurity as both an analytical and creative challenge, blending structured defense with adversarial thinking.
                </p>

                <p>
                  Through hands-on practice in home labs and project-based learning, I’ve developed skills in analyzing attack patterns, simulating real-world intrusions, and strengthening detection capabilities. These environments help me continuously refine my practical knowledge of tools, techniques, and frameworks used by both attackers and defenders.
                </p>

                <p>
                  I’m particularly fascinated by malware behavior—how it evades detection, persists, and communicates—and how defensive strategies can be engineered to counter such threats. My work often involves dissecting payloads, tracking indicators of compromise, and leveraging insights to fine-tune detection mechanisms.
                </p>

                <p>
                  Beyond tools and techniques, I believe strong cybersecurity comes from mindset and adaptability. I stay engaged with new threat trends, emerging technologies, and industry research to anticipate evolving attack surfaces and build more resilient defenses.
                </p>

                <p>
                  Looking ahead, I aim to grow as a well-rounded cybersecurity specialist—deepening my expertise in threat detection, purple teaming, and automated defense engineering while contributing to a safer, more secure digital ecosystem.
                </p>
              </div>
            </m.div>

            {/* Skills Grid */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-6 hover:border-cyber-cyan/50 transition-all duration-300">
                <Shield className="text-cyber-cyan mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Defensive Security</h3>
                <p className="text-cyber-gray leading-relaxed">
                  Focused on threat detection, incident response, and continuous security monitoring. I strengthen defenses by understanding adversarial tactics and leveraging them to build resilient protection mechanisms.
                </p>
              </div>

              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-green/20 rounded-xl p-6 hover:border-cyber-green/50 transition-all duration-300">
                <Brain className="text-cyber-green mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Analytical Thinking</h3>
                <p className="text-cyber-gray leading-relaxed">
                  I approach cybersecurity challenges with a structured, scientific mindset — deconstructing complex issues into clear, actionable parts for precise and effective solutions.
                </p>
              </div>

              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-orange/20 rounded-xl p-6 hover:border-cyber-orange/50 transition-all duration-300">
                <Zap className="text-cyber-orange mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Rapid Response</h3>
                <p className="text-cyber-gray leading-relaxed">
                  Skilled in swift detection and containment of security incidents. I minimize impact through efficient triage, real-time decision-making, and coordinated response strategies..
                </p>
              </div>

              <div className="bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl p-6 hover:border-cyber-cyan/50 transition-all duration-300">
                <Target className="text-cyber-cyan mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">Threat Hunting</h3>
                <p className="text-cyber-gray leading-relaxed">
                  Dedicated to proactively uncovering hidden threats before they escalate. I apply data-driven analysis and pattern recognition to identify anomalies and early indicators of compromise..
                </p>
              </div>
            </m.div>

            {/* Philosophy Section */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-cyber-teal-dark/30 to-cyber-navy/30 backdrop-blur-sm border border-cyber-green/20 rounded-2xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-cyber-green mb-6">Philosophy</h2>

              <div className="space-y-4 text-cyber-gray-light leading-relaxed">
                <p className="text-lg">
                  <span className="text-cyber-cyan font-mono">&ldquo;Adapt faster than the threat. Secure smarter than the attacker.&rdquo;</span>
                </p>

                <p>
                  Cybersecurity, to me, is the art of equilibrium — where offense sharpens defense, and intelligence fuels resilience. It’s not just about building barriers but about understanding every layer of the digital ecosystem — from how vulnerabilities are born to how adversaries exploit them. I believe in approaching security with curiosity and creativity, blending attacker insight with defender strategy to craft smarter, adaptive solutions.
                </p>

                <p>
                  In an era where threats evolve faster than signatures, I see cybersecurity as a living discipline — one driven by observation, experimentation, and continuous learning. My focus is on transforming awareness into action, complexity into clarity, and data into decisions that strengthen both sides of the cyber battlefield.
                </p>
              </div>
            </m.div>

            {/* CTA Section */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <Link
                href="/projects"
                className="group p-8 bg-gradient-to-br from-cyber-cyan/10 to-cyber-green/10 border border-cyber-cyan/30 rounded-xl hover:border-cyber-cyan hover:shadow-neon-cyan transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyber-cyan mb-3 group-hover:text-cyber-green transition-colors">
                  View My Projects
                </h3>
                <p className="text-cyber-gray-light mb-4">
                  Explore defensive security tools and Blue Team automation projects
                </p>
                <div className="inline-flex items-center gap-2 text-cyber-cyan group-hover:gap-4 transition-all">
                  <span className="font-mono">See Projects</span>
                  <ArrowRight size={20} />
                </div>
              </Link>

              <Link
                href="/contact"
                className="group p-8 bg-gradient-to-br from-cyber-green/10 to-cyber-orange/10 border border-cyber-green/30 rounded-xl hover:border-cyber-green hover:shadow-neon-green transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyber-green mb-3 group-hover:text-cyber-cyan transition-colors">
                  Drop a Secure Message
                </h3>
                <p className="text-cyber-gray-light mb-4">
                  Connect for collaboration, consulting, or security discussions
                </p>
                <div className="inline-flex items-center gap-2 text-cyber-green group-hover:gap-4 transition-all">
                  <span className="font-mono">Contact Me</span>
                  <ArrowRight size={20} />
                </div>
              </Link>
            </m.div>
          </div>
        </div>
      </section>
    </main>
  );
}
