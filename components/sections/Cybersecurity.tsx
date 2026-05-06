'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Globe2,
  KeyRound,
  LucideIcon,
  Network,
  Radar,
  ScanSearch,
  Settings,
  ShieldCheck,
} from 'lucide-react';

const securityIcons: Record<string, LucideIcon> = {
  scan: ScanSearch,
  radar: Radar,
  code: Code2,
  key: KeyRound,
  globe: Globe2,
  shield: ShieldCheck,
  settings: Settings,
  network: Network,
};

const securityDomains: Array<{
  icon: keyof typeof securityIcons;
  title: string;
  description: string;
  skills: string[];
}> = [
  {
    icon: 'scan',
    title: 'Penetration Testing',
    description: 'Security assessments and penetration testing methodologies.',
    skills: ['Network Testing', 'Web App Testing', 'Exploit Development', 'Reporting'],
  },
  {
    icon: 'radar',
    title: 'Ethical Hacking',
    description: 'Advanced security techniques with legal and ethical frameworks.',
    skills: ['Vulnerability Research', 'Exploit Analysis', 'Security Tools', 'Threat Intelligence'],
  },
  {
    icon: 'code',
    title: 'Secure Coding',
    description: 'Secure software development practices for production applications.',
    skills: ['OWASP Principles', 'Input Validation', 'Encryption', 'Secure APIs'],
  },
  {
    icon: 'key',
    title: 'Authentication Security',
    description: 'Secure identity management and authorization systems.',
    skills: ['JWT', 'OAuth 2.0', 'Password Security', 'MFA Implementation'],
  },
  {
    icon: 'globe',
    title: 'API Security',
    description: 'Protecting APIs against common attacks and vulnerabilities.',
    skills: ['Rate Limiting', 'Input Validation', 'CORS', 'Token Management'],
  },
  {
    icon: 'shield',
    title: 'Infrastructure Security',
    description: 'Secure system hardening and infrastructure design.',
    skills: ['System Hardening', 'Network Security', 'Access Control', 'Monitoring'],
  },
  {
    icon: 'settings',
    title: 'System Hardening',
    description: 'Reducing attack surface and securing system configurations.',
    skills: ['OS Hardening', 'Firewall Config', 'Patch Management', 'Baseline Configs'],
  },
  {
    icon: 'network',
    title: 'Network Security',
    description: 'Protecting network infrastructure from unauthorized access.',
    skills: ['VPN', 'IDS/IPS', 'Network Segmentation', 'DDoS Mitigation'],
  },
];

export function Cybersecurity() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="cybersecurity" ref={ref} className="relative py-24 px-4 md:px-8 bg-background-tertiary/50">
      <div className="max-w-6xl mx-auto">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent" />
        </div>

        <div className={`relative z-10 space-y-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Cybersecurity <span className="text-accent-cyan">Expertise</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Security knowledge across penetration testing, ethical hacking, secure architecture, and infrastructure
              hardening.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
          </div>

          <div className="glass-card rounded-lg overflow-hidden">
            <div className="bg-accent-cyan/10 border-b border-accent-cyan/20 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-accent-cyan/50" />
                <div className="w-3 h-3 rounded-full bg-accent-cyan/50" />
                <div className="w-3 h-3 rounded-full bg-accent-cyan/50" />
              </div>
              <span className="text-xs text-accent-cyan font-mono ml-3">security_profile.sh</span>
            </div>
            <div className="p-6 md:p-8 font-mono text-sm">
              <p className="text-accent-cyan mb-3">
                $ <span className="text-accent-lime">whoami</span>
              </p>
              <p className="text-foreground mb-4">Penetration Tester | Security Engineer | Ethical Hacker</p>
              <p className="text-accent-cyan mb-3">
                $ <span className="text-accent-lime">echo</span> $EXPERTISE
              </p>
              <p className="text-accent-purple">
                Secure systems / pentesting / vulnerability assessment / threat analysis
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityDomains.map((domain, index) => {
              const Icon = securityIcons[domain.icon];

              return (
                <div
                  key={domain.title}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    animationName: inView ? 'slide-up' : 'none',
                    animationDuration: '0.6s',
                    animationTimingFunction: 'ease-out',
                    animationFillMode: 'forwards',
                    animationDelay: `${index * 50}ms`,
                    opacity: inView ? 1 : 0,
                  }}
                >
                  <div className="glass-card p-4 md:p-6 rounded-lg h-full flex flex-col group-hover:border-accent-cyan/40 transition-colors relative z-10">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent-cyan transition-colors">
                      {domain.title}
                    </h3>

                    <p className="text-sm text-foreground-muted mb-4 flex-grow">{domain.description}</p>

                    <div className="flex flex-wrap gap-1">
                      {domain.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-full bg-accent-cyan/20 text-accent-cyan group-hover:bg-accent-cyan/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {hoveredIndex === index && (
                    <div className="absolute inset-0 rounded-lg bg-accent-cyan/20 -z-10 blur-xl animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="glass-card p-6 md:p-8 rounded-xl text-center border border-accent-cyan/40">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="text-accent-cyan font-bold">Security-first mindset:</span> Building applications with a
              foundational commitment to threat modeling, secure architecture, and practical risk reduction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
