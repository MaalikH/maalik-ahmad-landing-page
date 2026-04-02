import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BlogPost as BlogPostType } from "@/app/content/blog";
import styles from "./BlogPost.module.scss";
import { trackBlogView, trackBlogScroll } from "@/lib/analytics";

gsap.registerPlugin(ScrollTrigger);

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
  const contentRef = useRef<HTMLDivElement>(null);
  const trackedDepths = useRef<Set<25 | 50 | 75 | 100>>(new Set());
  const hasTrackedView = useRef(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Timeline scroll animations
  useGSAP(
    () => {
      if (isMobile === null) return;
      const container = contentRef.current;
      if (!container) return;

      const timeline = container.querySelector(".timeline");
      const timelineSection = container.querySelector(".timeline-section");
      const items = container.querySelectorAll(".timeline-item");
      const proseBlocks = container.querySelectorAll(".timeline-prose");
      if (!timeline || !items.length) return;

      // Mobile: show everything static, no animations
      if (isMobile) {
        gsap.set(items, { clearProps: "all" });
        gsap.set(proseBlocks, { clearProps: "all" });
        items.forEach((item) => item.classList.add("timeline-item--active"));
        return;
      }

      // Inject progress line if not already present
      if (!timeline.querySelector(".timeline-progress")) {
        const progressLine = document.createElement("div");
        progressLine.className = "timeline-progress";
        timeline.prepend(progressLine);
      }

      const dates = container.querySelectorAll(".timeline-date");
      const contents = container.querySelectorAll(".timeline-content");

      // Set initial states
      gsap.set(items, { opacity: 0, y: 30 });
      gsap.set(dates, { scale: 0.8, opacity: 0 });
      gsap.set(contents, { opacity: 0, y: 20 });
      gsap.set(proseBlocks, { opacity: 0, y: 20 });

      // Progress line animation
      gsap.fromTo(
        timeline.querySelector(".timeline-progress"),
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineSection,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.3,
          },
        }
      );

      // Batch reveal for all timeline items
      ScrollTrigger.batch(items, {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          });
          batch.forEach((item) => {
            item.classList.add("timeline-item--active");
            const date = item.querySelector(".timeline-date");
            const content = item.querySelector(".timeline-content");
            if (date) {
              gsap.to(date, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.4)",
              });
            }
            if (content) {
              gsap.to(content, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            opacity: 0,
            y: 30,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.in",
          });
          batch.forEach((item) => {
            item.classList.remove("timeline-item--active");
            const date = item.querySelector(".timeline-date");
            const content = item.querySelector(".timeline-content");
            if (date) {
              gsap.to(date, {
                scale: 0.8,
                opacity: 0,
                duration: 0.3,
              });
            }
            if (content) {
              gsap.to(content, {
                opacity: 0,
                y: 20,
                duration: 0.3,
              });
            }
          });
        },
      });

      // Batch reveal for prose blocks (softer animation)
      ScrollTrigger.batch(proseBlocks, {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.in",
          });
        },
      });
    },
    { scope: contentRef, dependencies: [post.content, isMobile] }
  );

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
        ref={contentRef}
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />
    </article>
  );
};

export default BlogPost;
