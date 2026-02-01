import Link from "next/link";
import { BlogPost as BlogPostType } from "@/app/content/blog";
import styles from "./BlogPost.module.scss";

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
  // Content is trusted - generated from local markdown files at build time
  // using remark which produces safe HTML output
  return (
    <article className={styles.article} lang="en">
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
