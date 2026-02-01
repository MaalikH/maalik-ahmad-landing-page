import { BlogContent } from "@/app/content/blog";
import BlogCard from "./BlogCard";
import styles from "./Blog.module.scss";

interface BlogProps {
  content: BlogContent;
}

const Blog = ({ content }: BlogProps) => {
  return (
    <div className={styles.blogContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>{content.pageTitle}</h1>
        <p className={styles.subtitle}>{content.pageSubtitle}</p>
      </header>

      <div className={styles.grid}>
        {content.posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
