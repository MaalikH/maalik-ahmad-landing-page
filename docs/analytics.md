# Analytics Tracking

This document describes all analytics events tracked using Vercel Analytics.

## Automatic Tracking (Provided by Vercel Analytics)

Vercel Analytics automatically tracks:

- **Page views** - Every page navigation
- **Unique visitors** - De-duplicated visitor counts
- **Referrer sources** - Where traffic comes from
- **Countries & regions** - Geographic distribution
- **Device types** - Desktop, mobile, tablet breakdown
- **Browsers & OS** - Browser and operating system usage
- **Top pages** - Most visited pages

## Custom Events

### Section View Tracking

Tracks when users scroll to major sections on the landing page.

| Event Name | Properties | Trigger | Location |
|------------|------------|---------|----------|
| `section_view` | `{ section: "Hero" }` | Page load | `pages/index.tsx` |
| `section_view` | `{ section: "Services" }` | 50% visible | `pages/index.tsx` |
| `section_view` | `{ section: "Portfolio" }` | 50% visible | `pages/index.tsx` |
| `section_view` | `{ section: "About Me" }` | 50% visible | `pages/index.tsx` |
| `section_view` | `{ section: "Contact" }` | 50% visible | `pages/index.tsx` |

**Implementation**: Uses `IntersectionObserver` with 50% threshold. Each section is only tracked once per session.

---

### Project Click Tracking

Tracks when users click on portfolio project cards.

| Event Name | Properties | Trigger | Location |
|------------|------------|---------|----------|
| `project_click` | `{ name: string, platform: "desktop" }` | Click on portfolio card | `components/Portfolio/portfolio.tsx` |
| `project_click` | `{ name: string, platform: "quicklinks" }` | Click on quicklinks card | `pages/quicklinks.tsx` |

**Example**: `{ name: "Black Is History", platform: "desktop" }`

---

### Contact Form Tracking

Tracks contact form submission outcomes.

| Event Name | Properties | Trigger | Location |
|------------|------------|---------|----------|
| `contact_submit` | `{ success: true }` | Form submitted successfully | `components/ContactForm/ContactForm.tsx` |
| `contact_submit` | `{ success: false }` | Form submission failed | `components/ContactForm/ContactForm.tsx` |

---

### Blog Tracking

Tracks blog post views and reading engagement.

| Event Name | Properties | Trigger | Location |
|------------|------------|---------|----------|
| `blog_view` | `{ slug: string }` | Blog post page load | `components/Blog/BlogPost.tsx` |
| `blog_scroll` | `{ slug: string, depth: 25 }` | Scrolled 25% of article | `components/Blog/BlogPost.tsx` |
| `blog_scroll` | `{ slug: string, depth: 50 }` | Scrolled 50% of article | `components/Blog/BlogPost.tsx` |
| `blog_scroll` | `{ slug: string, depth: 75 }` | Scrolled 75% of article | `components/Blog/BlogPost.tsx` |
| `blog_scroll` | `{ slug: string, depth: 100 }` | Scrolled 100% of article | `components/Blog/BlogPost.tsx` |

**Example**: `{ slug: "building-scroll-animations-with-gsap", depth: 50 }`

---

### Newsletter Subscription Tracking

Tracks newsletter subscription outcomes.

| Event Name | Properties | Trigger | Location |
|------------|------------|---------|----------|
| `subscribe` | `{ success: true }` | Subscription successful | `components/Blog/BlogSubscribe.tsx` |
| `subscribe` | `{ success: false }` | Subscription failed | `components/Blog/BlogSubscribe.tsx` |

---

## Analytics Helper Functions

All tracking functions are defined in `lib/analytics.ts`:

```typescript
import { track } from '@vercel/analytics';

// Section views
trackSectionView(section: string)

// Project clicks
trackProjectClick(name: string, platform: 'desktop' | 'quicklinks')

// Contact form
trackContactSubmit(success: boolean)

// Blog
trackBlogView(slug: string)
trackBlogScroll(slug: string, depth: 25 | 50 | 75 | 100)

// Newsletter
trackSubscribe(success: boolean)
```

---

## Viewing Analytics

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click **Analytics** tab
4. View **Custom Events** for event-specific data

---

## Notes

- **Privacy**: Vercel Analytics is cookie-free and GDPR compliant
- **Free Tier Limit**: 2,500 custom events per month on free plan
- **Local Development**: Events are only sent in production (Vercel deployments)
