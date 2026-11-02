# Vanguard Advisory - Strategic Business Consulting Website

A single-page application (SPA) created using **React 19**, **TypeScript**, and **Tailwind CSS**, designed following the **UI-UX-Pro-Max** design intelligence standard and **code_rules** architecture.

## 🎨 Theme Palette
- **Background**: Crisp White (`#FFFFFF`) & Ultra-light Gray (`#F9FAFB`)
- **Primary Text & Structure**: Deep Black (`#0A0A0A` / `#111827`)
- **Accent & Primary CTA**: Executive Electric Orange (`#FF5E00`, hover `#E05300`, light `#FFF5EE`)

---

## 🚀 Features & Section Architecture

1. **Navbar**
   - Sticky navigation with scroll-sensitive blur backdrop
   - Smooth anchor scrolling
   - Active scroll-spy link tracking
   - Responsive collapsible mobile menu drawer with ARIA accessibility
   - Quick "Book Consultation" CTA button

2. **Hero Section**
   - Small Badge: *"Your Trusted Business Consulting Partner"*
   - High-impact Headline: *"Transforming Business Challenges Into Opportunities."*
   - Engaging description & value proposition
   - Dual CTAs: *"Book a Consultation"* (primary) and *"Explore Our Services"* (secondary)
   - Interactive Executive Decision Cockpit graphic with vector yield chart and live metrics
   - Institutional trust proof indicators

3. **Trust & Statistics**
   - High-contrast horizontal stat row
   - 18+ Years Experience, 500+ Clients Served, 1,250+ Projects Completed, 25+ Industries Served
   - Fully configurable via `statisticsData`

4. **About Us**
   - Two-column responsive layout
   - Team photography with experience overlay badges
   - Mission and Vision statement cards
   - Key differentiators checklist
   - *"Learn More About Our Heritage"* interactive modal

5. **Services Grid**
   - Configurable grid of 6 disciplines: *Business Consulting, Strategic Planning, Digital Transformation, Financial Advisory, Technology Consulting, Operational Excellence*
   - Vector icons via `IconResolver`
   - *"Learn More"* interactive modal with deliverables and quantified impact metrics
   - Direct link to contact enquiry form

6. **Industries We Serve**
   - Responsive multi-card grid
   - *Healthcare & Life Sciences, Banking & Financial Services, Advanced Manufacturing, Retail & E-Commerce, Software & Technology, Education & EdTech*
   - Sector benchmarks and impact badges

7. **Why Choose Us?**
   - 4 competitive advantage feature cards:
     - *Experienced Professionals* (100% Senior Practitioner Led)
     - *Customized Strategies* (0% Template Solutions)
     - *Data-Driven Decisions* (99.4% KPI Target Accuracy)
     - *Long-Term Partnerships* (92% Repeat Engagements)

8. **Our Working Process**
   - Four-stage strategic timeline:
     1. *Discovery* (Diagnostic audit, stakeholder alignment)
     2. *Strategy* (Mathematical scenario modeling, blueprints)
     3. *Implementation* (Agile sprints, change management)
     4. *Results & Optimization* (KPI audits, value handover)
   - Desktop horizontal connector line + mobile vertical flow

9. **Case Studies / Projects**
   - 3 sample enterprise projects with project photography:
     - Global Supply Chain Modernization & Margin Recovery
     - Digital Core Banking Transformation
     - SaaS Enterprise Scale-Up & Go-To-Market Alignment
   - Challenge, Solution, Outcome breakdown and 3 measurable stats per case

10. **Testimonials**
    - Client testimonial carousel (demonstrative client profiles)
    - Rating stars, company designations, avatars
    - Autoplay with pause/resume toggle (WCAG / UI-UX-Pro-Max compliance)
    - Next/Previous controls and dot indicator pagination

11. **FAQ Accordion**
    - Common inquiries with expandable/collapsible accordions
    - Accessible ARIA attributes (`aria-expanded`, `aria-controls`)
    - Consultation booking banner

12. **Contact / Lead Generation**
    - Two-column layout
    - Direct email, phone, office headquarters, business hours, and SLA response pledge
    - Social links (LinkedIn, X / Twitter, GitHub, YouTube)
    - Full consultation enquiry form with field-level validation:
      - Full Name, Business Email, Company Name, Phone Number, Service Interested In, Message
      - Inline error states, loading spinner, and confirmation screen

13. **Footer**
    - Brand logo and narrative
    - Quick navigation links
    - Service links
    - Headquarters contact details
    - Interactive Privacy Policy and Terms of Engagement modals
    - Copyright notice & smooth Back to Top trigger

---

## 🛠️ Tech Stack & Architecture

- **React 19**
- **TypeScript**
- **Vite 6**
- **Tailwind CSS 3**
- **Lucide React** (Vector icons)
- **Vitest** + **React Testing Library** (15 test suites, 58 unit and integration tests)

---

## 💻 Available Scripts

- `npm run dev`: Starts the local Vite development server
- `npm run build`: Type-checks and compiles production bundle to `/dist`
- `npm test`: Runs all 58 Vitest tests across 15 test suites
- `npm run preview`: Previews the production build locally

