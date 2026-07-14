// ─────────────────────────────────────────────
// All site content lives here for easy editing.
// Update text, stats, quotes, etc. in one place.
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// Mission, Vision & Who We Serve
// ─────────────────────────────────────────────

export const OPENING_LINE =
  "Outside school, the loudest money advice often comes from feeds and from people with something to sell.";

export const HERO_METHOD_LINE =
  "The Finance Lab's resources are honest, nuanced, student-centered, and hands-on. Students practice on real numbers and leave with plans they built themselves.";

export const HERO_CARDS_INTRO =
  "Few personal finance curricula teach college access and affordability. Here, fully understanding that decision is a pillar. Everything we make flows from two projects:";

// Hero: the two main projects and the resources that flow from each.
// Teachers and administrators are the primary viewers.
export const HERO_PROJECTS = [
  {
    id: "tcp",
    accent: "var(--teal-light)",
    name: "The College Project",
    tagline: "Find your fit. Afford your future.",
    desc: "One decision, taught end to end: choosing a college that fits and knowing you can afford it before you commit.",
    resources: [
      { label: "The Book, 5th Edition", href: "https://www.amazon.com/dp/B0H85W1K1J" },
      { label: "Teacher's Guide", href: "/guide" },
      { label: "The App: college.thefinancelab.co", href: "https://college.thefinancelab.co" },
      { label: "The Launchpad Unit", href: "#launchpad" },
      { label: "The One Hour (a single class period)", href: "/college-project" },
      { label: "Family Resources", href: "/family" },
    ],
  },
  {
    id: "launchpad",
    accent: "var(--gold-light)",
    name: "The Launchpad",
    tagline: "Comprehensive personal finance education.",
    desc: "Six units of real money decisions on real data, with a live teacher dashboard. Built for 11th and 12th grade.",
    resources: [
      { label: "Access The Launchpad", href: "https://learn.thefinancelab.co" },
      { label: "Activity Workbook: every Real Take + the Advisor Series", href: "https://www.amazon.com/dp/B0H8KZ2VQ1" },
      { label: "Workbook Teacher's Guide", href: "/downloads/the-launchpad-activity-workbook-teachers-guide.pdf" },
      { label: "Compound Interest Calculator", href: "#calculator" },
      { label: "The Life Stage Experiment (a one-period assignment)", href: "/life-stage-experiment" },
    ],
  },
];

export const MISSION =
  "We equip first-generation students from underbanked, underserved communities with the real financial skills they need to build wealth, because a plan and a portfolio shouldn't be privileges.";

export const VISION =
  "Every first-generation student graduates with a plan, and the financial foundation to execute it.";

export const WHO_WE_SERVE =
  "The Finance Lab serves high school and college students, predominantly from underserved, underbanked communities: young people who are often first-generation college students navigating a financial system that was never designed with them in mind. For these students, the gap between knowing and not knowing (about financial aid, investing, and how money works) is the difference between upward mobility and staying stuck. We exist to close that gap.";

export const NAV_LINKS = [
  { label: "Our Story", href: "#problem" },
  { label: "The College Project", href: "#tcp" },
  { label: "Teacher's Guide", href: "/guide" },
  { label: "Scholarship", href: "#scholarship" },
  { label: "The Launchpad", href: "#launchpad" },
  { label: "Free Tools", href: "#tools" },
];

export const STATS = [
  { value: "70", suffix: "%", desc: "of students say money is their #1 worry about college" },
  { value: "83", suffix: "%", desc: "cannot explain how financial aid works before our program" },
  { value: "59", suffix: "%", desc: "report high or very high stress about the cost of college" },
];

export const RESULTS = [
  { before: "46.7%", after: "83.3%", label: "believed they could afford a 4-year public university" },
  { before: "17.6%", after: "69%", label: "believed they could afford a 4-year private university" },
];

export const QUOTES = [
  {
    text: "Nobody in my family has gotten this far in education. These chapters made me realize that everyone has a chance to go to college regardless of their background.",
    attr: "First-generation student, Orange County",
  },
  {
    text: "I started thinking I probably wouldn't be able to afford the college I wanted. But after this book, I definitely think it changed my mind.",
    attr: "11th grader, post-survey",
  },
  {
    text: "For once we weren't being left alone in the dark.",
    attr: "Undocumented student, on the DACA/Dream Act chapter",
  },
];

export const MILESTONES = [
  { num: "01", amount: "$250", title: "Set Your Goals", desc: "Complete self-paced modules on financial goal-setting. Define what wealth means for your life." },
  { num: "02", amount: "$250", title: "Know Your Risk", desc: "Learn risk tolerance, index funds, and long-term investing. Open your real brokerage account." },
  { num: "03", amount: "$250", title: "Build Your Portfolio", desc: "Invest at least 10% of your scholarship in real markets. Real decisions. Real money." },
  { num: "04", amount: "$250", title: "Present Your Strategy", desc: "Present your investment approach to a panel of professionals at our showcase event." },
];

