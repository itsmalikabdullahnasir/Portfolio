'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '@/data/skills';
import {
  ChevronDown,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Lightbulb,
  Lock,
  LucideIcon,
  Palette,
  Rocket,
  Server,
  Shield,
  Wrench,
} from 'lucide-react';

const skillIcons: Record<string, LucideIcon> = {
  code: Code2,
  palette: Palette,
  server: Server,
  cloud: Cloud,
  lock: Lock,
  shield: Shield,
  database: Database,
  rocket: Rocket,
  tool: Wrench,
  lightbulb: Lightbulb,
};

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section id="skills" ref={ref} className="relative py-24 px-4 md:px-8 bg-background-tertiary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Technical <span className="text-accent-cyan">Skills</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              A focused toolkit spanning full-stack development, cybersecurity, cloud platforms, and enterprise systems.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, index) => {
              const Icon = skillIcons[category.icon];
              const isSelected = selectedCategory === category.category;

              return (
                <button
                  key={category.category}
                  type="button"
                  className="group h-full w-full text-left"
                  onClick={() => setSelectedCategory(isSelected ? null : category.category)}
                  style={{
                    animationName: inView ? 'slide-up' : 'none',
                    animationDuration: '0.6s',
                    animationTimingFunction: 'ease-out',
                    animationFillMode: 'forwards',
                    animationDelay: `${index * 60}ms`,
                    opacity: inView ? 1 : 0,
                  }}
                >
                  <div className="glass-card p-6 md:p-8 rounded-xl h-full transition-all duration-300 hover:border-accent-cyan/40">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent-cyan transition-colors flex-grow">
                        {category.category}
                      </h3>
                      <span className="text-accent-cyan/50 group-hover:text-accent-cyan transition-colors">
                        {category.skills.length}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-foreground-muted group-hover:text-foreground transition-colors text-sm"
                          style={{
                            animationName: isSelected ? 'slide-up' : 'none',
                            animationDuration: '0.3s',
                            animationTimingFunction: 'ease-out',
                            animationFillMode: 'forwards',
                            animationDelay: `${idx * 30}ms`,
                          }}
                        >
                          <ChevronRight className="h-4 w-4 text-accent-cyan" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-accent-cyan/10">
                      <span className="inline-flex items-center gap-1 text-xs text-accent-cyan/50 group-hover:text-accent-cyan transition-colors">
                        {isSelected ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                        Click to expand
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-accent-cyan mb-2">10+</div>
              <p className="text-foreground-muted">Skill Categories</p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-accent-purple mb-2">50+</div>
              <p className="text-foreground-muted">Technical Skills</p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-accent-lime mb-2">Active</div>
              <p className="text-foreground-muted">Continuous Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
