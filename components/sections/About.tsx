'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, LockKeyhole, Rocket, ServerCog } from 'lucide-react';

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const responsibilities = [
    'ERPNext cloud and on-premise deployments',
    'Full ERP module implementation and customization',
    'Accounts, HR, Projects, Inventory, and CRM modules',
    'Enterprise workflow automation and customization',
    'Infrastructure optimization and system automation',
    'Data migration, user onboarding, and multi-environment integration',
  ];

  return (
    <section id="about" ref={ref} className="relative py-24 px-4 md:px-8 bg-background w-full">
      <div className="max-w-6xl mx-auto w-full">
        <div className={`space-y-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-accent-cyan">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="glass-card p-6 md:p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-accent-cyan mb-4">Professional Journey</h3>
                <p className="text-foreground-muted leading-relaxed">
                  I&apos;m a Full Stack Engineer at <strong className="text-foreground">Al Awan Construction</strong>,
                  specializing in ERPNext implementation, secure application development, and practical infrastructure
                  work across cloud-hosted and on-premise environments.
                </p>
              </div>

              <div className="glass-card p-6 md:p-8 rounded-xl">
                <h3 className="text-xl font-bold text-accent-cyan mb-4">Core Responsibilities</h3>
                <ul className="space-y-2 text-foreground-muted">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 md:p-8 rounded-xl">
                <div className="mb-4 flex items-center gap-3 text-accent-purple">
                  <LockKeyhole className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">Cybersecurity Focus</h3>
                </div>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Beyond full-stack development, I focus on cybersecurity and ethical hacking, combining secure
                  application development with penetration testing methodologies.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-accent-purple font-semibold">Key Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Pentesting',
                      'Ethical Hacking',
                      'Secure Coding',
                      'OWASP',
                      'API Security',
                      'Authentication',
                      'System Hardening',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 md:p-8 rounded-xl">
                <div className="mb-4 flex items-center gap-3 text-accent-lime">
                  <Rocket className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">Technical Interests</h3>
                </div>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  I actively explore emerging technologies and maintain a commitment to building secure, scalable
                  architecture.
                </p>
                <ul className="space-y-1 text-sm text-foreground-muted">
                  <li>Vulnerability assessment and infrastructure security</li>
                  <li>Cloud technologies and AI applications</li>
                  <li>Secure system design and network security</li>
                  <li>Production-grade architecture patterns</li>
                </ul>
              </div>

              <div className="glass-card p-6 md:p-8 rounded-xl">
                <div className="mb-4 flex items-center gap-3 text-accent-cyan">
                  <ServerCog className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">Additional Expertise</h3>
                </div>
                <p className="text-foreground-muted text-sm">
                  <strong>WordPress and cPanel Management:</strong> Managing WordPress deployments, site optimization,
                  security, and server administration for an Islamabad-based company.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {[
              { label: 'Projects Built', value: '20+' },
              { label: 'Happy Clients', value: '15+' },
              { label: 'Years Experience', value: '3+' },
              { label: 'Certifications', value: '6' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center rounded-lg">
                <div className="text-3xl font-bold text-accent-cyan mb-2">{stat.value}</div>
                <div className="text-sm text-foreground-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
