# Extra Edge Club - SEO Agency Website

A Next.js 14 website for Extra Edge Club Ltd, an SEO agency serving UK businesses since 2011.

## Features

- **Homepage** with full marketing content
- **3 Service Pages**: Local SEO, SEO, SEO Consultancy
- **90 City Pages**: Programmatic pages for 30 UK cities × 3 services
- **Static Pages**: About, Contact, Case Studies, Privacy Policy
- **Fully Responsive** dark theme design
- **SEO Optimised** with dynamic metadata

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Static Export (for easy hosting)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## URL Structure

### Service Pages
- `/local-seo/` - Local SEO service index
- `/seo/` - SEO service index  
- `/seo-consultancy/` - SEO Consultancy service index

### City Pages (90 total)
- `/local-seo/local-seo-agency-manchester/`
- `/seo/seo-agency-manchester/`
- `/seo-consultancy/seo-consultancy-manchester/`

### Other Pages
- `/about/`
- `/contact/`
- `/case-studies/`
- `/privacy/`

## Adding City Images

Add city images to `/public/images/cities/` with the following naming convention:
- `london.jpg`
- `manchester.jpg`
- `birmingham.jpg`
- etc.

## Deployment

This site exports as static HTML. Deploy to Vercel, Netlify, or any static host.

## License

Copyright 2025 Extra Edge Club Ltd. All rights reserved.
