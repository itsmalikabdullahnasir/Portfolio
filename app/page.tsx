'use client';

import React from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Cybersecurity } from '@/components/sections/Cybersecurity';
import { Certifications } from '@/components/sections/Certifications';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="relative w-full bg-background overflow-x-hidden">
      {/* Animated Background - Fixed Position */}
      <ParticleBackground />

      {/* Navigation */}
      <NavBar />

      {/* Content Sections - Relative Position */}
      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Cybersecurity />
        <Certifications />
        <Skills />
        <Contact />
      </div>

      {/* Footer Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-accent-cyan/5 to-accent-purple/5 pointer-events-none" />
    </div>
  );
}
