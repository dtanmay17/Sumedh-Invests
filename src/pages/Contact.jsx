/**
 * Contact.jsx — Contact form with EmailJS confirmation emails
 */

import React, { useState } from 'react';
import { personal } from '../assets/data/siteData';
import PageNav from '../components/PageNav';
import './Contact.css';

// ── EmailJS Config ───────────────────────────────
// Replace with your actual EmailJS credentials from https://emailjs.com
const EMAILJS_SERVICE_ID        = 'service_gqtdfrr';
const EMAILJS_CONTACT_TEMPLATE  = 'template_6e8cmha';  // template to notify you + confirm to user
const EMAILJS_PUBLIC_KEY        = 'BpAY3RofO4dmiqjjf';

/* ── Helper: send via EmailJS REST API ─────────── */
async function sendEmail(templateId, params) {
  // Try bundled emailjs-com first (package.json has it)
  try {
    const ejsModule = await import('emailjs-com');
    await ejsModule.send(EMAILJS_SERVICE_ID, templateId, params, EMAILJS_PUBLIC_KEY);
    return true;
  } catch (importErr) {
    // Fallback: direct REST call
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id:      EMAILJS_SERVICE_ID,
        template_id:     templateId,
        user_id:         EMAILJS_PUBLIC_KEY,
        template_params: params,
      }),
    });
    if (!res.ok) throw new Error(`EmailJS HTTP ${res.status}`);
    return true;
  }
}

/* ── Contact Card ───────────────────────────────── */
function ContactCard({ icon, label, value, href, sublabel }) {
  return (
    <a
      href={href}
      className="contact-info-card"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
    >
      <div className="contact-info-card__icon">{icon}</div>
      <div>
        <div className="contact-info-card__label">{label}</div>
        <div className="contact-info-card__value">{value}</div>
        {sublabel && <div className="contact-info-card__sub">{sublabel}</div>}
      </div>
      <div className="contact-info-card__arrow">→</div>
    </a>
  );
}

