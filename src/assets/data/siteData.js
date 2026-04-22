/** 
 * siteData.js
 * ─────────────────────────────────────────────────
 * Central data store for the entire website.
 * Edit this file to update content without touching JSX.
 */

// ── Personal Info ─────────────────────────────────
export const personal = {
  name:         'Sumedh Rasal',
  title:        'AMFI Registered Mutual Fund Distributor',
  tagline:      'From Engineering Blueprints to Financial Freedom — Your Trusted Wealth Partner.',
  location:     'Nagpur, Maharashtra',
  email:        'sumedh@sumedhinvests.com',
  phone:        '+91 98765 43210',
  whatsapp:     '919876543210',
  arnNumber:    'ARN-XXXXXX',
  euin:         'E-XXXXXX',
  firmName:     'Sumedh Invests',
  firmYear:     2023,
  linkedIn:     'https://linkedin.com/in/sumedhhrasal',
  instagram:    'https://instagram.com/sumedhinvests',
  twitter:      'https://twitter.com/sumedh_mfd',
  degree:       'B.E. Mechanical Engineering',
  degreeCollege:'College of Engineering, Pune (COEP)',
  degreeYear:   2023,
};

// ── Hero Stats (animated counters) ────────────────
export const heroStats = [
  { value: 2,   suffix: '+',   label: 'Years of Practice'     },
  { value: 150, suffix: '+',   label: 'Happy Clients'          },
  { value: 12,  suffix: 'Cr+', label: 'AUM Managed (₹)'       },
  { value: 98,  suffix: '%',   label: 'Client Retention'       },
];

// ── Journey / Story timeline ──────────────────────
export const journey = [
  {
    year:  '2019',
    title: 'Engineering Begins',
    desc:  'Enrolled in B.E. Mechanical Engineering at COEP Pune. Developed analytical thinking, problem-solving, and systems-level thinking.',
    icon:  '🎓',
    tag:   'Education',
  },
  {
    year:  '2021',
    title: 'Personal Finance Discovery',
    desc:  'Started investing in SIPs during college. Fascinated by how money compounds — read 30+ books on personal finance and investing.',
    icon:  '📚',
    tag:   'Turning Point',
  },
  {
    year:  '2022',
    title: 'NISM Certification',
    desc:  'Cleared NISM Series V-A: Mutual Fund Distributors exam with distinction while finishing final year engineering.',
    icon:  '🏆',
    tag:   'Certification',
  },
  {
    year:  '2023 May',
    title: 'B.E. Graduation',
    desc:  'Graduated with distinction from COEP Pune. Chose entrepreneurship over campus placements — a decision driven by purpose, not comfort.',
    icon:  '🎓',
    tag:   'Milestone',
  },
  {
    year:  '2023 Aug',
    title: 'Firm Founded',
    desc:  'Registered ARN and launched Sumedh Invests. First 10 clients were college batchmates — proof that trust is built over years, not days.',
    icon:  '🚀',
    tag:   'Launch',
  },
  {
    year:  '2024',
    title: 'Scaling Up',
    desc:  'Crossed ₹5 Cr AUM. Partnered with MFD aggregators, expanded to serving working professionals and young families across Nagpur.',
    icon:  '📈',
    tag:   'Growth',
  },
  {
    year:  '2025',
    title: 'Today',
    desc:  'Managing ₹12 Cr+ across 150+ clients. Conducting monthly financial literacy webinars and mentoring new MFD aspirants.',
    icon:  '🌟',
    tag:   'Present',
  },
];

