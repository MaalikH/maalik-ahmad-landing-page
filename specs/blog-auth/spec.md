# Feature Specification: Blog Authentication

## Overview
Implement password protection for the blog section, requiring visitors to enter a password before accessing blog content.

## User Story Reference
**US-3** from `docs/user-stories-blog.md`

> As a blog owner, I want visitors to enter a password before accessing the blog, so that only friends and family I've shared the password with can read my posts.

## Acceptance Criteria

### Modal Behavior
- [ ] Modal overlay appears when navigating to `/blog` without authentication
- [ ] Blog content is blurred/hidden behind the modal
- [ ] Modal cannot be dismissed without correct password (no X button, no click-outside)

### Modal Content
- [ ] Brief instruction text (e.g., "Enter the password to access the blog")
- [ ] Password input field
- [ ] Submit button with loading state
- [ ] Error message on incorrect password

### Authentication Flow
- [ ] Password validated via API route (not hardcoded in client JS)
- [ ] After successful auth:
  - Modal fades away revealing blog content
  - Session stored in localStorage
  - No re-auth needed when navigating between blog pages
  - Persists across page refreshes

### Design
- [ ] Modal design matches site aesthetic
- [ ] Dark mode support
- [ ] Red accent button
- [ ] Mobile-friendly

## Technical Design

### API Route
```
POST /api/blog/auth
Request: { password: string }
Response: { success: boolean, error?: string }
```

### Environment Variable
```
BLOG_PASSWORD=<hashed-or-plain-password>
```

### Components
```
components/
  Blog/
    BlogAuthModal.tsx      # Password modal component
    BlogAuthModal.module.scss
    BlogAuthProvider.tsx   # Context provider for auth state
```

### Auth State Management
- Use React Context for auth state
- Check localStorage on mount for existing session
- Store auth token/flag in localStorage after successful auth

### File Structure
```
pages/
  api/
    blog/
      auth.ts            # API route for password validation
context/
  BlogAuthContext.tsx    # Auth context and provider
```

## Security Considerations
- Password NOT hardcoded in client-side JavaScript
- Server-side validation via API route
- Simple security for friends/family sharing (not enterprise-grade)
- Consider using environment variable for password

## Clarifications

1. **Password**: Create .env.local with simple placeholder password (user will change later)
2. **Auth Scope**: Protect listing page only (/blog), individual posts remain accessible

## Out of Scope
- User accounts/registration
- Password reset functionality
- Session expiration
- Rate limiting (nice-to-have for later)
