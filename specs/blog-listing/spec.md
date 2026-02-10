# Feature Specification: Blog Post Listing Page

## Overview
Implement a blog listing page (`/blog`) that displays blog posts in a card-based grid layout, accessible via a new navbar link.

## User Story Reference
**US-1** from `docs/user-stories-blog.md`

> As a visitor to the site, I want to see a list of blog posts when I navigate to the blog, so that I can browse available content and select something to read.

## Acceptance Criteria

### Navigation
- [ ] "Blog" link appears in navbar alongside Services, Portfolio, About Me, and Contact
- [ ] Clicking Blog link navigates to `/blog` (page navigation, not scroll)

### Blog Listing Page
- [ ] Posts display as cards in a responsive grid
- [ ] Each card shows:
  - Post title
  - Publication date (e.g., "January 15, 2026")
  - Brief excerpt (2-3 lines)
  - Optional featured image thumbnail
- [ ] Card hover effect: `translateY(-2px)` with shadow enhancement
- [ ] Clicking a card navigates to individual post page (`/blog/[slug]`)

### Design Requirements
- [ ] Matches site aesthetic (Space Grotesk font, red accent color)
- [ ] Full dark mode support via CSS variables
- [ ] Responsive: stacks to single column on mobile

## Technical Design

### Data Model
```typescript
// app/content/blog.ts
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;        // ISO date string
  image?: string;      // Optional featured image path
  category?: string;   // Optional category
}

interface BlogContent {
  pageTitle: string;
  pageSubtitle: string;
  posts: BlogPost[];
}
```

### File Structure
```
pages/
  blog/
    index.tsx           # Blog listing page
    [slug].tsx          # Individual post page (future US-2)
components/
  Blog/
    Blog.tsx            # Blog listing component
    Blog.module.scss    # Blog styles
    BlogCard.tsx        # Individual blog card
app/
  content/
    blog.ts             # Blog content data
content/
  posts/                # Markdown files (future US-2)
```

### Component Architecture

#### BlogCard Component
- Receives single post data as props
- Renders card with image, title, date, excerpt
- Next.js Link wrapping for navigation
- Hover state with transform and shadow

#### Blog Component
- Receives posts array as props
- Page header with title and subtitle
- Responsive CSS Grid layout
- Maps posts to BlogCard components

### Styling Approach
- SCSS Module (`Blog.module.scss`)
- CSS variables for theme support
- Grid layout: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Card styling consistent with existing site components
- Uses existing breakpoint mixins from `_variables.scss`

### Navigation Integration
- Add "Blog" button to NavBar.tsx
- External page navigation (not scroll)
- Update mobile menu as well

## Dependencies
- No new dependencies required
- Uses existing Next.js, SCSS, React setup

## Clarifications

1. **Sample Posts**: Create 1 sample blog post for initial implementation
2. **Nav Position**: Blog link placed after Contact (last navigation item)
3. **Categories**: No category badges - keep cards simple with title, date, excerpt

## Out of Scope (Future Stories)
- Individual blog post page (US-2)
- Blog authentication (US-3)
- Search/filter functionality
- Pagination
- RSS feed
