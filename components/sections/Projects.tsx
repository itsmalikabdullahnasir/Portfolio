'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { projects } from '@/data/projects';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" ref={ref} className="relative py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured <span className="text-accent-cyan">Projects</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Showcasing scalable, production-grade applications built with modern technologies and secure architectures
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  animationName: inView ? 'slide-up' : 'none',
                  animationDuration: '0.6s',
                  animationTimingFunction: 'ease-out',
                  animationFillMode: 'forwards',
                  animationDelay: `${index * 100}ms`,
                  opacity: inView ? 1 : 0,
                }}
              >
                {/* Project Card */}
                <div className="glass-card p-6 md:p-8 rounded-xl h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent-cyan transition-colors">
                        {project.title}
                      </h3>
                      {project.yearCompleted && (
                        <span className="text-xs text-accent-cyan/70 font-mono">{project.yearCompleted}</span>
                      )}
                    </div>
                    <p className="text-accent-cyan/80 font-medium text-sm">{project.shortDescription}</p>
                  </div>

                  {/* Description */}
                  <p className="text-foreground-muted text-sm mb-4 flex-grow">{project.longDescription}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-accent-cyan/70 mb-2">KEY FEATURES</p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 5).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 group-hover:border-accent-cyan/60 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 5 && (
                        <span className="text-xs px-2 py-1 text-foreground-muted">
                          +{project.features.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-accent-purple/70 mb-2">TECH STACK</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-lg bg-accent-purple/10 text-accent-purple border border-accent-purple/30 group-hover:border-accent-purple/60 transition-colors font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-accent-cyan/10">
                    {project.githubLink && project.githubLink !== '#' && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-foreground-muted hover:text-accent-cyan transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.liveLink && project.liveLink !== '#' && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-foreground-muted hover:text-accent-cyan transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                {hoveredId === project.id && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 -z-10 blur-xl" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