// ── Services ──────────────────────────────────────
export const services = [
  {
    icon:  '📊',
    title: 'Mutual Fund Advisory',
    desc:  'Goal-based selection of equity, debt, and hybrid funds tailored to your risk appetite and investment horizon.',
    features: ['Portfolio construction', 'Risk profiling', 'Regular portfolio review', 'Rebalancing advice'],
  },
  {
    icon:  '🔁',
    title: 'SIP Planning',
    desc:  'Systematic Investment Plans designed to harness the power of compounding and rupee-cost averaging over time.',
    features: ['Monthly SIP setup', 'Step-up SIP strategy', 'Goal-linked SIPs', 'SIP tracking & alerts'],
  },
  {
    icon:  '🎯',
    title: 'Goal-Based Planning',
    desc:  'Whether it\'s retirement, your child\'s education, or buying a home — we build a roadmap from dream to reality.',
    features: ['Retirement planning', 'Child education fund', 'Home down-payment', 'Emergency corpus'],
  },
  {
    icon:  '🛡️',
    title: 'Tax-Saving (ELSS)',
    desc:  'Smart ELSS investments that give you Section 80C tax benefits while building long-term equity wealth.',
    features: ['ELSS fund selection', '₹1.5L tax planning', 'Lock-in period guidance', 'Tax-efficient exits'],
  },
  {
    icon:  '📉',
    title: 'Debt & Liquid Funds',
    desc:  'Safer alternatives to FDs with better post-tax returns — ideal for short-term goals and emergency funds.',
    features: ['Liquid fund setup', 'Short-duration funds', 'FD alternatives', 'Parking surplus money'],
  },
  {
    icon:  '📋',
    title: 'Portfolio Review',
    desc:  'Quarterly portfolio health checks to ensure your investments stay on track as markets and life evolve.',
    features: ['Quarterly check-in', 'Performance benchmarking', 'Exit strategy', 'Switch recommendations'],
  },
];

// ── Schemes / Fund Categories offered ────────────
export const fundCategories = [
  { name: 'Large Cap Funds',       risk: 'Moderate',      horizon: '5+ Years',  ideal: 'Stable wealth creation' },
  { name: 'Flexi Cap Funds',       risk: 'Moderate-High', horizon: '5+ Years',  ideal: 'Diversified growth' },
  { name: 'Small & Mid Cap',       risk: 'High',          horizon: '7+ Years',  ideal: 'Aggressive wealth building' },
  { name: 'ELSS Tax Saver',        risk: 'Moderate-High', horizon: '3+ Years',  ideal: 'Tax saving + growth' },
  { name: 'Balanced Advantage',    risk: 'Moderate',      horizon: '3+ Years',  ideal: 'Dynamic allocation' },
  { name: 'Liquid / Overnight',    risk: 'Very Low',      horizon: '< 1 Year',  ideal: 'Parking surplus funds' },
  { name: 'Short Duration Debt',   risk: 'Low',           horizon: '1–3 Years', ideal: 'FD alternative' },
  { name: 'International Funds',   risk: 'High',          horizon: '7+ Years',  ideal: 'Global diversification' },
];

// ── Testimonials ──────────────────────────────────
export const testimonials = [
  {
    name:   'Priya Nair',
    role:   'Software Engineer, TCS Pune',
    stars:  5,
    text:   'I was completely lost about investing when I met Sumedh. He didn\'t just recommend funds — he educated me about why each choice made sense for my goals. My SIP portfolio has grown 32% in 18 months. Truly a friend more than an advisor.',
    avatar: 'PN',
    since:  'Client since 2023',
  },
  {
    name:   'Rahul Deshmukh',
    role:   'Business Owner, Nashik',
    stars:  5,
    text:   'His engineering mindset brings a unique systematic approach to financial planning. He built me a three-tier portfolio — short-term, medium-term, and retirement — in one meeting. The portfolio review calls every quarter are invaluable.',
    avatar: 'RD',
    since:  'Client since 2023',
  },
  {
    name:   'Sneha & Vikram Joshi',
    role:   'Young Couple, Nagpur',
    stars:  5,
    text:   'We started with just ₹5,000/month SIP. Sumedh showed us the power of step-up SIPs. Today we\'re at ₹25,000/month and well on track for our first home in 4 years. His patience and clarity are unmatched.',
    avatar: 'SV',
    since:  'Client since 2024',
  },
  {
    name:   'Dr. Asha Kulkarni',
    role:   'Doctor, Nagpur',
    stars:  5,
    text:   'As a busy doctor, I had no time for finance. Sumedh took complete ownership, handled my ₹40L lump sum investment, set up automated SIPs, and gives me concise quarterly reports. Zero stress on my end.',
    avatar: 'AK',
    since:  'Client since 2023',
  },
];