/* ── Page ───────────────────────────────────────── */
export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', goal: '', amount: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const goalLabels = {
      retirement: 'Retirement Planning',
      'child-edu': "Child's Education",
      home:        'Home Purchase',
      wealth:      'Wealth Creation',
      tax:         'Tax Saving (ELSS)',
      emergency:   'Emergency Fund',
      other:       'Other',
    };

    const amountLabels = {
      lt5k:    'Less than ₹5,000/month',
      '5k-10k':'₹5,000 – ₹10,000/month',
      '10k-25k':'₹10,000 – ₹25,000/month',
      '25k-50k':'₹25,000 – ₹50,000/month',
      gt50k:   'More than ₹50,000/month',
      lumpsum: 'Lump Sum Investment',
    };

    try {
      await sendEmail(EMAILJS_CONTACT_TEMPLATE, {
        // User-facing confirmation fields
        to_name:         form.name,
        to_email:        form.email,
        phone:           form.phone,
        goal:            goalLabels[form.goal] || form.goal || 'Not specified',
        monthly_amount:  amountLabels[form.amount] || form.amount || 'Not specified',
        message:         form.message || 'No additional message.',
        // Advisor notification fields
        advisor_name:    personal.name,
        firm_name:       personal.firmName,
        advisor_email:   personal.email,
        reply_to:        personal.email,
        submitted_at:    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      });
      setStatus('success');
    } catch (err) {
      console.error('Contact form email error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="page-wrapper">

      {/* ── Hero ── */}
      <section className="contact-hero section-sm">
        <div className="contact-hero__glow" />
        <div className="container">
          <span className="section-tag">Contact</span>
          <h1 className="contact-hero__heading">
            Let's Talk About<br />
            <em className="contact-hero__italic">Your Financial Goals</em>
          </h1>
          <p className="contact-hero__sub">
            Whether you're just starting out or looking to optimise your existing portfolio —
            the first conversation is always free. No obligations, no pressure.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section">
        <div className="container contact-layout">

          {/* ── Left: Info ── */}
          <div className="contact-left">
            <h2>Get in Touch</h2>
            <p style={{ marginBottom: '2rem' }}>
              Reach out via any channel you prefer — I typically respond within a few hours.
            </p>

            <div className="contact-info-cards">
              <ContactCard
                icon="📱"
                label="Call or WhatsApp"
                value={personal.phone}
                href={`tel:${personal.phone}`}
                sublabel="Mon–Sat, 9 AM – 7 PM"
              />
              <ContactCard
                icon="💬"
                label="WhatsApp"
                value="Chat with me instantly"
                href={`https://wa.me/${personal.whatsapp}?text=Hi%20Sumedh%2C%20I%20want%20to%20know%20more%20about%20investing.`}
                sublabel="Usually replies in < 1 hr"
              />
              <ContactCard
                icon="📧"
                label="Email"
                value={personal.email}
                href={`mailto:${personal.email}`}
                sublabel="Detailed queries welcome"
              />
              <ContactCard
                icon="📍"
                label="Location"
                value={personal.location}
                href="#"
                sublabel="Online consultations PAN India"
              />
              <ContactCard
                icon="💼"
                label="LinkedIn"
                value="Connect professionally"
                href={personal.linkedIn}
                sublabel="linkedin.com/in/sumedhhrasal"
              />
            </div>

            {/* Office hours */}
            <div className="contact-hours">
              <h4>📅 Availability</h4>
              <div className="contact-hours__grid">
                <span>Mon – Fri</span><span>9:00 AM – 7:00 PM</span>
                <span>Saturday</span><span>10:00 AM – 4:00 PM</span>
                <span>Sunday</span><span>By appointment only</span>
              </div>
            </div>

            {/* Credentials reminder */}
            <div className="contact-cred">
              <div className="contact-cred__item">
                <span className="tag tag-gold">✓ AMFI</span>
                <span>Registered MFD</span>
              </div>
              <div className="contact-cred__item">
                <span className="tag tag-gold">✓ NISM</span>
                <span>Series V-A Certified</span>
              </div>
              <div className="contact-cred__item">
                <span className="tag tag-gold">✓ SEBI</span>
                <span>Regulated Advisory</span>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="contact-right">
            <div className="contact-form-card">
              <div className="contact-form-card__header">
                <h3>Book a Free Consultation</h3>
                <p>Fill in the details below and I'll reach out to schedule a call at your convenience.</p>
              </div>

              {status === 'success' ? (
                <div className="contact-form-success">
                  <div className="contact-form-success__icon">✅</div>
                  <h4>Message Sent!</h4>
                  <p>
                    Thank you, <strong style={{ color: 'var(--color-gold)' }}>{form.name || 'friend'}</strong>!
                    A confirmation has been sent to <strong style={{ color: 'var(--color-gold)' }}>{form.email}</strong>.
                    I'll get back to you within 24 hours to schedule your consultation.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => {
                      setStatus(null);
                      setForm({ name: '', email: '', phone: '', goal: '', amount: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Priya Sharma"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="priya@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Primary Financial Goal</label>
                    <select
                      name="goal"
                      className="form-select"
                      value={form.goal}
                      onChange={handleChange}
                    >
                      <option value="">Select your goal...</option>
                      <option value="retirement">Retirement Planning</option>
                      <option value="child-edu">Child's Education</option>
                      <option value="home">Home Purchase</option>
                      <option value="wealth">Wealth Creation</option>
                      <option value="tax">Tax Saving (ELSS)</option>
                      <option value="emergency">Emergency Fund</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Monthly Investment Budget</label>
                    <select
                      name="amount"
                      className="form-select"
                      value={form.amount}
                      onChange={handleChange}
                    >
                      <option value="">Select range...</option>
                      <option value="lt5k">Less than ₹5,000</option>
                      <option value="5k-10k">₹5,000 – ₹10,000</option>
                      <option value="10k-25k">₹10,000 – ₹25,000</option>
                      <option value="25k-50k">₹25,000 – ₹50,000</option>
                      <option value="gt50k">More than ₹50,000</option>
                      <option value="lumpsum">Lump Sum Investment</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Questions</label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      placeholder="Tell me a bit about your current investments or any specific questions you have..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? '⏳ Sending...' : 'Book Free Consultation →'}
                  </button>

                  {status === 'error' && (
                    <p style={{ fontSize: '0.78rem', color: 'var(--color-danger)', textAlign: 'center' }}>
                      Something went wrong. Please try again or reach out via WhatsApp directly.
                    </p>
                  )}

                  <p className="contact-form__note">
                    🔒 Your information is kept strictly confidential. A confirmation email will be sent to your inbox.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA ── */}
      <section className="contact-wa-section">
        <div className="container contact-wa">
          <div className="contact-wa__icon">💬</div>
          <div>
            <h3>Prefer WhatsApp?</h3>
            <p>Send me a quick message and I'll reply personally — usually within an hour during business hours.</p>
          </div>
          <a
            href={`https://wa.me/${personal.whatsapp}?text=Hi%20Sumedh%2C%20I%27m%20interested%20in%20starting%20my%20investment%20journey.`}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Me Now →
          </a>
        </div>
      </section>

      <PageNav />
    </div>
  );
}
