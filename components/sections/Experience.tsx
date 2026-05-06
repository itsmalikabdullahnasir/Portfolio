'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from 'lucide-react';

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Full Stack Engineer',
      company: 'Al Awan Construction',
      period: 'Present',
      highlights: [
        'ERPNext implementation across cloud and on-premise infrastructure',
        'End-to-end ERP module deployment for Accounts, HR, Projects, Inventory, and CRM',
        'Enterprise workflow customization and automation',
        'System infrastructure optimization and data migration',
        'Multi-environment integration and user onboarding',
        'Secure system development and API integrations',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Freelance Projects',
      period: '2023-Present',
      highlights: [
        'AI-powered food delivery platform with modern dashboards',
        'University LMS assignment tracker with Chrome extension support',
        'Event management platform with role-based access',
        'Final Year Project management system with secure document workflows',
        'Full-stack architecture design and implementation',
      ],
    },
    {
      title: 'WordPress & Server Administrator',
      company: 'Islamabad-based Company',
      period: 'Present',
      highlights: [
        'WordPress site optimization and maintenance',
        'cPanel server management and configuration',
        'Security hardening and backup management',
        'Performance optimization and user support',
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="relative py-24 px-4 md:px-8 bg-background-tertiary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Professional <span className="text-accent-cyan">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.title}-${exp.company}`}
                className="glass-card p-6 md:p-8 rounded-xl relative"
                style={{
                  animationName: inView ? 'slide-up' : 'none',
                  animationDuration: '0.6s',
                  animationTimingFunction: 'ease-out',
                  animationFillMode: 'forwards',
                  animationDelay: `${index * 100}ms`,
                  opacity: inView ? 1 : 0,
                }}
              >
                <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-accent-cyan border-4 border-background" />

                <div className="ml-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-accent-cyan font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-foreground-muted font-mono bg-accent-cyan/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-foreground-muted">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-32 flex justify-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-cyan to-accent-purple" />
          </div>
        </div>
      </div>
    </section>
  );
}
