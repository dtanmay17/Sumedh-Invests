/**
 * siteData.js
 * ─────────────────────────────────────────────────
 * Central data store for the entire website.
 * Edit this file to update content without touching JSX.
 */

// ── Personal Info ─────────────────────────────────
export const personal = {
  name:         'Arjun Sharma',
  title:        'AMFI Registered Mutual Fund Distributor',
  tagline:      'From Engineering Blueprints to Financial Freedom — Your Trusted Wealth Partner.',
  location:     'Pune, Maharashtra',
  email:        'arjun@arjunwealthadvisors.com',
  phone:        '+91 98765 43210',
  whatsapp:     '919876543210',
  arnNumber:    'ARN-XXXXXX',
  euin:         'E-XXXXXX',
  firmName:     'Arjun Wealth Advisors',
  firmYear:     2023,
  linkedIn:     'https://linkedin.com/in/arjunsharma',
  instagram:    'https://instagram.com/arjunwealthadvisors',
  twitter:      'https://twitter.com/arjun_mfd',
  degree:       'B.E. Mechanical Engineering',
  degreeCollege:'College of Engineering, Pune (COEP)',
  degreeYear:   2023,
};

// ── Hero Stats (animated counters) ────────────────
export const heroStats = [
  { value: 2,   suffix: '+',  label: 'Years of Practice'     },
  { value: 150, suffix: '+',  label: 'Happy Clients'          },
  { value: 12,  suffix: 'Cr+', label: 'AUM Managed (₹)'      },
  { value: 98,  suffix: '%',  label: 'Client Retention'       },
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
    desc:  'Registered ARN and launched Arjun Wealth Advisors. First 10 clients were college batchmates — proof that trust is built over years, not days.',
    icon:  '🚀',
    tag:   'Launch',
  },
  {
    year:  '2024',
    title: 'Scaling Up',
    desc:  'Crossed ₹5 Cr AUM. Partnered with MFD aggregators, expanded to serving working professionals and young families across Pune.',
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
  { name: 'Large Cap Funds',       risk: 'Moderate',      horizon: '5+ Years', ideal: 'Stable wealth creation' },
  { name: 'Flexi Cap Funds',       risk: 'Moderate-High', horizon: '5+ Years', ideal: 'Diversified growth' },
  { name: 'Small & Mid Cap',       risk: 'High',          horizon: '7+ Years', ideal: 'Aggressive wealth building' },
  { name: 'ELSS Tax Saver',        risk: 'Moderate-High', horizon: '3+ Years', ideal: 'Tax saving + growth' },
  { name: 'Balanced Advantage',    risk: 'Moderate',      horizon: '3+ Years', ideal: 'Dynamic allocation' },
  { name: 'Liquid / Overnight',    risk: 'Very Low',      horizon: '< 1 Year', ideal: 'Parking surplus funds' },
  { name: 'Short Duration Debt',   risk: 'Low',           horizon: '1–3 Years', ideal: 'FD alternative' },
  { name: 'International Funds',   risk: 'High',          horizon: '7+ Years', ideal: 'Global diversification' },
];

// ── Testimonials ──────────────────────────────────
export const testimonials = [
  {
    name:   'Priya Nair',
    role:   'Software Engineer, TCS Pune',
    stars:  5,
    text:   'I was completely lost about investing when I met Arjun. He didn\'t just recommend funds — he educated me about why each choice made sense for my goals. My SIP portfolio has grown 32% in 18 months. Truly a friend more than an advisor.',
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
    role:   'Young Couple, Pune',
    stars:  5,
    text:   'We started with just ₹5,000/month SIP. Arjun showed us the power of step-up SIPs. Today we\'re at ₹25,000/month and well on track for our first home in 4 years. His patience and clarity are unmatched.',
    avatar: 'SV',
    since:  'Client since 2024',
  },
  {
    name:   'Dr. Asha Kulkarni',
    role:   'Doctor, Pune',
    stars:  5,
    text:   'As a busy doctor, I had no time for finance. Arjun took complete ownership, handled my ₹40L lump sum investment, set up automated SIPs, and gives me concise quarterly reports. Zero stress on my end.',
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
  },
  {
    id:      2,
    title:   'SIP vs Lump Sum: Which is Better for You in 2024?',
    excerpt: 'A data-backed comparison of systematic investing vs one-time investments, with real market scenarios and the strategy I use for different types of clients.',
    date:    'February 8, 2024',
    readTime:'7 min read',
    tag:     'Education',
    emoji:   '📊',
  },
  {
    id:      3,
    title:   'The Equity Curve: Understanding Market Volatility',
    excerpt: 'Markets go up, markets go down. Here\'s how to use volatility to your advantage and why staying invested through corrections is the single most powerful strategy.',
    date:    'March 20, 2024',
    readTime:'6 min read',
    tag:     'Markets',
    emoji:   '📈',
  },
  {
    id:      4,
    title:   'ELSS vs PPF vs NPS: Which Tax Saver Should You Choose?',
    excerpt: 'A side-by-side comparison of the three most popular 80C instruments — returns, lock-in, liquidity, and tax treatment explained simply.',
    date:    'April 5, 2024',
    readTime:'8 min read',
    tag:     'Tax Planning',
    emoji:   '🧾',
  },
  {
    id:      5,
    title:   'Young & Earning: A 10-Step Financial Checklist at 25',
    excerpt: 'If you\'re in your mid-20s and just got your first job, this is the checklist I wish someone had given me — emergency fund, insurance, SIPs and more.',
    date:    'May 12, 2024',
    readTime:'5 min read',
    tag:     'Beginners',
    emoji:   '✅',
  },
  {
    id:      6,
    title:   'What Engineers Get Right About Money (and Most People Don\'t)',
    excerpt: 'The engineering framework of systems thinking, iteration, and optimization applies perfectly to personal finance. Here\'s how I use it for my clients.',
    date:    'June 30, 2024',
    readTime:'6 min read',
    tag:     'Mindset',
    emoji:   '⚙️',
  },
];

// ── Certifications & Credentials ─────────────────
export const credentials = [
  { name: 'AMFI Registered MFD', code: 'ARN-XXXXXX', issuer: 'AMFI India', year: 2023, icon: '🏅' },
  { name: 'NISM Series V-A',     code: 'Mutual Fund Distributors', issuer: 'NISM / SEBI', year: 2022, icon: '📜' },
  { name: 'B.E. Mechanical Engg',code: 'With Distinction',        issuer: 'COEP Pune',   year: 2023, icon: '🎓' },
  { name: 'EUIN Holder',         code: 'E-XXXXXX',                issuer: 'AMFI India',  year: 2023, icon: '🔖' },
];

// ── AMC Partners (logos via text) ────────────────
export const amcPartners = [
  'SBI Mutual Fund', 'HDFC Mutual Fund', 'ICICI Prudential MF',
  'Axis Mutual Fund', 'Mirae Asset MF',  'Kotak Mutual Fund',
  'Nippon India MF',  'Motilal Oswal MF','Parag Parikh MF',
  'DSP Mutual Fund',  'UTI Mutual Fund', 'Canara Robeco MF',
];
