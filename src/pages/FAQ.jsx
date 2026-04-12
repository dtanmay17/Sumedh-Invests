/**
 * FAQ.jsx — Accordion FAQ with SIP calculator widget
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../assets/data/siteData';
import PageNav from '../components/PageNav';
import './FAQ.css';

/* ── Accordion Item ─────────────────────────────── */
function AccordionItem({ q, a, index, open, onToggle }) {
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={() => onToggle(index)}>
        <span className="faq-item__num">{String(index + 1).padStart(2, '0')}</span>
        <span className="faq-item__q-text">{q}</span>
        <span className={`faq-item__icon ${open ? 'faq-item__icon--open' : ''}`}>+</span>
      </button>
      <div className="faq-item__answer-wrap" style={{ maxHeight: open ? '600px' : '0' }}>
        <div className="faq-item__answer">{a}</div>
      </div>
    </div>
  );
}

/* ── SIP Calculator ─────────────────────────────── */
function SIPCalculator() {
  const [monthly,  setMonthly]  = useState(5000);
  const [years,    setYears]    = useState(10);
  const [rate,     setRate]     = useState(12);

  const months     = years * 12;
  const monthlyRate = rate / 12 / 100;
  const invested   = monthly * months;
  const fv         = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const returns    = fv - invested;

  const fmt = (n) => {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
    if (n >= 100000)   return `₹${(n / 100000).toFixed(2)} L`;
    return `₹${Math.round(n).toLocaleString('en-IN')}`;
  };

  return (
    <div className="sip-calc">
      <div className="sip-calc__header">
        <span className="section-tag">Free Tool</span>
        <h3>SIP Return Calculator</h3>
        <p>Estimate how your SIP can grow over time with compounding.</p>
      </div>

      <div className="sip-calc__body">
        <div className="sip-calc__controls">

          {/* Monthly SIP */}
          <div className="sip-calc__control">
            <div className="sip-calc__control-header">
              <label>Monthly SIP Amount</label>
              <span className="sip-calc__value">{fmt(monthly)}</span>
            </div>
            <input
              type="range"
              min={500}
              max={100000}
              step={500}
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="sip-calc__slider"
            />
            <div className="sip-calc__range-labels"><span>₹500</span><span>₹1L</span></div>
          </div>

          {/* Duration */}
          <div className="sip-calc__control">
            <div className="sip-calc__control-header">
              <label>Investment Duration</label>
              <span className="sip-calc__value">{years} yr</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="sip-calc__slider"
            />
            <div className="sip-calc__range-labels"><span>1 yr</span><span>30 yr</span></div>
          </div>

          {/* Expected Rate */}
          <div className="sip-calc__control">
            <div className="sip-calc__control-header">
              <label>Expected Annual Return</label>
              <span className="sip-calc__value">{rate}%</span>
            </div>
            <input
              type="range"
              min={6}
              max={20}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="sip-calc__slider"
            />
            <div className="sip-calc__range-labels"><span>6%</span><span>20%</span></div>
          </div>
        </div>

        {/* Results */}
        <div className="sip-calc__results">
          <div className="sip-calc__result-item">
            <div className="sip-calc__result-label">Total Invested</div>
            <div className="sip-calc__result-val sip-calc__result-val--invested">{fmt(invested)}</div>
          </div>
          <div className="sip-calc__result-item">
            <div className="sip-calc__result-label">Est. Returns</div>
            <div className="sip-calc__result-val sip-calc__result-val--returns">{fmt(returns)}</div>
          </div>
          <div className="sip-calc__result-item sip-calc__result-item--total">
            <div className="sip-calc__result-label">Total Value</div>
            <div className="sip-calc__result-val sip-calc__result-val--total">{fmt(fv)}</div>
          </div>

          {/* Donut chart (CSS-only) */}
          <div
            className="sip-calc__donut"
            style={{
              '--invested-pct': `${Math.round((invested / fv) * 360)}deg`,
            }}
          />

          <p className="sip-calc__disclaimer">
            * Indicative estimates only. Actual returns may vary. Not a guarantee of performance.
          </p>

          <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Start This SIP With Me →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────── */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="page-wrapper">

      {/* ── Hero ── */}
      <section className="faq-hero section-sm">
        <div className="faq-hero__glow" />
        <div className="container">
          <span className="section-tag">FAQ</span>
          <h1 className="faq-hero__heading">
            Questions?<br />
            <em className="faq-hero__italic">I Have Answers.</em>
          </h1>
          <p className="faq-hero__sub">
            The most common questions I get from new clients — answered honestly and in plain language.
          </p>
        </div>
      </section>

      {/* ── FAQ + Calculator ── */}
      <section className="section">
        <div className="container faq-layout">

          {/* Accordion */}
          <div className="faq-accordion">
            <h2 style={{ marginBottom: 'var(--space-xl)' }}>Common Questions</h2>
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                {...item}
                index={i}
                open={openIndex === i}
                onToggle={toggle}
              />
            ))}
          </div>

          {/* Calculator */}
          <div className="faq-sidebar">
            <SIPCalculator />
          </div>
        </div>
      </section>

      {/* ── Still have questions ── */}
      <section className="section-sm" style={{ background: 'var(--color-bg-soft)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Still have questions?</h2>
          <p style={{ maxWidth: 480, margin: '1rem auto 2rem' }}>
            Every financial situation is unique. Book a free call and I'll answer all your questions personally.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Book Free Consultation →</Link>
            <Link to="/contact" className="btn btn-ghost">Send a Message</Link>
          </div>
        </div>
      </section>

      <PageNav />
    </div>
  );
}
