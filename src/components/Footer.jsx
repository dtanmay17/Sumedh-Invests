/**
 * Footer.jsx
 * ─────────────────────────────────────────────────
 * Site-wide footer with:
 *  - Brand + description
 *  - Quick links (cyclic nav)
 *  - Contact details
 *  - Social links
 *  - SEBI disclaimer
 *  - Copyright
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { personal, amcPartners } from '../assets/data/siteData';
import './Footer.css';

const footerLinks = [
  { label: 'Home',     to: '/'          },
  { label: 'About',    to: '/about'     },
  { label: 'Services', to: '/services'  },
  { label: 'Journey',  to: '/journey'   },
  { label: 'Insights', to: '/insights'  },
  { label: 'FAQ',      to: '/faq'       },
  { label: 'Contact',  to: '/contact'   },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* ── AMC Partners Ticker ── */}
        <div className="footer__ticker">
          <span className="footer__ticker-label">Partner AMCs</span>
          <div className="footer__ticker-track">
            <div className="footer__ticker-inner">
              {[...amcPartners, ...amcPartners].map((amc, i) => (
                <span key={i} className="footer__ticker-item">{amc}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="footer__grid">

          {/* Brand Column */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <div className="footer__logo-mark">A</div>
              <div>
                <div className="footer__firm">{personal.firmName}</div>
                <div className="footer__arn">{personal.arnNumber} | {personal.euin}</div>
              </div>
            </div>
            <p className="footer__tagline">
              Bridging engineering precision with financial wisdom — to help you build wealth that lasts.
            </p>
            <div className="footer__socials">
              <a href={personal.linkedIn}  target="_blank" rel="noreferrer" className="footer__social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452H17.21v-5.569c0-1.327-.024-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.987V9h3.102v1.561h.044c.432-.818 1.487-1.681 3.061-1.681 3.272 0 3.876 2.153 3.876 4.953v6.619zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.551 13.019H3.785V9h3.103v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={personal.instagram} target="_blank" rel="noreferrer" className="footer__social" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href={`https://wa.me/${personal.whatsapp}`} target="_blank" rel="noreferrer" className="footer__social" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__list">
              {footerLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get In Touch</h4>
            <ul className="footer__contact-list">
              <li>
                <span className="footer__contact-icon">📍</span>
                <span>{personal.location}</span>
              </li>
              <li>
                <span className="footer__contact-icon">📧</span>
                <a href={`mailto:${personal.email}`} className="footer__link">{personal.email}</a>
              </li>
              <li>
                <span className="footer__contact-icon">📱</span>
                <a href={`tel:${personal.phone}`} className="footer__link">{personal.phone}</a>
              </li>
            </ul>
            <Link to="/contact" className="btn btn-outline" style={{ marginTop: '1.25rem', fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}>
              Book Free Consultation
            </Link>
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <div className="footer__disclaimer">
          <p>
            <strong>⚠️ SEBI / AMFI Disclaimer:</strong> Mutual fund investments are subject to market risks. 
            Please read all scheme-related documents carefully before investing. 
            Past performance is not an indicator of future returns. 
            {personal.name} ({personal.arnNumber}) is an AMFI Registered Mutual Fund Distributor. 
            This website is for information purposes only and does not constitute investment advice.
          </p>
        </div>

        {/* ── Copyright ── */}
        <div className="footer__bottom">
          <p>© {year} {personal.firmName}. All rights reserved.</p>
          <p>Made with ❤️ in Pune</p>
        </div>

      </div>
    </footer>
  );
}
