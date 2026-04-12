/**
 * Navbar.jsx
 * ─────────────────────────────────────────────────
 * Fixed top navigation bar with:
 *  - Logo + ARN badge
 *  - Desktop nav links with active underline
 *  - Mobile hamburger menu
 *  - CTA button
 *  - Scroll-aware background blur
 */

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useNavScroll } from '../hooks';
import { personal } from '../assets/data/siteData';
import './Navbar.css';

// All pages — drives both desktop and mobile navigation
const NAV_LINKS = [
  { path: '/',          label: 'Home'        },
  { path: '/about',     label: 'About'       },
  { path: '/services',  label: 'Services'    },
  { path: '/journey',   label: 'Journey'     },
  { path: '/insights',  label: 'Insights'    },
  { path: '/faq',       label: 'FAQ'         },
  { path: '/contact',   label: 'Contact'     },
];

export default function Navbar() {
  const scrolled  = useNavScroll(50);
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* ── Brand / Logo ── */}
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <div className="navbar__logo-mark">
            <span>A</span>
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">{personal.firmName}</span>
            <span className="navbar__arn">{personal.arnNumber}</span>
          </div>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <nav className="navbar__links" aria-label="Main navigation">
          {NAV_LINKS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ── CTA Button (desktop) ── */}
        <Link to="/contact" className="btn btn-primary navbar__cta" onClick={closeMenu}>
          Book Free Call
        </Link>

        {/* ── Hamburger (mobile) ── */}
        <button
          className={`navbar__hamburger ${open ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        <nav>
          {NAV_LINKS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary" onClick={closeMenu} style={{ marginTop: '1rem' }}>
            Book Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
