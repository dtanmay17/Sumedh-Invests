/**
 * Home.jsx — Landing / Hero page
 * ─────────────────────────────────────────────────
 * Sections:
 *  1. Hero — headline, sub, stats, CTAs, ambient glow
 *  2. About teaser
 *  3. Services grid preview
 *  4. Process steps
 *  5. Testimonial spotlight
 *  6. CTA banner
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { personal, heroStats, services, testimonials, process } from '../assets/data/siteData';
import { useInView, useCountUp } from '../hooks';
import PageNav from '../components/PageNav';
import './Home.css';

/* ── Animated stat counter ─────────────────────── */
function StatCounter({ value, suffix, label }) {
  const [ref, inView] = useInView();
  const count = useCountUp(value, 1800, inView);
  return (
    <div className="home-stat" ref={ref}>
      <div className="home-stat__value">
        {count}<span className="home-stat__suffix">{suffix}</span>
      </div>
      <div className="home-stat__label">{label}</div>
    </div>
  );
}

/* ── Service card preview ──────────────────────── */
function ServicePreview({ icon, title, desc }) {
  return (
    <div className="card home-service-card">
      <div className="home-service-card__icon">{icon}</div>
      <h3 className="home-service-card__title">{title}</h3>
      <p className="home-service-card__desc">{desc}</p>
    </div>
  );
}

