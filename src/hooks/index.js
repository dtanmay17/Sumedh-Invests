/**
 * hooks/index.js
 * Custom React hooks used across the site
 */

import { useState, useEffect, useRef } from 'react';

// ── useScrollProgress ─────────────────────────────
// Returns a 0–1 value representing how far the user has scrolled
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress(scrollTop / (scrollHeight - clientHeight));
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return progress;
}

// ── useInView ─────────────────────────────────────
// Returns true when the referenced element enters the viewport
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

// ── useCountUp ────────────────────────────────────
// Counts from 0 to `end` when `start` is true
export function useCountUp(end, duration = 2000, start = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

// ── useNavScroll ──────────────────────────────────
// Returns true when user has scrolled past a threshold
export function useNavScroll(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}
