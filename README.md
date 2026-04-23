# Ross Jeffrey Projects Site

A modern portfolio site showcasing applied AI projects, technical writing, and product-focused engineering work.

Built with Next.js and Tailwind, the site brings together interactive demos, detailed project write-ups, and long-form blog content across clinical AI, semantic search, data platforms, and workflow automation.

---

## Live site

🌐 https://www.jeffrey-ross.me

---

## Overview

This site serves as the primary entry point for my public portfolio.

It is designed to present technical work as **product experiences**, not just code — combining:

- project summaries and live demos
- long-form blog posts and architecture write-ups
- a clean, consistent visual system
- responsive layouts across desktop and mobile

The goal is to make complex systems approachable, readable, and visually structured.

---

## Key sections

### Projects

A curated set of interactive AI demos, including:

- Agentic Clinical Trial Eligibility
- Semantic Patient Search
- AI Résumé Match
- AI FX Insights

Each project includes:

- summary and positioning
- link to live demo
- supporting technical context

---

### Blog / Writing

Long-form content focused on:

- AI system design
- clinical and research workflows
- enterprise data platforms
- semantic search and retrieval
- product-oriented engineering

Posts are designed with structured layouts and embedded diagrams for clarity.

---

### Profile / About

Overview of background, focus areas, and experience across:

- AI-enabled product development
- data platforms and integrations
- healthcare and research systems
- workflow automation and APIs

---

### Contact

Integrated contact form powered by SendGrid.

---

## Technology stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- next-themes (light / dark mode)
- SendGrid (contact form)

---

## Repository structure

```text
.
├── components/         # shared UI components (navbar, footer, etc.)
├── pages/              # route-based pages
├── public/             # static assets and images
├── styles/             # global and page-specific styles
├── next.config.js
└── package.json
```

---

## Design approach

The site is intentionally content-first, with a focus on:

- readability for technical writing
- consistent typography and spacing
- clear hierarchy across sections
- reusable layouts for projects and blog posts
- subtle motion for transitions and interactions

---

## Local development

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## Production build

```bash
npm run build
npm run start
```

---

## Deployment

This site is deployed on **Vercel**.

Typical workflow:

- push changes to GitHub
- Vercel automatically builds and deploys
- environment variables configured in Vercel dashboard

---

## Environment variables

Example:

```bash
NEXT_PUBLIC_GA_ID=your_google_analytics_id
SENDGRID_API_KEY=your_sendgrid_key
```

These should be defined locally in `.env.local` and in Vercel for production.

---

## Related repositories

- Multi-project AI platform:  
  https://github.com/rossjeffreyvs-dev/jr-portfolio-projects

---

## Author

**Jeff Ross**  
AI, data platforms, and product engineering
