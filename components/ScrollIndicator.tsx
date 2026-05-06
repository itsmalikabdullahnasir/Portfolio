'use client';

import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={handleClick}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-accent-cyan font-medium uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 text-accent-cyan animate-pulse" />
        </div>
      </button>
    )
  );
}
