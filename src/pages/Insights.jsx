/** 
 * Insights.jsx — Blog / articles / financial education content
 * Features:
 *  - Filter by tag
 *  - Full article modal with markdown-style rendering
 *  - EmailJS webinar registration with confirmation email
 */

import React, { useState, useEffect } from 'react';
import { blogs } from '../assets/data/siteData';
import PageNav from '../components/PageNav';
import './Insights.css';

const ALL_TAGS = ['All', ...new Set(blogs.map((b) => b.tag))];

/* ── Simple markdown-ish renderer ───────────────── */
function RenderContent({ content }) {
  const lines = content.trim().split('\n');
  const elements = [];
  let tableBuffer = [];
  let inTable = false;

  const flushTable = () => {
    if (tableBuffer.length < 2) { tableBuffer = []; inTable = false; return; }
    const headers = tableBuffer[0].split('|').map(h => h.trim()).filter(Boolean);
    const rows = tableBuffer.slice(2).map(r => r.split('|').map(c => c.trim()).filter(Boolean));
    elements.push(
      <div className="article-table-wrap" key={`tbl-${elements.length}`}>
        <table className="article-table">
          <thead><tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
          <tbody>{rows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
    tableBuffer = []; inTable = false;
  };

  lines.forEach((line, idx) => {
    if (line.startsWith('|')) {
      inTable = true;
      tableBuffer.push(line);
      return;
    }
    if (inTable) flushTable();

    if (line.startsWith('### ')) {
      elements.push(<h3 key={idx}>{line.slice(4)}</h3>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={idx}>{line.slice(3)}</h2>);
    } else if (line.startsWith('# ')) {
      elements.push(<h1 key={idx}>{line.slice(2)}</h1>);
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(<p key={idx}><strong>{line.slice(2, -2)}</strong></p>);
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      elements.push(
        <ul key={idx} className="article-list">
          <li>{parseBold(line.slice(2))}</li>
        </ul>
      );
    } else if (/^\d+\.\s/.test(line)) {
      const text = line.replace(/^\d+\.\s/, '');
      elements.push(
        <ol key={idx} className="article-ol">
          <li>{parseBold(text)}</li>
        </ol>
      );
    } else if (line.trim() === '') {
      elements.push(<br key={idx} />);
    } else {
      elements.push(<p key={idx}>{parseBold(line)}</p>);
    }
  });

  if (inTable) flushTable();
  return <>{elements}</>;
}

function parseBold(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part
  );
}

/* ── Article Modal ───────────────────────────────── */
function ArticleModal({ blog, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div className="article-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="article-modal">
        <div className="article-modal__header">
          <div className="article-modal__meta">
            <span className="tag tag-gold">{blog.tag}</span>
            <span className="article-modal__date">{blog.date}</span>
            <span className="article-modal__readtime">⏱ {blog.readTime}</span>
          </div>
          <button className="article-modal__close" onClick={onClose} aria-label="Close article">✕</button>
        </div>
        <div className="article-modal__emoji">{blog.emoji}</div>
        <div className="article-modal__body">
          <RenderContent content={blog.content} />
        </div>
        <div className="article-modal__footer">
          <button className="btn btn-outline" onClick={onClose}>← Back to Insights</button>
        </div>
      </div>
    </div>
  );
}

/* ── Webinar Registration with EmailJS ──────────── */
// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID  = 'service_gqtdfrr';
const EMAILJS_TEMPLATE_ID = 'template_ckqtkz8';
const EMAILJS_PUBLIC_KEY  = 'BpAY3RofO4dmiqjjf';

function WebinarForm() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Load EmailJS dynamically
      const emailjs = await import('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js').catch(() => null);

      // Use emailjs-com from package if available, otherwise fetch via CDN
      let ejsModule;
      try {
        ejsModule = await import('emailjs-com');
      } catch {
        // EmailJS not bundled — call REST API directly as fallback
        const payload = {
          service_id:  EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id:     EMAILJS_PUBLIC_KEY,
          template_params: {
            to_name:    form.name,
            to_email:   form.email,
            phone:      form.phone,
            event_name: 'Monthly Financial Literacy Webinar',
            event_date: 'First Saturday of next month, 10:00 AM',
            host_name:  'Sumedh Rasal',
            firm_name:  'Sumedh Invests',
            reply_to:   'sumedh@sumedhinvests.com',
          },
        };
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('EmailJS API error');
        setStatus('success');
        return;
      }

      await ejsModule.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name:    form.name,
          to_email:   form.email,
          phone:      form.phone,
          event_name: 'Monthly Financial Literacy Webinar',
          event_date: 'First Saturday of next month, 10:00 AM',
          host_name:  'Sumedh Rasal',
          firm_name:  'Sumedh Invests',
          reply_to:   'sumedh@sumedhinvests.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="insights-newsletter__form-inner">
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎉</div>
          <h4>You're Registered!</h4>
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
            A confirmation has been sent to <strong style={{ color: 'var(--color-gold)' }}>{form.email}</strong>.
            <br />Check your inbox (and spam folder) for the Zoom link.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="insights-newsletter__form-inner">
      <h4>Register for Next Webinar</h4>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label">Your Name *</label>
          <input type="text" name="name" className="form-input" placeholder="Priya Sharma"
            value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input type="email" name="email" className="form-input" placeholder="priya@email.com"
            value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-label">Mobile Number</label>
          <input type="tel" name="phone" className="form-input" placeholder="+91 98765 43210"
            value={form.phone} onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Registering...' : 'Register Free →'}
        </button>
        {status === 'error' && (
          <p style={{ fontSize: '0.75rem', color: 'var(--color-danger)', textAlign: 'center' }}>
            Something went wrong. Please try again or WhatsApp us directly.
          </p>
        )}
        <p style={{ fontSize: '0.72rem', textAlign: 'center', color: 'var(--color-text-faint)' }}>
          A confirmation email will be sent to your inbox. No spam, ever.
        </p>
      </form>
    </div>
  );
}