// Current $1,000 scholarship recipients. Add the second scholar here and the
// grid places them beside Peter automatically.
export const SCHOLARS = [
  {
    name: "Peter Y.",
    photo: "/images/scholars/peter-y.jpg",
    alt: "Peter Y., Finance Lab Scholar",
    quote: "I first invested right when I turned 18 and one of my first investments was in the S&P 500! Start investing as early as possible!",
    attr: "Finance Lab Scholar",
  },
];

export const DIFFERENTIATORS = [
  { iconId: "coins", title: "Real Money, Real Stakes", desc: "Not simulations. Students invest actual dollars, and that emotional weight changes everything." },
  { iconId: "medal", title: "Earned, Not Given", desc: "Each $250 is unlocked by demonstrating competence. Accountability a free course can't replicate." },
  { iconId: "mic", title: "Authentic Audience", desc: "Defending choices to real professionals transforms how seriously students approach the work." },
  { iconId: "scale", title: "Designed for Equity", desc: "ITIN-accessible enrollment. Built for first-generation wealth builders." },
  { iconId: "cycle", title: "Year-Long Relationship", desc: "From spring application through first college year: ongoing mentorship, not a one-day workshop." },
  { iconId: "gradcap", title: "College Transition Support", desc: "Financial literacy meets the biggest financial moment of a young person's life." },
];

export const TOOLS = [
  {
    badge: "Free Curriculum", badgeColor: "teal", iconId: "rocket",
    name: "The Launchpad",
    desc: "The complete classroom curriculum: six units (The College Project among them), Real Takes, and a live teacher dashboard. Free for every teacher and student.",
    link: "learn.thefinancelab.co",
    href: "https://learn.thefinancelab.co",
  },
  {
    badge: "Free App", badgeColor: "gold", iconId: "compass",
    name: "The College Project App",
    desc: "The book's self-paced companion for students on their own: research schools, decode financial aid, and build a plan, from 9th grade through graduation.",
    link: "Launch the App",
    href: "https://college.thefinancelab.co",
  },
  {
    badge: "Free App", badgeColor: "gold", iconId: "flask",
    name: "Catalyst",
    desc: "A financial literacy companion app. Concepts, tools, and exercises that meet students where they are.",
    link: "Explore Catalyst",
    href: "/catalyst.html",
  },
  {
    badge: "Free · On This Page", badgeColor: "teal", iconId: "chart",
    name: "Life Stage Calculator",
    desc: "See what investing at every stage of life adds up to, and watch compounding do the heavy lifting.",
    link: "Jump to the Calculator",
    href: "#calculator",
  },
];

// ─────────────────────────────────────────────
// The College Project — Fifth Edition
// ─────────────────────────────────────────────

export const TCP_EDITION = "Fifth Edition · Updated for the 2026–27 school year";

export const TCP_BOOK_URL = "https://www.amazon.com/dp/B0H85W1K1J";

export const TCP_TAGLINE = "Find Your Fit. Afford Your Future.";

export const TCP_POSITIONING =
  "Most college-prep books cover finding a fit, or paying for it. Rarely both. The College Project treats them as one decision, because they are.";

export const TCP_PILLARS = [
  { title: "Find Your Fit", desc: "Explore majors and careers, visit schools, and build a list that's actually yours." },
  { title: "Run the Real Numbers", desc: "Free money, net price, red flags, and the FAFSA and CSS Profile, in plain language." },
  { title: "Make Your Move", desc: "Applications, award letters, and student loans, so you can compare offers side by side." },
  { title: "Finish What You Started", desc: "A junior and senior year checklist and calendar so nothing falls through the cracks." },
];

export const TEACHER_QUOTE = {
  text: "I've used The College Project in my classroom for several years. My students found many of their questions answered in this comprehensive, insightful book.",
  attr: "Roger Keating · Business Academy Teacher (Retired), Ocean View High School (Title I), Huntington Beach, CA",
};

export const TCP_CREDIBILITY =
  "Built and classroom-tested by a former wealth manager turned high school teacher. Every worksheet has already been used by real students choosing real colleges.";

export const TCP_ARTIFACTS =
  "Along the way, students build three artifacts: a Money Map, a Running List, and a Decision Dashboard.";

export const TCP_PREVIEW = {
  label: "A Look Inside · Chapter 6: Free Money",
  quote:
    "You've probably heard that the total costs of college (tuition, fees, room, and board) have grown sharply over the past decade. Here is what fewer people hear: financial aid grew even faster. Measure what students actually pay in tuition after grant aid (the net tuition), and the trend points down.",
  stat: "$2,480",
  statCaption:
    "net tuition per year after grant aid at a public 4-year, in 2024 dollars. Down 41% from the 2012–13 peak.",
  attribution: "Chapter 6, “Free Money”",
};

export const BULK_ORDER_MAILTO =
  "mailto:team@thefinancelab.co?subject=Bulk%20order%3A%20The%20College%20Project&body=School%2FDistrict%3A%0AApprox%20quantity%3A%0AGrade%20level(s)%3A%0A";

