'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { contactEmail, socialLinks } from '@/data/socialLinks';
import { Award, Github, Linkedin, LucideIcon, Mail, Twitter } from 'lucide-react';

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
  X: Twitter,
};

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const linkedIn = socialLinks.find((social) => social.name === 'LinkedIn');

  return (
    <section id="contact" ref={ref} className="relative py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className={`space-y-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let&apos;s <span className="text-accent-cyan">Connect</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Open to opportunities, collaborations, and focused conversations about software, security, and intelligent
              systems.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-xl text-center space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-accent-cyan mb-2">Ready to Work Together?</h3>
              <p className="text-foreground-muted">
                Reach out for full-stack development, ERPNext work, cybersecurity collaboration, or project support.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap">
              <a
                href={`mailto:${contactEmail}`}
                className="glass-card px-8 py-4 rounded-lg font-semibold text-foreground hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300 flex items-center gap-2 group"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
              <a
                href="#certifications"
                className="glass-card px-8 py-4 rounded-lg font-semibold text-foreground hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300 flex items-center gap-2 group"
              >
                <Award className="w-5 h-5" />
                <span>Certificates</span>
              </a>
              {linkedIn && (
                <a
                  href={linkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-8 py-4 rounded-lg font-semibold text-foreground hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300 flex items-center gap-2 group"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.name];

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="glass-card p-6 rounded-lg text-center group hover:border-accent-cyan/40 transition-colors"
                >
                  <div className={`${social.color} text-foreground-muted transition-colors mb-3 flex justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent-cyan transition-colors">
                    {social.name}
                  </h4>
                  <p className="mt-2 text-xs text-foreground-muted break-words">{social.handle}</p>
                </a>
              );
            })}
          </div>

          <div className="text-center space-y-4 pt-12 border-t border-accent-cyan/10">
            <p className="text-foreground-muted">
              <span className="text-accent-cyan font-semibold">Response Time:</span> I typically respond within 24-48
              hours.
            </p>
            <p className="text-sm text-foreground-muted">
              Copyright 2026 Abdullah Nasir. Built with React, Next.js, and deployed on GitHub Pages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
