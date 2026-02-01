export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string | null;
  author: string;
  content?: string;  // Rendered HTML content from markdown
}

export interface BlogContent {
  pageTitle: string;
  pageSubtitle: string;
  posts: BlogPost[];
}

export const blogContent: BlogContent = {
  pageTitle: "Blog",
  pageSubtitle: "If you're ever wondering what Maalik is up to",
  posts: [
    {
      id: "1",
      slug: "building-scroll-animations-with-gsap",
      title: "Building Scroll Animations with GSAP and ScrollTrigger",
      excerpt: "A deep dive into creating performant, complex scroll-driven animations using GSAP's ScrollTrigger plugin. Learn how to pin sections, orchestrate timelines, and handle responsive behavior.",
      date: "2026-01-28",
      author: "Maalik Ahmad Hornbuckle"
    }
  ]
};
