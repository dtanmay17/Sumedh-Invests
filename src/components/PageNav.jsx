/**
 * PageNav.jsx
 * ─────────────────────────────────────────────────
 * Cyclic previous / next navigation at the bottom of every page.
 * Wraps cyclically so every page connects to the next and prev.
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PageNav.css';

const PAGES = [
  { path: '/',         label: 'Home'     },
  { path: '/about',    label: 'About'    },
  { path: '/services', label: 'Services' },
  { path: '/journey',  label: 'Journey'  },
  { path: '/insights', label: 'Insights' },
  { path: '/faq',      label: 'FAQ'      },
  { path: '/contact',  label: 'Contact'  },
];

export default function PageNav() {
  const { pathname } = useLocation();
  const currentIndex = PAGES.findIndex(p => p.path === pathname);

  // Cyclic wrap
  const prevPage = PAGES[(currentIndex - 1 + PAGES.length) % PAGES.length];
  const nextPage = PAGES[(currentIndex + 1) % PAGES.length];

  return (
    <nav className="page-nav container">
      <Link to={prevPage.path} className="page-nav__btn page-nav__btn--prev">
        <span className="page-nav__arrow">←</span>
        <div className="page-nav__label">
          <span className="page-nav__dir">Previous</span>
          <span className="page-nav__name">{prevPage.label}</span>
        </div>
      </Link>

      {/* Page dots */}
      <div className="page-nav__dots">
        {PAGES.map((p, i) => (
          <Link
            key={p.path}
            to={p.path}
            className={`page-nav__dot ${i === currentIndex ? 'page-nav__dot--active' : ''}`}
            title={p.label}
            aria-label={`Go to ${p.label}`}
          />
        ))}
      </div>

      <Link to={nextPage.path} className="page-nav__btn page-nav__btn--next">
        <div className="page-nav__label">
          <span className="page-nav__dir">Next</span>
          <span className="page-nav__name">{nextPage.label}</span>
        </div>
        <span className="page-nav__arrow">→</span>
      </Link>
    </nav>
  );
}