/* ── Process step ──────────────────────────────── */
function ProcessStep({ step, title, desc, last }) {
  const [ref, inView] = useInView();
  return (
    <div className={`home-process-step ${inView ? 'home-process-step--visible' : ''}`} ref={ref}>
      <div className="home-process-step__number">{step}</div>
      {!last && <div className="home-process-step__line" />}
      <div className="home-process-step__content">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

/* ── Page Component ────────────────────────────── */
export default function Home() {
  return (
    <div className="page-wrapper">

      {/* ════ 1. HERO ════════════════════════════════ */}
      <section className="home-hero">
        {/* Ambient glow orbs */}
        <div className="home-hero__orb home-hero__orb--1" />
        <div className="home-hero__orb home-hero__orb--2" />
        <div className="home-hero__orb home-hero__orb--3" />

        <div className="container home-hero__inner">
          <div className="home-hero__content">
            {/* Badge */}
            <div className="section-tag home-hero__badge animate-fadeUp">
              AMFI Registered • {personal.arnNumber}
            </div>

            {/* Headline */}
            <h1 className="home-hero__heading animate-fadeUp" style={{ animationDelay: '0.1s' }}>
              Your Wealth,
              <br />
              <em className="home-hero__italic">Engineered</em>
              <br />
              to Grow.
            </h1>

            {/* Tagline */}
            <p className="home-hero__tagline animate-fadeUp" style={{ animationDelay: '0.2s' }}>
              {personal.tagline}
            </p>

            {/* CTAs */}
            <div className="home-hero__ctas animate-fadeUp" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact" className="btn btn-primary">
                Book Free Consultation →
              </Link>
              <Link to="/about" className="btn btn-ghost">
                My Story
              </Link>
            </div>

            {/* Trust badges */}
            <div className="home-hero__trust animate-fadeUp" style={{ animationDelay: '0.4s' }}>
              <span>✓ SEBI Regulated</span>
              <span>✓ No Hidden Fees</span>
              <span>✓ Free First Call</span>
            </div>
          </div>

          {/* Profile card (right side) */}
          <div className="home-hero__card animate-fadeUp animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="home-profile-card">
              <div className="home-profile-card__avatar">AS</div>
              <div className="home-profile-card__info">
                <h3>{personal.name}</h3>
                <p>Mutual Fund Distributor</p>
                <div className="home-profile-card__badges">
                  <span className="tag tag-gold">AMFI Registered</span>
                  <span className="tag tag-gold">NISM Certified</span>
                </div>
              </div>
              <div className="home-profile-card__details">
                <div>
                  <span className="detail-label">Education</span>
                  <span className="detail-val">B.E. Mechanical, COEP '23</span>
                </div>
                <div>
                  <span className="detail-label">Specialisation</span>
                  <span className="detail-val">Goal-Based Wealth Planning</span>
                </div>
                <div>
                  <span className="detail-label">Serving</span>
                  <span className="detail-val">Pune & PAN India (Online)</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="container">
          <div className="home-stats-bar">
            {heroStats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ════ 2. ABOUT TEASER ════════════════════════ */}
      <section className="section home-about-teaser">
        <div className="container home-about-teaser__inner">
          <div className="home-about-teaser__text">
            <span className="section-tag">My Story</span>
            <h2>From Mechanical Blueprints<br />to Financial Blueprints</h2>
            <p>
              I graduated with a B.E. in Mechanical Engineering from COEP Pune in 2023.
              While most of my peers headed to engineering jobs, I chose a different path —
              one driven by a deep curiosity about how money works and a desire to help people
              build financial security.
            </p>
            <p style={{ marginTop: '1rem' }}>
              My engineering training taught me to think in systems, analyse data, and optimise
              for outcomes — skills that translate remarkably well to financial planning.
              Today, I apply that same rigour to building wealth for my clients.
            </p>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
              Read Full Story →
            </Link>
          </div>
          <div className="home-about-teaser__visual">
            <div className="home-about-card">
              <div className="home-about-card__year">2019</div>
              <div className="home-about-card__event">Started B.E. Engineering</div>
              <div className="home-about-card__connector" />
            </div>
            <div className="home-about-card home-about-card--mid">
              <div className="home-about-card__year">2022</div>
              <div className="home-about-card__event">NISM Certification</div>
              <div className="home-about-card__connector" />
            </div>
            <div className="home-about-card home-about-card--highlight">
              <div className="home-about-card__year">2023</div>
              <div className="home-about-card__event">🚀 Launched Arjun Wealth Advisors</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ 3. SERVICES PREVIEW ════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What I Offer</span>
            <h2>Services Tailored<br />to Your Goals</h2>
            <div className="gold-divider" />
            <p>From your first SIP to a comprehensive retirement plan — I cover every aspect of your investment journey.</p>
          </div>

          <div className="home-services-grid">
            {services.slice(0, 3).map((s) => (
              <ServicePreview key={s.title} {...s} />
            ))}
          </div>

          <div className="home-services-cta">
            <Link to="/services" className="btn btn-outline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ════ 4. PROCESS ═════════════════════════════ */}
      <section className="section" style={{ background: 'var(--color-bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>From Hello to<br />Healthy Portfolio</h2>
            <div className="gold-divider" />
            <p>A simple, transparent process designed to get you invested with confidence.</p>
          </div>

          <div className="home-process">
            {process.map((p, i) => (
              <ProcessStep key={p.step} {...p} last={i === process.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ════ 5. TESTIMONIAL SPOTLIGHT ═══════════════ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Stories</span>
            <h2>What My Clients Say</h2>
            <div className="gold-divider" />
          </div>

          <div className="home-testimonials-grid">
            {testimonials.slice(0, 2).map((t) => (
              <div className="card home-testimonial-card" key={t.name}>
                <div className="home-testimonial-card__stars">
                  {'★'.repeat(t.stars)}
                </div>
                <blockquote className="home-testimonial-card__text">
                  "{t.text}"
                </blockquote>
                <div className="home-testimonial-card__author">
                  <div className="home-testimonial-card__avatar">{t.avatar}</div>
                  <div>
                    <div className="home-testimonial-card__name">{t.name}</div>
                    <div className="home-testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/about#testimonials" className="btn btn-ghost">Read More Stories →</Link>
          </div>
        </div>
      </section>

      {/* ════ 6. CTA BANNER ══════════════════════════ */}
      <section className="home-cta-banner">
        <div className="home-cta-banner__glow" />
        <div className="container home-cta-banner__inner">
          <div>
            <h2>Ready to Start Your<br />Investment Journey?</h2>
            <p>Book a free 30-minute consultation call. No obligations, no jargon — just clarity.</p>
          </div>
          <div className="home-cta-banner__actions">
            <Link to="/contact" className="btn btn-primary">
              Book Free Call →
            </Link>
            <a href={`https://wa.me/${personal.whatsapp}`} className="btn btn-ghost" target="_blank" rel="noreferrer">
              💬 WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      <PageNav />
    </div>
  );
}
