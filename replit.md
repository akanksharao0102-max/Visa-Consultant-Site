# AKANKSHA Visa Consultant Website

## Overview
A professional website for AKANKSHA Visa Consultant, a leading overseas education and immigration consultancy based in Ahmedabad and Surat, Gujarat, India. The website showcases their services, destinations, testimonials, and contact information.

## Architecture
- **Frontend**: React with TypeScript, styled with Tailwind CSS and shadcn/ui components
- **Backend**: Express.js (minimal, primarily serving the frontend)
- **Routing**: wouter for client-side routing
- **Animations**: framer-motion for scroll animations
- **Icons**: lucide-react for UI icons, react-icons/si for brand logos

## Structure
- `client/src/pages/Home.tsx` - Main landing page
- `client/src/components/Navbar.tsx` - Top bar + sticky navigation header
- `client/src/components/HeroSection.tsx` - Hero banner with CTA
- `client/src/components/AboutSection.tsx` - About company with stats
- `client/src/components/WhyChooseUs.tsx` - SWEC values (S-W-E-C)
- `client/src/components/ServicesSection.tsx` - Four main services
- `client/src/components/CountriesSection.tsx` - Study abroad + immigration destinations
- `client/src/components/TestimonialsSection.tsx` - Client testimonials with pagination
- `client/src/components/CTASection.tsx` - Call to action banner
- `client/src/components/InsightsSection.tsx` - Blog/news/events section
- `client/src/components/UniversityPartners.tsx` - Partner universities by country
- `client/src/components/ContactSection.tsx` - Contact form + info
- `client/src/components/Footer.tsx` - Footer with links + newsletter

## Design
- Primary brand color: Blue (#046bd2, #032b66)
- Font: Poppins
- Responsive design with mobile menu
- Blue gradient hero and CTA sections