/* ── Page ───────────────────────────────────────── */
export default function Insights() {
  const [activeTag,    setActiveTag]    = useState('All');
  const [selectedBlog, setSelectedBlog] = useState(null);

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
                <button
                  className="insights-card__cta"
                  onClick={() => setSelectedBlog(blog)}
                >
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
                updates, investing concepts, and Q&amp;A. Join 200+ attendees every month.
              </p>
              <ul className="insights-newsletter__points">
                <li>✓ Live every first Saturday, 10 AM</li>
                <li>✓ Zoom link sent 24 hours before</li>
                <li>✓ Recording available after</li>
                <li>✓ Free for everyone</li>
              </ul>
            </div>
            <div className="insights-newsletter__form">
              <WebinarForm />
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
              { term: 'SIP',           def: 'Systematic Investment Plan — invest a fixed amount every month automatically, regardless of market level.' },
              { term: 'NAV',           def: 'Net Asset Value — the price of one unit of a mutual fund, calculated daily based on the fund\'s portfolio.' },
              { term: 'AUM',           def: 'Assets Under Management — total market value of all investments managed by a fund or advisor.' },
              { term: 'CAGR',          def: 'Compound Annual Growth Rate — measures an investment\'s annual growth rate over a period, smoothing out volatility.' },
              { term: 'ELSS',          def: 'Equity Linked Savings Scheme — tax-saving mutual fund with a 3-year lock-in, eligible for ₹1.5L 80C deduction.' },
              { term: 'Expense Ratio', def: 'The annual fee charged by the AMC to manage a mutual fund, expressed as a percentage of AUM.' },
              { term: 'Rebalancing',   def: 'Adjusting your portfolio back to its target allocation after market movements have shifted the proportions.' },
              { term: 'Exit Load',     def: 'A small fee charged when you redeem mutual fund units before a specified holding period — typically 1% within 1 year.' },
            ].map((g) => (
              <div className="insights-glossary-item" key={g.term}>
                <div className="insights-glossary-term">{g.term}</div>
                <div className="insights-glossary-def">{g.def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Article Modal ── */}
      {selectedBlog && (
        <ArticleModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}

      <PageNav />
    </div>
  );
}
