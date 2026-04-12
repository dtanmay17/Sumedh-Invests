/**
 * Insights.jsx — Blog / articles / financial education content
 */

import React, { useState } from 'react';
import { blogs } from '../assets/data/siteData';
import PageNav from '../components/PageNav';
import './Insights.css';

const ALL_TAGS = ['All', ...new Set(blogs.map((b) => b.tag))];

export default function Insights() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? blogs
    : blogs.filter((b) => b.tag === activeTag);

  return (
    <div className="page-wrapper">

      {/* ── Hero ── */}
      <section className="insights-hero section-sm">
        <div className="insights-hero__glow" />
        <div className="container">
          <span className="section-tag">Insights</span>
          <h1 className="insights-hero__heading">
            Financial Clarity,<br />
            <em className="insights-hero__italic">One Article at a Time</em>
          </h1>
          <p className="insights-hero__sub">
            Plain-language articles on investing, SIPs, tax saving, and wealth building —
            written from the perspective of a young investor who started with ₹1,000/month.
          </p>
        </div>
      </section>

      {/* ── Filter Tags ── */}
      <section className="section">
        <div className="container">
          <div className="insights-filters">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                className={`insights-filter-btn ${activeTag === tag ? 'insights-filter-btn--active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* ── Articles Grid ── */}
          <div className="insights-grid">
            {filtered.map((blog) => (
              <article className="card insights-card" key={blog.id}>
                <div className="insights-card__top">
                  <span className="insights-card__emoji">{blog.emoji}</span>
                  <span className="tag tag-gold">{blog.tag}</span>
                </div>
                <h3 className="insights-card__title">{blog.title}</h3>
                <p className="insights-card__excerpt">{blog.excerpt}</p>
                <div className="insights-card__meta">
                  <span className="insights-card__date">{blog.date}</span>
                  <span className="insights-card__readtime">⏱ {blog.readTime}</span>
                </div>
                <button className="insights-card__cta">
                  Read Article →
                </button>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="insights-empty">
              <p>No articles found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter / Webinar CTA ── */}
      <section className="section" style={{ background: 'var(--color-bg-soft)' }}>
        <div className="container">
          <div className="insights-newsletter">
            <div className="insights-newsletter__text">
              <span className="section-tag">Stay Informed</span>
              <h2>Monthly Financial<br />Literacy Webinar</h2>
              <p>
                I host a free monthly webinar for my clients and followers covering market
                updates, investing concepts, and Q&A. Join 200+ attendees every month.
              </p>
              <ul className="insights-newsletter__points">
                <li>✓ Live every first Saturday, 10 AM</li>
                <li>✓ Zoom link sent 24 hours before</li>
                <li>✓ Recording available after</li>
                <li>✓ Free for everyone</li>
              </ul>
            </div>
            <div className="insights-newsletter__form">
              <div className="insights-newsletter__form-inner">
                <h4>Register for Next Webinar</h4>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-input" placeholder="Priya Sharma" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="priya@email.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mobile Number</label>
                  <input type="tel" className="form-input" placeholder="+91 98765 43210" />
                </div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  Register Free →
                </button>
                <p style={{ fontSize: '0.72rem', textAlign: 'center', marginTop: '0.5rem', color: 'var(--color-text-faint)' }}>
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Concepts Glossary ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Quick Reference</span>
            <h2>Key Investing Terms,<br />Explained Simply</h2>
            <div className="gold-divider" />
          </div>

          <div className="insights-glossary">
            {[
              { term: 'SIP',      def: 'Systematic Investment Plan — invest a fixed amount every month automatically, regardless of market level.' },
              { term: 'NAV',      def: 'Net Asset Value — the price of one unit of a mutual fund, calculated daily based on the fund\'s portfolio.' },
              { term: 'AUM',      def: 'Assets Under Management — total market value of all investments managed by a fund or advisor.' },
              { term: 'CAGR',     def: 'Compound Annual Growth Rate — measures an investment\'s annual growth rate over a period, smoothing out volatility.' },
              { term: 'ELSS',     def: 'Equity Linked Savings Scheme — tax-saving mutual fund with a 3-year lock-in, eligible for ₹1.5L 80C deduction.' },
              { term: 'Expense Ratio', def: 'The annual fee charged by the AMC to manage a mutual fund, expressed as a percentage of AUM.' },
              { term: 'Rebalancing',   def: 'Adjusting your portfolio back to its target allocation after market movements have shifted the proportions.' },
              { term: 'Exit Load', def: 'A small fee charged when you redeem mutual fund units before a specified holding period — typically 1% within 1 year.' },
            ].map((g) => (
              <div className="insights-glossary-item" key={g.term}>
                <div className="insights-glossary-term">{g.term}</div>
                <div className="insights-glossary-def">{g.def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageNav />
    </div>
  );
}
