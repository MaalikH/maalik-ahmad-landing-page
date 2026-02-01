# Implementation Plan: Blog Authentication

## Overview
Add password protection to the blog listing page with a modal overlay.

## Implementation Order

### 1. Environment Setup
- Create `.env.local` with `BLOG_PASSWORD`
- Add `.env.local` to `.gitignore` if not already

### 2. API Route
- Create `pages/api/blog/auth.ts`
- Accept POST with password
- Compare against environment variable
- Return success/failure

### 3. Auth Context
- Create `context/BlogAuthContext.tsx`
- Manage authenticated state
- Check localStorage on mount
- Provide auth methods

### 4. Auth Modal Component
- Create `components/Blog/BlogAuthModal.tsx`
- Create `components/Blog/BlogAuthModal.module.scss`
- Password input with submit
- Loading state
- Error message display
- Fade animation

### 5. Integrate with Blog Page
- Wrap blog page with auth provider
- Show modal when not authenticated
- Blur content behind modal
- Reveal content on success

## API Contract

```typescript
// POST /api/blog/auth
// Request
{ password: string }

// Response
{ success: boolean, error?: string }
```

## Auth Flow

1. User visits `/blog`
2. Check localStorage for `blog_auth` flag
3. If not authenticated, show modal with blurred content
4. User enters password, clicks submit
5. POST to `/api/blog/auth`
6. If success:
   - Set `blog_auth` in localStorage
   - Fade out modal
   - Reveal content
7. If failure:
   - Show error message
   - Keep modal open

## Styling Specifications

### Modal Overlay
- Fixed position, full viewport
- Background: semi-transparent dark (`rgba(0,0,0,0.8)`)
- Centered content box
- Dark mode compatible

### Modal Box
- Background: `var(--card-bg)`
- Border: `1px solid var(--card-border)`
- Square corners (border-radius: 0)
- Max-width: 400px
- Padding: comfortable spacing

### Form Elements
- Input: full width, dark theme compatible
- Button: red accent (`var(--primary-color)`)
- Error: red text
- Loading: subtle spinner or disabled state

### Blur Effect
- Apply `filter: blur(8px)` to blog content when modal shown
- Disable pointer events on blurred content
