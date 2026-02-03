import { track } from '@vercel/analytics';

// ============================================
// Section View Events
// ============================================

/**
 * Track when a user views a section on the landing page
 * @param section - The section name (Hero, Services, Portfolio, About Me, Contact)
 */
export const trackSectionView = (section: string) => {
  track('section_view', { section });
};

// ============================================
// Project Interaction Events
// ============================================

/**
 * Track when a user clicks on a project card
 * @param name - The project name
 * @param platform - Where the click occurred ('desktop' or 'quicklinks')
 */
export const trackProjectClick = (name: string, platform: 'desktop' | 'quicklinks') => {
  track('project_click', { name, platform });
};

// ============================================
// Contact Form Events
// ============================================

/**
 * Track contact form submission result
 * @param success - Whether the form submission was successful
 */
export const trackContactSubmit = (success: boolean) => {
  track('contact_submit', { success });
};

// ============================================
// Blog Events
// ============================================

/**
 * Track blog post view
 * @param slug - The URL slug of the blog post
 */
export const trackBlogView = (slug: string) => {
  track('blog_view', { slug });
};

/**
 * Track scroll depth on blog posts
 * @param slug - The URL slug of the blog post
 * @param depth - Scroll depth percentage (25, 50, 75, 100)
 */
export const trackBlogScroll = (slug: string, depth: 25 | 50 | 75 | 100) => {
  track('blog_scroll', { slug, depth });
};

// ============================================
// Subscription Events
// ============================================

/**
 * Track newsletter subscription result
 * @param success - Whether the subscription was successful
 */
export const trackSubscribe = (success: boolean) => {
  track('subscribe', { success });
};

// ============================================
// Vercel Analytics Custom Events Reference
// ============================================
/**
 * Custom Events for Vercel Analytics:
 *
 * | Event Name      | Properties                          | Trigger                          |
 * |-----------------|-------------------------------------|----------------------------------|
 * | section_view    | { section }                         | Section comes into view (50%)    |
 * | project_click   | { name, platform }                  | Click on portfolio card          |
 * | contact_submit  | { success }                         | Contact form submission result   |
 * | blog_view       | { slug }                            | Blog post page load              |
 * | blog_scroll     | { slug, depth }                     | 25/50/75/100% scroll milestones  |
 * | subscribe       | { success }                         | Newsletter subscription result   |
 */
