'use client';

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  className?: string;
  speed?: number;
  delayBetween?: number;
}

export function TypingEffect({
  texts,
  className = '',
  speed = 50,
  delayBetween = 2000,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, delayBetween]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-8 bg-accent-cyan ml-1 animate-blink" />
    </span>
  );
}
