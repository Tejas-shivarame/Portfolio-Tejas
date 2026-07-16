"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypingEffect({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1800,
  className,
}: TypingEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setText(words[0]);
      return;
    }

    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < currentWord.length) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (!deleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pauseDuration);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        deletingSpeed
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-blink bg-current align-middle" />
    </span>
  );
}
