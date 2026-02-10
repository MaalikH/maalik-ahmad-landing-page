# User Stories: Blog Feature

## US-1: Blog Page (Post Listing)

**As a** visitor to the site,
**I want to** see a list of blog posts when I navigate to the blog,
**So that** I can browse available content and select something to read.

### Acceptance Criteria

- A "Blog" link appears in the navbar alongside Services, Portfolio, About Me, and Contact
- Clicking the Blog link navigates to `/blog` (not a scroll, an actual page)
- Posts display as cards in a responsive grid
- Each card shows:
  - Post title
  - Publication date (e.g., "January 15, 2026")
  - Brief excerpt (2-3 lines)
  - Optional featured image thumbnail
- Card hover effect matches existing design (`translateY(-2px)` with shadow)
- Clicking a card navigates to the individual post page
- Design matches site aesthetic (Space Grotesk font, red accent, dark mode support)
- Responsive: stacks to single column on mobile

---

## US-2: Blog Post Page (Individual Post)

**As a** reader,
**I want to** view a full blog post with proper formatting,
**So that** I can read the content in a comfortable, distraction-free environment.

### Acceptance Criteria

- Post displays:
  - Author name (e.g., "By Maalik Ahmad")
  - Publication date
  - Title as large heading
- Content supports:
  - Paragraphs with comfortable line-height
  - Headings/subheadings (h2, h3)
  - Bold, italic, and inline formatting
  - Blockquotes with left border accent
  - Links in red accent color
- Images:
  - Can be included within post content
  - Have captions/subtitles displayed below
  - Are responsive (don't overflow container)
- Content width constrained for readability (~700-800px max)
- "Back to Blog" link to return to listing
- Full dark mode support
- Post content stored as Markdown files in `/content/posts/`

---

## US-3: Blog Authentication

**As a** blog owner,
**I want** visitors to enter a password before accessing the blog,
**So that** only friends and family I've shared the password with can read my posts.

### Acceptance Criteria

- When navigating to `/blog` without authentication, a modal overlay appears
- Blog content is blurred/hidden behind the modal
- Modal contains:
  - Brief instruction text (e.g., "Enter the password to access the blog")
  - Password input field
  - Submit button with loading state
- Error message on incorrect password ("Incorrect password, please try again")
- Modal cannot be dismissed without correct password (no X button, no click-outside)
- After successful auth:
  - Modal fades away revealing blog content
  - Session stored in localStorage
  - No re-auth needed when navigating between blog pages
  - Persists across page refreshes
- Password validated via API route (not hardcoded in client JS)
- Modal design matches site aesthetic (dark mode support, red accent button)
- Mobile-friendly

---

## Notes

- **Content Management**: Post metadata in `/app/content/blog.ts`, full content as Markdown in `/content/posts/`
- **Implementation Order**: Blog Page → Post Page → Authentication
- **Security**: Simple auth for friends/family sharing, not designed for sensitive content
