# Implementation Plan: Blog Post Page

## Overview
Create individual blog post pages with Markdown rendering and syntax highlighting.

## Implementation Order

### 1. Dependencies
- Install `gray-matter` for frontmatter parsing
- Install `remark`, `remark-html` for Markdown → HTML
- Install `remark-prism` or similar for syntax highlighting

### 2. Content Directory
- Create `/content/posts/` directory
- Create sample markdown post with frontmatter

### 3. Markdown Utilities
- Create `lib/markdown.ts` with:
  - `getPostBySlug(slug)` - Load single post
  - `getAllPosts()` - Get all posts for paths
  - Parse frontmatter + render markdown

### 4. Update Content Model
- Add `author` field to BlogPost interface
- Update sample post data

### 5. Blog Post Component
- Create `components/Blog/BlogPost.tsx`
- Create `components/Blog/BlogPost.module.scss`
- Prose styling for readable content
- Code block styling with syntax colors
- Image handling with captions

### 6. Dynamic Page Route
- Create `pages/blog/[slug].tsx`
- Implement `getStaticPaths` for all slugs
- Implement `getStaticProps` to load post content
- Render BlogPost component

### 7. Testing
- Verify Markdown rendering
- Test dark mode
- Test responsive layout
- Verify syntax highlighting

## Dependencies to Install
```bash
npm install gray-matter remark remark-html remark-prism
```

## Styling Specifications

### Typography
- Body: 1.125rem (18px), line-height 1.8
- H2: 1.75rem, weight 600, margin-top 2rem
- H3: 1.375rem, weight 600, margin-top 1.5rem
- Code inline: monospace, background tinted

### Layout
- Max-width: 750px
- Padding: responsive (16px mobile, 24px desktop)
- Back link: top of page, subtle styling

### Colors (CSS Variables)
- Text: `var(--text-color)`
- Links: `var(--primary-color)`
- Blockquote border: `var(--primary-color)`
- Code background: slightly tinted

### Code Blocks
- Use Prism theme compatible with dark mode
- Border-radius: 8px
- Padding: 1rem
- Overflow: auto with scrollbar
