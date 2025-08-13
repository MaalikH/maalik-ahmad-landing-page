# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with turbo mode enabled
- `npm run build` - Build the production application
- `npm run lint` - Run ESLint to check code quality
- `npm start` - Start the production server

The development server runs at http://localhost:3000 and includes telemetry disabled by default.

## Architecture Overview

This is a Next.js personal portfolio landing page using the Pages Router with a content-driven architecture:

### Core Technologies
- **Next.js 15** with Pages Router (not App Router)
- **TypeScript** with relaxed strict mode settings
- **SCSS Modules** for component-specific styling with CSS variables
- **GSAP** for advanced animations and scroll effects
- **Lenis** for smooth scrolling via ReactLenis wrapper
- **Framer Motion** for component animations
- **Bootstrap 5** for base CSS utilities

### Key Architecture Patterns

**Content-Driven Design**: All page content is externalized to `/app/content/` TypeScript files:
- `hero.ts`, `aboutMe.ts`, `portfolio.ts`, `services.ts`, `contact.ts`, `quicklinks.ts`
- Components receive content as props, making text/data changes require no component modifications

**Scroll-Based Experience**: The main page implements sophisticated scroll behavior:
- Lenis smooth scrolling integrated with GSAP ticker in `_app.tsx`
- Custom scroll sensitivity and animation timing constants
- Portfolio section disables fullpage scrolling when visible using IntersectionObserver

**Mobile-First Responsive Strategy**: Automatic device detection and routing:
- `lib/deviceDetection.ts` handles mobile detection and quicklinks redirection
- Mobile users are redirected to `/quicklinks` unless they've seen the full experience
- LocalStorage tracks user experience state

**Component Structure**: Each major section is a standalone component with co-located SCSS modules:
- `Hero/` - Animated hero section with ReactTyped effects
- `Services/`, `Portfolio/`, `AboutMe/`, `ContactForm/` - Main content sections  
- `Footer/GarageFooter` - Custom footer with visibility state management

### Styling System
- Global styles in `/styles/globals.scss` with CSS variables in `_variables.scss`
- Component-specific styles use CSS Modules (`.module.scss`)
- Bootstrap integration for grid and utilities
- Custom SCSS for animations and advanced styling

### Analytics & SEO
- Google Analytics integration via `GoogleAnalytics.tsx`
- Custom section view tracking with `lib/gtag.ts`
- Comprehensive meta tags, Open Graph, and structured data
- Asset preloading for critical images

### Key Files to Understand
- `pages/index.tsx` - Main landing page with scroll orchestration
- `pages/_app.tsx` - Lenis scroll integration and global setup
- `lib/deviceDetection.ts` - Mobile detection and routing logic
- `/app/content/` - Content management system