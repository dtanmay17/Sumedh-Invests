/**
 * About.jsx — Personal story, credentials, philosophy, full testimonials
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { personal, credentials, testimonials } from '../assets/data/siteData';
import PageNav from '../components/PageNav';
import './About.css';

/* ── Credential card ────────────────────────────── */
function CredentialCard({ icon, name, code, issuer, year }) {
  return (
    <div className="about-credential-card card">
      <div className="about-credential-card__icon">{icon}</div>
      <div>
        <div className="about-credential-card__name">{name}</div>
        <div className="about-credential-card__code">{code}</div>
        <div className="about-credential-card__meta">{issuer} · {year}</div>
      </div>
    </div>
  );
}

/* ── Testimonial card ───────────────────────────── */
function TestimonialCard({ name, role, stars, text, avatar, since }) {
  return (
    <div className="about-testimonial card">
      <div className="about-testimonial__header">
        <div className="about-testimonial__avatar">{avatar}</div>
        <div>
          <div className="about-testimonial__name">{name}</div>
          <div className="about-testimonial__role">{role}</div>
          <div className="about-testimonial__since">{since}</div>
        </div>
        <div className="about-testimonial__stars">{'★'.repeat(stars)}</div>
      </div>
      <blockquote className="about-testimonial__text">"{text}"</blockquote>
    </div>
  );
}

export default function About() {
  return (
    <div className="page-wrapper">

      {/* ── Page Hero ── */}
      <section className="about-hero section-sm">
        <div className="about-hero__glow" />
        <div className="container">
          <span className="section-tag">About Me</span>
          <h1 className="about-hero__heading">
            Arjun Sharma —<br />
            <em className="about-hero__italic">Engineer turned<br />Wealth Builder</em>
          </h1>
          <p className="about-hero__sub">
            The story of how curiosity about compound interest changed the trajectory of my career,
            and why I believe everyone deserves a trusted financial partner.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section">
        <div className="container about-story">

          {/* Side portrait card */}
          <div className="about-portrait-wrap">
            <div className="about-portrait">
              <div className="about-portrait__avatar">AS</div>
              <div className="about-portrait__details">
                <div className="about-portrait__detail">
                  <span>Name</span>
                  <strong>{personal.name}</strong>
                </div>
                <div className="about-portrait__detail">
                  <span>Qualification</span>
                  <strong>{personal.degree}</strong>
                </div>
                <div className="about-portrait__detail">
                  <span>College</span>
                  <strong>{personal.degreeCollege}</strong>
                </div>
                <div className="about-portrait__detail">
                  <span>Graduated</span>
                  <strong>{personal.degreeYear}</strong>
                </div>
                <div className="about-portrait__detail">
                  <span>ARN</span>
                  <strong>{personal.arnNumber}</strong>
                </div>
                <div className="about-portrait__detail">
                  <span>EUIN</span>
                  <strong>{personal.euin}</strong>
                </div>
                <div className="about-portrait__detail">
                  <span>Location</span>
                  <strong>{personal.location}</strong>
                </div>
              </div>
              <div className="about-portrait__actions">
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Book a Call
                </Link>
                <a href={`https://wa.me/${personal.whatsapp}`} className="btn btn-ghost" target="_blank" rel="noreferrer" style={{ width: '100%', justifyContent: 'center' }}>
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Story text */}
          <div className="about-story__text">
            <h2>Why I Chose Finance<br />Over Engineering</h2>

            <p>
              I joined B.E. Mechanical Engineering at COEP Pune in 2019 — one of Maharashtra's
              most prestigious colleges. I genuinely loved engineering. Thermodynamics, fluid mechanics,
              manufacturing processes — the systematic logic of how physical systems work was fascinating.
            </p>

            <p>
              But in my second year, something shifted. During COVID-19 lockdowns, I stumbled upon
              <em> The Psychology of Money</em> by Morgan Housel. It sparked an obsession. I started
              reading everything I could about investing — Graham, Lynch, Buffett, Indian personal
              finance blogs. I started a SIP with ₹1,000/month from my pocket money.
            </p>

            <p>
              By my third year, I had read over 30 books on investing and personal finance. I cleared
              the NISM Series V-A (Mutual Fund Distributors) exam while preparing for my final exams.
              I realised: <strong>this is what I want to do with my life.</strong>
            </p>

            <p>
              When placements came in 2023, I had multiple core engineering offers. I turned them all
              down. Instead, I registered my ARN number and launched <strong>Arjun Wealth Advisors</strong>
              — a one-person wealth advisory firm, starting with ten clients from my own college batch.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>The Engineering Advantage</h3>

            <p>
              My engineering background is not a detour — it's my biggest strength.
              Engineers think in systems. We're trained to break complex problems into
              components, analyse each, and optimise the whole. That's exactly what
              great financial planning requires.
            </p>

            <ul className="about-story__list">
              <li>📐 <strong>Systems thinking:</strong> I see a portfolio as a system, not a collection of funds</li>
              <li>📊 <strong>Data-driven:</strong> Every recommendation is backed by historical data and analysis</li>
              <li>🔄 <strong>Iteration:</strong> I review and improve portfolios the way engineers iterate on designs</li>
              <li>⚙️ <strong>Precision:</strong> No vague advice — everything is specific, measurable, and traceable</li>
            </ul>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>My Philosophy</h3>

            <p>
              I believe financial freedom is not just for the wealthy — it's for everyone who
              starts early and stays consistent. I don't sell products; I solve problems.
              My income is tied to your long-term growth, which means my incentives are
              perfectly aligned with yours.
            </p>

            <p>
              I work with working professionals, young couples, doctors, and business owners.
              Most of my clients are in their 20s and 30s — people at the most powerful
              stage of their investing journey, where compounding works most magically.
            </p>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="section" style={{ background: 'var(--color-bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Credentials</span>
            <h2>Education &amp; Certifications</h2>
            <div className="gold-divider" />
            <p>Formally qualified and SEBI-regulated to advise on mutual fund investments.</p>
          </div>

          <div className="about-credentials-grid">
            {credentials.map((c) => (
              <CredentialCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">My Values</span>
            <h2>What I Stand For</h2>
            <div className="gold-divider" />
          </div>

          <div className="about-values-grid">
            {[
              { icon: '🤝', title: 'Client-First Always', desc: 'Your goals come before any commission consideration. I only recommend what is right for you.' },
              { icon: '🔍', title: 'Radical Transparency', desc: 'I explain every recommendation. You will always know why a fund is being chosen for your portfolio.' },
              { icon: '📚', title: 'Continuous Learning', desc: 'Markets evolve. I read, research, and upskill constantly to give you the most current advice.' },
              { icon: '⏳', title: 'Long-Term Thinking', desc: 'Wealth is built over decades, not months. I help you stay the course through all market cycles.' },
              { icon: '🔐', title: 'Data Privacy', desc: 'Your financial data is kept strictly confidential and never shared with any third party.' },
              { icon: '💡', title: 'Financial Education', desc: 'I believe informed investors make better decisions. I host monthly webinars for my clients.' },
            ].map((v) => (
              <div className="card about-value-card" key={v.title}>
                <div className="about-value-card__icon">{v.icon}</div>
                <h4 className="about-value-card__title">{v.title}</h4>
                <p className="about-value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section" id="testimonials" style={{ background: 'var(--color-bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Testimonials</span>
            <h2>Real Stories, Real Growth</h2>
            <div className="gold-divider" />
          </div>

          <div className="about-testimonials-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <PageNav />
    </div>
  );
}
