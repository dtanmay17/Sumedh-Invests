/**
 * ScrollProgress.jsx
 * Thin gold progress bar at top of page indicating scroll depth
 */
import React from 'react';
import { useScrollProgress } from '../hooks';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        height: '2px',
        width: `${progress * 100}%`,
        background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))',
        zIndex: 200,
        transition: 'width 0.1s linear',
        boxShadow: '0 0 8px rgba(212,175,55,0.6)',
      }}
      aria-hidden="true"
    />
  );
}