// ─────────────────────────────────────────────
// The Launchpad — flagship classroom curriculum
// ─────────────────────────────────────────────

export const LAUNCHPAD = {
  name: "The Launchpad",
  lockup: "by The Finance Lab",
  tagline: "Gaining velocity for life after high school.",
  intro:
    "A complete personal finance curriculum for high school classrooms, delivered as a web app and free for every teacher and student. Six units built around the decisions students actually face in 11th and 12th grade.",
  units: ["Banking & Saving", "Investing", "Credit & Debt", "Taxes", "Insurance", "The College Project"],
  ab2927: {
    title: "Ready for AB 2927",
    body: "Under AB 2927, California high schools must offer a standalone personal finance course starting in 2027, and personal finance becomes a graduation requirement. The Launchpad gives your school a complete, no-cost way to meet it.",
  },
  features: [
    {
      iconId: "dashboard",
      title: "A teacher dashboard that does the reporting",
      desc: "Watch live, class-level outcomes and analytics as students work. All-time impact data survives roster changes, exports to CSV, and comes with standards alignment and pacing guides.",
    },
    {
      iconId: "sliders",
      title: "Adjustable to your classroom",
      desc: "Assign one module, one unit, or a full semester. Every unit stands on its own, so the course fits your bell schedule and your students.",
    },
    {
      iconId: "bolt",
      title: "Real Takes",
      desc: "Short decision activities that put a common money misconception on the table, like “Do you even have to file?” Every Real Take ships in both digital and print.",
    },
    {
      iconId: "pin",
      title: "California-specific throughout",
      desc: "Cal Grant, CADAA, CalKIDS, and the CA Dream Act are built in, not bolted on. No adapting required.",
    },
    {
      iconId: "shield",
      title: "No banks. No funnels.",
      desc: "No bank sponsorships and no enrollment funnels. Built by a nonprofit whose proceeds fund scholarships.",
    },
    {
      iconId: "pencil",
      title: "Built by a working teacher",
      desc: "Designed and coded by a California classroom teacher who teaches it every day and is also its sole developer. Teacher-first, not vendor-first.",
    },
  ],
  workbook:
    "The Launchpad Activity Workbook is here: a print companion that collects the quick activities, the Advisor Series, and every Real Take in one place. The Teacher's Guide is a free download: an answer key, pacing, and a run sheet for every activity.",
  workbookUrl: "https://www.amazon.com/dp/B0H8KZ2VQ1",
  teachersGuideUrl: "/downloads/the-launchpad-activity-workbook-teachers-guide.pdf",
  workbookBulk: "Ordering 10 or more workbooks? Take 10% off. Email us and we'll set it up.",
  workbookBulkMailto:
    "mailto:team@thefinancelab.co?subject=Bulk%20order%3A%20The%20Launchpad%20Activity%20Workbook&body=School%2FDistrict%3A%0AApprox%20quantity%3A%0AGrade%20level(s)%3A%0A",
  appUrl: "https://learn.thefinancelab.co",
  appCaption: "The full app: all six units, ready for your class.",
  demoUrl: "https://learn.thefinancelab.co/teacher?guest=1",
  demoCaption: "A sample class with live data. No signup, no email.",
};

export const COURSE_TAGS = [
  "Dual Enrollment",
  "College Seminar",
  "AVID",
  "Personal Finance",
  "Senior English",
  "Advisory",
  "College & Career Readiness",
  "Economics",
];

export const FEATURES = [
  { title: "California-specific content", desc: "CA Dream Act, DACA, Cal Grant, CalKIDS. No adapting required." },
  { title: "Undocumented student chapters", desc: "Dedicated sections that serve every student, including those who can't file the FAFSA." },
  { title: "Modular design", desc: "Assign all 19 chapters or pick what fits your course. Flexible by design." },
  { title: "No financial institution affiliations", desc: "No bank sponsorships, no enrollment funnels. Proceeds fund scholarships and student programming." },
  { title: "Built-in reflection activities", desc: "\"Blank Space\" and interview exercises for deeper, personalized learning." },
  { title: "Scholarship pipeline included", desc: "Schools on the Scholarship Tier connect students directly to Finance Lab scholarships." },
];

export const IMPACT_STATS = [
  { value: "368", label: "students surveyed in our research cohort" },
  { value: "3×", label: "increase in financial aid understanding" },
  { value: "20pt", label: "drop in high stress about college costs" },
  { value: "83%", label: "believed they could afford a 4-year public university after the program, up from 47%" },
];

export const PRICING = [
  { tier: "Scholarship Tier", note: "Connects your students directly to The Finance Lab Scholarship pipeline, plus educator support", price: "$20" },
  { tier: "Discounted Tier", note: "Supports the mission; no on-site scholarships", price: "$15" },
  { tier: "100+ Copy Bonus", note: "Additional 10% off on orders of 100 or more", price: "+10% off" },
];
