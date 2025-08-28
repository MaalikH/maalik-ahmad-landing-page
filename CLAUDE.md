# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with turbo mode enabled
- `npm run build` - Build the production application
- `npm run lint` - Run ESLint to check code quality
- `npm start` - Start the production server

The development server runs at http://localhost:3000 and includes telemetry disabled by default.

## Architecture Overview

This is a Next.js personal portfolio landing page (v2) using the Pages Router with advanced scroll animations:

### Core Technologies
- **Next.js 15** with Pages Router (not App Router)
- **TypeScript** with relaxed strict mode settings
- **SCSS Modules** for component-specific styling with CSS variables
- **GSAP** with ScrollTrigger for advanced scroll animations
- **Lenis** for smooth horizontal scrolling in card sections
- **React Context** for managing section transitions
- **Bootstrap 5** for base CSS utilities

### V2 Architecture - Advanced Scroll System

**3-Phase Scroll Timeline**: Services and Portfolio sections implement sophisticated scroll behaviors:
1. **Phase 1**: Horizontal card movement (2s duration)
2. **Phase 2**: Vertical gap closure (1.5s duration) 
3. **Phase 3**: Section fade-out with staggered element animations

**GSAP-Driven Animations**: All major animations use GSAP over native CSS:
- ScrollTrigger with timeline control for precise animation sequencing
- Section pinning with natural positioning (not fixed/absolute)
- Master timelines that respond to scroll progress
- Staggered fade-ins/outs for cards and titles

**Transition Context System**: Global state management for section handoffs:
- `context/TransitionContext.tsx` manages Services → Featured Works transitions
- Cross-component communication for smooth handoffs
- Opacity choreography between sections

**Lenis Integration**: Horizontal scrolling within pinned sections:
- Separate Lenis instances for each scrollable card container
- Orientation-specific smooth scrolling (horizontal only)
- Manual RAF loops for smooth animation frames

### Key Architecture Patterns

**Content-Driven Design**: All page content is externalized to `/app/content/` TypeScript files:
- `hero.ts`, `aboutMe.ts`, `portfolio.ts`, `services.ts`, `contact.ts`, `quicklinks.ts`
- Components receive content as props, making text/data changes require no component modifications

**Section-Based Scrolling**: Each major section implements its own scroll behavior:
- Services: 3-phase horizontal card scroll → gap closure → fade out
- Portfolio: Identical 3-phase behavior with staggered transition from Services
- Natural section flow with GSAP-controlled timing

**Mobile-First Responsive Strategy**: Automatic device detection and routing:
- `lib/deviceDetection.ts` handles mobile detection and quicklinks redirection
- Mobile users are redirected to `/quicklinks` unless they've seen the full experience
- LocalStorage tracks user experience state

### Component Structure

**Services Component** (`components/Services/`):
- 3-phase scroll timeline with horizontal card movement
- GSAP ScrollTrigger with section pinning
- Lenis horizontal scrolling for card container
- Staggered fade-out at 85% scroll progress
- Transition context integration for handoff to Portfolio

**Portfolio Component** (`components/Portfolio/`):
- Identical scroll behavior to Services
- Transition context monitoring for visibility state
- Staggered fade-in triggered by Services fade-out
- Card-based layout matching Services design

**Shared Patterns**:
- `useGSAP` hooks for animation management
- ScrollTrigger markers for debugging
- Accessibility states (`aria-hidden`, `pointer-events`)
- Responsive gap and timing adjustments

### Styling System
- Global styles in `/styles/globals.scss` with CSS variables in `_variables.scss`
- Component-specific styles use CSS Modules (`.module.scss`)
- GSAP-controlled animations override CSS where needed
- Consistent spacing and timing variables across sections

### Scroll Animation Specifications

**Timing Standards**:
- Horizontal movement: 2s duration with "power2.out" easing
- Vertical gap closure: 1.5s duration with "power2.inOut" easing
- Fade transitions: 0.3-0.8s with staggered delays
- ScrollTrigger markers enabled for debugging

**Positioning Logic**:
- Initial card offset calculation: `totalWidth - (cardWidth * 2 + gap)`
- Shows exactly 2 cards visible initially
- Gap starts at 300px, animates to 0px
- Section pinning at `"top top+=120px"` (navbar clearance)

### Analytics & SEO
- Google Analytics integration via `GoogleAnalytics.tsx`
- Custom section view tracking with `lib/gtag.ts`
- Comprehensive meta tags, Open Graph, and structured data
- Asset preloading for critical images

### Known Issues & Bug Reports

#### Portfolio Section Scroll Hijacking Issue
**Status**: Active Bug - Inconsistent Card Height Maintenance During Swiper Navigation

**Problem Description**:
The Portfolio section implements a complex scroll hijacking mechanism to control Swiper navigation via scroll wheel. Despite extensive attempts to lock the scroll position, the cards still experience vertical movement/drift during horizontal swipe navigation, creating a jarring UX where users see the cards "jumping" or shifting vertically while trying to navigate horizontally through the portfolio.

**Current Implementation** (`components/Portfolio/portfolio.tsx:94-219`):
- Hijacks scroll events when section is pinned via ScrollTrigger
- Captures initial scroll position (`hijackStartPosition`) when hijacking begins
- Disables native Swiper mouse/touch controls during hijacking
- Implements custom wheel event handler to control slide navigation
- Uses multiple scroll lock mechanisms:
  - `forceScrollLock()` function on scroll events
  - Position correction in Swiper's `onSlideChange` callback 
  - Manual `window.scrollTo()` calls throughout the hijacking process

**Attempted Fixes That Haven't Resolved the Issue**:
1. **Aggressive Scroll Position Locking**: Added `forceScrollLock` listener to scroll events with immediate `window.scrollTo()` correction
2. **Multiple Event Prevention**: Prevented wheel, touch, keyboard, and scroll events with capture:true and stopImmediatePropagation
3. **Swiper Integration**: Disabled `allowTouchMove` and `mousewheel` on Swiper, using only programmatic control
4. **Position Drift Correction**: Added drift detection and correction in `onSlideChange` callback (line 381-388)
5. **Throttling**: Implemented scroll event throttling to prevent momentum buildup
6. **Timeline Coordination**: Attempted to coordinate GSAP timeline progress with Swiper slide progression

**Current Status**: 
The scroll position still "leaks through" during Swiper slide transitions, causing the cards to visually move vertically even though the scroll position should be locked. This suggests the issue may be deeper in how ScrollTrigger, GSAP timelines, and Swiper interact during the pinned state.

**Technical Hypothesis**:
The issue likely stems from competing scroll contexts between:
- ScrollTrigger's section pinning mechanism
- GSAP timeline animations responding to scroll progress
- Swiper's internal positioning calculations
- Browser's native scroll behavior fighting the manual scroll locks

**Next Investigation Areas**:
1. Consider disabling ScrollTrigger progress updates entirely during hijacked state
2. Investigate if GSAP's timeline progress updates are causing position shifts
3. Explore using `position: fixed` instead of ScrollTrigger pinning during hijacked state
4. Test completely separating Swiper control from scroll events (keyboard/button navigation only)

### Key Files to Understand
- `pages/index.tsx` - Main landing page with section orchestration
- `components/Services/Services.tsx` - 3-phase scroll implementation
- `components/Portfolio/portfolio.tsx` - Matching Portfolio scroll behavior (contains scroll hijacking bug)
- `context/TransitionContext.tsx` - Cross-section state management
- `/app/content/` - Content management system