# Feature Specification: Blog Post Page (Individual Post)

## Overview
Implement individual blog post pages (`/blog/[slug]`) that render Markdown content with proper formatting, typography, and dark mode support.

## User Story Reference
**US-2** from `docs/user-stories-blog.md`

> As a reader, I want to view a full blog post with proper formatting, so that I can read the content in a comfortable, distraction-free environment.

## Acceptance Criteria

### Post Header
- [ ] Author name displayed (e.g., "By Maalik Ahmad")
- [ ] Publication date displayed
- [ ] Title as large heading

### Content Formatting
- [ ] Paragraphs with comfortable line-height
- [ ] Headings/subheadings (h2, h3) styled appropriately
- [ ] Bold, italic, and inline formatting support
- [ ] Blockquotes with left border accent (red)
- [ ] Links in red accent color

### Images
- [ ] Images can be included in post content
- [ ] Captions/subtitles displayed below images
- [ ] Responsive (don't overflow container)

### Layout & Navigation
- [ ] Content width constrained (~700-800px max) for readability
- [ ] "Back to Blog" link to return to listing
- [ ] Full dark mode support

### Content Storage
- [ ] Post content stored as Markdown files in `/content/posts/`
- [ ] Markdown parsed and rendered at build time

## Technical Design

### Data Model Extension
```typescript
// Extend existing BlogPost in app/content/blog.ts
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  author: string;      // NEW: Author name
  content?: string;    // NEW: Full markdown content (loaded from file)
}
```

### File Structure
```
content/
  posts/
    building-scroll-animations-with-gsap.md   # Sample post
pages/
  blog/
    index.tsx           # Existing listing page
    [slug].tsx          # NEW: Dynamic post page
components/
  Blog/
    BlogPost.tsx        # NEW: Post content component
    BlogPost.module.scss # NEW: Post-specific styles
lib/
  markdown.ts           # NEW: Markdown utilities
```

### Markdown Processing
- Use `gray-matter` for frontmatter parsing
- Use `remark` + `remark-html` for Markdown → HTML conversion
- Or `next-mdx-remote` for MDX support

### Dynamic Route
`pages/blog/[slug].tsx`:
- `getStaticPaths`: Generate paths from all posts
- `getStaticProps`: Load and parse markdown for specific slug
- Render `BlogPost` component with parsed content

### Styling Approach
- Prose styles for readable content
- CSS variables for theme support
- Max-width container (~750px)
- Typography optimized for reading

## Dependencies
- `gray-matter` - Frontmatter parsing
- `remark` + `remark-html` - Markdown processing
  OR
- `next-mdx-remote` - MDX support with components

## Clarifications

1. **Markdown Processing**: Use remark + remark-html (lightweight, fast)
2. **Syntax Highlighting**: Yes, add syntax highlighting for code blocks
3. **Author Name**: "Maalik Ahmad Hornbuckle" as the byline

## Out of Scope
- Blog authentication (US-3)
- Comments/reactions
- Related posts
- Social sharing
