'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { certifications } from '@/data/certifications';
import {
  Bot,
  Check,
  CloudCog,
  ExternalLink,
  LucideIcon,
  ShieldCheck,
  SquareKanban,
  Users,
  Wrench,
} from 'lucide-react';

const certificationIcons: Record<string, LucideIcon> = {
  support: Wrench,
  project: SquareKanban,
  security: ShieldCheck,
  ai: Bot,
  cloud: CloudCog,
  team: Users,
};

export function Certifications() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="certifications" ref={ref} className="relative py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Certifications & <span className="text-accent-cyan">Achievements</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Recognized credentials and verified achievements demonstrating expertise across multiple domains
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(cert.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  animationName: inView ? 'slide-up' : 'none',
                  animationDuration: '0.6s',
                  animationTimingFunction: 'ease-out',
                  animationFillMode: 'forwards',
                  animationDelay: `${index * 80}ms`,
                  opacity: inView ? 1 : 0,
                }}
              >
                {/* Certification Card */}
                <div className="glass-card p-6 md:p-8 rounded-xl h-full flex flex-col">
                  {/* Icon & Header */}
                  <div className="mb-4">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan group-hover:scale-105 group-hover:border-accent-cyan/60 transition-all">
                      {React.createElement(certificationIcons[cert.focus], { className: 'h-7 w-7' })}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent-cyan transition-colors mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-accent-cyan/70 font-medium">{cert.issuer}</p>
                  </div>

                  {/* Score or Date */}
                  <div className="flex gap-4 mb-4 flex-wrap text-sm">
                    {cert.score && (
                      <div className="bg-accent-lime/10 text-accent-lime px-3 py-1 rounded-full border border-accent-lime/30 flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        <span className="font-semibold">{cert.score}</span>
                      </div>
                    )}
                    {cert.dateEarned && (
                      <div className="bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full border border-accent-purple/30">
                        {cert.dateEarned}
                      </div>
                    )}
                  </div>

                  {/* Credential Button */}
                  <div className="mt-auto pt-4 border-t border-accent-cyan/10">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent-cyan transition-colors"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Hover Background Glow */}
                {hoveredId === cert.id && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 -z-10 blur-xl" />
                )}
              </div>
            ))}
          </div>

          {/* Verification Note */}
          <div className="text-center">
            <p className="text-sm text-foreground-muted">
              All certifications are verified and available for inspection. Credential links provided above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
