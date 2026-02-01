import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/app/content/blog";
import styles from "./Blog.module.scss";

interface BlogCardProps {
  post: BlogPost;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      {post.image && (
        <div className={styles.cardImage}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        <time className={styles.cardDate} dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
