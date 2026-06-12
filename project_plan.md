# Dr. Nikhita B Vadvadgi - Premium Healthcare Website

## 1. Project Description
Ultra-premium single-page website for Dr. Nikhita B Vadvadgi, a Consultant Obstetrician, Gynecologist, Laparoscopic Surgeon and Infertility Specialist based in Bangalore, India. The website uses a luxurious Rose Blush and Sky Blue healthcare theme — feminine, trustworthy, and modern — positioning her as a premium private women's healthcare provider with international clinic quality.

**Target Users:** Women seeking obstetric, gynecological, fertility, or laparoscopic care in Bangalore.
**Core Value:** Build trust through elegant design, clear information architecture, and seamless appointment booking.

## 2. Page Structure
- `/` - Single Page Home (all sections on one page)

## 3. Core Features
- [x] Sticky header with smooth scroll navigation and light/dark state
- [x] Full-screen split hero with doctor portrait and static gradient background
- [x] Animated statistics counters
- [x] Doctor about section with qualification timeline
- [x] Interactive specialities cards with hover effects
- [x] Trust factors section
- [x] Animated patient journey scroll-progress timeline
- [x] Procedures & expertise grid
- [x] Awards & achievements
- [x] Publications showcase
- [x] Auto-rotating testimonial carousel with pause on hover
- [x] Consultation locations with map previews
- [x] OPD timings display
- [x] FAQ accordion
- [x] Final CTA section with gradient background
- [x] Premium footer with light elegant background
- [x] Floating WhatsApp button
- [x] Appointment booking modal form
- [x] Premium loading screen with logo, percentage counter, and Rose-to-Sky-Blue gradient progress bar (2.5s, pauses 0.3s at 100%, fades into homepage)

## 4. Data Model Design
No database required — static content website.

## 5. Backend / Third-party Integration Plan
- Supabase: Not required
- Shopify: Not required
- Stripe: Not required
- Form: Appointment booking form via Readdy form service
- WhatsApp: Direct link integration with doctor's number

## 6. Design System

### Color Palette
- **Primary (Rose Blush):** #D88CA5 — Brand color, CTAs, key accents
- **Secondary (Sky Blue):** #A8D8F0 — Supporting UI, cards, backgrounds
- **Accent (Blue):** #7CC7EE — Second accent moments, decorative elements
- **Background:** #FFF8FB — Page canvas, soft rose-tinted white
- **Text:** #2D3748 — Headlines and body copy
- **Subtext:** #64748B — Secondary text

### Typography
- **Headings:** Playfair Display (serif, elegant, feminine)
- **Body:** Inter (sans-serif, clean, readable)

### Animation Policy
- Keep: fade-up on scroll, smooth section reveals, hover effects, card lift, counter animations, testimonial slider, FAQ accordion
- Remove: particles, mouse tracking, continuous motion, parallax, rotating objects, floating elements

## 7. Development Phase Plan

### Phase 1: Complete Website Structure & All Sections
- Goal: Build the entire single-page website with all sections
- Deliverable: Fully functional, responsive website with Rose Blush + Sky Blue theme

### Phase 2: Premium Animation Upgrade
- Goal: Add world-class luxury animations and interactions across entire site
- Deliverable: Smooth page transitions, scroll reveals, custom cursor, magnetic buttons, marquee testimonials, count-up stats

### Phase 3: SEO Optimization
- Goal: Achieve production-grade SEO for all pages
- Deliverable: Fixed canonical domain (drnikhitabv.in), per-page meta tags via React 19, robots.txt, sitemap.xml, Schema.org JSON-LD structured data (MedicalOrganization, FAQPage, WebSite), proper semantic HTML links (replaced button+onClick with Link/a tags), social meta tags, geo tags, structured business hours
