# Arjun Wealth Advisors — Portfolio Website

A professional multi-page website for a Mutual Fund Distributor, built with React.js.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

```bash
# 1. Navigate to project folder
cd mfd-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The site will open at **http://localhost:3000**

---

## 📁 Project Structure

```
mfd-website/
├── public/
│   └── index.html              # HTML entry point, Google Fonts
├── src/
│   ├── assets/
│   │   └── data/
│   │       └── siteData.js     # ← EDIT THIS to change all content
│   ├── components/
│   │   ├── Navbar.jsx / .css   # Fixed top navigation
│   │   ├── Footer.jsx / .css   # Site footer with AMC ticker
│   │   ├── PageNav.jsx / .css  # Cyclic prev/next page navigation
│   │   └── ScrollProgress.jsx  # Gold progress bar
│   ├── hooks/
│   │   └── index.js            # useInView, useCountUp, useNavScroll
│   ├── pages/
│   │   ├── Home.jsx / .css     # Landing page
│   │   ├── About.jsx / .css    # Personal story, credentials, testimonials
│   │   ├── Services.jsx / .css # Services grid, fund categories, comparison
│   │   ├── Journey.jsx / .css  # Animated career timeline
│   │   ├── Insights.jsx / .css # Blog articles, webinar signup, glossary
│   │   ├── FAQ.jsx / .css      # Accordion FAQ + SIP Calculator
│   │   └── Contact.jsx / .css  # Contact form, info, WhatsApp CTA
│   ├── styles/
│   │   └── global.css          # Design tokens, resets, utilities
│   ├── App.jsx                 # Router + shell
│   └── index.js                # React entry point
└── package.json
```

---

## ✏️ Customisation

### Update Personal Details
Edit **`src/assets/data/siteData.js`** to change:
- Name, ARN number, EUIN, contact details
- Stats (AUM, clients, retention)
- Testimonials
- Blog articles
- Credentials
- AMC partners

### Design Tokens
Edit the CSS variables in **`src/styles/global.css`** under `:root { }` to change:
- Color palette
- Typography
- Spacing

### Add Contact Form Backend
In **`src/pages/Contact.jsx`**, the `handleSubmit` function has a placeholder.
Replace it with:
- [EmailJS](https://www.emailjs.com/) for client-side email sending
- A custom backend API call

---

## 📱 Pages & Navigation

| Page      | Route        | Description                                    |
|-----------|--------------|------------------------------------------------|
| Home      | `/`          | Hero, stats, services preview, testimonials    |
| About     | `/about`     | Personal story, credentials, values, reviews  |
| Services  | `/services`  | Full service cards, fund categories, comparison|
| Journey   | `/journey`   | Animated career timeline, lessons, books       |
| Insights  | `/insights`  | Blog articles, webinar signup, glossary        |
| FAQ       | `/faq`       | Accordion FAQ + interactive SIP calculator     |
| Contact   | `/contact`   | Contact form, info cards, WhatsApp CTA         |

**Cyclic Navigation:** Every page has a Prev → Dots → Next navigator at the bottom,
forming a complete cycle (Home ↔ About ↔ Services ↔ Journey ↔ Insights ↔ FAQ ↔ Contact ↔ Home).

---

## 🎨 Design System

- **Font Display:** Playfair Display (serif, for headings)
- **Font Body:** DM Sans (clean, modern)
- **Font Mono:** DM Mono (for labels, tags, code)
- **Primary Color:** Deep Navy `#06091a`
- **Accent Color:** Warm Gold `#d4af37`
- **Text:** Cream `#f5f0e8`

---

## ⚖️ Disclaimer Note

The SEBI / AMFI disclaimer is displayed in the footer on every page.
Update it with the actual ARN number and EUIN before going live.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in the `build/` folder — ready to deploy to Vercel, Netlify, or any static host.
