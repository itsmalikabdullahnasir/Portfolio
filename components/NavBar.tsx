'use client';

import React, { useState, useEffect } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#cybersecurity', label: 'Security' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certs' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3 md:py-4 border-b border-accent-cyan/20' : 'py-4 md:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="group flex items-center gap-3 rounded-lg px-1 py-1 text-foreground transition-opacity hover:opacity-90"
          aria-label="Abdullah Nasir home"
        >
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-lg border border-accent-cyan/40 bg-background-secondary/80 shadow-[0_0_24px_rgba(0,217,255,0.18)]">
            <span className="absolute inset-1 rounded-md border border-accent-purple/30 rotate-45 group-hover:rotate-[58deg] transition-transform duration-500" />
            <Sparkles className="absolute right-1 top-1 h-3 w-3 text-accent-lime" />
            <span className="relative text-sm font-bold tracking-normal text-accent-cyan">AN</span>
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="block text-sm font-semibold text-foreground">Abdullah</span>
            <span className="block text-xs font-medium text-accent-cyan/80">Nasir</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-sm font-medium text-foreground-muted hover:text-accent-cyan transition-colors rounded-md hover:bg-accent-cyan/10"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground-muted hover:text-accent-cyan transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-accent-cyan/20 mt-2">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 text-sm font-medium text-foreground-muted hover:text-accent-cyan transition-colors rounded-md hover:bg-accent-cyan/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