// ── Process / How I Work ──────────────────────────
export const process = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'A 30-minute free consultation to understand your financial goals, current investments, risk tolerance, and timeline.',
  },
  {
    step: '02',
    title: 'Risk Profiling',
    desc: 'We conduct a structured risk assessment to identify your investor personality — conservative, moderate, or aggressive.',
  },
  {
    step: '03',
    title: 'Custom Plan',
    desc: 'I create a personalized investment plan with specific fund recommendations, SIP amounts, and projected outcomes.',
  },
  {
    step: '04',
    title: 'Seamless Onboarding',
    desc: 'Complete KYC, fund selection, and SIP setup — I handle all the paperwork. You invest in minutes.',
  },
  {
    step: '05',
    title: 'Quarterly Reviews',
    desc: 'Every 3 months, we review portfolio performance, rebalance if needed, and adjust plans as your life evolves.',
  },
];

// ── FAQ ───────────────────────────────────────────
export const faqs = [
  {
    q: 'Why should I invest in mutual funds instead of FDs?',
    a: 'Mutual funds (especially equity funds) have historically delivered 12–15% CAGR over long periods, significantly higher than FD rates of 6–7%. With debt funds, post-tax returns are also better than FDs for investors in higher tax brackets.',
  },
  {
    q: 'What is the minimum amount to start investing?',
    a: 'You can start a SIP with as little as ₹500/month! Lump sum investments typically start at ₹1,000–₹5,000. I believe in starting small and scaling up — the key is to begin today.',
  },
  {
    q: 'How do I know which funds are right for me?',
    a: 'That\'s exactly what I\'m here for. Through a detailed risk profiling process, we identify funds aligned with your goals, time horizon, and comfort with market volatility. No one-size-fits-all recommendations.',
  },
  {
    q: 'Are mutual funds safe? Can I lose all my money?',
    a: 'Mutual funds are regulated by SEBI, one of India\'s most respected regulators. While market-linked funds do carry risk, diversification reduces it significantly. Debt and liquid funds carry minimal risk. I guide you to funds that match your risk profile.',
  },
  {
    q: 'Do you charge fees for your advice?',
    a: 'As a registered MFD, I am compensated through commissions from AMCs — which means my advice costs you nothing extra. My incentive is aligned with your portfolio\'s growth.',
  },
  {
    q: 'Can I redeem my money anytime?',
    a: 'Most open-ended mutual funds have no lock-in period and can be redeemed within 1–3 working days. ELSS funds have a 3-year lock-in. I clearly explain liquidity before recommending any fund.',
  },
  {
    q: 'What documents do I need to start?',
    a: 'You need a PAN card, Aadhaar card, a bank account, and a passport-size photo for KYC. If you\'re already KYC-compliant, you can start investing the same day!',
  },
  {
    q: 'Why trust a young MFD over a bank or established firm?',
    a: 'Unlike bank relationship managers who push products for targets, I have one goal — your financial growth. My engineering background gives me an analytical edge, and my youth means I\'ll be by your side for decades.',
  },
];

