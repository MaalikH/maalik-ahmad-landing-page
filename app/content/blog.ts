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
      id: "4",
      slug: "march-three-products-one-month",
      title: "March: Three Products, One Month",
      excerpt: "Nudge submitted to the App Store. BookRec drops tomorrow. WebSwift is taking shape. March was the month everything started shipping.",
      date: "2026-03-26",
      author: "Maalik Ahmad Hornbuckle"
    },
    {
      id: "3",
      slug: "1619-wasnt-a-plan-it-was-an-accident",
      title: "1619 Wasn't a Plan. It Was an Accident.",
      excerpt: "On lineage, disruption, and what your DNA already knows. I found out a few years ago that I'm a direct descendant of Margaret Cornish and John Graweere. That sentence probably means nothing to you. It rewired everything for me.",
      date: "2026-02-27",
      author: "Maalik Ahmad Hornbuckle"
    },
    {
      id: "2",
      slug: "january-how-ai-changed-how-i-build",
      title: "January: How AI Changed How I Build",
      excerpt: "This month wasn't just about working on apps. It was about working in a new way. AI tools reshaped how I build software, from idea to working feature, faster than ever.",
      date: "2026-02-09",
      author: "Maalik Ahmad Hornbuckle"
    }
  ]
};
