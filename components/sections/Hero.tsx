'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { TypingEffect } from '@/components/TypingEffect';
import { socialLinks } from '@/data/socialLinks';
import { ArrowRight, Code2, Github, Linkedin, LucideIcon, Mail, Twitter } from 'lucide-react';

const jobTitles = [
  'Full Stack Engineer',
  'Cybersecurity Enthusiast',
  'Pentester',
  'ERPNext Developer',
  'Cloud & AI Learner',
  'Secure Systems Engineer',
];

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
  X: Twitter,
};

interface MousePosition {
  x: number;
  y: number;
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-8 bg-background"
    >
      <div
        className="absolute w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none transition-opacity duration-200"
        style={{
          left: `${mousePos.x - 192}px`,
          top: `${mousePos.y - 192}px`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan bg-clip-text text-transparent animate-gradient-shift">
            Abdullah Nasir
          </h1>
          <p className="text-xl md:text-2xl font-light text-foreground">
            <TypingEffect
              texts={jobTitles}
              className="text-accent-cyan font-semibold"
              speed={80}
              delayBetween={3000}
            />
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-base md:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Building scalable software, secure systems, and intelligent digital experiences. Full Stack Engineer
            focused on cybersecurity, clean code, and practical problem-solving.
          </p>
          <p className="text-sm text-accent-cyan/70 font-mono">
            &gt; Architecting secure digital solutions
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8 flex-wrap">
          <a
            href="#projects"
            className="glass-card px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-foreground hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#skills"
            className="glass-card px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-foreground hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
          >
            <Code2 className="w-5 h-5" />
            <span>Skills</span>
          </a>
          <a
            href="#certifications"
            className="glass-card px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-foreground hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
          >
            <span>Certifications</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="glass-card px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-foreground hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
          >
            <span>Contact</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex gap-6 justify-center items-center pt-8">
          {socialLinks.map((social) => {
            const Icon = socialIcons[social.name];

            return (
              <a
                key={social.name}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-foreground-muted hover:text-accent-cyan transition-colors p-2 rounded-lg hover:bg-accent-cyan/10"
                aria-label={social.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