// ── Blog / Articles ───────────────────────────────
export const blogs = [
  {
    id:      1,
    title:   'Why I Left Engineering for Finance: My Story',
    excerpt: 'The honest story of how a mechanical engineering student fell in love with compound interest and decided to dedicate his career to helping others achieve financial freedom.',
    date:    'January 15, 2024',
    readTime:'5 min read',
    tag:     'Personal',
    emoji:   '🛠️',
    content: `
## Why I Left Engineering for Finance: My Story

When I enrolled in B.E. Mechanical Engineering at COEP Pune in 2019, I had every intention of becoming an engineer. The precision of thermodynamics, the elegance of fluid mechanics — I genuinely loved it.

Then COVID happened.

Locked in my hostel room in 2021, I stumbled upon *The Psychology of Money* by Morgan Housel. I read it in one sitting. Then I read it again. Something clicked — the way money behaves over time felt as logical and beautiful as any engineering system.

### The Obsession Begins

I started a SIP with ₹1,000/month from my pocket money — just to experience it. Then I read Graham, Lynch, Buffett. Then Indian finance blogs. Then 30+ books in under two years.

By my third year, I was spending more time on Zerodha Varsity than on my textbooks.

### The Decision

When campus placements arrived in 2023, I had offers from good core engineering firms. I turned them all down.

Instead, I cleared NISM Series V-A, registered my ARN, and started **Sumedh Invests** with 10 clients from my own batch.

### Why It Works

My engineering training wasn't wasted — it became my biggest advantage. Engineers think in systems. We break complex problems into components and optimise the whole. That's exactly what financial planning requires.

Today, I see portfolios as systems to be designed, not products to be sold.

And I wouldn't have it any other way.
    `,
  },
  {
    id:      2,
    title:   'SIP vs Lump Sum: Which is Better for You in 2024?',
    excerpt: 'A data-backed comparison of systematic investing vs one-time investments, with real market scenarios and the strategy I use for different types of clients.',
    date:    'February 8, 2024',
    readTime:'7 min read',
    tag:     'Education',
    emoji:   '📊',
    content: `
## SIP vs Lump Sum: Which is Better for You?

This is the question I get most often from new investors. The honest answer: **it depends on your situation**. Let me break it down.

### What is a SIP?

A Systematic Investment Plan (SIP) lets you invest a fixed amount every month — say ₹5,000 — regardless of market levels. You buy more units when markets are low, fewer when they're high. This is called **rupee-cost averaging**.

### What is a Lump Sum?

A lump sum investment means putting a large amount — say ₹5 lakhs — into a fund all at once. You're betting on timing: if you invest before a bull run, your returns can be spectacular. If you invest before a crash, it can hurt.

### The Data

Across any 10-year period in Indian markets (Nifty 50 data from 2000–2024):
- A monthly SIP gave **average CAGR of 13.2%**
- A lump sum at random entry points gave **average CAGR of 11.8%**
- A lump sum at market peaks gave **average CAGR of 9.4%**

### My Recommendation

**For salaried professionals:** SIP always. You remove timing risk and build discipline.

**For bonus/windfall money:** Deploy in 3–6 tranches over a few months using a Systematic Transfer Plan (STP) from a liquid fund.

**For large inheritances or business exits:** Combine both — put 30% as lump sum and SIP the rest over 12 months.

The best investment strategy is the one you'll actually stick to. SIPs win on consistency.
    `,
  },
  {
    id:      3,
    title:   'The Equity Curve: Understanding Market Volatility',
    excerpt: 'Markets go up, markets go down. Here\'s how to use volatility to your advantage and why staying invested through corrections is the single most powerful strategy.',
    date:    'March 20, 2024',
    readTime:'6 min read',
    tag:     'Markets',
    emoji:   '📈',
    content: `
## The Equity Curve: Understanding Market Volatility

Every investor faces the same moment: the market drops 15% and your phone shows red everywhere. The instinct is to sell and "wait for things to settle."

This instinct is the #1 destroyer of long-term wealth.

### How Markets Actually Work

Markets don't go up in a straight line. They move in cycles — periods of optimism (bull markets) followed by fear and correction (bear markets). This is not a bug. It's a feature.

Since 1990, the Nifty 50 has:
- Fallen more than 10% on **17 separate occasions**
- Recovered to new highs **every single time**
- Delivered an average CAGR of approximately **12–14%** despite all the noise

### Why Corrections Are Gifts for SIP Investors

When markets fall, your monthly SIP buys more units at lower prices. When markets recover, those extra units generate outsized returns.

A ₹10,000 SIP running through the 2020 COVID crash (March–April) would have bought Nifty units at 8,000 levels. By December 2020, the Nifty was back at 13,000. Those "crash units" nearly doubled in 9 months.

### The Only Strategy That Works

1. **Stay invested.** Time in market beats timing the market.
2. **Don't check your portfolio daily.** Volatility is noise.
3. **Increase SIPs during crashes.** Hard to do emotionally — but extremely powerful.
4. **Review annually**, not monthly.

Volatility is the price you pay for long-term equity returns. It's worth paying.
    `,
  },
  {
    id:      4,
    title:   'ELSS vs PPF vs NPS: Which Tax Saver Should You Choose?',
    excerpt: 'A side-by-side comparison of the three most popular 80C instruments — returns, lock-in, liquidity, and tax treatment explained simply.',
    date:    'April 5, 2024',
    readTime:'8 min read',
    tag:     'Tax Planning',
    emoji:   '🧾',
    content: `
## ELSS vs PPF vs NPS: Which Tax Saver Should You Choose?

Section 80C of the Income Tax Act lets you deduct up to ₹1.5 lakhs from your taxable income. The question is: which instrument should you use to fill that ₹1.5L?

### The Three Main Options

| Feature | ELSS | PPF | NPS |
|---------|------|-----|-----|
| Lock-in | 3 years | 15 years | Till retirement |
| Returns | 12–16% (market-linked) | ~7.1% (fixed) | 10–12% (market-linked) |
| Liquidity | High (after 3 yrs) | Low | Very Low |
| Tax on returns | LTCG above ₹1L | Tax-free | Partially taxable |
| Risk | Moderate-High | Nil | Low-Moderate |

### Who Should Choose What?

**Choose ELSS if:**
- You're under 40 and have a long investment horizon
- You want the highest potential returns
- You're comfortable with some market volatility

**Choose PPF if:**
- You want guaranteed, risk-free returns
- You have very low risk tolerance
- You're in a high tax bracket and want tax-free maturity

**Choose NPS if:**
- You want an additional deduction under 80CCD(1B) — ₹50,000 extra
- You're building a retirement corpus specifically
- You want professional fund management with low costs

### My Recommendation

For most salaried professionals under 45: **ELSS for the bulk, with some PPF for stability.** Don't ignore NPS if you haven't used the extra ₹50,000 deduction.

The best tax saving is investing early — not scrambling in March.
    `,
  },
  {
    id:      5,
    title:   'Young & Earning: A 10-Step Financial Checklist at 25',
    excerpt: 'If you\'re in your mid-20s and just got your first job, this is the checklist I wish someone had given me — emergency fund, insurance, SIPs and more.',
    date:    'May 12, 2024',
    readTime:'5 min read',
    tag:     'Beginners',
    emoji:   '✅',
    content: `
## Young & Earning: A 10-Step Financial Checklist at 25

Getting your first salary is exciting. Most people celebrate by spending more. The smartest thing you can do instead is spend 30 minutes setting up your financial foundation.

Here's the checklist I give every new client who's just starting out.

### Step 1: Build an Emergency Fund First
Before any investment, save 3–6 months of expenses in a liquid fund or savings account. This is your financial safety net.

### Step 2: Get Health Insurance
If your employer provides it, check the coverage. If it's under ₹5L, buy a top-up. Medical emergencies are the #1 reason Indians dip into investments.

### Step 3: Get Term Insurance
If anyone depends on your income, buy a term plan. ₹1 Cr cover costs roughly ₹8,000–12,000/year in your 20s. Don't delay — premiums rise with age.

### Step 4: Start a SIP — Any Amount
Start with ₹1,000/month if that's all you have. The habit matters more than the amount right now.

### Step 5: Open a PPF Account
Contribute ₹500/year minimum to keep it active. Build it up over time for guaranteed tax-free returns.

### Step 6: File Your ITR Every Year
Even if no tax is due. It builds a financial record that helps with loans later.

### Step 7: Avoid Lifestyle Inflation
Your expenses should not grow as fast as your income. Every raise = increase your SIP first.

### Step 8: Learn the Basics
Read one good book on personal finance. I recommend *Let's Talk Money* by Monika Halan for Indian context.

### Step 9: Understand Your Salary Structure
Know what HRA, LTA, and PF mean. Small optimizations can save ₹20,000–50,000/year in tax.

### Step 10: Review Once a Year
Set a date — maybe your work anniversary — to review your insurance, investments, and goals.

The best time to start was yesterday. The second best time is now.
    `,
  },
  {
    id:      6,
    title:   'What Engineers Get Right About Money (and Most People Don\'t)',
    excerpt: 'The engineering framework of systems thinking, iteration, and optimization applies perfectly to personal finance. Here\'s how I use it for my clients.',
    date:    'June 30, 2024',
    readTime:'6 min read',
    tag:     'Mindset',
    emoji:   '⚙️',
    content: `
## What Engineers Get Right About Money (and Most People Don't)

When I tell people I left engineering to become a financial advisor, I sometimes get a puzzled look. "Isn't that a waste of your degree?"

It's actually the opposite. My engineering training is my greatest professional asset.

### Systems Thinking

Engineers don't look at individual components — they look at how components interact within a system. A portfolio is no different.

Most people think: "Which fund should I buy?"
I think: "How does this fund interact with the rest of the portfolio? What does it add in terms of diversification? What's its role in the overall system?"

This difference in thinking leads to dramatically better outcomes.

### Iteration and Review

In engineering, no design is perfect on the first try. You prototype, test, observe results, and improve. Software developers call it "agile." Engineers call it the design cycle.

I apply the same logic to portfolios. Every quarter, I review performance, check if goals have changed, and make small adjustments. A portfolio is never "done."

### Data Over Emotion

Engineers trust data. When a bridge sways, you don't panic — you measure, you analyse, you respond based on evidence.

When markets fall 10%, the emotional investor panics and sells. The data-driven investor checks: "Is the underlying business still sound? Is my thesis still valid?" Usually, the answer is yes.

### Tolerance for Complexity

Most people want a simple answer: "Just tell me what to buy." But financial planning involves multiple variables: time horizon, risk tolerance, tax efficiency, liquidity needs, inflation, and life stage changes.

Engineers are trained to manage complexity. We hold multiple variables simultaneously and optimize across them.

### The Point

You don't have to be an engineer to think like one. But adopting these habits — systems thinking, data-driven decisions, regular iteration, comfort with complexity — will make you a significantly better investor.

That's why I built Sumedh Invests the way I did. Not as a product seller. As a systems engineer for your financial life.
    `,
  },
];

// ── Certifications & Credentials ─────────────────
export const credentials = [
  { name: 'AMFI Registered MFD', code: 'ARN-XXXXXX',              issuer: 'AMFI India',  year: 2023, icon: '🏅' },
  { name: 'NISM Series V-A',     code: 'Mutual Fund Distributors', issuer: 'NISM / SEBI', year: 2022, icon: '📜' },
  { name: 'B.E. Mechanical Engg',code: 'With Distinction',         issuer: 'COEP Pune',   year: 2023, icon: '🎓' },
  { name: 'EUIN Holder',         code: 'E-XXXXXX',                 issuer: 'AMFI India',  year: 2023, icon: '🔖' },
];

// ── AMC Partners (logos via text) ────────────────
export const amcPartners = [
  'SBI Mutual Fund', 'HDFC Mutual Fund', 'ICICI Prudential MF',
  'Axis Mutual Fund', 'Mirae Asset MF',  'Kotak Mutual Fund',
  'Nippon India MF',  'Motilal Oswal MF','Parag Parikh MF',
  'DSP Mutual Fund',  'UTI Mutual Fund', 'Canara Robeco MF',
];
