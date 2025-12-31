'use client';

import { useEffect, useState } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

export default function TextType({
  text,
  typingSpeed = 80,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|',
}: TextTypeProps) {
  const fullText = text[0]; // single text, no looping
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Typing finished
      const stopTimeout = setTimeout(() => {
        setDone(true);
      }, pauseDuration);

      return () => clearTimeout(stopTimeout);
    }
  }, [index, fullText, typingSpeed, pauseDuration]);

  return (
    <span className="whitespace-nowrap">
      {displayedText}
      {showCursor && !done && (
        <span className="animate-pulse">{cursorCharacter}</span>
      )}
    </span>
  );
}
