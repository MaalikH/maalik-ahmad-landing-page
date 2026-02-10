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
      id: "2",
      slug: "january-how-ai-changed-how-i-build",
      title: "January: How AI Changed How I Build",
      excerpt: "This month wasn't just about working on apps. It was about working in a new way. AI tools reshaped how I build software — from idea to working feature, faster than ever.",
      date: "2026-02-09",
      author: "Maalik Ahmad Hornbuckle"
    }
  ]
};
