# Implementation Plan: Blog Post Listing Page

## Overview
Add a Blog listing page to the portfolio site with navbar integration.

## Implementation Order

### 1. Content Layer
- Create `app/content/blog.ts` with BlogPost interface and sample data
- Include 1 sample post with realistic content

### 2. Component Layer
- Create `components/Blog/` directory
- Create `BlogCard.tsx` - individual post card component
- Create `Blog.tsx` - listing page container
- Create `Blog.module.scss` - all blog styling

### 3. Page Layer
- Create `pages/blog/index.tsx` - Blog listing page
- Import Blog component and content
- Set up page metadata (title, description)

### 4. Navigation Integration
- Update `components/NavBar/NavBar.tsx`
- Add "Blog" link after Contact
- Use Next.js Link for page navigation (not scroll)

### 5. Testing & Polish
- Test responsive layouts (mobile, tablet, desktop)
- Verify dark mode support
- Test hover states and interactions
- Verify navigation works correctly

## Data Model

```typescript
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

export interface BlogContent {
  pageTitle: string;
  pageSubtitle: string;
  posts: BlogPost[];
}
```

## Component Props

```typescript
// BlogCard
interface BlogCardProps {
  post: BlogPost;
}

// Blog
interface BlogProps {
  content: BlogContent;
}
```

## Styling Specifications

### Grid Layout
- Desktop (>992px): 3 columns, 24px gap
- Tablet (768-992px): 2 columns, 20px gap
- Mobile (<768px): 1 column, 16px gap

### Card Design
- Background: `var(--card-bg)`
- Border: 1px solid `var(--card-border)`
- Border-radius: 12px
- Padding: 0 (image bleeds) / 24px (content area)
- Hover: translateY(-4px), enhanced shadow

### Typography
- Title: Space Grotesk, 1.25rem, weight 600
- Date: 0.875rem, `var(--text-muted)`
- Excerpt: 1rem, 3 lines max with ellipsis

### Colors
- Use existing CSS variables for full theme support
- Accent color for hover states: `var(--primary-color)`

## Dependencies
None - using existing Next.js, SCSS, React setup

## Risks & Mitigations
| Risk | Mitigation |
|------|------------|
| Style conflicts | Use SCSS modules for isolation |
| Dark mode issues | Test both themes during development |
| Mobile layout | Use existing breakpoint mixins |
