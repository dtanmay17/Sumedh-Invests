/**
 * Journey.jsx — Animated career / growth timeline
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { journey, heroStats } from '../assets/data/siteData';
import { useInView, useCountUp } from '../hooks';
import PageNav from '../components/PageNav';
import './Journey.css';

/* ── Animated stat ──────────────────────────────── */
function AnimatedStat({ value, suffix, label }) {
  const [ref, inView] = useInView();
  const count = useCountUp(value, 1800, inView);
  return (
    <div className="journey-stat" ref={ref}>
      <div className="journey-stat__val">{count}<span>{suffix}</span></div>
      <div className="journey-stat__label">{label}</div>
    </div>
  );
}

/* ── Timeline Item ──────────────────────────────── */
function TimelineItem({ year, title, desc, icon, tag, index }) {
  const [ref, inView] = useInView();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`journey-item ${isLeft ? 'journey-item--left' : 'journey-item--right'} ${inView ? 'journey-item--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Card */}
      <div className="journey-card">
        <div className="journey-card__tag">
          <span className="tag tag-gold">{tag}</span>
        </div>
        <div className="journey-card__year">{year}</div>
        <div className="journey-card__icon">{icon}</div>
        <h3 className="journey-card__title">{title}</h3>
        <p className="journey-card__desc">{desc}</p>
      </div>

      {/* Centre node */}
      <div className="journey-node">
        <div className="journey-node__dot" />
      </div>

      {/* Empty spacer for opposite column */}
      <div className="journey-spacer" />
    </div>
  );
}

export default function Journey() {
  return (
    <div className="page-wrapper">

      {/* ── Hero ── */}
      <section className="journey-hero section-sm">
        <div className="journey-hero__glow" />
        <div className="container">
          <span className="section-tag">My Journey</span>
          <h1 className="journey-hero__heading">
            Every Chapter of<br />
            <em className="journey-hero__italic">My Story</em>
          </h1>
          <p className="journey-hero__sub">
            From a curious engineering student to a self-made wealth advisor —
            here's every pivot, milestone, and lesson along the way.
          </p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="journey-stats-section">
        <div className="container">
          <div className="journey-stats">
            {heroStats.map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Timeline</span>
            <h2>From Classroom to Boardroom</h2>
            <div className="gold-divider" />
            <p>A chronological look at the key events that shaped who I am as a financial advisor.</p>
          </div>

          <div className="journey-timeline">
            {/* Centre vertical line */}
            <div className="journey-timeline__line" />

            {journey.map((item, i) => (
              <TimelineItem key={item.year} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Learnings ── */}
      <section className="section" style={{ background: 'var(--color-bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Key Lessons</span>
            <h2>What the Journey Taught Me</h2>
            <div className="gold-divider" />
          </div>

          <div className="journey-lessons-grid">
            {[
              {
                num: '01',
                title: 'Passion over Prestige',
                text: 'Turning down engineering placements was the hardest decision. But building something of your own — even slowly — is infinitely more fulfilling than a comfortable salary doing work that doesn\'t excite you.',
              },
              {
                num: '02',
                title: 'Start Before You Feel Ready',
                text: 'I launched with only 10 clients and a lot of self-doubt. Two years later, I manage 150+ clients. Every expert was once a beginner. The only way to learn the craft is to do the work.',
              },
              {
                num: '03',
                title: 'Trust is Your Greatest Asset',
                text: 'Clients don\'t just invest money with me — they invest trust. Every recommendation I make either builds or erodes that trust. I have zero tolerance for anything that compromises client interest.',
              },
              {
                num: '04',
                title: 'Education Creates Loyalty',
                text: 'My most loyal clients are those I have educated the most. When clients understand why they\'re invested where they are, they don\'t panic in bear markets — they add more.',
              },
            ].map((lesson) => (
              <div className="card journey-lesson-card" key={lesson.num}>
                <div className="journey-lesson-card__num">{lesson.num}</div>
                <h4 className="journey-lesson-card__title">{lesson.title}</h4>
                <p className="journey-lesson-card__text">{lesson.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Books / Inspiration ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What I Read</span>
            <h2>Books That Changed My Thinking</h2>
            <div className="gold-divider" />
          </div>

          <div className="journey-books-grid">
            {[
              { title: 'The Psychology of Money',  author: 'Morgan Housel',       emoji: '🧠' },
              { title: 'The Intelligent Investor', author: 'Benjamin Graham',      emoji: '📈' },
              { title: 'One Up on Wall Street',    author: 'Peter Lynch',          emoji: '🚀' },
              { title: 'Let\'s Talk Money',        author: 'Monika Halan',         emoji: '💰' },
              { title: 'Rich Dad Poor Dad',        author: 'Robert Kiyosaki',      emoji: '🏠' },
              { title: 'Common Sense on MF',       author: 'John Bogle',           emoji: '📚' },
            ].map((b) => (
              <div className="journey-book-card" key={b.title}>
                <div className="journey-book-card__emoji">{b.emoji}</div>
                <div className="journey-book-card__title">{b.title}</div>
                <div className="journey-book-card__author">by {b.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Be Part of My Next Chapter</h2>
          <p style={{ maxWidth: 500, margin: '1rem auto 2rem' }}>
            My journey is defined by my clients' financial progress. Let me make yours a success story too.
          </p>
          <Link to="/contact" className="btn btn-primary">Start Your Journey →</Link>
        </div>
      </section>

      <PageNav />
    </div>
  );
}
