/**
 * Services.jsx — Full services listing + fund categories table
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { services, fundCategories } from '../assets/data/siteData';
import PageNav from '../components/PageNav';
import './Services.css';

/* ── Full Service Card ──────────────────────────── */
function ServiceCard({ icon, title, desc, features }) {
  return (
    <div className="card services-card">
      <div className="services-card__icon">{icon}</div>
      <h3 className="services-card__title">{title}</h3>
      <p className="services-card__desc">{desc}</p>
      <ul className="services-card__features">
        {features.map((f) => (
          <li key={f}><span className="services-card__check">✓</span>{f}</li>
        ))}
      </ul>
    </div>
  );
}

/* ── Risk badge colour ──────────────────────────── */
const riskColor = {
  'Very Low':      '#34d399',
  'Low':           '#60a5fa',
  'Moderate':      '#fbbf24',
  'Moderate-High': '#f97316',
  'High':          '#f87171',
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('equity');

  const tabs = [
    { id: 'equity', label: '📈 Equity Funds' },
    { id: 'debt',   label: '🛡️ Debt Funds'   },
    { id: 'hybrid', label: '⚖️ Hybrid Funds'  },
    { id: 'tax',    label: '🧾 Tax Savers'    },
  ];

  const tabFunds = {
    equity: fundCategories.filter(f => ['Large Cap Funds','Flexi Cap Funds','Small & Mid Cap','International Funds'].includes(f.name)),
    debt:   fundCategories.filter(f => ['Short Duration Debt','Liquid / Overnight'].includes(f.name)),
    hybrid: fundCategories.filter(f => ['Balanced Advantage'].includes(f.name)),
    tax:    fundCategories.filter(f => ['ELSS Tax Saver'].includes(f.name)),
  };

  return (
    <div className="page-wrapper">

      {/* ── Hero ── */}
      <section className="services-hero section-sm">
        <div className="services-hero__glow" />
        <div className="container">
          <span className="section-tag">Services</span>
          <h1 className="services-hero__heading">
            Everything You Need<br />
            <em className="services-hero__italic">to Grow Your Wealth</em>
          </h1>
          <p className="services-hero__sub">
            Comprehensive, goal-based mutual fund advisory — from your first SIP to a full retirement plan.
            No commissions from you. No hidden fees. Just honest, data-backed advice.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link to="/contact" className="btn btn-primary">Get Started Free →</Link>
            <a href="#fund-categories" className="btn btn-ghost">See Fund Categories ↓</a>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What I Offer</span>
            <h2>My Core Services</h2>
            <div className="gold-divider" />
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Me ── */}
      <section className="section" style={{ background: 'var(--color-bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Me</span>
            <h2>The Arjun Wealth Difference</h2>
            <div className="gold-divider" />
          </div>

          <div className="services-diff-grid">
            {[
              { label: 'Arjun Wealth Advisors', plus: true },
              { label: 'Bank RM / Branch',      plus: false },
              { label: 'Online DIY Platform',   plus: false },
            ].map((col, ci) => (
              <div className={`services-diff-col ${col.plus ? 'services-diff-col--highlight' : ''}`} key={col.label}>
                <div className="services-diff-col__header">
                  {col.plus && <span className="tag tag-gold">⭐ Recommended</span>}
                  <h4>{col.label}</h4>
                </div>
                <ul className="services-diff-list">
                  {[
                    ['Personalised goal-based advice',   true,  false, false],
                    ['AMFI Registered & SEBI regulated', true,  true,  false],
                    ['No product sales targets',         true,  false, true ],
                    ['Quarterly portfolio reviews',      true,  false, false],
                    ['Direct client relationship',       true,  false, false],
                    ['Financial education included',     true,  false, false],
                    ['WhatsApp support',                 true,  false, false],
                  ].map(([item, a, b, c], i) => {
                    const val = [a, b, c][ci];
                    return (
                      <li key={i} className={`services-diff-item ${val ? 'services-diff-item--yes' : 'services-diff-item--no'}`}>
                        {val ? '✓' : '✗'} {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fund Categories ── */}
      <section className="section" id="fund-categories">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Fund Universe</span>
            <h2>Funds I Work With</h2>
            <div className="gold-divider" />
            <p>I work across all major fund categories — each recommendation is matched to your specific goal and risk appetite.</p>
          </div>

          {/* Tabs */}
          <div className="services-tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`services-tab ${activeTab === t.id ? 'services-tab--active' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Fund table */}
          <div className="services-fund-table">
            <div className="services-fund-table__head">
              <span>Fund Category</span>
              <span>Risk Level</span>
              <span>Ideal Horizon</span>
              <span>Best For</span>
            </div>
            {(tabFunds[activeTab] || []).map((f) => (
              <div className="services-fund-row" key={f.name}>
                <span className="services-fund-row__name">{f.name}</span>
                <span
                  className="services-fund-row__risk"
                  style={{ color: riskColor[f.risk] || 'var(--color-text)' }}
                >
                  {f.risk}
                </span>
                <span className="services-fund-row__horizon">{f.horizon}</span>
                <span className="services-fund-row__ideal">{f.ideal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Invest?</h2>
          <p style={{ maxWidth: 500, margin: '1rem auto 2rem' }}>
            Start with a free 30-minute call. No paperwork required upfront — just a conversation about your goals.
          </p>
          <Link to="/contact" className="btn btn-primary">Book Your Free Call →</Link>
        </div>
      </section>

      <PageNav />
    </div>
  );
}
