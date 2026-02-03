import { useEffect, useRef } from "react";
import Link from "next/link";
import { BlogPost as BlogPostType } from "@/app/content/blog";
import styles from "./BlogPost.module.scss";
import { trackBlogView, trackBlogScroll } from "@/lib/analytics";

interface BlogPostProps {
  post: BlogPostType;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPost = ({ post }: BlogPostProps) => {
  const articleRef = useRef<HTMLElement>(null);
  const trackedDepths = useRef<Set<25 | 50 | 75 | 100>>(new Set());
  const hasTrackedView = useRef(false);

  // Track page view on mount
  useEffect(() => {
    if (!hasTrackedView.current && post.slug) {
      trackBlogView(post.slug);
      hasTrackedView.current = true;
    }
  }, [post.slug]);

  // Track scroll depth
  useEffect(() => {
    const article = articleRef.current;
    if (!article || !post.slug) return;

    const handleScroll = () => {
      const articleRect = article.getBoundingClientRect();
      const articleTop = articleRect.top + window.scrollY;
      const articleHeight = article.scrollHeight;

      // Calculate how much of the article has been scrolled
      const scrolledPast = window.scrollY + window.innerHeight - articleTop;
      const scrollPercentage = Math.min(100, Math.max(0, (scrolledPast / articleHeight) * 100));

      // Check each depth threshold
      const depths: (25 | 50 | 75 | 100)[] = [25, 50, 75, 100];
      for (const depth of depths) {
        if (scrollPercentage >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          trackBlogScroll(post.slug, depth);
        }
      }
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [post.slug]);

  // Content is trusted - generated from local markdown files at build time
  // using remark which produces safe HTML output
  return (
    <article ref={articleRef} className={styles.article} lang="en">
      <Link href="/blog" className={styles.backLink}>
        &larr; Back to Blog
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <time className={styles.date} dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className={styles.separator}>·</span>
          <span className={styles.author}>{post.author}</span>
        </div>
      </header>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />
    </article>
  );
};

export default BlogPost;
